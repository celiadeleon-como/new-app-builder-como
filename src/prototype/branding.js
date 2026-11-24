import {
  ensureAgainstSurfaces, ensureWcagContrast, getAccessibleOnColor,
  getContrastRatio, tintFromHue,
} from './colorAccessibility.js';

export function initBranding(ctx) {
  const { markDirty, showToast } = ctx;

  const brandColors = {
    primary: '#262AFF',
    secondary: '#00A884',
    extractedSwatches: [],
    secondaryManuallySet: false,
  };
  const PRIMARY_PRESETS = ['#262AFF', '#6D28D9', '#C7355A', '#0F766E', '#1D4ED8'];
  const SECONDARY_PRESETS = ['#00A884', '#F59E0B', '#EC4899', '#84CC16', '#8B5CF6'];

  function normalizeBrandHex(value) {
    const hex = String(value || '').trim();
    const match = /^#?([0-9a-f]{6})$/i.exec(hex);
    return match ? '#' + match[1].toUpperCase() : null;
  }

  function brandHexToHsl(hex) {
    const [r, g, b] = [1, 3, 5].map((index) => parseInt(hex.slice(index, index + 2), 16) / 255);
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const delta = max - min;
    let h = 0;
    if (delta) {
      if (max === r) h = ((g - b) / delta) % 6;
      else if (max === g) h = (b - r) / delta + 2;
      else h = (r - g) / delta + 4;
      h *= 60;
      if (h < 0) h += 360;
    }
    const l = (max + min) / 2;
    const s = delta ? delta / (1 - Math.abs(2 * l - 1)) : 0;
    return [h, s, l];
  }

  function brandHslToHex(h, s, l) {
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs((h / 60) % 2 - 1));
    const m = l - c / 2;
    let rgb;
    if (h < 60) rgb = [c, x, 0];
    else if (h < 120) rgb = [x, c, 0];
    else if (h < 180) rgb = [0, c, x];
    else if (h < 240) rgb = [0, x, c];
    else if (h < 300) rgb = [x, 0, c];
    else rgb = [c, 0, x];
    return '#' + rgb.map((channel) => Math.round((channel + m) * 255).toString(16).padStart(2, '0')).join('').toUpperCase();
  }

  function harmoniousSecondary(primary) {
    const [h, s, l] = brandHexToHsl(primary);
    const balancedSaturation = Math.min(0.76, Math.max(0.42, s));
    const balancedLightness = Math.min(0.58, Math.max(0.42, l));
    return brandHslToHex((h + 30) % 360, balancedSaturation, balancedLightness);
  }

  function relativeLuminance(hex) {
    const channels = [1, 3, 5].map((index) => {
      const value = parseInt(hex.slice(index, index + 2), 16) / 255;
      return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
    });
    return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
  }

  function contrastRatio(a, b) {
    const first = relativeLuminance(a);
    const second = relativeLuminance(b);
    return (Math.max(first, second) + 0.05) / (Math.min(first, second) + 0.05);
  }

  function getContrastTextColor(hex) {
    const normalized = normalizeBrandHex(hex);
    if (!normalized) return '#FFFFFF';
    return contrastRatio(normalized, '#FFFFFF') >= contrastRatio(normalized, '#111827') ? '#FFFFFF' : '#111827';
  }

  function renderBrandSwatches() {
    document.querySelectorAll('[data-brand-swatches]').forEach((row) => {
      const role = row.dataset.brandSwatches;
      row.innerHTML = brandColors.extractedSwatches.map((hex) => {
        const active = normalizeBrandHex(brandColors[role]) === normalizeBrandHex(hex);
        return `<button type="button" class="brand-extracted-swatch${active ? ' selected' : ''}" style="--swatch:${hex}" data-brand-swatch="${role}" data-color="${hex}" aria-label="Use ${hex} as ${role} color"></button>`;
      }).join('');
      row.hidden = brandColors.extractedSwatches.length === 0;
      if (row.parentElement) row.parentElement.hidden = brandColors.extractedSwatches.length === 0;
      row.querySelectorAll('[data-brand-swatch]').forEach((button) => button.addEventListener('click', () => {
        setBrandColor(button.dataset.brandSwatch, button.dataset.color, true);
      }));
    });
  }

  function renderBrandPresets() {
    document.querySelectorAll('[data-brand-presets]').forEach((row) => {
      const role = row.dataset.brandPresets;
      const presets = role === 'primary' ? PRIMARY_PRESETS : SECONDARY_PRESETS;
      row.innerHTML = presets.map((hex) => `<button type="button" class="brand-preset-swatch${brandColors[role] === hex ? ' selected' : ''}" style="--swatch:${hex}" data-brand-preset="${role}" data-color="${hex}" aria-label="Use preset ${hex}"></button>`).join('');
      row.querySelectorAll('[data-brand-preset]').forEach((button) => button.addEventListener('click', () => {
        setBrandColor(button.dataset.brandPreset, button.dataset.color, true);
      }));
    });
  }

  function syncBrandColorControls() {
    ['primary', 'secondary'].forEach((role) => {
      const hex = brandColors[role];
      const picker = document.querySelector(`[data-brand-color="${role}"]`);
      const text = document.querySelector(`[data-brand-color-hex="${role}"]`);
      if (picker) {
        picker.value = hex;
        picker.parentElement.style.background = hex;
      }
      if (text && document.activeElement !== text) text.value = hex.toUpperCase();
    });
    const auto = document.getElementById('brand-secondary-auto');
    if (auto) auto.hidden = !brandColors.secondaryManuallySet;
    renderBrandSwatches();
    renderBrandPresets();
  }

  function applyBrandPalette(options = {}) {
    document.body.style.setProperty('--p-accent', brandColors.primary);
    document.body.style.setProperty('--p-secondary', brandColors.secondary);
    document.body.style.setProperty('--p-accent-ink', getContrastTextColor(brandColors.primary));
    document.body.style.setProperty('--p-secondary-ink', getContrastTextColor(brandColors.secondary));
    window.syncColorVar?.('--p-accent', brandColors.primary);
    window.syncColorVar?.('--p-secondary', brandColors.secondary);
    document.body.style.setProperty('--p-accent-ink', getContrastTextColor(brandColors.primary));
    document.body.style.setProperty('--p-secondary-ink', getContrastTextColor(brandColors.secondary));
    syncBrandColorControls();
    document.dispatchEvent(new CustomEvent('como:brand-colors', { detail: { ...brandColors } }));
    if (options.dirty !== false) markDirty();
  }

  function setBrandColor(role, value, manual = false) {
    const hex = normalizeBrandHex(value);
    if (!hex || !['primary', 'secondary'].includes(role)) return;
    brandColors[role] = hex;
    if (role === 'primary' && !brandColors.secondaryManuallySet) brandColors.secondary = harmoniousSecondary(hex);
    if (role === 'secondary') brandColors.secondaryManuallySet = manual;
    applyBrandPalette();
  }

  function rgbDistance(first, second) {
    return Math.sqrt(first.reduce((sum, value, index) => sum + (value - second[index]) ** 2, 0));
  }

  function saturation([r, g, b]) {
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    return max === 0 ? 0 : (max - min) / max;
  }

  function extractBrandColors(dataUrl) {
    return new Promise((resolve) => {
      const image = new Image();
      image.onload = () => {
        try {
          const size = 64;
          const canvas = document.createElement('canvas');
          canvas.width = size;
          canvas.height = size;
          const context = canvas.getContext('2d', { willReadFrequently: true });
          context.drawImage(image, 0, 0, size, size);
          const pixels = context.getImageData(0, 0, size, size).data;
          const counts = new Map();
          for (let index = 0; index < pixels.length; index += 4) {
            if (pixels[index + 3] < 100) continue;
            const rgb = [pixels[index], pixels[index + 1], pixels[index + 2]];
            if (rgb.every((channel) => channel > 242) || rgb.every((channel) => channel < 14) || saturation(rgb) < 0.12) continue;
            const quantized = rgb.map((channel) => Math.round(channel / 24) * 24);
            const key = quantized.join(',');
            counts.set(key, (counts.get(key) || 0) + 1);
          }
          const ranked = [...counts].sort((a, b) => b[1] - a[1]);
          const picked = [];
          for (const [key] of ranked) {
            const rgb = key.split(',').map(Number);
            if (picked.some((candidate) => rgbDistance(candidate, rgb) < 54)) continue;
            picked.push(rgb);
            if (picked.length === 4) break;
          }
          resolve(picked.map((rgb) => '#' + rgb.map((channel) => channel.toString(16).padStart(2, '0')).join('').toUpperCase()));
        } catch {
          resolve([]);
        }
      };
      image.onerror = () => resolve([]);
      image.src = dataUrl;
    });
  }

  async function applyLogoColorExtraction(dataUrl) {
    const swatches = await extractBrandColors(dataUrl);
    brandColors.extractedSwatches = swatches;
    if (swatches[0]) brandColors.primary = swatches[0];
    brandColors.secondary = swatches[1] && rgbDistance(
      [1, 3, 5].map((index) => parseInt(swatches[0].slice(index, index + 2), 16)),
      [1, 3, 5].map((index) => parseInt(swatches[1].slice(index, index + 2), 16)),
    ) >= 54 ? swatches[1] : harmoniousSecondary(brandColors.primary);
    if (swatches.length > 1) brandColors.secondaryManuallySet = false;
    applyBrandPalette();
    const note = document.getElementById('branding-logo-colors-note');
    if (note) {
      note.hidden = !swatches.length;
      note.querySelector('[data-extracted-dots]').innerHTML = swatches.map((hex) => `<i style="background:${hex}"></i>`).join('');
    }
    showToast(swatches.length ? 'Brand colors detected from your logo' : 'Logo uploaded · brand palette kept unchanged', { variant: swatches.length ? 'success' : 'info' });
    return swatches;
  }

  document.querySelectorAll('[data-brand-color]').forEach((input) => {
    input.addEventListener('input', () => setBrandColor(input.dataset.brandColor, input.value, true));
  });
  document.querySelectorAll('[data-brand-color-hex]').forEach((input) => {
    input.addEventListener('input', () => setBrandColor(input.dataset.brandColorHex, input.value, true));
    input.addEventListener('blur', () => {
      if (document.activeElement !== input) input.value = brandColors[input.dataset.brandColorHex];
    });
  });
  document.getElementById('brand-secondary-auto')?.addEventListener('click', () => {
    brandColors.secondaryManuallySet = false;
    brandColors.secondary = harmoniousSecondary(brandColors.primary);
    applyBrandPalette();
  });
  applyBrandPalette({ dirty: false });
  window.getContrastTextColor = getContrastTextColor;

  const headingFont = document.getElementById('branding-heading-font');
  const bodyFont = document.getElementById('branding-body-font');
  const fontUploadButton = document.getElementById('font-upload-button');
  const iconUploadButton = document.getElementById('icon-upload-button');
  const iconFile = document.getElementById('icon-file');

  document.querySelectorAll('.branding-color-trigger').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      trigger.closest('.cp-color-row')?.querySelector('input[type="color"]')?.click();
    });
  });

  function applyTypography() {
    const heading = headingFont?.value;
    const body = bodyFont?.value;
    document.querySelectorAll('.app-shell').forEach((shell) => {
      if (body) shell.style.fontFamily = body;
      if (heading) shell.style.setProperty('--p-heading-font', heading);
    });
    markDirty();
  }
  headingFont?.addEventListener('change', applyTypography);
  bodyFont?.addEventListener('change', applyTypography);
  fontUploadButton?.addEventListener('click', () => document.getElementById('font-file')?.click());
  iconUploadButton?.addEventListener('click', () => iconFile?.click());
  iconFile?.addEventListener('change', () => {
    if (iconFile.files?.[0]) showToast('Custom icon uploaded', { variant: 'success' });
    markDirty();
  });

  // Corner radius: Square/Soft/Round buttons map to fixed px values per group,
  // read straight off the clicked radio rather than the shared "active" class.
  function applyCornerRadiusGroup(group) {
    if (!group) return;
    const radii = (group.dataset.cornerRadii || '').split(',').map(Number);
    const variable = group.dataset.cornerVar;
    const previewSelector = group.dataset.cornerPreview;
    function apply(radio) {
      const value = radii[Number(radio.dataset.value)] + 'px';
      document.documentElement.style.setProperty(variable, value);
      document.querySelectorAll(previewSelector).forEach((element) => {
        element.style.borderRadius = value;
      });
    }
    group.querySelectorAll('.cp-radio').forEach((radio) => {
      radio.addEventListener('click', () => { apply(radio); markDirty(); });
    });
    apply(group.querySelector('.cp-radio.active') || group.querySelector('.cp-radio'));
  }
  document.querySelectorAll('.branding-corners .cp-radio-group[data-corner-var]').forEach(applyCornerRadiusGroup);

  // ---------- Background: Solid vs Gradient vs Image fill ----------
  // The base color lives in --p-bg (used everywhere as a flat color, including
  // WCAG contrast checks) and layers an optional gradient or uploaded photo on
  // top via --p-bg-image.
  function initFillMode({ segId, row2Id, imageRowId, baseVar, secondVar, imageVar, angle }) {
    const seg = document.getElementById(segId);
    const row2 = document.getElementById(row2Id);
    const imageRow = document.getElementById(imageRowId);
    if (!seg) return;
    // Cached so switching away from "Image" and back doesn't force a re-upload.
    let uploadedImage = null;
    function refresh() {
      const mode = seg.querySelector('.cp-seg-btn.active')?.dataset.mode || 'solid';
      if (row2) row2.hidden = mode !== 'gradient';
      if (imageRow) imageRow.hidden = mode !== 'image';
      if (mode === 'gradient') {
        document.body.style.setProperty(imageVar, `linear-gradient(${angle}deg, var(${baseVar}), var(${secondVar}))`);
      } else if (mode === 'image' && uploadedImage) {
        document.body.style.setProperty(imageVar, `url("${uploadedImage}")`);
      } else {
        document.body.style.removeProperty(imageVar);
      }
    }
    seg.querySelectorAll('.cp-seg-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        seg.querySelectorAll('.cp-seg-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        refresh();
        markDirty();
      });
    });
    document.addEventListener('como:draft-restored', () => {
      const current = document.body.style.getPropertyValue(imageVar).trim();
      const urlMatch = /^url\(["']?(.+?)["']?\)$/.exec(current);
      let mode = 'solid';
      if (urlMatch) { mode = 'image'; uploadedImage = urlMatch[1]; } else if (current) { mode = 'gradient'; }
      seg.querySelectorAll('.cp-seg-btn').forEach((b) => b.classList.toggle('active', b.dataset.mode === mode));
      refresh();
    });

    // ---------- Background image upload (shown only while "Image" is active) ----------
    const zone = document.getElementById('bg-image-zone');
    const fileInput = document.getElementById('bg-image-file');
    const result = document.getElementById('bg-image-result');
    const thumb = document.getElementById('bg-image-thumb-img');
    const filenameEl = document.getElementById('bg-image-filename');
    const replaceBtn = document.getElementById('bg-image-replace');
    const removeBtn = document.getElementById('bg-image-remove');
    function applyBackgroundImage(dataUrl, name) {
      uploadedImage = dataUrl;
      document.body.style.setProperty(imageVar, `url("${dataUrl}")`);
      if (thumb) thumb.src = dataUrl;
      if (filenameEl) filenameEl.textContent = name || '';
      if (result) result.style.display = 'flex';
      if (zone) zone.style.display = 'none';
      markDirty();
      showToast('Background image uploaded', { variant: 'success' });
    }
    function clearBackgroundImage() {
      uploadedImage = null;
      document.body.style.removeProperty(imageVar);
      if (fileInput) fileInput.value = '';
      if (result) result.style.display = 'none';
      if (zone) zone.style.display = '';
      markDirty();
      showToast('Background image removed', { variant: 'success' });
    }
    function handleBackgroundImageFile(file) {
      if (!file) return;
      if (!/^image\/(png|jpeg|jpg|webp|svg\+xml)/i.test(file.type) && !/\.svg$/i.test(file.name)) {
        showToast('Upload a PNG, JPG, WEBP, or SVG file.', { variant: 'error' });
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        showToast('This file exceeds the 5MB limit.', { variant: 'error' });
        return;
      }
      const reader = new FileReader();
      reader.onload = (ev) => applyBackgroundImage(ev.target.result, file.name);
      reader.readAsDataURL(file);
    }
    fileInput?.addEventListener('change', (e) => handleBackgroundImageFile(e.target.files?.[0]));
    zone?.addEventListener('click', () => fileInput?.click());
    zone?.addEventListener('dragover', (e) => { e.preventDefault(); zone.classList.add('drag-over'); });
    zone?.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
    zone?.addEventListener('drop', (e) => {
      e.preventDefault();
      zone.classList.remove('drag-over');
      handleBackgroundImageFile(e.dataTransfer.files?.[0]);
    });
    replaceBtn?.addEventListener('click', () => fileInput?.click());
    removeBtn?.addEventListener('click', clearBackgroundImage);
  }
  initFillMode({ segId: 'bgfill-mode', row2Id: 'bgfill-row2', imageRowId: 'bgfill-image-row', baseVar: '--p-bg', secondVar: '--p-bg-2', imageVar: '--p-bg-image', angle: 180 });


  // ---------- Font picker (Branding drill: list + search + custom upload) ----------
  function applyFontFamily(font) {
    document.querySelectorAll('.app-shell').forEach(shell => shell.style.fontFamily = font);
  }
  function activateFontItem(item) {
    document.querySelectorAll('.cp-font-item, .cp-font-card').forEach(x => x.classList.remove('active'));
    item.classList.add('active');
    const font = item.dataset.font || item.dataset.bindFont;
    if (font) applyFontFamily(font);
    markDirty();
  }
  function wireFontItem(item) {
    item.addEventListener('click', () => activateFontItem(item));
  }
  document.querySelectorAll('.cp-font-item, .cp-font-card').forEach(wireFontItem);

  const fontSearch = document.getElementById('font-search');
  if (fontSearch) {
    fontSearch.addEventListener('input', () => {
      const q = fontSearch.value.trim().toLowerCase();
      document.querySelectorAll('#font-list .cp-font-item').forEach(item => {
        const name = item.querySelector('.fname').textContent.toLowerCase();
        item.style.display = name.includes(q) ? '' : 'none';
      });
    });
  }

  const fontFile = document.getElementById('font-file');
  const fontDropZone = document.getElementById('font-drop-zone');
  let customFontCounter = 0;
  function loadCustomFont(file) {
    if (!file) return;
    if (!/\.(woff2|otf|ttf)$/i.test(file.name)) {
      showToast('Upload a .woff2, .otf, or .ttf font file.', { variant: 'error' });
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      showToast('This file exceeds the 5MB limit.', { variant: 'error' });
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => {
      customFontCounter++;
      const fontName = 'ComoCustomFont_' + customFontCounter;
      const style = document.createElement('style');
      style.textContent = '@font-face { font-family: "' + fontName + '"; src: url(' + JSON.stringify(ev.target.result) + '); }';
      document.head.appendChild(style);
      const stack = '"' + fontName + '", sans-serif';
      applyFontFamily(stack);
      // Add to the top of the list, active
      const list = document.getElementById('font-list');
      if (list) {
        const item = document.createElement('div');
        item.className = 'cp-font-item active';
        item.dataset.font = stack;
        const preview = document.createElement('span');
        preview.className = 'fname';
        preview.style.fontFamily = stack;
        preview.textContent = file.name.replace(/\.(woff2|otf|ttf)$/i, '');
        const sub = document.createElement('span');
        sub.className = 'fsub';
        sub.textContent = 'Custom · Uploaded';
        item.appendChild(preview);
        item.appendChild(sub);
        document.querySelectorAll('.cp-font-item, .cp-font-card').forEach(x => x.classList.remove('active'));
        list.insertBefore(item, list.firstChild);
        wireFontItem(item);
      }
      markDirty();
      showToast('Custom font “' + file.name + '” applied', { variant: 'success' });
    };
    reader.readAsDataURL(file);
  }
  if (fontFile) {
    fontFile.addEventListener('change', (e) => loadCustomFont(e.target.files && e.target.files[0]));
  }
  if (fontDropZone) {
    fontDropZone.addEventListener('dragover', (e) => { e.preventDefault(); fontDropZone.classList.add('drag-over'); });
    fontDropZone.addEventListener('dragleave', () => fontDropZone.classList.remove('drag-over'));
    fontDropZone.addEventListener('drop', (e) => {
      e.preventDefault();
      fontDropZone.classList.remove('drag-over');
      loadCustomFont(e.dataTransfer.files && e.dataTransfer.files[0]);
    });
  }

  // ---------- Slider bindings (Logo size) ----------
  document.querySelectorAll('.cp-slider[data-bind-slider]').forEach(s => {
    const valEl = s.parentElement.querySelector('.cp-slider-val');
    s.addEventListener('input', () => {
      const val = s.value;
      if (valEl) valEl.textContent = val + '%';
      if (s.dataset.bindSlider === 'logo-size') {
        const size = 20 + (val / 100) * 32; // 20-52px
        document.querySelectorAll('.app-page .brand-mark').forEach(m => {
          m.style.width = size + 'px';
          m.style.height = size + 'px';
          m.style.fontSize = (size * 0.4) + 'px';
        });
      }
      markDirty();
    });
  });

  // ---------- Logo upload (preview + drag-drop + phone render) ----------
  const logoFile = document.getElementById('logo-file');
  const logoDropZone = document.getElementById('logo-drop-zone');
  const logoPreviewImg = document.getElementById('logo-preview-img');
  const logoPreviewEmpty = document.getElementById('logo-preview-empty');
  const logoClearBtn = document.getElementById('logo-clear-btn');

  function applyLogo(dataUrl, fileName) {
    // Preview inside the config panel
    if (logoPreviewImg) {
      logoPreviewImg.src = dataUrl;
      logoPreviewImg.style.display = 'block';
    }
    if (logoPreviewEmpty) logoPreviewEmpty.style.display = 'none';
    if (logoClearBtn) logoClearBtn.style.display = 'inline-block';

    // Also populate the richer Branding > Logo drill-down (uploaded status,
    // filename, position/size controls) — the wizard drives this same function,
    // so its logo choice has to land there too, not just on the old preview.
    const gfResult = document.getElementById('gf-logo-result');
    const gfZone = document.getElementById('gf-logo-zone');
    const gfControls = document.getElementById('gf-logo-controls');
    const gfThumb = document.getElementById('gf-logo-thumb-img');
    const gfFilename = document.getElementById('gf-logo-filename');
    if (gfThumb) gfThumb.src = dataUrl;
    if (gfFilename) gfFilename.textContent = fileName || 'Uploaded logo';
    if (gfResult) gfResult.style.display = '';
    if (gfZone) gfZone.style.display = 'none';
    if (gfControls) gfControls.hidden = false;

    // Render on the phone brand-mark (all pages, incl. Split-Header's own top
    // bar). .has-logo class overrides theme !important.
    document.querySelectorAll('.app-page .brand-mark').forEach(m => {
      m.classList.add('has-logo');
      m.style.backgroundImage = 'url(' + dataUrl + ')';
    });

    // Auto-enable Logo Widget so the change is visible on Home
    const logoToggle = document.querySelector('[data-widget-toggle="logo"]');
    if (logoToggle && !logoToggle.classList.contains('on')) logoToggle.click();

    markDirty();
    showToast('Logo uploaded · rendered live on the phone', { variant: 'success' });
  }

  function clearLogo() {
    if (logoPreviewImg) { logoPreviewImg.src = ''; logoPreviewImg.style.display = 'none'; }
    if (logoPreviewEmpty) logoPreviewEmpty.style.display = 'block';
    if (logoClearBtn) logoClearBtn.style.display = 'none';
    const gfResult = document.getElementById('gf-logo-result');
    const gfZone = document.getElementById('gf-logo-zone');
    const gfControls = document.getElementById('gf-logo-controls');
    if (gfResult) gfResult.style.display = 'none';
    if (gfZone) gfZone.style.display = '';
    if (gfControls) gfControls.hidden = true;
    document.querySelectorAll('.app-page .brand-mark').forEach(m => {
      m.classList.remove('has-logo');
      m.style.backgroundImage = '';
    });
    if (logoFile) logoFile.value = '';
    markDirty();
    showToast('Logo removed', { variant: 'success' });
  }

  function handleLogoFile(file) {
    if (!file) return;
    if (!/^image\/(png|jpeg|jpg|webp|svg\+xml)/i.test(file.type) && !/\.svg$/i.test(file.name)) {
      showToast('Upload a PNG, JPG, WEBP, or SVG file.', { variant: 'error' });
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      showToast('This file exceeds the 5MB limit.', { variant: 'error' });
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => {
      applyLogo(ev.target.result, file.name);
      applyLogoColorExtraction(ev.target.result);
    };
    reader.readAsDataURL(file);
  }

  if (logoFile) {
    logoFile.addEventListener('change', (e) => handleLogoFile(e.target.files && e.target.files[0]));
  }
  if (logoDropZone) {
    logoDropZone.addEventListener('dragover', (e) => {
      e.preventDefault();
      logoDropZone.classList.add('drag-over');
    });
    logoDropZone.addEventListener('dragleave', () => logoDropZone.classList.remove('drag-over'));
    logoDropZone.addEventListener('drop', (e) => {
      e.preventDefault();
      logoDropZone.classList.remove('drag-over');
      handleLogoFile(e.dataTransfer.files && e.dataTransfer.files[0]);
    });
  }
  if (logoClearBtn) {
    logoClearBtn.addEventListener('click', (e) => { e.stopPropagation(); clearLogo(); });
  }

  // ---------- WCAG contrast check (Background / Text and Icons color rows) ----------
  function hexToRgb(hex) {
    const h = (hex || '').replace('#', '');
    return /^[0-9a-f]{6}$/i.test(h) ? [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16)) : null;
  }
  function relativeLuminance(hex) {
    const rgb = hexToRgb(hex);
    if (!rgb) return null;
    const channels = rgb.map((c) => {
      const n = c / 255;
      return n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4;
    });
    return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
  }
  function contrastRatio(hexA, hexB) {
    const lumA = relativeLuminance(hexA);
    const lumB = relativeLuminance(hexB);
    if (lumA === null || lumB === null) return null;
    const lighter = Math.max(lumA, lumB);
    const darker = Math.min(lumA, lumB);
    return (lighter + 0.05) / (darker + 0.05);
  }
  function currentHex(variable, fallback) {
    const value = getComputedStyle(document.body).getPropertyValue(variable).trim();
    return /^#[0-9a-f]{6}$/i.test(value) ? value : fallback;
  }

  const WCAG_TEXT_RATIO = 4.5;
  const WCAG_UI_RATIO = 3;
  const accentWarning = document.getElementById('branding-contrast-accent');
  const primaryWarning = document.getElementById('branding-contrast-primary');
  const secondaryWarning = document.getElementById('branding-contrast-secondary');
  const iconWarning = document.getElementById('branding-contrast-icon');
  // `nudgeForContrast` is declared further below but hoisted into this same closure.
  function paintWarning(el, color, pairs, minRatio, varName) {
    if (!el) return;
    const worst = pairs
      .map(([label, bg]) => ({ label, ratio: contrastRatio(color, bg) }))
      .filter((c) => c.ratio !== null)
      .sort((a, b) => a.ratio - b.ratio)[0];
    const failing = worst && worst.ratio < minRatio;
    el.hidden = !failing;
    if (!failing) { el.innerHTML = ''; return; }
    // Plain-language, actionable copy (Vega voice and tone): state the effect, then offer a fix.
    const suggestion = nudgeForContrast(color, pairs.map(([, bg]) => bg), minRatio).toUpperCase();
    el.innerHTML = '';
    const message = document.createElement('span');
    message.className = 'branding-contrast-message';
    message.textContent = `This color may be hard to see against the ${worst.label}. Try ${suggestion} instead.`;
    const fixButton = document.createElement('button');
    fixButton.type = 'button';
    fixButton.className = 'branding-contrast-fix';
    fixButton.textContent = 'Fix it for me';
    fixButton.addEventListener('click', () => {
      document.body.style.setProperty(varName, suggestion);
      window.syncColorVar?.(varName, suggestion);
      markDirty();
      checkBrandingContrast();
    });
    el.append(message, fixButton);
  }
  // Nudges a background's lightness toward whichever extreme actually clears
  // contrast against a *fixed* foreground colour (the brand accent/icon). Picking
  // direction by testing both extremes — rather than assuming "light foreground
  // needs a dark background" — matters because WCAG's blue-discounting luminance
  // formula can make a visually light colour (e.g. periwinkle) read as "dark".
  function nudgeBackgroundForContrast(bgHex, fixedHex, minRatio) {
    const hsl = hexToHsl(bgHex);
    if (!hsl) return bgHex;
    const [h, s] = hsl;
    let l = hsl[2];
    const lighten = (contrastRatio(hslToHex(h, s, 97), fixedHex) ?? 0) >= (contrastRatio(hslToHex(h, s, 3), fixedHex) ?? 0);
    const passes = (c) => (contrastRatio(c, fixedHex) ?? 0) >= minRatio;
    let candidate = bgHex;
    let iterations = 0;
    while (!passes(candidate) && iterations < 32) {
      l = lighten ? Math.min(97, l + 3) : Math.max(3, l - 3);
      candidate = hslToHex(h, s, l);
      iterations++;
    }
    return passes(candidate) ? candidate : (lighten ? '#ffffff' : '#000000');
  }
  // Brand colour (and icon colour, which usually matches it) is dictated by the
  // merchant's identity, not something the builder should suggest changing — so
  // when it clashes, nudge the background it sits on instead and leave it alone.
  function paintFixedColorWarning(el, fixedColor, bgPairs, minRatio) {
    if (!el) return;
    const worst = bgPairs
      .map(([label, bg, varName]) => ({ label, bg, varName, ratio: contrastRatio(fixedColor, bg) }))
      .filter((c) => c.ratio !== null)
      .sort((a, b) => a.ratio - b.ratio)[0];
    const failing = worst && worst.ratio < minRatio;
    el.hidden = !failing;
    if (!failing) { el.innerHTML = ''; return; }
    const suggestion = nudgeBackgroundForContrast(worst.bg, fixedColor, minRatio).toUpperCase();
    el.innerHTML = '';
    const message = document.createElement('span');
    message.className = 'branding-contrast-message';
    message.textContent = `Your brand colour may be hard to see against the ${worst.label}. We can adjust the ${worst.label} to ${suggestion} to fix it.`;
    const fixButton = document.createElement('button');
    fixButton.type = 'button';
    fixButton.className = 'branding-contrast-fix';
    fixButton.textContent = 'Fix it for me';
    fixButton.addEventListener('click', () => {
      document.body.style.setProperty(worst.varName, suggestion);
      window.syncColorVar?.(worst.varName, suggestion);
      markDirty();
      checkBrandingContrast();
    });
    el.append(message, fixButton);
  }
  function checkBrandingContrast() {
    const bg = currentHex('--p-bg', '#f2f2f7');
    const bg2 = currentHex('--p-bg-2', bg);
    const panel = currentHex('--p-panel', '#ffffff');
    const navBg = currentHex('--p-nav-bg', panel);
    const text = currentHex('--p-text', '#1d1d28');
    const textMuted = currentHex('--p-text-muted', '#6b6b7b');
    const accent = currentHex('--p-accent', '#3d40ff');
    const icon = currentHex('--p-icon', '#3d40ff');
    // Text needs the 4.5:1 AA ratio; accent and icon are graphical UI
    // elements, held to WCAG 2.1 SC 1.4.11's 3:1 non-text minimum.
    // The app background is always a gradient, so both stops are checked.
    // Secondary text, accent, and icon also render on the bottom nav bar,
    // so the nav background is checked alongside the card and app backgrounds.
    paintWarning(primaryWarning, text, [
      ['card background', panel],
      ['app background', bg],
      ['app background gradient end', bg2],
    ], WCAG_TEXT_RATIO, '--p-text');
    paintWarning(secondaryWarning, textMuted, [
      ['card background', panel],
      ['app background', bg],
      ['app background gradient end', bg2],
      ['navigation background', navBg],
    ], WCAG_TEXT_RATIO, '--p-text-muted');
    paintFixedColorWarning(accentWarning, accent, [
      ['card background', panel, '--p-panel'],
      ['app background', bg, '--p-bg'],
      ['app background gradient end', bg2, '--p-bg-2'],
      ['navigation background', navBg, '--p-nav-bg'],
    ], WCAG_UI_RATIO);
    paintFixedColorWarning(iconWarning, icon, [
      ['card background', panel, '--p-panel'],
      ['app background', bg, '--p-bg'],
      ['app background gradient end', bg2, '--p-bg-2'],
      ['navigation background', navBg, '--p-nav-bg'],
    ], WCAG_UI_RATIO);
  }
  // Debounced so dragging the native color wheel doesn't repaint the warning per pixel.
  let contrastCheckTimer = null;
  function scheduleContrastCheck() {
    clearTimeout(contrastCheckTimer);
    contrastCheckTimer = setTimeout(checkBrandingContrast, 400);
  }
  document.querySelectorAll('.branding-page input[type="color"][data-bind-color], .branding-page .cp-color-hex').forEach((input) => {
    input.addEventListener('input', scheduleContrastCheck);
  });
  checkBrandingContrast();

  // ---------- Suggested themes (accessible palettes derived from both brand colours) ----------
  function hexToHsl(hex) {
    const rgb = hexToRgb(hex);
    if (!rgb) return null;
    const [r, g, b] = rgb.map((c) => c / 255);
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const l = (max + min) / 2;
    let h = 0;
    let s = 0;
    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        default: h = (r - g) / d + 4;
      }
      h *= 60;
    }
    return [h, s * 100, l * 100];
  }
  function hslToHex(h, s, l) {
    const hue = ((h % 360) + 360) % 360;
    const sat = s / 100;
    const lig = l / 100;
    const k = (n) => (n + hue / 30) % 12;
    const a = sat * Math.min(lig, 1 - lig);
    const f = (n) => lig - a * Math.max(-1, Math.min(k(n) - 3, 9 - k(n), 1));
    const toHex = (n) => Math.round(f(n) * 255).toString(16).padStart(2, '0');
    return `#${toHex(0)}${toHex(8)}${toHex(4)}`;
  }
  // Nudges a colour's lightness toward whichever extreme raises its contrast,
  // so every suggested theme clears WCAG against every background it can land on.
  // `minRatio` is enforced against *all* backgrounds in `bgs`, not just the worst one,
  // so the badge can always be shown truthfully instead of merely hoped for.
  function nudgeForContrast(hex, bgs, minRatio) {
    const hsl = hexToHsl(hex);
    if (!hsl) return hex;
    const [h, s] = hsl;
    let l = hsl[2];
    const avgLum = bgs.reduce((sum, bg) => sum + (relativeLuminance(bg) ?? 1), 0) / bgs.length;
    const lighten = avgLum <= 0.5;
    const passes = (c) => bgs.every((bg) => (contrastRatio(c, bg) ?? 21) >= minRatio);
    let candidate = hex;
    let iterations = 0;
    // 32 steps of 3% lightness covers the full 3%-97% range; if a hue still can't
    // clear the ratio (vanishingly rare), fall back to pure black/white for that hue.
    while (!passes(candidate) && iterations < 32) {
      l = lighten ? Math.min(97, l + 3) : Math.max(3, l - 3);
      candidate = hslToHex(h, s, l);
      iterations++;
    }
    return passes(candidate) ? candidate : (lighten ? '#ffffff' : '#000000');
  }
  function buildThemePresets(primaryHex, secondaryHex) {
    const primaryHsl = hexToHsl(primaryHex) || [230, 60, 50];
    const secondaryHsl = hexToHsl(secondaryHex) || [165, 60, 42];
    const light = {
      key: 'light', name: 'Light', bg: '#F8FAFC', panel: '#FFFFFF',
      border: '#E2E8F0', text: '#0F172A', textMuted: '#475569',
    };
    const soft = {
      key: 'soft', name: 'Soft tint',
      bg: tintFromHue(primaryHex, Math.min(primaryHsl[1] / 100, 0.28), 0.95),
      panel: tintFromHue(secondaryHex, 0.15, 0.985),
      border: '#DCE3EB', text: '#0F172A', textMuted: '#475569',
    };
    const dark = {
      key: 'dark', name: 'Dark',
      bg: tintFromHue(primaryHex, Math.min(primaryHsl[1] / 100, 0.26), 0.08),
      panel: tintFromHue(primaryHex, Math.min(primaryHsl[1] / 100, 0.22), 0.14),
      border: 'rgba(255,255,255,.10)', text: '#F8FAFC', textMuted: '#CBD5E1',
    };

    return [light, soft, dark].map((base) => {
      const surfaces = base.key === 'dark' ? [base.bg, base.panel] : [base.bg, base.panel, '#FFFFFF'];
      const primaryAccent = ensureAgainstSurfaces(primaryHex, surfaces, 4.5);
      const secondaryAccent = ensureAgainstSurfaces(secondaryHex, surfaces, base.key === 'dark' ? 4.5 : 3);
      const secondaryText = ensureAgainstSurfaces(secondaryHex, surfaces, 4.5);
      return {
        ...base,
        bg2: tintFromHue(primaryHex, Math.min(primaryHsl[1] / 100, 0.2), base.key === 'dark' ? 0.11 : 0.93),
        navBg: base.panel,
        primaryAccent,
        onPrimary: getAccessibleOnColor(primaryAccent),
        secondaryAccent,
        onSecondary: getAccessibleOnColor(secondaryAccent),
        secondaryText,
        text: ensureAgainstSurfaces(base.text, surfaces, 4.5),
        textMuted: ensureAgainstSurfaces(base.textMuted, surfaces, 4.5),
      };
    });
  }
  const themeGrid = document.getElementById('branding-theme-grid');
  let activeSuggestedTheme = null;
  function applyThemePreset(preset) {
    activeSuggestedTheme = preset.key;
    [
      ['--p-bg', preset.bg],
      ['--p-bg-2', preset.bg2],
      ['--p-panel', preset.panel],
      ['--p-border', preset.border],
      ['--p-nav-bg', preset.navBg],
      ['--p-text', preset.text],
      ['--p-text-muted', preset.textMuted],
      ['--p-accent', preset.primaryAccent],
      ['--p-accent-ink', preset.onPrimary],
      ['--p-secondary', preset.secondaryAccent],
      ['--p-secondary-ink', preset.onSecondary],
      ['--p-icon', preset.primaryAccent],
    ].forEach(([varName, hex]) => {
      document.body.style.setProperty(varName, hex);
      window.syncColorVar?.(varName, hex);
    });
    // Themes ship as a flat fill by default; the gradient end is still kept WCAG-safe
    // above in case the merchant switches to Gradient fill afterward.
    document.body.style.removeProperty('--p-bg-image');
    document.querySelectorAll('#bgfill-mode .cp-seg-btn').forEach((btn) => btn.classList.toggle('active', btn.dataset.mode === 'solid'));
    const row2 = document.getElementById('bgfill-row2');
    if (row2) row2.hidden = true;
    const imageRow = document.getElementById('bgfill-image-row');
    if (imageRow) imageRow.hidden = true;
    themeGrid?.querySelectorAll('.branding-theme-card').forEach((card) => card.classList.toggle('active', card.dataset.themeKey === preset.key));
    markDirty();
    checkBrandingContrast();
    showToast(`${preset.name} theme applied`, { variant: 'success' });
  }
  function renderThemeSuggestions() {
    if (!themeGrid) return;
    const presets = buildThemePresets(brandColors.primary, brandColors.secondary);
    themeGrid.innerHTML = presets.map((p) => `
      <button type="button" class="branding-theme-card" data-theme-key="${p.key}" aria-label="Apply ${p.name} theme">
        <span class="branding-theme-swatches">
          <span class="branding-theme-swatch" style="background:${p.bg}"></span>
          <span class="branding-theme-swatch" style="background:${p.panel}"></span>
          <span class="branding-theme-swatch" style="background:${p.primaryAccent}"></span>
          <span class="branding-theme-swatch" style="background:${p.secondaryAccent}"></span>
        </span>
        <span class="branding-theme-name">${p.name}</span>
      </button>
    `).join('');
    themeGrid.querySelectorAll('.branding-theme-card').forEach((card) => {
      const preset = presets.find((p) => p.key === card.dataset.themeKey);
      card.addEventListener('click', () => applyThemePreset(preset));
    });
    themeGrid.querySelectorAll('.branding-theme-card').forEach((card) => card.classList.toggle('active', card.dataset.themeKey === activeSuggestedTheme));
  }
  let themeRefreshTimer = null;
  function scheduleThemeRefresh() {
    clearTimeout(themeRefreshTimer);
    themeRefreshTimer = setTimeout(() => {
      const key = activeSuggestedTheme;
      renderThemeSuggestions();
      if (key) {
        const presets = buildThemePresets(brandColors.primary, brandColors.secondary);
        const active = presets.find((preset) => preset.key === key);
        if (active) applyThemePreset(active);
      }
    }, 80);
  }
  document.addEventListener('como:brand-colors', scheduleThemeRefresh);
  document.addEventListener('como:draft-restored', renderThemeSuggestions);
  renderThemeSuggestions();

  function exportBrandColors() {
    return {
      ...brandColors,
      extractedSwatches: [...brandColors.extractedSwatches],
    };
  }

  function importBrandColors(saved = {}) {
    const primary = normalizeBrandHex(saved.primary);
    const secondary = normalizeBrandHex(saved.secondary);
    if (primary) brandColors.primary = primary;
    if (secondary) brandColors.secondary = secondary;
    brandColors.extractedSwatches = Array.isArray(saved.extractedSwatches)
      ? saved.extractedSwatches.map(normalizeBrandHex).filter(Boolean).slice(0, 4)
      : [];
    brandColors.secondaryManuallySet = !!saved.secondaryManuallySet;
    applyBrandPalette({ dirty: false });
  }

  return {
    applyFontFamily, activateFontItem, wireFontItem, loadCustomFont, applyLogo,
    clearLogo, handleLogoFile, renderThemeSuggestions, brandColors,
    setBrandColor, applyLogoColorExtraction, getContrastTextColor,
    exportBrandColors, importBrandColors,
  };
}

