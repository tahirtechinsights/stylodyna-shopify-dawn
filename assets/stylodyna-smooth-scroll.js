/**
 * StyloDyna Controlled Smooth Scroll (DECOR-005I)
 * Progressive enhancement for smooth 1000ms easeInOutCubic scroll transitions.
 */
document.addEventListener('DOMContentLoaded', () => {
  const ctaButtons = document.querySelectorAll(
    'a[href^="#featured-products"], a[href^="#shop-by-decor-collection"], .collection-hero__cta[href^="#"], .stylodyna-category-hero__btn[href^="#"]'
  );

  if (!ctaButtons.length) return;

  const easeInOutCubic = (t) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  ctaButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const href = button.getAttribute('href');
      if (!href || href === '#') return;

      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (!targetElement) return;

      // Prevent native instant jump
      e.preventDefault();

      // Accessibility: Check prefers-reduced-motion
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        targetElement.scrollIntoView();
        history.pushState(null, '', href);
        return;
      }

      // Dynamic destination with scrollMarginTop clearance
      const computedStyle = window.getComputedStyle(targetElement);
      const scrollMarginTop = parseFloat(computedStyle.scrollMarginTop) || 0;
      const targetRect = targetElement.getBoundingClientRect();
      const startY = window.scrollY;
      const targetY = startY + targetRect.top - scrollMarginTop;
      const distance = targetY - startY;

      if (Math.abs(distance) < 5) {
        history.pushState(null, '', href);
        return;
      }

      const duration = 1000; // 1000ms duration
      let startTime = null;
      let animationFrameId = null;

      const cancelAnimation = () => {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = null;
        }
        removeInterruptionListeners();
      };

      const handleUserInterruption = () => {
        cancelAnimation();
      };

      const addInterruptionListeners = () => {
        window.addEventListener('wheel', handleUserInterruption, { passive: true });
        window.addEventListener('touchstart', handleUserInterruption, { passive: true });
        window.addEventListener('keydown', handleUserInterruption, { passive: true });
      };

      const removeInterruptionListeners = () => {
        window.removeEventListener('wheel', handleUserInterruption);
        window.removeEventListener('touchstart', handleUserInterruption);
        window.removeEventListener('keydown', handleUserInterruption);
      };

      const animateScroll = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easeProgress = easeInOutCubic(progress);

        window.scrollTo(0, startY + distance * easeProgress);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animateScroll);
        } else {
          removeInterruptionListeners();
          history.pushState(null, '', href);
        }
      };

      addInterruptionListeners();
      animationFrameId = requestAnimationFrame(animateScroll);
    });
  });
});
