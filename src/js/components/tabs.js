export const tabs = (() => {
  const init = () => {
    const tabButtons = document.querySelectorAll('.tabs.hidden-desktop .tab-button');
    const tabItemsLaptop = document.querySelectorAll('.tab-content-laptop .tab-content__item');

    tabButtons.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        tabButtons.forEach((b) => b.setAttribute('aria-expanded', 'false'));
        btn.setAttribute('aria-expanded', 'true');

        tabItemsLaptop.forEach((tab, i) => {
          if (i === index) {
            tab.setAttribute('aria-expanded', 'true');
          } else {
            tab.setAttribute('aria-expanded', 'false');
          }
        });
      });
    });

    if (tabButtons.length) {
      tabButtons[0].click();
    }
  };

  return {
    init
  };
})();
