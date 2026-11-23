export const DEFAULT_COMMENT_CONFIG = Object.freeze({
  repository: 'celiadeleon-como/new-app-builder-como',
  page: 'app-builder-p3',
  project: 'app-builder-p3',
  dataBranch: 'data',
  assetDirectory: 'comment-assets/app-builder-p3',
});

export function getCommentMode(search = window.location.search) {
  return new URLSearchParams(search).get('mode') === 'local' ? 'local' : 'github';
}

export function resolveCommentConfig(overrides = {}) {
  return { ...DEFAULT_COMMENT_CONFIG, ...overrides };
}
