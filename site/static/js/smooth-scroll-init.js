const scroll = new SmoothScroll('a[href*="#"]');
const navLinks = document.querySelectorAll('#navbarSupportedContent a.nav-link');

navLinks.forEach(navLink => {
  navLink.addEventListener('click', () => {
    const toggler = document.querySelector('.navbar-toggler');
    if (!toggler || toggler.getAttribute('aria-expanded') !== 'true') return;

    ['navbarSupportedContent', 'header'].forEach(id => {
      const element = document.getElementById(id);
      if (!element) return;
      const collapse = bootstrap.Collapse.getOrCreateInstance(element, { toggle: false });
      // Bootstrap ignores hide() while opening, so finish opening before closing.
      if (element.classList.contains('collapsing')) {
        const closeAfterOpening = event => {
          if (event.target !== element) return;
          element.removeEventListener('shown.bs.collapse', closeAfterOpening);
          collapse.hide();
        };
        element.addEventListener('shown.bs.collapse', closeAfterOpening);
      } else {
        collapse.hide();
      }
    });
  });
});
