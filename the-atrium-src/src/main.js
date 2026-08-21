import "./style.css";
import { createInput } from "./input.js";
import { createGame, W, H } from "./game.js";
import { unlockAudio, startMusic, bindMuteButton, armThemeUnlock, pollThemeUnlock } from "./audio.js";

const canvas = document.getElementById("game");
const stage = document.getElementById("stage");
const touchRoot = document.getElementById("touch");
const input = createInput(canvas, {
  root: touchRoot,
  left: document.getElementById("stickL"),
  right: document.getElementById("stickR"),
});
const game = createGame(canvas, input);

function fit() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const scale = Math.min(vw / W, vh / H);
  stage.style.transform = `scale(${scale})`;
}

fit();
window.addEventListener("resize", fit);
window.addEventListener("orientationchange", fit);

bindMuteButton(document.getElementById("mute"));
armThemeUnlock();
startMusic();
unlockAudio();

let last = performance.now();
function frame(now) {
  const dt = Math.min(0.05, (now - last) / 1000);
  last = now;
  if (!document.hidden) {
    pollThemeUnlock();
    game.update(dt);
    game.draw();
  }
  input.endFrame();
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
