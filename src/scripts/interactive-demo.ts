const overlay = document.getElementById('interactive-overlay') as HTMLElement | null;

if (overlay) {
  const openBtn = document.querySelector('[data-open-overlay]') as HTMLElement | null;
  const closeBtn = overlay.querySelector('.overlay-close') as HTMLElement | null;
  const nextBtn = overlay.querySelector('[data-next-step]') as HTMLElement | null;
  const step1 = overlay.querySelector('[data-step="1"]') as HTMLElement;
  const step2 = overlay.querySelector('[data-step="2"]') as HTMLElement;

  function openOverlay() {
    overlay!.classList.add('open');
    // overflow:hidden + scrollbar-gutter:stable = no layout shift
    document.body.style.overflow = 'hidden';
  }

  function closeOverlay() {
    overlay!.classList.remove('open');
    // Wait for CSS transition to finish before resetting steps
    overlay!.addEventListener('transitionend', () => {
      step1.hidden = false;
      step1.style.opacity = '';
      step2.hidden = true;
      document.body.style.overflow = '';
    }, { once: true });
  }

  openBtn?.addEventListener('click', openOverlay);
  closeBtn?.addEventListener('click', closeOverlay);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeOverlay();
  });

  nextBtn?.addEventListener('click', () => {
    step1.style.transition = 'opacity 200ms ease';
    step1.style.opacity = '0';
    setTimeout(() => {
      step1.hidden = true;
      step2.hidden = false;
      step2.style.opacity = '0';
      requestAnimationFrame(() => {
        step2.style.transition = 'opacity 200ms ease';
        step2.style.opacity = '1';
      });
    }, 200);
  });

  overlay.querySelector('[data-go-to-contact]')?.addEventListener('click', () => {
    window.location.href = '/contact';
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) {
      closeOverlay();
    }
  });
}
