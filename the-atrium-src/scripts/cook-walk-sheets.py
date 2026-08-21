#!/usr/bin/env python3
"""Cook Eric's 4x4 CRT walk sheets to 1x game size.

Magenta #FF00FF (and the nearby gen-magenta) only — never flood-key the
dark trench. BOX downsample to ~56px height, feet on the cell floor.
"""
from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SPR = ROOT / "src/art/sprites"
HI = Path("/opt/cursor/artifacts/assets")
MAG = (255, 0, 255, 255)
TARGET_H = 56
DIRS = ("down", "left", "right", "up")

SHEETS = {
    "base": "crt-base-walk.png",
    "armor": "crt-armor-walk.png",
    "weapon": "crt-weapon-walk.png",
    "full": "crt-full-walk.png",
}
STILLS = {
    "armor": "crt-armor-snes.png",
    "weapon": "crt-weapon-snes.png",
    "full": "crt-upgraded-snes.png",
}


def key_magenta_only(im: Image.Image) -> Image.Image:
    arr = np.array(im.convert("RGBA"))
    r = arr[:, :, 0].astype(np.int32)
    g = arr[:, :, 1].astype(np.int32)
    b = arr[:, :, 2].astype(np.int32)
    a = arr[:, :, 3]
    dist2 = (r - 255) ** 2 + (g - 0) ** 2 + (b - 255) ** 2
    score = r + b - 2 * g
    keyed = (
        (a < 8)
        | ((r > 190) & (g < 90) & (b > 190))
        | (dist2 < 170 * 170)
        | ((g < 55) & (r >= 70) & (b >= 50) & (score > 90))
        | ((r >= 140) & (b >= 100) & (g < 80) & (score > 160))
    )
    out = arr.copy()
    out[keyed] = (0, 0, 0, 0)
    return Image.fromarray(out, "RGBA")


def content_bbox(im: Image.Image, pad=1):
    arr = np.array(im)
    ys, xs = np.where(arr[:, :, 3] > 20)
    if len(xs) == 0:
        return (0, 0, im.size[0], im.size[1])
    x0 = max(0, int(xs.min()) - pad)
    y0 = max(0, int(ys.min()) - pad)
    x1 = min(im.size[0], int(xs.max()) + 1 + pad)
    y1 = min(im.size[1], int(ys.max()) + 1 + pad)
    return (x0, y0, x1, y1)


def pixelize(im: Image.Image, target_h=TARGET_H) -> Image.Image:
    keyed = key_magenta_only(im)
    box = content_bbox(keyed)
    crop = keyed.crop(box)
    if crop.size[1] <= 0:
        return crop
    tw = max(12, int(round(crop.size[0] * (target_h / crop.size[1]))))
    small = crop.resize((tw, target_h), Image.Resampling.BOX)
    return key_magenta_only(small)


def slice_sheet(src: Path):
    im = Image.open(src).convert("RGB")
    w, h = im.size
    fw, fh = w // 4, h // 4
    frames = {d: [] for d in DIRS}
    for r, d in enumerate(DIRS):
        for c in range(4):
            cell = im.crop((c * fw, r * fh, (c + 1) * fw, (r + 1) * fh))
            frames[d].append(pixelize(cell))
    return frames


def pack(frames, cell_w, cell_h=TARGET_H):
    sheet = Image.new("RGBA", (cell_w * 4, cell_h * 4), MAG)
    packed = {d: [] for d in DIRS}
    for r, d in enumerate(DIRS):
        for c, fr in enumerate(frames[d]):
            cell = Image.new("RGBA", (cell_w, cell_h), MAG)
            x = (cell_w - fr.size[0]) // 2
            y = cell_h - fr.size[1]
            cell.paste(fr, (x, y), fr)
            # restore exact magenta behind any leftover fringe
            arr = np.array(cell)
            mag = (arr[:, :, 3] < 8)
            arr[mag] = MAG
            cell = Image.fromarray(arr, "RGBA")
            sheet.paste(cell, (c * cell_w, r * cell_h))
            packed[d].append(cell)
    return sheet, packed


def face_hint(cell: Image.Image):
    """Crude: which side holds more non-magenta in the head band."""
    arr = np.array(cell)
    h, w = arr.shape[:2]
    band = arr[2 : max(3, h // 3), :, :]
    solid = band[:, :, 3] > 20
    left = int(solid[:, : w // 2].sum())
    right = int(solid[:, w // 2 :].sum())
    return left, right


def cook_named(src_name, out_name, target_h, min_w=36):
    src = HI / src_name
    if not src.exists():
        src = SPR / src_name
    print("cook", out_name, "from", src, "h", target_h)
    frames = slice_sheet(src)
    # re-pixelize if target differs from module default
    if target_h != TARGET_H:
        im = Image.open(src).convert("RGB")
        w, h = im.size
        fw, fh = w // 4, h // 4
        frames = {d: [] for d in DIRS}
        for r, d in enumerate(DIRS):
            for c in range(4):
                cell = im.crop((c * fw, r * fh, (c + 1) * fw, (r + 1) * fh))
                frames[d].append(pixelize(cell, target_h))
    max_w = max(fr.size[0] for d in DIRS for fr in frames[d])
    cell_w = max(min_w, max_w + 2)
    # Generated Tessera sheet was DOWN, RIGHT, LEFT, UP — store visual L/R.
    if "tessera" in out_name and frames["left"] and frames["right"]:
        frames["left"], frames["right"] = frames["right"], frames["left"]
    sheet, packed = pack(frames, cell_w, target_h)
    out = SPR / out_name
    sheet.save(out)
    print(" wrote", out, sheet.size, "cell", cell_w, target_h)
    for d in ("left", "right"):
        lo, hi = face_hint(packed[d][0])
        print(f"  {d} idle mass L/R {lo}/{hi}")
    return packed


def main():
    SPR.mkdir(parents=True, exist_ok=True)
    cook_named("tessera-walk.png", "tessera-walk.png", 52, min_w=36)


if __name__ == "__main__":
    main()
