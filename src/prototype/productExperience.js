const ANALYTICS_KEY = 'como-app-builder-analytics:v1';
// Menu has its own source/page picker, so a separate include-screen switch is redundant there.
const SCREEN_DEFS = {
  rewards: { label: 'Rewards', description: 'Gifts, Points Shop, and loyalty progress' },
  locations: { label: 'Locations', description: 'Branches, hours, directions, and contact' },
  more: { label: 'More', description: 'Profile, orders, referral, support, and brand story' },
};

const DEFAULT_SCREENS = Object.fromEntries(Object.keys(SCREEN_DEFS).map((key) => [key, true]));

function hexToRgb(value) {
  const hex = String(value || '').trim().replace('#', '');
  if (!/^[0-9a-f]{6}$/i.test(hex)) return null;
  return [0, 2, 4].map((index) => parseInt(hex.slice(index, index + 2), 16));
}

function luminance(value) {
  const rgb = hexToRgb(value);
  if (!rgb) return null;
  const channels = rgb.map((channel) => {
    const normalized = channel / 255;
    return normalized <= 0.03928 ? normalized / 12.92 : ((normalized + 0.055) / 1.055) ** 2.4;
  });
  return (0.2126 * channels[0]) + (0.7152 * channels[1]) + (0.0722 * channels[2]);
}

function contrastRatio(a, b) {
  const first = luminance(a);
  const second = luminance(b);
  if (first === null || second === null) return null;
  const light = Math.max(first, second);
  const dark = Math.min(first, second);
  return (light + 0.05) / (dark + 0.05);
}

