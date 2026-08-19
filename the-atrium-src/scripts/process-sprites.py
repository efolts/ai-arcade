#!/usr/bin/env python3
"""Key magenta, pixelize, and slice SNES lock sheets into frames."""

from pathlib import Path
import numpy as np
from PIL import Image

SRC = Path("/opt/cursor/artifacts/assets")
OUT = Path("/workspace/the-atrium-src/src/art/sprites")
OUT.mkdir(parents=True, exist_ok=True)

MAG_R, MAG_G, MAG_B = 255, 0, 255


def key_magenta(im: Image.Image) -> Image.Image:
    arr = np.array(im.convert("RGBA"))
    r, g, b = arr[:, :, 0].astype(int), arr[:, :, 1].astype(int), arr[:, :, 2].astype(int)
    # exact + near magenta (generated art is not #FF00FF)
    mag = (r >= 170) & (b >= 150) & (g <= 100) & (r + b - 2 * g >= 180)
    pink = (r >= 190) & (b >= 130) & (g <= 85)
    arr[:, :, 3] = np.where(mag | pink, 0, 255)
    # drop 1px magenta fringe
    a = arr[:, :, 3]
    neigh = (
        np.pad(a, 1)[0:-2, 1:-1]
        + np.pad(a, 1)[2:, 1:-1]
        + np.pad(a, 1)[1:-1, 0:-2]
        + np.pad(a, 1)[1:-1, 2:]
    )
    fringe = (a > 0) & (neigh < 200) & mag
    arr[fringe | mag | pink, 3] = 0
    return Image.fromarray(arr)


def content_bbox(arr, pad=2):
    a = arr[:, :, 3] > 20
    ys, xs = np.where(a)
    if len(xs) == 0:
        return (0, 0, arr.shape[1], arr.shape[0])
    x0, x1 = max(0, xs.min() - pad), min(arr.shape[1], xs.max() + 1 + pad)
    y0, y1 = max(0, ys.min() - pad), min(arr.shape[0], ys.max() + 1 + pad)
    return x0, y0, x1, y1


def pixelize(im: Image.Image, target_h: int) -> Image.Image:
    w, h = im.size
    if h <= 0:
        return im
    tw = max(12, int(round(w * (target_h / h))))
    # BOX averages faux-pixels into true texels
    small = im.resize((tw, target_h), Image.Resampling.BOX)
    # re-key after downsample (magenta bleed)
    return key_magenta(small)


def quantize(im: Image.Image, colors=24) -> Image.Image:
    rgba = im.convert("RGBA")
    arr = np.array(rgba)
    alpha = arr[:, :, 3]
    rgb = Image.fromarray(arr[:, :, :3], "RGB").quantize(colors=colors, method=Image.Quantize.MEDIANCUT)
    rgb = rgb.convert("RGB")
    out = np.array(rgb.convert("RGBA"))
    out[:, :, 3] = alpha
    # restore zeros
    out[alpha < 20] = 0
    return Image.fromarray(out)


def bands(mask, axis, min_gap=8, min_size=20):
    """Find occupied intervals along axis (0=rows, 1=cols)."""
    proj = mask.any(axis=1 - axis)
    spans = []
    start = None
    for i, v in enumerate(proj):
        if v and start is None:
            start = i
        elif not v and start is not None:
            if i - start >= min_size:
                spans.append((start, i))
            start = None
    if start is not None and len(proj) - start >= min_size:
        spans.append((start, len(proj)))
    return spans


