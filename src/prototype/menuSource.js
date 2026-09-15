/**
 * Menu source flow — the whole Menu tab of the config panel plus the phone
 * preview that mirrors it.
 *
 * Screens live in `templates/config-menu.html` as `.ms-screen[data-ms]` blocks;
 * this module owns which one is showing, the manual menu data model, and the
 * single `renderPhone()` pass that redraws the phone for the current state.
 */

const ICON = {
  chev: '<svg class="ms-row-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M9 6l6 6-6 6"/></svg>',
  grip: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M8 6h.01M8 12h.01M8 18h.01M16 6h.01M16 12h.01M16 18h.01"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"/><path d="M9 7V5h6v2"/><path d="M6 7l1 13h10l1-13"/></svg>',
  tick: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
  pencil: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z"/></svg>',
  lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="5" y="10.5" width="14" height="9.5" rx="2"/><path d="M8.5 10.5V7a3.5 3.5 0 017 0v3.5"/></svg>',
  reload: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 01-9 9 9 9 0 01-7.6-4.2"/><path d="M3 12a9 9 0 019-9 9 9 0 017.6 4.2"/><path d="M20 3v5h-5M4 21v-5h5"/></svg>',
  back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M15 6l-6 6 6 6"/></svg>',
  cutlery: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 3l7 7"/><path d="M20 3L9.5 13.5"/><path d="M13.5 12.5L20 19"/><path d="M7.5 14.5L4 18"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8-5.3-2.8-5.3 2.8 1-5.8L3.5 9.7l5.9-.9z"/></svg>',
  list: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 8h12M6 12h12M6 16h8"/></svg>',
  wallet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18"/><path d="M15 14.5h3"/></svg>',
  coin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5.2"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="3.5"/><path d="M5 21a7 7 0 0114 0"/></svg>',
  gift: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="13" rx="1.5"/><path d="M12 8v13M3 12h18"/><path d="M12 8H8.5a2.5 2.5 0 010-5C11 3 12 8 12 8zM12 8h3.5a2.5 2.5 0 000-5C13 3 12 8 12 8z"/></svg>',
  card: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="5.5" width="19" height="13" rx="2"/><path d="M2.5 10h19"/></svg>',
  receipt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="M9 8h6M9 12h6"/></svg>',
  photo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>',
  copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 012-2h10"/></svg>',
  share: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="2.6"/><circle cx="6" cy="12" r="2.6"/><circle cx="18" cy="19" r="2.6"/><path d="M8.3 10.6l7.4-4.2M8.3 13.4l7.4 4.2"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.5s-7.5-4.6-10-9.3C.6 8 2 4.5 5.5 4c2-.3 3.9.7 6.5 3 2.6-2.3 4.5-3.3 6.5-3C22 4.5 23.4 8 22 11.2c-2.5 4.7-10 9.3-10 9.3z"/></svg>',
  fish: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12c3-4 8-6 13-4 2 1 4 2.5 5 4-1 1.5-3 3-5 4-5 2-10 0-13-4z"/><circle cx="16" cy="10.5" r=".8" fill="currentColor" stroke="none"/><path d="M3 12l-2-3M3 12l-2 3"/></svg>',
  leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 4c0 9-6.5 15.5-16 16-.5-9.5 6-16 16-16z"/><path d="M5 19c3-5 7-9 12-12"/></svg>',
  smile: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8.5 14.5c1 1.2 2.2 1.8 3.5 1.8s2.5-.6 3.5-1.8"/><path d="M9 9.5h.01M15 9.5h.01"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0119 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.4"/></svg>',
  bag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8h12l1 12H5z"/><path d="M9 8V6a3 3 0 016 0v2"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M4 6.5l8 6 8-6"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17 7h.01"/></svg>',
  tiktok: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M14 3c.4 2.1 1.8 3.6 4 3.9v2.6a6.6 6.6 0 01-4-1.3v6.3a5.3 5.3 0 11-5.3-5.3c.3 0 .6 0 .9.1v2.7a2.7 2.7 0 100 5.3 2.7 2.7 0 002.7-2.7V3z"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M14 22v-8h2.7l.4-3H14V9c0-.9.2-1.5 1.5-1.5H17V5c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H8.5v3H11v8h3z"/></svg>',
};

const SWATCH = ['#8a6a4a', '#b4585e', '#7a6bb0', '#5f8a6a', '#c08a3e', '#4a6f8a'];

// Every page a merchant can pick from "Configure another page" — matches the
// tile list on the More screen so the two stay in sync.
const PAGE_DEFS = [
  { key: 'account', label: 'My Account' },
  { key: 'activity', label: 'My Activity' },
  { key: 'orders', label: 'My Orders' },
  { key: 'menu', label: 'Our Menu' },
  { key: 'referral', label: 'Refer a Friend' },
  { key: 'story', label: 'About Us' },
  { key: 'contact', label: 'Contact Us' },
];

const HEROES = [
  { name: 'hero-dining.jpg', background: 'linear-gradient(135deg,#8a6a4a,#5c4433 58%,#25160f)' },
  { name: 'chef-counter.jpg', background: 'linear-gradient(135deg,#334155,#111827 56%,#0f766e)' },
  { name: 'seasonal-table.jpg', background: 'linear-gradient(135deg,#8f3d55,#4c1d34 55%,#d97706)' },
  { name: 'garden-terrace.jpg', background: 'linear-gradient(135deg,#3f6b57,#153d32 58%,#d4a648)' },
];

const DIET_TAGS = ['Gluten', 'Sesame', 'Veg', 'Vegan', 'Nut', 'Dairy'];

function uid(prefix) {
  return prefix + '-' + Math.random().toString(36).slice(2, 8);
}

function seedCategories() {
  return [
    {
      id: uid('cat'), name: 'Starters', color: SWATCH[0], hero: true,
      items: [
        { id: uid('it'), name: 'Truffle Arancini', desc: 'Crispy · shaved parmesan', price: '$14', cal: '340 kcal', layout: 'card', color: SWATCH[0], tags: ['Gluten', 'Dairy'], available: true, badge: 'Popular' },
        { id: uid('it'), name: 'Burrata & Heirloom', desc: 'Basil oil · sea salt', price: '$16', cal: '290 kcal', layout: 'card', color: SWATCH[1], tags: ['Veg'], available: true },
        { id: uid('it'), name: 'Tuna Tartare', desc: 'Yuzu · avocado · nori', price: '$18', cal: '260 kcal', layout: 'card', color: SWATCH[5], tags: ['Sesame'], available: true },
      ],
    },
    {
      id: uid('cat'), name: 'Mains', color: SWATCH[1], hero: false,
      items: [
        { id: uid('it'), name: 'Wagyu Gold Stack', desc: 'Aged cheddar · brioche', price: '$28', cal: '820 kcal', layout: 'card', color: SWATCH[2], tags: ['Gluten', 'Dairy'], available: true },
        { id: uid('it'), name: 'Sea Bass', desc: 'Fennel · citrus · olive oil', price: '$36', cal: '540 kcal', layout: 'card', color: SWATCH[5], tags: [], available: true },
        { id: uid('it'), name: 'Falafel Green Bowl', desc: 'Freekeh · herbs · tahini', price: '$14.20', cal: '480 kcal', layout: 'card', color: SWATCH[3], tags: ['Vegan', 'Sesame'], available: true, badge: 'Veg' },
      ],
    },
    {
      id: uid('cat'), name: 'Desserts', color: SWATCH[2], hero: true,
      items: [
        { id: uid('it'), name: 'Dark Chocolate Tart', desc: 'Sea salt · crème fraîche', price: '$14', cal: '520 kcal', layout: 'card', color: SWATCH[4], tags: ['Dairy', 'Nut'], available: true },
        { id: uid('it'), name: 'Vanilla Bean Crème', desc: 'Bourbon vanilla · caramel', price: '$11', cal: '410 kcal', layout: 'card', color: SWATCH[0], tags: ['Dairy'], available: true },
      ],
    },
  ];
}

