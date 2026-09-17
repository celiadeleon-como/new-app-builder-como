/**
 * Guided flow — replaces the full-screen setup wizard.
 *
 * The sidebar is the stepper: every setup task and every app screen is one
 * step with its own completion state. First-time merchants follow the order
 * top to bottom; returning merchants click straight into any step.
 */

const STEPS = [
  { key: 'business', label: 'Business details', kind: 'setup' },
  { key: 'branding', label: 'Branding', kind: 'setup' },
  { key: 'online-ordering', label: 'Online ordering', kind: 'setup' },
  { key: 'home', label: 'Home', kind: 'screen' },
  { key: 'rewards', label: 'Rewards', kind: 'screen' },
  { key: 'locations', label: 'Locations', kind: 'screen' },
  { key: 'menu', label: 'Menu', kind: 'screen' },
  { key: 'more', label: 'More', kind: 'screen' },
  { key: 'publish', label: 'Review & publish', kind: 'publish' },
];

const FOCUS_LABELS = {
  loyalty: 'Lead with loyalty',
  ordering: 'Lead with ordering',
};

const FOCUS_ICONS = {
  loyalty: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"/></svg>',
  ordering: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 01-8 0"/></svg>',
};

export function initGuidedFlow(ctx) {
  const { showToast, markDirty } = ctx;

  const done = new Set();
  let homeVisited = false;
  let businessEdited = false;
  const flow = { current: 'home', focus: null, bizName: '', headline: '', country: '', category: '', categories: [], accent: '#3d40ff', font: 'sans-serif', published: false };

  const stepButtons = [...document.querySelectorAll('.side-step[data-step]')];
  const indexOf = (key) => STEPS.findIndex((s) => s.key === key);

  const REQUIRED_STEPS = ['business', 'branding', 'online-ordering', 'home'];

  function activeHomeWidgetCount() {
    return document.querySelectorAll('#cp-home [data-widget-toggle].on').length;
  }

  function setFieldError(input, errorId, message) {
    const error = document.getElementById(errorId);
    if (error) error.textContent = message;
    input?.setAttribute('aria-invalid', message ? 'true' : 'false');
  }

  function validateStep(key, { showErrors = false, focusFirst = false } = {}) {
    let firstInvalid = null;
    if (key === 'business') {
      const name = document.getElementById('gf-biz-name');
      const country = document.getElementById('gf-country');
      const nameMissing = !flow.bizName.trim();
      const countryMissing = !flow.country;
      if (showErrors || !nameMissing) setFieldError(name, 'gf-biz-name-error', nameMissing ? 'Enter your company name.' : '');
      if (showErrors || !countryMissing) setFieldError(country, 'gf-country-error', countryMissing ? 'Select your country.' : '');
      firstInvalid = nameMissing ? name : countryMissing ? country : null;
      if (focusFirst) firstInvalid?.focus();
      return !nameMissing && !countryMissing;
    }
    if (key === 'online-ordering') {
      const chosen = ctx.getOrderingMode?.();
      // "Not yet" is a real answer; native and web view also need their provider
      // or menu wired up before the step is genuinely done.
      const complete = ctx.isOrderingStepComplete ? ctx.isOrderingStepComplete() : Boolean(chosen);
      let message = 'Choose how customers place online orders.';
      if (chosen === 'native') message = 'Connect your online ordering provider to finish, or choose Not yet.';
      else if (chosen === 'webview') message = 'Add your menu web address to finish, or choose Not yet.';
      const error = document.getElementById('oo-choice-error');
      if (error && (showErrors || complete)) error.textContent = complete ? '' : message;
      document.getElementById('oo-choice')?.setAttribute('aria-invalid', complete ? 'false' : 'true');
      if (!complete && focusFirst) document.querySelector('#oo-choice [data-oo-mode]')?.focus();
      return complete;
    }
    if (key === 'home') {
      const valid = homeVisited && activeHomeWidgetCount() > 0;
      if (!valid && showErrors) showToast?.('Add at least one Home widget before publishing');
      if (!valid && focusFirst) document.querySelector('#cp-home [data-widget-toggle]')?.focus();
      return valid;
    }
    return true;
  }

  function syncDerivedCompletion() {
    REQUIRED_STEPS.filter((key) => key !== 'branding').forEach((key) => {
      if (validateStep(key)) done.add(key);
      else done.delete(key);
    });
    if (document.body.dataset.brandImported === 'true') done.add('branding');
  }

  function missingRequiredSteps() {
    const missing = REQUIRED_STEPS.filter((key) => (
      key === 'branding'
        ? !done.has('branding') && document.body.dataset.brandImported !== 'true'
        : !validateStep(key)
    ));
    return missing;
  }

  function updatePublishReadiness() {
    syncDerivedCompletion();
    const missing = missingRequiredSteps();
    const publishBtn = document.getElementById('gf-publish-btn');
    const hint = document.getElementById('gf-publish-hint');
    if (publishBtn) publishBtn.disabled = missing.length > 0;
    if (hint) {
      const labels = missing.map((key) => STEPS[indexOf(key)]?.label).filter(Boolean);
      hint.textContent = labels.length
        ? `Complete ${labels.join(', ')} to publish. Your draft stays saved while you work.`
        : 'Ready to publish. These content changes do not require app-store review.';
    }
  }

  /* ------------------------------------------------------------- routing */

  // Setup and publish steps have no matching phone page, so the preview stays
  // on Home while the merchant fills them in.
  function showSetupPage(key) {
    document.querySelectorAll('.cp-page').forEach((cp) => {
      cp.style.display = cp.id === 'cp-' + key ? 'flex' : 'none';
    });
    // Arriving at a step always starts at its top level, never inside a stale drill.
    window.closeL3Panel?.();
    document.querySelectorAll('.cp-master').forEach((m) => m.classList.remove('hide'));
    document.querySelectorAll('.cp-page .cp-detail').forEach((d) => d.classList.remove('show'));
    // The preview stays on the real Home screen throughout setup, so whatever the
    // merchant sees while choosing a focus and branding is what they keep.
    document.querySelectorAll('.app-page').forEach((p) => {
      p.classList.toggle('active', p.dataset.page === 'home');
    });
    document.querySelectorAll('.nav-item').forEach((n) => n.classList.remove('active'));
    const panel = document.getElementById('config-panel');
    if (panel) panel.scrollTop = 0;
  }

  function goToStep(key) {
    const step = STEPS[indexOf(key)];
    if (!step) return;
    flow.current = key;
    if (key === 'home') homeVisited = true;
    const onBusiness = key === 'business';
    const onOrdering = key === 'online-ordering';
    document.body.classList.toggle('phone-preview-blank', onBusiness && !businessEdited);
    // On business (post-edit) and initial ordering step, keep the phone in header-only mode
    // until the merchant commits an ordering choice that fills the preview.
    document.body.classList.toggle('phone-header-only', (onBusiness && businessEdited) || (onOrdering && !window.getOrderingMode?.()));
    document.body.classList.toggle('on-step-online-ordering', onOrdering);
    // The industry badge is only relevant while picking industries in step 1.
    document.body.classList.toggle('on-step-business', onBusiness);
    // Any navigation exits the "arrived from ordering to configure webview" state.
    if (key !== 'menu') document.body.classList.remove('oo-webview-from-step2');
    // Publish is the only step where every configured screen needs to be
    // visible together, so the main preview panel swaps for a gallery.
    document.body.classList.toggle('gf-publish-preview-active', key === 'publish');
    if (step.kind === 'screen') window.goToPage(key);
    else showSetupPage(key);
    if (key === 'publish') {
      updatePublishReadiness();
      renderReview();
      renderScreenPreviews();
    }
    render();
  }
  window.goToBrandingStep = () => goToStep('branding');
  window.goToStep = goToStep;

  /* ------------------------------------------------------------ rendering */

  // The footer used to always mean "next step" even when the merchant was two levels
  // deep inside a widget editor, so Back threw them onto an unrelated step. Footer and
  // breadcrumb now describe the level they are actually on.
  // A drill left open inside a hidden page must not count as the current depth.
  function currentPageEl() {
    return document.getElementById('cp-' + flow.current);
  }
  function openDrillEl() {
    const page = currentPageEl();
    if (!page) return null;
    return [...page.querySelectorAll('.cp-detail.show')].find((d) => !d.closest('#l3-body')) || null;
  }
  function openL3El() {
    return document.querySelector('#l3-body .cp-detail.show') || null;
  }
  function titleOf(el, fallback) {
    return el?.querySelector('.cp-detail-title')?.textContent?.trim() || fallback;
  }
  // The Menu step becomes a general page picker once ordering is deferred,
  // so its breadcrumb should match the sidebar's "Select screen" relabel.
  function stepLabel(step) {
    if (step.key === 'menu' && document.body.classList.contains('oo-mode-skip')) return 'Select screen';
    return step.label;
  }
  function exitOneLevel() {
    if (openL3El()) { window.closeL3Panel?.(); return true; }
    const drill = openDrillEl();
    if (drill) { window.closeDrill?.(drill.closest('.cp-page').id); return true; }
    return false;
  }

  function renderBreadcrumb(step, drill, l3) {
    const bar = document.getElementById('cp-breadcrumb');
    if (!bar) return;
    bar.innerHTML = '';
    const trail = [{ label: stepLabel(step), exit: 2 }];
    if (drill) trail.push({ label: titleOf(drill, 'Widget'), exit: 1 });
    if (l3) trail.push({ label: titleOf(l3, 'Item'), exit: 0 });

    trail.forEach((node, i) => {
      if (i > 0) {
        const sep = document.createElement('span');
        sep.className = 'cp-crumb-sep';
        sep.textContent = '›';
        bar.appendChild(sep);
      }
      const isLast = i === trail.length - 1;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'cp-crumb-item' + (isLast ? ' current' : '');
      btn.textContent = node.label;
      btn.title = node.label;
      if (!isLast) {
        btn.addEventListener('click', () => {
          for (let hops = trail.length - 1 - i; hops > 0; hops -= 1) exitOneLevel();
        });
      }
      bar.appendChild(btn);
    });

    const level = document.createElement('span');
    level.className = 'cp-crumb-level';
    level.textContent = l3 ? 'Item'
      : drill ? 'Widget'
        : step.kind === 'screen' ? 'Screen'
          : step.kind === 'publish' ? 'Publish' : 'Setup';
    bar.appendChild(level);
  }

  function render() {
    syncDerivedCompletion();
    stepButtons.forEach((btn) => {
      const key = btn.dataset.step;
      btn.classList.toggle('done', done.has(key));
      btn.classList.toggle('active', key === flow.current);
      btn.setAttribute('aria-current', key === flow.current ? 'step' : 'false');
    });

    const position = indexOf(flow.current);
    const step = STEPS[position];
    if (!step) return;
    const drill = openDrillEl();
    const l3 = openL3El();
    renderBreadcrumb(step, drill, l3);

    const countEl = document.getElementById('gf-step-count');
    if (countEl) countEl.textContent = `Step ${position + 1} of ${STEPS.length}`;

    const nextBtn = document.getElementById('gf-step-next');
    const nextLabel = document.getElementById('gf-step-next-label');
    const backBtn = document.getElementById('gf-step-back');
    const backLabel = document.getElementById('gf-step-back-label');

    if (drill || l3) {
      const parentLabel = l3 ? titleOf(drill, stepLabel(step)) : stepLabel(step);
      if (backLabel) backLabel.textContent = `Back to ${parentLabel}`;
      if (backBtn) backBtn.style.visibility = '';
      if (nextLabel) nextLabel.textContent = 'Done';
      if (nextBtn) nextBtn.style.display = '';
      return;
    }

    if (backLabel) backLabel.textContent = 'Back';
    if (backBtn) backBtn.style.visibility = position === 0 ? 'hidden' : '';
    if (nextLabel) nextLabel.textContent = flow.current === 'publish' ? 'Publish content changes' : 'Save & continue';
    if (nextBtn) nextBtn.style.display = position === STEPS.length - 1 ? 'none' : '';
  }

  document.addEventListener('como:navchange', render);
  document.addEventListener('click', (event) => {
    if (event.target.closest('[data-widget-toggle]')) {
      requestAnimationFrame(() => {
        updatePublishReadiness();
        render();
      });
    }
  });
  document.addEventListener('como:draft-dirty', (event) => {
    if (event.detail?.scope === 'submission') return;
    if (!flow.published) return;
    flow.published = false;
    done.delete('publish');
    const publish = document.getElementById('gf-publish-btn');
    const status = document.getElementById('gf-content-status');
    if (publish) {
      publish.textContent = 'Publish content changes';
      delete publish.dataset.state;
    }
    status?.setAttribute('data-state', 'draft');
    if (status) status.innerHTML = '<span class="gf-publish-status-dot"></span><span><b>Draft changes</b><small>Your live app has not changed yet.</small></span>';
    updatePublishReadiness();
  });
  document.addEventListener('como:ordering', () => {
    updatePublishReadiness();
    if (flow.current === 'publish') { renderReview(); renderScreenPreviews(); }
  });

  function renderReview() {
    const list = document.getElementById('gf-review-list');
    if (!list) return;
    syncDerivedCompletion();
    const rows = STEPS.filter((s) => s.key !== 'publish').map((s) => {
      const required = REQUIRED_STEPS.includes(s.key);
      if (s.kind === 'screen' && s.key !== 'home') {
        const included = ctx.getScreenState?.(s.key) !== false;
        return { ...s, ready: included, required: false, status: included ? 'Using proven layout' : 'Not in app', action: included ? 'Review' : 'Include' };
      }
      const ready = s.key === 'branding'
        ? done.has('branding') || document.body.dataset.brandImported === 'true'
        : validateStep(s.key);
      return { ...s, ready, required, status: ready ? 'Ready' : 'Missing', action: required && !ready ? 'Complete' : 'Edit' };
    });
    list.innerHTML = rows
      .map(
        (s) => {
          return `<div class="gf-review-row${s.ready ? ' done' : ''}">
          <span class="rv-tick" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></span>
          <span class="gf-review-name">${s.label}</span>
          <span class="gf-review-state ${s.status.toLowerCase().replace(/\s+/g, '-')}">${s.status}</span>
          <button class="gf-review-edit" data-review-go="${s.key}" type="button">${s.action}</button>
        </div>`;
        },
      )
      .join('');
    list.querySelectorAll('[data-review-go]').forEach((b) => {
      b.addEventListener('click', () => {
        goToStep(b.dataset.reviewGo);
      });
    });
  }

  // Publish is the only step where the merchant needs every configured screen
  // visible together, so each preview is a scaled clone of the live phone
  // frame with just its active page and nav highlight swapped.
  function renderScreenPreviews() {
    const strip = document.getElementById('gf-publish-preview');
    const sourceFrame = document.getElementById('device-frame');
    if (!strip || !sourceFrame) return;
    const included = STEPS.filter((s) => s.kind === 'screen' && (s.key === 'home' || ctx.getScreenState?.(s.key) !== false));
    strip.innerHTML = '';
    included.forEach((s) => {
      const frame = sourceFrame.cloneNode(true);
      frame.classList.add('gf-preview-frame');
      frame.setAttribute('aria-hidden', 'true');
      frame.querySelectorAll('[id]').forEach((el) => el.removeAttribute('id'));
      frame.querySelectorAll('.app-page').forEach((page) => {
        page.classList.toggle('active', page.dataset.page === s.key);
      });
      frame.querySelectorAll('.nav-item').forEach((item) => {
        item.classList.toggle('active', item.dataset.nav === s.key);
      });
      const wrap = document.createElement('div');
      wrap.className = 'gf-preview-frame-wrap';
      wrap.appendChild(frame);
      const item = document.createElement('div');
      item.className = 'gf-preview-item';
      const label = document.createElement('span');
      label.className = 'gf-preview-label';
      label.textContent = s.label;
      item.append(wrap, label);
      strip.appendChild(item);
    });
  }

  /* -------------------------------------------------------- step controls */

  stepButtons.forEach((btn) => {
    btn.addEventListener('click', () => goToStep(btn.dataset.step));
  });

  const nextBtn = document.getElementById('gf-step-next');
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (exitOneLevel()) return;
      if (!validateStep(flow.current, { showErrors: true, focusFirst: true })) {
        render();
        return;
      }
      done.add(flow.current);
      markDirty?.();
      const next = STEPS[indexOf(flow.current) + 1];
      if (next) goToStep(next.key);
      else render();
    });
  }

  const backBtn = document.getElementById('gf-step-back');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      if (exitOneLevel()) return;
      const prev = STEPS[indexOf(flow.current) - 1];
      if (prev) goToStep(prev.key);
    });
  }


  /* -------------------------------------------------------- welcome modal */

  // A short Pendo-ready orientation. It explains the mental model, then gets out
  // of the merchant's way so the first useful app stays comfortably under an hour.
  const stageTourView = (view, step = 'business') => {
    window.setResponsiveView?.(view, { persist: false });
    goToStep(step);
  };
  const TOUR_STEPS = [
    {
      target: '.side-nav', title: 'Follow the three setup steps',
      text: 'Complete Business, Online ordering, and Branding in order so Como can assemble a useful first draft.',
      before: () => stageTourView('edit', 'business'),
    },
    {
      target: '#config-panel', title: 'Give Como the essentials',
      text: 'Enter your business details here so the preview starts with the right identity and context.',
      before: () => stageTourView('edit', 'business'),
    },
    {
      target: '#device-frame', title: 'Check the live preview',
      text: 'Use Preview to verify the experience customers will see before you continue.',
      before: () => stageTourView('preview', 'business'),
    },
    {
      target: '.cp-step-foot', title: 'Continue when this step is ready',
      text: 'Move forward when the current step looks right; autosave keeps the draft recoverable.',
      before: () => stageTourView('edit', 'business'),
    },
    {
      target: '#side-settings-btn', title: 'Launch from Settings',
      text: 'Open App submission when you are ready for store launch so content publishing stays separate from Apple and Google review.',
      before: () => {
        stageTourView('edit', 'business');
        document.getElementById('side-settings-btn')?.scrollIntoView({ block: 'nearest', inline: 'center' });
      },
    },
  ];

  let tourBubble = null;
  let tourHighlight = null;
  let tourBadge = null;
  let tourActive = false;

  function clearTourChrome() {
    [tourBubble, tourHighlight, tourBadge].forEach((el) => el?.remove());
    tourBubble = tourHighlight = tourBadge = null;
  }

  function endTour(toStart) {
    tourActive = false;
    clearTourChrome();
    document.body.classList.remove('gf-touring');
    window.closeSettings?.();
    document.getElementById('settings-modal')?.classList.remove('open');
    window.closeL3Panel?.();
    window.closeDrill?.('cp-home');
    if (toStart) {
      window.setResponsiveView?.('edit', { persist: false });
      goToStep('business');
      showToast?.('Tour closed — this is your setup, go ahead and edit');
      requestAnimationFrame(() => document.getElementById('gf-biz-name')?.focus({ preventScroll: true }));
    }
  }

  function ensureTourChrome() {
    if (!tourBadge) {
      tourBadge = document.createElement('div');
      tourBadge.className = 'gf-tour-badge';
      tourBadge.innerHTML = '<span class="gf-tour-badge-dot"></span><span id="gf-tour-badge-text"></span>'
        + '<button class="gf-tour-badge-exit" type="button">Exit tour</button>';
      tourBadge.querySelector('.gf-tour-badge-exit').addEventListener('click', () => endTour(true));
      document.body.appendChild(tourBadge);
    }
  }

  function showTourStep(idx) {
    if (idx >= TOUR_STEPS.length) { endTour(true); return; }
    tourActive = true;
    document.body.classList.add('gf-touring');
    ensureTourChrome();

    const step = TOUR_STEPS[idx];
    try { step.before?.(); } catch { /* a step that can't be staged still narrates */ }

    // Staged steps open panels that animate in, so measuring on the next frame would
    // catch them mid-transition. Let them settle before positioning the bubble.
    const paint = () => {
      if (!tourActive) return;
      tourBubble?.remove();
      tourBubble = null;

      document.getElementById('gf-tour-badge-text').textContent = `Product tour · ${idx + 1} of ${TOUR_STEPS.length}`;

      const anchor = step.target.split(',').map((s) => document.querySelector(s.trim())).find((el) => {
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return r.width > 0 && r.height > 0;
      });
      if (!anchor) { showTourStep(idx + 1); return; }
      const rect = anchor.getBoundingClientRect();

      if (!tourHighlight) {
        tourHighlight = document.createElement('div');
        tourHighlight.className = 'gf-tour-highlight';
        document.body.appendChild(tourHighlight);
      }
      tourHighlight.style.top = `${rect.top}px`;
      tourHighlight.style.left = `${rect.left}px`;
      tourHighlight.style.width = `${rect.width}px`;
      tourHighlight.style.height = `${rect.height}px`;

      tourBubble = document.createElement('div');
      tourBubble.className = 'gf-tour-bubble';
      tourBubble.setAttribute('role', 'dialog');
      tourBubble.setAttribute('aria-modal', 'true');
      tourBubble.setAttribute('aria-labelledby', 'gf-tour-title');
      tourBubble.setAttribute('aria-describedby', 'gf-tour-description');
      tourBubble.innerHTML = `
        <div class="gf-tour-header" id="gf-tour-title">${step.title} <span class="gf-tour-count">${idx + 1} / ${TOUR_STEPS.length}</span></div>
        <div class="gf-tour-body" id="gf-tour-description">${step.text}</div>
        <div class="gf-tour-actions">
          <button class="gf-tour-exit" type="button">Exit tour</button>
          ${idx > 0 ? '<button class="gf-tour-prev" type="button">Back</button>' : ''}
          <button class="gf-tour-next gf-btn primary" type="button">${idx < TOUR_STEPS.length - 1 ? 'Next →' : 'Start building →'}</button>
        </div>
        <div class="gf-tour-dots">${TOUR_STEPS.map((_, i) => `<span class="gf-tour-dot${i === idx ? ' active' : ''}"></span>`).join('')}</div>
      `;
      document.body.appendChild(tourBubble);

      if (window.innerWidth <= 520) tourBubble.classList.add('is-mobile-sheet');

      const bw = tourBubble.offsetWidth;
      const bh = tourBubble.offsetHeight;
      const gap = 16;
      const margin = 12;
      let left;
      let arrowSide;

      if (window.innerWidth - rect.right >= bw + gap) {
        left = rect.right + gap;
        arrowSide = 'left';
      } else if (rect.left >= bw + gap) {
        left = rect.left - bw - gap;
        arrowSide = 'right';
      } else {
        left = Math.min(rect.right + gap, window.innerWidth - bw - margin);
        arrowSide = 'left';
      }
      let top = rect.top + rect.height / 2 - bh / 2;
      top = Math.max(margin, Math.min(top, window.innerHeight - bh - margin));
      left = Math.max(margin, Math.min(left, window.innerWidth - bw - margin));

      if (window.innerWidth > 520) {
        tourBubble.style.top = `${top}px`;
        tourBubble.style.left = `${left}px`;
      }
      tourBubble.classList.toggle('arrow-right', arrowSide === 'right');
      const arrowY = rect.top + rect.height / 2 - top;
      tourBubble.style.setProperty('--gf-arrow-y', `${Math.max(18, Math.min(arrowY, bh - 18))}px`);

      tourBubble.querySelector('.gf-tour-next').addEventListener('click', () => showTourStep(idx + 1));
      tourBubble.querySelector('.gf-tour-prev')?.addEventListener('click', () => showTourStep(idx - 1));
      tourBubble.querySelector('.gf-tour-exit').addEventListener('click', () => endTour(true));
      tourBubble.querySelector('.gf-tour-next')?.focus({ preventScroll: true });
    };

    if (step.before) setTimeout(paint, window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 180);
    else requestAnimationFrame(paint);
  }

  document.addEventListener('keydown', (e) => {
    if (!tourActive) return;
    if (e.key === 'Escape') {
      e.preventDefault();
      endTour(true);
      return;
    }
    if (e.key !== 'Tab' || !tourBubble) return;
    const controls = [...tourBubble.querySelectorAll('button:not([disabled])')];
    if (!controls.length) return;
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });

  const welcome = document.getElementById('gf-welcome');
  if (welcome) {
    welcome.classList.add('open');
    document.body.classList.add('gf-welcome-open');
    const close = (withTour) => {
      welcome.classList.remove('open');
      document.body.classList.remove('gf-welcome-open');
      goToStep('business');
      if (withTour) requestAnimationFrame(() => showTourStep(0));
    };
    document.getElementById('gf-welcome-start')?.addEventListener('click', () => close(true));
    document.getElementById('gf-welcome-skip')?.addEventListener('click', () => close(false));
  }
  window.startAppBuilderTour = () => {
    welcome?.classList.remove('open');
    document.body.classList.remove('gf-welcome-open');
    showTourStep(0);
  };

  /* ------------------------------------------------- business details step */

  function revealPhonePreview() {
    if (businessEdited) return;
    businessEdited = true;
    document.body.classList.remove('phone-preview-blank');
    document.body.classList.add('phone-header-only');
  }

  const nameInput = document.getElementById('gf-biz-name');
  if (nameInput) {
    nameInput.addEventListener('input', () => {
      revealPhonePreview();
      flow.bizName = nameInput.value;
      const name = flow.bizName || 'Your Business';
      const initials = name.trim().split(/\s+/).map((w) => w[0]).join('').slice(0, 2).toUpperCase();
      ctx.setBrand?.(name, initials || '?', flow.headline || (flow.focus ? FOCUS_LABELS[flow.focus] : ''));
      const bound = document.querySelector('[data-bind-text=".app-page[data-page=\'home\'] .app-top-header .brand-text .name"]');
      if (bound) bound.value = name;
      validateStep('business');
      markDirty?.();
      render();
    });
  }

  const headlineInput = document.getElementById('gf-headline');
  const brandingHeadlineInput = document.getElementById('gf-branding-headline');
  function setHeadline(value, source) {
    flow.headline = value;
    if (headlineInput && source !== headlineInput) headlineInput.value = value;
    if (brandingHeadlineInput && source !== brandingHeadlineInput) brandingHeadlineInput.value = value;
    const subtitle = document.getElementById('phone-brand-sub');
    if (subtitle) subtitle.textContent = value || 'Storefront headline';
    markDirty?.();
  }
  headlineInput?.addEventListener('input', () => { revealPhonePreview(); setHeadline(headlineInput.value, headlineInput); });
  brandingHeadlineInput?.addEventListener('input', () => setHeadline(brandingHeadlineInput.value, brandingHeadlineInput));

  document.getElementById('gf-country')?.addEventListener('change', (e) => {
    flow.country = e.target.value;
    validateStep('business');
    markDirty?.();
    render();
  });

  // Merchants can span industries (restaurant + convenience store), so this is a
  // capped multi-select rather than one choice.
  const MAX_CATEGORIES = 3;
  function renderCategories() {
    const chips = [...document.querySelectorAll('#gf-cat-row [data-cat]')];
    const atCap = flow.categories.length >= MAX_CATEGORIES;
    chips.forEach((c) => {
      const on = flow.categories.includes(c.dataset.cat);
      c.classList.toggle('selected', on);
      c.classList.toggle('disabled', !on && atCap);
      c.setAttribute('aria-pressed', on ? 'true' : 'false');
      c.disabled = !on && atCap;
    });
    const badge = document.querySelector('.app-page[data-page="home"] .category-badge');
    if (badge) {
      const [first, ...rest] = flow.categories;
      badge.textContent = first ? (rest.length ? `${first} +${rest.length}` : first) : '';
      badge.classList.toggle('hidden-slot', !first);
    }
    const hint = document.getElementById('gf-cat-hint');
    if (hint) {
      hint.textContent = atCap
        ? `You've picked ${MAX_CATEGORIES} of ${MAX_CATEGORIES}. Deselect one to choose a different industry.`
        : 'Pick every industry you operate in — a restaurant with a convenience store counts as both.';
    }
  }

  document.querySelectorAll('#gf-cat-row [data-cat]').forEach((chip) => {
    chip.addEventListener('click', () => {
      const cat = chip.dataset.cat;
      const idx = flow.categories.indexOf(cat);
      if (idx > -1) {
        flow.categories.splice(idx, 1);
      } else if (flow.categories.length < MAX_CATEGORIES) {
        flow.categories.push(cat);
      } else {
        showToast?.(`You can pick up to ${MAX_CATEGORIES} industries`);
        return;
      }
      flow.category = flow.categories[0] || '';
      renderCategories();
      emitBusinessChanged();
      markDirty?.();
    });
  });
  renderCategories();

  // Step 2 derives its "Recommended" badge from the industry picked here, so
  // Step 1's answers change the next step instead of being collected and dropped.
  function emitBusinessChanged() {
    document.dispatchEvent(new CustomEvent('como:business-changed', {
      detail: { categories: [...flow.categories], category: flow.category },
    }));
  }
  emitBusinessChanged();

  /* -------------------------------------------------------- branding step */

  function applyAccent(hex) {
    flow.accent = hex;
    document.body.style.setProperty('--p-accent', hex);
    window.syncColorVar?.('--p-accent', hex);
    document.querySelectorAll('#gf-accent-row [data-accent]').forEach((s) => {
      s.classList.toggle('selected', s.dataset.accent.toLowerCase() === hex.toLowerCase());
      s.setAttribute('aria-pressed', s.dataset.accent.toLowerCase() === hex.toLowerCase() ? 'true' : 'false');
    });
    markDirty?.();
  }
  document.querySelectorAll('#gf-accent-row [data-accent]').forEach((sw) => {
    sw.addEventListener('click', () => applyAccent(sw.dataset.accent));
  });
  document.getElementById('gf-accent-custom')?.addEventListener('input', (e) => applyAccent(e.target.value));

  const logoZone = document.getElementById('gf-logo-zone');
  const logoFile = document.getElementById('gf-logo-file');
  const logoResult = document.getElementById('gf-logo-result');
  const logoThumb = document.getElementById('gf-logo-thumb-img');
  const logoFilename = document.getElementById('gf-logo-filename');
  const logoControls = document.getElementById('gf-logo-controls');

  // The splash screen shows a custom image/GIF when uploaded, otherwise it
  // falls back to whatever logo is set above.
  let logoDataUrl = null;
  let splashImageDataUrl = null;

  function paintSplashMark() {
    const mark = document.getElementById('gf-splash-mark');
    if (!mark) return;
    const src = splashImageDataUrl || logoDataUrl;
    mark.classList.toggle('has-logo', !!src);
    mark.style.backgroundImage = src ? `url(${src})` : '';
    mark.style.backgroundSize = src ? 'cover' : '';
    mark.style.backgroundPosition = src ? 'center' : '';
    if (!src) mark.textContent = '?';
  }

  function paintLogoTargets(dataUrl) {
    logoDataUrl = dataUrl;
    document.querySelectorAll('.app-page .app-top-header .brand-mark, #brand-logo').forEach((el) => {
      if (!el) return;
      el.classList.toggle('has-logo', !!dataUrl);
      el.style.backgroundImage = dataUrl ? `url(${dataUrl})` : '';
      el.style.backgroundSize = dataUrl ? 'cover' : '';
      el.style.backgroundPosition = dataUrl ? 'center' : '';
      if (!dataUrl) el.textContent = el.id === 'brand-logo' ? '?' : '?';
    });
    paintSplashMark();
  }

  function showLogoResult(dataUrl, name) {
    if (logoThumb) logoThumb.src = dataUrl;
    if (logoFilename) logoFilename.textContent = name;
    if (logoResult) logoResult.style.display = '';
    if (logoZone) logoZone.style.display = 'none';
    if (logoControls) logoControls.hidden = false;
  }

  function clearLogoResult() {
    if (logoResult) logoResult.style.display = 'none';
    if (logoZone) logoZone.style.display = '';
    if (logoControls) logoControls.hidden = true;
    if (logoFile) logoFile.value = '';
    paintLogoTargets(null);
    markDirty?.();
    showToast?.('Logo removed');
  }

  function readLogoFile(file) {
    if (!file) return;
    if (!/^image\/(png|jpeg|jpg|webp)/i.test(file.type)) { showToast?.('Upload a PNG, JPG, or WEBP file.'); return; }
    if (file.size > 5 * 1024 * 1024) { showToast?.('This file exceeds the 5MB limit.'); return; }
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target.result;
      paintLogoTargets(dataUrl);
      showLogoResult(dataUrl, file.name);
      markDirty?.();
      showToast?.('Logo uploaded');
    };
    reader.readAsDataURL(file);
  }

  if (logoZone && logoFile) {
    logoZone.addEventListener('click', () => logoFile.click());
    logoZone.addEventListener('dragover', (e) => { e.preventDefault(); logoZone.classList.add('drag-over'); });
    logoZone.addEventListener('dragleave', () => logoZone.classList.remove('drag-over'));
    logoZone.addEventListener('drop', (e) => {
      e.preventDefault();
      logoZone.classList.remove('drag-over');
      readLogoFile(e.dataTransfer.files?.[0]);
    });
    logoFile.addEventListener('change', () => readLogoFile(logoFile.files?.[0]));
    document.getElementById('gf-logo-replace')?.addEventListener('click', () => logoFile.click());
    document.getElementById('gf-logo-remove')?.addEventListener('click', clearLogoResult);
  }

  // ---------- Splash screen: optional custom image/GIF, falls back to logo ----------
  const splashZone = document.getElementById('gf-splash-zone');
  const splashFile = document.getElementById('gf-splash-file');
  const splashResult = document.getElementById('gf-splash-result');
  const splashThumb = document.getElementById('gf-splash-thumb-img');
  const splashFilename = document.getElementById('gf-splash-filename');

  function showSplashResult(dataUrl, name) {
    if (splashThumb) splashThumb.src = dataUrl;
    if (splashFilename) splashFilename.textContent = name;
    if (splashResult) splashResult.style.display = '';
    if (splashZone) splashZone.style.display = 'none';
  }

  function clearSplashResult() {
    splashImageDataUrl = null;
    if (splashResult) splashResult.style.display = 'none';
    if (splashZone) splashZone.style.display = '';
    if (splashFile) splashFile.value = '';
    paintSplashMark();
    markDirty?.();
    showToast?.('Splash image removed — showing your logo instead');
  }

  function readSplashFile(file) {
    if (!file) return;
    if (!/^image\/(png|jpeg|jpg|webp|gif)/i.test(file.type)) { showToast?.('Upload a PNG, JPG, WEBP, or GIF file.'); return; }
    if (file.size > 5 * 1024 * 1024) { showToast?.('This file exceeds the 5MB limit.'); return; }
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target.result;
      splashImageDataUrl = dataUrl;
      paintSplashMark();
      showSplashResult(dataUrl, file.name);
      markDirty?.();
      showToast?.('Splash image uploaded');
    };
    reader.readAsDataURL(file);
  }

  if (splashZone && splashFile) {
    splashZone.addEventListener('click', () => splashFile.click());
    splashZone.addEventListener('dragover', (e) => { e.preventDefault(); splashZone.classList.add('drag-over'); });
    splashZone.addEventListener('dragleave', () => splashZone.classList.remove('drag-over'));
    splashZone.addEventListener('drop', (e) => {
      e.preventDefault();
      splashZone.classList.remove('drag-over');
      readSplashFile(e.dataTransfer.files?.[0]);
    });
    splashFile.addEventListener('change', () => readSplashFile(splashFile.files?.[0]));
    document.getElementById('gf-splash-replace')?.addEventListener('click', () => splashFile.click());
    document.getElementById('gf-splash-remove')?.addEventListener('click', clearSplashResult);
  }

  // Branding rows drill into their own third-panel editor (pencil icon, same
  // pattern as Rewards widgets) instead of an inline accordion.
  document.querySelectorAll('#brand-widget-list [data-brand-key]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      window.openDrill?.('cp-branding', el.dataset.brandKey);
    });
  });

  // Preview the splash screen on the phone only while its drill panel is open.
  const splashDetail = document.querySelector('[data-detail="brand-splash"]');
  const splashOverlay = document.getElementById('gf-splash-overlay');
  if (splashDetail && splashOverlay) {
    const syncSplashOverlay = () => { splashOverlay.hidden = !splashDetail.classList.contains('show'); };
    new MutationObserver(syncSplashOverlay).observe(splashDetail, { attributes: true, attributeFilter: ['class'] });
    syncSplashOverlay();
  }

  // Mark a Branding row "set up" (small dot) the first time the merchant
  // interacts with anything inside its drill.
  document.querySelectorAll('.cp-detail.branding-page[data-l3-drill]').forEach((detail) => {
    const key = detail.dataset.detail;
    const dot = document.querySelector('[data-brand-dot="' + key + '"]');
    const section = detail.querySelector('.cp-section');
    if (!dot || !section) return;
    const markSet = () => { dot.hidden = false; };
    section.addEventListener('input', markSet);
    section.addEventListener('change', markSet);
    section.addEventListener('click', (e) => {
      if (e.target.closest('.cp-radio, .cp-seg-btn')) markSet();
    });
  });


  document.querySelectorAll('#gf-font-row [data-font]').forEach((chip) => {
    chip.addEventListener('click', () => {
      flow.font = chip.dataset.font;
      document.querySelectorAll('#gf-font-row [data-font]').forEach((c) => {
        const selected = c === chip;
        c.classList.toggle('selected', selected);
        c.setAttribute('aria-pressed', selected ? 'true' : 'false');
      });
      const fontStacks = {
        'sans-serif': '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
        serif: 'Georgia, "Times New Roman", serif',
        mono: '"SFMono-Regular", Consolas, monospace',
        rounded: '"Arial Rounded MT Bold", "Trebuchet MS", sans-serif',
        slab: 'Rockwell, "Roboto Slab", Georgia, serif',
      };
      ctx.applyFontFamily?.(fontStacks[flow.font] || fontStacks['sans-serif']);
      markDirty?.();
    });
  });


  /* ------------------------------------------- app focus card (Home step) */
  /* --------------------------------------------------------- app focus step */

  function reflectFocus(goal) {
    flow.focus = goal === 'loyalty' || goal === 'ordering' ? goal : null;
    // The recap appears on more than one step, so every instance is kept in sync.
    document.querySelectorAll('.cp-focus-val').forEach((el) => {
      el.textContent = FOCUS_LABELS[flow.focus] || 'Not chosen yet';
    });
    document.querySelectorAll('.cp-focus-ic').forEach((el) => {
      el.innerHTML = FOCUS_ICONS[flow.focus] || '';
    });
    document.querySelectorAll('.cp-focus-menu [data-focus]').forEach((b) => {
      const selected = b.dataset.focus === flow.focus;
      b.classList.toggle('active', selected);
      b.setAttribute('aria-checked', selected ? 'true' : 'false');
    });
    document.body.classList.remove('focus-loyalty', 'focus-ordering', 'focus-blank');
    document.body.classList.add(flow.focus ? 'focus-' + flow.focus : 'focus-blank');
    validateStep('online-ordering');
    updatePublishReadiness();
    render();
  }

  document.addEventListener('como:ordering-mode', (event) => {
    validateStep('online-ordering');
    updatePublishReadiness();
    render();
  });

  document.addEventListener('como:focus-changed', (event) => {
    reflectFocus(event.detail?.goal);
    markDirty?.();
  });

  function requestFocus(goal) {
    window.requestGoalPreset?.(goal);
  }

  // App Focus step: big Celia-style cards. Picking one applies the focus and
  // advances to the next step, mirroring "select then Save & continue".
  document.querySelectorAll('#gf-focus-options [data-focus]').forEach((card) => {
    card.addEventListener('click', () => {
      requestFocus(card.dataset.focus);
    });
  });

  // Home and Branding both carry a recap so the merchant can switch focus without
  // going back a step. Wire every instance the same way.
  document.querySelectorAll('.cp-focus-recap').forEach((recap) => {
    const changeBtn = recap.querySelector('.cp-focus-change');
    const menu = recap.querySelector('.cp-focus-menu');
    if (!changeBtn || !menu) return;
    changeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const wasOpen = menu.classList.contains('open');
      document.querySelectorAll('.cp-focus-menu.open').forEach((m) => m.classList.remove('open'));
      menu.classList.toggle('open', !wasOpen);
      document.querySelectorAll('.cp-focus-change').forEach((button) => button.setAttribute('aria-expanded', 'false'));
      changeBtn.setAttribute('aria-expanded', !wasOpen ? 'true' : 'false');
    });
    menu.querySelectorAll('[data-focus]').forEach((b) => {
      b.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.remove('open');
        changeBtn.setAttribute('aria-expanded', 'false');
        requestFocus(b.dataset.focus);
      });
    });
  });
  document.addEventListener('click', () => {
    document.querySelectorAll('.cp-focus-menu.open').forEach((m) => m.classList.remove('open'));
    document.querySelectorAll('.cp-focus-change').forEach((button) => button.setAttribute('aria-expanded', 'false'));
  });

  /* -------------------------------------------------------- publish step */

  const publishBtn = document.getElementById('gf-publish-btn');
  publishBtn?.addEventListener('click', () => {
    if (missingRequiredSteps().length) {
      updatePublishReadiness();
      renderReview();
      return;
    }
    publishBtn.disabled = true;
    publishBtn.textContent = 'Publishing…';
    publishBtn.dataset.state = 'publishing';
    const status = document.getElementById('gf-content-status');
    status?.setAttribute('data-state', 'publishing');
    if (status) status.innerHTML = '<span class="gf-publish-status-dot"></span><span><b>Publishing content…</b><small>Your draft is being prepared for the live app.</small></span>';
    setTimeout(() => {
      flow.published = true;
      done.add('publish');
      publishBtn.textContent = 'Content published';
      publishBtn.dataset.state = 'published';
      status?.setAttribute('data-state', 'live');
      if (status) status.innerHTML = '<span class="gf-publish-status-dot"></span><span><b>Live content</b><small>Customers may need to reopen the app to see these changes.</small></span>';
      showToast?.('Content changes published — no store review was required');
      ctx.savePublishedVersion?.();
      render();
      document.dispatchEvent(new CustomEvent('como:draft-save'));
    }, 850);
  });

  document.getElementById('gf-open-submission-btn')?.addEventListener('click', () => {
    window.openSettings?.('app-submission');
  });

  window.applyGoalPreset?.('blank');
  reflectFocus(null);
  goToStep('home');
  homeVisited = false;

  function exportDraft() {
    return { ...flow, categories: [...flow.categories], done: [...done] };
  }

  function importDraft(saved = {}) {
    if (!saved || typeof saved !== 'object') return;
    const textFields = [
      ['gf-biz-name', 'bizName'],
      ['gf-headline', 'headline'],
      ['gf-branding-headline', 'headline'],
    ];
    textFields.forEach(([id, key]) => {
      const input = document.getElementById(id);
      if (input && typeof saved[key] === 'string') input.value = saved[key];
    });
    Object.assign(flow, saved, {
      categories: Array.isArray(saved.categories) ? saved.categories.slice(0, MAX_CATEGORIES) : [],
      published: false,
    });
    if (saved.country) {
      const country = document.getElementById('gf-country');
      if (country) country.value = saved.country;
    }
    renderCategories();
    applyAccent(saved.accent || '#3d40ff');
    if (saved.focus === 'loyalty' || saved.focus === 'ordering') window.applyGoalPreset?.(saved.focus);
    reflectFocus(saved.focus);
    (saved.done || []).filter((key) => key !== 'publish').forEach((key) => done.add(key));
    if (flow.bizName) {
      const initials = flow.bizName.trim().split(/\s+/).map((word) => word[0]).join('').slice(0, 2).toUpperCase();
      ctx.setBrand?.(flow.bizName, initials || '?', flow.headline || FOCUS_LABELS[flow.focus] || '');
    }
    setHeadline(flow.headline || '', null);
    updatePublishReadiness();
    render();
  }

  return { goToStep, getReadiness: () => ({ missing: missingRequiredSteps(), ready: missingRequiredSteps().length === 0 }), exportDraft, importDraft };
}