def slice_sheet(im: Image.Image, expected_rows, expected_cols=None):
    arr = np.array(im)
    mask = arr[:, :, 3] > 20
    rows = bands(mask, 0, min_size=30)
    frames = []
    if not rows:
        return frames
    # if too many micro-rows, merge close ones
    merged = [list(rows[0])]
    for a, b in rows[1:]:
        if a - merged[-1][1] < 12:
            merged[-1][1] = b
        else:
            merged.append([a, b])
    rows = [(a, b) for a, b in merged]
    # pick the largest expected_rows bands
    rows = sorted(rows, key=lambda s: s[1] - s[0], reverse=True)[:expected_rows]
    rows = sorted(rows, key=lambda s: s[0])
    for y0, y1 in rows:
        strip = mask[y0:y1]
        cols = bands(strip, 1, min_size=20)
        mergedc = [list(cols[0])] if cols else []
        for a, b in cols[1:]:
            if a - mergedc[-1][1] < 10:
                mergedc[-1][1] = b
            else:
                mergedc.append([a, b])
        cols = [(a, b) for a, b in mergedc]
        if expected_cols:
            cols = sorted(cols, key=lambda s: s[1] - s[0], reverse=True)[:expected_cols]
            cols = sorted(cols, key=lambda s: s[0])
        for x0, x1 in cols:
            cell = arr[y0:y1, x0:x1]
            bx0, by0, bx1, by1 = content_bbox(cell, pad=1)
            frames.append(Image.fromarray(cell[by0:by1, bx0:bx1]))
    return frames


def pad_to(im, w, h):
    out = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    x = (w - im.size[0]) // 2
    y = h - im.size[1]  # feet on the bottom
    if y < 0:
        y = 0
    out.alpha_composite(im, (max(0, x), y))
    return out


def extract_head(im: Image.Image, frac=0.38):
    w, h = im.size
    head_h = max(8, int(h * frac))
    return im.crop((0, 0, w, head_h))


def stamp_head(body: Image.Image, head: Image.Image):
    """Keep CRT head camera-upright: overlay idle head on the top of the frame."""
    out = body.copy()
    # scale head to body width-ish
    tw = max(8, int(body.size[0] * 0.72))
    th = max(8, int(round(head.size[1] * (tw / max(1, head.size[0])))))
    h = head.resize((tw, th), Image.Resampling.NEAREST)
    x = (body.size[0] - tw) // 2
    y = 0
    # clear old head pixels in the top band so we don't double-stack
    arr = np.array(out)
    cut = min(arr.shape[0], th + 1)
    arr[:cut, :, 3] = 0
    out = Image.fromarray(arr)
    out.alpha_composite(h, (x, y))
    return out


def process_idle(name, src, target_h):
    im = key_magenta(Image.open(src))
    arr = np.array(im)
    x0, y0, x1, y1 = content_bbox(arr, pad=4)
    im = Image.fromarray(arr[y0:y1, x0:x1])
    im = pixelize(im, target_h)
    im = quantize(im, 20)
    im.save(OUT / name)
    print("idle", name, im.size)
    return im


def save_frames(prefix, frames, dirs, per_dir, target_h, upright_head=None):
    # normalize height then pad to max w
    pix = [pixelize(quantize(f, 18), target_h) for f in frames]
    if not pix:
        print("NO FRAMES", prefix)
        return {}
    mw = max(p.size[0] for p in pix)
    mh = max(p.size[1] for p in pix)
    out = {}
    i = 0
    for d in dirs:
        out[d] = []
        for n in range(per_dir):
            if i >= len(pix):
                break
            fr = pad_to(pix[i], mw, mh)
            if upright_head is not None:
                fr = stamp_head(fr, upright_head)
            path = OUT / f"{prefix}-{d}-{n}.png"
            fr.save(path)
            out[d].append(path.name)
            i += 1
        # pad missing with last
        while len(out[d]) < per_dir and out[d]:
            out[d].append(out[d][-1])
    print(prefix, "frames", i, "of", len(pix), "size", mw, mh, "dirs", {k: len(v) for k, v in out.items()})
    return out


