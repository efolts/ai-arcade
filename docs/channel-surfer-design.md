# CHANNEL SURFER

The FPS where changing TV channels changes combat and the level.

Phase 2 is the playable slice in this repo: the KRCD mall court, the radio wing behind it, one remote hijack, and the Visor Priest. Phase 3 stays on the hooks in `channel-surfer-src/src/level.js` and `hijack.js`. This document matches what ships.

## Promise

CRT Head is alone in the abandoned KRCD mall with a weaponized remote. Tessera bots hold the broadcast. The remote does not swap guns. It changes the channel the building is tuned to, and the channel is the rules of the room:

- **LIVE** is the physical mall. Precise cyan fire, normal collision, Signal comes back.
- **STATIC** is the noisy carrier. Short-range spread, cloaked things appear, visor seams open, Signal drains.
- **DEAD AIR** is the gap between stations. Faster movement, striped shutters and rite veils stop being solid, the remote will not fire, Signal drains.

Cyan is CRT Head only: the bolt, the remote lens, the HUD, and the few seconds a retuned PA horn borrows that color. Tessera and the Visor Priest stay pearl, black, amber, and gold. No logos on the bots. No cyan on the priest.

## Controls

| Input | Action |
| --- | --- |
| Click or Enter | Start, resume, replay, retry |
| Mouse | Look (pointer lock) |
| WASD | Move |
| Click | Fire |
| 1 / 2 / 3 | LIVE / STATIC / DEAD AIR |
| Mouse wheel or Q | Cycle channels |
| E | Retune the object you are aiming at |
| Esc | Pause and release the mouse |
| M | Mute |
| R | Restart from pause or clear. From a wing death, retry that wing |

Pointer lock is requested on the user gesture that enters play. If the cabinet iframe refuses lock, mouse deltas still look while the cursor is over the stage, and every click asks for lock again. Focus loss and leaving pointer lock pause the sim. The stage is a fixed 960×780 surface, letterboxed to the iframe. The page does not scroll.

There is no jump and no sprint. Speed belongs to DEAD AIR.

From the pause menu, Restart walks the whole mall again. A death in the radio wing retries from the radio door with the court still clear. A death in the court restarts the run.

## Channel rules

Numbers live in `TUNING` inside `channel-surfer-src/src/sim.js`. The sim is pure: no Three.js, no DOM. The renderer only displays it.

| | LIVE | STATIC | DEAD AIR |
| --- | --- | --- | --- |
| Fire | Hitscan cyan bolt, tight, long range | 7-pellet spread, short range, hard falloff | None |
| Move | 6.3 m/s | 5.4 m/s | 9.6 m/s |
| Collision | Walls, counters, shutters, rite veils | Same as LIVE | Striped `phaseGate` volumes are ignored |
| Reveal | Cloaks stay hidden | Cloaked Tessera and the signal cache appear; every visor seam takes bonus damage | No reveal |
| Signal | Regenerates (~7/s) | Drains (~11/s) | Drains faster (~15/s) |
| Look | Normal mall color | Monochrome, heavy scanlines, hiss | Dark, low saturation, muffled |

Switching is instant: a short banner, a TV tick, and a grade change. No long fade and no camera roll.

Signal is capped at 100. Entering STATIC or DEAD AIR requires at least 8 Signal, so a dry remote cannot flicker in and out. Hitting 0 on a drain channel forces LIVE and slams a NO SIGNAL banner. LIVE never spends Signal to shoot.

Kills restore Signal. A close kill, a STATIC kill, or a burst (another hit within 0.48s) restores 26. A spaced long-range LIVE tap restores 10. Standing in LIVE also refills the bar, slowly. Dropping the priest grants a flat 40.

The cloaked Tessera cannot be hit until STATIC (or until you bump it, which cracks the cloak for a moment). After you leave STATIC its reveal lingers about 4.2s, long enough to finish on LIVE. Ordinary Tessera only take visor bonus damage while STATIC is actually up.

Shots do not phase. DEAD AIR walks through a `phaseGate`; a bolt still stops on it.

Hurt has brief invulnerability so amber bolts do not stack in one frame.

## Mall court

The south room is the Phase 1 court: fountain basin with a south gap, mezzanine, dead storefronts, food hall, broadcast booth, directory kiosk, and an east service alley.

The alley partition is a full-height wall so you cannot shoot over it. The striped center shutter is a `phaseGate`. LIVE and STATIC stop on it. DEAD AIR walks through. The north end of the alley stays open, so the shutter is a shortcut, not a soft-lock. The alley Tessera is leashed inside.

The cloaked Tessera stands in the dry fountain, on the spawn sightline, invisible on LIVE. The signal cache in the alley is the cloaked object, visible only on STATIC.

Six Tessera hold the court. Clearing them opens the north door. It does not end the run.

## Radio wing

The door is a solid collider in the gap of the north wall (`chapel-door`). Opening it removes that collider. The player walks through. Nothing teleports them.

The wing is a narrower chapel north of the court: pews, a center aisle, a gold seal, and an altar pocket. The seal is a second `phaseGate` (`rite-veil`). It is absent until the priest raises it. Side walls close the flanks, so the only way into the altar is through the seal.

Three choir Tessera wait inside, dormant until the player steps through the door, so they cannot shoot the court through the wall and they do not count toward clearing the court. One of them is cloaked. They are leashed to the nave.

