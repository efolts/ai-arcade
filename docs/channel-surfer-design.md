# CHANNEL SURFER

The FPS where changing TV channels changes combat and the level.

The playable slice is still two rooms: the KRCD mall court and the radio wing, with one PA hijack and the Visor Priest. Phase 3.1 is a realism pass on that slice. Phases 4–6 stay on the hooks in `channel-surfer-src/src/level.js` and `hijack.js`. This document matches what ships.

## Promise

CRT Head is alone in the abandoned KRCD mall with a weaponized remote. Tessera bots hold the broadcast. The remote does not swap guns. It changes the channel the building is tuned to, and the channel is the rules of the room:

- **LIVE** is the physical mall. Precise cyan fire, normal collision, Signal comes back.
- **STATIC** is the noisy carrier. Short-range spread, cloaked things appear, visor seams open, Signal drains.
- **DEAD AIR** is the gap between stations. Faster movement, striped shutters and rite veils stop being solid, the remote will not fire, Signal drains.

Cyan is CRT Head only: the bolt, the remote lens, and the HUD. A retuned shot still traces cyan because it is the remote. The PA horn flares warm white when it fires. Tessera and the Visor Priest stay pearl, black, amber, and gold. No logos on the bots. No cyan on the priest.

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
- On a hit, nearby choir Tessera are stunned for 4.5s, your shots run hot for 4.5s (about 1.45×, tracers pulled to cyan), and the horn flares warm white. The cyan stays on the shot. It is the remote's retune, not the priest's body and not the room.
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

Phase 3.3 keeps the two rooms. Smooth shells, ceramic clearcoat, black glass, one 1024 shadow that follows the player, contact blobs, and a half-resolution occlusion pass. The nave also has a baked candle lightmap, and the visors use a reflection probe rendered from the aisle. No downloaded model packs.

- CRT viewmodel: wood-cased remote with grain and roughness, plastic buttons, trench cuffs, leather gloves with two-segment fingers. The fingers flex on a shot and on a channel change, and they breathe while you idle. Bob follows the walk and the strafe, and a channel change kicks the remote. LIVE muzzle flash is a cyan cross at the lens. The IR lens is the only cyan light on the body.
- Court Tessera are smooth humanoids: lathe helmet and torso, wraparound black glass visor, black joints, worn shins, a small amber muzzle. No badges and no cyan. Choir Tessera keep that kit and add a white tabard, mantle, and gold stole so the legs stay readable. A soft contact blob sits under each one, on top of the sun shadow.
- Hit flash whites the shell out for a short beat without changing hurt time. Deaths tip the kit over, limbs go limp, and the shell flashes before it drops. Amber bolts still have a plant-and-fire tell. Impacts are sparks plus a short additive flash. Retuned shots stay the cyan exception.
- The priest is the same materials at boss scale: pearl helmet, a taller black glass visor, a lathe robe, a back cape, gold hem and chains, raised sleeves, and open pearl gloves with spread fingers. The robe, cape, mantle, and choir skirts sway with two morph targets (side to side, and a forward billow). The fingers open during a rite, curl on the windup, and idle with a small flex. Amber shows on the palms only while he is winding up or in a rite, and on the visor seam when LIVE can break it. The halo flares when STATIC can hit it. No cyan on the priest. The visor samples an aisle probe, so the glass mirrors candles and the nave.
- Hurt spheres are unchanged: Tessera head `y+1.62 r0.26` and body `y+0.98 r0.46`; priest head `2.05 r0.3`, body `1.2 r0.62`, halo `2.62 r0.42`. The shells were built to those volumes.
- Court floor, walls, trim, and ceiling keep the tile atlases, with grout normals and roughness. The radio wing has a darker stone floor on top of the same slab. Pews are slatted seats with a curved back, the altar is a stepped stone plinth under a brass mensa, and the fountain is a lathed bowl. The PA horn is a lathed bell. Signage is still original KRCD copy. The aisle seal is a gold ring on stone and takes light.
- Lighting is a warm key from the skylight, a warm unshadowed fill, and a lower hemisphere so the court stays readable. The shadow map is 1024 and recenters on the player in 4 meter steps, with a tighter frustum so nearby shadows stay sharp. A half-resolution occlusion pass darkens feet, pews, and the altar. On DEAD AIR that pass shrinks so the aisle stays readable. The nave floor, pews, altar, and inner walls also sample a baked lightmap: warm pools at the candles and the altar, darker under the pews. It is added to the realtime light. It is not a second shadow caster. Fog starts closer so the nave has depth. Grade is still a CSS treatment on the canvas. The HUD stays a CRT overlay.
- Phase 3.4, not built: a court lightmap for the skylight and fountain, shin grime that follows the Tessera leg, and a second reflection probe for the mall court so the visor changes when you turn back toward the fountain. Still these two rooms.
- Audio is WebAudio: bolt, spread, dry click, channel ticks, impacts, a quiet carrier, plus a door, a rite chord, a break, a failed rite, and the PA squeal. DEAD AIR low-passes the bus. STATIC adds hiss.

