// Close both mobile menu layers before navigating to an in-page section.
window.portfolioCloseMenu = () => {
  const toggler = document.querySelector('.navbar-toggler');
  if (!toggler || toggler.getAttribute('aria-expanded') !== 'true') return Promise.resolve();

  return Promise.all(['navbarSupportedContent', 'header'].map(id => {
    const element = document.getElementById(id);
    if (!element) return Promise.resolve();
    return new Promise(resolve => {
      const collapse = bootstrap.Collapse.getOrCreateInstance(element, { toggle: false });
      const onHidden = event => {
        if (event.target !== element) return;
        element.removeEventListener('hidden.bs.collapse', onHidden);
        resolve();
      };
      element.addEventListener('hidden.bs.collapse', onHidden);
      if (element.classList.contains('collapsing')) {
        const closeAfterOpening = event => {
          if (event.target !== element) return;
          element.removeEventListener('shown.bs.collapse', closeAfterOpening);
          collapse.hide();
        };
        element.addEventListener('shown.bs.collapse', closeAfterOpening);
      } else if (element.classList.contains('show')) {
        collapse.hide();
      } else {
        element.removeEventListener('hidden.bs.collapse', onHidden);
        resolve();
      }
    });
  }));
};

let navigationRequest = 0;
document.querySelectorAll('#navbarSupportedContent a.nav-link, .footer_links a, .work-breadcrumb a, .work-detail__return').forEach(link => {
  link.addEventListener('click', async event => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const url = new URL(link.href, location.href);
    const samePage = url.origin === location.origin && url.pathname === location.pathname && url.search === location.search;
    const target = samePage && url.hash ? document.getElementById(decodeURIComponent(url.hash.slice(1))) : null;
    if (!target) {
      window.portfolioCloseMenu();
      return;
    }
    event.preventDefault();
    const request = ++navigationRequest;
    await window.portfolioCloseMenu();
    if (request !== navigationRequest) return;
    if (location.hash !== url.hash) history.pushState(null, '', url.hash);
    const hadTabindex = target.hasAttribute('tabindex');
    if (!hadTabindex) target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
    if (!hadTabindex) target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
    target.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
  });
});
