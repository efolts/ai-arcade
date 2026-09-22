# CHANNEL SURFER

The FPS where changing TV channels changes combat and the level.

Phase 1 is a single-arena vertical slice in the KRCD dead mall. Later phases add rooms, hijacks, and bosses on the hooks left in `channel-surfer-src/src/level.js`. This document is the handoff. It matches the slice that ships in this repo.

## Promise

CRT Head is alone in the abandoned KRCD mall court with a weaponized remote. Tessera bots hold the broadcast. The remote does not swap guns. It changes the channel the court is tuned to, and the channel is the rules of the room:

- **LIVE** is the physical mall. Precise cyan fire, normal collision, Signal comes back.
- **STATIC** is the noisy carrier. Short-range spread, cloaked things appear, visor seams open, Signal drains.
- **DEAD AIR** is the gap between stations. Faster movement, striped shutters stop being solid, the remote will not fire, Signal drains.

Cyan is CRT Head only (bolt, remote lens, HUD). Tessera stay pearl, black, and amber. No logos on the bots.

## Controls

| Input | Action |
| --- | --- |
| Click or Enter | Start, resume, replay |
| Mouse | Look (pointer lock) |
| WASD | Move |
| Click | Fire |
| 1 / 2 / 3 | LIVE / STATIC / DEAD AIR |
| Mouse wheel or Q | Cycle channels |
| Esc | Pause and release the mouse |
| M | Mute |
| R | Restart from pause, clear, or death |

Pointer lock is requested on the user gesture that enters play. If the cabinet iframe refuses lock, mouse deltas still look while the cursor is over the stage, and every click asks for lock again. Focus loss and leaving pointer lock pause the sim. The stage is a fixed 960×780 surface, letterboxed to the iframe. The page does not scroll.

There is no jump and no sprint. Speed belongs to DEAD AIR.

## Channel rules

Numbers live in `TUNING` inside `channel-surfer-src/src/sim.js`. The sim is pure: no Three.js, no DOM. The renderer only displays it.

| | LIVE | STATIC | DEAD AIR |
| --- | --- | --- | --- |
| Fire | Hitscan cyan bolt, tight, long range | 7-pellet spread, short range, hard falloff | None |
| Move | 6.3 m/s | 5.4 m/s | 9.6 m/s |
| Collision | Walls, counters, shutters | Same as LIVE | Striped `phaseGate` shutters are ignored |
| Reveal | Cloaks stay hidden | Cloaked Tessera and the signal cache appear; every visor seam takes bonus damage | No reveal |
| Signal | Regenerates (~7/s) | Drains (~11/s) | Drains faster (~15/s) |
| Look | Normal mall color | Monochrome, heavy scanlines, hiss | Dark, low saturation, muffled |

Switching is instant: a short banner, a TV tick, and a grade change. No long fade and no camera roll.

Signal is capped at 100. Entering STATIC or DEAD AIR requires at least 8 Signal, so a dry remote cannot flicker in and out. Hitting 0 on a drain channel forces LIVE and slams a NO SIGNAL banner. LIVE never spends Signal to shoot.

Kills restore Signal. A close kill, a STATIC kill, or a burst (another hit within 0.48s) restores 26. A spaced long-range LIVE tap restores 10. Standing in LIVE also refills the bar, slowly.

The cloaked Tessera cannot be hit until STATIC (or until you bump it, which cracks the cloak for a moment). After you leave STATIC its reveal lingers about 4.2s, long enough to finish on LIVE. That linger is the point: STATIC finds the seam, LIVE cashes it. Ordinary Tessera only take visor bonus damage while STATIC is actually up.

Hurt has brief invulnerability so amber bolts do not stack in one frame.

## Arena proof (Phase 1)

One room: **KRCD Mall Court**. Fountain basin with a south gap, mezzanine, dead storefronts, food hall, broadcast booth, directory kiosk, and an east service alley.

