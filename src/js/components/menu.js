import { throttle } from '../helpers.js';

export const menu = (() => {
  const init = () => {
    const body = document.body;
    const headerMenuToggles = document
      .querySelector('.header__menu-desktop')
      .querySelectorAll('.header__menu-toggle');
    const menuToggles = document.querySelectorAll('.header__menu-toggle');
    const headerInner = document.querySelector('.header__inner');
    const headerMenu = document.querySelector('.header__menu-desktop');
    const allContents = document.querySelectorAll('.header__menu-content');

    let activeButton = null;

    const isTablet = window.matchMedia('(min-width: 768px) and (max-width: 1439px)').matches;
    const isDesktop = window.matchMedia('(min-width: 1440px)').matches;

    if (isTablet) {
      headerMenuToggles.forEach((btn) => {
        btn.addEventListener('click', (event) => {
          event.preventDefault();
        });
      });
    }

    menuToggles.forEach((btn) => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.collapseTarget;
        const content = document.querySelector(
          `.header__menu-content[data-collapse-content="${target}"]`
        );

        if (activeButton === btn) {
          btn.classList.remove('active');
          if (isDesktop) {
            headerInner.classList.remove('active');
            headerMenu.classList.remove('active');
          }

          allContents.forEach((c) => c.classList.remove('active'));
          activeButton = null;
          // body.classList.remove('menu-active');
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

    // const onResize = throttle(() => {
    //   headerInner.classList.remove('active');
    //   headerMenu.classList.remove('active');
    //   menuToggles.forEach((b) => b.classList.remove('active'));
    //   allContents.forEach((c) => c.classList.remove('active'));
    //   activeButton = null;
    // }, 200);

    // window.addEventListener('resize', onResize);
  };

  return { init };
})();
