import { getProfileLoyaltyView, updateProfileLoyaltyState } from './profileLoyaltyState.js';
import { getHomeSections, moveHomeSection, syncHomeSectionsFromDom } from './homeSectionsState.js';

/**
 * Home layout — the structural template for the Home screen, independent of
 * which widgets are turned on/off. Two selectable layouts:
 *   modular-bento     — light header with modular cards and smart bento pairs.
 *   split-header-qsr  — brand-colour hero header + overlapping card sheet.
 *
 * Rendering itself lives entirely in CSS (src/styles/19-home-layouts.css),
 * keyed off `body[data-home-layout]`; this module only owns the recommendation
 * logic and keeps every layout-picker UI (onboarding + the post-setup Home
 * editor) showing the same selected/recommended state.
 */
export function initHomeLayout(ctx) {
  const state = { layout: 'modular-bento' };

  const LAYOUT_DEFS = [
    { key: 'modular-bento', name: 'Modular Bento Stack', desc: 'Clean light header with crisp modular cards and smart 2-column bento tiles.' },
    { key: 'split-header-qsr', name: 'Split-Header Hero', desc: 'Brand-coloured hero header with an overlapping rounded card sheet.' },
  ];

  function normalizeLayout(layout) {
    if (['modular-bento', 'priority-stack', 'bento-grid', 'classic', 'bento'].includes(layout)) return 'modular-bento';
    if (layout === 'split-header' || layout === 'split-header-hero') return 'split-header-qsr';
    return layout;
  }

  const profileIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="12" cy="8" r="3.5"/><path d="M5 21a7 7 0 0114 0"/></svg>';
  const qrIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3M20 14v.01M14 20v.01M20 20v.01M17 20h.01M20 17h.01"/></svg>';

  function widgetEnabled(key) {
    const toggle = document.querySelector(`[data-widget-toggle="${key}"]`);
    return !toggle || toggle.classList.contains('on');
  }

  function profileState() {
    const view = getProfileLoyaltyView(widgetEnabled('profile'));
    return {
      enabled: view.enabled,
      guest: view.guest,
      greeting: escapeHome(view.greeting),
      guestTitle: escapeHome(view.guestTitle),
      progress: view.progressStyle,
      showPoints: view.showPointsBalance,
      showProgress: view.showProgress,
      showScanButton: view.showScanButton,
      tier: view.tier,
    };
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
      + '<button class="ha-profile" type="button" onclick="openAccountPage()" aria-label="Open profile">' + profileIcon + '</button></div></header>';
  }

  function rewardHero(compact = false) {
    const profile = profileState();
    if (!profile.enabled) return '';
    if (profile.guest) {
      return '<section class="ha-card ha-compact-rewards" data-ha-widget="profile" data-drill="profile">'
        + '<span class="ha-next-copy">Log in to see your points &amp; rewards</span><button class="ha-guest-cta" type="button">Log In</button></section>';
    }
    const points = profile.showPoints ? (compact || profile.progress === 'bar' ? '<strong>200 / 500 pts</strong>' : '<strong class="ha-points">200 points</strong>') : '';
    const next = profile.showProgress
      ? '<span>' + (compact ? '300 pts to next reward' : '50 points to your next reward') + '</span>'
      : '';
    const bar = profile.showProgress && profile.progress === 'bar'
      ? '<div class="ha-progress"><span style="width:40%"></span></div>' : '';
    const ring = profile.showProgress && profile.progress === 'ring'
      ? '<div class="ha-ring"><span>200<small>/250</small></span></div>' : '';
    if (compact) {
      return '<section class="ha-card ha-compact-rewards" data-ha-widget="profile" data-drill="profile"><div class="ha-eyebrow">Rewards balance</div>'
        + '<div class="ha-balance-row">' + points + next + '</div>' + bar + ring + '</section>';
    }
    return '<section class="ha-card ha-reward-hero" data-ha-widget="profile" data-drill="profile"><div class="ha-reward-copy"><div class="ha-eyebrow">Rewards balance</div>'
      + points + next.replace('<span>', '<span class="ha-next-copy">') + '</div>' + ring
      + (bar ? '<div class="ha-reward-bar">' + bar + '</div>' : '')
      + (profile.showScanButton ? '<button class="ha-scan" type="button" data-drill="profile">' + qrIcon + '<span>Scan loyalty card</span></button>' : '')
      + '</section>';
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

  function punchSection() {
    const source = document.querySelector('.home-layout-priority-stack .punch-card-mini');
    const count = source?.querySelector('.pcm-count')?.outerHTML || '<span class="pcm-count">6 / 10 stamps</span>';
    const stamps = source?.querySelector('.pcm-stamps')?.outerHTML || '<div class="pcm-stamps"></div>';
    return '<section class="ha-section ha-punch-section" data-ha-widget="punch-card" data-drill="punch-card">'
      + '<div class="ha-section-head"><h2>Punch Card</h2>' + count + '</div>'
      + '<div class="ha-card ha-punch ha-live-widget">' + stamps + '</div></section>';
  }

  function promoSection(mode = 'pair', enclosed = false) {
    const source = document.querySelector('.home-layout-priority-stack .promo-cards-widget[data-widget="promo-cards"]');
    const content = source
      ? source.outerHTML
        .replace(/\s+id="[^"]*"/g, '')
        .replace(/class="promo-cards-widget([^"]*)"/, 'class="ha-live-promotions promo-cards-widget ha-promo-' + mode + '$1"')
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
    const profile = profileState();
    const points = profile.enabled && !profile.guest && profile.showPoints
      ? '<div class="ha-balance-row"><strong>200 / ' + (profile.progress === 'ring' ? '250' : '500') + ' pts</strong></div>' : '';
    const progress = profile.enabled && !profile.guest && profile.showProgress && profile.progress === 'bar'
      ? '<div class="ha-split-progress"><span>300 pts to next reward</span><div class="ha-progress ha-progress-inverse"><span style="width:40%"></span></div></div>' : '';
    const ring = profile.enabled && !profile.guest && profile.showProgress && profile.progress === 'ring'
      ? '<div class="ha-split-ring"><span>200<small>/250</small></span></div>' : '';
    return '<div class="ha-split-hero ' + (!profile.enabled ? 'ha-profile-hidden' : '') + '" data-ha-widget="profile" data-drill="profile"><div class="ha-brand-row"><span class="ha-monogram ha-monogram-white' + brand.logoClass + '"' + (brand.logo ? ' style="background-image:' + brand.logo + '"' : '') + '>' + brand.initials + '</span>'
      + '<button class="ha-profile ha-profile-inverse" type="button" onclick="openAccountPage()" aria-label="Open profile">' + profileIcon + '</button></div>'
      + '<div class="ha-split-content"><div class="ha-split-copy"><div class="ha-split-greeting"><strong>' + (profile.guest ? profile.guestTitle : profile.greeting) + '</strong>'
      + (profile.enabled && !profile.guest ? '<span class="ha-tier">' + profile.tier + '</span>' : '') + '</div>'
      + points + progress + (profile.showScanButton && !profile.guest ? '<button class="ha-scan ha-split-scan" type="button" data-drill="profile">' + qrIcon + '<span>Scan loyalty card</span></button>' : '') + '</div>' + ring + '</div></div>';
  }

  function bentoRewards() {
    const source = document.querySelector('.home-layout-priority-stack .active-rewards-card');
    const rewards = [...(source?.querySelectorAll('.ar-row') || [])].slice(0, 2).map((reward) => reward.outerHTML).join('');
    return '<section class="ha-bento-rewards" data-ha-widget="active-rewards" data-drill="active-rewards">'
      + '<div class="ha-section-head"><h2>Active Rewards</h2><span>2 available</span></div>'
      + '<div class="ha-bento-reward-grid">' + rewards + '</div></section>';
  }

  function renderSection(sectionId, { layout = state.layout, focus = currentAppFocus(), compact = false } = {}) {
    const split = layout === 'split-header-qsr';
    const modular = layout === 'modular-bento';
    const enclosed = modular;
    switch (sectionId) {
      case 'profile_loyalty':
        return split ? splitHero() : rewardHero(focus === 'ordering' || compact);
      case 'active_rewards':
        return section('Active Rewards', '<div class="ha-live-rewards">' + activeRewardsCard() + '</div>' + dots(), { card: false, drill: 'active-rewards' });
      case 'punch_card':
        return punchSection();
      case 'order_again':
        return orderAgainSection(false);
      case 'promotions':
        return promoSection(split ? (focus === 'ordering' ? 'peek-wide' : 'peek') : (focus === 'ordering' ? 'banner' : 'pair'), false);
      case 'menu_categories':
        return menuCategoriesSection(false, split);
      default:
        return '';
    }
  }

  function renderModularSections(sections) {
    const html = [];
    for (let index = 0; index < sections.length; index += 1) {
      const sectionItem = sections[index];
      const content = renderSection(sectionItem.id);
      html.push(content);
    }
    return html.join('');
  }

  function homeArchitectureMarkup() {
    const sections = getHomeSections().filter((section) => section.enabled);
    if (state.layout === 'split-header-qsr') {
      const profile = sections.find((section) => section.id === 'profile_loyalty');
      const remaining = sections.filter((section) => section.id !== 'profile_loyalty');
      return (profile ? renderSection('profile_loyalty') : '')
        + '<div class="ha-sheet">' + remaining.map((section) => renderSection(section.id)).join('') + '</div>';
    }
    const profile = profileState();
    return cleanHeader() + '<div class="ha-canvas-greeting" data-drill="profile">' + (profile.guest ? profile.guestTitle : profile.greeting) + '</div>'
      + renderModularSections(sections);
  }

  function renderHomeArchitecture() {
    const wrapper = document.querySelector('.home-layout-' + (state.layout === 'modular-bento' ? 'bento-grid' : 'split-header-qsr'));
    if (!wrapper) return;
    document.querySelectorAll('.ha-home-architecture').forEach((host) => host.remove());
    const host = document.createElement('div');
    host.className = 'ha-home-architecture ha-' + state.layout + (state.layout === 'modular-bento' ? ' ha-bento-grid' : '') + ' ha-focus-' + currentAppFocus();
    host.innerHTML = homeArchitectureMarkup();
    wrapper.appendChild(host);
    host.querySelectorAll('[data-drill]').forEach((element) => {
      element.addEventListener('click', (event) => {
        if (event.target.closest('.ha-profile')) return;
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
    return 'modular-bento';
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
    document.body.dataset.homeLayout = state.layout;
    document.querySelectorAll('.home-layout').forEach((el) => {
      const activeClass = state.layout === 'modular-bento' ? 'home-layout-bento-grid' : 'home-layout-split-header-qsr';
      const isActive = el.classList.contains(activeClass);
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
    const normalized = normalizeLayout(layout);
    state.layout = LAYOUT_DEFS.some((d) => d.key === normalized) ? normalized : fallbackLayout();
    syncProfileSectionRow();
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

  function syncProfileSectionRow() {
    const container = document.querySelector('#cp-home .cp-master');
    const row = container?.querySelector('[data-widget-toggle="profile"]')?.closest('.cp-widget-row');
    if (!container || !row) return;
    const list = document.querySelector('#cp-home-widgets .cp-body') || row.parentElement;
    if (row.parentElement !== list) list.prepend(row);
    const pinned = true;
    row.classList.toggle('cp-fixed-slot', pinned);
    row.classList.toggle('home-profile-pinned', pinned);
    row.querySelector('.handle')?.classList.toggle('handle-locked', pinned);
    row.draggable = !pinned;
    const rows = [...container.querySelectorAll('.cp-widget-row')];
    const badge = row.querySelector('.home-profile-position-badge');
    if (badge) badge.textContent = 'Always at top';
    row.querySelector('.home-profile-pin-note')?.remove();
    row.querySelector('.home-profile-tip')?.remove();
    if (pinned) {
      list.prepend(row);
      syncHomeSectionsFromDom();
      row.insertAdjacentHTML('beforeend', '<span class="home-profile-pin-note">🔒 Always at top</span>');
      return;
    }
    if (rows.indexOf(row) > 0) {
      row.insertAdjacentHTML('beforeend', '<span class="home-profile-tip">Tip: Keeping Profile &amp; loyalty at the top gives returning members immediate access to their points <button type="button" data-profile-move-top>Move to top</button></span>');
      row.querySelector('[data-profile-move-top]')?.addEventListener('click', (event) => {
        event.stopPropagation();
        moveHomeSection('profile_loyalty', 0);
        syncHomeSectionsFromDom();
        ctx.reorderPhoneWidgets?.();
        ctx.markDirty?.();
        syncProfileSectionRow();
      });
    }
  }

  function homeLayoutWireframe(key) {
    if (key === 'modular-bento') {
      return '<svg viewBox="0 0 100 68" fill="none"><rect x="4" y="4" width="92" height="22" rx="4" fill="currentColor" opacity=".35"/><rect x="4" y="30" width="43" height="34" rx="4" fill="currentColor" opacity=".55"/><rect x="51" y="30" width="45" height="16" rx="4" fill="currentColor" opacity=".25"/><rect x="51" y="48" width="45" height="16" rx="4" fill="currentColor" opacity=".25"/></svg>';
    }
    if (key === 'split-header-qsr') {
      return '<svg viewBox="0 0 100 68" fill="none"><rect x="4" y="4" width="92" height="28" rx="6" fill="currentColor" opacity=".5"/><rect x="4" y="26" width="92" height="38" rx="10" fill="currentColor" opacity=".3"/></svg>';
    }
    return '';
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
        + (def.key === recommended ? '<span class="cp-home-layout-badge">RECOMMENDED</span>' : '')
        + '<span class="cp-home-layout-title">' + def.name + '</span>'
        + '<span class="cp-home-layout-desc">' + def.desc + '</span>'
        + '</button>';
    }).join('');
    grid.querySelectorAll('[data-home-layout-pick]').forEach((btn) => {
      btn.addEventListener('click', () => applyHomeLayout(btn.dataset.homeLayoutPick));
    });
  }

  renderHomeStructureGrid();
  document.addEventListener('como:focus-changed', (event) => {
    const ordering = event.detail?.goal === 'ordering';
    const progressStyle = ordering ? 'bar' : 'ring';
    const showScanButton = !ordering;
    updateProfileLoyaltyState({ progressStyle, showScanButton });
    document.querySelector(`[data-bind-radio="loyalty-layout"][data-value="${progressStyle}"]`)?.click();
    const scanToggle = [...document.querySelectorAll('[data-detail="profile"] .cp-toggle-row')]
      .find((row) => row.querySelector('.lbl')?.textContent.trim() === 'Scan loyalty card button')
      ?.querySelector('.toggle');
    if (scanToggle?.classList.contains('on') !== showScanButton) scanToggle?.click();
    applyHomeLayout(ordering ? 'split-header-qsr' : 'modular-bento');
    renderHomeStructureGrid();
    scrollHomeToTop();
  });
  document.addEventListener('como:ordering-mode', () => { renderHomeStructureGrid(); renderHomeArchitecture(); });
  document.addEventListener('como:brand-colors', renderHomeArchitecture);
  document.addEventListener('como:home-sections-reordered', renderHomeArchitecture);
  document.addEventListener('como:home-sections-reordered', syncProfileSectionRow);
  document.addEventListener('como:home-sections', renderHomeArchitecture);
  document.addEventListener('como:profile-preview', renderHomeArchitecture);
  document.addEventListener('como:profile-loyalty', renderHomeArchitecture);
  const profileEditor = document.querySelector('[data-detail="profile"]');
  ['input', 'click', 'change'].forEach((eventName) => {
    profileEditor?.addEventListener(eventName, () => requestAnimationFrame(renderHomeArchitecture));
  });
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
  syncProfileSectionRow();
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
