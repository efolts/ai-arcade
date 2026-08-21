#!/usr/bin/env python3
"""Dress the 1x CRT player into armor / weapon / full 4-dir sheets.

Attachments never landed on disk. These sheets are the existing CRT idle
frames (wood TV + trench + remotes) with kit painted on — same family and
scale, chroma-key magenta. Row: DOWN, LEFT, RIGHT, UP (visual facing).

Named CRT left/right files are swapped in this repo; we pick the frames
whose pixels actually face those ways.
"""
from pathlib import Path

from PIL import Image

SPR = Path(__file__).resolve().parents[1] / "src/art/sprites"
MAG = (255, 0, 255, 255)
CELL_W, CELL_H = 48, 56

# Gameplay visual facing → on-disk CRT idle (filenames are backwards).
VISUAL = {
    "down": "crt-down-0.png",
    "left": "crt-right-0.png",  # file "right" faces west
    "right": "crt-left-0.png",  # file "left" faces east
    "up": "crt-up-0.png",
}
ORDER = ("down", "left", "right", "up")

SILVER = (188, 192, 200, 255)
SILVER_D = (132, 136, 144, 255)
SILVER_H = (226, 228, 232, 255)
BAND = (118, 76, 42, 255)
BAND_H = (158, 104, 58, 255)
CYAN = (80, 246, 255, 255)
CYAN_H = (200, 255, 250, 255)
SCREEN = (8, 10, 12, 255)
CANNON = (128, 132, 140, 255)
CANNON_D = (68, 72, 80, 255)
CANNON_H = (176, 180, 188, 255)
INK = (16, 14, 12, 255)


def clamp(v, lo, hi):
    return lo if v < lo else hi if v > hi else v


def load_visual(name):
    return Image.open(SPR / VISUAL[name]).convert("RGBA")


def on_magenta(src):
    out = Image.new("RGBA", (CELL_W, CELL_H), MAG)
    ox = (CELL_W - src.width) // 2
    out.paste(src, (ox, 0), src)
    return out, ox


def px(im, x, y, c):
    if 0 <= x < im.size[0] and 0 <= y < im.size[1]:
        im.putpixel((x, y), c)


def box(im, x0, y0, x1, y1, c):
    for y in range(y0, y1 + 1):
        for x in range(x0, x1 + 1):
            px(im, x, y, c)


def disc(im, cx, cy, r, c):
    r2 = r * r
    for y in range(cy - r, cy + r + 1):
        for x in range(cx - r, cx + r + 1):
            if (x - cx) * (x - cx) + (y - cy) * (y - cy) <= r2:
                px(im, x, y, c)


def is_cyanish(c):
    r, g, b, a = c
    return a > 20 and g > 150 and b > 140 and g >= r - 20


def is_wood(c):
    r, g, b, a = c
    return a > 20 and r > 70 and r > g + 12 and b < 70


def is_grey_coat(c):
    r, g, b, a = c
    if a < 20:
        return False
    if is_cyanish(c) or is_wood(c):
        return False
    lum = r + g + b
    return 70 < lum < 280 and abs(r - g) < 28 and abs(g - b) < 28