The HUD reads COURT while you are in the mall and RADIO once you are through the door. A gold bar tracks the priest.

## PA horn

One hijack ships. The catalog in `hijack.js` reserves a security shutter, a sprinkler, and a security camera for later. They are not in the wing.

The horn is on the west wall of the nave. Aim at it and press E:

- Highlight and the prompt `E  RETUNE PA` when the aim cone can see it.
- `PA RECHARGING` if you are still inside the 16s cooldown.
- On a hit, nearby choir Tessera are stunned for 4.5s, your shots run hot for 4.5s (about 1.45×, tracers pulled to cyan), and the horn flares cyan. That cyan is the remote's retune, not the priest's body.
- A dry press plays the deny click.

The horn does not skip a rite by itself. It buys a few seconds against the choir.

## Visor Priest

Mid-boss at the altar. Pearl helmet, wide black visor, gold halo, white and gold robes, amber hands. He does not chase. He is a sponge: body shots are armored to about a fifth of the bolt, and the real damage is breaking a rite (64). Three clean breaks do not kill him. Failing a rite costs 16, inside the same hurt invulnerability as a Tessera bolt, so it is not a one-shot.

He idles, fires a telegraphed amber bolt, then opens a rite for 3.2s. The banner and the gold line under the channel name name the answer. Wrong channel does not break it. When the window ends without an answer, the rite holds, he deals the 16, and he recovers before the next one.

| Rite | Answer |
| --- | --- |
| LIVE · THE SEAM | Hitscan the visor seam while it is lit. STATIC on the seam does not break it. |
| STATIC · THE HALO | The halo is only a target on STATIC. LIVE shots pass through it and chip the body. |
| DEAD AIR · THE VEIL | A gold veil seals the aisle. Walk through it on DEAD AIR. Shooting it does nothing. Standing in the altar when it rises and switching to DEAD AIR also breaks it. |

Clearing him drops the choir, pays Signal, and opens the wing-clear card. Best time is still `channel-surfer-best` for the whole run.

## Presentation

- First-person wood-and-metal remote, leather gloves, trench cuffs. The IR lens is the only cyan light on the body.
- Court Tessera are pearl shells, black visor, black joints, amber muzzle. Choir Tessera wear a white vestment and a gold stole. Hit flash, amber bolts with a short plant-and-fire tell, tip-over deaths, sparks.
- The priest is taller than the choir: robe, gold chains, raised arms during a rite, a gold halo that flares when STATIC can actually hit it.
- The court is low-poly and lit like a real interior. The wing is the same mall language with candles and a gold seal. Signage is original KRCD copy only.
- Grade is a CSS treatment on the canvas plus fog. The HUD stays a CRT overlay so it stays readable when the picture goes to snow.
- Audio is WebAudio: bolt, spread, dry click, channel ticks, impacts, a quiet carrier, plus a door, a rite chord, a break, a failed rite, and the PA squeal. DEAD AIR low-passes the bus. STATIC adds hiss.

## Build

Source: `channel-surfer-src/`. Production: `channel-surfer/`. Vite `base: './'`, `outDir: '../channel-surfer'`, so Pages can host `/channel-surfer/` in the cabinet iframe. No runtime CDN assets. Fonts are system UI. Textures are canvas-generated.

```bash
cd channel-surfer-src
npm install
npm test
npm run build
```

Tests are `node --test` on `src/sim.test.js`. They cover the Phase 1 channel, Signal, shot, cloak, and shutter rules, plus the radio door, the rite veil, the hijack catalog, the three priest answers, and the dormant choir. Phase 3 ids in `RESERVED_CONTENT` (Directory, upgrades, Broadcast Echo) must not appear as encounters.

## Phases

### Phase 1 — court

Title, three channels, one mall court, HUD, pause, clear, retry. Still the front half of this slice.

### Phase 2 — this slice

Radio wing behind a door that opens when the court is clear. One PA hijack. Visor Priest with three rites, one per channel. Wing checkpoint on death.

### Phase 3 — still unbuilt

- A short upgrade track that modifies `TUNING` (pellet count, drain rate, phase speed), not a skill tree that replaces channels.
- The Directory as the final boss of the mall: a map that fights back, using every channel rule in one encounter.
- Broadcast Echo: a ghost of a previous clear that replays your channel timeline as hazards or help. Record the timeline in the sim.
- The rest of the hijack catalog (shutter, sprinkler, camera) and any further rooms. Do not turn this slice into a campaign map.

## Hooks

- `level.js` — `BLOCKS`, `ENEMIES`, `CHAPEL_ENEMIES`, `PICKUPS`, `LEASHES`, `RESERVED_CONTENT`, `PHASE`, `activeColliders`.
- `sim.js` — channel, Signal, health, movement, shots, reveal, rewards.
- `ai.js` — Tessera step. `dormant` and `stun` are data. Enemies never phase.
- `boss.js` — priest rites, chip damage, and the halo ray. New bosses should be new steppers, not extra Tessera.
- `hijack.js` — catalog, aim test, cooldown, retune. Add a playable entry beside `pa-horn` instead of a special case in the renderer.
- Renderer (`world.js`, `actors.js`, `game.js`) reads that data and does not invent rules.
