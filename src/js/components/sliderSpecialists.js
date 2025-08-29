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
      slidesPerView: 4,
      spaceBetween: 20
    });
  };

  return {
    init
  };
})();
