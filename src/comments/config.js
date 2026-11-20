export const DEFAULT_COMMENT_CONFIG = Object.freeze({
  repository: 'celiadeleon-como/new-app-builder-como',
  page: 'app-builder-p2',
  project: 'app-builder-p2',
  dataBranch: 'data',
  assetDirectory: 'comment-assets/app-builder-p2',
});

export function getCommentMode(search = window.location.search) {
  return new URLSearchParams(search).get('mode') === 'local' ? 'local' : 'github';
}

export function resolveCommentConfig(overrides = {}) {
  return { ...DEFAULT_COMMENT_CONFIG, ...overrides };
}
