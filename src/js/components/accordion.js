export const accordion = (() => {
  const init = () => {
    const accordionToggles = document.querySelectorAll('.accordion__toggle');

    if (!accordionToggles.length) return;

    accordionToggles.forEach((toggle) => {
      toggle.addEventListener('click', () => {
        const currentAccordion = toggle.closest('.accordion-vertical');
        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';

        const accordionList = toggle.closest('.accordions');
        if (accordionList) {
          const allToggles = accordionList.querySelectorAll('.accordion__toggle');
          const allAccordions = accordionList.querySelectorAll('.accordion-vertical');
          
          allToggles.forEach((t) => t.setAttribute('aria-expanded', 'false'));
          allAccordions.forEach((acc) => acc.classList.remove('is-open'));
        }

        toggle.setAttribute('aria-expanded', !isExpanded);
        if (isExpanded) {
          currentAccordion.classList.remove('is-open');
        } else {
          currentAccordion.classList.add('is-open');
        }
      });
    });
  };

  return { init };
})();
