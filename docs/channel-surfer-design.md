# CHANNEL SURFER

The FPS where changing TV channels changes combat and the level.

The playable slice is still two rooms: the KRCD mall court and the radio wing, with one PA hijack and the Visor Priest. Phase 4 adds channel-locked remotes and Signal batteries on that slice. Phase 4.1 adds respawning battery pads so a fight can be recharged without waiting for a room clear. Phases 5–6 stay on the hooks in `channel-surfer-src/src/level.js` and `hijack.js`. This document matches what ships.

## Promise

CRT Head is alone in the abandoned KRCD mall with a weaponized remote. Tessera bots hold the broadcast. The remote does not swap guns. It changes the channel the building is tuned to, and the channel is the rules of the room:

- **LIVE** is the physical mall. Precise cyan fire, normal collision, Signal comes back.
- **STATIC** is the noisy carrier. Short-range spread, cloaked things appear, visor seams open, Signal drains.
- **DEAD AIR** is the gap between stations. Faster movement, striped shutters and rite veils stop being solid, and the Phaser bolt passes through them. Signal drains.

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
| Remote | Clicker. Hitscan cyan bolt, tight, long range. 20 batteries. | Scatter. 7-pellet spread, short range, hard falloff. 8 batteries. | Phaser. One short bolt that ignores `phaseGate`. 6 batteries. |
| Move | 6.3 m/s | 5.4 m/s | 9.6 m/s |
| Collision | Walls, counters, shutters, rite veils | Same as LIVE | Striped `phaseGate` volumes are ignored |
| Reveal | Cloaks stay hidden | Cloaked Tessera and the signal cache appear; every visor seam takes bonus damage | No reveal |
| Signal | Regenerates (~7/s) | Drains (~11/s) | Drains faster (~15/s) |
| Look | Normal mall color | Monochrome, heavy scanlines, hiss | Dark, low saturation, muffled |

Switching is instant: a short banner, a TV tick, and a grade change. No long fade and no camera roll.

Signal is capped at 100. Entering STATIC or DEAD AIR requires at least 8 Signal, so a dry meter cannot flicker in and out. Hitting 0 on a drain channel forces LIVE and slams a NO SIGNAL banner. Shooting never spends Signal.

Each channel has its own battery magazine. Surfing is the weapon switch: 1, 2, 3, the wheel, and Q change the remote with the channel. A shot or a scatter volley costs 1 battery from that magazine. An empty magazine plays a dry click and the banner NO BATTERY. The other magazines are untouched, so the answer is to surf or to pick up a cell. The count sits under the channel name as `CLICKER 18/20`. It is not a third bar.

Kills restore Signal and drop a one-shot battery cell (5 Clicker, 2 Scatter, 2 Phaser, clamped to the mag). Six pads hold a cell that comes back: east of the fountain, south of the food counter, and on the approach to the north door in the court; the center aisle, the east pews, and the altar approach in the radio wing. Picking one up feeds the remote you are holding (+6) and puts +2 in each other magazine. The banner names that remote (`CLICKER +6`). A full load leaves the pad alone. The pad stays on the floor, dim and amber, and the cell returns after 16 seconds. Clearing the court refills every magazine. Clearing the wing refills them again and still pays 40 Signal. A close kill, a STATIC kill, or a burst (another hit within 0.48s) restores 26 Signal. A spaced long-range LIVE tap restores 10. Standing in LIVE also refills the Signal bar, slowly.

The cloaked Tessera cannot be hit until STATIC (or until you bump it, which cracks the cloak for a moment). After you leave STATIC its reveal lingers about 4.2s, long enough to finish on LIVE. Ordinary Tessera only take visor bonus damage while STATIC is actually up.

Clicker and Scatter stop on a `phaseGate`. The Phaser does not. DEAD AIR still walks through the same volumes. The Phaser is short (8 m) so it is a way through the shutter and the veil, not a second long gun.

Hurt has brief invulnerability so amber bolts do not stack in one frame.

