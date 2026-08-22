import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { CRT_DECK_IDS, TESSERA_DECK_IDS, CATALOG } from "./cards.js";
import {
  AI,
  PLAYER,
  HERO_IDS,
  attack,
  createMatch,
  dealDamage,
  drainFx,
  drawCard,
  endTurn,
  playCard,
  startMatch,
  dealOpening,
  confirmMulligan,
  useHeroPower,
  instantiate,
  resetIds,
} from "./engine.js";
import { pickAiAction, runAiTurn } from "./ai.js";

describe("card art keys", () => {
  it("gives every catalog card an art key", () => {
    for (const [id, def] of Object.entries(CATALOG)) {
      assert.ok(def.art, id);
    }
    assert.equal(CATALOG.grunt.art, "tessera-grunt");
    assert.equal(CATALOG.tessera_grunt.art, "tessera-grunt");
    assert.equal(CATALOG.mall_rat.art, "mall-rat");
    const files = readdirSync(join(dirname(fileURLToPath(import.meta.url)), "art/cards"));
    for (const def of Object.values(CATALOG)) {
      assert.ok(
        files.some((f) => f === `${def.art}.jpg` || f === `${def.art}.png` || f === `${def.art}.svg`),
        `missing plate for ${def.id} (${def.art})`
      );
    }
  });
});

describe("decks", () => {
  it("lists every unique from the spec", () => {
    for (const id of [
      "mall_rat",
      "remote_hand",
      "atrium_colossus",
      "dual_remotes",
      "the_directory",
      "amber_cannon",
    ]) {
      assert.ok(CATALOG[id], id);
    }
  });

  it("Tessera deck is 30", () => {
    assert.equal(TESSERA_DECK_IDS.length, 30);
  });

  it("CRT list is 30 after dropping spare copies", () => {
    assert.equal(CRT_DECK_IDS.length, 30);
    assert.equal(CRT_DECK_IDS.filter((id) => id === "mall_rat").length, 1);
    assert.equal(CRT_DECK_IDS.filter((id) => id === "fountain_guard").length, 1);
    assert.equal(CRT_DECK_IDS.filter((id) => id === "mother_sprout").length, 1);
    assert.equal(CRT_DECK_IDS.filter((id) => id === "remote_hand").length, 2);
    assert.equal(CRT_DECK_IDS.filter((id) => id === "ironhorse").length, 2);
    assert.equal(CRT_DECK_IDS.filter((id) => id === "cyan_bolt").length, 2);
  });
});

describe("hero labels", () => {
  it("names the player CRT Head and the AI Tessera Bot", () => {
    const s = createMatch({ seed: 1 });
    assert.equal(s.player.hero.name, "CRT Head");
    assert.equal(s.player.hero.powerName, "Remote");
    assert.equal(s.player.hero.faction, "crt");
    assert.equal(s.ai.hero.name, "Tessera Bot");
    assert.equal(s.ai.hero.powerName, "Deploy");
    assert.equal(s.ai.hero.faction, "tessera");
    assert.equal(s.playerFaction, "crt");
    assert.ok(s.player.deck.some((c) => c.defId === "mall_rat"));
    assert.ok(s.ai.deck.some((c) => c.defId === "elite"));
  });

  it("lets the player pick Tessera Bot and gives CRT Head to the AI", () => {
    const s = createMatch({ seed: 1, playerFaction: "tessera" });
    assert.equal(s.playerFaction, "tessera");
    assert.equal(s.player.hero.name, "Tessera Bot");
    assert.equal(s.player.hero.powerName, "Deploy");
    assert.equal(s.player.hero.faction, "tessera");
    assert.equal(s.ai.hero.name, "CRT Head");
    assert.equal(s.ai.hero.powerName, "Remote");
    assert.equal(s.ai.hero.faction, "crt");
    assert.ok(s.player.deck.some((c) => c.defId === "elite"));
    assert.ok(s.ai.deck.some((c) => c.defId === "mall_rat"));
    assert.equal(s.player.deck.length, 30);
    assert.equal(s.ai.deck.length, 30);
  });
});

