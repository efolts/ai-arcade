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
| E | Retune the PA horn, sprinkler, security shutter, or security camera you are aiming at |
| Esc | Pause and release the mouse |
| M | Mute |
| R | Restart. From a wing death, retry that wing |

**LIVE Clicker** — precise cyan bolt, one battery a shot, normal mall. **STATIC Scatter** — drains Signal, pellet spread, reveals cloaks and visor seams. **DEAD AIR Phaser** — drains Signal, faster, a short bolt that phases striped shutters and rite gates. Empty magazines click dry. Kills drop batteries. Amber pads in the court, the radio wing, the service wing, and the Directory recharge a cell (the remote you are holding, plus a little for the others) after a short cooldown. Clearing a room refills every magazine. Signal is still the channel meter. Kills, rite breaks, retunes, and room clears earn XP. You cap at level 6. A station break between wings, and a pause when you level in a fight, each offer three retunes. Channels stay the weapon switch. A wing retry keeps that tuning.

Clear the court and the north door opens into the radio wing. Defeat the Visor Priest and the service door opens. Clear the service wing and the Directory door opens. The Directory is the mall's last channel: listing, index, and gate. The clear card is the mall run, not a single wing. Tessera and the priest are ceramic shells with black glass visors: pearl, gold, and amber attacks. The Directory kiosk uses that same language and no cyan. Cyan stays on the CRT lens, the bolt, and the Signal UI.

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