## Mall court

The south room is the Phase 1 court: fountain basin with a south gap, mezzanine, dead storefronts, food hall, broadcast booth, directory kiosk, and an east service alley.

The alley partition is a full-height wall so you cannot shoot over it. The striped center shutter is a `phaseGate`. Clicker and Scatter stop on it. DEAD AIR walks through, and the Phaser bolt passes it. The north end of the alley stays open, so the shutter is a shortcut, not a soft-lock. The alley Tessera is leashed inside.

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
- On a hit, nearby choir Tessera are stunned for 4.5s, your shots run hot for 4.5s (about 1.45×, tracers pulled to cyan), every magazine gains 2 batteries, and the channel you are on gains 2 more. The horn flares warm white. The cyan stays on the retuned shot. It is the remote's retune, not the priest's body and not the room.
- A dry press plays the deny click.

The horn does not skip a rite by itself. It buys a few seconds against the choir.

## Visor Priest

Mid-boss at the altar. Pearl helmet, wide black visor, gold halo, white and gold robes, amber hands. He does not chase. He is a sponge: body shots are armored to about a fifth of the bolt, and the real damage is breaking a rite (64). Three clean breaks do not kill him. Failing a rite costs 16, inside the same hurt invulnerability as a Tessera bolt, so it is not a one-shot.

He idles, fires a telegraphed amber bolt, then opens a rite for 3.2s. The banner and the gold line under the channel name name the answer. Wrong channel does not break it. When the window ends without an answer, the rite holds, he deals the 16, and he recovers before the next one.

| Rite | Answer |
| --- | --- |
| LIVE · THE SEAM | Hitscan the visor seam while it is lit. STATIC on the seam does not break it. |
| STATIC · THE HALO | The halo is only a target on STATIC. LIVE shots pass through it and chip the body. |
| DEAD AIR · THE VEIL | A gold veil seals the aisle. Walk through it on DEAD AIR. Clicker and Scatter stop on it. The Phaser chips the priest through it and does not break the rite. Standing in the altar when it rises and switching to DEAD AIR also breaks it. |

Clearing him drops the choir, pays Signal, and opens the wing-clear card. Best time is still `channel-surfer-best` for the whole run.

## Presentation

Phase 3.5 keeps the two rooms. Smooth shells, ceramic clearcoat, black glass, one 1024 shadow that follows the player, contact blobs, and a half-resolution occlusion pass. The nave has a baked candle lightmap. The court has a baked skylight and fountain lightmap. Visors blend an aisle probe and a court probe as you walk between the rooms. No downloaded model packs.

