export function initCoreNavigation(ctx) {
  const { showToast } = ctx;

  const state = {
    page: 'home',
    template: 'tpl-blank',
    device: 'ios',
    modal: null,
    goal: 'blank'
  };

  const pageEls = document.querySelectorAll('.app-page');
  const cpPages = document.querySelectorAll('.cp-page');
  const navItems = document.querySelectorAll('.nav-item');
  const sideItems = document.querySelectorAll('.side-item[data-nav-page]');

  // ---------- Page navigation ----------
  function goToPage(page) {
    let actualPage = page;
    if (state.template === 'tpl-3') {
      if (page === 'home') actualPage = 'home-t3';
      if (page === 'menu') actualPage = 'qr';
    }
    pageEls.forEach(p => p.classList.toggle('active', p.dataset.page === actualPage));

    const cpKey = page;
    cpPages.forEach(cp => cp.style.display = cp.id === 'cp-' + cpKey ? 'flex' : 'none');

    navItems.forEach(n => n.classList.toggle('active', n.dataset.nav === page));
    sideItems.forEach(s => s.classList.toggle('active', s.dataset.navPage === page));
    document.getElementById('app-shell').scrollTop = 0;
    state.page = page;
    // Reset any open drill in the config panel so we always land on master view
    document.querySelectorAll('.cp-master').forEach(m => m.classList.remove('hide'));
    document.querySelectorAll('.cp-detail').forEach(d => d.classList.remove('show'));
    closeL3Panel();
    updateBrandingSideActive();
    closeModal();
  }
  window.goToPage = goToPage;

  navItems.forEach(n => n.addEventListener('click', () => goToPage(n.dataset.nav)));
  sideItems.forEach(s => s.addEventListener('click', () => goToPage(s.dataset.navPage)));

  // ---------- Sidebar collapse toggle ----------
  document.getElementById('side-toggle-btn').addEventListener('click', () => {
    document.body.classList.toggle('side-collapsed');
  });
  // Collapsed state: clicking anywhere in the empty area expands the sidebar
  document.getElementById('side-expand-zone').addEventListener('click', () => {
    if (document.body.classList.contains('side-collapsed')) {
      document.body.classList.remove('side-collapsed');
    }
  });
  // ---------- Template preset ----------
  function setBrand(name, mark, sub) {
    document.getElementById('brand-name').textContent = name;
    document.getElementById('brand-logo').textContent = mark;
    const phoneName = document.getElementById('phone-brand-name');
    const phoneMark = document.getElementById('phone-brand-mark');
    const phoneSub  = document.getElementById('phone-brand-sub');
    if (phoneName) phoneName.textContent = name.toUpperCase();
    if (phoneMark) phoneMark.textContent = mark;
    if (phoneSub)  phoneSub.textContent  = sub;
    const loginMark = document.getElementById('px-login-mark');
    if (loginMark) loginMark.textContent = mark;
    document.querySelectorAll('[data-phone-brand]').forEach((element) => { element.textContent = name; });
    const rewardsBrand = document.getElementById('rewards-brand');
    if (rewardsBrand) rewardsBrand.textContent = name.toUpperCase();
  }
  function setWidgetOn(key, on) {
    const toggle = document.querySelector('[data-widget-toggle="' + key + '"]');
    if (!toggle) return;
    const currentlyOn = toggle.classList.contains('on');
    if (currentlyOn === on) return;
    toggle.click();
  }
  function setMenuSlotMode(mode) {
    // mode = 'menu' | 'qr' | 'webview' | 'select-screen' | 'hidden'
    // 'webview' and 'hidden' exist so the Step 2 ordering choice has a visible
    // consequence on the phone: an embedded site reads differently from a native
    // menu, and skipping ordering removes the tab altogether.
    const SLOTS = {
      menu: {
        label: 'Menu',
        icon: '<path d="M4 4h16v16H4z"/><path d="M4 9h16M9 4v16"/>',
      },
      qr: {
        label: 'QR Code',
        icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><rect x="7" y="7" width="4" height="4"/><rect x="13" y="7" width="4" height="4"/><rect x="7" y="13" width="4" height="4"/><rect x="13" y="13" width="4" height="4"/>',
      },
      webview: {
        label: 'Order',
        icon: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/>',
        title: 'Order (web view)',
      },
      'select-screen': {
        label: 'Select screen',
        icon: '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 9h8M8 13h5"/>',
        title: 'Select screen',
      },
    };
    const menuSlot = document.getElementById('nav-menu-slot');
    const sideMenuSlot = document.getElementById('side-menu-slot');
    const hidden = mode === 'hidden';
    menuSlot?.closest('.nav-item')?.classList.toggle('slot-hidden', hidden);
    sideMenuSlot?.classList.toggle('slot-hidden', hidden);
    document.body.classList.toggle('menu-slot-webview', mode === 'webview');
    if (hidden) return;

    const def = SLOTS[mode] || SLOTS.menu;
    const svg = (cls) => `<svg${cls ? ` class="${cls}"` : ''} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${def.icon}</svg>`;

    if (menuSlot) menuSlot.innerHTML = svg() + `<span>${def.label}</span>`;
    if (!sideMenuSlot) return;
    // Patch the label and tooltip in place. Replacing the whole button would
    // destroy its .step-dot, and the sidebar's step numbering lives in there.
    const lbl = sideMenuSlot.querySelector('.side-lbl');
    if (lbl) lbl.textContent = def.label;
    const tip = sideMenuSlot.querySelector('.side-tooltip');
    if (tip) tip.textContent = def.label;
    const ic = sideMenuSlot.querySelector('.side-ic');
    if (ic) ic.innerHTML = svg();
    sideMenuSlot.title = def.title || def.label;
  }
  function applyTemplate(tpl) {
    state.template = tpl;
    document.body.classList.remove('tpl-blank', 'tpl-2', 'tpl-3');
    document.body.classList.add(tpl);
    const presetNames = { 'tpl-blank': 'Blank canvas', 'tpl-2': 'Fine Dining preset', 'tpl-3': 'Café preset' };
    document.querySelectorAll('.preset-menu-item').forEach(b => b.classList.toggle('active', b.dataset.tpl === tpl));
    const presetLabel = document.getElementById('preset-btn-label');
    if (presetLabel) presetLabel.textContent = presetNames[tpl] || 'Blank canvas';

    const homeWidgetKeys = ['profile','promo-cards','promo-cards-2','social'];
    if (tpl === 'tpl-2') {
      homeWidgetKeys.forEach(k => setWidgetOn(k, true));
      setBrand('Velvet Bistro', 'V', 'Fine dining · Loyalty');
      setMenuSlotMode('menu');
      showToast('Loaded Fine Dining preset · Velvet Bistro');
    } else if (tpl === 'tpl-3') {
      homeWidgetKeys.forEach(k => setWidgetOn(k, false));
      setBrand('Café Concerto', 'C', 'Coffee · Bakery');
      setMenuSlotMode('qr');
      showToast('Loaded Café preset · Café Concerto');
    } else {
      homeWidgetKeys.forEach(k => setWidgetOn(k, false));
      setBrand('Your Business', '?', '');
      setMenuSlotMode('menu');
    }
    updateHomeEmptyState();
    goToPage(state.page);
  }

  // ---------- Goal presets (shared by the setup wizard and the top-bar preset dropdown) ----------
  const ORDERING_WIDGET_KEYS = ['order-again', 'top-items', 'menu-categories', 'menu-reels'];
  const ALL_HOME_WIDGET_KEYS = ['profile', 'promo-cards', 'promo-cards-2', 'social', ...ORDERING_WIDGET_KEYS];
  const GOAL_DEFS = {
    loyalty: {
      label: 'Lead with loyalty', sub: 'Points, tiers, and rewards',
      widgets: ['profile', 'promo-cards', 'social'], menuDP: false,
      order: ['profile', 'promo-cards', 'social', 'order-again', 'top-items', 'menu-categories'],
      name: 'Lead with loyalty',
      desc: 'Put member status, progress, and rewards first to encourage repeat visits.',
      tags: ['Member status', 'Points and tiers', 'Rewards'],
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"/></svg>'
    },
    ordering: {
      label: 'Lead with ordering', sub: 'Order quickly, earn every time',
      // Ordering preset seeds Profile and Promo Cards plus the ordering widgets.
      // Menu Reels is an opt-in extra the merchant enables from the Home step,
      // so it is not part of the default ordering layout.
      widgets: ['profile', 'promo-cards', 'order-again', 'top-items', 'menu-categories'], menuDP: true,
      // "Lead with ordering" has to mean it: the ordering widgets go above the
      // loyalty card, not below the fold. Order drives both the config rows and
      // (via reorderPhoneWidgets) the phone itself.
      order: ['order-again', 'top-items', 'menu-categories', 'profile', 'promo-cards', 'social'],
      name: 'Lead with ordering',
      desc: 'Put the menu and repeat orders first while keeping loyalty visible at checkout.',
      tags: ['Menu first', 'Order again', 'Loyalty at checkout'],
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 01-8 0"/></svg>'
    },
    blank: {
      label: 'Choose focus', sub: 'A proven first app, ready to shape',
      widgets: ['profile', 'promo-cards'], menuDP: false
    }
  };
  // Applies a goal preset to the real editor (widgets + menu D/P switcher + brand sub + top-bar label).
  function syncGoalChrome(goal) {
    const def = GOAL_DEFS[goal] || GOAL_DEFS.blank;
    state.goal = goal;
    document.body.classList.remove('focus-loyalty', 'focus-ordering', 'focus-blank');
    document.body.classList.add('focus-' + goal);
    const subEl = document.getElementById('phone-brand-sub');
    if (subEl) subEl.textContent = def.sub;
    const label = document.getElementById('preset-btn-label');
    if (label) label.textContent = goal === 'blank' ? 'Choose focus' : def.label;
    document.querySelectorAll('.preset-menu-item').forEach(b => b.classList.toggle('active', b.dataset.goal === goal));
  }

  function emitFocusChanged(goal, source = 'preset') {
    document.dispatchEvent(new CustomEvent('como:focus-changed', { detail: { goal, source } }));
  }

  /**
   * Reorder the Home config rows to match a preset.
   *
   * The phone mirrors config-row order (see reorderPhoneWidgets), so this is the
   * single lever that makes a focus visibly lead. Rows the preset does not name
   * keep their relative order at the end, and pinned rows (the reels chip) are
   * left where they are.
   */
  function reorderConfigRows(order) {
    if (!order?.length) return;
    const container = document.querySelector('#cp-home .cp-master');
    if (!container) return;
    const rows = [...container.querySelectorAll('.cp-widget-row:not(.cp-fixed-slot)')];
    if (!rows.length) return;
    const keyOf = (row) => row.querySelector('[data-widget-toggle]')?.dataset.widgetToggle;
    const rank = new Map(order.map((key, i) => [key, i]));
    const sorted = [...rows].sort((a, b) => {
      const ra = rank.has(keyOf(a)) ? rank.get(keyOf(a)) : order.length + rows.indexOf(a);
      const rb = rank.has(keyOf(b)) ? rank.get(keyOf(b)) : order.length + rows.indexOf(b);
      return ra - rb;
    });
    const anchor = rows[0];
    let previous = anchor.previousSibling;
    sorted.forEach((row) => {
      previous ? previous.parentNode.insertBefore(row, previous.nextSibling)
               : anchor.parentNode.insertBefore(row, anchor.parentNode.firstChild);
      previous = row;
    });
    ctx.reorderPhoneWidgets?.();
  }

  function applyGoalPreset(goal, options = {}) {
    const def = GOAL_DEFS[goal] || GOAL_DEFS.blank;
    const actualGoal = GOAL_DEFS[goal] ? goal : 'blank';
    // Focus seeds recommended real content. Ordering widgets remain useful sample
    // content until the provider connection is complete.
    // The guard class stops each seeded toggle from drilling into its config.
    document.body.classList.add('gf-applying-preset');
    const wanted = new Set(def.widgets || []);
    ALL_HOME_WIDGET_KEYS.forEach(k => {
      setWidgetOn(k, wanted.has(k));
    });
    document.body.classList.remove('gf-applying-preset');
    // Position, not just visibility — otherwise "lead with ordering" renders the
    // ordering widgets below the fold and the preset silently lies.
    reorderConfigRows(def.order);
    // Tag the body so the skeleton layer can reflect the chosen focus.
    const dp = document.querySelector('#cp-menu [data-bind="[data-slot-name=\'menu-dp\']"]');
    if (dp && def.menuDP !== dp.classList.contains('on')) dp.click();
    syncGoalChrome(actualGoal);
    if (typeof updateHomeEmptyState === 'function') updateHomeEmptyState();
    if (options.emit !== false) emitFocusChanged(actualGoal, options.source);
  }
  window.applyGoalPreset = applyGoalPreset;
  window.setMenuSlotMode = setMenuSlotMode;

  function captureLayout() {
    const widgets = {};
    ALL_HOME_WIDGET_KEYS.forEach((key) => {
      widgets[key] = document.querySelector(`[data-widget-toggle="${key}"]`)?.classList.contains('on') || false;
    });
    const dp = document.querySelector('#cp-menu [data-bind="[data-slot-name=\'menu-dp\']"]');
    return { goal: state.goal, widgets, menuDP: dp?.classList.contains('on') || false };
  }

  function restoreLayout(snapshot) {
    if (!snapshot) return;
    document.body.classList.add('gf-applying-preset');
    Object.entries(snapshot.widgets || {}).forEach(([key, on]) => setWidgetOn(key, on));
    document.body.classList.remove('gf-applying-preset');
    const dp = document.querySelector('#cp-menu [data-bind="[data-slot-name=\'menu-dp\']"]');
    if (dp && snapshot.menuDP !== dp.classList.contains('on')) dp.click();
    syncGoalChrome(snapshot.goal || 'blank');
    updateHomeEmptyState();
    emitFocusChanged(snapshot.goal || 'blank', 'undo');
    goToPage(state.page);
  }

  // ---------- Preset dropdown + confirm-before-switch ----------
  let pendingGoal = null;
  let pendingSnapshot = null;
  const presetConfirmNames = { loyalty: 'Lead with loyalty', ordering: 'Lead with ordering' };
  const presetDropdown = document.getElementById('preset-dropdown');
  const presetBtn = document.getElementById('preset-btn');
  presetBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    if (presetDropdown.classList.contains('disabled')) return;
    const open = presetDropdown.classList.toggle('open');
    presetBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  document.addEventListener('click', () => {
    presetDropdown?.classList.remove('open');
    presetBtn?.setAttribute('aria-expanded', 'false');
  });

  function requestGoalPreset(goal) {
    if (goal !== 'loyalty' && goal !== 'ordering') return;
    if (goal === state.goal) return;
    presetDropdown?.classList.remove('open');
    presetBtn?.setAttribute('aria-expanded', 'false');
    if (state.goal === 'blank') {
      applyGoalPreset(goal, { source: 'initial-choice' });
      if (goal === 'ordering' && window.isOrderingConnected?.() !== true) {
        showToast('Your starting app is ready. Connect ordering to activate live menus and checkout.', {
          actionLabel: 'Connect',
          onAction: () => window.openSettings?.('online-ordering'),
        });
      } else {
        showToast(`Your starting app is ready — ${presetConfirmNames[goal]} layout applied`);
      }
      return;
    }
    pendingGoal = goal;
    pendingSnapshot = captureLayout();
    document.getElementById('confirm-preset-name').textContent = presetConfirmNames[goal] || goal;
    const overlay = document.getElementById('preset-confirm-overlay');
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
  }
  window.requestGoalPreset = requestGoalPreset;

  document.querySelectorAll('.preset-menu-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      requestGoalPreset(item.dataset.goal);
    });
  });
  document.getElementById('preset-confirm-cancel').addEventListener('click', () => {
    const overlay = document.getElementById('preset-confirm-overlay');
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    pendingGoal = null;
    pendingSnapshot = null;
  });
  document.getElementById('preset-confirm-ok').addEventListener('click', () => {
    const overlay = document.getElementById('preset-confirm-overlay');
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    if (pendingGoal) {
      const before = pendingSnapshot;
      const applied = pendingGoal;
      applyGoalPreset(applied, { source: 'confirmed-switch' });
      goToPage(state.page);
      showToast(`Layout updated: ${presetConfirmNames[applied]}`, {
        actionLabel: 'Undo',
        onAction: () => {
          restoreLayout(before);
          showToast('Previous layout restored');
        },
      });
      pendingGoal = null;
      pendingSnapshot = null;
    }
  });

  // ---------- Modals ----------
  function openModal(name) {
    document.querySelectorAll('.phone-modal').forEach(m => m.classList.toggle('open', m.dataset.modal === name));
    state.modal = name;
  }
  function closeModal() {
    document.querySelectorAll('.phone-modal').forEach(m => m.classList.remove('open'));
    state.modal = null;
  }
  window.openModal = openModal;
  window.closeModal = closeModal;

  document.querySelectorAll('.phone-modal').forEach(m => {
    m.addEventListener('click', (e) => { if (e.target === m) closeModal(); });
  });

  // ---------- Promo Cards carousel dots ----------
  const pcCarouselWrap = document.getElementById('pc-carousel-wrap');
  const pcDots = document.querySelectorAll('.pc-dot');
  if (pcCarouselWrap) {
    pcDots.forEach(d => {
      d.addEventListener('click', () => {
        const i = parseInt(d.dataset.dot);
        pcCarouselWrap.scrollTo({ left: i * pcCarouselWrap.offsetWidth, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
      });
    });
    pcCarouselWrap.addEventListener('scroll', () => {
      const i = Math.round(pcCarouselWrap.scrollLeft / pcCarouselWrap.offsetWidth);
      pcDots.forEach((d, idx) => d.classList.toggle('active', idx === i));
    });
  }

  // ---------- Config panel widget hover → spotlight on phone ----------
  document.querySelectorAll('.cp-item[data-hl]').forEach(item => {
    const sel = item.dataset.hl;
    item.addEventListener('mouseenter', () => {
      const target = document.querySelector('.app-page.active ' + sel) || document.querySelector(sel);
      if (target) target.classList.add('highlight-target');
    });
    item.addEventListener('mouseleave', () => {
      document.querySelectorAll('.highlight-target').forEach(t => t.classList.remove('highlight-target'));
    });
  });

  // ---------- Drill-in navigation (Toast pattern) ----------
  const PAGE_LABELS = { home: 'Home', rewards: 'Rewards', locations: 'Locations', menu: 'Menu', more: 'More' };
  function updateDrillCrumbs() {
    const label = PAGE_LABELS[state.page] || 'Home';
    document.querySelectorAll('.cp-crumb').forEach(c => c.textContent = label + ' settings');
  }
  function updateBrandingSideActive() {
    const page = document.getElementById('cp-branding');
    const btn = document.getElementById('side-branding-btn');
    if (btn) btn.classList.toggle('active', !!page && page.style.display !== 'none');
  }
  // Depth changes drive the breadcrumb and the context-aware step footer.
  function emitNavChange() {
    document.dispatchEvent(new CustomEvent('como:navchange'));
  }
  function openDrill(pageId, key) {
    const page = document.getElementById(pageId);
    if (!page) return;
    closeL3Panel();
    // A drill marked data-l3-drill edits one level deeper while its parent list
    // (Home widgets, or this widget's own card list) stays visible behind it,
    // matching the Online ordering webview setup.
    const target = document.querySelector('[data-detail="' + key + '"]');
    if (target && target.hasAttribute('data-l3-drill')) {
      openL3Panel(target);
      return;
    }
    const master = page.querySelector('.cp-master');
    if (master) master.classList.add('hide');
    page.querySelectorAll('.cp-detail').forEach(d => d.classList.toggle('show', d.dataset.detail === key));
    updateDrillCrumbs();
    updateBrandingSideActive();
    // scroll config panel to top
    document.getElementById('config-panel').scrollTop = 0;
    emitNavChange();
  }
  function closeDrill(pageId) {
    const page = document.getElementById(pageId);
    if (!page) return;
    closeL3Panel();
    const master = page.querySelector('.cp-master');
    if (master) master.classList.remove('hide');
    page.querySelectorAll('.cp-detail').forEach(d => d.classList.remove('show'));
    updateBrandingSideActive();
    document.getElementById('config-panel').scrollTop = 0;
    emitNavChange();
  }
  function resetAllDrills() {
    document.querySelectorAll('.cp-master').forEach(m => m.classList.remove('hide'));
    document.querySelectorAll('.cp-detail').forEach(d => d.classList.remove('show'));
  }
  window.openDrill = openDrill;
  window.closeDrill = closeDrill;

  // ---------- Third panel (L3): deep drill (e.g. individual card editor) ----------
  // Hosts a moved edit-drill (.cp-detail) node so the level-2 card list stays visible
  // in the config panel while an individual card is edited one level deeper.
  function openL3Panel(drillNode) {
    const body = document.getElementById('l3-body');
    if (!body || !drillNode) return;
    if (drillNode.parentElement !== body) body.appendChild(drillNode);
    body.querySelectorAll('.cp-detail').forEach(d => d.classList.toggle('show', d === drillNode));
    document.body.classList.add('l3-open');
    body.scrollTop = 0;
    document.dispatchEvent(new CustomEvent('como:navchange'));
  }
  function closeL3Panel() {
    document.body.classList.remove('l3-open');
    const body = document.getElementById('l3-body');
    if (body) body.querySelectorAll('.cp-detail.show').forEach(d => d.classList.remove('show'));
    document.querySelectorAll('.l3-active').forEach(i => i.classList.remove('l3-active'));
    document.dispatchEvent(new CustomEvent('como:navchange'));
  }
  window.openL3Panel = openL3Panel;
  window.closeL3Panel = closeL3Panel;

  // A drill moved permanently into the third panel has no .cp-page ancestor,
  // so its own back button needs its own listener instead of the generic one below.
  document.querySelectorAll('[data-l3-drill] > .cp-detail-header > .cp-back').forEach((btn) => {
    btn.addEventListener('click', () => closeL3Panel());
  });

  // ---------- Jump to the guided Branding step from the phone header ----------
  function openBusinessNameSettings() {
    if (typeof window.goToBrandingStep === 'function') window.goToBrandingStep();
  }
  window.openBusinessNameSettings = openBusinessNameSettings;

  // ---------- Profile icon: preview the real Account/Login page (phone only — config panel untouched) ----------
  function showPhonePage(key) {
    let actualPage = key;
    if (state.template === 'tpl-3' && key === 'home') actualPage = 'home-t3';
    pageEls.forEach(p => p.classList.toggle('active', p.dataset.page === actualPage));
    document.getElementById('app-shell').scrollTop = 0;
    closeModal();
  }
  window.showPhonePage = showPhonePage;

  function openAccountPage() {
    const greetRow = document.querySelector('.greet-row');
    const isGuest = greetRow && greetRow.classList.contains('is-guest');
    showPhonePage(isGuest ? 'login' : 'account');
  }
  window.openAccountPage = openAccountPage;

  // ---------- Links that jump to Branding ----------
  ['rewards-branding-link'].forEach(id => {
    const link = document.getElementById(id);
    if (link) link.addEventListener('click', (e) => { e.preventDefault(); openBusinessNameSettings(); });
  });

  document.querySelectorAll('.cp-item[data-drill]').forEach(item => {
    item.addEventListener('click', (e) => {
      if (e.target.classList.contains('handle')) return;
      const page = item.closest('.cp-page');
      openDrill(page.id, item.dataset.drill);
      // also spotlight
      const sel = item.dataset.hl;
      if (sel) {
        const target = document.querySelector('.app-page.active ' + sel) || document.querySelector(sel);
        if (target) {
          target.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'center' });
          target.classList.add('highlight-target');
          setTimeout(() => target.classList.remove('highlight-target'), 1800);
        }
      }
    });
  });
  // Widget-row drill triggers (name click + edit icon click)
  document.querySelectorAll('.w-name[data-drill], .w-chev[data-drill], .w-edit-icon[data-drill]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const page = el.closest('.cp-page');
      if (page) openDrill(page.id, el.dataset.drill);
    });
  });
  document.querySelectorAll('.cp-back').forEach(b => {
    b.addEventListener('click', () => {
      // A drill moved into the third panel (#l3-body) has no .cp-page ancestor;
      // its own handler closes the L3 panel, so skip the generic close here.
      const page = b.closest('.cp-page');
      if (page) closeDrill(page.id);
    });
  });

  // ---------- Empty state auto-hide ----------
  function updateHomeEmptyState() {
    const homePage = document.querySelector('.app-page[data-page="home"]');
    if (!homePage) return;
    const widgets = homePage.querySelectorAll('[data-widget]');
    const anyVisible = Array.from(widgets).some(w => !w.classList.contains('hidden-slot'));
    const empty = homePage.querySelector('[data-empty="home"]');
    if (empty) empty.classList.toggle('hidden-slot', anyVisible);
  }
  window.updateHomeEmptyState = updateHomeEmptyState;


  return {
    state, pageEls, cpPages, navItems, sideItems, GOAL_DEFS,
    goToPage, setBrand, setWidgetOn, setMenuSlotMode, applyTemplate, applyGoalPreset, requestGoalPreset,
    openModal, closeModal, updateDrillCrumbs, updateBrandingSideActive,
    openDrill, closeDrill, resetAllDrills, openL3Panel, closeL3Panel,
    openBusinessNameSettings, showPhonePage, openAccountPage, updateHomeEmptyState,
  };
}
