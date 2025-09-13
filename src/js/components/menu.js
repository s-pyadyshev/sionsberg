import { throttle } from '../helpers.js';

export const menu = (() => {
  const init = () => {
    const body = document.body;
    const menuToggles = document.querySelectorAll('.header__menu-toggle');
    const headerInner = document.querySelector('.header__inner');
    const headerMenu = document.querySelector('.header__menu');
    const allContents = document.querySelectorAll('.header__nav-content');

    let activeButton = null;

    menuToggles.forEach((btn) => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.collapseTarget;
        const content = document.querySelector(
          `.header__nav-content[data-collapse-content="${target}"]`
        );

        if (activeButton === btn) {
          btn.classList.remove('active');
          headerInner.classList.remove('active');
          headerMenu.classList.remove('active');
          allContents.forEach((c) => c.classList.remove('active'));
          activeButton = null;
          body.classList.remove('menu-active');
          return;
        } else {
          body.classList.add('menu-active');
        }

        menuToggles.forEach((b) => b.classList.remove('active'));
        allContents.forEach((c) => c.classList.remove('active'));

        btn.classList.add('active');
        headerInner.classList.add('active');
        headerMenu.classList.add('active');
        if (content) {
          content.classList.add('active');
        }

        activeButton = btn;
      });
    });

    const onResize = throttle(() => {
      headerInner.classList.remove('active');
      headerMenu.classList.remove('active');
      menuToggles.forEach((b) => b.classList.remove('active'));
      allContents.forEach((c) => c.classList.remove('active'));
      activeButton = null;
    }, 200);

    window.addEventListener('resize', onResize);
  };

  return { init };
})();