describe("face combat", () => {
  it("hitting the enemy hero does not damage or remove any minions", () => {
    const s = createMatch({ seed: 12 });
    startMatch(s);
    const rat = instantiate("mall_rat");
    const intern = instantiate("krcd_intern");
    const grunt = instantiate("grunt");
    const elite = instantiate("elite");
    rat.summonSick = false;
    rat.canAttack = true;
    rat.attacksLeft = 1;
    intern.summonSick = false;
    intern.canAttack = true;
    intern.attacksLeft = 1;
    s.player.board = [rat, intern];
    s.ai.board = [grunt, elite];
    const playerSnap = s.player.board.map((u) => ({ uid: u.uid, hp: u.hp, atk: u.atk }));
    const aiSnap = s.ai.board.map((u) => ({ uid: u.uid, hp: u.hp, atk: u.atk }));
    const hp = s.ai.hero.hp;
    const res = attack(s, PLAYER, rat.uid, HERO_IDS[AI]);
    assert.equal(res.ok, true);
    assert.equal(s.ai.hero.hp, hp - rat.atk);
    assert.equal(s.player.hero.hp, 30);
    assert.deepEqual(
      s.player.board.map((u) => ({ uid: u.uid, hp: u.hp, atk: u.atk })),
      playerSnap
    );
    assert.deepEqual(
      s.ai.board.map((u) => ({ uid: u.uid, hp: u.hp, atk: u.atk })),
      aiSnap
    );
    const fx = drainFx(s);
    assert.equal(fx.some((e) => e.type === "death"), false);
    assert.equal(fx.filter((e) => e.type === "damage" && e.kind === "unit").length, 0);
    assert.equal(fx.filter((e) => e.type === "damage" && e.kind === "hero").length, 1);
  });

  it("minion trades still deal damage both ways", () => {
    const s = createMatch({ seed: 13 });
    startMatch(s);
    const rat = instantiate("mall_rat");
    const grunt = instantiate("grunt");
    rat.summonSick = false;
    rat.canAttack = true;
    rat.attacksLeft = 1;
    s.player.board = [rat];
    s.ai.board = [grunt];
    const res = attack(s, PLAYER, rat.uid, grunt.uid);
    assert.equal(res.ok, true);
    assert.equal(s.player.board.length, 0);
    assert.equal(s.ai.board.length, 1);
    assert.equal(s.ai.board[0].hp, 1);
  });
});

describe("match setup", () => {
  it("deals 3 / 4+coin and player draws on turn 1", () => {
    const s = createMatch({ seed: 7 });
    startMatch(s);
    assert.equal(s.player.hand.length, 4);
    assert.equal(s.ai.hand.length, 5);
    assert.ok(s.ai.hand.some((c) => c.defId === "coin"));
    assert.equal(s.player.mana, 1);
    assert.equal(s.player.maxMana, 1);
    assert.equal(s.turn, PLAYER);
  });
});

describe("mulligan", () => {
  it("replaces selected cards from the top and parks the old ones on the bottom", () => {
    const s = createMatch({ seed: 7 });
    dealOpening(s);
    assert.equal(s.player.hand.length, 3);
    assert.equal(s.player.hand.some((c) => c.defId === "coin"), false);
    const incoming = s.player.deck.slice(0, 2).map((c) => c.uid);
    const [a, b, kept] = s.player.hand;
    const res = confirmMulligan(s, [a.uid, b.uid]);
    assert.equal(res.ok, true);
    assert.deepEqual(res.replaced, [a.uid, b.uid]);
    assert.equal(s.player.hand.length, 3);
    assert.equal(s.player.hand[0].uid, incoming[0]);
    assert.equal(s.player.hand[1].uid, incoming[1]);
    assert.equal(s.player.hand[2].uid, kept.uid);
    assert.equal(s.player.deck.at(-2).uid, a.uid);
    assert.equal(s.player.deck.at(-1).uid, b.uid);
    assert.equal(s.player.deck[0].uid === a.uid, false);
    assert.equal(s.player.hand.some((c) => c.uid === a.uid), false);
  });

  it("caps at two swaps and does not touch Coin", () => {
    const s = createMatch({ seed: 3, playerGoesSecond: true });
    dealOpening(s);
    assert.equal(s.player.hand.length, 4);
    assert.equal(s.ai.hand.some((c) => c.defId === "coin"), false);
    const uids = s.player.hand.map((c) => c.uid);
    const incoming = s.player.deck.slice(0, 2).map((c) => c.uid);
    const kept = s.player.hand.slice(2).map((c) => c.uid);
    confirmMulligan(s, uids);
    assert.equal(s.player.hand.filter((c) => c.defId !== "coin").length, 4);
    assert.equal(s.player.hand[0].uid, incoming[0]);
    assert.equal(s.player.hand[1].uid, incoming[1]);
    assert.equal(s.player.hand[2].uid, kept[0]);
    assert.equal(s.player.hand[3].uid, kept[1]);
    assert.ok(s.player.hand.some((c) => c.defId === "coin"));
    assert.equal(confirmMulligan(s, [incoming[0]]).ok, false);
  });

  it("selecting nothing just locks the dealt hand", () => {
    const s = createMatch({ seed: 11 });
    dealOpening(s);
    const before = s.player.hand.map((c) => c.uid);
    const res = confirmMulligan(s, []);
    assert.equal(res.ok, true);
    assert.deepEqual(s.player.hand.map((c) => c.uid), before);
    assert.equal(s.mulliganDone, true);
  });
});

