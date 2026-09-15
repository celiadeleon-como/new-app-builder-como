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
  function worstPair(pairs) {
    return pairs
      .map(([label, a, b]) => ({ label, ratio: contrastRatio(a, b) }))
      .filter((c) => c.ratio !== null)
      .sort((a, b) => a.ratio - b.ratio)[0];
  }
  function paintWarning(el, worst, minRatio) {
    if (!el) return;
    const failing = worst && worst.ratio < minRatio;
    el.hidden = !failing;
    if (failing) el.textContent = `Low contrast with ${worst.label} (${worst.ratio.toFixed(1)}:1) \u2014 WCAG requires ${minRatio}:1`;
  }
  function checkBrandingContrast() {
    const bg = currentHex('--p-bg', '#f2f2f7');
    const bg2 = currentHex('--p-bg-2', bg);
    const panel = currentHex('--p-panel', '#ffffff');
    const text = currentHex('--p-text', '#1d1d28');
    const textMuted = currentHex('--p-text-muted', '#6b6b7b');
    const accent = currentHex('--p-accent', '#3d40ff');
    const icon = currentHex('--p-icon', '#3d40ff');
    // Text needs the 4.5:1 AA ratio; accent and icon are graphical UI
    // elements, held to WCAG 2.1 SC 1.4.11's 3:1 non-text minimum.
    // The app background is always a gradient, so both stops are checked.
    paintWarning(primaryWarning, worstPair([
      ['card background', text, panel],
      ['app background', text, bg],
      ['app background gradient end', text, bg2],
    ]), WCAG_TEXT_RATIO);
    paintWarning(secondaryWarning, worstPair([
      ['card background', textMuted, panel],
      ['app background', textMuted, bg],
      ['app background gradient end', textMuted, bg2],
    ]), WCAG_TEXT_RATIO);
    paintWarning(accentWarning, worstPair([
      ['card background', accent, panel],
      ['app background', accent, bg],
      ['app background gradient end', accent, bg2],
    ]), WCAG_UI_RATIO);
    paintWarning(iconWarning, worstPair([
      ['card background', icon, panel],
      ['app background', icon, bg],
      ['app background gradient end', icon, bg2],
    ]), WCAG_UI_RATIO);
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

  return { applyFontFamily, activateFontItem, wireFontItem, loadCustomFont, applyLogo, clearLogo, handleLogoFile };
}