The alley partition is a full-height wall so you cannot shoot over it. The striped center shutter is a `phaseGate`. LIVE and STATIC stop on it. DEAD AIR walks through. The north end of the alley stays open, so the shutter is a shortcut, not a soft-lock. The alley Tessera is leashed inside. A window shows amber light; it is not a hole.

The cloaked Tessera stands in the dry fountain, on the spawn sightline, invisible on LIVE. The signal cache in the alley is the cloaked object, visible only on STATIC.

Tips fire once: the LIVE remote, then the fountain cloak, then the shutter.

Wave is six Tessera. Clear the court, read the completion card, replay. Death has a retry. Best time is stored locally under `channel-surfer-best`. No account, no network.

## Presentation

- First-person wood-and-metal remote, leather gloves, trench cuffs. The IR lens is the only cyan light in the world.
- Tessera are pearl shells, black visor, black joints, amber muzzle. Hit flash, amber bolts with a short plant-and-fire tell, tip-over deaths, sparks.
- Court is low-poly and lit like a real interior: skylight, warm practicals, brass on the booth and the fountain dish. Signage is original KRCD copy only.
- Grade is a CSS treatment on the canvas plus fog. The HUD stays a CRT overlay so it stays readable when the picture goes to snow.
- Audio is WebAudio: bolt, spread, dry click, channel ticks, impacts, a quiet carrier. DEAD AIR low-passes the bus. STATIC adds hiss.

## Build

Source: `channel-surfer-src/`. Production: `channel-surfer/`. Vite `base: './'`, `outDir: '../channel-surfer'`, so Pages can host `/channel-surfer/` in the cabinet iframe. Same pattern as the other arcade games. No runtime CDN assets. Fonts are system UI. Textures are canvas-generated.

```bash
cd channel-surfer-src
npm install
npm test
npm run build
```

Tests are `node --test` on `src/sim.test.js`. They cover channel select and cycle, Signal regen and drain, forced return to LIVE, fire profiles, falloff, weak points, cloak reveal, phase-gate movement against the real court blocks, kill rewards, and the Phase 1 content lock (one cloak, one cloaked pickup, no Visor Priest, no Directory).

## Phases

### Phase 1 — this slice

Title, one court, three channels, one wave, HUD, pause, clear, retry. Done when a player can explain the three channels by playing, without reading this doc.

### Phase 2 — hijacks, rooms, Visor Priest

- More rooms off the court (mezzanine actually walkable, service tunnels). Same channel rules, new `phaseGate` and cloak placements.
- Remote hijacks: a Tessera retunes you for a few seconds. The channel you did not choose is the hazard.
- Visor Priest as a mid-boss, not a fodder enemy. Telegraph three rites; each rite is answered by a different channel (precise bolt, reveal a weak seal, phase out of a sanctified barrier). Use the ceremonial white-and-gold reference for the bishop, not for the mall bots. Still no cyan on enemies.
- Keep the pure sim. Add rooms as data next to `BLOCKS`, not as a second physics path.

### Phase 3 — upgrades, Directory, Broadcast Echo

- A short upgrade track that modifies `TUNING` (pellet count, drain rate, phase speed), not a skill tree that replaces channels.
- The Directory as the final boss of the mall: a map that fights back, using every channel rule in one encounter.
- Broadcast Echo: a ghost of a previous clear that replays your channel timeline as hazards or help. Record the timeline in the sim; do not bolt it on in the renderer.

## Explicitly out of Phase 1

No campaign map, no Directory, no Visor Priest encounter, no upgrade tree, no hijack catalog, no Echo, no accounts, no analytics, no network. Reserved ids are listed in `RESERVED_CONTENT` and asserted by the tests so they are not smuggled in as fodder.

## Hooks

- `level.js` — `BLOCKS`, `ENEMIES`, `PICKUPS`, `LEASHES`, `RESERVED_CONTENT`, `PHASE`.
- `sim.js` — channel, Signal, health, movement, shots, reveal, rewards.
- `ai.js` — Tessera step. Bosses should be new steppers that emit the same shot records.
- Renderer (`world.js`, `actors.js`, `game.js`) reads that data and does not invent rules.
