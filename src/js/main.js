import { menu } from './components/menu.js';
import { toggle } from './components/toggle.js';
import { headerToggle } from './pages/header-toggle.js';
import { sliderSpecialists } from './components/sliderSpecialists.js';
import { themeToggle } from './components/themeToggle.js';
import { scrollspy } from './components/scrollspy.js';

window.addEventListener(
  'load',
  () => {
    toggle.init();
    menu.init();
    headerToggle.init();
    sliderSpecialists.init();
    themeToggle.init();
    scrollspy.init();

    function updateStickyShadow() {
      const scrollAreas = document.querySelectorAll('.wrapper-freeze .scroll-area');
      const stickyTh = document.querySelectorAll('.wrapper-freeze .scroll-area th.sticky-col');
      const stickyTd = document.querySelectorAll('.wrapper-freeze .scroll-area td.sticky-col');

      scrollAreas.forEach((scrollArea) => {
        const isScrollable = scrollArea.scrollWidth > scrollArea.clientWidth;

        if (isScrollable) {
          stickyTh.forEach((th) => {
            th.classList.add('has-shadow');
          });
          stickyTd.forEach((td) => {
            td.classList.add('has-shadow');
          });
        } else {
          stickyTh.forEach((th) => {
            th.classList.remove('has-shadow');
          });
          stickyTd.forEach((td) => {
            td.classList.remove('has-shadow');
          });
        }
      });
    }

    updateStickyShadow();

    document.querySelector('body').classList.add('page-loaded');
  },
  false
);
