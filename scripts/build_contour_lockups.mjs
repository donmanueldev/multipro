import { readFileSync, writeFileSync } from 'node:fs';

const readSvg = (path, replacements = []) => {
  let source = readFileSync(path, 'utf8');
  for (const [from, to] of replacements) source = source.replaceAll(from, to);
  return Buffer.from(source).toString('base64');
};

const multi = readSvg('svg/wordmark-multi-contornos.svg');
const pro = readSvg('svg/wordmark-pro-contornos.svg');
const tagline = readSvg('svg/wordmark-tagline-contornos.svg');
const whiteMulti = readSvg('svg/wordmark-multi-contornos.svg', [
  ['rgb(9.019608%, 12.941176%, 12.156863%)', 'rgb(100%, 100%, 100%)'],
]);
const whiteTagline = readSvg('svg/wordmark-tagline-contornos.svg', [
  ['rgb(0%, 49.803922%, 45.098039%)', 'rgb(100%, 100%, 100%)'],
]);

const symbol = `
  <g transform="translate(10 10) scale(.65)">
    <path fill="#007F73" d="M40 88h84l52 56 52-56h84v336h-84V240l-52 52-52-52v184H40V88Z"/>
    <path fill="#6F21F5" d="m176 292 52-52v184h-52V292Z"/>
    <path fill="#FF5A3C" fill-rule="evenodd" d="M326 88h76c48 0 86 38 86 92s-38 92-86 92h-4v152h-72V88Zm72 64v56h8c18 0 30-10 30-28s-12-28-30-28h-8Z"/>
  </g>`;

const makeLockup = ({ dark = false } = {}) => `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="340" viewBox="0 0 1080 340" role="img" aria-labelledby="title desc">
  <title id="title">Logo horizontal Multi PRO en contornos${dark ? ' para fondo oscuro' : ''}</title>
  <desc id="desc">Master vectorial portable sin dependencia de fuentes instaladas.</desc>
  ${dark ? '<rect width="1080" height="340" fill="#17211F"/>' : ''}
  ${symbol}
  <image href="data:image/svg+xml;base64,${dark ? whiteMulti : multi}" x="360" y="48" width="339" height="187.875"/>
  <image href="data:image/svg+xml;base64,${pro}" x="725" y="48" width="285" height="187.875"/>
  <image href="data:image/svg+xml;base64,${dark ? whiteTagline : tagline}" x="365" y="246" width="307" height="34.15625"/>
  <rect x="365" y="302" width="90" height="10" fill="#FF5A3C"/>
</svg>
`;

writeFileSync('svg/logo-horizontal-contornos.svg', makeLockup());
writeFileSync('svg/logo-horizontal-contornos-invertido.svg', makeLockup({ dark: true }));
