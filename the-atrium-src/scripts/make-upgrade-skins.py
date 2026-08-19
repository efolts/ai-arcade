#!/usr/bin/env python3
"""SNES 1x CRT-head upgrade skins on chroma-key magenta. Attachments never landed."""
from pathlib import Path
from PIL import Image, ImageDraw

MAG = (255, 0, 255, 255)
W, H = 40, 60
OUT = Path(__file__).resolve().parents[1] / "src/art/sprites"


def new():
    im = Image.new("RGBA", (W, H), MAG)
    return im, ImageDraw.Draw(im)


def px(d, x, y, c):
    if 0 <= x < W and 0 <= y < H:
        d.point((x, y), c)


def box(d, x0, y0, x1, y1, c):
    d.rectangle([x0, y0, x1, y1], fill=c)


def crt_head(d, y=6):
    wood = (92, 58, 32, 255)
    wood2 = (62, 38, 20, 255)
    wood3 = (120, 78, 44, 255)
    screen = (8, 10, 12, 255)
    cyan = (64, 246, 255, 255)
    cyan2 = (180, 255, 248, 255)
    box(d, 10, y, 29, y + 16, wood)
    box(d, 11, y + 1, 28, y + 15, wood3)
    box(d, 12, y + 3, 27, y + 13, screen)
    # vents
    for i in range(3):
        box(d, 11, y + 4 + i * 3, 12, y + 5 + i * 3, wood2)
    # cyan eyes
    box(d, 15, y + 6, 17, y + 9, cyan)
    box(d, 22, y + 6, 24, y + 9, cyan)
    px(d, 16, y + 7, cyan2)
    px(d, 23, y + 7, cyan2)


def trench(d, coat, coat2, lining=None):
    box(d, 11, 23, 28, 46, coat)
    box(d, 12, 24, 27, 44, coat2)
    box(d, 17, 23, 22, 40, (18, 18, 22, 255))
    if lining:
        box(d, 11, 45, 28, 46, lining)
        box(d, 11, 23, 12, 44, lining)
        box(d, 27, 23, 28, 44, lining)
    # hands
    hand = (168, 160, 148, 255)
    box(d, 7, 30, 10, 34, hand)
    box(d, 29, 30, 32, 34, hand)
    # legs
    box(d, 14, 46, 18, 54, (16, 16, 18, 255))
    box(d, 21, 46, 25, 54, (16, 16, 18, 255))


def remotes(d, big=False, dishes=False, quad=False):
    body = (150, 154, 160, 255)
    dark = (70, 74, 80, 255)
    red = (200, 40, 40, 255)
    cyan = (64, 246, 255, 255)
    w = 7 if big else 5
    for sx, flip in ((2, False), (31, True)):
        box(d, sx, 28, sx + w, 36, body)
        box(d, sx + 1, 29, sx + w - 1, 35, dark)
        if quad:
            for i, ox in enumerate((0, 2, 0, 2)):
                oy = 0 if i < 2 else 2
                px(d, sx + 2 + ox, 30 + oy, cyan)
        elif dishes:
            box(d, sx + 2, 26, sx + 4, 27, (190, 196, 200, 255))
            px(d, sx + 3, 25, cyan)
            px(d, sx + (2 if not flip else w - 2), 32, cyan)
        else:
            px(d, sx + (2 if not flip else w - 2), 30, red)
            px(d, sx + 3, 33, (80, 90, 200, 255))


def armor_bits(d, silver=True, cyan_trim=False):
    pad = (196, 200, 208, 255) if silver else (120, 80, 48, 255)
    trim = (64, 246, 255, 255) if cyan_trim else (40, 42, 48, 255)
    box(d, 9, 23, 14, 28, pad)
    box(d, 25, 23, 30, 28, pad)
    box(d, 9, 23, 14, 24, trim)
    box(d, 25, 23, 30, 24, trim)
    # bandolier
    for i in range(8):
        px(d, 20 - i, 25 + i, (110, 72, 40, 255))
        px(d, 21 - i, 25 + i, (150, 100, 56, 255))
    # shins
    box(d, 13, 50, 19, 56, pad)
    box(d, 20, 50, 26, 56, pad)
    box(d, 13, 55, 19, 56, trim)
    box(d, 20, 55, 26, 56, trim)


def boots(d, cyan_toes=False):
    box(d, 13, 54, 19, 58, (28, 28, 32, 255))
    box(d, 20, 54, 26, 58, (28, 28, 32, 255))
    if cyan_toes:
        box(d, 14, 57, 18, 58, (64, 246, 255, 255))
        box(d, 21, 57, 25, 58, (64, 246, 255, 255))


def save(im, name):
    path = OUT / name
    im.save(path)
    print("wrote", path, im.size)


def armor():
    im, d = new()
    crt_head(d)
    trench(d, (36, 38, 42, 255), (24, 26, 30, 255))
    armor_bits(d, silver=True)
    remotes(d, big=False)
    boots(d)
    save(im, "crt-armor-snes.png")


def weapon():
    im, d = new()
    crt_head(d)
    # tan trench + cyan tie
    trench(d, (140, 108, 72, 255), (110, 82, 52, 255))
    box(d, 18, 24, 21, 36, (64, 246, 255, 255))
    remotes(d, big=True, dishes=True)
    boots(d)
    save(im, "crt-weapon-snes.png")


def fullkit():
    im, d = new()
    crt_head(d)
    trench(d, (22, 24, 28, 255), (14, 16, 18, 255), lining=(64, 246, 255, 255))
    armor_bits(d, silver=True, cyan_trim=True)
    remotes(d, big=True, quad=True)
    boots(d, cyan_toes=True)
    save(im, "crt-upgraded-snes.png")


if __name__ == "__main__":
    OUT.mkdir(parents=True, exist_ok=True)
    armor()
    weapon()
    fullkit()
