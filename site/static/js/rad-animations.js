// Native details remain usable without JavaScript; enhance only their height change.
(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finishers = [];

  document.querySelectorAll('.work-process-detail').forEach(details => {
    const summary = details.querySelector('summary');
    if (!summary) return;
    let animation = null;
    let expanded = details.open;

    const finish = () => {
      if (animation) {
        animation.onfinish = null;
        animation.cancel();
        animation = null;
      }
      details.open = expanded;
      details.style.overflow = '';
      details.dataset.expanded = String(expanded);
      summary.setAttribute('aria-expanded', String(expanded));
    };
    finishers.push(finish);

    summary.addEventListener('click', event => {
      event.preventDefault();
      const startHeight = details.getBoundingClientRect().height;
      expanded = !expanded;
      if (animation) {
        animation.onfinish = null;
        animation.cancel();
      }
      details.dataset.expanded = String(expanded);
      summary.setAttribute('aria-expanded', String(expanded));
      if (reducedMotion.matches || !details.animate) {
        finish();
        return;
      }
      details.open = true;
      const style = getComputedStyle(details);
      const border = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
      const endHeight = expanded
        ? details.getBoundingClientRect().height
        : summary.getBoundingClientRect().height + border;
      details.style.overflow = 'hidden';
      animation = details.animate(
        [{ height: `${startHeight}px` }, { height: `${endHeight}px` }],
        { duration: 180, easing: 'cubic-bezier(0.2, 0, 0, 1)' }
      );
      animation.onfinish = finish;
    });
  });

  reducedMotion.addEventListener('change', () => finishers.forEach(finish => finish()));
  window.addEventListener('resize', () => finishers.forEach(finish => finish()));
})();
