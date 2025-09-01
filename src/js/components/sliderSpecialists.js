import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

export const sliderSpecialists = (function () {
  const init = function () {
    const sliderSpecialists = new Swiper('.slider-specialists', {
      modules: [Navigation],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      slidesPerView: 2,
      spaceBetween: 20,
      breakpoints: {
        1440: { slidesPerView: 4 }
      }
    });
  };

  return {
    init
  };
})();
