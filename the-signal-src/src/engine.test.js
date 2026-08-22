import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { CRT_DECK_IDS, TESSERA_DECK_IDS, CATALOG } from "./cards.js";
import {
  AI,
  PLAYER,
  HERO_IDS,
  attack,
  beginTurn,
  createMatch,
  dealDamage,
  drawCard,
  endTurn,
  playCard,
  sideOf,
  startMatch,
  useHeroPower,
  instantiate,
  resetIds,
} from "./engine.js";
import { runAiTurn } from "./ai.js";

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

  it("CRT list matches the printed copies", () => {
    assert.equal(CRT_DECK_IDS.length, 33);
    assert.equal(CRT_DECK_IDS.filter((id) => id === "mall_rat").length, 2);
    assert.equal(CRT_DECK_IDS.filter((id) => id === "prize_clerk").length, 1);
    assert.equal(CRT_DECK_IDS.filter((id) => id === "remote_hand").length, 2);
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
