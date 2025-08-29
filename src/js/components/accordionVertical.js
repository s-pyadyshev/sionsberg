export const accordionVertical = (() => {
  const init = () => {
    const accordionLists = document.querySelectorAll('.accordion-list');

    accordionLists.forEach((accordionList) => {
      const accordions = Array.from(accordionList.querySelectorAll('.accordion'));

      accordions.forEach((acc) => {
        const isOpen = acc.hasAttribute('open');
        acc.setAttribute('data-open', isOpen);
      });

      accordionList.addEventListener('click', (e) => {
        const summary = e.target.closest('.accordion__summary');
        if (!summary) return;

        e.preventDefault();
        e.stopPropagation();

        const currentAccordion = summary.parentElement;
        const isOpen = currentAccordion.getAttribute('data-open') === 'true';
        const currentIndex = accordions.indexOf(currentAccordion);

        accordions.forEach((acc) => {
          acc.removeAttribute('open');
          acc.setAttribute('data-open', 'false');
        });

        if (isOpen) {
          if (currentIndex === accordions.length - 1) {
            if (currentIndex > 0) {
              accordions[currentIndex - 1].setAttribute('open', '');
              accordions[currentIndex - 1].setAttribute('data-open', 'true');
            }
          } else {
            accordions[currentIndex + 1].setAttribute('open', '');
            accordions[currentIndex + 1].setAttribute('data-open', 'true');
          }
        } else {
          currentAccordion.setAttribute('open', '');
          currentAccordion.setAttribute('data-open', 'true');
        }
      });
    });
  };

  return { init };
})();
