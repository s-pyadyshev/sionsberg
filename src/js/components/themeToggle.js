export const themeToggle = (function () {
  const init = function () {
    const themeToggleCheckbox = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    if (!themeToggleCheckbox) return;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      htmlElement.classList.add('contrast-theme');
      themeToggleCheckbox.checked = true;
    }

    themeToggleCheckbox.addEventListener('change', function () {
      if (this.checked) {
        htmlElement.classList.add('contrast-theme');
        localStorage.setItem('theme', 'dark');
      } else {
        htmlElement.classList.remove('contrast-theme');
        localStorage.setItem('theme', 'light');
      }
    });
  };

  return {
    init
  };
})();
