import { readFileSync, writeFileSync } from 'node:fs';

const parseGlyphRun = (path, { tracking = 0 } = {}) => {
  const source = readFileSync(path, 'utf8');
  const glyphs = new Map();

  for (const match of source.matchAll(/<g id="([^"]+)">\s*(?:<path d="([^"]*)"\s*\/>\s*)?<\/g>/g)) {
    glyphs.set(match[1], match[2] ?? '');
  }

  const paths = [];
  let characterIndex = 0;
  for (const match of source.matchAll(/<use xlink:href="#([^"]+)" x="([^"]+)" y="([^"]+)"\s*\/>/g)) {
    const [, id, x, y] = match;
    const data = glyphs.get(id);
    const trackedX = Number(x) + characterIndex * tracking;
    if (data) paths.push(`<path d="${data}" transform="translate(${trackedX} ${y})"/>`);
    characterIndex += 1;
  }

  if (paths.length === 0) {
    throw new Error(`No se pudieron extraer contornos desde ${path}`);
  }

  return paths.join('\n      ');
};

const multi = parseGlyphRun('svg/wordmark-multi-contornos.svg');
const pro = parseGlyphRun('svg/wordmark-pro-contornos.svg');
const tagline = parseGlyphRun('svg/wordmark-tagline-contornos.svg', { tracking: 7 });
const subtagline = parseGlyphRun('svg/wordmark-subtagline-contornos.svg', { tracking: 6 });

const symbol = ({ inverted = false, y = 10 } = {}) => `
  <g transform="translate(10 ${y}) scale(.65)">
    <path fill="${inverted ? '#FFFFFF' : '#007F73'}" d="M40 88h84l52 56 52-56h84v336h-84V240l-52 52-52-52v184H40V88Z"/>
    <path fill="#6F21F5" d="m176 292 52-52v184h-52V292Z"/>
    <path fill="#FF5A3C" fill-rule="evenodd" d="M326 88h76c48 0 86 38 86 92s-38 92-86 92h-4v152h-72V88Zm72 64v56h8c18 0 30-10 30-28s-12-28-30-28h-8Z"/>
  </g>`;

const wordmark = ({ inverted = false, y = 48 } = {}) => `
  <g fill="${inverted ? '#FFFFFF' : '#17211F'}" transform="translate(360 ${y})">
      ${multi}
  </g>
  <g fill="#FF5A3C" transform="translate(725 ${y})">
      ${pro}
  </g>`;

const makeSignature = ({ inverted = false } = {}) => `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="340" viewBox="0 0 1080 340" role="img" aria-labelledby="title desc">
  <title id="title">Firma completa Multi PRO en contornos${inverted ? ' en reverso' : ''}</title>
  <desc id="desc">Master vectorial portable y transparente para ${inverted ? 'fondos oscuros' : 'fondos claros'}.</desc>
${symbol({ inverted })}
${wordmark({ inverted })}
  <g fill="${inverted ? '#FFFFFF' : '#007F73'}" transform="translate(365 246)">
      ${tagline}
  </g>
  <rect x="365" y="302" width="90" height="10" fill="#FF5A3C"/>
  <g fill="${inverted ? '#FFFFFF' : '#17211F'}" transform="translate(483 302)">
      ${subtagline}
  </g>
</svg>
`;

const makeSimpleLockup = ({ inverted = false } = {}) => `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1040" height="260" viewBox="0 0 1040 260" role="img" aria-labelledby="title desc">
  <title id="title">Lockup simplificado Multi PRO en contornos${inverted ? ' en reverso' : ''}</title>
  <desc id="desc">Versión sin lemas para tamaños medianos sobre ${inverted ? 'fondos oscuros' : 'fondos claros'}.</desc>
${symbol({ inverted, y: -30 })}
${wordmark({ inverted, y: 28 })}
</svg>
`;

writeFileSync('svg/logo-horizontal-contornos.svg', makeSignature());
writeFileSync('svg/logo-horizontal-contornos-invertido.svg', makeSignature({ inverted: true }));
writeFileSync('svg/logo-horizontal-simple-contornos.svg', makeSimpleLockup());
writeFileSync('svg/logo-horizontal-simple-contornos-invertido.svg', makeSimpleLockup({ inverted: true }));