export function initMenuSource(ctx) {
  const { showToast, markDirty, openL3Panel, closeL3Panel, goToPage } = ctx;

  const page = document.getElementById('cp-menu');
  if (!page) return {};
  const phonePage = document.querySelector('.app-page[data-page="menu"]');
  const phoneRender = document.getElementById('pm-render');
  const screens = [...page.querySelectorAll('.ms-screen')];
  // Reassigned once the "Configure another page" picker is wired further down;
  // declared here so the earlier entry-point handler can call the final version.
  let selectConfigPage = () => {};

  const state = {
    approach: null,
    integration: null,
    screen: 'chooser',
    fromOrdering: false,
    webview: { url: 'https://velvetbistro.com/menu', connected: false, back: true, bottombar: true, inapp: true, hideheader: false, membersonly: false },
    pdf: { uploaded: false },
    custom: { url: 'https://order.velvetbistro.com', connected: false, back: true, bottombar: true, inapp: true, membersonly: true, theme: true, hideheader: true, color: '#6d28d9' },
    ordering: { layout: 'grid', color: '#6d28d9', allergens: true, banner: true, hero: 0 },
    manual: { started: false, categories: seedCategories(), activeCat: null, activeItem: null, hero: null },
    pageSettings: {
      selected: 'menu',
      origin: 'pdf',
      hero: Object.fromEntries(PAGE_DEFS.map((p) => [p.key, {
        image: null,
        headline: p.key === 'menu' ? 'Discover tonight’s menu' : p.key === 'referral' ? 'Share & Get $5!' : p.key === 'story' ? 'Made with Aloha' : p.key === 'contact' ? 'We\u2019d Love to Hear from You' : '',
        description: p.key === 'menu'
          ? 'Browse categories, dietary tags, and prices'
          : p.key === 'referral'
            ? 'Invite your friends to try the app. They\u2019ll get $5 off their first order, and you\u2019ll earn 500 loyalty points ($5 value)!'
            : p.key === 'story'
              ? 'How three friends brought the vibrant, fresh spirit of Hawaiian coastlines straight to your neighborhood table.'
              : p.key === 'contact'
                ? 'Have a question about our traceable fish, want to book a large ohana event, or just want to say aloha? Drop us a line below!'
                : '',
        buttonText: p.key === 'contact' ? 'Send Aloha Message' : '',
      }])),
      accountOptions: { settings: true, giftcards: true, payments: false, orders: false },
      referralTerms: {
        text: 'Referral points are credited automatically once your friend completes an order of $15 or more. Cannot be combined with other sign-up offers.',
        linkText: 'Read Full Terms & Conditions',
      },
      story: {
        sparkHeading: 'The Spark',
        sparkP1: 'In the summer of 2018, we set out with a simple craving: high-quality, authentic poké that fit into our busy, active schedules. We wanted real, uncompromised ingredients handled with the utmost care.',
        sparkP2: 'By partnering directly with sustainable fishermen and local organic farms, we created a menu that honors tradition while fueling your daily potential. No shortcuts. Just clean, raw joy in every scoop.',
        valuesHeading: 'Our Core Values',
        values: [
          { title: '100% Traceable Fish', desc: 'Sustainably and ethically sourced daily.' },
          { title: 'Zero Artificial Junk', desc: 'All sauces and marinades are house-made.' },
          { title: 'Radical Hospitality', desc: 'Welcome as you are, eat what makes you shine.' },
        ],
        quoteText: 'We wanted to build more than a healthy restaurant. We wanted to build a sanctuary where people walk out feeling lighter and happier than when they walked in.',
        quoteName: 'Katty Chen',
        quoteRole: 'Co-Founder & Head of Culinary',
        cta1: 'Our Locations',
        cta2: 'Order Now',
      },
      contact: {
        direct: [
          { title: 'Culinary & General Inquiry', value: 'aloha@coastlinepoke.com' },
          { title: 'Phone Support', value: '+1 (212) 555-POKE (7653)' },
          { title: 'Our Flagship Location', value: '91 Orchard St, New York, NY 10002' },
        ],
      },
    },
  };

  /* ------------------------------------------------------------- screens */

  function show(screen) {
    state.screen = screen;
    screens.forEach(s => s.classList.toggle('active', s.dataset.ms === screen));
    const deferredOrdering = document.body.classList.contains('oo-mode-skip');
    const configurePageLink = document.getElementById('ms-configure-page');
    if (configurePageLink) configurePageLink.hidden = !(deferredOrdering && screen === 'pdf');
    page.querySelector('[data-menu-chooser-title]')?.replaceChildren(
      document.createTextNode(deferredOrdering ? 'Add a menu to your app' : 'Choose menu approach'),
    );
    page.querySelector('[data-menu-chooser-sub]')?.replaceChildren(
      document.createTextNode(deferredOrdering
        ? 'Upload a PDF menu or choose a public web page to show in the Menu tab.'
        : 'Pick how your in-app menu is powered. You can change this anytime.'),
    );
    page.querySelectorAll('[data-approach="ordering"], [data-approach="manual"]').forEach((option) => {
      option.hidden = deferredOrdering;
    });
    document.getElementById('config-panel').scrollTop = 0;
    if (screen !== 'build-items') closeL3Panel();
    renderPhone();
  }

  function resetApproach() {
    state.approach = null;
    state.integration = null;
    state.manual.activeCat = null;
    state.manual.activeItem = null;
    page.querySelectorAll('[data-approach]').forEach(o => o.classList.remove('on'));
    show('chooser');
    markDirty();
  }

  page.querySelectorAll('[data-approach]').forEach(opt => {
    opt.addEventListener('click', () => {
      const approach = opt.dataset.approach;
      page.querySelectorAll('[data-approach]').forEach(o => o.classList.toggle('on', o === opt));
      state.approach = approach;
      state.fromOrdering = false;
      markDirty();
      if (approach === 'webview') { show('webview'); updateWebviewReturn(); }
      else if (approach === 'pdf') show('pdf');
      else if (approach === 'ordering') show(orderingApi().connected ? 'oo-connected' : 'oo-integration');
      else if (approach === 'manual') show(state.manual.started ? 'build-categories' : 'build-method');
    });
  });

  page.querySelectorAll('[data-ms-change]').forEach(b => b.addEventListener('click', resetApproach));
  page.querySelectorAll('[data-ms-back]').forEach(b => b.addEventListener('click', () => show(b.dataset.msBack)));
  document.getElementById('ms-configure-page')?.addEventListener('click', () => {
    state.pageSettings.origin = 'pdf';
    show('page-settings');
    selectConfigPage(state.pageSettings.selected);
  });
  page.querySelectorAll('[data-ms-help]').forEach(b => {
    b.addEventListener('click', () => showToast('The Help Center would open in a new tab'));
  });

  /* ------------------------------------------------------------- webview */

  const webUrl = document.getElementById('ms-webview-url');
  const webStatus = document.getElementById('ms-webview-status');
  const webviewDisplayOptions = document.getElementById('ms-webview-display-options');
  const webviewKicker = document.getElementById('ms-webview-kicker');
  const webviewBackHeader = document.getElementById('ms-webview-back-header');
  const webviewReturnBtn = document.getElementById('ms-webview-return-btn');
  const webviewScreen = page.querySelector('[data-ms="webview"]');
  let webviewPanelPlaceholder = null;

  function restoreWebviewPanel() {
    if (!webviewPanelPlaceholder || !webviewScreen) return;
    webviewPanelPlaceholder.replaceWith(webviewScreen);
    webviewPanelPlaceholder = null;
  }
  // Reached from the Online ordering step: swap the menu-source kicker for a
  // simple back header, matching the Rewards edit drill-in navigation style.
  function updateWebviewReturn() {
    if (webviewBackHeader) webviewBackHeader.hidden = !state.fromOrdering;
    if (webviewKicker) webviewKicker.hidden = state.fromOrdering;
  }
  webviewReturnBtn?.addEventListener('click', () => {
    restoreWebviewPanel();
    closeL3Panel();
    window.goToStep?.('online-ordering');
  });
  // Tell the Online ordering step whether the web-view menu is wired up.
  function announceWebview() {
    document.dispatchEvent(new CustomEvent('como:menu-source', { detail: { approach: 'webview', connected: state.webview.connected, url: state.webview.url } }));
  }
  webUrl.addEventListener('input', () => {
    state.webview.url = webUrl.value;
    state.webview.connected = false;
    webStatus.classList.add('hidden');
    webviewDisplayOptions.hidden = true;
    // Typing clears the "please enter URL" validation state.
    webUrl.setAttribute('aria-invalid', 'false');
    webUrl.classList.remove('cp-input-error');
    const urlErr = document.getElementById('ms-webview-url-error');
    if (urlErr) urlErr.textContent = '';
    // Typing invalidates the previous connection; buttons return to idle.
    if (typeof setConnectState === 'function') setConnectState('idle');
    if (typeof setReturnState === 'function') setReturnState('idle');
    updateWebviewReturn();
    announceWebview();
    renderPhone();
  });
  const connectBtn = document.getElementById('ms-webview-connect');
  const connectLabel = document.createElement('span');
  connectLabel.className = 'ms-btn-label';
  connectLabel.textContent = 'Connect & load';
  // Replace the plain "Connect & load" text with a label span we can retarget.
  connectBtn.textContent = '';
  connectBtn.insertAdjacentHTML('afterbegin', '<svg class="ms-btn-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg><span class="ms-btn-spinner" aria-hidden="true"></span>');
  connectBtn.appendChild(connectLabel);

  function setConnectState(state) {
    connectBtn.classList.remove('is-loading', 'is-success');
    connectBtn.disabled = false;
    if (state === 'loading') {
      connectBtn.classList.add('is-loading');
      connectBtn.disabled = true;
      connectLabel.textContent = 'Connecting…';
    } else if (state === 'success') {
      connectBtn.classList.add('is-success');
      connectLabel.textContent = 'Reconnect & load';
    } else {
      connectLabel.textContent = 'Connect & load';
    }
  }

  function setReturnState(state) {
    const btn = document.getElementById('gf-oo-return-btn');
    if (!btn) return;
    btn.classList.remove('is-loading', 'is-success');
    btn.disabled = false;
    if (state === 'loading') {
      btn.classList.add('is-loading');
      btn.disabled = true;
    } else if (state === 'success') {
      btn.classList.add('is-success');
    }
  }

  // Change only the phone preview's active page + bottom nav highlight — the
  // sidebar and config panel are owned by the guided-flow step and stay put.
  function showPhonePage(target) {
    document.querySelectorAll('#app-shell .app-page').forEach((p) => {
      p.classList.toggle('active', p.dataset.page === target);
    });
    document.querySelectorAll('#bottom-nav .nav-item').forEach((n) => {
      n.classList.toggle('active', n.dataset.nav === target);
    });
    const shell = document.getElementById('app-shell');
    if (shell) shell.scrollTop = 0;
  }

  connectBtn.addEventListener('click', () => {
    const url = webUrl.value.trim();
    if (!url) {
      webUrl.setAttribute('aria-invalid', 'true');
      webUrl.classList.add('cp-input-error');
      const urlErr = document.getElementById('ms-webview-url-error');
      if (urlErr) urlErr.textContent = 'Enter your ordering URL to continue.';
      webUrl.focus();
      return;
    }
    setConnectState('loading');
    setReturnState('loading');
    setTimeout(() => {
      state.webview.url = url;
      state.webview.connected = true;
      webStatus.classList.remove('hidden');
      webviewDisplayOptions.hidden = false;
      markDirty();
      renderPhone();
      updateWebviewReturn();
      announceWebview();
      setConnectState('success');
      setReturnState('success');
      // Show the merchant the payoff: the phone jumps to the Order tab (which is
      // the webview) so they see their site rendered inside the app.
      if (state.fromOrdering) showPhonePage('menu');
      showToast('Loaded ' + hostOf(state.webview.url) + ' in the preview');
    }, 1000);
  });

  // Entry point used by Step 3's web-view choice. Its configuration is a third
  // level of detail, so the step stays visible while the setup opens alongside it.
  function openWebviewSetup({ fromOrdering = false } = {}) {
    state.approach = 'webview';
    state.fromOrdering = fromOrdering;
    page.querySelectorAll('[data-approach]').forEach(o => o.classList.toggle('on', o.dataset.approach === 'webview'));
    webviewDisplayOptions.hidden = !state.webview.connected;
    if (fromOrdering) {
      document.body.classList.remove('oo-webview-from-step2');
      show('webview');
      if (webviewScreen.parentElement !== document.getElementById('l3-body')) {
        webviewPanelPlaceholder = document.createComment('webview setup panel');
        webviewScreen.before(webviewPanelPlaceholder);
        openL3Panel(webviewScreen);
      }
    } else {
      document.body.classList.remove('oo-webview-from-step2');
      window.goToStep?.('menu');
      show('webview');
    }
    updateWebviewReturn();
    markDirty();
  }

  function openDeferredMenuSetup() {
    state.approach = null;
    state.fromOrdering = false;
    page.querySelectorAll('[data-approach]').forEach(o => o.classList.remove('on'));
    // Product Experience normally places a simple Menu editor ahead of this
    // source flow. A deferred ordering choice has no menu to show, so it
    // defaults to My Activity — the fixed order-history overview — instead.
    page.classList.add('px-show-advanced');
    window.setMenuSlotMode?.('select-screen');
    state.pageSettings.origin = 'chooser';
    show('page-settings');
    selectConfigPage('activity');
  }

  // Navigation may close the third panel without using its return button.
  // Restore the moved screen so the Menu workflow remains available afterwards.
  document.addEventListener('como:navchange', () => {
    if (!document.body.classList.contains('l3-open')) restoreWebviewPanel();
  });

  // The bottom-nav "Back to Online ordering" button — replaces Back/Continue while
  // the merchant is here from Step 2. Validates the URL before allowing return.
  const ooReturnBtn = document.getElementById('gf-oo-return-btn');
  ooReturnBtn?.addEventListener('click', () => {
    const urlValue = (webUrl?.value || '').trim();
    const urlError = document.getElementById('ms-webview-url-error');
    if (!urlValue) {
      webUrl?.setAttribute('aria-invalid', 'true');
      webUrl?.classList.add('cp-input-error');
      if (urlError) urlError.textContent = 'Enter your ordering URL before returning to Online ordering.';
      webUrl?.focus();
      return;
    }
    webUrl?.setAttribute('aria-invalid', 'false');
    webUrl?.classList.remove('cp-input-error');
    if (urlError) urlError.textContent = '';
    document.body.classList.remove('oo-webview-from-step2');
    // Phone returns to the Home preview since Online ordering is a Home-level choice.
    showPhonePage('home');
    window.goToStep?.('online-ordering');
  });
  page.querySelectorAll('[data-web-opt]').forEach(t => {
    t.addEventListener('click', () => {
      state.webview[t.dataset.webOpt] = t.classList.contains('on');
      renderPhone();
    });
  });

  /* ----------------------------------------------------------------- pdf */

  const pdfFile = document.getElementById('ms-pdf-file');
  const pdfReplace = document.getElementById('ms-pdf-replace');
  const pdfDrop = document.getElementById('ms-pdf-drop');
  function setPdf(on) {
    state.pdf.uploaded = on;
    pdfFile.hidden = !on;
    pdfReplace.hidden = !on;
    pdfDrop.style.display = on ? 'none' : '';
    renderPhone();
  }
  pdfDrop.addEventListener('click', () => { setPdf(true); markDirty(); showToast('velvet-bistro-dinner.pdf rendered in the preview'); });
  document.getElementById('ms-pdf-remove').addEventListener('click', () => { setPdf(false); markDirty(); });
  pdfReplace.addEventListener('click', () => { setPdf(false); });

  /* --------------------------------------------- configure another page */

  const pagePicker = document.getElementById('ms-page-picker');
  const pagePickerTrigger = document.getElementById('ms-page-picker-trigger');
  const pagePickerLabel = document.getElementById('ms-page-picker-label');
  const pagePickerList = document.getElementById('ms-page-picker-list');
  const pageConfigTitle = document.getElementById('ms-page-config-title');
  const pageMenuPdf = document.getElementById('ms-page-menu-pdf');
  const pageActivityDesc = document.getElementById('ms-page-activity-desc');
  const pageReferralDesc = document.getElementById('ms-page-referral-desc');
  const pageStoryDesc = document.getElementById('ms-page-story-desc');
  const pageAccountBlock = document.getElementById('ms-page-account-block');
  const pageHeroLabel = document.getElementById('ms-page-hero-label');
  const pageHeroCard = document.getElementById('ms-page-hero-card');
  const pageReferralTerms = document.getElementById('ms-page-referral-terms');
  const referralTermsText = document.getElementById('ms-referral-terms-text');
  const referralTermsLinkText = document.getElementById('ms-referral-terms-link-text');
  const pageStoryBlock = document.getElementById('ms-page-story-block');
  const storySparkHeading = document.getElementById('ms-story-spark-heading');
  const storySparkP1 = document.getElementById('ms-story-spark-p1');
  const storySparkP2 = document.getElementById('ms-story-spark-p2');
  const storyValuesHeading = document.getElementById('ms-story-values-heading');
  const storyValueInputs = [0, 1, 2].map((i) => ({
    title: document.getElementById(`ms-story-value-${i}-title`),
    desc: document.getElementById(`ms-story-value-${i}-desc`),
  }));
  const storyQuoteText = document.getElementById('ms-story-quote-text');
  const storyQuoteName = document.getElementById('ms-story-quote-name');
  const storyQuoteRole = document.getElementById('ms-story-quote-role');
  const storyCta1 = document.getElementById('ms-story-cta-1');
  const storyCta2 = document.getElementById('ms-story-cta-2');
  const pageContactDesc = document.getElementById('ms-page-contact-desc');
  const pageContactBlock = document.getElementById('ms-page-contact-block');
  const contactDirectInputs = [0, 1, 2].map((i) => ({
    title: document.getElementById(`ms-contact-direct-${i}-title`),
    value: document.getElementById(`ms-contact-direct-${i}-value`),
  }));
  const heroImageZone = document.getElementById('ms-hero-image-zone');
  const heroImageFile = document.getElementById('ms-hero-image-file');
  const heroImagePreview = document.getElementById('ms-hero-image-preview');
  const heroImageEmpty = document.getElementById('ms-hero-image-empty');
  const heroImageRemove = document.getElementById('ms-hero-image-remove');
  const heroHeadline = document.getElementById('ms-hero-headline');
  const heroDesc = document.getElementById('ms-hero-desc');
  const heroBtnText = document.getElementById('ms-hero-btn-text');
  const pagePdfDrop = document.getElementById('ms-page-pdf-drop');
  const pagePdfStatus = document.getElementById('ms-page-pdf-status');
  const pagePdfReplace = document.getElementById('ms-page-pdf-replace');

  if (pagePicker) {
    pagePickerList.innerHTML = PAGE_DEFS.map((p) => (
      '<button type="button" class="ms-page-picker-item" role="option" data-page-key="' + p.key + '">'
      + '<span>' + p.label + '</span>'
      + '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>'
      + '</button>'
    )).join('');

    function togglePagePicker(open) {
      const next = open ?? pagePickerList.hidden;
      pagePickerList.hidden = !next;
      pagePickerTrigger.setAttribute('aria-expanded', String(next));
    }
    pagePickerTrigger.addEventListener('click', () => togglePagePicker());
    document.addEventListener('click', (e) => {
      if (!pagePicker.contains(e.target)) togglePagePicker(false);
    });
    pagePickerList.querySelectorAll('[data-page-key]').forEach((btn) => {
      btn.addEventListener('click', () => {
        selectConfigPage(btn.dataset.pageKey);
        togglePagePicker(false);
      });
    });

    function renderHeroFields() {
      const hero = state.pageSettings.hero[state.pageSettings.selected];
      heroHeadline.value = hero.headline;
      heroDesc.value = hero.description;
      heroBtnText.value = hero.buttonText;
      heroImageZone.classList.toggle('has-image', !!hero.image);
      heroImagePreview.style.display = hero.image ? 'block' : 'none';
      heroImageEmpty.style.display = hero.image ? 'none' : 'flex';
      heroImageRemove.style.display = hero.image ? 'block' : 'none';
      if (hero.image) heroImagePreview.src = hero.image;
    }

    function renderPagePdfStatus() {
      pagePdfDrop.style.display = state.pdf.uploaded ? 'none' : '';
      pagePdfStatus.hidden = !state.pdf.uploaded;
    }

    function renderStoryFields() {
      const story = state.pageSettings.story;
      if (storySparkHeading) storySparkHeading.value = story.sparkHeading;
      if (storySparkP1) storySparkP1.value = story.sparkP1;
      if (storySparkP2) storySparkP2.value = story.sparkP2;
      if (storyValuesHeading) storyValuesHeading.value = story.valuesHeading;
      storyValueInputs.forEach((inputs, i) => {
        if (inputs.title) inputs.title.value = story.values[i].title;
        if (inputs.desc) inputs.desc.value = story.values[i].desc;
      });
      if (storyQuoteText) storyQuoteText.value = story.quoteText;
      if (storyQuoteName) storyQuoteName.value = story.quoteName;
      if (storyQuoteRole) storyQuoteRole.value = story.quoteRole;
      if (storyCta1) storyCta1.value = story.cta1;
      if (storyCta2) storyCta2.value = story.cta2;
    }

    const storyField = (input, key) => input?.addEventListener('input', () => {
      state.pageSettings.story[key] = input.value;
      markDirty();
      renderPhone?.();
    });
    storyField(storySparkHeading, 'sparkHeading');
    storyField(storySparkP1, 'sparkP1');
    storyField(storySparkP2, 'sparkP2');
    storyField(storyValuesHeading, 'valuesHeading');
    storyField(storyQuoteText, 'quoteText');
    storyField(storyQuoteName, 'quoteName');
    storyField(storyQuoteRole, 'quoteRole');
    storyField(storyCta1, 'cta1');
    storyField(storyCta2, 'cta2');
    storyValueInputs.forEach((inputs, i) => {
      inputs.title?.addEventListener('input', () => {
        state.pageSettings.story.values[i].title = inputs.title.value;
        markDirty();
        renderPhone?.();
      });
      inputs.desc?.addEventListener('input', () => {
        state.pageSettings.story.values[i].desc = inputs.desc.value;
        markDirty();
        renderPhone?.();
      });
    });

    function renderContactFields() {
      const contact = state.pageSettings.contact;
      contactDirectInputs.forEach((inputs, i) => {
        if (inputs.title) inputs.title.value = contact.direct[i].title;
        if (inputs.value) inputs.value.value = contact.direct[i].value;
      });
    }

    contactDirectInputs.forEach((inputs, i) => {
      inputs.title?.addEventListener('input', () => {
        state.pageSettings.contact.direct[i].title = inputs.title.value;
        markDirty();
        renderPhone?.();
      });
      inputs.value?.addEventListener('input', () => {
        state.pageSettings.contact.direct[i].value = inputs.value.value;
        markDirty();
        renderPhone?.();
      });
    });

    selectConfigPage = function (key) {
      const def = PAGE_DEFS.find((p) => p.key === key) || PAGE_DEFS[0];
      state.pageSettings.selected = def.key;
      pagePickerLabel.textContent = def.label;
      pagePickerList.querySelectorAll('[data-page-key]').forEach((btn) => {
        btn.classList.toggle('active', btn.dataset.pageKey === def.key);
      });
      pageConfigTitle.textContent = def.key === 'menu' ? 'Menu' : def.label;
      pageMenuPdf.hidden = def.key !== 'menu';
      // "My Activity" and "My Account" are fixed overview screens — no hero banner to edit.
      // "Refer a Friend", "About Us" and "Contact Us" keep the hero banner (headline/description/image)
      // plus their own extra fields below.
      const isActivity = def.key === 'activity';
      const isAccount = def.key === 'account';
      const isReferral = def.key === 'referral';
      const isStory = def.key === 'story';
      const isContact = def.key === 'contact';
      if (pageActivityDesc) pageActivityDesc.hidden = !isActivity;
      if (pageReferralDesc) pageReferralDesc.hidden = !isReferral;
      if (pageStoryDesc) pageStoryDesc.hidden = !isStory;
      if (pageContactDesc) pageContactDesc.hidden = !isContact;
      if (pageReferralTerms) pageReferralTerms.hidden = !isReferral;
      if (pageStoryBlock) pageStoryBlock.hidden = !isStory;
      if (pageContactBlock) pageContactBlock.hidden = !isContact;
      if (pageAccountBlock) pageAccountBlock.hidden = !isAccount;
      if (pageHeroLabel) pageHeroLabel.hidden = isActivity || isAccount;
      if (pageHeroCard) pageHeroCard.hidden = isActivity || isAccount;
      renderHeroFields();
      renderStoryFields();
      renderContactFields();
      if (referralTermsText) referralTermsText.value = state.pageSettings.referralTerms.text;
      if (referralTermsLinkText) referralTermsLinkText.value = state.pageSettings.referralTerms.linkText;
      if (def.key === 'menu') renderPagePdfStatus();
      renderPhone?.();
    };

    // These reuse the generic .toggle wiring from bindings.js (which already
    // flips the "on" class); this listener just mirrors the resulting state.
    page.querySelectorAll('[data-account-opt]').forEach((toggle) => {
      toggle.addEventListener('click', () => {
        state.pageSettings.accountOptions[toggle.dataset.accountOpt] = toggle.classList.contains('on');
        renderPhone?.();
      });
    });

    const heroField = (input, key) => input.addEventListener('input', () => {
      state.pageSettings.hero[state.pageSettings.selected][key] = input.value;
      markDirty();
      renderPhone?.();
    });
    heroField(heroHeadline, 'headline');
    heroField(heroDesc, 'description');
    heroField(heroBtnText, 'buttonText');

    referralTermsText?.addEventListener('input', () => {
      state.pageSettings.referralTerms.text = referralTermsText.value;
      markDirty();
      renderPhone?.();
    });
    referralTermsLinkText?.addEventListener('input', () => {
      state.pageSettings.referralTerms.linkText = referralTermsLinkText.value;
      markDirty();
      renderPhone?.();
    });

    function handleHeroImage(file) {
      if (!file) return;
      if (!/^image\/(png|jpeg|jpg|webp)/i.test(file.type)) { showToast('Upload a PNG, JPG, or WEBP file.'); return; }
      if (file.size > 5 * 1024 * 1024) { showToast('This file exceeds the 5MB limit.'); return; }
      const reader = new FileReader();
      reader.onload = (e) => {
        state.pageSettings.hero[state.pageSettings.selected].image = e.target.result;
        renderHeroFields();
        markDirty();
        renderPhone?.();
      };
      reader.readAsDataURL(file);
    }
    heroImageZone.addEventListener('click', () => heroImageFile.click());
    heroImageFile.addEventListener('change', () => handleHeroImage(heroImageFile.files?.[0]));
    heroImageRemove.addEventListener('click', (e) => {
      e.stopPropagation();
      state.pageSettings.hero[state.pageSettings.selected].image = null;
      renderHeroFields();
      markDirty();
      renderPhone?.();
    });

    pagePdfDrop.addEventListener('click', () => {
      setPdf(true);
      renderPagePdfStatus();
      markDirty();
      showToast('velvet-bistro-dinner.pdf rendered in the preview');
    });
    pagePdfReplace.addEventListener('click', () => { setPdf(false); renderPagePdfStatus(); markDirty(); });
  }

  /* ----------------------------------------------- online ordering (both) */

  function orderingApi() {
    return ctx.ordering || { connected: false, provider: { name: 'Deliverect', mark: 'D', color: '#0fa47f' } };
  }

  page.querySelectorAll('[data-integration]').forEach(opt => {
    opt.addEventListener('click', () => {
      page.querySelectorAll('[data-integration]').forEach(o => o.classList.toggle('on', o === opt));
      state.integration = opt.dataset.integration;
      if (state.integration === 'native') {
        if (orderingApi().connected) show('oo-connected');
        else if (ctx.gotoOrderingStep) { ctx.gotoOrderingStep('chooser'); window.openSettings('online-ordering'); }
      } else {
        show('oo-custom');
      }
      markDirty();
    });
  });

  document.getElementById('ms-oo-manage').addEventListener('click', () => {
    if (ctx.gotoOrderingStep) { ctx.gotoOrderingStep('admin'); window.openSettings('online-ordering'); }
  });

  page.querySelectorAll('[data-ordering-opt]').forEach(t => {
    t.addEventListener('click', () => {
      state.ordering[t.dataset.orderingOpt] = t.classList.contains('on');
      renderPhone();
    });
  });
  page.querySelectorAll('[data-layouts="ordering"] .ms-layout').forEach(btn => {
    btn.addEventListener('click', () => {
      page.querySelectorAll('[data-layouts="ordering"] .ms-layout').forEach(b => b.classList.toggle('on', b === btn));
      state.ordering.layout = btn.dataset.layout;
      markDirty();
      renderPhone();
    });
  });
  wireSwatches('ordering', (hex) => { state.ordering.color = hex; renderPhone(); });
  wireSwatches('custom', (hex) => { state.custom.color = hex; renderPhone(); });

  const orderingHeroThumb = document.getElementById('ms-ordering-hero-thumb');
  const orderingHeroName = document.getElementById('ms-ordering-hero-name');
  function renderOrderingHeroControl() {
    const hero = HEROES[state.ordering.hero];
    orderingHeroThumb.style.backgroundImage = hero.background;
    orderingHeroName.textContent = hero.name;
  }
  document.getElementById('ms-ordering-hero-replace').addEventListener('click', () => {
    state.ordering.hero = (state.ordering.hero + 1) % HEROES.length;
    renderOrderingHeroControl();
    markDirty();
    renderPhone();
    showToast('Header image replaced in the live ordering preview');
  });

  function wireSwatches(group, apply) {
    page.querySelectorAll('[data-swatches="' + group + '"] .ms-swatch').forEach(sw => {
      sw.addEventListener('click', () => {
        page.querySelectorAll('[data-swatches="' + group + '"] .ms-swatch').forEach(s => s.classList.toggle('on', s === sw));
        apply(sw.dataset.color);
        markDirty();
      });
    });
  }

  /* --------------------------------------------------- custom provider web */

  const customUrl = document.getElementById('ms-custom-url');
  customUrl.addEventListener('input', () => {
    state.custom.url = customUrl.value;
    state.custom.connected = false;
    renderPhone();
  });
  document.getElementById('ms-custom-connect').addEventListener('click', () => {
    state.custom.url = customUrl.value.trim() || 'https://order.velvetbistro.com';
    state.custom.connected = true;
    markDirty();
    renderPhone();
    showToast('Loaded ' + hostOf(state.custom.url) + ' in the preview');
  });
  page.querySelectorAll('[data-custom-opt]').forEach(t => {
    t.addEventListener('click', () => {
      state.custom[t.dataset.customOpt] = t.classList.contains('on');
      renderPhone();
    });
  });

  /* ------------------------------------------------------- manual builder */

  document.getElementById('ms-build-scratch').addEventListener('click', () => {
    state.manual.started = true;
    markDirty();
    renderCategories();
    show('build-categories');
  });
  document.getElementById('ms-build-import').addEventListener('click', () => {
    state.manual.started = true;
    markDirty();
    renderCategories();
    show('build-categories');
    showToast('Imported velvet-menu.csv · 3 categories, 8 items mapped');
  });
  document.getElementById('ms-build-ai').addEventListener('click', () => {
    showToast('We’ll email you when AI menu drafting ships');
  });

  const catList = document.getElementById('ms-category-list');
  const itemList = document.getElementById('ms-item-list');

  function catById(id) { return state.manual.categories.find(c => c.id === id); }
  function activeCat() { return catById(state.manual.activeCat); }
  function activeItem() {
    const cat = activeCat();
    return cat ? cat.items.find(i => i.id === state.manual.activeItem) : null;
  }

  function renderCategories() {
    catList.innerHTML = state.manual.categories.map(cat => `
      <div class="ms-row" data-cat="${cat.id}">
        <span class="ms-handle" data-drag>${ICON.grip}</span>
        <span class="ms-row-thumb" style="background:${cat.color}"></span>
        <span class="ms-row-text">
          <span class="ms-row-name">${escapeHtml(cat.name)}</span>
          <span class="ms-row-meta">${cat.items.length} item${cat.items.length === 1 ? '' : 's'} · ${cat.hero ? 'hero image set' : 'add hero image'}</span>
        </span>
        <button class="ms-row-del" type="button" data-del-cat title="Delete category">${ICON.trash}</button>
        ${ICON.chev}
      </div>`).join('');

    catList.querySelectorAll('.ms-row').forEach(row => {
      row.addEventListener('click', (e) => {
        if (e.target.closest('[data-drag]')) return;
        if (e.target.closest('[data-del-cat]')) {
          const id = row.dataset.cat;
          state.manual.categories = state.manual.categories.filter(c => c.id !== id);
          renderCategories();
          markDirty();
          renderPhone();
          showToast('Category removed');
          return;
        }
        openCategory(row.dataset.cat);
      });
    });
    makeSortable(catList, () => {
      state.manual.categories = [...catList.querySelectorAll('.ms-row')].map(r => catById(r.dataset.cat));
      markDirty();
      renderPhone();
    });
  }

  document.getElementById('ms-add-category').addEventListener('click', addCategory);
  document.getElementById('ms-new-category').addEventListener('click', addCategory);
  function addCategory() {
    const n = state.manual.categories.length;
    state.manual.categories.push({
      id: uid('cat'),
      name: 'New category',
      color: SWATCH[n % SWATCH.length],
      hero: false,
      items: [],
    });
    markDirty();
    renderCategories();
    renderPhone();
    const last = catList.lastElementChild;
    if (last) startRename(last, state.manual.categories[state.manual.categories.length - 1], renderCategories);
  }

  const manualHero = document.getElementById('ms-menu-hero');
  const manualHeroButton = document.getElementById('ms-hero-set');
  function renderManualHeroControl() {
    if (state.manual.hero === null) {
      manualHero.classList.add('empty');
      manualHero.style.backgroundImage = '';
      manualHero.innerHTML = `<div class="ms-hero-empty">${ICON.plus}<span>Add a wide menu header</span></div>`;
      manualHeroButton.textContent = 'Set';
      return;
    }
    const hero = HEROES[state.manual.hero];
    manualHero.classList.remove('empty');
    manualHero.style.backgroundImage = hero.background;
    manualHero.innerHTML = `<span class="ms-hero-file">${escapeHtml(hero.name)}</span>`;
    manualHeroButton.textContent = 'Replace';
  }
  manualHeroButton.addEventListener('click', () => {
    state.manual.hero = state.manual.hero === null ? 2 : (state.manual.hero + 1) % HEROES.length;
    renderManualHeroControl();
    markDirty();
    renderPhone();
    showToast('Menu hero image updated in the phone preview');
  });

  function openCategory(id) {
    state.manual.activeCat = id;
    state.manual.activeItem = null;
    const cat = activeCat();
    if (!cat) return;
    document.getElementById('ms-items-title').textContent = cat.name;
    document.getElementById('ms-items-meta').textContent =
      cat.items.length + ' item' + (cat.items.length === 1 ? '' : 's') + ' · ' + (cat.hero ? 'category hero image set' : 'no category hero image');
    renderItems();
    show('build-items');
  }

  document.getElementById('ms-items-back').addEventListener('click', () => {
    state.manual.activeCat = null;
    state.manual.activeItem = null;
    closeL3Panel();
    renderCategories();
    show('build-categories');
  });

  document.getElementById('ms-rename-category').addEventListener('click', () => {
    const cat = activeCat();
    if (!cat) return;
    const title = document.getElementById('ms-items-title');
    if (title.querySelector('input')) return;
    const original = cat.name;
    title.innerHTML = `<input class="ms-title-input" type="text" value="${escapeHtml(original)}" aria-label="Category name">`;
    const input = title.querySelector('input');
    const commit = () => {
      const next = input.value.trim();
      cat.name = next || original;
      title.textContent = cat.name;
      renderCategories();
      markDirty();
      renderPhone();
    };
    input.addEventListener('blur', commit, { once: true });
    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') input.blur();
      if (event.key === 'Escape') { input.value = original; input.blur(); }
    });
    input.focus();
    input.select();
  });

  function renderItems() {
    const cat = activeCat();
    if (!cat) return;
    itemList.innerHTML = cat.items.map(item => `
      <div class="ms-row${item.id === state.manual.activeItem ? ' on' : ''}${item.available ? '' : ' is-off'}" data-item="${item.id}">
        <span class="ms-handle" data-drag>${ICON.grip}</span>
        <span class="ms-row-thumb" style="background:${item.color}"></span>
        <span class="ms-row-text">
          <span class="ms-row-name">${escapeHtml(item.name)}</span>
          <span class="ms-row-meta">${escapeHtml(item.price)}${item.badge ? ' · <span class="ms-tag-mini' + (item.badge === 'Veg' ? ' veg' : '') + '">' + item.badge + '</span>' : ''}${item.available ? '' : ' · <span class="ms-tag-mini off">Unavailable</span>'}</span>
        </span>
        <button class="ms-row-del" type="button" data-del-item title="Delete item">${ICON.trash}</button>
        ${ICON.chev}
      </div>`).join('') || '<div class="ms-tip">No items yet — add your first dish.</div>';

    itemList.querySelectorAll('.ms-row').forEach(row => {
      row.addEventListener('click', (e) => {
        if (e.target.closest('[data-drag]')) return;
        if (e.target.closest('[data-del-item]')) {
          cat.items = cat.items.filter(i => i.id !== row.dataset.item);
          if (state.manual.activeItem === row.dataset.item) { state.manual.activeItem = null; closeL3Panel(); }
          markDirty();
          openCategory(cat.id);
          renderPhone();
          return;
        }
        openItem(row.dataset.item);
      });
    });
    makeSortable(itemList, () => {
      const order = [...itemList.querySelectorAll('.ms-row')].map(r => r.dataset.item);
      cat.items.sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
      markDirty();
      renderPhone();
    });
  }

  document.getElementById('ms-add-item').addEventListener('click', () => {
    const cat = activeCat();
    if (!cat) return;
    const item = {
      id: uid('it'), name: 'New item', desc: '', price: '$0.00', cal: '',
      layout: 'card', color: SWATCH[cat.items.length % SWATCH.length], tags: [], available: true,
    };
    cat.items.push(item);
    markDirty();
    openCategory(cat.id);
    openItem(item.id);
    renderPhone();
  });

  /* --------------------------------------------------------- item editor */

  const editor = document.getElementById('ms-item-editor');
  const fName = document.getElementById('ms-item-name');
  const fDesc = document.getElementById('ms-item-desc');
  const fPrice = document.getElementById('ms-item-price');
  const fCal = document.getElementById('ms-item-cal');
  const fAvail = document.getElementById('ms-item-available');
  const tagWrap = document.getElementById('ms-item-tags');

  function openItem(id) {
    state.manual.activeItem = id;
    const cat = activeCat();
    const item = activeItem();
    if (!item) return;

    document.getElementById('ms-item-back-label').textContent = cat.name;
    document.getElementById('ms-item-heading').textContent = item.name;
    fName.value = item.name;
    fDesc.value = item.desc;
    fPrice.value = item.price;
    fCal.value = item.cal;
    fAvail.classList.toggle('on', item.available);
    document.getElementById('ms-item-photo').style.background = item.color;
    document.getElementById('ms-item-photo-name').textContent =
      item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') + '.jpg';
    editor.querySelectorAll('[data-item-layout]').forEach(b => b.classList.toggle('on', b.dataset.itemLayout === item.layout));

    tagWrap.innerHTML = DIET_TAGS.map(t => `
      <button class="ms-tag${item.tags.includes(t) ? ' on' : ''}" type="button" data-tag="${t}">${ICON.tick}${t}</button>`).join('')
      + `<button class="ms-tag add" type="button" data-tag-add>${ICON.plus}Add</button>`;
    tagWrap.querySelectorAll('[data-tag]').forEach(btn => {
      btn.addEventListener('click', () => {
        const t = btn.dataset.tag;
        const on = !item.tags.includes(t);
        item.tags = on ? [...item.tags, t] : item.tags.filter(x => x !== t);
        btn.classList.toggle('on', on);
        markDirty();
        renderPhone();
      });
    });
    tagWrap.querySelector('[data-tag-add]').addEventListener('click', () => showToast('Custom dietary tags come from your catalog settings'));

    itemList.querySelectorAll('.ms-row').forEach(r => r.classList.toggle('on', r.dataset.item === id));
    openL3Panel(editor);
    renderPhone();
  }

  function bindField(el, key, transform) {
    el.addEventListener('input', () => {
      const item = activeItem();
      if (!item) return;
      item[key] = transform ? transform(el.value) : el.value;
      if (key === 'name') document.getElementById('ms-item-heading').textContent = item.name;
      renderItems();
      itemList.querySelectorAll('.ms-row').forEach(r => r.classList.toggle('on', r.dataset.item === item.id));
      markDirty();
      renderPhone();
    });
  }
  bindField(fName, 'name');
  bindField(fDesc, 'desc');
  bindField(fPrice, 'price');
  bindField(fCal, 'cal');

  fAvail.addEventListener('click', () => {
    const item = activeItem();
    if (!item) return;
    item.available = fAvail.classList.contains('on');
    renderItems();
    itemList.querySelectorAll('.ms-row').forEach(r => r.classList.toggle('on', r.dataset.item === item.id));
    renderPhone();
  });

  editor.querySelectorAll('[data-item-layout]').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = activeItem();
      if (!item) return;
      editor.querySelectorAll('[data-item-layout]').forEach(b => b.classList.toggle('on', b === btn));
      item.layout = btn.dataset.itemLayout;
      markDirty();
      renderPhone();
    });
  });

  document.getElementById('ms-item-photo-replace').addEventListener('click', () => {
    const item = activeItem();
    if (!item) return;
    item.color = SWATCH[(SWATCH.indexOf(item.color) + 1) % SWATCH.length];
    document.getElementById('ms-item-photo').style.background = item.color;
    renderItems();
    itemList.querySelectorAll('.ms-row').forEach(r => r.classList.toggle('on', r.dataset.item === item.id));
    markDirty();
    renderPhone();
  });

  document.getElementById('ms-item-back').addEventListener('click', () => {
    state.manual.activeItem = null;
    closeL3Panel();
    renderItems();
    renderPhone();
  });

  document.getElementById('ms-item-delete').addEventListener('click', () => {
    const cat = activeCat();
    const item = activeItem();
    if (!cat || !item) return;
    cat.items = cat.items.filter(i => i.id !== item.id);
    state.manual.activeItem = null;
    closeL3Panel();
    markDirty();
    openCategory(cat.id);
    renderPhone();
    showToast('Item deleted');
  });

  /* -------------------------------------------------------- inline rename */

  function startRename(row, model, after) {
    const nameEl = row.querySelector('.ms-row-name');
    if (!nameEl) return;
    nameEl.innerHTML = '<input type="text" value="' + escapeHtml(model.name) + '">';
    const input = nameEl.querySelector('input');
    input.focus();
    input.select();
    const commit = () => {
      model.name = input.value.trim() || model.name;
      after();
      markDirty();
      renderPhone();
    };
    input.addEventListener('blur', commit);
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') { e.preventDefault(); input.blur(); }
      if (e.key === 'Escape') { input.value = model.name; input.blur(); }
    });
  }

  /* ------------------------------------------------------- drag to reorder */

  function makeSortable(container, onDrop) {
    let dragging = null; let rows = []; let startY = 0; let from = 0; let to = 0; let h = 0; let pointerId = null;

    const move = (e) => {
      if (!dragging) return;
      const dy = e.clientY - startY;
      dragging.style.transform = 'translateY(' + dy + 'px) scale(1.02)';
      const shift = Math.round(dy / h);
      const next = Math.max(0, Math.min(rows.length - 1, from + shift));
      if (next === to) return;
      to = next;
      rows.forEach((r, i) => {
        if (r === dragging) return;
        let d = 0;
        if (from < to && i > from && i <= to) d = -h;
        else if (from > to && i < from && i >= to) d = h;
        r.style.transform = 'translateY(' + d + 'px)';
      });
    };
    const up = (event) => {
      if (!dragging || (event && event.pointerId !== pointerId)) return;
      const row = dragging; const f = from; const t = to;
      const activePointer = pointerId;
      dragging = null;
      pointerId = null;
      const before = row.getBoundingClientRect();
      if (container.hasPointerCapture?.(activePointer)) container.releasePointerCapture(activePointer);
      if (f !== t && rows[t]) {
        const ref = rows[t];
        if (f < t) ref.parentNode.insertBefore(row, ref.nextSibling);
        else ref.parentNode.insertBefore(row, ref);
        onDrop();
      }
      rows.forEach(r => { r.style.transform = ''; r.style.transition = ''; });
      const after = row.getBoundingClientRect();
      row.animate(
        [{ transform: `translateY(${before.top - after.top}px) scale(1.02)` }, { transform: 'translateY(0) scale(1)' }],
        { duration: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 100 : 260, easing: 'cubic-bezier(.2,.8,.2,1)' },
      ).finished.catch(() => {}).finally(() => row.classList.remove('dragging'));
      rows = [];
    };

    container.addEventListener('pointerdown', (e) => {
      const handle = e.target.closest('[data-drag]');
      if (!handle) return;
      const row = handle.closest('.ms-row');
      if (!row) return;
      e.preventDefault();
      rows = [...container.querySelectorAll('.ms-row')];
      from = rows.indexOf(row); to = from;
      dragging = row; startY = e.clientY; h = row.offsetHeight + 8; pointerId = e.pointerId;
      container.setPointerCapture(e.pointerId);
      row.classList.add('dragging');
      rows.forEach(r => { if (r !== row) r.style.transition = 'transform .2s cubic-bezier(.2,.8,.2,1)'; });
    });
    container.addEventListener('pointermove', move);
    container.addEventListener('pointerup', up);
    container.addEventListener('pointercancel', up);
    container.addEventListener('lostpointercapture', up);
  }

  /* ------------------------------------------------------------ the phone */

  function hostOf(url) {
    return String(url).replace(/^https?:\/\//, '').replace(/\/$/, '');
  }
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }
  function setBottomNav(visible) {
    const nav = document.getElementById('bottom-nav');
    if (nav) nav.style.visibility = visible ? '' : 'hidden';
  }

  function appHeader(title, sub, opts = {}) {
    return `<div class="pm-head">
      <div class="pm-head-left">
        ${opts.back ? '<button class="icon-btn" style="width:32px;height:32px" onclick="goToPage(\'home\')">' + ICON.back + '</button>' : ''}
        <div>
          <div class="pm-head-title">${escapeHtml(title)}</div>
          <div class="pm-head-sub">${escapeHtml(sub)}</div>
        </div>
      </div>
      ${opts.search ? '<button class="icon-btn" title="Search">🔍</button>' : ''}
    </div>`;
  }

  function browserChrome(url, showBack) {
    return `<div class="pm-chrome">
      ${showBack ? '<span class="pm-chrome-btn">' + ICON.back + '</span>' : ''}
      <span class="pm-url">${ICON.lock}${escapeHtml(hostOf(url))}</span>
      <span class="pm-chrome-btn">${ICON.reload}</span>
    </div>`;
  }

  function renderNone() {
    return appHeader('MENU', 'Not set up yet') + `
      <div class="pm-empty">
        <div class="pm-empty-ic">${ICON.cutlery}</div>
        <div class="pm-empty-title">No menu yet</div>
        <div class="pm-empty-sub">Choose how to power your menu to preview it here.</div>
      </div>`;
  }

  function renderWebview() {
    const w = state.webview;
    if (!w.connected) {
      return appHeader('MENU', 'Webview · not loaded') + `
        <div class="pm-empty">
          <div class="pm-empty-ic">${ICON.cutlery}</div>
          <div class="pm-empty-title">Nothing loaded yet</div>
          <div class="pm-empty-sub">Paste your menu web address and press Connect &amp; load.</div>
        </div>`;
    }
    if (w.membersonly) {
      return `<div class="pm-browser">${browserChrome(w.url, w.back)}
        <div class="pm-gate">
          <div class="pm-gate-ic">${ICON.lock}</div>
          <div class="pm-gate-title">Members only</div>
          <div class="pm-gate-sub">Sign in to view the menu and unlock member pricing.</div>
          <button class="pm-gate-btn">Sign in</button>
        </div></div>`;
    }
    const dishes = [
      ['Charred Octopus', 'Smoked paprika, salsa verde', '$24'],
      ['Wagyu Gold Stack', 'Aged cheddar, truffle aioli', '$32'],
      ['Wood-Fired Branzino', 'Fennel, citrus, olive oil', '$29'],
      ['Dark Chocolate Tart', 'Sea salt, crème fraîche', '$14'],
    ];
    return `<div class="pm-browser">${browserChrome(w.url, w.back)}
      <div class="pm-site">
        ${w.hideheader ? '' : `<div class="pm-site-hero"><div class="n">VELVET BISTRO</div><div class="s">Seasonal · Wood-fired · Est. 2012</div></div>`}
        <div class="pm-site-body">
          <div class="pm-site-h">Our Menu</div>
          ${dishes.map(([n, d, p]) => `<div class="pm-site-item"><span><span class="n">${n}</span><span class="d">${d}</span></span><span class="p">${p}</span></div>`).join('')}
        </div>
      </div></div>`;
  }

  function renderPdf() {
    if (!state.pdf.uploaded) {
      return appHeader('MENU', 'PDF menu · no file') + `
        <div class="pm-empty">
          <div class="pm-empty-ic">${ICON.cutlery}</div>
          <div class="pm-empty-title">No PDF uploaded</div>
          <div class="pm-empty-sub">Drop a PDF on the left and it renders here.</div>
        </div>`;
    }
    const rows = [
      ['STARTERS', [['Truffle Arancini', '14'], ['Burrata & Heirloom', '16'], ['Tuna Tartare', '18']]],
      ['MAINS', [['Wagyu Gold Stack', '42'], ['Angus Smash', '24'], ['Seared Sea Bass', '36']]],
      ['DESSERTS', [['Dark Chocolate Torte', '12'], ['Vanilla Bean Crème', '11']]],
    ];
    return appHeader('MENU', 'PDF menu · Page 1 of 2') + `
      <div class="pm-pdf">
        <div class="pm-paper">
          <div class="pm-paper-title">VELVET BISTRO</div>
          <div class="pm-paper-sub">DINNER MENU</div>
          ${rows.map(([sec, items]) => `<div class="pm-paper-sec">${sec}</div>` +
            items.map(([n, p]) => `<div class="pm-paper-row"><span>${n}</span><span>${p}</span></div>`).join('')).join('')}
        </div>
        <div class="pm-pager">1 / 2</div>
      </div>`;
  }

  function renderCustom() {
    const c = state.custom;
    if (!c.connected) {
      return appHeader('MENU', 'Custom provider · not loaded') + `
        <div class="pm-empty">
          <div class="pm-empty-ic">${ICON.cutlery}</div>
          <div class="pm-empty-title">Nothing loaded yet</div>
          <div class="pm-empty-sub">Add your ordering web address and press Connect &amp; load.</div>
        </div>`;
    }
    const dishes = [['Wagyu Gold Stack', '$32'], ['Charred Octopus', '$24'], ['Wood-Fired Branzino', '$29'], ['Garden Burrata', '$18'], ['Dark Chocolate Tart', '$14']];
    const accent = c.theme ? c.color : '#1d1d28';
    return `<div class="pm-browser" style="--p-accent:${accent}">
      <div class="pm-chrome">
        ${c.back ? '<span class="pm-chrome-btn">' + ICON.back + '</span>' : ''}
        <span style="flex:1;text-align:center;font-size:11px;font-weight:800">Order</span>
        <span class="pm-chrome-btn" style="letter-spacing:1px">···</span>
      </div>
      <div class="pm-site">
        ${c.hideheader ? '' : `<div class="pm-site-hero" style="background:${accent}"><div class="n">VELVET BISTRO</div><div class="s">Order online</div></div>`}
        <div class="pm-site-body">
          <div class="pm-site-h">Order Online</div>
          <div class="pm-site-item" style="padding-top:0"><span class="d">${escapeHtml(hostOf(c.url))} · Pickup in ~20 min</span></div>
          ${dishes.map(([n, p]) => `<div class="pm-site-item"><span><span class="n">${n}</span><span class="d">${p}</span></span><button class="add" style="background:${accent}">Add</button></div>`).join('')}
        </div>
      </div></div>`;
  }

  function dietBadges(tags, on) {
    if (!on || !tags.length) return '';
    return '<div class="pm-tagrow">' + tags.map(t => `<span class="pm-dtag">${t}</span>`).join('') + '</div>';
  }

  function renderOrdering() {
    const o = state.ordering;
    const cats = [
      { name: 'Starters', items: [
        { name: 'Truffle Arancini', desc: 'Crispy · shaved parmesan', price: '$14', color: SWATCH[0], badge: 'Vegan', tags: ['Gluten'] },
        { name: 'Burrata', desc: 'Basil oil · sea salt', price: '$16', color: SWATCH[1], tags: ['Veg'] },
      ] },
      { name: 'Mains', items: [
        { name: 'Wagyu Stack', desc: 'Aged cheddar · brioche', price: '$42', color: SWATCH[1], tags: ['Gluten', 'Dairy'] },
        { name: 'Sea Bass', desc: 'Fennel · citrus', price: '$36', color: SWATCH[5], badge: 'GF', tags: [] },
      ] },
    ];
    const head = appHeader('MENU', 'Powered by ' + orderingApi().provider.name);
    const banner = o.banner ? `<div class="pm-banner">
      <span class="pm-banner-ic">${ICON.star}</span>
      <span><span class="pm-banner-title">You have 240 points</span><span class="pm-banner-sub">60 more to unlock $5 off</span></span>
    </div>` : '';
    const hero = `<div class="pm-hero" style="background-image:${HEROES[o.hero].background}">
      <div class="pm-hero-txt"><div class="pm-hero-title">Order for pickup</div><div class="pm-hero-sub">Ready in ~15 min</div></div>
    </div>`;

    const body = cats.map(cat => {
      const sec = `<div class="pm-sec">${cat.name.toUpperCase()}</div>`;
      if (o.layout === 'list') {
        return sec + cat.items.map(i => `<div class="pm-list-item">
          <span class="im" style="background:${i.color}"></span>
          <span class="tx"><span class="nm">${i.name}</span><span class="ds">${i.desc}</span>${dietBadges(i.tags, o.allergens)}</span>
          <span class="pr">${i.price}</span>
        </div>`).join('');
      }
      if (o.layout === 'hero') {
        return sec + cat.items.map(i => `<div class="pm-show">
          <div class="pm-show-img" style="background:${i.color}">${o.allergens && i.badge ? '<span class="pm-badge">' + i.badge + '</span>' : ''}</div>
          <div class="pm-show-body">
            <div class="pm-show-name">${i.name}</div>
            <div class="pm-show-desc">${i.desc}</div>
            ${dietBadges(i.tags, o.allergens)}
            <div class="pm-show-foot"><span class="pm-card-price">${i.price}</span><button class="pm-add">+</button></div>
          </div>
        </div>`).join('');
      }
      return sec + '<div class="pm-grid">' + cat.items.map(i => `<div class="pm-card">
        <div class="pm-card-img" style="background:${i.color}">${o.allergens && i.badge ? '<span class="pm-badge">' + i.badge + '</span>' : ''}</div>
        <div class="pm-card-body">
          <div class="pm-card-name">${i.name}</div>
          ${dietBadges(i.tags, o.allergens)}
          <div class="pm-card-foot"><span class="pm-card-price">${i.price}</span><button class="pm-add">+</button></div>
        </div>
      </div>`).join('') + '</div>';
    }).join('');

    return `<div style="--pm-accent:${o.color}">${head}${banner}${hero}${body}</div>`;
  }

  function renderManual() {
    const m = state.manual;
    const cats = m.categories;
    const total = cats.reduce((n, c) => n + c.items.length, 0);

    const head = appHeader('MENU', 'Curated by your head chef');
    const manualHeroBackground = m.hero === null
      ? 'linear-gradient(135deg,#6b4a34,#2e1f16)'
      : HEROES[m.hero].background;
    const hero = `<div class="pm-hero" style="background-image:${manualHeroBackground}">
      <div class="pm-hero-txt"><div class="pm-hero-title">Our Menu</div><div class="pm-hero-sub">Curated by your head chef</div></div>
    </div>`;

    if (!total) {
      return head + hero + `<div class="pm-empty">
        <div class="pm-empty-ic">${ICON.list}</div>
        <div class="pm-empty-title">No items yet</div>
        <div class="pm-empty-sub">Add categories by hand, or import a file to get your menu started.</div>
        <button class="pm-empty-btn">Import file</button>
      </div>`;
    }

    const openCatId = m.activeCat;
    const tabs = cats.length ? '<div class="pm-tabs">' + cats.map(c =>
      `<button class="pm-tab${c.id === openCatId || (!openCatId && c === cats[0]) ? ' on' : ''}">${escapeHtml(c.name)}</button>`).join('') + '</div>' : '';

    const body = cats.filter(c => c.items.length).map(cat => {
      const sec = `<div class="pm-sec">${escapeHtml(cat.name).toUpperCase()}</div>`;
      const cards = cat.items.map(item => {
        const editing = item.id === m.activeItem;
        const off = item.available ? '' : 'opacity:.45;';
        if (item.layout === 'list') {
          return `<div class="pm-list-item${editing ? ' editing' : ''}" style="${off}">
            <span class="im" style="background:${item.color}"></span>
            <span class="tx"><span class="nm">${escapeHtml(item.name)}</span><span class="ds">${escapeHtml(item.desc)}</span>${dietBadges(item.tags, true)}</span>
            <span class="pr">${escapeHtml(item.price)}</span>
          </div>`;
        }
        if (item.layout === 'hero') {
          return `<div class="pm-show${editing ? ' editing' : ''}" style="${off}">
            <div class="pm-show-img" style="background:${item.color}">${editing ? editingBadge() : ''}</div>
            <div class="pm-show-body">
              <div class="pm-show-name">${escapeHtml(item.name)}</div>
              <div class="pm-show-desc">${escapeHtml(item.desc)}</div>
              ${dietBadges(item.tags, true)}
              <div class="pm-show-foot"><span class="pm-card-price">${escapeHtml(item.price)}</span><button class="pm-add">+</button></div>
            </div>
          </div>`;
        }
        return `<div class="pm-card${editing ? ' editing' : ''}" style="${off}">
          <div class="pm-card-img" style="background:${item.color}">${editing ? editingBadge() : ''}</div>
          <div class="pm-card-body">
            <div class="pm-card-name">${escapeHtml(item.name)}</div>
            ${item.desc ? '<div class="pm-card-desc">' + escapeHtml(item.desc) + '</div>' : ''}
            ${dietBadges(item.tags, true)}
            <div class="pm-card-foot"><span class="pm-card-price">${escapeHtml(item.price)}</span><button class="pm-add">+</button></div>
          </div>
        </div>`;
      });

      const gridItems = cat.items.filter(i => i.layout === 'card').length;
      const isOpenCat = cat.id === openCatId;
      const ghost = isOpenCat && gridItems ? `<div class="pm-card ghost">${ICON.plus}Add item</div>` : '';
      const anyCard = cat.items.some(i => i.layout === 'card');
      if (anyCard && cat.items.every(i => i.layout === 'card')) {
        return sec + '<div class="pm-grid">' + cards.join('') + ghost + '</div>';
      }
      return sec + cards.join('');
    }).join('');

    return head + hero + tabs + body;
  }

  function editingBadge() {
    return `<span class="pm-editing-badge">${ICON.pencil}Editing</span>`;
  }

  // My Activity is a fixed overview — only the brand colour is configurable.
  function renderOrderHistory() {
    // No online ordering is connected in this scenario, so there's nothing to
    // buy from yet — only loyalty points and credits are shown.
    const rows = [
      { points: 250, name: 'Daily Login', date: '9/25/2024, 08:09 AM' },
      { points: 1200, name: 'Weekly Challenge', date: '9/22/2024, 02:45 PM' },
      { points: 500, name: 'Referral Bonus', date: '9/18/2024, 11:20 AM' },
      { points: 150, name: 'Survey Completion', date: '9/15/2024, 04:10 PM' },
      { points: 300, name: 'Achievement Unlocked', date: '9/12/2024, 09:00 AM' },
      { points: 800, name: 'Purchase Reward', date: '9/05/2024, 01:30 PM' },
      { points: 400, name: 'Level Up', date: '8/28/2024, 06:15 PM' },
    ];
    return `
      <div class="pm-orders">
        <div class="pm-orders-head">
          <button class="pm-orders-back" type="button" onclick="goToPage('home')">${ICON.back}</button>
          <div class="pm-orders-title">My Activity</div>
        </div>
        <div class="pm-orders-summary"><span class="pm-orders-summary-ic">${ICON.star}</span><span>1.8K Points | 817.22 Credits</span></div>
        <div class="pm-orders-seg"><span class="on">Points</span><span>Credits</span></div>
        <div class="pm-orders-list">
          ${rows.map((r) => `
            <div class="pm-orders-row">
              <span class="pm-orders-row-ic">${ICON.star}</span>
              <span class="pm-orders-row-amount">+${r.points.toLocaleString()} Points</span>
              <span class="pm-orders-row-info">
                <span class="pm-orders-row-name">${r.name}</span>
                <span class="pm-orders-row-date">${r.date}</span>
              </span>
              ${ICON.chev}
            </div>`).join('')}
        </div>
      </div>
    `;
  }

  function renderAccountPreview() {
    const opts = state.pageSettings.accountOptions;
    const actions = [
      { key: 'settings', icon: ICON.pencil, name: 'Edit profile' },
      { key: 'giftcards', icon: ICON.gift, name: 'My gifts' },
      { key: 'payments', icon: ICON.card, name: 'Payments' },
      { key: 'orders', icon: ICON.receipt, name: 'Orders' },
    ].filter((r) => opts[r.key]);
    const settingsRows = [
      { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>', name: 'Security', desc: 'Password and sign-in methods' },
      { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18"/></svg>', name: 'Language & region', desc: 'English · Canada' },
      { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 8a6 6 0 00-12 0c0 7-3 7-3 7h18s-3 0-3-7"/><path d="M10 20h4"/></svg>', name: 'Notifications', desc: 'Offers, rewards, and order updates' },
      { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 4h16v16H4z"/><path d="M8 9h8M8 13h8M8 17h5"/></svg>', name: 'Privacy & terms', desc: 'Your choices and data' },
    ];
    return `
      <div class="pm-account">
        <div class="pm-orders-head">
          <button class="pm-orders-back" type="button" onclick="goToPage('home')">${ICON.back}</button>
          <div class="pm-orders-title">My Account</div>
        </div>
        <div class="pm-account-profile">
          <div class="pm-account-avatar">${ICON.user}</div>
          <div class="pm-account-name">Customer name</div>
          <div class="pm-account-loyalty">Loyalty number • 1234 5678 9012</div>
          <div class="pm-account-points"><span>Points</span><strong>1,250 pts</strong></div>
        </div>
        ${actions.length ? `
        <div class="pm-account-actions">
          ${actions.map((r) => `
            <button type="button" class="pm-account-action">
              <span class="pm-account-action-ic">${r.icon}</span>
              <span class="pm-account-action-name">${r.name}</span>
            </button>`).join('')}
        </div>` : ''}
        <div class="pm-account-list">
          ${settingsRows.map((r) => `
            <div class="pm-account-row">
              <span class="pm-account-row-ic">${r.icon}</span>
              <span class="pm-account-row-info">
                <span class="pm-account-row-name">${r.name}</span>
                <span class="pm-account-row-desc">${r.desc}</span>
              </span>
              ${ICON.chev}
            </div>`).join('')}
        </div>
        <button type="button" class="pm-account-signout">Sign out</button>
      </div>
    `;
  }

  function renderReferralPreview() {
    const hero = state.pageSettings.hero.referral;
    const terms = state.pageSettings.referralTerms;
    const friends = [
      { initial: 'A', name: 'Alex Rivera', bg: 'rgba(38,42,255,.14)' },
      { initial: 'M', name: 'Maya Chen', bg: 'rgba(219,39,119,.14)' },
      { initial: 'J', name: 'Jordan Lee', bg: 'rgba(15,23,42,.08)' },
    ];
    return `
      <div class="pm-referral">
        <div class="pm-orders-head">
          <button class="pm-orders-back" type="button" onclick="goToPage('home')">${ICON.back}</button>
          <div class="pm-orders-title">Refer a Friend</div>
        </div>
        <div class="pm-referral-hero">
          <div class="pm-referral-photo"${hero.image ? ` style="background-image:url(${hero.image})"` : ''}>${hero.image ? '' : ICON.photo}</div>
          <span class="pm-referral-badge">${ICON.gift}</span>
        </div>
        <div class="pm-referral-headline">${hero.headline || 'Share &amp; Get $5!'}</div>
        <div class="pm-referral-copy">${hero.description}</div>
        <div class="pm-referral-code-card">
          <div class="pm-referral-code-label">Your referral code</div>
          <div class="pm-referral-code">REFER-FRIEND-99</div>
          <div class="pm-referral-actions">
            <button type="button" class="pm-referral-btn ghost">${ICON.copy}Copy code</button>
            <button type="button" class="pm-referral-btn solid">${ICON.share}Share link</button>
          </div>
        </div>
        <div class="pm-referral-activity-card">
          <div class="pm-referral-activity-head"><span>Your Invitation Activity</span><span class="pm-referral-showall">Show all →</span></div>
          <div class="pm-referral-stat-card">
            <div class="pm-referral-stat-label">Total points earned</div>
            <div class="pm-referral-stat-value">1,500 pts</div>
            <div class="pm-referral-stat-sub">3 friends joined</div>
          </div>
          <div class="pm-referral-friends">
            ${friends.map((f) => `
              <div class="pm-referral-friend">
                <div class="pm-referral-friend-avatar" style="background:${f.bg}">${f.initial}</div>
                <div class="pm-referral-friend-name">${f.name}</div>
              </div>`).join('')}
          </div>
        </div>
        <div class="pm-referral-terms">* ${terms.text}</div>
        <a class="pm-referral-terms-link" href="#" onclick="return false;">${terms.linkText}</a>
      </div>
    `;
  }

  function renderStoryPreview() {
    const hero = state.pageSettings.hero.story;
    const story = state.pageSettings.story;
    const icons = [ICON.fish, ICON.leaf, ICON.smile];
    return `
      <div class="pm-story">
        <div class="pm-orders-head">
          <button class="pm-orders-back" type="button" onclick="goToPage('home')">${ICON.back}</button>
          <div class="pm-orders-title">About Us</div>
        </div>
        <div class="pm-referral-hero">
          <div class="pm-referral-photo"${hero.image ? ` style="background-image:url(${hero.image})"` : ''}>${hero.image ? '' : ICON.photo}</div>
          <span class="pm-referral-badge">${ICON.heart}</span>
        </div>
        <div class="pm-referral-headline">${hero.headline}</div>
        <div class="pm-referral-copy">${hero.description}</div>

        <div class="pm-story-card">
          <div class="pm-story-h2">${story.sparkHeading}</div>
          <p>${story.sparkP1}</p>
          <p>${story.sparkP2}</p>
        </div>

        <div class="pm-story-card">
          <div class="pm-story-h2">${story.valuesHeading}</div>
          <div class="pm-story-values">
            ${story.values.map((v, i) => `
              <div class="pm-story-value">
                <span class="pm-story-value-ic">${icons[i]}</span>
                <div>
                  <strong>${v.title}</strong>
                  <span>${v.desc}</span>
                </div>
              </div>`).join('')}
          </div>
        </div>

        <div class="pm-story-card pm-story-quote-card">
          <div class="pm-story-quote-head">
            <div class="pm-story-quote-avatar">${ICON.user}</div>
            <div>
              <div class="pm-story-quote-name">${story.quoteName}</div>
              <div class="pm-story-quote-role">${story.quoteRole}</div>
            </div>
          </div>
          <p class="pm-story-quote-text">"${story.quoteText}"</p>
        </div>

        <div class="pm-story-ctas">
          <button type="button" class="pm-referral-btn ghost">${ICON.pin}${story.cta1}</button>
          <button type="button" class="pm-referral-btn solid">${ICON.bag}${story.cta2}</button>
        </div>
      </div>
    `;
  }

  function renderContactPreview() {
    const hero = state.pageSettings.hero.contact;
    const contact = state.pageSettings.contact;
    const directIcons = [ICON.mail, ICON.phone, ICON.pin];
    return `
      <div class="pm-story">
        <div class="pm-orders-head">
          <button class="pm-orders-back" type="button" onclick="goToPage('home')">${ICON.back}</button>
          <div class="pm-orders-title">Contact Us</div>
        </div>
        <div class="pm-referral-hero">
          <div class="pm-referral-photo"${hero.image ? ` style="background-image:url(${hero.image})"` : ''}>${hero.image ? '' : ICON.photo}</div>
          <span class="pm-referral-badge">${ICON.heart}</span>
        </div>
        <div class="pm-referral-headline">${hero.headline}</div>
        <div class="pm-referral-copy">${hero.description}</div>

        <div class="pm-story-card">
          <div class="pm-story-values">
            ${contact.direct.map((row, i) => `
              <div class="pm-story-value">
                <span class="pm-story-value-ic">${directIcons[i]}</span>
                <div>
                  <strong>${row.title}</strong>
                  <span>${row.value}</span>
                </div>
              </div>`).join('')}
          </div>
        </div>

        <div class="pm-story-card pm-story-follow-card">
          <div class="pm-story-h2" style="text-align:center;">Follow Us</div>
          <div class="pm-story-follow">
            <span class="pm-story-follow-ic">${ICON.instagram}</span>
            <span class="pm-story-follow-ic">${ICON.tiktok}</span>
            <span class="pm-story-follow-ic">${ICON.facebook}</span>
          </div>
        </div>
      </div>
    `;
  }

  function renderPhone() {
    if (!phoneRender) return;
    let html;
    let mode = 'none';
    if (state.screen === 'page-settings' && state.pageSettings.selected === 'activity') { mode = 'activity'; html = renderOrderHistory(); }
    else if (state.screen === 'page-settings' && state.pageSettings.selected === 'account') { mode = 'account'; html = renderAccountPreview(); }
    else if (state.screen === 'page-settings' && state.pageSettings.selected === 'referral') { mode = 'referral'; html = renderReferralPreview(); }
    else if (state.screen === 'page-settings' && state.pageSettings.selected === 'story') { mode = 'story'; html = renderStoryPreview(); }
    else if (state.screen === 'page-settings' && state.pageSettings.selected === 'contact') { mode = 'contact'; html = renderContactPreview(); }
    else if (state.approach === 'webview') { mode = 'webview'; html = renderWebview(); }
    else if (state.approach === 'pdf') { mode = 'pdf'; html = renderPdf(); }
    else if (state.approach === 'manual') { mode = 'manual'; html = renderManual(); }
    else if (state.approach === 'ordering') {
      if (state.integration === 'custom') { mode = 'custom'; html = renderCustom(); }
      else if (orderingApi().connected) { mode = 'ordering'; html = renderOrdering(); }
      else { mode = 'none'; html = renderNone(); }
    } else { html = renderNone(); }

    phonePage.dataset.menuMode = mode;
    phoneRender.innerHTML = html;

    const hideNav = (mode === 'webview' && state.webview.connected && !state.webview.bottombar)
      || (mode === 'custom' && state.custom.connected && !state.custom.bottombar);
    setBottomNav(!hideNav);
  }

  /* --------------------------------------- react to the settings-modal flow */

  document.addEventListener('como:ordering', (e) => {
    const oo = e.detail.ordering;
    if (state.approach !== 'ordering') return;
    if (oo.connected) {
      state.integration = 'native';
      const logo = document.getElementById('ms-oo-logo');
      logo.textContent = oo.provider.mark;
      logo.style.background = oo.provider.color;
      document.getElementById('ms-oo-name').textContent = oo.provider.name;
      if (state.screen !== 'oo-connected') show('oo-connected');
    } else if (e.detail.reason === 'disconnect') {
      show('oo-integration');
    }
    renderPhone();
  });

  /* --------------------------------------------------------------- startup */

  renderCategories();
  renderOrderingHeroControl();
  renderManualHeroControl();
  renderPhone();

  function exportMenuSource() {
    return JSON.parse(JSON.stringify(state));
  }

  function importMenuSource(saved = {}) {
    if (!saved || typeof saved !== 'object') return;
    Object.assign(state, saved);
    renderCategories();
    show(state.screen || 'build-categories');
    renderPhone();
  }

  return {
    menuState: state,
    showMenuScreen: show,
    renderMenuPhone: renderPhone,
    exportMenuSource,
    importMenuSource,
    openMenuTab: () => goToPage('menu'),
    openWebviewSetup,
    openDeferredMenuSetup,
    isWebviewConfigured: () => state.webview.connected,
  };
}
