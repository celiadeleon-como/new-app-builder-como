/**
 * Navigation style — global chrome for the bottom tab bar, independent of
 * which Home layout or widgets are active.
 *   classic-docked          — full-width opaque bar, flush to the bottom edge.
 *   floating-liquid-glass   — translucent floating pill bar with a frosted
 *                             "My Member Pass" quick-scan shelf hovering above it.
 *
 * The shelf's content depends on two other pieces of state (whether online
 * ordering is on, and which Home layout is active), so this module listens
 * for the same events those features already dispatch and re-renders itself —
 * no direct coupling to setupWizard/coreNavigation internals required.
 */
export function initNavStyle(ctx) {
  const state = { style: 'classic-docked' };
  const shelf = document.getElementById('nav-pass-shelf');

  function onlineOrderingEnabled() {
    return !document.body.classList.contains('oo-mode-skip');
  }

  function storeLocationLabel() {
    return 'Downtown location';
  }

  function renderShelf() {
    if (!shelf) return;
    const floating = state.style === 'floating-liquid-glass';
    const onHome = document.querySelector('.app-page[data-page="home"]')?.classList.contains('active');
    shelf.hidden = !floating || !onHome;
    if (!floating) { shelf.innerHTML = ''; return; }
    const homeLayout = ctx.getHomeLayout?.();
    const merge = homeLayout === 'split-header-qsr' && onlineOrderingEnabled();
    shelf.innerHTML = merge
      ? (
        '<span class="nav-shelf-pickup"><span class="nav-shelf-pin">\uD83D\uDCCD</span> Pickup at ' + storeLocationLabel() + '</span>'
        + '<span class="nav-shelf-divider"></span>'
        + '<button type="button" class="nav-shelf-pass-btn" id="nav-shelf-pass-btn"><span class="nav-shelf-barcode" aria-hidden="true">\u2591\u2588\u2591\u2588\u2591</span> Pass</button>'
      )
      : (
        '<button type="button" class="nav-shelf-pass-full" id="nav-shelf-pass-btn">'
        + '<span class="nav-shelf-barcode" aria-hidden="true">\u2591\u2588\u2591\u2588\u2591\u2588\u2591</span>'
        + '<span class="nav-shelf-pass-text"><b>My Member Pass</b><small>Tap to scan</small></span>'
        + '</button>'
      );
    shelf.querySelector('#nav-shelf-pass-btn')?.addEventListener('click', () => window.openQrModal?.());
  }

  function applyNavStyle(style, { userPick = true } = {}) {
    state.style = style === 'floating-liquid-glass' ? style : 'classic-docked';
    document.body.dataset.navStyle = state.style;
    document.querySelectorAll('[data-nav-style-pick]').forEach((card) => {
      card.classList.toggle('selected', card.dataset.navStylePick === state.style);
    });
    const status = document.getElementById('brand-nav-style-status');
    if (status) status.textContent = state.style === 'floating-liquid-glass' ? 'Floating liquid glass' : 'Classic docked bar';
    if (userPick) {
      const dot = document.querySelector('[data-brand-dot="brand-nav-style"]');
      if (dot) dot.hidden = false;
    }
    renderShelf();
    ctx.markDirty?.();
  }

  document.addEventListener('como:focus-changed', renderShelf);
  document.addEventListener('como:ordering-mode', renderShelf);
  document.addEventListener('como:home-layout-changed', renderShelf);
  document.addEventListener('como:screen-changed', renderShelf);

  document.querySelectorAll('#cp-nav-style-grid [data-nav-style-pick]').forEach((btn) => {
    btn.addEventListener('click', () => applyNavStyle(btn.dataset.navStylePick));
  });

  applyNavStyle(state.style, { userPick: false });

  return { applyNavStyle, getNavStyle: () => state.style };
}
