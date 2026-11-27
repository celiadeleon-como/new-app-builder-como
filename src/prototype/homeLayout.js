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
      return '<section class="ha-card ha-compact-rewards" data-drill="profile"><div class="ha-eyebrow">Rewards balance</div>'
        + '<div class="ha-balance-row"><strong>200 / 500 pts</strong><span>300 pts to next reward</span></div>'
        + '<div class="ha-progress"><span style="width:40%"></span></div></section>';
    }
    return '<section class="ha-card ha-reward-hero" data-drill="profile"><div class="ha-reward-copy"><div class="ha-eyebrow">Rewards balance</div>'
      + '<strong class="ha-points">200 points</strong><span class="ha-next-copy">50 points to your next reward</span></div>'
      + '<div class="ha-ring"><span>200<small>/250</small></span></div>'
      + '<button class="ha-scan" type="button" data-drill="loyalty-qr">' + qrIcon + '<span>Scan loyalty card</span></button></section>';
  }

  function dots() {
    return '<div class="ha-dots" aria-label="3 carousel pages"><i class="active"></i><i></i><i></i></div>';
  }

  function placeholders(count = 2, kind = 'wide') {
    return Array.from({ length: count }, (_, index) => '<div class="ha-placeholder ha-placeholder-' + kind + '"><span>' + (index + 1) + '</span></div>').join('');
  }

  function section(title, content, options = {}) {
    const classes = 'ha-section' + (options.card ? ' ha-section-card' : '');
    return '<section class="' + classes + '" ' + (options.drill ? 'data-drill="' + options.drill + '"' : '') + '>'
      + '<div class="ha-section-head"><h2>' + title + '</h2>' + (options.link ? '<button type="button">' + options.link + '</button>' : '') + '</div>'
      + content + '</section>';
  }

  function activeRewardsCard() {
    return '<article class="ha-card ha-mini-rewards" data-drill="active-rewards"><h2>Active Rewards</h2><div class="ha-mini-reward-grid">' + placeholders(2, 'reward') + '</div></article>';
  }

  function punchCard() {
    return '<section class="ha-card ha-punch" data-drill="punch-card"><div class="ha-section-head"><h2>Punch Card</h2><span>6 / 10 stamps</span></div>'
      + '<div class="ha-stamps">' + Array.from({ length: 10 }, (_, index) => '<i class="' + (index < 6 ? 'filled' : '') + '"></i>').join('') + '</div></section>';
  }

  function promoSection(mode = 'pair', enclosed = false) {
    const content = '<div class="ha-carousel ha-carousel-' + mode + '">' + placeholders(mode === 'banner' ? 1 : 2, mode === 'banner' ? 'banner' : 'promo') + '</div>' + dots();
    return section('Feature Promotions', content, { card: enclosed, drill: 'promo-cards' });
  }

  function orderAgainSection(enclosed = false) {
    return section('Order Again', '<div class="ha-carousel ha-carousel-pair">' + placeholders(2, 'order') + '</div>' + dots(), { card: enclosed, drill: 'order-again' });
  }

  function menuCategoriesSection(enclosed = false, grid = false) {
    const content = '<div class="' + (grid ? 'ha-category-grid' : 'ha-carousel ha-carousel-pair') + '">' + placeholders(grid ? 4 : 2, 'category') + '</div>' + (grid ? '' : dots());
    return section('Menu categories', content, { card: enclosed, link: 'View full menu', drill: 'menu-categories' });
  }

  function splitHero() {
    const brand = brandIdentity();
    return '<div class="ha-split-hero"><div class="ha-brand-row"><span class="ha-monogram ha-monogram-white' + brand.logoClass + '"' + (brand.logo ? ' style="background-image:' + brand.logo + '"' : '') + '>' + brand.initials + '</span>'
      + '<button class="ha-profile ha-profile-inverse" type="button" onclick="openAccountPage()" aria-label="Open profile">' + profileIcon + '</button></div>'
      + '<div class="ha-split-greeting"><strong>Hello, User!</strong><span class="ha-tier">Bronze</span></div>'
      + '<div class="ha-balance-row"><strong>200 / 500 pts</strong><span>300 pts to next reward</span></div><div class="ha-progress ha-progress-inverse"><span style="width:40%"></span></div></div>';
  }

  function bentoLoyalty() {
    return cleanHeader() + rewardHero()
      + (widgetEnabled('active-rewards') ? '<div class="ha-bento-pair">' + activeRewardsCard() : '')
      + (widgetEnabled('loyalty-qr') ? '<button class="ha-card ha-scan-tile" type="button" data-drill="loyalty-qr"><span class="ha-scan-icon">' + qrIcon + '</span><strong>Scan to earn</strong></button>' : '')
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
      + (widgetEnabled('active-rewards') ? section('Active Rewards', '<div class="ha-carousel ha-carousel-pair">' + placeholders(2, 'reward') + '</div>' + dots(), { card: true, drill: 'active-rewards' }) : '')
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
      (widgetEnabled('active-rewards') ? section('Active Rewards', '<div class="ha-carousel ha-carousel-pair">' + placeholders(2, 'reward') + '</div>', { drill: 'active-rewards' }) : '')
      + (widgetEnabled('punch-card') ? section('Punch Card', '<div class="ha-card ha-punch-body"><div class="ha-punch-count">6 / 10 stamps</div><div class="ha-stamps">' + Array.from({ length: 10 }, (_, index) => '<i class="' + (index < 6 ? 'filled' : '') + '"></i>').join('') + '</div></div>', { drill: 'punch-card' }) : '')
      + (widgetEnabled('loyalty-qr') ? '<button class="ha-scan ha-scan-sheet" type="button" data-drill="loyalty-qr">' + qrIcon + '<span>Scan loyalty card</span></button>' : '')
      + (widgetEnabled('promo-cards') ? promoSection('peek') : '')
    );
  }

  function splitOrdering() {
    return splitSheet(
      (widgetEnabled('order-again') ? section('Order Again', '<div class="ha-carousel ha-carousel-pair ha-order-large">' + placeholders(2, 'order') + '</div>', { drill: 'order-again' }) : '')
      + (widgetEnabled('promo-cards') ? promoSection('peek-wide') : '')
      + (widgetEnabled('active-rewards') ? section('Active Rewards', '<div class="ha-carousel ha-carousel-pair">' + placeholders(2, 'reward') + '</div>', { drill: 'active-rewards' }) : '')
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
    wrapper.appendChild(host);
    host.querySelectorAll('[data-drill]').forEach((element) => {
      element.addEventListener('click', (event) => {
        event.stopPropagation();
        window.openDrill?.('cp-home', element.dataset.drill);
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
