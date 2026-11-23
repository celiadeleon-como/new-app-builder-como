/**
 * Onboarding wizard — full-screen flow shown on load, replacing the old
 * welcome modal and gating the Business/Branding/Online-ordering sidebar steps.
 *
 * Flow:
 *   Confirm business details -> Will you offer online ordering?
 *     No  -> Home layout -> navigation style and active pages
 *     Yes -> app focus -> Home layout -> navigation style and active pages
 *
 * Every answer is applied to the real editor state as it's made (so the live
 * phone preview reflects the choice immediately), and re-applied on finish so
 * answers made via "Skip setup" still land in a consistent state.
 */
export function initSetupWizard(ctx) {
  const wizardEl = document.getElementById('setup-wizard');
  if (!wizardEl) return {};
  const stepsEl = document.getElementById('sw-steps');
  const progressEl = document.getElementById('sw-progress');
  const stepCountEl = document.getElementById('sw-step-count');
  const backBtn = document.getElementById('sw-back');
  const nextBtn = document.getElementById('sw-next');
  const skipBtn = document.getElementById('sw-skip');
  const phoneSlot = document.getElementById('sw-phone-slot');
  const deviceFrame = document.getElementById('device-frame');
  const deviceStage = document.getElementById('device-stage');
  let lastRenderedStepKey = null;

  // Small line-icon set (24x24, stroke=currentColor) matching each option's intent.
  const ICON_PATHS = {
    heart: '<path d="M12 20s-7-4.4-7-10.2A4.2 4.2 0 0 1 12 7.3a4.2 4.2 0 0 1 7 2.5C19 15.6 12 20 12 20Z"/>',
    bag: '<path d="M5 8h14l-1 12H6L5 8Z"/><path d="M9 8V6.5a3 3 0 0 1 6 0V8"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18Z"/>',
    plug: '<path d="M9 3v5M15 3v5"/><path d="M6 8h12v3a6 6 0 0 1-12 0V8Z"/><path d="M12 17v4"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    star: '<path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9L12 3.5Z"/>',
    gift: '<rect x="3.5" y="8" width="17" height="4" rx="1"/><path d="M5 12v8h14v-8"/><path d="M12 8v12"/><path d="M12 8c-1.5-3.5-5.5-4-5.5-1.5S10 8 12 8Zm0 0c1.5-3.5 5.5-4 5.5-1.5S14 8 12 8Z"/>',
    ticket: '<path d="M4 7.5A1.5 1.5 0 0 1 5.5 6h13A1.5 1.5 0 0 1 20 7.5V10a2 2 0 0 0 0 4v2.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 16.5V14a2 2 0 0 0 0-4V7.5Z"/><path d="M14 6.5v2M14 11v2M14 15.5v2"/>',
    punch: '<rect x="3.5" y="6" width="17" height="12" rx="2"/><circle cx="8" cy="12" r="1.3"/><circle cx="12" cy="12" r="1.3"/><circle cx="16" cy="12" r="1.3"/>',
    dish: '<path d="M4 15a8 8 0 0 1 16 0"/><path d="M3 18h18"/><path d="M12 7V5"/>',
    pin: '<path d="M19 10c0 5-7 11-7 11s-7-6-7-11a7 7 0 0 1 14 0Z"/><circle cx="12" cy="10" r="2.5"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5"/><path d="M12 8h.01"/>',
    qr: '<rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><path d="M14 14h2v2h-2zM18 14h2M14 18h2M18 18h2v2"/>',
    book: '<path d="M5 4.5A1.5 1.5 0 0 1 6.5 3H19v15H6.5A1.5 1.5 0 0 0 5 19.5v-15Z"/><path d="M5 19.5A1.5 1.5 0 0 0 6.5 21H19"/>',
    check: '<path d="m5 12.5 4.2 4.2L19 7"/>',
    close: '<path d="M6 6l12 12M18 6L6 18"/>',
    upload: '<path d="M12 16V4M8 8l4-4 4 4"/><path d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2"/>',
    image: '<rect x="3.5" y="4.5" width="17" height="15" rx="2"/><circle cx="9" cy="10" r="1.6"/><path d="m4 17 5-4.5 4 3.5 3-2.5 4 3.5"/>',
    pencil: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
  };
  function icon(name) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICON_PATHS[name] || '') + '</svg>';
  }

  const BIZ_TYPE_OPTIONS = ['Bistro', 'Café', 'Restaurant', 'Bar & Pub', 'Retail Store', 'Salon & Spa', 'Fitness Studio', 'Other'];
  const SECTOR_OPTIONS = ['Beauty and Spa', 'Entertainment', 'Food & Drink', 'Groceries & Market', 'Health & Fitness', 'Retail & Fashion', 'Services', 'Travel', 'Other'];
  const LANGUAGE_OPTIONS = [
    { code: 'en', native: 'English', english: 'English', flag: 'EN', dir: 'ltr' },
    { code: 'es', native: 'Español', english: 'Spanish', flag: 'ES', dir: 'ltr' },
    { code: 'fr', native: 'Français', english: 'French', flag: 'FR', dir: 'ltr' },
    { code: 'de', native: 'Deutsch', english: 'German', flag: 'DE', dir: 'ltr' },
    { code: 'it', native: 'Italiano', english: 'Italian', flag: 'IT', dir: 'ltr' },
    { code: 'pt', native: 'Português', english: 'Portuguese', flag: 'PT', dir: 'ltr' },
    { code: 'nl', native: 'Nederlands', english: 'Dutch', flag: 'NL', dir: 'ltr' },
    { code: 'ar', native: 'العربية', english: 'Arabic', flag: 'AR', dir: 'rtl' },
    { code: 'he', native: 'עברית', english: 'Hebrew', flag: 'HE', dir: 'rtl' },
  ];
  const PHONE_TRANSLATIONS = {
    en: { home: 'Home', rewards: 'Rewards', order: 'Order', more: 'More', join: 'Join Rewards', scan: 'Scan to earn', pickup: 'Collection', delivery: 'Delivery' },
    es: { home: 'Inicio', rewards: 'Recompensas', order: 'Pedir', more: 'Más', join: 'Únete', scan: 'Escanear y ganar', pickup: 'Recoger', delivery: 'Entrega' },
    fr: { home: 'Accueil', rewards: 'Récompenses', order: 'Commander', more: 'Plus', join: 'Rejoindre', scan: 'Scanner et gagner', pickup: 'Retrait', delivery: 'Livraison' },
    de: { home: 'Start', rewards: 'Prämien', order: 'Bestellen', more: 'Mehr', join: 'Prämien beitreten', scan: 'Scannen und sammeln', pickup: 'Abholung', delivery: 'Lieferung' },
    it: { home: 'Home', rewards: 'Premi', order: 'Ordina', more: 'Altro', join: 'Unisciti', scan: 'Scansiona e guadagna', pickup: 'Ritiro', delivery: 'Consegna' },
    pt: { home: 'Início', rewards: 'Recompensas', order: 'Pedir', more: 'Mais', join: 'Participar', scan: 'Digitalizar e ganhar', pickup: 'Recolha', delivery: 'Entrega' },
    nl: { home: 'Home', rewards: 'Beloningen', order: 'Bestellen', more: 'Meer', join: 'Lid worden', scan: 'Scan en verdien', pickup: 'Afhalen', delivery: 'Bezorging' },
    ar: { home: 'الرئيسية', rewards: 'المكافآت', order: 'اطلب', more: 'المزيد', join: 'انضم للمكافآت', scan: 'امسح واكسب', pickup: 'استلام', delivery: 'توصيل' },
    he: { home: 'בית', rewards: 'הטבות', order: 'הזמנה', more: 'עוד', join: 'הצטרפות', scan: 'סרוק וצבור', pickup: 'איסוף', delivery: 'משלוח' },
  };
  const ob = {
    stepIndex: 0,
    bizName: 'Velvet Bistro',
    bizTypes: new Set(['Bistro']),
    sectors: new Set(['Food & Drink']),
    appLanguage: 'en',
    additionalLanguages: [],
    allowLanguageSwitching: false,
    openCombo: null,          // which combo field's panel is open, if any
    bizView: 'confirm',       // 'confirm' | 'edit'
    focus: 'loyalty',         // 'loyalty' | 'ordering'
    orderingChoice: null,     // 'offer' | 'none'
    // The provider/website choice (ctx.setOrderingMode 'native' | 'webview') now
    // lives entirely in SCREENS > Menu. Offering ordering here just defaults to
    // 'native' (Deliverect, sample menu until connected) — no extra question asked.
    homeLayout: null,         // 'priority-stack' | 'bento-grid' | 'split-header-qsr'
    navStyle: 'classic-docked', // 'classic-docked' | 'floating-liquid-glass'
    navPages: new Set(),      // locations|about-us|qr|menu-pdf — capped at 3
    startingSections: null,
  };

  // Combo field registry: shared add/remove/select logic for every chip-style select.
  const COMBO_DEFS = {
    bizType: { set: ob.bizTypes, max: 1, options: BIZ_TYPE_OPTIONS },
    sector: { set: ob.sectors, max: 3, options: SECTOR_OPTIONS },
  };

  function esc(s) { const d = document.createElement('div'); d.textContent = s == null ? '' : String(s); return d.innerHTML; }

  function seedToggle(target, enabled) {
    const toggle = typeof target === 'string' ? document.querySelector(target) : target;
    if (toggle && toggle.classList.contains('on') !== enabled) toggle.click();
  }

  function sequenceFor() {
    const sequence = ['biz-confirm', 'language', 'oo-question'];
    if (ob.orderingChoice !== 'none') sequence.push('focus');
    sequence.push('home-layout', 'nav');
    return sequence;
  }
  function currentSequence() { return sequenceFor(); }

  function initials(name) {
    return (name || '').trim().split(/\s+/).map((w) => w[0]).join('').slice(0, 2).toUpperCase() || '?';
  }

  function bizConfirmView() {
    const sectorText = [...ob.sectors].join(', ') || 'Not set';
    return '<h1 class="sw-title">Confirm your business details</h1>'
      + '<p class="sw-sub">Review your business name and category before configuring your app.</p>'
      + '<div class="sw-confirm-card">'
      + '<div class="sw-confirm-top">'
      + '<span class="sw-confirm-avatar">' + esc(initials(ob.bizName)) + '</span>'
      + '<span><span class="sw-confirm-name">' + esc(ob.bizName || 'Your Business') + '</span>'
      + '<span class="sw-confirm-sub">' + esc([...ob.bizTypes][0] || sectorText) + '</span></span>'
      + '</div>'
      + '<div class="sw-confirm-grid">'
      + '<div><div class="sw-confirm-label">Business sector</div><div class="sw-confirm-value">' + esc(sectorText) + '</div></div>'
      + '</div>'
      + '<div class="sw-confirm-foot">'
      + '<button type="button" class="sw-confirm-edit-link" data-biz-edit>Edit details</button>'
      + '</div>'
      + '</div>';
  }

  // Chip-style select used for every field below: single-select fields just cap at 1
  // (picking a new value replaces the old one) so the whole form shares one component.
  function selectCombo({ key, options, selected, locked, open, max }) {
    const items = [...selected];
    const chips = items.length
      ? items.map((v) => {
        const isLocked = locked === v;
        return '<span class="sw-select-chip' + (isLocked ? ' locked' : '') + '">' + esc(v) + (isLocked ? ' (default)' : '')
          + (isLocked ? '' : '<button type="button" class="sw-select-remove" data-combo-remove="' + key + '" data-value="' + esc(v) + '" aria-label="Remove ' + esc(v) + '">' + icon('close') + '</button>')
          + '</span>';
      }).join('')
      : '<span class="sw-select-placeholder">Select\u2026</span>';
    const atCap = Number.isFinite(max) && items.length >= max;
    const optionsHtml = options.map((opt) => {
      const isSelected = selected.has(opt);
      const disabled = !isSelected && atCap && max > 1;
      return '<button type="button" class="sw-select-option' + (isSelected ? ' selected' : '') + (disabled ? ' disabled' : '') + '" data-combo-option="' + key + '" data-value="' + esc(opt) + '"' + (disabled ? ' disabled' : '') + '>' + esc(opt) + '</button>';
    }).join('');
    return '<div class="sw-select-combo' + (open ? ' open' : '') + '" data-combo-trigger="' + key + '">'
      + '<div class="sw-select-chips">' + chips + '</div>'
      + '<svg class="sw-select-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>'
      + (open ? '<div class="sw-select-panel" data-combo-panel="' + key + '">' + optionsHtml + '</div>' : '')
      + '</div>';
  }

  function bizEditView() {
    return '<h1 class="sw-title">Edit your business details</h1>'
      + '<p class="sw-sub">Update your business name and category.</p>'
      + '<div class="sw-edit-card">'
      + '<div class="sw-edit-grid">'
      + '<div class="sw-field-block"><label class="sw-field-label-sm">Business name</label>'
      + '<input class="sw-field" type="text" id="ob-biz-name" placeholder="e.g. Velvet Bistro" value="' + esc(ob.bizName) + '"></div>'
      + '<div class="sw-field-block"><label class="sw-field-label-sm">Business type</label>'
      + selectCombo({ key: 'bizType', options: BIZ_TYPE_OPTIONS, selected: ob.bizTypes, open: ob.openCombo === 'bizType', max: 1 })
      + '</div>'
      + '<div class="sw-field-block"><label class="sw-field-label-sm">Business sector</label>'
      + selectCombo({ key: 'sector', options: SECTOR_OPTIONS, selected: ob.sectors, open: ob.openCombo === 'sector', max: 3 })
      + '<div class="sw-field-hint-sm">Select up to 3 sectors.</div>'
      + '</div>'
      + '</div>'
      + '<div class="sw-edit-foot">'
      + '<button type="button" class="sw-confirm-edit-link" data-biz-cancel>Cancel</button>'
      + '<button type="button" class="sw-confirm-btn" data-biz-save>Save changes</button>'
      + '</div>'
      + '</div>';
  }

  function stepBizConfirm() {
    return ob.bizView === 'edit' ? bizEditView() : bizConfirmView();
  }

  function languageSummary() {
    const primary = LANGUAGE_OPTIONS.find((language) => language.code === ob.appLanguage) || LANGUAGE_OPTIONS[0];
    return primary.english + (ob.additionalLanguages.length ? ' • +' + ob.additionalLanguages.length + ' language' + (ob.additionalLanguages.length === 1 ? '' : 's') : '');
  }

  function applyPhoneLanguage() {
    const copy = PHONE_TRANSLATIONS[ob.appLanguage] || PHONE_TRANSLATIONS.en;
    document.documentElement.lang = ob.appLanguage;
    document.querySelector('.app-shell')?.setAttribute('dir', LANGUAGE_OPTIONS.find((language) => language.code === ob.appLanguage)?.dir || 'ltr');
    const labels = { home: copy.home, rewards: copy.rewards, menu: copy.order, more: copy.more };
    Object.entries(labels).forEach(([key, label]) => {
      document.querySelectorAll('.bottom-nav .nav-item[data-nav="' + key + '"] > span, .side-item[data-step="' + key + '"] .side-lbl').forEach((element) => {
        element.textContent = label;
      });
    });
    document.querySelectorAll('.bento-hero-guest .bento-hero-label, .bento-hero-guest .bento-hero-btn, .shq-header-guest .shq-greet, .shq-header-guest .shq-hero-btn').forEach((element) => {
      element.textContent = copy.join;
    });
    document.querySelectorAll('.bento-qr-label, .shq-qr-label').forEach((element) => { element.textContent = copy.scan; });
    document.querySelectorAll('.pm-order-fulfillment button').forEach((button) => {
      const isDelivery = button.textContent.includes('Delivery') || button.textContent.includes('Entrega') || button.textContent.includes('Livraison');
      button.querySelector('span').textContent = isDelivery ? copy.delivery : copy.pickup;
    });
    document.dispatchEvent(new CustomEvent('como:language', { detail: { primary: ob.appLanguage, additional: [...ob.additionalLanguages], allowSwitching: ob.allowLanguageSwitching } }));
    window.appLanguageState = { primary: ob.appLanguage, additional: [...ob.additionalLanguages], allowSwitching: ob.allowLanguageSwitching };
    ctx.renderMenuPhone?.();
  }

  function languageSelectorMarkup() {
    return LANGUAGE_OPTIONS.map((language) => {
      const primary = ob.appLanguage === language.code;
      const selected = primary || ob.additionalLanguages.includes(language.code);
      return '<button type="button" class="sw-language-card' + (selected ? ' selected' : '') + (primary ? ' primary' : '') + '" data-language-select="' + language.code + '" aria-pressed="' + selected + '">'
        + '<span class="sw-language-flag">' + language.flag + '</span>'
        + '<span class="sw-language-copy"><strong>' + esc(language.native) + '</strong><small>' + esc(language.english) + (primary ? ' · Primary' : selected ? ' · Additional' : '') + '</small></span>'
        + '<span class="sw-language-check">' + icon('check') + '</span></button>';
    }).join('');
  }

  function toggleLanguageSelection(code) {
    if (code === ob.appLanguage) {
      if (!ob.additionalLanguages.length) return;
      ob.appLanguage = ob.additionalLanguages.shift();
    } else if (ob.additionalLanguages.includes(code)) {
      ob.additionalLanguages = ob.additionalLanguages.filter((language) => language !== code);
    } else {
      ob.additionalLanguages.push(code);
    }
    ob.allowLanguageSwitching = ob.additionalLanguages.length > 0;
  }

  function stepLanguage() {
    return '<h1 class="sw-title">Choose your app languages</h1>'
      + '<p class="sw-sub">Select all languages your app should support. The primary language is used for preview and default content; customers choose their language when installing the app or from their profile.</p>'
      + '<p class="sw-language-helper">Select multiple languages. The first selected language is primary.</p>'
      + '<div class="sw-language-grid">' + languageSelectorMarkup() + '</div>';
  }

  /* ------------------------------------------------------------ steps */

  // The one reusable option-card primitive: icon chip + title + description,
  // with an optional trailing check box for multi-select steps. Cards that
  // nest further interactive content (a field or sub-buttons) render as a
  // keyboard-accessible <div> instead of a <button> to avoid invalid nested
  // interactive markup.
  function optionCard({ attr, selected, iconName, name, desc, multi, radio, extra, container }) {
    const tag = container ? 'div' : 'button';
    const openTag = container
      ? '<div class="sw-opt' + (selected ? ' selected' : '') + '" role="button" tabindex="0" ' + attr + '>'
      : '<button type="button" class="sw-opt' + (selected ? ' selected' : '') + '" ' + attr + '>';
    return openTag
      + (iconName ? '<span class="sw-opt-ic">' + icon(iconName) + '</span>' : '')
      + '<span class="sw-opt-text">'
      + '<span class="sw-opt-title">' + esc(name) + '</span>'
      + '<span class="sw-opt-desc">' + esc(desc) + '</span>'
      + (extra || '')
      + '</span>'
      + (multi ? '<span class="sw-opt-check">' + icon('check') + '</span>' : '')
      + (radio ? '<span class="sw-opt-radio' + (selected ? ' checked' : '') + '"></span>' : '')
      + '</' + tag + '>';
  }

  function focusIllustration(focus) {
    if (focus === 'ordering') {
      return '<svg viewBox="0 0 280 170" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
        + '<circle class="sw-focus-orbit" cx="140" cy="88" r="66"/>'
        + '<path class="sw-focus-icon-fill" d="M104 77h72l10 70H94z"/><path d="M118 77c0-30 44-30 44 0"/>'
        + '<path d="M123 105c9 10 25 10 34 0"/><path d="M116 61c8-12 21-19 34-17"/>'
        + '<g class="sw-focus-float"><circle cx="84" cy="59" r="20"/><path d="M84 49v11l8 5"/></g>'
        + '<g class="sw-focus-float"><rect x="190" y="42" width="31" height="42" rx="5"/><path d="M197 53h17M197 61h12M197 70h17"/></g>'
        + '<path class="sw-focus-spark" d="m72 105 3 7 7 3-7 3-3 7-3-7-7-3 7-3zM207 106l2 5 5 2-5 2-2 5-2-5-5-2 5-2z"/>'
        + '</svg>';
    }
    return '<svg viewBox="0 0 280 170" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
      + '<circle class="sw-focus-orbit" cx="140" cy="86" r="66"/>'
      + '<rect class="sw-focus-icon-fill" x="105" y="32" width="70" height="118" rx="13"/><path d="M105 50h70M126 139h28"/>'
      + '<path d="M140 105l-18-13c-8-6 1-20 10-13l8 6 8-6c9-7 18 7 10 13z"/>'
      + '<g class="sw-focus-float"><rect x="62" y="43" width="34" height="34" rx="7"/><path d="M69 50h7v7h-7zM83 50h6M83 57h6M69 64h7M82 64h7v7h-7z"/></g>'
      + '<g class="sw-focus-float"><circle cx="207" cy="69" r="19"/><path d="m207 58 3 7 8 1-6 5 2 8-7-4-7 4 2-8-6-5 8-1z"/></g>'
      + '<path class="sw-focus-spark" d="m77 111 3 7 7 3-7 3-3 7-3-7-7-3 7-3zM205 110l2 5 5 2-5 2-2 5-2-5-5-2 5-2z"/>'
      + '</svg>';
  }

  function stepFocusChoice() {
    const sections = focusSectionDefs(ob.focus);
    return '<h1 class="sw-title">What should your app focus on?</h1>'
      + '<p class="sw-sub">Choose the starting emphasis. We’ll add a proven Home structure that you can customize later.</p>'
      + '<div class="sw-focus-grid">'
      + focusCard('loyalty', 'Loyalty', 'Make every visit count.')
      + focusCard('ordering', 'Online Ordering', 'Put ordering first.')
      + '<div class="sw-focus-sections">'
      + '<div class="sw-focus-sections-head"><strong>Your starting Home sections</strong><span>Recommended</span></div>'
      + '<div class="sw-focus-section-list">'
      + sections.map((section) => {
        const selected = startingSectionsForFocus().has(section.key);
        return '<button type="button" class="sw-focus-section' + (selected ? ' selected' : '') + '" data-focus-section="' + section.key + '">'
          + '<span class="sw-focus-section-icon">' + icon(section.icon) + '</span>'
          + '<span><strong>' + esc(section.label) + '</strong><small>' + esc(section.desc) + '</small></span>'
          + '<span class="sw-focus-section-check">' + icon('check') + '</span></button>';
      }).join('')
      + '</div><p class="sw-focus-section-note">These are starting defaults, not limitations. Edit every section in Home after setup.</p></div>'
      + '</div>';
  }

  function focusSectionDefs(focus) {
    return focus === 'ordering'
      ? [
        { key: 'order-again', icon: 'bag', label: 'Order Again', desc: 'Fast repeat ordering' },
        { key: 'menu-categories', icon: 'dish', label: 'Menu Categories', desc: 'Browse the live ordering menu' },
        { key: 'profile', icon: 'heart', label: 'Profile & Loyalty', desc: 'Member identity and points' },
        { key: 'active-rewards', icon: 'gift', label: 'Active Rewards', desc: 'Ready-to-redeem value' },
        { key: 'promo-cards', icon: 'star', label: 'Featured promotions', desc: 'Timely offers and announcements' },
      ]
      : [
        { key: 'profile', icon: 'heart', label: 'Profile & Loyalty', desc: 'Member status and points' },
        { key: 'loyalty-qr', icon: 'qr', label: 'Loyalty QR / Scan to earn', desc: 'Earn and redeem in one tap' },
        { key: 'active-rewards', icon: 'gift', label: 'Active Rewards', desc: 'Ready-to-redeem value' },
        { key: 'punch-card', icon: 'punch', label: 'Punch Card', desc: 'Visit-based progress' },
        { key: 'promo-cards', icon: 'star', label: 'Featured promotions', desc: 'Timely offers and announcements' },
      ];
  }

  function defaultStartingSections(focus) {
    return new Set(focusSectionDefs(focus).map((section) => section.key));
  }

  function startingSectionsForFocus() {
    if (!ob.startingSections) ob.startingSections = defaultStartingSections(ob.focus);
    return ob.startingSections;
  }

  function focusCard(value, title, desc) {
    const selected = ob.focus === value;
    return '<button type="button" class="sw-focus-card' + (selected ? ' selected' : '') + '" data-focus="' + value + '" aria-pressed="' + selected + '">'
      + '<span class="sw-focus-illustration">' + focusIllustration(value) + '</span>'
      + '<span class="sw-focus-check">' + icon('check') + '</span>'
      + '<span class="sw-focus-title">' + esc(title) + '</span>'
      + '<span class="sw-focus-desc">' + esc(desc) + '</span>'
      + '</button>';
  }

  function stepHomeLayout() {
    const offering = ob.focus === 'ordering' || ob.orderingChoice === 'offer';
    const recommended = ctx.getRecommendedLayout?.({ onlineOrderingEnabled: offering, appFocus: ob.focus }) || 'bento-grid';
    if (!ob.homeLayout || !ob.homeLayoutExplicit) ob.homeLayout = recommended;
    ctx.applyHomeLayout?.(ob.homeLayout);

    const layoutCards = (ctx.homeLayoutDefs || []).map((d) => homeLayoutCard(d, d.key === recommended)).join('');
    const enabledSections = focusSectionDefs(ob.focus).filter((section) => startingSectionsForFocus().has(section.key));

    return '<h1 class="sw-title">Choose your Home screen layout</h1>'
      + '<p class="sw-sub">Pick the structure for your Home screen. Your selected features keep their order within every layout.</p>'
      + '<div class="sw-layout-feature-summary"><span>Included to start</span>'
      + enabledSections.map((section) => '<b>' + esc(section.label) + '</b>').join('')
      + '</div>'
      + '<div class="sw-layout-grid">' + layoutCards + '</div>';
  }

  function homeLayoutCard(def, isRecommended) {
    const selected = ob.homeLayout === def.key;
    return '<button type="button" class="sw-layout-opt' + (selected ? ' selected' : '') + '" data-home-layout-pick="' + def.key + '">'
      + '<span class="sw-layout-wireframe sw-layout-wireframe--' + def.key + '">' + (ctx.homeLayoutWireframe?.(def.key) || '') + '</span>'
      + '<span class="sw-layout-check-circle' + (selected ? ' checked' : '') + '">' + icon('check') + '</span>'
      + (isRecommended ? '<span class="sw-opt-badge sw-layout-badge">Recommended</span>' : '')
      + '<span class="sw-layout-title">' + esc(def.name) + '</span>'
      + '<span class="sw-layout-desc">' + esc(def.desc) + '</span>'
      + '</button>';
  }


  function stepOrderingQuestion() {
    return '<h1 class="sw-title">Do you want customers to order through your app?</h1>'
      + '<p class="sw-sub">Choose whether your app should include transactional ordering, menu availability, checkout, and order status.</p>'
      + '<div class="sw-opt-grid sw-opt-grid--cols2">'
      + methodCard({ attr: 'data-oo-pick="offer"', selected: ob.orderingChoice === 'offer', iconName: 'bag', name: 'Yes, enable online ordering', desc: 'Add live menu, basket, checkout, and fulfillment.' })
      + methodCard({ attr: 'data-oo-pick="none"', selected: ob.orderingChoice === 'none', iconName: 'heart', name: 'Continue without online ordering', desc: 'Start with loyalty. You can add online ordering later.' })
      + '</div>'
      + '<p class="sw-sub sw-sub-note">You can connect your ordering provider after onboarding; no credentials are needed now.</p>';
  }

  function methodCard({ attr, selected, iconName, name, desc, badge }) {
    return '<button type="button" class="sw-opt sw-opt-method' + (selected ? ' selected' : '') + '" ' + attr + '>'
      + '<span class="sw-opt-ic">' + icon(iconName) + '</span>'
      + '<span class="sw-opt-check-circle' + (selected ? ' checked' : '') + '">' + icon('check') + '</span>'
      + '<span class="sw-opt-text">'
      + '<span class="sw-opt-title-row"><span class="sw-opt-title">' + esc(name) + '</span>'
      + (badge ? '<span class="sw-opt-badge">' + esc(badge) + '</span>' : '')
      + '</span>'
      + '<span class="sw-opt-desc">' + esc(desc) + '</span>'
      + '</span>'
      + '</button>';
  }

  function navStyleCard(key, title, desc) {
    const selected = ob.navStyle === key;
    return '<button type="button" class="sw-navstyle-opt' + (selected ? ' selected' : '') + '" data-nav-style-pick="' + key + '">'
      + '<span class="sw-navstyle-wireframe sw-navstyle-wireframe--' + key + '">' + navStyleWireframe(key) + '</span>'
      + '<span class="sw-layout-check-circle' + (selected ? ' checked' : '') + '">' + icon('check') + '</span>'
      + '<span class="sw-layout-title">' + esc(title) + '</span>'
      + '<span class="sw-layout-desc">' + esc(desc) + '</span>'
      + '</button>';
  }

  function navStyleWireframe(key) {
    if (key === 'floating-liquid-glass') {
      return '<svg viewBox="0 0 100 56" fill="none"><rect x="4" y="4" width="92" height="30" rx="6" fill="currentColor" opacity=".2"/><rect x="14" y="38" width="72" height="8" rx="4" fill="currentColor" opacity=".35"/><rect x="20" y="48" width="60" height="7" rx="3.5" fill="currentColor" opacity=".55"/></svg>';
    }
    return '<svg viewBox="0 0 100 56" fill="none"><rect x="4" y="4" width="92" height="34" rx="6" fill="currentColor" opacity=".2"/><rect x="0" y="42" width="100" height="14" fill="currentColor" opacity=".55"/></svg>';
  }

  function stepNav() {
    // Offering online ordering already claims a nav slot (the Order tab), so
    // that path gets one fewer page to pick and drops the redundant PDF link.
    const offering = ob.orderingChoice === 'offer';
    const cap = offering ? 1 : 2;
    const options = [
      { key: 'locations', icon: 'pin', label: 'Locations', desc: 'Addresses, opening hours and directions.' },
      { key: 'about-us', icon: 'info', label: 'About Us', desc: 'Your story in a few lines.' },
      { key: 'qr', icon: 'qr', label: 'My QR Code', desc: 'Customers show it at checkout to earn and redeem.' },
      ...(offering ? [] : [{ key: 'menu-pdf', icon: 'book', label: 'Menu pdf link', desc: 'Link to the menu you already have.' }]),
    ];
    const atCap = ob.navPages.size >= cap;
    const optionalCards = options.map((o) => {
      const selected = ob.navPages.has(o.key);
      return optionCard({
        attr: 'data-nav-page="' + o.key + '"', selected, iconName: o.icon, name: o.label, desc: o.desc, multi: true,
      }).replace('<button ', atCap && !selected ? '<button disabled ' : '<button ');
    }).join('');
    const orderCard = offering
      ? '<div class="sw-nav-page-row required"><span class="sw-nav-page-icon">' + icon('bag') + '</span><span class="sw-nav-page-copy"><strong>Order</strong><small>Online ordering, live menu, prices, and checkout.</small></span><span class="sw-nav-required">Required</span></div>'
      : '';
    const navStyleSection = '<div class="sw-navstyle-grid">'
      + navStyleCard('classic-docked', 'Docked bar', 'Always visible with a familiar, full-width app navigation.')
      + navStyleCard('floating-liquid-glass', 'Floating bar + Pass Shelf', 'A compact floating bar with your member pass within easy reach.')
      + '</div>';
    const showHint = ob.navStyle === 'floating-liquid-glass' && (ob.navPages.has('locations') || ob.navPages.has('about-us'));
    const hint = !showHint ? '' : '<p class="sw-nav-hint">' + icon('check') + ' Your member barcode stays 1 tap away via the floating Pass Shelf, freeing your 5th tab for Locations or About Us.</p>';
    return '<h1 class="sw-title">Choose your menu bar</h1>'
      + '<p class="sw-sub">Choose a style, then select the pages customers can access along the bottom of your app.</p>'
      + '<section class="sw-nav-step-section"><h2>1. Choose a style</h2>'
      + navStyleSection
      + '</section>'
      + '<section class="sw-nav-step-section">'
      + '<div class="sw-nav-section-head"><h2>2. Choose your pages</h2><span class="sw-nav-count">' + ob.navPages.size + ' of ' + cap + ' selected</span></div>'
      + '<p class="sw-multi-meta">Select up to ' + cap + ' additional page' + (cap === 1 ? '' : 's') + (offering ? '. Order is already included.' : '.') + '</p>'
      + (orderCard ? '<div class="sw-nav-required-pages">' + orderCard + '</div>' : '')
      + '<div class="sw-nav-page-list">' + optionalCards + '</div>'
      + hint
      + '</section>';
  }

  function renderStep(key) {
    if (key === 'biz-confirm') return stepBizConfirm();
    if (key === 'language') return stepLanguage();
    if (key === 'oo-question') return stepOrderingQuestion();
    if (key === 'nav') return stepNav();
    if (key === 'focus') return stepFocusChoice();
    return stepHomeLayout();
  }

  function isStepValid(key) {
    if (key === 'biz-confirm') return !!ob.bizName.trim();
    if (key === 'language') return !!ob.appLanguage;
    if (key === 'focus') return ob.focus === 'loyalty' || ob.focus === 'ordering';
    if (key === 'oo-question') return !!ob.orderingChoice;
    if (key === 'nav') return ob.navPages.size > 0;
    return true;
  }

  /* ------------------------------------------------------- live preview */

  function applyOrderingLive() {
    if (ob.orderingChoice === 'offer') {
      ctx.setMenuSlotMode?.('webview'); // reveals the Order tab in the bottom nav
      // Provider choice now lives in SCREENS > Menu — default straight to native
      // (Deliverect, sample menu until connected) instead of asking here.
      ctx.setOrderingMode?.('native');
    } else if (ob.orderingChoice === 'none') {
      ob.focus = 'loyalty';
      ob.homeLayoutExplicit = false;
      ctx.setOrderingMode?.('skip');
      ctx.setMenuSlotMode?.('hidden');
      ctx.applyGoalPreset?.('loyalty', { source: 'onboarding' });
    }
    const orderPage = setupOperational?.pages?.find((page) => page.key === 'menu');
    if (orderPage) orderPage.active = ob.orderingChoice !== 'none';
    applyFocusLive();
  }

  function applyFocusLive() {
    if (ob.focus === 'ordering') {
      ob.orderingChoice = 'offer';
      ctx.setOrderingMode?.('native');
      ctx.setMenuSlotMode?.('menu');
    }
    const wanted = [...startingSectionsForFocus()];
    const all = ['profile', 'active-rewards', 'punch-card', 'loyalty-qr', 'promo-cards', 'promo-cards-2', 'social', 'order-again', 'top-items', 'menu-categories', 'menu-reels'];
    const wantedSet = new Set(wanted);
    document.body.classList.add('gf-applying-preset');
    all.forEach((key) => ctx.setWidgetOn?.(key, wantedSet.has(key)));
    document.body.classList.remove('gf-applying-preset');
    const config = document.querySelector('#cp-home .cp-master');
    if (config) {
      const rows = [...config.querySelectorAll('.cp-widget-row:not(.cp-fixed-slot)')];
      const rank = new Map(wanted.map((key, index) => [key, index]));
      rows.sort((a, b) => {
        const aKey = a.querySelector('[data-widget-toggle]')?.dataset.widgetToggle;
        const bKey = b.querySelector('[data-widget-toggle]')?.dataset.widgetToggle;
        return (rank.get(aKey) ?? 99 + rows.indexOf(a)) - (rank.get(bKey) ?? 99 + rows.indexOf(b));
      });
      const first = config.querySelector('.cp-widget-row');
      const parent = first?.parentElement;
      const anchor = first?.previousSibling;
      let previous = anchor;
      rows.forEach((row) => {
        if (previous) previous.parentNode.insertBefore(row, previous.nextSibling);
        else parent?.insertBefore(row, parent.firstChild);
        previous = row;
      });
    }
    const recommended = ctx.getRecommendedLayout?.({
      onlineOrderingEnabled: ob.focus === 'ordering',
      appFocus: ob.focus,
    }) || (ob.focus === 'ordering' ? 'split-header-qsr' : 'bento-grid');
    ob.homeLayout = recommended;
    ctx.applyHomeLayout?.(recommended);
    ctx.reorderPhoneWidgets?.();
  }

  // Pages chosen in the nav step share two physical tab slots — the old
  // Locations tab, and (only when ordering isn't offered) the Menu/Order
  // tab, which is otherwise hidden. Never adds a 6th bottom-nav link.
  const NAV_SLOT_ORDER = ['locations', 'about-us', 'qr', 'menu-pdf'];
  function syncNavSlots() {
    const selected = NAV_SLOT_ORDER.filter((k) => ob.navPages.has(k));
    ctx.setExtraSlotMode?.(selected[0] || 'hidden', 'nav-extra-slot');
    if (ob.orderingChoice !== 'offer') {
      ctx.setExtraSlotMode?.(selected[1] || 'hidden', 'nav-menu-slot');
    }
    // Beyond which tab shows it, the underlying screen config (Settings toggles,
    // "include this screen" state) has to match the selection too — independent
    // of whichever slot happens to be displaying the tab right now.
    ctx.applyScreenVisibility?.('locations', ob.navPages.has('locations'));
    const aboutToggle = [...document.querySelectorAll('#cp-more .cp-toggle-row')]
      .find((row) => row.querySelector('.lbl')?.textContent.trim() === 'About Us')
      ?.querySelector('.toggle');
    seedToggle(aboutToggle, ob.navPages.has('about-us'));
    if (ob.navPages.has('menu-pdf')) {
      document.querySelector('#cp-menu [data-approach="pdf"]')?.click();
    }
  }

  /* --------------------------------------------------------- rendering */

  function renderProgress(total) {
    progressEl.innerHTML = Array.from({ length: total }, (_, i) =>
      '<span class="p-dot ' + (i < ob.stepIndex ? 'done' : i === ob.stepIndex ? 'now' : '') + '"></span>').join('');
    if (stepCountEl) stepCountEl.textContent = 'Step ' + (ob.stepIndex + 1) + ' of ' + total;
  }

  function render() {
    const seq = currentSequence();
    const key = seq[Math.min(ob.stepIndex, seq.length - 1)];
    renderProgress(seq.length);
    // Every interaction inside a step (selecting a card, typing, etc.) calls
    // render() again — only replay the slide-in entrance when the step itself
    // changes, or the whole card would visibly jump on every click.
    const isNewStep = key !== lastRenderedStepKey;
    lastRenderedStepKey = key;
    if (isNewStep && key === 'focus') {
      ctx.applyGoalPreset?.(ob.focus, { source: 'onboarding-preview' });
      applyFocusLive();
    }
    stepsEl.innerHTML = '<div class="sw-step' + (isNewStep ? ' sw-step-enter' : '') + '" data-comment-anchor="setup-wizard-step-' + key + '">' + renderStep(key) + '</div>';
    document.querySelector('.sw-focus-helper')?.remove();
    if (key === 'focus') {
      const helper = document.createElement('p');
      helper.className = 'sw-focus-helper';
      helper.textContent = 'Your starting sections are added. You can change them next.';
      document.querySelector('.sw-footer')?.before(helper);
    }
    backBtn.style.visibility = ob.stepIndex === 0 ? 'hidden' : 'visible';
    const isLast = ob.stepIndex === seq.length - 1;
    nextBtn.textContent = isLast ? 'Set up your app' : 'Continue';
    nextBtn.disabled = !isStepValid(key);
    // role="button" containers (option cards nesting a field or sub-buttons)
    // aren't native <button>s, so wire Enter/Space for keyboard parity.
    stepsEl.querySelectorAll('.sw-opt[role="button"]').forEach((el) => {
      el.addEventListener('keydown', (e) => {
        if (e.target !== el) return;
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); el.click(); }
      });
    });
    bindStep(key);
  }

  function bindStep(key) {
    if (key === 'biz-confirm') {
      stepsEl.querySelector('[data-biz-edit]')?.addEventListener('click', () => {
        ob.bizEditSnapshot = {
          bizName: ob.bizName,
          bizTypes: new Set(ob.bizTypes),
          sectors: new Set(ob.sectors),
        };
        ob.bizView = 'edit';
        render();
      });
      stepsEl.querySelector('[data-biz-cancel]')?.addEventListener('click', () => {
        const snap = ob.bizEditSnapshot;
        if (snap) {
          ob.bizName = snap.bizName;
          ob.bizTypes = snap.bizTypes;
          ob.sectors = snap.sectors;
          COMBO_DEFS.bizType.set = ob.bizTypes;
          COMBO_DEFS.sector.set = ob.sectors;
        }
        ob.bizView = 'confirm';
        ob.openCombo = null;
        render();
      });
      stepsEl.querySelector('[data-biz-save]')?.addEventListener('click', () => {
        ob.bizView = 'confirm';
        ob.openCombo = null;
        render();
      });
      const bizNameInput = document.getElementById('ob-biz-name');
      if (bizNameInput) {
        bizNameInput.addEventListener('input', () => {
          ob.bizName = bizNameInput.value;
          ctx.setBrand?.(ob.bizName || 'Your Business', initials(ob.bizName), '');
          nextBtn.disabled = !isStepValid('biz-confirm');
        });
      }
      stepsEl.querySelectorAll('[data-combo-trigger]').forEach((el) => {
        el.addEventListener('click', (e) => {
          if (e.target.closest('[data-combo-remove]') || e.target.closest('[data-combo-option]')) return;
          const k = el.dataset.comboTrigger;
          ob.openCombo = ob.openCombo === k ? null : k;
          render();
        });
      });
      stepsEl.querySelectorAll('[data-combo-option]').forEach((el) => {
        el.addEventListener('click', (e) => {
          e.stopPropagation();
          const def = COMBO_DEFS[el.dataset.comboOption];
          const value = el.dataset.value;
          if (def.max === 1) {
            def.set.clear();
            def.set.add(value);
            ob.openCombo = null;
          } else if (value !== def.locked) {
            if (def.set.has(value)) def.set.delete(value);
            else if (def.set.size < def.max) def.set.add(value);
          }
          render();
        });
      });
      stepsEl.querySelectorAll('[data-combo-remove]').forEach((el) => {
        el.addEventListener('click', (e) => {
          e.stopPropagation();
          COMBO_DEFS[el.dataset.comboRemove].set.delete(el.dataset.value);
          render();
        });
      });
    } else if (key === 'language') {
      stepsEl.querySelectorAll('[data-language-select]').forEach((button) => button.addEventListener('click', () => {
        toggleLanguageSelection(button.dataset.languageSelect);
        applyPhoneLanguage();
        renderFinishSetupChecklist();
        render();
        ctx.markDirty?.('app-language');
      }));
    } else if (key === 'focus' || key === 'home-layout') {
      stepsEl.querySelectorAll('[data-focus]').forEach((el) => {
        el.addEventListener('click', () => {
          ob.focus = el.dataset.focus;
          ob.startingSections = defaultStartingSections(ob.focus);
          ob.homeLayoutExplicit = false;
          ctx.applyGoalPreset?.(ob.focus, { source: 'onboarding-preview' });
          applyFocusLive();
          render();
        });
      });
      stepsEl.querySelectorAll('[data-focus-section]').forEach((button) => {
        button.addEventListener('click', () => {
          const sections = startingSectionsForFocus();
          const key = button.dataset.focusSection;
          if (sections.has(key) && sections.size > 1) sections.delete(key);
          else sections.add(key);
          applyFocusLive();
          render();
        });
      });
      stepsEl.querySelectorAll('[data-home-layout-pick]').forEach((el) => {
        el.addEventListener('click', () => {
          ob.homeLayout = el.dataset.homeLayoutPick;
          ob.homeLayoutExplicit = true;
          ctx.applyHomeLayout?.(ob.homeLayout);
          render();
        });
      });
    } else if (key === 'oo-question') {
      stepsEl.querySelectorAll('[data-oo-pick]').forEach((el) => {
        el.addEventListener('click', () => {
          ob.orderingChoice = el.dataset.ooPick;
          if (ob.orderingChoice === 'none') {
            ob.focus = 'loyalty';
            ob.startingSections = defaultStartingSections('loyalty');
            ob.homeLayoutExplicit = false;
          }
          applyOrderingLive();
          render();
        });
      });
    } else if (key === 'nav') {
      const cap = ob.orderingChoice === 'offer' ? 1 : 2;
      stepsEl.querySelectorAll('[data-nav-page]').forEach((el) => {
        el.addEventListener('click', () => {
          const k = el.dataset.navPage;
          if (ob.navPages.has(k)) ob.navPages.delete(k);
          else if (ob.navPages.size < cap) ob.navPages.add(k);
          syncNavSlots();
          render();
        });
      });
      stepsEl.querySelectorAll('[data-nav-style-pick]').forEach((el) => {
        el.addEventListener('click', () => {
          ob.navStyle = el.dataset.navStylePick;
          ctx.applyNavStyle?.(ob.navStyle);
          render();
        });
      });
    }
  }

  /* ------------------------------------------------------------- finish */

  function finishOnboarding() {
    // The Business details editor page was removed — apply the confirmed
    // name/sector directly to the real brand chrome and industry signal.
    const name = ob.bizName.trim() || 'Your Business';
    ctx.setBrand?.(name, initials(name), '');
    const bound = document.querySelector('[data-bind-text=".app-page[data-page=\'home\'] .app-top-header .brand-text .name"]');
    if (bound) bound.value = name;
    const sectors = [...ob.sectors];
    const badge = document.querySelector('.app-page[data-page="home"] .category-badge');
    if (badge) {
      badge.textContent = sectors.length ? (sectors[1] ? `${sectors[0]} +${sectors.length - 1}` : sectors[0]) : '';
      badge.classList.toggle('hidden-slot', !sectors.length);
    }
    document.dispatchEvent(new CustomEvent('como:business-changed', {
      detail: { categories: sectors, category: sectors[0] || '' },
    }));

    const focus = ob.focus === 'ordering' ? 'ordering' : 'loyalty';
    ctx.applyGoalPreset?.(focus, { source: 'onboarding' });

    // Online ordering is now asked up front, independent of the chosen focus.
    // Provider/website choice moved to SCREENS > Menu, so offering here always
    // starts on native (Deliverect, sample menu until connected).
    if (ob.focus === 'ordering' || ob.orderingChoice === 'offer') ctx.setOrderingMode?.('native');
    else ctx.setOrderingMode?.('skip');
    applyFocusLive();

    syncNavSlots();
    ctx.applyHomeLayout?.(ob.homeLayout);
    ctx.applyNavStyle?.(ob.navStyle);
    // The nav-pages step only ever offers optional screens (Locations, About Us,
    // QR, Menu PDF) — Home, Rewards and More are mandatory on every route (and
    // Menu is mandatory on the online-ordering route, already guaranteed by
    // setOrderingMode above). Force More back on in case an earlier session left it off.
    ctx.applyScreenVisibility?.('more', true);

    applyPhoneLanguage();
    renderFinishSetupChecklist();
    closeOnboarding();
  }

  function closeOnboarding() {
    if (deviceFrame && deviceStage && deviceFrame.parentElement !== deviceStage) deviceStage.appendChild(deviceFrame);
    wizardEl.classList.add('sw-closing');
    setTimeout(() => {
      wizardEl.style.display = 'none';
      // Every completed onboarding route lands in Setup with the outstanding
      // Online Ordering editor already open in the dedicated third panel.
      if (ob.orderingChoice === 'none') {
        window.goToStep?.('branding');
      } else {
        goToFinishSetup();
        requestAnimationFrame(() => openSetupEditor('ordering'));
      }
    }, 480);
  }

  // ----------------------------------------------------- finish-setup page
  const setupOperational = {
    pages: [
      { key: 'home', label: 'Home', active: true },
      { key: 'rewards', label: 'Rewards', active: true },
      { key: 'menu', label: 'Order', active: true },
      { key: 'locations', label: 'Locations', active: true },
      { key: 'more', label: 'More', active: true },
    ],
  };

  function activePageNames() {
    return setupOperational.pages.filter((page) => page.active).map((page) => page.label);
  }

  function currentBusinessSummary() {
    const name = document.getElementById('phone-brand-name')?.textContent?.trim() || ob.bizName || 'Your Business';
    const category = document.querySelector('.category-badge')?.textContent?.trim() || [...ob.sectors][0] || 'Business';
    return name + ' • ' + category;
  }

  function renderFinishSetupChecklist() {
    const ordering = ctx.ordering || {};
    const connected = ordering.connected === true && ordering.onlineOrderingConnected !== false;
    let orderingStatus = 'Choose how customers order';
    if (connected && ordering.experience === 'website') {
      try {
        orderingStatus = 'Website ordering • ' + new URL(ordering.websiteUrl).hostname;
      } catch {
        orderingStatus = 'Website ordering • ' + ordering.websiteUrl;
      }
    } else if (connected) {
      orderingStatus = 'In-app ordering • Deliverect connected';
    }
    const items = {
      business: { done: true, status: currentBusinessSummary() },
      language: { done: true, status: languageSummary() },
      design: { done: true, status: 'Default visual foundation • Ready to customize' },
      focus: { done: true, status: ob.focus === 'ordering' ? 'Online Ordering' : 'Loyalty' },
      ordering: ob.orderingChoice === 'none'
        ? { done: true, status: 'Not offered • Enable anytime' }
        : connected
        ? { done: true, status: orderingStatus }
        : { done: false, status: 'Not connected', badge: 'Up next' },
      pages: { done: true, status: activePageNames().join(', ') },
    };
    const checklist = document.getElementById('fs-checklist');
    if (!checklist) return;
    let doneCount = 0;
    Object.entries(items).forEach(([key, info]) => {
      const row = checklist.querySelector('[data-fs-item="' + key + '"]');
      if (!row) return;
      if (info.done) doneCount++;
      row.classList.toggle('done', info.done);
      const status = row.querySelector('.fs-item-status');
      if (status) status.textContent = info.status;
      const badge = row.querySelector('.fs-item-badge');
      if (badge) { badge.hidden = !info.badge; badge.textContent = info.badge || ''; }
    });
    const total = Object.keys(items).length;
    const fill = document.getElementById('fs-progress-fill');
    if (fill) fill.style.width = (doneCount / total * 100) + '%';
    const count = document.getElementById('fs-progress-count');
    if (count) count.textContent = doneCount + ' of ' + total + ' done';
    const sgFill = document.getElementById('ssg-progress-fill');
    if (sgFill) sgFill.style.width = (doneCount / total * 100) + '%';
    const sgCount = document.getElementById('ssg-count');
    if (sgCount) sgCount.textContent = doneCount + ' of ' + total + ' done';
    const setupComplete = doneCount === total;
    document.querySelector('.finish-setup-page')?.classList.toggle('is-complete', setupComplete);
    const setupCard = document.getElementById('side-setup-guide-btn');
    setupCard?.classList.toggle('complete', setupComplete);
    const sgTitle = document.getElementById('ssg-title');
    if (sgTitle) sgTitle.textContent = setupComplete ? 'Setup Complete' : 'Setup guide';
    const pageTitle = document.getElementById('fs-page-title');
    if (pageTitle) pageTitle.textContent = setupComplete ? 'Setup Complete' : 'Finish setting up your app';
    const pageSub = document.getElementById('fs-page-sub');
    if (pageSub) pageSub.textContent = setupComplete
      ? 'Your app foundation is ready. Review or edit any setup item below.'
      : 'Setup already did the first part. Each step opens the part of your app it changes.';
  }

  function goToFinishSetup() {
    ctx.closeL3Panel?.();
    document.querySelectorAll('.cp-page').forEach((cp) => {
      cp.style.display = cp.id === 'cp-finish-setup' ? 'flex' : 'none';
    });
    document.querySelectorAll('.side-step').forEach((b) => b.classList.remove('active'));
    document.getElementById('side-setup-guide-btn')?.classList.add('active');
    document.querySelectorAll('.app-page').forEach((p) => p.classList.toggle('active', p.dataset.page === 'home'));
    document.querySelectorAll('.nav-item').forEach((n) => n.classList.remove('active'));
    document.body.classList.add('on-finish-setup');
    renderFinishSetupChecklist();
  }

  document.getElementById('side-setup-guide-btn')?.addEventListener('click', goToFinishSetup);

  function openSetupEditor(key) {
    if (key === 'design') {
      ctx.closeL3Panel?.();
      document.body.classList.remove('on-finish-setup');
      document.getElementById('side-setup-guide-btn')?.classList.remove('active');
      window.goToStep?.('branding');
      return;
    }
    const target = document.querySelector('[data-detail="setup-' + key + '"]');
    if (!target) return;
    document.querySelectorAll('#fs-checklist .fs-item').forEach((row) => row.classList.toggle('active', row.dataset.fsItem === key));
    hydrateSetupEditor(key);
    ctx.openL3Panel?.(target);
  }

  function renderPagesEditor() {
    const list = document.getElementById('fs-page-toggles');
    if (!list) return;
    list.innerHTML = setupOperational.pages.map((page) =>
      '<div class="fs-page-toggle"><span>' + esc(page.label) + '</span><span class="toggle' + (page.active ? ' on' : '') + '" role="switch" aria-checked="' + page.active + '" data-fs-page="' + page.key + '"></span></div>'
    ).join('');
    list.querySelectorAll('[data-fs-page]').forEach((toggle) => {
      toggle.addEventListener('click', () => {
        const page = setupOperational.pages.find((entry) => entry.key === toggle.dataset.fsPage);
        page.active = !page.active;
        toggle.classList.toggle('on', page.active);
        toggle.setAttribute('aria-checked', String(page.active));
        document.querySelectorAll('.nav-item[data-nav="' + page.key + '"]').forEach((item) => {
          item.hidden = !page.active;
          item.setAttribute('aria-hidden', String(!page.active));
        });
        if (page.key === 'locations' || page.key === 'more') ctx.applyScreenVisibility?.(page.key, page.active);
        if (page.key === 'menu' && !page.active) ctx.setMenuSlotMode?.('hidden');
        if (page.key === 'menu' && page.active) ctx.setMenuSlotMode?.(ob.focus === 'ordering' ? 'menu' : 'menu');
        renderFinishSetupChecklist();
        ctx.markDirty?.('setup-pages');
      });
    });
  }

  function selectOrderingEditorMode(mode) {
    document.querySelectorAll('[data-fs-ordering-mode]').forEach((option) => option.classList.toggle('selected', option.dataset.fsOrderingMode === mode));
    document.getElementById('fs-website-fields').hidden = mode !== 'website';
    document.getElementById('fs-link-target-field').hidden = mode !== 'website';
    document.getElementById('fs-connect-deliverect').hidden = mode !== 'in-app';
  }

  function hydrateSetupEditor(key) {
    if (key === 'business') {
      const name = document.getElementById('fs-business-name');
      const category = document.getElementById('fs-business-category');
      name.value = document.getElementById('phone-brand-name')?.textContent?.trim() || ob.bizName;
      category.value = document.querySelector('.category-badge')?.textContent?.trim() || [...ob.sectors][0] || 'Food & Drink';

    } else if (key === 'language') {
      const editor = document.getElementById('fs-language-editor');
      if (editor) {
        editor.innerHTML = languageSelectorMarkup();
        editor.querySelectorAll('[data-language-select]').forEach((button) => button.addEventListener('click', () => {
          toggleLanguageSelection(button.dataset.languageSelect);
          applyPhoneLanguage();
          renderFinishSetupChecklist();
          hydrateSetupEditor('language');
          ctx.markDirty?.('app-language');
        }));
      }
    } else if (key === 'focus') {
      document.querySelectorAll('[data-fs-focus]').forEach((card) => card.classList.toggle('selected', card.dataset.fsFocus === ob.focus));
    } else if (key === 'ordering') {
      const website = ctx.ordering?.experience === 'website';
      selectOrderingEditorMode(website ? 'website' : 'in-app');
      document.getElementById('fs-deliverect-status').textContent = ctx.ordering?.connected && !website ? '• Connected' : '• Not connected';
      document.getElementById('fs-website-url').value = ctx.ordering?.websiteUrl || '';
      document.getElementById('fs-link-target').value = ctx.ordering?.linkTarget || 'in-app';
    } else if (key === 'pages') {
      renderPagesEditor();
    }
  }

  document.getElementById('fs-business-name')?.addEventListener('input', (event) => {
    ob.bizName = event.target.value;
    ctx.setBrand?.(ob.bizName || 'Your Business', initials(ob.bizName), '');
    renderFinishSetupChecklist();
    ctx.markDirty?.('setup-business');
  });
  document.getElementById('fs-business-category')?.addEventListener('change', (event) => {
    ob.sectors = new Set([event.target.value]);
    COMBO_DEFS.sector.set = ob.sectors;
    const badge = document.querySelector('.category-badge');
    if (badge) {
      badge.textContent = event.target.value;
      badge.classList.remove('hidden-slot');
    }
    document.dispatchEvent(new CustomEvent('como:business-changed', { detail: { category: event.target.value, categories: [event.target.value] } }));
    renderFinishSetupChecklist();
    ctx.markDirty?.('setup-business');
  });
  document.querySelectorAll('[data-fs-focus]').forEach((card) => {
    card.addEventListener('click', () => {
      ob.focus = card.dataset.fsFocus;
      document.querySelectorAll('[data-fs-focus]').forEach((item) => item.classList.toggle('selected', item === card));
      ctx.applyGoalPreset?.(ob.focus, { source: 'setup-editor' });
      applyFocusLive();
      renderFinishSetupChecklist();
      ctx.markDirty?.('setup-focus');
    });
  });
  document.querySelectorAll('[data-fs-ordering-mode]').forEach((option) => {
    option.addEventListener('click', (event) => {
      if (event.target.closest('#fs-connect-deliverect')) return;
      selectOrderingEditorMode(option.dataset.fsOrderingMode);
    });
    option.addEventListener('keydown', (event) => {
      if (event.target !== option || !['Enter', ' '].includes(event.key)) return;
      event.preventDefault();
      selectOrderingEditorMode(option.dataset.fsOrderingMode);
    });
  });
  document.getElementById('fs-connect-deliverect')?.addEventListener('click', () => window.openSettings?.('online-ordering', ctx.ordering?.connected ? 'admin' : 'chooser'));
  document.getElementById('fs-ordering-save')?.addEventListener('click', () => {
    const mode = document.querySelector('[data-fs-ordering-mode].selected')?.dataset.fsOrderingMode;
    if (mode === 'website') {
      const raw = document.getElementById('fs-website-url').value.trim();
      const candidate = /^[a-z][a-z\d+.-]*:\/\//i.test(raw) ? raw : 'https://' + raw;
      let url;
      try { url = new URL(candidate); } catch { url = null; }
      if (!url || !url.hostname.includes('.')) {
        ctx.showToast?.('Enter a valid ordering website URL', { variant: 'error' });
        return;
      }
      Object.assign(ctx.ordering, {
        connected: true, onlineOrderingConnected: true, deliverectConnected: false,
        experience: 'website', orderingExperience: 'website', websiteUrl: url.toString(),
        orderingWebsiteUrl: url.toString(), linkTarget: document.getElementById('fs-link-target').value,
        orderingLinkTarget: document.getElementById('fs-link-target').value,
      });
      ctx.setOrderingMode?.('webview');
    } else {
      if (!ctx.ordering?.connected || ctx.ordering?.experience === 'website') {
        window.openSettings?.('online-ordering', 'chooser');
        return;
      }
      Object.assign(ctx.ordering, {
        connected: true, onlineOrderingConnected: true, deliverectConnected: true,
        experience: 'in-app', orderingExperience: 'in-app',
      });
      ctx.setOrderingMode?.('native');
    }
    document.dispatchEvent(new CustomEvent('como:ordering', { detail: { ordering: ctx.ordering, reason: 'saved' } }));
    renderFinishSetupChecklist();
    ctx.markDirty?.('online-ordering');
    ctx.showToast?.('Online ordering settings saved', { variant: 'success' });
  });

  document.querySelectorAll('#fs-checklist .fs-item').forEach((row) => {
    row.addEventListener('click', () => openSetupEditor(row.dataset.fsItem));
  });

  document.querySelectorAll('.setup-editor :is(.fs-editor-close, .cp-back)').forEach((button) => {
    button.addEventListener('click', () => {
      ctx.closeL3Panel?.();
      document.querySelectorAll('#fs-checklist .fs-item').forEach((row) => row.classList.remove('active'));
    });
  });

  document.addEventListener('como:setup-ordering-connected', () => {
    const experience = ctx.ordering?.experience;
    ob.orderingChoice = 'offer';
    const orderPage = setupOperational.pages.find((page) => page.key === 'menu');
    if (orderPage) orderPage.active = true;
    ctx.setOrderingMode?.(experience === 'website' ? 'webview' : 'native');
    renderFinishSetupChecklist();
    ctx.closeSettings?.();
    document.body.classList.remove('on-finish-setup');
    document.getElementById('side-setup-guide-btn')?.classList.remove('active');
    window.goToStep?.('branding');
    ctx.showToast?.('Online ordering connected • Setup complete!', { variant: 'success' });
  });
  document.addEventListener('como:ordering', (event) => {
    if (['restored', 'connected', 'website-connected', 'saved', 'disconnect'].includes(event.detail?.reason)) {
      if (event.detail?.ordering?.connected) {
        ob.orderingChoice = 'offer';
        const orderPage = setupOperational.pages.find((page) => page.key === 'menu');
        if (orderPage) orderPage.active = true;
      }
      renderFinishSetupChecklist();
      if (document.getElementById('l3-panel')?.contains(document.querySelector('[data-detail="setup-ordering"]'))) hydrateSetupEditor('ordering');
    }
  });
  // Any normal sidebar step click also leaves the finish-setup dashboard.
  document.querySelectorAll('.side-step[data-step]').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.body.classList.remove('on-finish-setup');
      document.getElementById('side-setup-guide-btn')?.classList.remove('active');
    });
  });

  nextBtn.addEventListener('click', () => {
    const seq = currentSequence();
    if (seq[ob.stepIndex] === 'focus') {
      ctx.applyGoalPreset?.(ob.focus, { source: 'onboarding' });
      applyFocusLive();
    }
    if (ob.stepIndex < seq.length - 1) { ob.stepIndex++; render(); }
    else finishOnboarding();
  });
  backBtn.addEventListener('click', () => { if (ob.stepIndex > 0) { ob.stepIndex--; render(); } });
  skipBtn.addEventListener('click', finishOnboarding);
  document.addEventListener('click', (e) => {
    if (ob.openCombo && !e.target.closest('[data-combo-trigger="' + ob.openCombo + '"]')) {
      ob.openCombo = null;
      render();
    }
  });

  // Boot: move the real phone into the wizard preview, then render step 1.
  // Guard against a stale re-init (e.g. a dev-server hot reload of this module
  // after the wizard already finished) re-grabbing the phone into a hidden wizard.
  const alreadyFinished = wizardEl.classList.contains('sw-closing') || wizardEl.style.display === 'none';
  if (!alreadyFinished && deviceFrame && phoneSlot) phoneSlot.appendChild(deviceFrame);
  if (!alreadyFinished) {
    // Keep the bottom nav to Home/Rewards/More until the ordering question
    // (step 3) decides whether an Order tab belongs there. Deferred a tick:
    // initProductExperience (which re-applies its own default screen
    // visibility, including Locations = on) boots after this module and would
    // otherwise immediately undo the hide.
    queueMicrotask(() => {
      ctx.applyScreenVisibility?.('locations', false, { dirty: false });
      ctx.setMenuSlotMode?.('hidden');
      ctx.setBrand?.(ob.bizName || 'Your Business', initials(ob.bizName), '');
      applyPhoneLanguage();
    });
  }
  render();
  applyPhoneLanguage();

  return {
    getAppLanguage: () => ob.appLanguage,
    getAdditionalLanguages: () => [...ob.additionalLanguages],
    exportAppLanguage: () => ({
      primary: ob.appLanguage,
      additional: [...ob.additionalLanguages],
      allowSwitching: ob.allowLanguageSwitching,
    }),
    importAppLanguage: (saved = {}) => {
      if (LANGUAGE_OPTIONS.some((language) => language.code === saved.primary)) ob.appLanguage = saved.primary;
      ob.additionalLanguages = Array.isArray(saved.additional)
        ? saved.additional.filter((code) => code !== ob.appLanguage && LANGUAGE_OPTIONS.some((language) => language.code === code))
        : [];
      ob.allowLanguageSwitching = !!saved.allowSwitching;
      applyPhoneLanguage();
      renderFinishSetupChecklist();
    },
  };
}

