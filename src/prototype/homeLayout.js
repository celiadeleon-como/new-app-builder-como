/**
 * Home layout — the structural template for the Home screen, independent of
 * which widgets are turned on/off. Three selectable layouts:
 *   priority-stack   — the original single-column feed (default, always exists).
 *   bento-grid       — asymmetric 2-column dashboard with an answer-first hero.
 *   split-header-qsr — brand-colour hero header + overlapping white card list.
 *
 * Rendering itself lives entirely in CSS (src/styles/19-home-layouts.css),
 * keyed off `body[data-home-layout]`; this module only owns the recommendation
 * logic and keeps every layout-picker UI (onboarding + the post-setup Home
 * editor) showing the same selected/recommended state.
 */
export function initHomeLayout(ctx) {
  const state = { layout: 'priority-stack' };

  const LAYOUT_DEFS = [
    { key: 'priority-stack', name: 'Classic Priority Stack', desc: 'Single-column scrollable feed with rich imagery and loyalty cards.' },
    { key: 'bento-grid', name: 'Gamified Bento Grid', desc: 'Asymmetric 2-column dashboard with an answer-first hero and quick-tap tiles.' },
    { key: 'split-header-qsr', name: 'Split-Header QSR Standard', desc: 'Brand-coloured hero header with an overlapping card list and pickup bar.' },
  ];

  const profileIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="12" cy="8" r="3.5"/><path d="M5 21a7 7 0 0114 0"/></svg>';
  const qrIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3M20 14v.01M14 20v.01M20 20v.01M17 20h.01M20 17h.01"/></svg>';

  function widgetEnabled(key) {
    const toggle = document.querySelector(`[data-widget-toggle="${key}"]`);
    return !toggle || toggle.classList.contains('on');
  }

  function escapeHome(value) {
    return String(value ?? '').replace(/[&<>"']/g, (character) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;',
    }[character]));
  }

  function brandIdentity() {
    const mark = document.getElementById('phone-brand-mark');
    const name = document.getElementById('phone-brand-name')?.textContent?.trim() || 'Your Business';
    const initials = name.split(/\s+/).filter(Boolean).slice(0, 2).map((word) => word[0]).join('').toUpperCase() || 'VB';
    return {
      name: name.toUpperCase(),
      initials: mark?.textContent?.trim() || initials,
      logo: mark?.style.backgroundImage || '',
      logoClass: mark?.classList.contains('has-logo') ? ' has-logo' : '',
    };
  }

  function cleanHeader(layout = 'standard') {
    const brand = brandIdentity();
    return '<header class="ha-header ha-header-' + layout + '">'
      + '<div class="ha-brand-row"><div class="ha-brand-lockup"><span class="ha-monogram' + brand.logoClass + '"' + (brand.logo ? ' style="background-image:' + brand.logo + '"' : '') + '>' + brand.initials + '</span><strong>' + brand.name + '</strong></div>'
      + '<button class="ha-profile" type="button" onclick="openAccountPage()" aria-label="Open profile">' + profileIcon + '</button></div>'
      + '<div class="ha-greeting">Hello, User!</div></header>';
  }

  function rewardHero(compact = false) {
    if (compact) {
      return '<section class="ha-card ha-compact-rewards" data-ha-widget="profile" data-drill="profile"><div class="ha-eyebrow">Rewards balance</div>'
        + '<div class="ha-balance-row"><strong>200 / 500 pts</strong><span>300 pts to next reward</span></div>'
        + '<div class="ha-progress"><span style="width:40%"></span></div></section>';
    }
    return '<section class="ha-card ha-reward-hero" data-ha-widget="profile" data-drill="profile"><div class="ha-reward-copy"><div class="ha-eyebrow">Rewards balance</div>'
      + '<strong class="ha-points">200 points</strong><span class="ha-next-copy">50 points to your next reward</span></div>'
      + '<div class="ha-ring"><span>200<small>/250</small></span></div>'
      + '<button class="ha-scan" type="button" data-drill="loyalty-qr">' + qrIcon + '<span>Scan loyalty card</span></button></section>';
  }

  function dots() {
    return '<div class="ha-dots" aria-label="3 carousel pages"><i class="active"></i><i></i><i></i></div>';
  }

  function section(title, content, options = {}) {
    const classes = 'ha-section' + (options.card ? ' ha-section-card' : '');
    return '<section class="' + classes + '" data-ha-widget="' + (options.drill || '') + '" ' + (options.drill ? 'data-drill="' + options.drill + '"' : '') + '>'
      + '<div class="ha-section-head"><h2>' + title + '</h2>' + (options.link ? '<button type="button">' + options.link + '</button>' : '') + '</div>'
      + content + '</section>';
  }

  function activeRewardsCard() {
    const source = document.querySelector('.home-layout-priority-stack .active-rewards-card');
    return '<article class="ha-card ha-mini-rewards" data-ha-widget="active-rewards" data-drill="active-rewards">' + (source?.innerHTML || '<h2>Active Rewards</h2>') + '</article>';
  }

  function punchCard() {
    const source = document.querySelector('.home-layout-priority-stack .punch-card-mini');
    return '<section class="ha-card ha-punch ha-live-widget" data-ha-widget="punch-card" data-drill="punch-card">' + (source?.innerHTML || '') + '</section>';
  }

  function promoSection(mode = 'pair', enclosed = false) {
    const source = document.querySelector('.home-layout-priority-stack .promo-cards-widget[data-widget="promo-cards"]');
    const content = source
      ? source.outerHTML
        .replace(/\s+id="[^"]*"/g, '')
        .replace('class="promo-cards-widget ', 'class="ha-live-promotions promo-cards-widget ha-promo-' + mode + ' ')
        .replace('class="promo-cards-widget hidden-slot', 'class="ha-live-promotions promo-cards-widget ha-promo-' + mode)
        .replace(/\s+hidden-slot/g, '')
      : '<div class="ha-live-promotions"></div>';
    return section('Feature Promotions', content, { card: enclosed, drill: 'promo-cards' });
  }

  function orderAgainSection(enclosed = false) {
    const state = ctx.orderingWidgetState;
    const lastOrder = state?.orderAgain.empty;
    const topItems = state?.topItems.items.filter((item) => item.visible) || [];
    const items = [
      ...(lastOrder ? [{ name: lastOrder.itemName, price: lastOrder.price, image: lastOrder.itemImage }] : []),
      ...topItems,
    ];
    const cards = items.slice(0, 2).map((item) => '<article class="ha-order-card"><div class="ha-order-image" style="background-image:url(&quot;' + escapeHome(item.image) + '&quot;)"></div>'
      + '<div class="ha-order-copy"><strong>' + escapeHome(item.name) + '</strong><span>' + escapeHome(item.price) + '</span></div><button type="button" aria-label="Add ' + escapeHome(item.name) + '">+</button></article>').join('');
    return section('Order Again', '<div class="ha-carousel ha-carousel-pair ha-order-live">' + cards + '</div>' + dots(), { card: enclosed, drill: 'order-again' });
  }

  function menuCategoriesSection(enclosed = false, grid = false) {
    const items = ctx.orderingWidgetState?.menuCategories.items.filter((item) => item.visible) || [];
    const cards = items.slice(0, grid ? 4 : 2).map((item) => '<article class="ha-category-card"><div class="ha-category-image" style="background-image:url(&quot;' + escapeHome(item.image) + '&quot;)"></div>'
      + '<div><strong>' + escapeHome(item.name) + '</strong><span>' + escapeHome(item.count) + ' items</span></div></article>').join('');
    const content = '<div class="' + (grid ? 'ha-category-grid' : 'ha-carousel ha-carousel-pair') + '">' + cards + '</div>' + (grid ? '' : dots());
    return section('Menu categories', content, { card: enclosed, link: 'View full menu', drill: 'menu-categories' });
  }

  function splitHero() {
    const brand = brandIdentity();
    return '<div class="ha-split-hero"><div class="ha-brand-row"><span class="ha-monogram ha-monogram-white' + brand.logoClass + '"' + (brand.logo ? ' style="background-image:' + brand.logo + '"' : '') + '>' + brand.initials + '</span>'
      + '<button class="ha-profile ha-profile-inverse" type="button" onclick="openAccountPage()" aria-label="Open profile">' + profileIcon + '</button></div>'
      + '<div class="ha-split-greeting"><strong>Hello, User!</strong><span class="ha-tier">Bronze</span></div>'
      + '<div class="ha-balance-row"><strong>200 / 500 pts</strong><span>300 pts to next reward</span></div><div class="ha-progress ha-progress-inverse"><span style="width:40%"></span></div></div>';
  }

  function scanToEarnTile() {
    const source = document.querySelector('.home-layout-bento-grid .bento-tile-qr');
    return source?.innerHTML || '<span class="ha-scan-icon">' + qrIcon + '</span><strong>Scan to earn</strong>';
  }

  function bentoLoyalty() {
    return cleanHeader() + rewardHero()
      + (widgetEnabled('active-rewards') ? '<div class="ha-bento-pair">' + activeRewardsCard() : '')
      + (widgetEnabled('loyalty-qr') ? '<button class="ha-card ha-scan-tile" data-ha-widget="loyalty-qr" type="button" data-drill="loyalty-qr">' + scanToEarnTile() + '</button>' : '')
      + (widgetEnabled('active-rewards') ? '</div>' : '')
      + (widgetEnabled('punch-card') ? punchCard() : '')
      + (widgetEnabled('promo-cards') ? promoSection('pair') : '');
  }

  function bentoOrdering() {
    return cleanHeader() + rewardHero(true)
      + (widgetEnabled('order-again') ? orderAgainSection() : '')
      + (widgetEnabled('promo-cards') ? promoSection('banner') : '')
      + (widgetEnabled('menu-categories') ? menuCategoriesSection() : '');
  }

  function classicLoyalty() {
    return cleanHeader() + rewardHero()
      + (widgetEnabled('active-rewards') ? section('Active Rewards', '<div class="ha-live-rewards">' + activeRewardsCard() + '</div>' + dots(), { card: true, drill: 'active-rewards' }) : '')
      + (widgetEnabled('punch-card') ? punchCard() : '')
      + (widgetEnabled('promo-cards') ? promoSection('pair', true) : '');
  }

  function classicOrdering() {
    return cleanHeader() + rewardHero(true)
      + (widgetEnabled('order-again') ? orderAgainSection(true) : '')
      + (widgetEnabled('promo-cards') ? promoSection('pair', true) : '')
      + (widgetEnabled('menu-categories') ? menuCategoriesSection(true) : '');
  }

  function splitSheet(content) {
    return splitHero() + '<div class="ha-sheet">' + content + '</div>';
  }

  function splitLoyalty() {
    return splitSheet(
      (widgetEnabled('active-rewards') ? section('Active Rewards', '<div class="ha-live-rewards">' + activeRewardsCard() + '</div>', { drill: 'active-rewards' }) : '')
      + (widgetEnabled('punch-card') ? section('Punch Card', punchCard(), { drill: 'punch-card' }) : '')
      + (widgetEnabled('loyalty-qr') ? '<button class="ha-scan ha-scan-sheet" type="button" data-drill="loyalty-qr">' + qrIcon + '<span>Scan loyalty card</span></button>' : '')
      + (widgetEnabled('promo-cards') ? promoSection('peek') : '')
    );
  }

  function splitOrdering() {
    return splitSheet(
      (widgetEnabled('order-again') ? orderAgainSection() : '')
      + (widgetEnabled('promo-cards') ? promoSection('peek-wide') : '')
      + (widgetEnabled('active-rewards') ? section('Active Rewards', '<div class="ha-live-rewards">' + activeRewardsCard() + '</div>', { drill: 'active-rewards' }) : '')
      + (widgetEnabled('menu-categories') ? menuCategoriesSection(false, true) : '')
    );
  }

  function homeArchitectureMarkup() {
    const focus = currentAppFocus();
    if (state.layout === 'split-header-qsr') return focus === 'ordering' ? splitOrdering() : splitLoyalty();
    if (state.layout === 'bento-grid') return focus === 'ordering' ? bentoOrdering() : bentoLoyalty();
    return focus === 'ordering' ? classicOrdering() : classicLoyalty();
  }

  function renderHomeArchitecture() {
    const wrapper = document.querySelector('.home-layout-' + state.layout);
    if (!wrapper) return;
    document.querySelectorAll('.ha-home-architecture').forEach((host) => host.remove());
    const host = document.createElement('div');
    host.className = 'ha-home-architecture ha-' + state.layout + ' ha-focus-' + currentAppFocus();
    host.innerHTML = homeArchitectureMarkup();
    applyHomeSectionOrder(host);
    wrapper.appendChild(host);
    host.querySelectorAll('[data-drill]').forEach((element) => {
      element.addEventListener('click', (event) => {
        event.stopPropagation();
        window.openDrill?.('cp-home', element.dataset.drill);
      });
    });
  }

  function applyHomeSectionOrder(host) {
    const rows = [...document.querySelectorAll('#cp-home .cp-master .cp-widget-row')];
    const order = rows.map((row) => row.querySelector('[data-widget-toggle]')?.dataset.widgetToggle).filter(Boolean);
    const position = (key) => {
      const index = order.indexOf(key);
      return index < 0 ? 1000 : index;
    };
    [host, ...host.querySelectorAll('.ha-sheet, .ha-bento-pair')].forEach((container) => {
      [...container.children].forEach((section) => {
        const key = section.dataset.haWidget;
        if (key) section.style.order = position(key);
        if (section.classList.contains('ha-bento-pair')) {
          const keys = [...section.querySelectorAll('[data-ha-widget]')].map((child) => child.dataset.haWidget);
          section.style.order = keys.length ? Math.min(...keys.map(position)) : 1000;
        }
      });
    });
  }

  // Mirrors the spec's badge rule: ordering-led apps recommend the QSR split
  // header; every other combination (loyalty-led, or ordering disabled
  // entirely) recommends the bento grid.
  function getRecommendedLayout({ onlineOrderingEnabled, appFocus } = {}) {
    if (onlineOrderingEnabled && appFocus === 'ordering') return 'split-header-qsr';
    return 'bento-grid';
  }

  function fallbackLayout() {
    const onlineOrderingEnabled = !document.body.classList.contains('oo-mode-skip');
    const appFocus = document.body.classList.contains('focus-ordering') ? 'ordering' : 'loyalty';
    return getRecommendedLayout({ onlineOrderingEnabled, appFocus });
  }

  // Belt-and-suspenders: besides the CSS attribute-selector toggle, force
  // exclusivity with inline styles too, so a single layout is guaranteed to
  // render even if a stale/competing stylesheet rule ever wins the cascade.
  function enforceExclusiveLayout() {
    document.querySelectorAll('.home-layout').forEach((el) => {
      const isActive = el.classList.contains('home-layout-' + state.layout);
      el.style.display = isActive ? '' : 'none';
    });
    reclaimLeakedWidgets();
    renderHomeArchitecture();
  }

  // Self-healing guard: reorderPhoneWidgets() (reordering.js) only ever moves
  // widgets inside .home-layout-priority-stack now, but if any other code path
  // ever re-parents a [data-widget] element to the top level of the home page
  // (outside every .home-layout wrapper), it would stay visible regardless of
  // the active layout. Sweep it back into the Priority Stack wrapper on every
  // layout change so that can never happen.
  function reclaimLeakedWidgets() {
    const homePage = document.querySelector('.app-page[data-page="home"]');
    const stack = document.querySelector('.home-layout-priority-stack');
    if (!homePage || !stack) return;
    [...homePage.children].forEach((child) => {
      if (child.hasAttribute('data-widget') && !child.closest('.home-layout')) {
        stack.appendChild(child);
      }
    });
  }

  function scrollHomeToTop() {
    const shell = document.getElementById('app-shell');
    if (shell) shell.scrollTop = 0;
  }

  function applyHomeLayout(layout) {
    state.layout = LAYOUT_DEFS.some((d) => d.key === layout) ? layout : fallbackLayout();
    document.body.dataset.homeLayout = state.layout;
    enforceExclusiveLayout();
    scrollHomeToTop();
    document.querySelectorAll('[data-home-layout-pick]').forEach((card) => {
      card.classList.toggle('selected', card.dataset.homeLayoutPick === state.layout);
    });
    const status = document.getElementById('brand-home-layout-status');
    if (status) status.textContent = LAYOUT_DEFS.find((definition) => definition.key === state.layout)?.name || '';
    document.dispatchEvent(new CustomEvent('como:home-layout-changed', { detail: { layout: state.layout } }));
    ctx.markDirty?.();
  }

  function homeLayoutWireframe(key) {
    if (key === 'bento-grid') {
      return '<svg viewBox="0 0 100 68" fill="none"><rect x="4" y="4" width="92" height="22" rx="4" fill="currentColor" opacity=".35"/><rect x="4" y="30" width="43" height="34" rx="4" fill="currentColor" opacity=".55"/><rect x="51" y="30" width="45" height="16" rx="4" fill="currentColor" opacity=".25"/><rect x="51" y="48" width="45" height="16" rx="4" fill="currentColor" opacity=".25"/></svg>';
    }
    if (key === 'split-header-qsr') {
      return '<svg viewBox="0 0 100 68" fill="none"><rect x="4" y="4" width="92" height="28" rx="6" fill="currentColor" opacity=".5"/><rect x="4" y="26" width="92" height="38" rx="10" fill="currentColor" opacity=".3"/></svg>';
    }
    // priority-stack
    return '<svg viewBox="0 0 100 68" fill="none"><rect x="4" y="4" width="92" height="12" rx="4" fill="currentColor" opacity=".5"/><rect x="4" y="20" width="92" height="12" rx="4" fill="currentColor" opacity=".3"/><rect x="4" y="36" width="92" height="12" rx="4" fill="currentColor" opacity=".3"/><rect x="4" y="52" width="92" height="12" rx="4" fill="currentColor" opacity=".3"/></svg>';
  }

  /* ---------------------------- post-setup "Home Structure" card (Home editor) */

  const grid = document.getElementById('cp-home-layout-grid');

  function currentAppFocus() {
    if (document.body.classList.contains('focus-ordering')) return 'ordering';
    return 'loyalty';
  }

  function renderHomeStructureGrid() {
    if (!grid) return;
    const onlineOrderingEnabled = !document.body.classList.contains('oo-mode-skip');
    const recommended = getRecommendedLayout({ onlineOrderingEnabled, appFocus: currentAppFocus() });
    grid.innerHTML = LAYOUT_DEFS.map((def) => {
      const selected = state.layout === def.key;
      return '<button type="button" class="cp-home-layout-opt' + (selected ? ' selected' : '') + '" data-home-layout-pick="' + def.key + '">'
        + '<span class="cp-home-layout-wireframe">' + homeLayoutWireframe(def.key) + '</span>'
        + '<span class="cp-home-layout-check' + (selected ? ' checked' : '') + '"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></span>'
        + (def.key === recommended ? '<span class="cp-home-layout-badge">Recommended</span>' : '')
        + '<span class="cp-home-layout-title">' + def.name + '</span>'
        + '<span class="cp-home-layout-desc">' + def.desc + '</span>'
        + '</button>';
    }).join('');
    grid.querySelectorAll('[data-home-layout-pick]').forEach((btn) => {
      btn.addEventListener('click', () => applyHomeLayout(btn.dataset.homeLayoutPick));
    });
  }

  renderHomeStructureGrid();
  document.addEventListener('como:focus-changed', () => { renderHomeStructureGrid(); scrollHomeToTop(); });
  document.addEventListener('como:focus-changed', renderHomeArchitecture);
  document.addEventListener('como:ordering-mode', () => { renderHomeStructureGrid(); renderHomeArchitecture(); });
  document.addEventListener('como:brand-colors', renderHomeArchitecture);
  document.addEventListener('como:home-sections-reordered', renderHomeArchitecture);
  document.querySelector('#cp-home .cp-master')?.addEventListener('click', (event) => {
    if (event.target.closest('[data-widget-toggle]')) requestAnimationFrame(renderHomeArchitecture);
  });
  const brandMark = document.getElementById('phone-brand-mark');
  const brandName = document.getElementById('phone-brand-name');
  if (brandMark || brandName) {
    const observer = new MutationObserver(renderHomeArchitecture);
    [brandMark, brandName].filter(Boolean).forEach((element) => observer.observe(element, {
      childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ['style', 'class'],
    }));
  }
  const liveWidgetSources = [
    '.home-layout-priority-stack .active-rewards-card',
    '.home-layout-priority-stack .punch-card-mini',
    '.home-layout-priority-stack .promo-cards-widget[data-widget="promo-cards"]',
    '.home-layout-priority-stack .oa-widget',
    '.home-layout-priority-stack .ti-widget',
    '.home-layout-priority-stack .mc-widget',
  ];
  let liveRenderQueued = false;
  const liveWidgetObserver = new MutationObserver(() => {
    if (liveRenderQueued) return;
    liveRenderQueued = true;
    requestAnimationFrame(() => {
      liveRenderQueued = false;
      renderHomeArchitecture();
    });
  });
  liveWidgetSources.forEach((selector) => {
    const source = document.querySelector(selector);
    if (source) liveWidgetObserver.observe(source, { childList: true, subtree: true, attributes: true, characterData: true });
  });
  document.addEventListener('como:ordering', renderHomeArchitecture);
  enforceExclusiveLayout();

  // Direct editing: clicking any widget tile/row/card in the Home phone
  // preview (across all 3 layouts) opens the same drill its Panel-1 row does.
  document.querySelectorAll('.app-page[data-page="home"] [data-drill]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      window.openDrill?.('cp-home', el.dataset.drill);
    });
  });

  // Punch Card stamp counts — the only Home field that isn't plain text, so
  // it needs its own small renderer instead of the generic data-bind-text wiring.
  function renderPunchCardStamps() {
    const total = Math.max(1, parseInt(document.getElementById('pcm-total-stamps')?.value, 10) || 10);
    const earned = Math.min(total, Math.max(0, parseInt(document.getElementById('pcm-earned-stamps')?.value, 10) || 0));
    const countText = earned + ' / ' + total + ' stamps';
    document.querySelectorAll('.pcm-count').forEach((el) => { el.textContent = countText; });
    document.querySelectorAll('.bento-tile-punch .bento-tile-sub').forEach((el) => { el.textContent = countText; });
    const dots = document.querySelector('.pcm-stamps');
    if (dots) {
      dots.innerHTML = Array.from({ length: total }, (_, i) => '<span class="pcm-stamp' + (i < earned ? ' filled' : '') + '"></span>').join('');
    }
  }
  document.getElementById('pcm-total-stamps')?.addEventListener('input', () => { renderPunchCardStamps(); ctx.markDirty?.(); });
  document.getElementById('pcm-earned-stamps')?.addEventListener('input', () => { renderPunchCardStamps(); ctx.markDirty?.(); });

  return {
    homeLayoutDefs: LAYOUT_DEFS,
    getRecommendedLayout,
    applyHomeLayout,
    getHomeLayout: () => state.layout,
    homeLayoutWireframe,
  };
}
