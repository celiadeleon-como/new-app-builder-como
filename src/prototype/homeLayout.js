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
  document.addEventListener('como:ordering-mode', renderHomeStructureGrid);
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