## Build

Source: `channel-surfer-src/`. Production: `channel-surfer/`. Vite `base: './'`, `outDir: '../channel-surfer'`, so Pages can host `/channel-surfer/` in the cabinet iframe. No runtime CDN assets. Fonts are system UI. Textures are canvas-generated.

```bash
cd channel-surfer-src
npm install
npm test
npm run build
```

Tests are `node --test` on `src/sim.test.js`. They cover the channel, Signal, shot, cloak, and shutter rules, plus the radio door, the rite veil, the hijack catalog, the three priest answers, and the dormant choir. `PHASE` is 3. Ids in `RESERVED_CONTENT` (arsenal, upgrades, wings, Directory, Broadcast Echo) must not appear as encounters.

## Phases

### Phase 1 — court

Title, three channels, one mall court, HUD, pause, clear, retry. Still the front half of this slice.

### Phase 2 — rooms and the priest

Radio wing behind a door that opens when the court is clear. One PA hijack. Visor Priest with three rites, one per channel. Wing checkpoint on death. Still the playable layout.

### Phase 3 — this art pass

Phase 3.1 realism on the two rooms: smooth Tessera and priest shells, glass visors, canvas normal and roughness maps, one soft shadow map plus contact blobs, warm key and fill. Same combat numbers.

### Phase 3.2

Sharper visor reflections, ceramic clearcoat, half-resolution occlusion, a 1024 shadow map that follows the player, robe folds sculpted into the cloth, two-segment gloves, slatted pews, a stepped altar, a lathed fountain, and a lathed horn. Same combat numbers.

### Phase 3.3 — this pass

Cloth morphs on the robe, cape, and choir skirts. Priest and CRT fingers flex. A baked nave lightmap. An aisle reflection probe on the visors. Same combat numbers.

### Phase 3.4 — not started

Court lightmap, leg grime, and a mall-court reflection probe. Not weapons, not new rooms.

### Phase 4 — not started

Arsenal and ammo. No new weapons in this slice.

### Phase 5 — not started

Level-up that modifies `TUNING` (pellet count, drain rate, phase speed). Not a tree that replaces channels.

### Phase 6 — not started

Four wings and the Directory as the mall’s final boss. Not a campaign map yet.

Broadcast Echo (a ghost that replays a channel timeline) and the rest of the hijack catalog (shutter, sprinkler, camera) stay hooks only. They are not part of Phases 4–6 as locked, and they are not in this build.

## Hooks

- `level.js` — `BLOCKS`, `ENEMIES`, `CHAPEL_ENEMIES`, `PICKUPS`, `LEASHES`, `RESERVED_CONTENT`, `PHASE`, `activeColliders`.
- `sim.js` — channel, Signal, health, movement, shots, reveal, rewards.
- `ai.js` — Tessera step. `dormant` and `stun` are data. Enemies never phase.
- `boss.js` — priest rites, chip damage, and the halo ray. New bosses should be new steppers, not extra Tessera.
- `hijack.js` — catalog, aim test, cooldown, retune. Add a playable entry beside `pa-horn` instead of a special case in the renderer.
- `meshkit.js` / `textures.js` / `viewmodel.js` — Phase 3 kits and atlases. They do not own combat rules.
- Renderer (`world.js`, `actors.js`, `game.js`) reads that data and does not invent rules.
