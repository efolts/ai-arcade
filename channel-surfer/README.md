# CHANNEL SURFER

Browser FPS for the Rapid City Digital arcade. Static build lives in this folder so Cloudflare Pages can serve it at `/channel-surfer/`.

The FPS where changing TV channels changes combat and the level. Design handoff: `docs/channel-surfer-design.md`.

## Play

Open `index.html` (or the Pages URL ending in `/channel-surfer/`). The playfield is **960×780** and letterboxes to the cabinet iframe without stretching or scrolling.

## Controls

| Input | Action |
| --- | --- |
| Click or Enter | Start, resume, replay |
| WASD | Move |
| Mouse | Look |
| Click | Fire |
| 1 / 2 / 3 | LIVE / STATIC / DEAD AIR |
| Wheel or Q | Cycle channels |
| Esc | Pause and release the mouse |
| M | Mute |

**LIVE** — precise cyan bolt, normal mall. **STATIC** — drains Signal, spread shot, reveals cloaks and visor seams. **DEAD AIR** — drains Signal, faster, phases through striped shutters, cannot fire.

Cyan is CRT Head only. Tessera are pearl, black, and amber.

## Rebuild

Source is `channel-surfer-src/`. Do not edit hashed files in `channel-surfer/assets/` by hand.

```bash
cd channel-surfer-src
npm install
npm test
npm run build
```

Vite emits this folder with `base: './'` so relative asset paths work under `/channel-surfer/` on Pages.

Best time is stored in `localStorage` key `channel-surfer-best`. No network calls.
