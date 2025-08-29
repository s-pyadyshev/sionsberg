import { menu } from './components/menu.js';
import { toggle } from './components/toggle.js';
import { headerToggle } from './pages/header-toggle.js';
import { sliderSpecialists } from './components/sliderSpecialists.js';
import { themeToggle } from './components/themeToggle.js';

window.addEventListener(
  'load',
  () => {
    toggle.init();
    menu.init();
    headerToggle.init();
    sliderSpecialists.init();
    themeToggle.init();

    document.querySelector('body').classList.add('page-loaded');
  },
  false
);
