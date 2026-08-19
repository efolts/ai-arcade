# THE ATRIUM — KRCD 7 LIVE

Twin-stick horde shooter for the Rapid City Digital arcade cabinet. Static build lives in this folder so Cloudflare Pages can serve it at `/the-atrium/`.

## Play

Open `index.html` (or https://ai-arcade-a2e.pages.dev/the-atrium/). Native playfield is **960×780** and letterboxes to fit the cabinet iframe or fullscreen without stretching.

## Controls

| Device | Move | Aim / fire |
| --- | --- | --- |
| Keyboard + mouse | **WASD** | Mouse aim, hold **LMB** (or **Space** / **Z**) |
| Keyboard only | **Arrow keys** | Auto-aims the nearest bot and auto-fires |
| Gamepad | Left stick | Right stick aim; fire when the stick is pushed or use RT / RB |
| Touch | Left virtual stick | Right virtual stick (push to shoot) |

**M** mutes the synthesized KRCD 7 feed. High score is stored in `localStorage` key `the-atrium-hi`.

## Waves

Bots pour from the four storefront gates (N/S/E/W). Later waves add rushers, shotgunners, fat security units, and a **Directory** boss (waves 6, 12, 18…). Pickups: spread, rapid, speed, smart bomb, extra life.

## Rebuild

Source is `the-atrium-src/`. Do not edit hashed files in `the-atrium/assets/` by hand.

```bash
cd the-atrium-src
npm install
npm run build
```

Vite emits this folder with `base: './'` so relative asset paths work under `/the-atrium/` on Pages.

No Unity, Unreal, Phaser, or Pixi — custom HTML5 Canvas and Web Audio.