def main():
    crt_idle = process_idle("crt-idle.png", SRC / "crt-head-idle.png", 56)
    tes_idle = process_idle("tessera-idle.png", SRC / "tessera-idle.png", 52)
    crt_head = extract_head(crt_idle, 0.40)
    crt_head.save(OUT / "crt-head.png")

    crt_sheet = key_magenta(Image.open(SRC / "crt-head-walk.png"))
    crt_frames = slice_sheet(crt_sheet, expected_rows=3)
    print("sliced crt walk", len(crt_frames), [f.size for f in crt_frames])
    # expected: down x4, up x3, right x3, left x3  OR down+up on row1
    # If we got ~13 frames in 3 rows: 7 + 3 + 3
    if len(crt_frames) >= 10:
        # first 4 down, next 3 up, next 3 right, rest left
        order = []
        # We don't know exact count per row. Group by saving all then assign by count.
        # Heuristic from spec: 4 down, 3 up, 3 right, 3 left
        down, rest = crt_frames[:4], crt_frames[4:]
        up, rest = rest[:3], rest[3:]
        right, left = rest[:3], rest[3:6]
        grouped = {"down": down, "up": up, "right": right, "left": left}
        # flatten in dir order for save_frames
        flat = []
        dirs = ["down", "up", "right", "left"]
        counts = []
        for d in dirs:
            counts.append(len(grouped[d]) or 1)
            flat.extend(grouped[d] or [crt_idle])
        # save individually
        for d, frames in grouped.items():
            if not frames:
                frames = [crt_idle]
            pix = [pad_to(pixelize(quantize(f, 18), 56), 36, 56) for f in frames]
            for n, fr in enumerate(pix):
                fr.save(OUT / f"crt-{d}-{n}.png")
            # duplicate to 3 frames
            last = pix[-1]
            for n in range(len(pix), 3):
                last.save(OUT / f"crt-{d}-{n}.png")
            print("crt", d, len(pix))
    else:
        print("fallback crt walk from idle")
        for d in ("down", "up", "right", "left"):
            for n in range(3):
                crt_idle.save(OUT / f"crt-{d}-{n}.png")

    tes_sheet = key_magenta(Image.open(SRC / "tessera-walk.png"))
    tes_frames = slice_sheet(tes_sheet, expected_rows=4, expected_cols=3)
    print("sliced tessera walk", len(tes_frames), [f.size for f in tes_frames])
    tes_dirs = ["down", "up", "right", "left"]
    if len(tes_frames) >= 8:
        idx = 0
        for d in tes_dirs:
            chunk = tes_frames[idx : idx + 3] or [tes_idle]
            idx += 3
            pix = [pad_to(pixelize(quantize(f, 16), 52), 34, 52) for f in chunk]
            for n, fr in enumerate(pix):
                fr.save(OUT / f"tessera-{d}-{n}.png")
            last = pix[-1]
            for n in range(len(pix), 3):
                last.save(OUT / f"tessera-{d}-{n}.png")
            print("tessera", d, len(pix))
    else:
        for d in tes_dirs:
            for n in range(3):
                tes_idle.save(OUT / f"tessera-{d}-{n}.png")

    # packed atlases: 4 rows (down, up, left, right) x 3 frames
    def pack(prefix, cw, ch, dirs=("down", "up", "left", "right")):
        atlas = Image.new("RGBA", (cw * 3, ch * 4), (0, 0, 0, 0))
        for ri, d in enumerate(dirs):
            for ci in range(3):
                n = min(ci, 2)
                # crt-down has 4 frames; use 0,1,2
                fp = OUT / f"{prefix}-{d}-{n}.png"
                if not fp.exists():
                    fp = OUT / f"{prefix}-idle.png"
                fr = Image.open(fp).convert("RGBA")
                fr = pad_to(fr, cw, ch)
                atlas.paste(fr, (ci * cw, ri * ch), fr)
        atlas.save(OUT / f"{prefix}-atlas.png")
        print("atlas", prefix, atlas.size)

    pack("crt", 40, 56)
    pack("tessera", 36, 52)
    # if idle tessera is too skinny, replace with down-0
    tes = Image.open(OUT / "tessera-idle.png")
    if tes.size[0] < 28:
        Image.open(OUT / "tessera-down-0.png").save(OUT / "tessera-idle.png")
        print("replaced skinny tessera idle")
    print("wrote", sorted(p.name for p in OUT.iterdir()))


if __name__ == "__main__":
    main()