def restyle_face(im, kind):
    """Approved upgrade face: black screen + cyan circle eyes (front views)."""
    w, h = im.size
    pix = im.load()
    cells = []
    for y in range(1, 20):
        for x in range(w):
            if is_cyanish(pix[x, y]):
                cells.append((x, y))
    if len(cells) < 8:
        return
    xs = [p[0] for p in cells]
    ys = [p[1] for p in cells]
    x0, x1, y0, y1 = min(xs), max(xs), min(ys), max(ys)
    for x, y in cells:
        pix[x, y] = SCREEN
    # pad screen a bit darker
    for y in range(y0, y1 + 1):
        for x in range(x0, x1 + 1):
            if im.getpixel((x, y))[3] > 20 and is_cyanish(im.getpixel((x, y))):
                pix[x, y] = SCREEN
    cx = (x0 + x1) // 2
    cy = (y0 + y1) // 2
    span = max(3, (x1 - x0) // 3)
    if kind == "full":
        for x in range(x0 - 1, x1 + 2):
            px(im, x, y0 - 1, CYAN)
            px(im, x, y1 + 1, CYAN)
        for y in range(y0, y1 + 1):
            px(im, x0 - 1, y, CYAN)
            px(im, x1 + 1, y, CYAN)
        box(im, cx - span, cy, cx - span + 1, cy + 1, CYAN)
        box(im, cx + span - 1, cy, cx + span, cy + 1, CYAN)
        px(im, cx - span, cy, CYAN_H)
        px(im, cx + span, cy, CYAN_H)
    else:
        box(im, cx - span, cy, cx - span + 1, cy + 1, CYAN)
        box(im, cx + span - 1, cy, cx + span, cy + 1, CYAN)
        px(im, cx - span, cy, CYAN_H)
        px(im, cx + span, cy, CYAN_H)


def tan_coat(im):
    pix = im.load()
    w, h = im.size
    for y in range(18, 50):
        for x in range(w):
            c = pix[x, y]
            if not is_grey_coat(c):
                continue
            r, g, b, a = c
            lum = (r + g + b) / 3.0
            t = clamp(lum / 72.0, 0.35, 1.55)
            nr = int(clamp(88 + t * 52, 70, 190))
            ng = int(clamp(64 + t * 40, 48, 150))
            nb = int(clamp(40 + t * 22, 28, 110))
            pix[x, y] = (nr, ng, nb, a)


def cyan_lapels(im):
    """1px cyan trim on collar / coat opening — not a striped shirt."""
    pix = im.load()
    w, h = im.size
    mid = w // 2
    for y in range(20, 26):
        for x in (mid - 2, mid + 1):
            if 0 <= x < w and is_grey_coat(pix[x, y]):
                pix[x, y] = CYAN
    for y in (45, 46):
        xs = [x for x in range(w) if is_grey_coat(pix[x, y])]
        if xs:
            pix[xs[0], y] = CYAN
            pix[xs[-1], y] = CYAN


def pauldrons(im, facing):
    w, h = im.size
    pix = im.load()
    # find shoulder y: first wide coat row
    sy = 20
    for y in range(18, 28):
        n = sum(1 for x in range(w) if is_grey_coat(pix[x, y]))
        if n >= 8:
            sy = y
            break
    xs = [x for x in range(w) if is_grey_coat(pix[x, sy])]
    if not xs:
        return
    lo, hi = min(xs), max(xs)
    spots = []
    if facing == "down":
        spots = [(lo + 1, sy + 1), (hi - 1, sy + 1)]
    elif facing == "up":
        spots = [(lo + 2, sy + 1), (hi - 2, sy + 1)]
    elif facing == "left":
        spots = [(lo + 2, sy + 1)]
    else:
        spots = [(hi - 2, sy + 1)]
    for cx, cy in spots:
        box(im, cx - 2, cy - 1, cx + 2, cy + 1, SILVER_D)
        box(im, cx - 1, cy - 1, cx + 1, cy, SILVER)
        px(im, cx, cy - 1, SILVER_H)


def shins(im, facing):
    """Solid greave plates above the boots — not striped legs."""
    w, h = im.size
    pix = im.load()
    y0, y1 = 46, 49
    xs = [x for x in range(w) if pix[x, y0][3] > 20 and pix[x, y0][:3] != MAG[:3]]
    if len(xs) < 4:
        return
    groups = []
    start = prev = xs[0]
    for x in xs[1:] + [999]:
        if x > prev + 1:
            groups.append((start, prev))
            start = x
        prev = x
    for a, b in groups[:2]:
        box(im, a, y0, b, y1, SILVER_D)
        box(im, a + 1, y0, b - 1, y1 - 1, SILVER)
        px(im, (a + b) // 2, y0, SILVER_H)


def bandolier(im, facing):
    w, h = im.size
    pix = im.load()
    if facing == "up":
        # strap across back
        for i in range(10):
            x = w // 2 - 4 + i
            y = 22 + (i // 3)
            if is_grey_coat(pix[x, y]) or pix[x, y][3] > 20:
                px(im, x, y, BAND if i % 2 else BAND_H)
        return
    # right shoulder → left hip on front/side
    if facing == "left":
        x0, y0, x1, y1 = 22, 22, 14, 36
    elif facing == "right":
        x0, y0, x1, y1 = 24, 22, 32, 36
    else:
        x0, y0, x1, y1 = 30, 22, 16, 38
    steps = 14
    for i in range(steps):
        t = i / (steps - 1)
        x = int(round(x0 + (x1 - x0) * t))
        y = int(round(y0 + (y1 - y0) * t))
        px(im, x, y, BAND_H if i % 3 == 0 else BAND)
        px(im, x + 1, y, BAND)
    # buckle
    bx, by = (x0 + x1) // 2, (y0 + y1) // 2
    box(im, bx - 1, by, bx + 1, by + 1, SILVER)


def dish(im, facing):
    w = im.size[0]
    if facing == "up":
        cx, cy = w // 2, 2
    elif facing == "left":
        cx, cy = 16, 2
    elif facing == "right":
        cx, cy = 32, 2
    else:
        cx, cy = w // 2, 1
    box(im, cx - 3, cy + 2, cx + 3, cy + 3, CANNON)
    box(im, cx - 2, cy + 1, cx + 2, cy + 1, SILVER)
    px(im, cx, cy, SILVER_H)
    px(im, cx - 2, cy, CYAN)
    px(im, cx + 2, cy, CYAN)


def remotes_or_cannons(im, facing, mode):
    """mode: remotes | dishes | big"""
    w, h = im.size
    pix = im.load()
    # waist-level hands: first/last solid pixels around y=32
    y = 32
    xs = [x for x in range(w) if pix[x, y][3] > 20 and pix[x, y][:3] != MAG[:3]]
    if not xs:
        return
    lo, hi = min(xs), max(xs)
    if facing == "left":
        hands = [(lo - 1, y)]
    elif facing == "right":
        hands = [(hi + 1, y)]
    else:
        hands = [(lo - 1, y), (hi + 1, y)]

    for hx, hy in hands:
        if mode == "remotes":
            box(im, hx - 1, hy - 2, hx + 2, hy + 3, CANNON_D)
            box(im, hx, hy - 1, hx + 1, hy + 2, CANNON)
            px(im, hx + 1, hy - 1, (200, 48, 48, 255))
            px(im, hx, hy + 1, (70, 90, 200, 255))
        elif mode == "dishes":
            box(im, hx - 2, hy - 3, hx + 3, hy + 3, CANNON_D)
            box(im, hx - 1, hy - 2, hx + 2, hy + 2, CANNON)
            box(im, hx - 1, hy - 5, hx + 2, hy - 4, SILVER)
            px(im, hx, hy - 6, CYAN)
            # muzzle
            if facing == "left":
                box(im, hx - 4, hy - 1, hx - 3, hy + 1, CYAN)
                px(im, hx - 4, hy, CYAN_H)
            elif facing == "right":
                box(im, hx + 4, hy - 1, hx + 5, hy + 1, CYAN)
                px(im, hx + 5, hy, CYAN_H)
            else:
                box(im, hx, hy + 4, hx + 1, hy + 5, CYAN)
                px(im, hx, hy + 5, CYAN_H)
        else:  # big dual cannons
            box(im, hx - 3, hy - 4, hx + 4, hy + 4, CANNON_D)
            box(im, hx - 2, hy - 3, hx + 3, hy + 3, CANNON)
            box(im, hx - 1, hy - 1, hx + 2, hy + 1, CANNON_H)
            px(im, hx, hy, CYAN)
            if facing == "left":
                box(im, hx - 5, hy - 2, hx - 4, hy + 2, SCREEN)
                px(im, hx - 5, hy - 1, CYAN)
                px(im, hx - 4, hy - 1, CYAN)
                px(im, hx - 5, hy + 1, CYAN)
                px(im, hx - 4, hy + 1, CYAN)
            elif facing == "right":
                box(im, hx + 5, hy - 2, hx + 6, hy + 2, SCREEN)
                px(im, hx + 5, hy - 1, CYAN)
                px(im, hx + 6, hy - 1, CYAN)
                px(im, hx + 5, hy + 1, CYAN)
                px(im, hx + 6, hy + 1, CYAN)
            else:
                box(im, hx - 1, hy + 5, hx + 2, hy + 6, SCREEN)
                px(im, hx - 1, hy + 5, CYAN)
                px(im, hx + 1, hy + 5, CYAN)
                px(im, hx - 1, hy + 6, CYAN)
                px(im, hx + 1, hy + 6, CYAN)


def dress(facing, kit):
    src = load_visual(facing)
    im, _ = on_magenta(src)
    if kit == "weapon":
        tan_coat(im)
        restyle_face(im, "weapon")
        dish(im, facing)
        remotes_or_cannons(im, facing, "dishes")
    elif kit == "armor":
        restyle_face(im, "armor")
        pauldrons(im, facing)
        bandolier(im, facing)
        shins(im, facing)
        remotes_or_cannons(im, facing, "remotes")
    else:
        restyle_face(im, "full")
        cyan_lapels(im)
        pauldrons(im, facing)
        bandolier(im, facing)
        shins(im, facing)
        remotes_or_cannons(im, facing, "big")
        dish(im, facing)
    return im


def sheet_for(kit):
    sheet = Image.new("RGBA", (CELL_W * 4, CELL_H), MAG)
    frames = []
    for i, facing in enumerate(ORDER):
        fr = dress(facing, kit)
        sheet.paste(fr, (i * CELL_W, 0))
        frames.append(fr)
    return sheet, frames


def main():
    SPR.mkdir(parents=True, exist_ok=True)
    names = {
        "armor": ("skin-armor-4dir.png", "crt-armor-snes.png"),
        "weapon": ("skin-weapon-4dir.png", "crt-weapon-snes.png"),
        "full": ("skin-full-4dir.png", "crt-upgraded-snes.png"),
    }
    for kit, (sheet_name, look_name) in names.items():
        sheet, frames = sheet_for(kit)
        sheet.save(SPR / sheet_name)
        frames[0].save(SPR / look_name)  # down frame as the posted-look stand-in
        print("wrote", SPR / sheet_name, sheet.size)
        print("wrote", SPR / look_name, frames[0].size)


if __name__ == "__main__":
    main()
