import { throttle } from '../helpers.js';

export const toggle = (() => {
  const init = () => {
    const collapseLinks = document.querySelectorAll('[data-collapse-target]');
    if (!collapseLinks.length) return;

    collapseLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        const collapseTarget = event.currentTarget.dataset.collapseTarget;
        if (!collapseTarget) return;

        const target = document.querySelector(`[data-collapse-content="${collapseTarget}"]`);
        if (!target) return;

        const opDelay = parseInt(event.currentTarget.dataset.openDelay, 10) || 0;
        const isActive = target.classList.contains('active');

        if (isActive) {
          hideElement(target);
        } else {
          showElement(target, opDelay);
        }

        document.querySelectorAll(`[data-collapse-target="${collapseTarget}"]`).forEach((btn) => {
          btn.classList.toggle('active', !isActive);
          btn.setAttribute('aria-expanded', !isActive);
        });
      });
    });

    // const onResize = throttle(() => {
    //   document.querySelectorAll('[data-collapse-content].active').forEach(hideElement);
    //   document
    //     .querySelectorAll('[data-collapse-target].active')
    //     .forEach((btn) => btn.classList.remove('active'));
    // }, 200);

    // window.addEventListener('resize', onResize);
  };

  function showElement(element, delay = 0) {
    if (delay > 0) {
      setTimeout(() => {
        element.classList.add('active');
      }, delay);
    } else {
      element.classList.add('active');
    }
  }

  function hideElement(element) {
    if (document.querySelector('.header__menu-desktop').classList.contains('active')) {
      const menuToggles = document.querySelectorAll('.header__menu-toggle');
      const allContents = document.querySelectorAll('.header__nav-content');
      const navToggles = document.querySelectorAll('.header__nav-toggle');

      // menuToggles.forEach((c) => c.classList.remove('active'));
      allContents.forEach((c) => c.classList.remove('active'));
      navToggles.forEach((c) => c.classList.remove('inactive'));
      navToggles.forEach((c) => c.classList.remove('active'));
    }
    element.classList.remove('active');
  }

  return { init, showElement, hideElement };
})();
