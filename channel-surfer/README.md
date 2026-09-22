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
| E | Retune the PA horn you are aiming at |
| Esc | Pause and release the mouse |
| M | Mute |
| R | Restart. From a radio-wing death, retry that wing |

**LIVE** — precise cyan bolt, normal mall. **STATIC** — drains Signal, spread shot, reveals cloaks and visor seams. **DEAD AIR** — drains Signal, faster, phases through striped shutters and the priest's veil, cannot fire.

Clear the court and the north door opens into the radio wing. The Visor Priest broadcasts three rites. Each one wants a different channel. Tessera and the priest are ceramic shells with black glass visors: pearl, gold, and amber attacks. Cyan stays on the CRT lens, the bolt, and the Signal UI.

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
