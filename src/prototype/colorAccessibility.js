function normalizeHex(hex) {
  const match = /^#?([0-9a-f]{6})$/i.exec(String(hex || '').trim());
  return match ? '#' + match[1].toUpperCase() : null;
}

function hexToRgb(hex) {
  const normalized = normalizeHex(hex);
  return normalized
    ? [1, 3, 5].map((index) => parseInt(normalized.slice(index, index + 2), 16))
    : null;
}

function rgbToHex([r, g, b]) {
  return '#' + [r, g, b]
    .map((channel) => Math.max(0, Math.min(255, Math.round(channel))).toString(16).padStart(2, '0'))
    .join('')
    .toUpperCase();
}

function hexToHsl(hex) {
  const rgb = hexToRgb(hex);
  if (!rgb) return null;
  const [r, g, b] = rgb.map((channel) => channel / 255);
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;
  let h = 0;
  if (delta) {
    if (max === r) h = ((g - b) / delta) % 6;
    else if (max === g) h = (b - r) / delta + 2;
    else h = (r - g) / delta + 4;
    h = (h * 60 + 360) % 360;
  }
  const l = (max + min) / 2;
  const s = delta ? delta / (1 - Math.abs(2 * l - 1)) : 0;
  return [h, s, l];
}

function hslToHex(h, s, l) {
  const hue = ((h % 360) + 360) % 360;
  const chroma = (1 - Math.abs(2 * l - 1)) * s;
  const x = chroma * (1 - Math.abs((hue / 60) % 2 - 1));
  const m = l - chroma / 2;
  let rgb;
  if (hue < 60) rgb = [chroma, x, 0];
  else if (hue < 120) rgb = [x, chroma, 0];
  else if (hue < 180) rgb = [0, chroma, x];
  else if (hue < 240) rgb = [0, x, chroma];
  else if (hue < 300) rgb = [x, 0, chroma];
  else rgb = [chroma, 0, x];
  return rgbToHex(rgb.map((channel) => (channel + m) * 255));
}

export function getRelativeLuminance(hex) {
  const rgb = hexToRgb(hex);
  if (!rgb) return 0;
  const channels = rgb.map((channel) => {
    const value = channel / 255;
    return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

export function getContrastRatio(fgHex, bgHex) {
  const fg = getRelativeLuminance(fgHex);
  const bg = getRelativeLuminance(bgHex);
  return (Math.max(fg, bg) + 0.05) / (Math.min(fg, bg) + 0.05);
}

export function ensureWcagContrast(fgHex, bgHex, minRatio = 4.5) {
  const foreground = normalizeHex(fgHex) || '#000000';
  const background = normalizeHex(bgHex) || '#FFFFFF';
  if (getContrastRatio(foreground, background) >= minRatio) return foreground;
  const hsl = hexToHsl(foreground);
  if (!hsl) return foreground;
  const [h, saturation, lightness] = hsl;
  const adjustedSaturation = Math.max(0.08, Math.min(0.82, saturation));
  const backgroundLum = getRelativeLuminance(background);
  const direction = backgroundLum > 0.42 ? -1 : 1;
  for (let step = 1; step <= 100; step += 1) {
    const adjustedLightness = Math.max(0.01, Math.min(0.99, lightness + direction * step * 0.009));
    const candidate = hslToHex(h, adjustedSaturation, adjustedLightness);
    if (getContrastRatio(candidate, background) >= minRatio) return candidate;
  }
  return getAccessibleOnColor(background);
}

export function getAccessibleOnColor(bgHex) {
  const white = getContrastRatio('#FFFFFF', bgHex);
  const ink = getContrastRatio('#0F172A', bgHex);
  return white >= ink ? '#FFFFFF' : '#0F172A';
}

export function tintFromHue(hex, saturation, lightness) {
  const hsl = hexToHsl(hex);
  return hsl ? hslToHex(hsl[0], saturation, lightness) : '#64748B';
}

export function ensureAgainstSurfaces(fgHex, surfaces, minRatio) {
  const foreground = normalizeHex(fgHex) || '#000000';
  let candidate = foreground;
  surfaces.forEach((surface) => {
    candidate = ensureWcagContrast(candidate, surface, minRatio);
  });
  if (surfaces.every((surface) => getContrastRatio(candidate, surface) >= minRatio)) return candidate;
  return surfaces.every((surface) => getContrastRatio('#FFFFFF', surface) >= minRatio)
    ? '#FFFFFF'
    : '#0F172A';
}
