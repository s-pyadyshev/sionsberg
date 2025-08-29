import { throttle } from '../helpers.js';

export const headerToggle = (() => {
  const init = () => {
    const menuInners = document.querySelectorAll('.header__menu');

    setupResponsiveBehaviour(menuInners);

    window.addEventListener(
      'resize',
      throttle(() => {
        const isTabletNow = window.matchMedia('(min-width: 834px)').matches;
        const isDesktopNow = window.matchMedia('(min-width: 1440px)').matches;
        if (!isTabletNow) {
          setupResponsiveBehaviour(menuInners);
        } else if (isDesktopNow) {
          setupResponsiveBehaviour(menuInners);
        }
      }, 200)
    );

    menuInners.forEach((menuInner) => {
      const buttons = menuInner.querySelectorAll('.header__nav-toggle');

      buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
          const target = btn.dataset.collapseTarget;
          const content = menuInner.querySelector(
            `.header__nav-content[data-collapse-content="${target}"]`
          );
          if (!content) return;

          const isDesktop = window.matchMedia('(min-width: 834px)').matches;

          buttons.forEach((otherBtn) => {
            if (otherBtn !== btn) {
              const otherTarget = otherBtn.dataset.collapseTarget;
              const otherContent = menuInner.querySelector(
                `.header__nav-content[data-collapse-content="${otherTarget}"]`
              );

              if (otherContent && otherContent.classList.contains('active')) {
                otherContent.classList.remove('active');
                otherBtn.classList.remove('active');
              }

              if (!isDesktop) {
                setTimeout(() => {
                  if (content.classList.contains('active')) {
                    otherBtn.classList.add('inactive');
                    otherContent.classList.add('inactive');
                  } else {
                    setTimeout(() => {
                      otherBtn.classList.remove('inactive');
                      otherContent.classList.remove('inactive');
                    }, 150);
                  }
                }, 350);
              }
            }
          });
        });
      });
    });
  };

  function setupResponsiveBehaviour(menuInners) {
    const mq = window.matchMedia('(min-width: 834px)');
    const mq2 = window.matchMedia('(min-width: 1440px)');

    const apply = () => {
      menuInners.forEach((menuInner) => {
        const contents = menuInner.querySelectorAll('.header__item-content');
        contents.forEach((contentItem) => {
          if (!mq.matches) {
            contentItem.classList.add('active');
          } else if (mq2.matches){
            contentItem.classList.add('active');
          } else {
            contentItem.classList.remove('active');
          }
        });
      });
    };

    apply();
    mq.addEventListener('change', apply);
  }

  return { init };
})();