export function initProductExperience(ctx) {
  const { markDirty, showToast } = ctx;
  const screenState = { ...DEFAULT_SCREENS };
  let previewState = 'returning';
  let brandSource = 'manual';

  function track(event, detail = {}) {
    const record = { event, detail, at: new Date().toISOString() };
    try {
      const existing = JSON.parse(localStorage.getItem(ANALYTICS_KEY) || '[]');
      localStorage.setItem(ANALYTICS_KEY, JSON.stringify([...existing.slice(-99), record]));
    } catch {
      // Analytics must never interrupt the merchant workflow.
    }
    document.dispatchEvent(new CustomEvent('como:analytics', { detail: record }));
  }

  function setSwitchState(button, enabled) {
    button.classList.toggle('on', enabled);
    button.setAttribute('aria-checked', String(enabled));
    const value = button.querySelector('.px-screen-switch-value');
    if (value) value.textContent = enabled ? 'Included' : 'Not in app';
  }

  function applyScreenVisibility(key, enabled, options = {}) {
    if (!(key in SCREEN_DEFS)) return;
    screenState[key] = !!enabled;
    document.body.classList.toggle(`screen-${key}-off`, !enabled);
    document.querySelectorAll(`[data-screen-toggle="${key}"]`).forEach((button) => setSwitchState(button, !!enabled));
    document.querySelectorAll(`.nav-item[data-nav="${key}"]`).forEach((item) => {
      item.hidden = !enabled;
      item.setAttribute('aria-hidden', String(!enabled));
    });
    const side = document.querySelector(`.side-item[data-step="${key}"]`);
    side?.classList.toggle('screen-off', !enabled);
    side?.setAttribute('data-screen-state', enabled ? 'included' : 'not-in-app');
    if (options.dirty !== false) {
      markDirty?.('screens');
      track('screen_visibility_changed', { screen: key, included: !!enabled });
    }
    document.dispatchEvent(new CustomEvent('como:screenstate', { detail: { key, enabled: !!enabled } }));
  }

  function createScreenControls() {
    Object.entries(SCREEN_DEFS).forEach(([key, definition]) => {
      const page = document.getElementById(`cp-${key}`);
      if (!page || page.querySelector(`[data-screen-toggle="${key}"]`)) return;
      const control = document.createElement('button');
      control.type = 'button';
      control.className = 'px-screen-switch on';
      control.dataset.screenToggle = key;
      control.setAttribute('role', 'switch');
      control.setAttribute('aria-checked', 'true');
      control.innerHTML = `<span class="px-screen-switch-copy"><strong>Include ${definition.label}</strong><small>${definition.description}</small></span><span class="px-screen-switch-value">Included</span><span class="px-switch-track" aria-hidden="true"><i></i></span>`;
      const anchor = page.querySelector('.cp-section, .ms-screen');
      const master = page.querySelector('.cp-master');
      if (master) {
        const firstSection = master.querySelector('.cp-section');
        master.insertBefore(control, firstSection || null);
      } else {
        page.insertBefore(control, anchor || page.firstChild);
      }
      control.addEventListener('click', () => applyScreenVisibility(key, !screenState[key]));
    });
  }

  function seedToggle(selector, enabled = true) {
    const toggle = document.querySelector(selector);
    if (toggle && toggle.classList.contains('on') !== enabled) toggle.click();
  }

  function seedOpinionatedScreens() {
    ['gifts', 'points', 'punch'].forEach((key) => seedToggle(`#cp-rewards [data-rw-key="${key}"] + .toggle`, true));
    seedToggle('#cp-locations .toggle', true);
    document.querySelectorAll('#cp-more .cp-toggle-row .toggle').forEach((toggle, index) => {
      const recommended = index <= 6 || index === 8;
      if (toggle.classList.contains('on') !== recommended) toggle.click();
    });

    if (ctx.menuState) {
      ctx.menuState.approach = 'manual';
      ctx.menuState.integration = null;
      ctx.menuState.manual.started = true;
      ctx.menuState.screen = 'build-categories';
      ctx.renderMenuPhone?.();
    }
  }

  function createSimpleMenuControls() {
    const page = document.getElementById('cp-menu');
    if (!page || page.querySelector('.px-menu-simple')) return;
    const panel = document.createElement('div');
    panel.className = 'px-menu-simple';
    panel.innerHTML = `
      <h3>Menu</h3>
      <p>Como supplies the mobile layout. Your menu data and global brand do the rest.</p>
      <div class="px-menu-preview-note"><strong>Proven menu screen</strong><span>Categories, item cards, dietary information, and member pricing are already designed.</span></div>
      <fieldset><legend>Layout</legend><div class="px-menu-layouts"><button type="button" class="active" data-px-menu-layout="grid">Visual cards</button><button type="button" data-px-menu-layout="list">Compact list</button></div></fieldset>
      <label class="px-simple-check"><input type="checkbox" id="px-menu-hero" checked /> <span><strong>Show menu hero</strong><small>Uses the global accent and one approved image treatment.</small></span></label>
      <div class="px-menu-ordering-state" id="px-menu-ordering-state"></div>
      <button class="px-advanced-link" type="button" id="px-menu-advanced">Advanced menu source setup</button>`;
    page.insertBefore(panel, page.firstChild);

    panel.querySelectorAll('[data-px-menu-layout]').forEach((button) => {
      button.addEventListener('click', () => {
        const layout = button.dataset.pxMenuLayout;
        panel.querySelectorAll('[data-px-menu-layout]').forEach((candidate) => candidate.classList.toggle('active', candidate === button));
        ctx.menuState?.manual?.categories?.forEach((category) => category.items.forEach((item) => { item.layout = layout === 'grid' ? 'card' : 'row'; }));
        ctx.renderMenuPhone?.();
        markDirty?.('menu');
      });
    });
    panel.querySelector('#px-menu-hero')?.addEventListener('change', (event) => {
      if (ctx.menuState?.manual) ctx.menuState.manual.hero = event.target.checked ? 0 : null;
      ctx.renderMenuPhone?.();
      markDirty?.('menu');
    });
    panel.querySelector('#px-menu-advanced')?.addEventListener('click', () => {
      page.classList.toggle('px-show-advanced');
      const expanded = page.classList.contains('px-show-advanced');
      panel.querySelector('#px-menu-advanced').textContent = expanded ? 'Hide advanced setup' : 'Advanced menu source setup';
      track('advanced_menu_toggled', { expanded });
    });
  }

  function updateMenuOrderingState() {
    const state = document.getElementById('px-menu-ordering-state');
    if (!state) return;
    const connected = ctx.isOrderingConnected?.() === true;
    state.innerHTML = connected
      ? '<span class="ok">Connected</span><strong>Live ordering menu</strong><small>Menu, prices, and availability sync from your provider.</small>'
      : '<span class="sample">Sample</span><strong>Previewing a prepared menu</strong><small>Connect ordering when you want live prices and checkout.</small><button type="button" data-connect-menu-ordering>Connect ordering</button>';
    state.querySelector('[data-connect-menu-ordering]')?.addEventListener('click', () => window.openSettings?.('online-ordering', 'chooser'));
  }

  function field(id, value, eventName = 'input') {
    const element = document.getElementById(id);
    if (!element) return;
    element.value = value;
    element.dispatchEvent(new Event(eventName, { bubbles: true }));
  }

  function choose(selector) {
    const element = document.querySelector(selector);
    if (element && !element.classList.contains('selected')) element.click();
  }

  function createPreviewStateControl() {
    const preview = document.getElementById('preview-area');
    if (!preview || preview.querySelector('.px-preview-state')) return;
    const control = document.createElement('div');
    control.className = 'px-preview-state';
    control.innerHTML = '<span class="px-preview-label">Previewing</span><span class="px-preview-toggle"><button type="button" data-member-state="guest">Guest</button><button class="active" type="button" data-member-state="returning">Returning member</button></span>';
    preview.appendChild(control);
    control.querySelectorAll('[data-member-state]').forEach((button) => {
      button.addEventListener('click', () => setPreviewState(button.dataset.memberState));
    });
  }

  function setPreviewState(next, options = {}) {
    previewState = next === 'guest' ? 'guest' : 'returning';
    document.body.dataset.memberPreview = previewState;
    document.querySelector('.greet-row')?.classList.toggle('is-guest', previewState === 'guest');
    document.querySelectorAll('.px-preview-state [data-member-state]').forEach((button) => button.classList.toggle('active', button.dataset.memberState === previewState));
    document.querySelectorAll('[data-bind-radio="member-state"]').forEach((radio) => radio.classList.toggle('active', radio.dataset.value === previewState));
    if (options.dirty !== false) track('preview_member_state_changed', { state: previewState });
  }

  function ensureSampleLabels() {
    const home = document.querySelector('.app-page[data-page="home"]');
    if (home && !home.querySelector('.px-home-sample')) {
      const label = document.createElement('span');
      label.className = 'px-sample-label px-home-sample';
      label.textContent = 'Sample member';
      home.querySelector('.app-top-header')?.after(label);
    }
    document.querySelectorAll('.oa-widget, .ti-widget, .mc-widget, .phone-reels-chip').forEach((widget) => {
      if (widget.querySelector('.px-ordering-sample-label')) return;
      const label = document.createElement('span');
      label.className = 'px-ordering-sample-label';
      label.textContent = widget.classList.contains('phone-reels-chip') ? 'Sample' : 'Sample until connected';
      widget.prepend(label);
    });
  }

  function syncOrderingExperience() {
    const connected = ctx.isOrderingConnected?.() === true;
    const orderingFocus = ctx.state?.goal === 'ordering' || document.body.classList.contains('focus-ordering');
    const banner = document.getElementById('px-ordering-dependency');
    if (banner) banner.hidden = !orderingFocus || connected;
    document.body.classList.toggle('px-ordering-sample', orderingFocus && !connected);
    updateMenuOrderingState();
  }

  document.getElementById('px-connect-ordering')?.addEventListener('click', () => window.openSettings?.('online-ordering', 'chooser'));
  document.addEventListener('como:ordering', syncOrderingExperience);
  document.addEventListener('como:focus-changed', () => requestAnimationFrame(syncOrderingExperience));

  function resolvedHex(variable, fallback) {
    const value = getComputedStyle(document.body).getPropertyValue(variable).trim();
    if (/^#[0-9a-f]{6}$/i.test(value)) return value;
    return fallback;
  }

  function updateContrastFeedback() {
    const result = document.getElementById('px-contrast-result');
    if (!result) return;
    const panel = resolvedHex('--p-panel', '#ffffff');
    const primary = resolvedHex('--p-text', '#1d1d28');
    const secondary = resolvedHex('--p-text-muted', '#6b6b7b');
    const primaryRatio = contrastRatio(panel, primary) || 0;
    const secondaryRatio = contrastRatio(panel, secondary) || 0;
    const safe = primaryRatio >= 4.5 && secondaryRatio >= 4.5;
    document.body.dataset.brandingSafe = String(safe);
    result.className = `px-contrast-result ${safe ? 'safe' : 'warning'}`;
    result.innerHTML = safe
      ? `<strong>Accessible text contrast</strong><span>Primary ${primaryRatio.toFixed(1)}:1 · Secondary ${secondaryRatio.toFixed(1)}:1</span>`
      : `<strong>Some text may be hard to read</strong><span>Primary ${primaryRatio.toFixed(1)}:1 · Secondary ${secondaryRatio.toFixed(1)}:1</span><button type="button" data-use-safe-text>Use recommended text</button>`;
  }

  function setColour(variable, value) {
    const input = document.querySelector(`input[type="color"][data-bind-color="${variable}"]`);
    if (!input) return;
    input.value = value;
    input.dispatchEvent(new Event('input', { bubbles: true }));
  }

  document.getElementById('px-contrast-result')?.addEventListener('click', (event) => {
    if (!event.target.closest('[data-use-safe-text]')) return;
    const panel = resolvedHex('--p-panel', '#ffffff');
    const darkSurface = (luminance(panel) || 0) < 0.3;
    setColour('--p-text', darkSurface ? '#ffffff' : '#1d1d28');
    setColour('--p-text-muted', darkSurface ? '#d6d3df' : '#5f5c6b');
    requestAnimationFrame(updateContrastFeedback);
    showToast?.('Recommended accessible text colours applied');
  });
  document.querySelectorAll('#gf-advanced-branding-section input[type="color"]').forEach((input) => input.addEventListener('input', () => requestAnimationFrame(updateContrastFeedback)));

  document.getElementById('px-request-font')?.addEventListener('click', () => {
    window.openSettings?.('app-submission', 'overview');
    showToast?.('Custom font added to the native app launch checklist');
  });

  function wireMobileWayfinding() {
    document.querySelectorAll('.side-item').forEach((button) => {
      const label = button.querySelector('.side-lbl')?.textContent?.trim();
      if (label && !button.getAttribute('aria-label')) button.setAttribute('aria-label', label);
    });
    document.addEventListener('como:navchange', () => {
      if (!window.matchMedia('(max-width: 767.98px)').matches) return;
      const active = document.querySelector('.side-nav .side-item.active');
      active?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    });
  }

  document.getElementById('px-retake-tour')?.addEventListener('click', () => {
    document.getElementById('account-menu')?.classList.remove('open');
    window.startAppBuilderTour?.();
    track('tour_restarted');
  });

  document.getElementById('px-open-device-preview')?.addEventListener('click', () => {
    window.setResponsiveView?.('preview');
    document.getElementById('preview-area')?.scrollIntoView({ block: 'nearest' });
    track('full_preview_opened');
  });
  document.getElementById('px-device-reviewed')?.addEventListener('change', (event) => {
    document.body.dataset.deviceReviewed = String(event.target.checked);
    markDirty?.('launch-checklist');
    track('device_review_changed', { complete: event.target.checked });
  });
  document.getElementById('px-restore-published')?.addEventListener('click', () => {
    const restored = ctx.restorePublishedDraft?.();
    showToast?.(restored ? 'Last published version restored as your draft' : 'No published version is available yet');
  });

  document.addEventListener('click', (event) => {
    const action = event.target.closest('[data-phone-action]');
    if (action) showToast?.(action.dataset.phoneAction);
    const copy = event.target.closest('[data-copy-referral]');
    if (copy) {
      navigator.clipboard?.writeText(document.getElementById('px-referral-code')?.textContent || 'FRIEND10').catch(() => {});
      copy.textContent = 'Copied';
      showToast?.('Invite code copied');
    }
  });
  document.querySelectorAll('.app-page [role="button"][onclick]').forEach((element) => {
    element.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        element.click();
      }
    });
  });
  document.querySelectorAll('.px-login-tabs [role="tab"]').forEach((tab) => {
    tab.addEventListener('click', () => {
      const email = tab.textContent.trim() === 'Email';
      document.querySelectorAll('.px-login-tabs [role="tab"]').forEach((candidate) => {
        const active = candidate === tab;
        candidate.classList.toggle('active', active);
        candidate.setAttribute('aria-selected', String(active));
      });
      const label = document.querySelector('.px-login-card > label');
      const prefix = document.querySelector('.px-phone-field span');
      const input = document.getElementById('login-input');
      if (label) label.textContent = email ? 'Email address' : 'Phone number';
      if (prefix) prefix.hidden = email;
      if (input) {
        input.type = email ? 'email' : 'tel';
        input.inputMode = email ? 'email' : 'tel';
        input.placeholder = email ? 'you@example.com' : '(555) 000-0000';
      }
    });
  });

  createScreenControls();
  createSimpleMenuControls();
  createPreviewStateControl();
  ensureSampleLabels();
  seedOpinionatedScreens();
  wireMobileWayfinding();
  Object.entries(DEFAULT_SCREENS).forEach(([key, enabled]) => applyScreenVisibility(key, enabled, { dirty: false }));
  setPreviewState('returning', { dirty: false });
  syncOrderingExperience();
  updateContrastFeedback();

  function exportProductExperience() {
    return {
      screenState: { ...screenState }, previewState, brandSource,
      deviceReviewed: document.getElementById('px-device-reviewed')?.checked || false,
      menuSimple: {
        layout: document.querySelector('[data-px-menu-layout].active')?.dataset.pxMenuLayout || 'grid',
        hero: document.getElementById('px-menu-hero')?.checked !== false,
      },
    };
  }

  function importProductExperience(saved = {}) {
    Object.entries({ ...DEFAULT_SCREENS, ...(saved.screenState || {}) }).forEach(([key, enabled]) => applyScreenVisibility(key, enabled, { dirty: false }));
    setPreviewState(saved.previewState, { dirty: false });
    brandSource = saved.brandSource || 'manual';
    document.body.dataset.brandSource = brandSource;
    document.body.dataset.brandImported = String(brandSource !== 'manual');
    const deviceReviewed = document.getElementById('px-device-reviewed');
    if (deviceReviewed) deviceReviewed.checked = !!saved.deviceReviewed;
    document.body.dataset.deviceReviewed = String(!!saved.deviceReviewed);
    const menuLayout = saved.menuSimple?.layout === 'list' ? 'list' : 'grid';
    document.querySelector(`[data-px-menu-layout="${menuLayout}"]`)?.click();
    const menuHero = document.getElementById('px-menu-hero');
    if (menuHero && typeof saved.menuSimple?.hero === 'boolean' && menuHero.checked !== saved.menuSimple.hero) {
      menuHero.checked = saved.menuSimple.hero;
      menuHero.dispatchEvent(new Event('change', { bubbles: true }));
    }
    syncOrderingExperience();
  }

  return {
    track, screenState, getScreenState: (key) => screenState[key] !== false,
    applyScreenVisibility, exportProductExperience, importProductExperience,
  };
}
