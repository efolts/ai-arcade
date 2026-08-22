import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const dir = join(dirname(fileURLToPath(import.meta.url)), "../src/art/cards");
mkdirSync(dir, { recursive: true });

const CRT = {
  bg: "#071014",
  mid: "#0d2428",
  accent: "#3de6ff",
  ink: "#d7f7ff",
  dust: "#14343a",
};
const TESS = {
  bg: "#161410",
  mid: "#2a261e",
  accent: "#f0b44a",
  ink: "#f4f1ea",
  dust: "#5a4a2a",
};

function svg(body, pal) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" width="640" height="480">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${pal.mid}"/>
      <stop offset="1" stop-color="${pal.bg}"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="42%" r="48%">
      <stop offset="0" stop-color="${pal.accent}" stop-opacity="0.42"/>
      <stop offset="1" stop-color="${pal.bg}" stop-opacity="0"/>
    </radialGradient>
    <pattern id="scan" width="640" height="4" patternUnits="userSpaceOnUse">
      <rect width="640" height="1" fill="#000" opacity="0.28"/>
    </pattern>
  </defs>
  <rect width="640" height="480" fill="url(#sky)"/>
  <rect width="640" height="480" fill="url(#glow)"/>
  ${body}
  <rect width="640" height="480" fill="url(#scan)" opacity="0.55"/>
  <rect x="10" y="10" width="620" height="460" fill="none" stroke="${pal.accent}" stroke-opacity="0.28"/>
