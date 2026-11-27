const sampleMember = {
  firstName: 'User',
  lastName: '',
  phone: '+971 50 123 4567',
  dob: '12 June',
  tier: 'Bronze',
};

const profileLoyaltyState = {
  memberState: 'loggedin',
  greetingTemplate: 'Welcome back!',
  guestTitle: 'Welcome!',
  guestSubheading: 'Log in to see your points & rewards',
  progressStyle: 'ring',
  showPointsBalance: true,
  showProgress: true,
  enabled: true,
};

export function readProfileEditorText(element) {
  if (!element) return '';
  return [...element.childNodes].map((node) => {
    if (node.nodeType === Node.TEXT_NODE) return node.textContent;
    if (node.nodeType === Node.ELEMENT_NODE && node.classList.contains('var-token')) {
      return `{${node.dataset.key}}`;
    }
    return node.textContent;
  }).join('').replace(/\u200B/g, '');
}

export function hydrateProfileLoyaltyState() {
  const editor = document.querySelector('[data-detail="profile"]');
  if (!editor) return profileLoyaltyState;
  const greeting = editor.querySelector('[data-vars="true"]');
  const guestInputs = editor.querySelectorAll('[data-state-section="guest"] input[data-bind-text]');
  const progress = editor.querySelector('[data-bind-radio="loyalty-layout"].active');
  const switches = [...editor.querySelectorAll('.cp-toggle-row')];
  const byLabel = (label) => switches.find((row) => row.querySelector('.lbl')?.textContent.trim() === label)?.querySelector('.toggle');
  const profileToggle = document.querySelector('[data-widget-toggle="profile"]');
  profileLoyaltyState.greetingTemplate = readProfileEditorText(greeting) || profileLoyaltyState.greetingTemplate;
  profileLoyaltyState.guestTitle = guestInputs[0]?.value || profileLoyaltyState.guestTitle;
  profileLoyaltyState.guestSubheading = guestInputs[1]?.value || profileLoyaltyState.guestSubheading;
  profileLoyaltyState.progressStyle = progress?.dataset.value || profileLoyaltyState.progressStyle;
  profileLoyaltyState.showPointsBalance = byLabel('Points balance')?.classList.contains('on') !== false;
  profileLoyaltyState.showProgress = byLabel('Progress to next reward')?.classList.contains('on') !== false;
  profileLoyaltyState.enabled = profileToggle?.classList.contains('on') ?? true;
  profileLoyaltyState.memberState = document.body.dataset.memberPreview === 'guest' ? 'guest' : 'loggedin';
  return profileLoyaltyState;
}

export function updateProfileLoyaltyState(patch) {
  Object.assign(profileLoyaltyState, patch);
  document.dispatchEvent(new CustomEvent('como:profile-loyalty', { detail: { ...profileLoyaltyState } }));
}

export function getProfileLoyaltyView(enabled = profileLoyaltyState.enabled) {
  const greeting = profileLoyaltyState.greetingTemplate.replace(
    /\{(firstName|lastName|phone|dob|tier)\}/g,
    (_, key) => sampleMember[key] || '',
  );
  return {
    ...profileLoyaltyState,
    enabled,
    guest: profileLoyaltyState.memberState === 'guest',
    greeting,
    tier: sampleMember.tier,
  };
}

export { profileLoyaltyState };
