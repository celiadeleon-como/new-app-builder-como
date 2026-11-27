const ID_MAP = {
  profile: 'profile_loyalty',
  'loyalty-qr': 'loyalty_qr',
  'active-rewards': 'active_rewards',
  'punch-card': 'punch_card',
  'order-again': 'order_again',
  'promo-cards': 'promotions',
  'menu-categories': 'menu_categories',
};

const DOM_MAP = Object.fromEntries(Object.entries(ID_MAP).map(([domId, id]) => [id, domId]));

let homeSections = [];

export function syncHomeSectionsFromDom() {
  homeSections = [...document.querySelectorAll('#cp-home .cp-master .cp-widget-row')]
    .map((row) => {
      const domId = row.querySelector('[data-widget-toggle]')?.dataset.widgetToggle;
      const id = ID_MAP[domId];
      if (!id) return null;
      return {
        id,
        domId,
        enabled: row.querySelector('[data-widget-toggle]')?.classList.contains('on') === true,
      };
    })
    .filter(Boolean);
  document.dispatchEvent(new CustomEvent('como:home-sections', { detail: [...homeSections] }));
  return homeSections;
}

export function moveHomeSection(id, targetIndex) {
  const current = homeSections.findIndex((section) => section.id === id);
  if (current < 0) return homeSections;
  const [section] = homeSections.splice(current, 1);
  homeSections.splice(Math.max(0, Math.min(targetIndex, homeSections.length)), 0, section);
  syncHomeSectionDomOrder();
  return homeSections;
}

export function setHomeSectionEnabled(id, enabled) {
  const section = homeSections.find((item) => item.id === id);
  if (!section) return;
  section.enabled = Boolean(enabled);
  document.dispatchEvent(new CustomEvent('como:home-sections', { detail: [...homeSections] }));
}

export function syncHomeSectionDomOrder() {
  const list = document.querySelector('#cp-home-widgets .cp-body');
  if (!list) return;
  homeSections.forEach((section) => {
    const row = list.querySelector(`[data-widget-toggle="${DOM_MAP[section.id]}"]`)?.closest('.cp-widget-row');
    if (row) list.appendChild(row);
  });
}

export function getHomeSections() {
  if (!homeSections.length) syncHomeSectionsFromDom();
  return homeSections;
}
