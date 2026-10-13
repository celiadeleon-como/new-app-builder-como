export function initBranding(ctx) {
  const { markDirty, showToast } = ctx;

  const headingFont = document.getElementById('branding-heading-font');
  const bodyFont = document.getElementById('branding-body-font');
  const fontUploadButton = document.getElementById('font-upload-button');
  const iconUploadButton = document.getElementById('icon-upload-button');
  const iconFile = document.getElementById('icon-file');
  const cardCorner = document.getElementById('card-corner-radius');
  const buttonCorner = document.getElementById('button-corner-radius');

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
    if (iconFile.files?.[0]) showToast('Custom icon uploaded');
    markDirty();
  });

  function applyCornerRadius(input, valueElement, variable, previewSelector) {
    if (!input) return;
    input.addEventListener('input', () => {
      const value = input.value + 'px';
      document.documentElement.style.setProperty(variable, value);
      document.querySelectorAll(previewSelector).forEach((element) => {
        element.style.borderRadius = value;
      });
      if (valueElement) valueElement.textContent = value;
      markDirty();
    });
  }
  applyCornerRadius(
    cardCorner,
    document.getElementById('card-corner-value'),
    '--p-card-radius',
    '.app-shell .stat-tile, .app-shell .loyalty-card, .app-shell .pc-card, .app-shell .prog-card, .app-shell .punch-card, .app-shell .howto-row, .app-shell .webview-cta-card, .app-shell .oa-card, .app-shell .ti-card, .app-shell .mc-card, .app-shell .px-login-card',
  );
  applyCornerRadius(
    buttonCorner,
    document.getElementById('button-corner-value'),
    '--p-button-radius',
    '.app-shell button, .app-shell .chip, .app-shell .pc-cta, .app-shell .guest-cta, .app-shell .lc-cta',
  );

  // ---------- Background: Solid vs Gradient fill ----------
  // The base color lives in --p-bg (used everywhere as a flat color, including
  // WCAG contrast checks) and layers an optional gradient on top via
  // --p-bg-image, built from a second stop color the same generic
  // data-bind-color inputs already manage.
  function initFillMode({ segId, row2Id, baseVar, secondVar, imageVar, angle }) {
    const seg = document.getElementById(segId);
    const row2 = document.getElementById(row2Id);
    if (!seg) return;
    function refresh() {
      const mode = seg.querySelector('.cp-seg-btn.active')?.dataset.mode || 'solid';
      if (row2) row2.hidden = mode !== 'gradient';
      if (mode === 'gradient') {
        document.body.style.setProperty(imageVar, `linear-gradient(${angle}deg, var(${baseVar}), var(${secondVar}))`);
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
      const active = Boolean(document.body.style.getPropertyValue(imageVar).trim());
      seg.querySelectorAll('.cp-seg-btn').forEach((b) => b.classList.toggle('active', b.dataset.mode === (active ? 'gradient' : 'solid')));
      if (row2) row2.hidden = !active;
    });
  }
  initFillMode({ segId: 'bgfill-mode', row2Id: 'bgfill-row2', baseVar: '--p-bg', secondVar: '--p-bg-2', imageVar: '--p-bg-image', angle: 180 });

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
      showToast('Upload a .woff2, .otf, or .ttf font file.');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      showToast('This file exceeds the 5MB limit.');
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
      showToast('Custom font “' + file.name + '” applied');
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
        document.querySelectorAll('.app-page .app-top-header .brand-mark').forEach(m => {
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

  function applyLogo(dataUrl) {
    // Preview inside the config panel
    if (logoPreviewImg) {
      logoPreviewImg.src = dataUrl;
      logoPreviewImg.style.display = 'block';
    }
    if (logoPreviewEmpty) logoPreviewEmpty.style.display = 'none';
    if (logoClearBtn) logoClearBtn.style.display = 'inline-block';

    // Render on the phone brand-mark (all pages). .has-logo class overrides theme !important.
    document.querySelectorAll('.app-page .app-top-header .brand-mark').forEach(m => {
      m.classList.add('has-logo');
      m.style.backgroundImage = 'url(' + dataUrl + ')';
    });

    // Auto-enable Logo Widget so the change is visible on Home
    const logoToggle = document.querySelector('[data-widget-toggle="logo"]');
    if (logoToggle && !logoToggle.classList.contains('on')) logoToggle.click();

    markDirty();
    showToast('Logo uploaded · rendered live on the phone');
  }

  function clearLogo() {
    if (logoPreviewImg) { logoPreviewImg.src = ''; logoPreviewImg.style.display = 'none'; }
    if (logoPreviewEmpty) logoPreviewEmpty.style.display = 'block';
    if (logoClearBtn) logoClearBtn.style.display = 'none';
    document.querySelectorAll('.app-page .app-top-header .brand-mark').forEach(m => {
      m.classList.remove('has-logo');
      m.style.backgroundImage = '';
    });
    if (logoFile) logoFile.value = '';
    markDirty();
    showToast('Logo removed');
  }

  function handleLogoFile(file) {
    if (!file) return;
    if (!/^image\/(png|jpeg|jpg|webp)/i.test(file.type)) {
      showToast('Upload a PNG, JPG, or WEBP file.');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      showToast('This file exceeds the 5MB limit.');
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => applyLogo(ev.target.result);
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
    paintWarning(accentWarning, accent, [
      ['card background', panel],
      ['app background', bg],
      ['app background gradient end', bg2],
      ['navigation background', navBg],
    ], WCAG_UI_RATIO, '--p-accent');
    paintWarning(iconWarning, icon, [
      ['card background', panel],
      ['app background', bg],
      ['app background gradient end', bg2],
      ['navigation background', navBg],
    ], WCAG_UI_RATIO, '--p-icon');
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

  // ---------- Suggested themes (accessible palettes derived from the brand colour) ----------
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
  function buildThemePresets(accentHex) {
    const hsl = hexToHsl(accentHex) || [230, 60, 50];
    const [h, s] = hsl;
    const bases = [
      { key: 'light', name: 'Light', bg: hslToHex(h, Math.min(s, 35), 97), panel: '#ffffff', text: '#1d1d28', textMuted: '#6b6b7b' },
      { key: 'soft', name: 'Soft tint', bg: hslToHex(h, Math.min(s, 55), 92), panel: hslToHex(h, Math.min(s, 25), 98), text: '#1d1d28', textMuted: '#5f5f70' },
      { key: 'dark', name: 'Dark', bg: hslToHex(h, Math.min(s, 45), 12), panel: hslToHex(h, Math.min(s, 30), 18), text: '#f5f5fa', textMuted: '#c7c7d6' },
    ];
    return bases.map((base) => {
      // A theme is meant to be a safe, ready-to-use combination: generate its own
      // gradient end stop too (nudged a touch toward mid-tone from the base bg),
      // so switching to Gradient fill later doesn't reintroduce a stale, unchecked color.
      const [bgH, bgS, bgL] = hexToHsl(base.bg) || [h, s, 50];
      const bg2 = hslToHex(bgH, bgS, bgL > 50 ? Math.max(3, bgL - 6) : Math.min(97, bgL + 6));
      // The bottom nav bar shares the card panel's tone so it inherits the same
      // verified contrast instead of silently drifting out of compliance.
      const navBg = base.panel;
      const bgPair = [base.bg, bg2, base.panel];
      const navAware = [base.bg, bg2, base.panel, navBg];
      // Both the brand accent and the icon color render as UI foreground on
      // these backgrounds, so they share the same WCAG 3:1-safe tint of the brand hue.
      const accentSafe = nudgeForContrast(accentHex, navAware, WCAG_UI_RATIO);
      return {
        ...base,
        bg2,
        navBg,
        text: nudgeForContrast(base.text, bgPair, WCAG_TEXT_RATIO),
        textMuted: nudgeForContrast(base.textMuted, navAware, WCAG_TEXT_RATIO),
        accent: accentSafe,
        icon: accentSafe,
      };
    });
  }
  const themeGrid = document.getElementById('branding-theme-grid');
  function applyThemePreset(preset) {
    [
      ['--p-bg', preset.bg],
      ['--p-bg-2', preset.bg2],
      ['--p-panel', preset.panel],
      ['--p-nav-bg', preset.navBg],
      ['--p-text', preset.text],
      ['--p-text-muted', preset.textMuted],
      ['--p-accent', preset.accent],
      ['--p-icon', preset.icon],
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
    themeGrid?.querySelectorAll('.branding-theme-card').forEach((card) => card.classList.toggle('active', card.dataset.themeKey === preset.key));
    markDirty();
    checkBrandingContrast();
    showToast(`${preset.name} theme applied`);
  }
  function renderThemeSuggestions() {
    if (!themeGrid) return;
    const accent = currentHex('--p-accent', '#3d40ff');
    const presets = buildThemePresets(accent);
    themeGrid.innerHTML = presets.map((p) => `
      <button type="button" class="branding-theme-card" data-theme-key="${p.key}" aria-label="Apply ${p.name} theme">
        <span class="branding-theme-swatches">
          <span class="branding-theme-swatch" style="background:${p.bg}"></span>
          <span class="branding-theme-swatch" style="background:${p.panel}"></span>
          <span class="branding-theme-swatch" style="background:${p.icon}"></span>
        </span>
        <span class="branding-theme-name">${p.name}</span>
      </button>
    `).join('');
    themeGrid.querySelectorAll('.branding-theme-card').forEach((card) => {
      const preset = presets.find((p) => p.key === card.dataset.themeKey);
      card.addEventListener('click', () => applyThemePreset(preset));
    });
  }
  const accentInput = document.querySelector('.branding-page input[type="color"][data-bind-color="--p-accent"]');
  const accentHexField = accentInput?.closest('.cp-color-row')?.querySelector('.cp-color-hex');
  let themeRefreshTimer = null;
  function scheduleThemeRefresh() {
    clearTimeout(themeRefreshTimer);
    themeRefreshTimer = setTimeout(renderThemeSuggestions, 400);
  }
  accentInput?.addEventListener('input', scheduleThemeRefresh);
  accentHexField?.addEventListener('input', scheduleThemeRefresh);
  document.addEventListener('como:draft-restored', renderThemeSuggestions);
  renderThemeSuggestions();

  return { applyFontFamily, activateFontItem, wireFontItem, loadCustomFont, applyLogo, clearLogo, handleLogoFile };
}