describe("keywords", () => {
  it("Rush can attack the turn it is played; Static must be hit first", () => {
    const s = createMatch({ seed: 1 });
    startMatch(s);
    s.player.mana = 10;
    s.player.hand = [instantiate("mall_rat"), instantiate("cyan_bolt")];
    s.ai.board = [instantiate("mannequin")];
    const rat = s.player.hand[0];
    assert.equal(playCard(s, PLAYER, rat.uid).ok, true);
    const onBoard = s.player.board[0];
    const face = attack(s, PLAYER, onBoard.uid, HERO_IDS[AI]);
    assert.equal(face.ok, false);
    const hit = attack(s, PLAYER, onBoard.uid, s.ai.board[0].uid);
    assert.equal(hit.ok, true);
  });

  it("Mesh eats one instance of damage", () => {
    const s = createMatch({ seed: 2 });
    startMatch(s);
    const u = instantiate("antenna_kid");
    s.player.board = [u];
    dealDamage(s, { kind: "unit", unit: u }, 5, "test");
    assert.equal(u.hp, 3);
    assert.equal(u.keywords.mesh, false);
    dealDamage(s, { kind: "unit", unit: u }, 1, "test");
    assert.equal(u.hp, 2);
  });

  it("Boot draw and Shatter buff fire", () => {
    const s = createMatch({ seed: 3 });
    startMatch(s);
    s.player.mana = 10;
    const intern = instantiate("krcd_intern");
    s.player.hand = [intern];
    const handBefore = s.player.hand.length;
    const deckBefore = s.player.deck.length;
    playCard(s, PLAYER, intern.uid);
    assert.equal(s.player.hand.length, handBefore - 1 + 1);
    assert.equal(s.player.deck.length, deckBefore - 1);

    const sprout = instantiate("mother_sprout");
    const rat = instantiate("mall_rat");
    rat.summonSick = false;
    rat.canAttack = true;
    rat.attacksLeft = 1;
    s.player.board = [sprout, rat];
    dealDamage(s, { kind: "unit", unit: sprout }, 10, "kill");
    assert.equal(s.player.board.length, 1);
    assert.equal(s.player.board[0].atk, 2);
    assert.equal(s.player.board[0].hp, 2);
  });
});

describe("relics and hero powers", () => {
  it("relic can attack the turn it is equipped and loses durability", () => {
    const s = createMatch({ seed: 4 });
    startMatch(s);
    s.player.mana = 10;
    const relic = instantiate("dual_remotes");
    s.player.hand = [relic];
    playCard(s, PLAYER, relic.uid);
    assert.ok(s.player.hero.relic);
    const hp = s.ai.hero.hp;
    const res = attack(s, PLAYER, HERO_IDS[PLAYER], HERO_IDS[AI]);
    assert.equal(res.ok, true);
    assert.equal(s.ai.hero.hp, hp - 3);
    assert.equal(s.player.hero.relic.durability, 1);
  });

  it("Remote deals 2; Deploy summons a 1/1 if room", () => {
    const s = createMatch({ seed: 5 });
    startMatch(s);
    s.player.mana = 2;
    const hp = s.ai.hero.hp;
    const r = useHeroPower(s, PLAYER, HERO_IDS[AI]);
    assert.equal(r.ok, true);
    assert.equal(s.ai.hero.hp, hp - 2);
    endTurn(s, PLAYER);
    s.ai.mana = 2;
    const before = s.ai.board.length;
    const d = useHeroPower(s, AI);
    assert.equal(d.ok, true);
    assert.equal(s.ai.board.length, before + 1);
    assert.equal(s.ai.board.at(-1).defId, "tessera_grunt");
    assert.equal(s.ai.board.at(-1).atk, 1);
    assert.equal(s.ai.board.at(-1).hp, 1);
  });

  it("Deploy works for the player and Remote works for the AI when sides swap", () => {
    const s = createMatch({ seed: 5, playerFaction: "tessera" });
    startMatch(s);
    s.player.mana = 2;
    const before = s.player.board.length;
    const d = useHeroPower(s, PLAYER);
    assert.equal(d.ok, true);
    assert.equal(s.player.board.length, before + 1);
    assert.equal(s.player.board.at(-1).defId, "tessera_grunt");
    endTurn(s, PLAYER);
    s.ai.mana = 2;
    const hp = s.player.hero.hp;
    const r = useHeroPower(s, AI, HERO_IDS[PLAYER]);
    assert.equal(r.ok, true);
    assert.equal(s.player.hero.hp, hp - 2);
  });
});

