import { syncHomeSectionsFromDom } from './homeSectionsState.js';

const SPRING = { mass: 0.8, stiffness: 520, damping: 38 };
const DRAG_THRESHOLD = 6;

export function initReordering(ctx = {}) {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const springs = new Map();

  let liveRegion = document.getElementById('reorder-status');
  if (!liveRegion) {
    liveRegion = document.createElement('div');
    liveRegion.id = 'reorder-status';
    liveRegion.className = 'reorder-status';
    liveRegion.setAttribute('role', 'status');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    document.body.appendChild(liveRegion);
  }

  function announce(message) {
    liveRegion.textContent = '';
    requestAnimationFrame(() => { liveRegion.textContent = message; });
  }

  function setTranslate(row, y) {
    if (Math.abs(y) < 0.01) row.style.transform = '';
    else row.style.transform = `translate3d(0, ${y}px, 0)`;
  }

  function readTranslate(row) {
    const running = springs.get(row);
    if (running) return running.y;
    const transform = getComputedStyle(row).transform;
    if (!transform || transform === 'none') return 0;
    try {
      return new DOMMatrixReadOnly(transform).m42;
    } catch {
      return 0;
    }
  }

  function stopSpring(row) {
    const running = springs.get(row);
    if (!running) return { y: readTranslate(row), v: 0 };
    cancelAnimationFrame(running.frame);
    springs.delete(row);
    setTranslate(row, running.y);
    return { y: running.y, v: running.v };
  }

  /**
   * A small, interruptible, display-synchronised spring. Retargeting an existing
   * spring preserves its current position and velocity; grabbing it cancels the
   * frame while leaving the presentation value under the pointer.
   */
  function springTo(row, target, options = {}) {
    if (reduceMotion.matches) {
      stopSpring(row);
      setTranslate(row, target);
      return;
    }

    const existing = springs.get(row);
    if (existing) {
      existing.target = target;
      return;
    }

    const state = {
      y: options.initialY ?? readTranslate(row),
      v: options.initialVelocity ?? 0,
      target,
      last: performance.now(),
      frame: 0,
    };
    springs.set(row, state);
    setTranslate(row, state.y);

    const tick = (now) => {
      if (springs.get(row) !== state) return;
      const dt = Math.min(Math.max((now - state.last) / 1000, 1 / 240), 1 / 30);
      state.last = now;
      const displacement = state.y - state.target;
      const force = (-SPRING.stiffness * displacement) - (SPRING.damping * state.v);
      state.v += (force / SPRING.mass) * dt;
      state.y += state.v * dt;
      setTranslate(row, state.y);

      if (Math.abs(state.y - state.target) < 0.2 && Math.abs(state.v) < 4) {
        springs.delete(row);
        setTranslate(row, state.target);
        return;
      }
      state.frame = requestAnimationFrame(tick);
    };
    state.frame = requestAnimationFrame(tick);
  }

  function captureRects(rows) {
    return new Map(rows.map((row) => [row, row.getBoundingClientRect()]));
  }

  function settleFromRects(rows, before, velocityRow = null, releaseVelocity = 0) {
    rows.forEach((row) => {
      stopSpring(row);
      row.style.transform = '';
    });
    const after = captureRects(rows);
    rows.forEach((row) => {
      const first = before.get(row);
      const last = after.get(row);
      if (!first || !last) return;
      const delta = first.top - last.top;
      if (Math.abs(delta) < 0.2) {
        row.style.transform = '';
        return;
      }
      springTo(row, 0, {
        initialY: delta,
        initialVelocity: row === velocityRow ? releaseVelocity : 0,
      });
    });
  }

  // ---------- Drag & reorder for widget rows ------------------
  function initReorderable(container, onReorder) {
    if (!container || container.dataset.reorderReady === 'true') return;
    container.dataset.reorderReady = 'true';

    let drag = null;

    function rows() {
      return [...container.querySelectorAll('.cp-widget-row:not(.cp-fixed-slot)')];
    }

    function rowLabel(row) {
      return row.querySelector('.w-name, .pc-item-name')?.textContent?.trim() || 'Widget';
    }

    function prepareHandles() {
      container.querySelectorAll('.cp-widget-row .handle').forEach((handle) => {
        handle.dataset.reorderNative = 'true';
        const row = handle.closest('.cp-widget-row');
        const fixed = row?.classList.contains('cp-fixed-slot');
        handle.setAttribute('role', 'button');
        handle.setAttribute('aria-roledescription', 'drag handle');
        if (fixed) {
          handle.setAttribute('aria-disabled', 'true');
          handle.setAttribute('tabindex', '-1');
          handle.setAttribute('aria-label', `${rowLabel(row)} has a fixed position`);
          return;
        }
        handle.removeAttribute('aria-disabled');
        handle.setAttribute('tabindex', '0');
        handle.setAttribute('aria-keyshortcuts', 'Alt+ArrowUp Alt+ArrowDown');
        handle.setAttribute('aria-label', `Reorder ${rowLabel(row)}. Hold Alt and press Up or Down Arrow.`);
      });
    }

    function moveWithKeyboard(handle, direction) {
      const row = handle.closest('.cp-widget-row');
      const liveRows = rows();
      const from = liveRows.indexOf(row);
      const to = Math.max(0, Math.min(liveRows.length - 1, from + direction));
      if (from < 0 || from === to) {
        announce(`${rowLabel(row)} is already ${direction < 0 ? 'first' : 'last'}.`);
        return;
      }

      const before = captureRects(liveRows);
      liveRows.forEach((item) => stopSpring(item));
      const reference = liveRows[to];
      if (from < to) reference.after(row);
      else reference.before(row);
      settleFromRects(liveRows, before);
      onReorder?.();
      ctx.markDirty?.();
      prepareHandles();
      handle.focus({ preventScroll: true });
      announce(`${rowLabel(row)} moved to position ${to + 1} of ${liveRows.length}.`);
    }

    let draggedRow = null;
    let nativeOrderChanged = false;

    function prepareNativeDrag() {
      rows().forEach((row) => {
        row.draggable = true;
        row.setAttribute('aria-grabbed', row === draggedRow ? 'true' : 'false');
      });
    }

    function pointerVelocity() {
      if (!drag || drag.history.length < 2) return 0;
      const recent = drag.history[drag.history.length - 1];
      const oldest = drag.history.find((point) => recent.time - point.time <= 90) || drag.history[0];
      const elapsed = Math.max(recent.time - oldest.time, 1);
      return ((recent.y - oldest.y) / elapsed) * 1000;
    }

    function updatePointer(event) {
      if (!drag || event.pointerId !== drag.pointerId) return;
      const delta = event.clientY - drag.startY;
      if (!drag.committed && Math.abs(delta) >= DRAG_THRESHOLD) drag.committed = true;
      if (!drag.committed) return;

      drag.history.push({ y: event.clientY, time: performance.now() });
      if (drag.history.length > 8) drag.history.shift();

      const y = drag.baseY + delta;
      setTranslate(drag.row, y);
      // Base the slot projection on the grabbed row's presentation position, not
      // merely its DOM index. That keeps a row re-grabbable while a prior settle
      // is still in flight and makes the same pointer travel deterministic.
      const projectedShift = Math.round(delta / Math.max(drag.extent, 1));
      drag.targetIndex = Math.max(0, Math.min(
        drag.liveRows.length - 1,
        drag.visualStartIndex + projectedShift,
      ));

      drag.liveRows.forEach((candidate, index) => {
        if (candidate === drag.row) return;
        let shift = 0;
        if (drag.startIndex < drag.targetIndex && index > drag.startIndex && index <= drag.targetIndex) {
          shift = -drag.extent;
        } else if (drag.startIndex > drag.targetIndex && index < drag.startIndex && index >= drag.targetIndex) {
          shift = drag.extent;
        }
        springTo(candidate, shift);
      });
    }

    function finishPointer(event, cancelled = false) {
      if (!drag || event.pointerId !== drag.pointerId) return;
      const current = drag;
      const releaseVelocity = cancelled ? 0 : pointerVelocity();
      const before = captureRects(current.liveRows);
      const from = current.startIndex;
      const to = cancelled || !current.committed ? from : current.targetIndex;

      current.liveRows.forEach((row) => {
        stopSpring(row);
        row.style.transform = '';
      });

      if (from !== to) {
        const reference = current.liveRows[to];
        if (from < to) reference.after(current.row);
        else reference.before(current.row);
      }

      current.row.classList.remove('dragging');
      if (current.handle.hasPointerCapture?.(current.pointerId)) {
        current.handle.releasePointerCapture(current.pointerId);
      }
      drag = null; // Input is available immediately while the spring settles.

      settleFromRects(current.liveRows, before, current.row, releaseVelocity);
      if (from !== to) {
        onReorder?.();
        ctx.markDirty?.();
        announce(`${rowLabel(current.row)} moved to position ${to + 1} of ${current.liveRows.length}.`);
      }
      prepareHandles();
    }

    container.addEventListener('pointerdown', (event) => {
      const handle = event.target.closest('.handle');
      if (!handle || !container.contains(handle) || event.button !== 0) return;
      const row = handle.closest('.cp-widget-row');
      if (!row || row.classList.contains('cp-fixed-slot')) return;
      // Native drag-and-drop supplies the direct row manipulation path. Keep
      // this smoother spring path for non-mouse pointer captures only.
      if (event.pointerType === 'mouse') return;
      event.preventDefault();

      const liveRows = rows();
      const visualRects = captureRects(liveRows);
      const carriedVelocity = springs.get(row)?.v || 0;
      liveRows.forEach((item) => {
        stopSpring(item);
        item.style.transform = '';
      });
      const layoutRects = captureRects(liveRows);
      liveRows.forEach((item) => {
        if (item === row) return;
        const delta = visualRects.get(item).top - layoutRects.get(item).top;
        if (Math.abs(delta) > 0.2) springTo(item, 0, { initialY: delta });
      });

      const rowStyle = getComputedStyle(row);
      const extent = layoutRects.get(row).height
        + parseFloat(rowStyle.marginTop || 0)
        + parseFloat(rowStyle.marginBottom || 0);
      const baseY = visualRects.get(row).top - layoutRects.get(row).top;
      const visualCenter = visualRects.get(row).top + visualRects.get(row).height / 2;
      const visualStartIndex = liveRows.reduce((index, candidate) => {
        if (candidate === row) return index;
        const rect = visualRects.get(candidate);
        return visualCenter > rect.top + rect.height / 2 ? index + 1 : index;
      }, 0);
      setTranslate(row, baseY);
      row.classList.add('dragging');
      handle.setPointerCapture?.(event.pointerId);

      drag = {
        row,
        handle,
        pointerId: event.pointerId,
        startY: event.clientY,
        startIndex: liveRows.indexOf(row),
        targetIndex: liveRows.indexOf(row),
        visualStartIndex,
        liveRows,
        layoutRects,
        extent,
        baseY,
        committed: false,
        history: [{ y: event.clientY, time: performance.now(), v: carriedVelocity }],
      };
    });

    container.addEventListener('pointermove', updatePointer);
    container.addEventListener('pointerup', (event) => finishPointer(event, false));
    container.addEventListener('pointercancel', (event) => finishPointer(event, true));
    container.addEventListener('lostpointercapture', (event) => {
      if (drag && event.pointerId === drag.pointerId) finishPointer(event, true);
    });

    container.addEventListener('dragstart', (event) => {
      const row = event.target.closest('.cp-widget-row:not(.cp-fixed-slot)');
      if (!row || !container.contains(row)) return;
      draggedRow = row;
      nativeOrderChanged = false;
      row.classList.add('dragging');
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('text/plain', row.querySelector('[data-widget-toggle]')?.dataset.widgetToggle || '');
      prepareNativeDrag();
    });

    container.addEventListener('dragover', (event) => {
      if (!draggedRow) return;
      const target = event.target.closest('.cp-widget-row:not(.cp-fixed-slot)');
      if (!target || target === draggedRow || !container.contains(target)) return;
      event.preventDefault();
      event.dataTransfer.dropEffect = 'move';
      const rect = target.getBoundingClientRect();
      const beforeOrder = rows();
      if (event.clientY < rect.top + rect.height / 2) target.before(draggedRow);
      else target.after(draggedRow);
      nativeOrderChanged ||= rows().some((row, index) => row !== beforeOrder[index]);
    });

    container.addEventListener('drop', (event) => {
      if (!draggedRow) return;
      event.preventDefault();
    });

    container.addEventListener('dragend', () => {
      if (!draggedRow) return;
      if (nativeOrderChanged) {
        onReorder?.();
        ctx.markDirty?.();
        announce(`${rowLabel(draggedRow)} moved to position ${rows().indexOf(draggedRow) + 1} of ${rows().length}.`);
      }
      draggedRow.classList.remove('dragging');
      draggedRow = null;
      nativeOrderChanged = false;
      prepareNativeDrag();
      prepareHandles();
    });

    container.addEventListener('keydown', (event) => {
      const handle = event.target.closest('.handle');
      if (!handle || !event.altKey || (event.key !== 'ArrowUp' && event.key !== 'ArrowDown')) return;
      event.preventDefault();
      moveWithKeyboard(handle, event.key === 'ArrowUp' ? -1 : 1);
    });

    new MutationObserver(() => {
      prepareHandles();
      prepareNativeDrag();
    }).observe(container, { childList: true, subtree: true });
    prepareHandles();
    prepareNativeDrag();
  }

  function reorderPhoneWidgets() {
    const homePage = document.querySelector('.app-page[data-page="home"]');
    if (!homePage) return;
    const container = document.querySelector('#cp-home .cp-master');
    if (!container) return;
    syncHomeSectionsFromDom();
    // The anchor must live INSIDE .home-layout-priority-stack — anchoring on the
    // old top-level `[data-empty="home"]` marker (a sibling of that wrapper)
    // would insert every reordered widget as a direct child of the home page,
    // leaking it outside the wrapper where it stays visible under every layout.
    const anchor = homePage.querySelector('.priority-stack-anchor') || homePage.querySelector('[data-empty="home"]');
    if (!anchor) return;
    const orderedKeys = Array.from(container.querySelectorAll('.cp-widget-row'))
      .map((row) => row.querySelector('.toggle'))
      .filter(Boolean)
      .map((toggle) => toggle.dataset.widgetToggle)
      // Reels is visually pinned above the phone header.
      .filter((key) => key !== 'menu-reels');
    let previous = anchor;
    orderedKeys.forEach((key) => {
      homePage.querySelectorAll(`[data-widget="${key}"]`).forEach((widget) => {
        // Only the Priority Stack's own copies of each widget get reordered —
        // the Bento Grid / Split-Header tiles reuse the same data-widget key for
        // visibility toggling (see home-master.html data-bind lists) but render
        // their own markup in place, so they must never be relocated.
        if (!widget.closest('.home-layout-priority-stack')) return;
        previous.parentNode.insertBefore(widget, previous.nextSibling);
        previous = widget;
      });
      // Keep the webview CTA pinned directly under the loyalty card (last profile element).
      if (key === 'profile') {
        const cta = homePage.querySelector('.home-layout-priority-stack [data-widget="webview-cta"]');
        if (cta) {
          previous.parentNode.insertBefore(cta, previous.nextSibling);
          previous = cta;
        }
      }
    });

    const focus = document.body.classList.contains('focus-ordering') ? 'ordering' : 'loyalty';
    const bentoHeroKey = focus === 'ordering' ? 'order-again' : 'profile';

    function syncLayout(containerSelector) {
      const container = homePage.querySelector(containerSelector);
      if (!container) return;
      orderedKeys.forEach((key) => {
        container.querySelectorAll(`[data-widget="${key}"]`).forEach((section) => {
          section.classList.toggle(
            'hero-anchored-section',
            containerSelector.includes('bento') && key === bentoHeroKey,
          );
          container.appendChild(section);
        });
      });
    }

    syncLayout('.home-layout-bento-grid .bento-grid');
    syncLayout('.home-layout-split-header-qsr .shq-card');
    document.dispatchEvent(new CustomEvent('como:home-sections-reordered'));
  }

  function reorderRewardsCards() {
    window.layoutRewardsStage?.();
  }

  initReorderable(document.querySelector('#cp-home .cp-master'), reorderPhoneWidgets);
  document.addEventListener('como:focus-changed', reorderPhoneWidgets);
  reorderPhoneWidgets();

  return { initReorderable, reorderPhoneWidgets, reorderRewardsCards };
}