</svg>`;
}

function iconPlate(pal, mark) {
  return svg(
    `<rect x="70" y="320" width="500" height="8" fill="${pal.dust}" opacity="0.5"/>
     <g transform="translate(320 230)" fill="${pal.accent}">${mark}</g>`,
    pal
  );
}

const plates = {
  "mall-rat": svg(
    `<path d="M40 400 Q180 280 320 360 T620 390 L620 480 L0 480Z" fill="#0a1814"/>
     <rect x="250" y="168" width="92" height="72" rx="4" fill="#1a2224" stroke="${CRT.accent}"/>
     <rect x="262" y="180" width="22" height="36" fill="${CRT.accent}"/>
     <rect x="308" y="180" width="22" height="36" fill="${CRT.accent}"/>
     <path d="M270 240 L370 250 L390 390 L240 390Z" fill="#2a2a28"/>
     <circle cx="120" cy="90" r="3" fill="${CRT.accent}" opacity="0.4"/>`,
    CRT
  ),
  scanline: svg(
    `<path d="M80 360 L220 140 L280 140 L420 360" fill="none" stroke="${CRT.accent}" stroke-width="3"/>
     <path d="M180 250 L360 210 L400 360" fill="${CRT.accent}" opacity="0.18"/>
     <rect x="0" y="90" width="640" height="8" fill="${CRT.accent}" opacity="0.12"/>
     <rect x="0" y="210" width="640" height="6" fill="${CRT.accent}" opacity="0.16"/>
     <rect x="0" y="330" width="640" height="8" fill="${CRT.accent}" opacity="0.12"/>`,
    CRT
  ),
  "fountain-guard": svg(
    `<ellipse cx="430" cy="360" rx="150" ry="28" fill="${CRT.accent}" opacity="0.25"/>
     <rect x="380" y="250" width="100" height="110" fill="#1a3034"/>
     <rect x="200" y="150" width="90" height="230" fill="#161616"/>
     <rect x="248" y="118" width="56" height="40" fill="#111" stroke="${CRT.accent}"/>
     <rect x="258" y="126" width="36" height="24" fill="${CRT.accent}"/>`,
    CRT
  ),
  "krcd-intern": svg(
    `<rect x="360" y="80" width="70" height="54" fill="#111" stroke="${CRT.accent}"/>
     <rect x="440" y="90" width="90" height="70" fill="#111" stroke="${CRT.accent}"/>
     <rect x="370" y="150" width="150" height="90" fill="#111" stroke="${CRT.accent}"/>
     <rect x="372" y="96" width="46" height="30" fill="${CRT.accent}" opacity="0.8"/>
     <path d="M210 200 q20-60 70-40 q20 10 18 50 v150 h-90z" fill="#243040"/>
     <circle cx="248" cy="178" r="22" fill="#d8c4a2"/>`,
    CRT
  ),
  "prize-clerk": svg(
    `<rect x="80" y="300" width="480" height="40" fill="#3a2414"/>
     <rect x="430" y="210" width="70" height="54" rx="6" fill="#1a4a4e" stroke="${CRT.accent}"/>
     <rect x="442" y="222" width="46" height="30" fill="${CRT.accent}"/>
     <path d="M250 180 h90 v40 h-90z" fill="#2a1c14"/>
     <circle cx="296" cy="168" r="20" fill="#c8b090"/>
     <rect x="120" y="120" width="40" height="50" fill="#8a6a3a"/>
     <rect x="170" y="130" width="36" height="40" fill="#6a4a28"/>`,
    CRT
  ),
  "antenna-kid": svg(
    `<path d="M300 90 L308 220 L292 220Z" fill="#8aa0a8"/>
     <rect x="250" y="220" width="100" height="80" fill="#2a2e32"/>
     <circle cx="270" cy="250" r="4" fill="#ff4a4a"/>
     <rect x="300" y="250" width="70" height="54" fill="#111" stroke="${CRT.accent}"/>
     <rect x="312" y="262" width="46" height="30" fill="${CRT.accent}"/>
     <circle cx="250" cy="210" r="18" fill="#1a1a1a"/>
     <circle cx="258" cy="206" r="6" fill="${CRT.accent}"/>`,
    CRT
  ),
  "remote-hand": svg(
    `<path d="M80 400 L200 220 L260 250 L140 430Z" fill="#222"/>
     <path d="M380 400 L520 210 L580 250 L450 430Z" fill="#222"/>
     <path d="M210 230 L320 160 L360 180 L250 250Z" fill="${CRT.accent}" opacity="0.55"/>
     <rect x="270" y="80" width="90" height="70" fill="#111" stroke="${CRT.accent}"/>
     <circle cx="296" cy="110" r="10" fill="${CRT.accent}"/>
     <circle cx="334" cy="110" r="10" fill="${CRT.accent}"/>`,
    CRT
  ),
  "mother-sprout": svg(
    `<ellipse cx="320" cy="220" rx="90" ry="70" fill="#14240e"/>
     <path d="M230 210 Q320 40 410 210" fill="#1d3a14" stroke="#6a8a3a"/>
     <path d="M250 200 Q320 280 390 200" fill="#081208"/>
     <rect x="150" y="250" width="50" height="38" fill="#111" stroke="${CRT.accent}"/>
     <rect x="430" y="230" width="56" height="42" fill="#111" stroke="${CRT.accent}"/>
     <rect x="300" y="300" width="64" height="46" fill="#111" stroke="${CRT.accent}"/>`,
    CRT
  ),
  "signal-ghost": svg(
    `<path d="M320 70 q90 20 90 120 q0 90-40 160 l-50 70 -50-70 q-40-70-40-160 q0-100 90-120z" fill="${CRT.accent}" opacity="0.55"/>
     <ellipse cx="320" cy="150" rx="28" ry="34" fill="#041014"/>
     <path d="M250 250 L200 290" stroke="${CRT.accent}" stroke-width="6"/>
     <path d="M390 250 L450 290" stroke="${CRT.accent}" stroke-width="6"/>`,
    CRT
  ),
  ironhorse: svg(
    `<path d="M180 300 L250 160 L390 140 L500 220 L470 340 L200 350Z" fill="#2a2c30"/>
     <rect x="250" y="110" width="90" height="40" fill="#3a3a3a"/>
     <circle cx="230" cy="180" r="8" fill="${CRT.accent}"/>
     <rect x="300" y="200" width="70" height="8" fill="${CRT.accent}"/>
     <rect x="210" y="260" width="12" height="90" fill="#444"/>
     <rect x="400" y="260" width="12" height="90" fill="#444"/>`,
    CRT
  ),
  "crt-lead": svg(
    `<rect x="270" y="90" width="100" height="76" fill="#3a2a18" stroke="${CRT.accent}"/>
     <rect x="284" y="104" width="24" height="40" fill="${CRT.accent}"/>
     <rect x="332" y="104" width="24" height="40" fill="${CRT.accent}"/>
     <path d="M240 170 h160 l30 200 h-220z" fill="#161616"/>
     <rect x="120" y="280" width="40" height="70" fill="#111"/>
     <rect x="480" y="270" width="40" height="80" fill="#111"/>`,
    CRT
  ),
  "dino-mech": svg(
    `<path d="M120 340 L220 250 L360 220 L500 160 L540 210 L420 260 L400 360 L180 380Z" fill="#2a2216"/>
     <circle cx="500" cy="180" r="16" fill="${CRT.accent}"/>
     <path d="M500 170 L580 150 L560 190Z" fill="#1a1610"/>
     <rect x="260" y="300" width="18" height="90" fill="#3a3224"/>
     <rect x="360" y="300" width="18" height="90" fill="#3a3224"/>`,
    CRT
  ),
  "atrium-colossus": svg(
    `<rect x="230" y="150" width="180" height="240" fill="#2a3236"/>
     <rect x="268" y="70" width="104" height="80" fill="#111" stroke="${CRT.accent}"/>
     <circle cx="300" cy="110" r="14" fill="${CRT.accent}"/>
     <circle cx="340" cy="110" r="14" fill="${CRT.accent}"/>
     <rect x="210" y="390" width="220" height="30" fill="#1a2024"/>
     <rect x="80" y="80" width="8" height="300" fill="#0a1014"/>
     <rect x="552" y="80" width="8" height="300" fill="#0a1014"/>`,
    CRT
  ),
  "tessera-grunt": svg(
    `<path d="M270 120 h100 l16 40 v40 h-132 v-40z" fill="#f2eee6"/>
     <rect x="286" y="138" width="68" height="28" fill="#111"/>
     <path d="M250 200 h140 l20 180 h-180z" fill="#ebe6dc"/>
     <rect x="290" y="230" width="90" height="16" fill="#1a1a1a"/>`,
    TESS
  ),
  rusher: svg(
    `<path d="M300 110 l40 20 -8 50 -70 20 8-50z" fill="#f0ece4"/>
     <rect x="312" y="128" width="40" height="16" fill="#111"/>
     <path d="M250 190 L420 170 L400 360 L220 350Z" fill="#e6e0d4"/>
     <path d="M420 200 L520 160 L500 190 L420 220Z" fill="${TESS.accent}"/>`,
    TESS
  ),
  mannequin: svg(
    `<ellipse cx="320" cy="130" rx="36" ry="42" fill="#f4f0e8"/>
     <rect x="304" y="118" width="32" height="16" fill="#111"/>
     <path d="M260 180 h120 l16 200 h-152z" fill="#ddd6c8"/>
     <circle cx="250" cy="230" r="10" fill="#c8c0b4"/>
     <circle cx="390" cy="230" r="10" fill="#c8c0b4"/>`,
    TESS
  ),
  shotgunner: svg(
    `<path d="M280 120 h70 l12 36 h-94z" fill="#ece6da"/>
     <rect x="296" y="132" width="46" height="16" fill="#111"/>
     <path d="M240 190 h160 l10 180 h-180z" fill="#cfc8ba"/>
     <rect x="360" y="230" width="150" height="14" fill="#222"/>
     <rect x="490" y="224" width="40" height="26" fill="#111"/>`,
    TESS
  ),
  elite: svg(
    `<path d="M270 110 h100 l10 40 h-120z" fill="#f7f4ee"/>
     <rect x="288" y="124" width="64" height="20" fill="#111"/>
     <path d="M240 180 h160 l18 200 h-196z" fill="#e8e0d0"/>
     <polygon points="320,200 360,240 320,280 280,240" fill="${TESS.ink}"/>`,
    TESS
  ),
  "security-tank": svg(
    `<rect x="160" y="180" width="320" height="180" rx="16" fill="#c8c2b6"/>
     <rect x="200" y="130" width="160" height="70" fill="#d8d2c6"/>
     <rect x="230" y="148" width="100" height="28" fill="#111"/>
     <rect x="120" y="330" width="80" height="28" fill="#4a463c"/>
     <rect x="440" y="330" width="80" height="28" fill="#4a463c"/>
     <rect x="420" y="210" width="110" height="18" fill="#222"/>`,
    TESS
  ),
  "visor-priest": svg(
    `<path d="M300 90 l40 10 10 50 -60 0z" fill="#f2eee6"/>
     <rect x="308" y="108" width="40" height="22" fill="#111"/>
     <path d="M250 170 h140 l10 210 h-160z" fill="#e6e0d4"/>
     <path d="M300 200 l20-40 20 40" fill="${TESS.accent}"/>`,
    TESS
  ),
  "directory-node": svg(
    `<rect x="200" y="120" width="240" height="220" fill="#d8d2c6"/>
     <rect x="230" y="150" width="180" height="80" fill="#111"/>
     <rect x="250" y="170" width="40" height="12" fill="${TESS.accent}"/>
     <rect x="300" y="190" width="80" height="8" fill="${TESS.accent}" opacity="0.5"/>
     <rect x="220" y="360" width="200" height="20" fill="#8a8478"/>`,
    TESS
  ),
  "tessera-captain": svg(
    `<path d="M270 100 h100 l14 44 h-128z" fill="#f4f0e6"/>
     <rect x="288" y="116" width="64" height="22" fill="#111"/>
     <path d="M220 180 h200 l16 210 h-232z" fill="#e8dfc8"/>
     <rect x="300" y="210" width="40" height="70" fill="${TESS.accent}"/>`,
    TESS
  ),
  "the-directory": svg(
    `<rect x="180" y="80" width="280" height="320" fill="#d4cfc4"/>
     <rect x="210" y="110" width="220" height="90" fill="#111"/>
     <rect x="230" y="130" width="80" height="18" fill="${TESS.accent}"/>
     <rect x="230" y="160" width="140" height="10" fill="${TESS.ink}" opacity="0.4"/>
     <rect x="220" y="230" width="200" height="120" fill="#b8b2a6"/>`,
    TESS
  ),
  "cyan-bolt": iconPlate(CRT, `<polygon points="-18,-70 22,-70 -6,-8 36,-8 -28,70 -4,8 -40,8"/>`),
  "static-field": iconPlate(CRT, `<rect x="-70" y="-16" width="140" height="12"/><rect x="-8" y="-70" width="16" height="140"/>`),
  "mesh-coat": iconPlate(CRT, `<polygon points="0,-70 60,-20 44,70 -44,70 -60,-20"/>`),
  "shatter-burst": iconPlate(CRT, `<polygon points="0,-72 16,-16 72,-16 26,16 44,72 0,36 -44,72 -26,16 -72,-16 -16,-16"/>`),
  "well-be-right-back": iconPlate(CRT, `<rect x="-54" y="-36" width="108" height="72" fill="none" stroke="${CRT.accent}" stroke-width="10"/><path d="M-20 -8 h40 v16 h-40z"/>`),
  broadcast: iconPlate(CRT, `<circle r="16"/><path d="M-40 -10 a48 48 0 0 1 80 0" fill="none" stroke="${CRT.accent}" stroke-width="10"/><path d="M-62 -28 a78 78 0 0 1 124 0" fill="none" stroke="${CRT.accent}" stroke-width="8"/>`),
  "fountain-surge": iconPlate(CRT, `<path d="M-60 40 h120 v16 h-120z"/><path d="M-8 40 v-90 h16 v90z"/><circle cx="0" cy="-70" r="18"/>`),
  "dual-remotes": iconPlate(CRT, `<rect x="-50" y="-60" width="36" height="120" rx="6"/><rect x="14" y="-60" width="36" height="120" rx="6"/>`),
  shovel: iconPlate(CRT, `<rect x="-8" y="-80" width="16" height="90"/><path d="M-28 10 h56 l-10 60 h-36z"/>`),
  "amber-pellet": iconPlate(TESS, `<circle r="28"/><circle r="10" fill="${TESS.bg}"/>`),
  lockdown: iconPlate(TESS, `<rect x="-40" y="-8" width="80" height="14"/><rect x="-8" y="-50" width="16" height="100"/>`),
  "factory-reset": iconPlate(TESS, `<path d="M-40 -20 a50 50 0 1 0 20 -28" fill="none" stroke="${TESS.accent}" stroke-width="12"/><polygon points="20,-60 50,-20 0,-20"/>`),
  volley: iconPlate(TESS, `<polygon points="0,-70 18,-10 70,-10 28,20 44,70 0,36 -44,70 -28,20 -70,-10 -18,-10"/>`),
  "recall-protocol": iconPlate(TESS, `<rect x="-50" y="-36" width="100" height="72" fill="none" stroke="${TESS.accent}" stroke-width="10"/><rect x="-16" y="-16" width="32" height="32"/>`),
  "atrium-sweep": iconPlate(TESS, `<path d="M-70 20 h140 l-20 30 h-100z"/><path d="M-40 -40 h80 l10 50 h-100z"/>`),
  "amber-cannon": iconPlate(TESS, `<rect x="-70" y="-16" width="90" height="32"/><circle cx="40" cy="0" r="22"/>`),
  "visor-blade": iconPlate(TESS, `<polygon points="-10,70 10,70 6,-40 -6,-40"/><polygon points="-6,-40 6,-40 0,-80"/>`),
  coin: iconPlate(TESS, `<circle r="54" fill="none" stroke="${TESS.accent}" stroke-width="12"/><circle r="18"/>`),
};

for (const [name, xml] of Object.entries(plates)) {
  writeFileSync(join(dir, `${name}.svg`), xml);
}
console.log(`wrote ${Object.keys(plates).length} svg plates`);