- CRT viewmodel: one wood-cased remote that changes silhouette with the channel. LIVE keeps the single antenna and the cyan lens. STATIC swaps in a two-prong fork and a white crackle flash. DEAD AIR extends a short silver blade and a pale flash. Gloves, bob, and the channel-change kick stay. The IR lens is the only cyan light on the body. Battery cells have a cyan cap because they feed that remote. The pad under a respawning cell is pearl and amber, so it does not read as Signal UI.
- Court Tessera are smooth humanoids: lathe helmet and torso, a chest plate and hip shell, wraparound black glass visor, black joints, a knee cap, and a shin plate whose dirt texture is parented to the leg. No badges and no cyan. Choir Tessera keep that kit and add a white tabard, mantle, and gold stole so the legs stay readable. A soft contact blob sits under each one, on top of the sun shadow. Each hand is a palm plus four two-bone fingers and a thumb. The open hand turns toward you so the digits stay separated at close range. The gun hand closes on a shot. The fingers do not cast shadows.
- Hit flash whites the shell out for a short beat without changing hurt time. Deaths tip the kit over, limbs go limp, and the shell flashes before it drops. Amber bolts still have a plant-and-fire tell. Impacts are sparks plus a short additive flash. Retuned shots stay the cyan exception.
- The priest is the same materials at boss scale: pearl helmet, a taller black glass visor, a cut robe (chest bodice, skirt panels sitting outside the shell, gold seams, shoulder yoke, bell sleeves, a heavy hem roll, wide back cape), gold hem, stole, and chains, raised sleeves, and open pearl gloves with spread fingers. The robe, cape, mantle, bodice, skirt panels, and choir skirts sway with two morph targets (side to side, and a forward billow). The fingers open during a rite, curl on the windup, and idle with a small flex. Amber shows on the palms only while he is winding up or in a rite, and on the visor seam when LIVE can break it. The halo flares when STATIC can hit it. No cyan on the priest. The visor blends two probes: the court probe (skylight, fountain, shop glow) when you stand in the mall, the aisle probe (candles, nave) when you stand in the wing, and a mix across the doorway from z=-17 to z=-12.
- Hurt spheres are unchanged: Tessera head `y+1.62 r0.26` and body `y+0.98 r0.46`; priest head `2.05 r0.3`, body `1.2 r0.62`, halo `2.62 r0.42`. The shells were built to those volumes.
- Court floor, walls, trim, and ceiling keep the tile atlases, with grout normals and roughness. A court overlay plane, inner wall planes, and the fountain sample a baked lightmap: a skylight pool in the middle, darker under the mezzanine, the pillars, and the fountain curb, warm pools at the food hall, the booth, and the east window. An emissive skylight card sits in the ceiling so the pool has a source. The radio wing has a darker stone floor on top of the same slab. Pews are slatted seats with a curved back, the altar is a stepped stone plinth under a brass mensa, and the fountain is a lathed bowl. The PA horn is a lathed bell. Signage is still original KRCD copy. The aisle seal is a gold ring on stone and takes light.
- Lighting is a warm key from the skylight, a warm unshadowed fill, and a lower hemisphere so the court stays readable. The shadow map is 1024 and recenters on the player in 4 meter steps, with a tighter frustum so nearby shadows stay sharp. A half-resolution occlusion pass darkens feet, pews, and the altar. On DEAD AIR that pass shrinks so the aisle stays readable. The nave floor, pews, altar, and inner walls sample a baked candle lightmap. Both lightmaps are added to the realtime light. Neither is a second shadow caster. Shin plates, chest plates, and knee caps do not cast shadows. Fog starts closer so the nave has depth. Grade is still a CSS treatment on the canvas. The HUD stays a CRT overlay.
- The art loop stopped after 3.5. Lighting, probes, and the character pass stay as they shipped. Phase 4 did not repaint the rooms.
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

### Phase 3.3

Cloth morphs on the robe, cape, and choir skirts. Priest and CRT fingers flex. A baked nave lightmap. An aisle reflection probe on the visors. Same combat numbers.

### Phase 3.4

A baked court lightmap for the skylight and fountain. Shin grime parented to the Tessera leg. A court reflection probe blended with the aisle probe by where you stand. Chest, hip, knee, priest bodice, and a slightly less boxy remote. Same combat numbers.

### Phase 3.5 — this pass

Segmented Tessera fingers and thumbs, shared by the choir, fanned so they read at close range. The priest robe is a cut garment over the old shell: bodice, skirt panels, gold seams, bell sleeves, a weighted hem, and a wider cape. Same combat numbers. No lighting changes.

### Phase 4

Three remotes, one per channel. LIVE Clicker, STATIC Scatter, DEAD AIR Phaser. Magazines are Signal batteries, separate from the Signal meter. Kills drop cells. The court clear and the wing clear refill every mag. The PA retune refunds a few. No fourth weapon: the horn stays the utility. The reserved id `arsenal` still must not spawn as an encounter. Hurt spheres are unchanged.

### Phase 4.1 — this pass

Six respawning battery pads replace the two one-shot floor cells. Three are in the court and three are in the radio wing. A pad feeds the held remote +6 and the other magazines +2, then recharges in 16 seconds. Kill drops and room-clear refills stay. Hurt spheres and the rooms are unchanged.

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