describe("faction opening", () => {
  it("keeps first-player Coin rules when the player is Tessera Bot", () => {
    const s = createMatch({ seed: 7, playerFaction: "tessera" });
    startMatch(s);
    assert.equal(s.player.hand.length, 4);
    assert.equal(s.ai.hand.length, 5);
    assert.ok(s.ai.hand.some((c) => c.defId === "coin"));
    assert.equal(s.player.mana, 1);
    assert.equal(s.turn, PLAYER);
    assert.equal(s.player.hero.name, "Tessera Bot");
    assert.equal(s.ai.hero.name, "CRT Head");
  });
});

describe("fx events", () => {
  it("emits mesh then damage", () => {
    const s = createMatch({ seed: 11 });
    startMatch(s);
    drainFx(s);
    const u = instantiate("antenna_kid");
    s.player.board = [u];
    dealDamage(s, { kind: "unit", unit: u }, 4, "test");
    const first = drainFx(s);
    assert.equal(first.some((e) => e.type === "mesh"), true);
    dealDamage(s, { kind: "unit", unit: u }, 1, "test");
    const second = drainFx(s);
    assert.equal(second.some((e) => e.type === "damage" && e.amount === 1), true);
  });
});

describe("fatigue", () => {
  it("ticks 1, 2, 3 after the deck is empty", () => {
    const s = createMatch({ seed: 6 });
    startMatch(s);
    s.player.deck = [];
    s.player.hero.fatigue = 0;
    const hp = s.player.hero.hp;
    drawCard(s, PLAYER);
    drawCard(s, PLAYER);
    drawCard(s, PLAYER);
    assert.equal(s.player.hero.hp, hp - 6);
  });
});

describe("signals", () => {
  it("Factory Reset strips keywords and pending Shatter", () => {
    const s = createMatch({ seed: 8 });
    startMatch(s);
    s.player.mana = 10;
    const node = instantiate("directory_node");
    s.ai.board = [node];
    const reset = instantiate("factory_reset");
    s.player.hand = [reset];
    playCard(s, PLAYER, reset.uid, node.uid);
    assert.equal(node.keywords.static, false);
    assert.equal(node.shatter, null);
    dealDamage(s, { kind: "unit", unit: node }, 20, "x");
    assert.equal(s.ai.board.some((u) => u.defId === "tessera_grunt"), false);
  });
});

describe("AI Remote", () => {
  it("picks a Remote target when the AI is CRT Head", () => {
    const s = createMatch({ seed: 21, playerFaction: "tessera" });
    startMatch(s);
    endTurn(s, PLAYER);
    s.ai.hand = [];
    s.ai.mana = 2;
    s.ai.maxMana = 2;
    s.ai.hero.powerUsed = false;
    s.ai.board = [];
    const action = pickAiAction(s);
    assert.equal(action.type, "power");
    assert.equal(action.targetId, HERO_IDS[PLAYER]);
  });
});

describe("AI sitting", () => {
  it("plays out a full match without hanging", () => {
    resetIds(1);
    const s = createMatch({ seed: 99 });
    startMatch(s);
    let guard = 0;
    while (!s.winner && guard < 80) {
      if (s.turn === PLAYER) {
        const hand = s.player.hand.slice();
        for (const c of hand) {
          if (s.winner || s.turn !== PLAYER) break;
          playCard(s, PLAYER, c.uid, HERO_IDS[AI]);
        }
        if (s.player.mana >= 2 && !s.player.hero.powerUsed) {
          useHeroPower(s, PLAYER, HERO_IDS[AI]);
        }
        for (const u of s.player.board.slice()) {
          if (s.winner || s.turn !== PLAYER) break;
          attack(s, PLAYER, u.uid, HERO_IDS[AI]);
        }
        if (s.winner) break;
        if (s.turn === PLAYER) endTurn(s, PLAYER);
      } else {
        runAiTurn(s);
        if (s.winner) break;
        if (s.turn === AI) endTurn(s, AI);
      }
      guard += 1;
    }
    assert.ok(s.winner, "someone should win");
    assert.ok(guard < 80, "no infinite think");
  });
});
