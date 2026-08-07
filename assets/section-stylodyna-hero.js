/**
 * StyloDyna Hero 3-Slide Carousel Engine & Header Scroll Observer
 */
(() => {
  const initHeaderScroll = () => {
    const headerWrapper = document.querySelector('.header-wrapper--transparent');
    if (!headerWrapper) return;

    const onScroll = () => {
      if (window.scrollY > 40) {
        headerWrapper.classList.add('is-scrolled');
      } else {
        headerWrapper.classList.remove('is-scrolled');
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  };

  const initHeroSlider = () => {
    const heroSection = document.querySelector('.stylodyna-hero');
    if (!heroSection) return;

    const slides = heroSection.querySelectorAll('.stylodyna-hero__slide');
    const dots = heroSection.querySelectorAll('.stylodyna-hero__dot');
    const prevBtn = heroSection.querySelector('.stylodyna-hero__arrow-btn--prev');
    const nextBtn = heroSection.querySelector('.stylodyna-hero__arrow-btn--next');

    if (slides.length <= 1) return;

    let currentIndex = 0;
    let timer = null;
    let isPaused = false;
    const interval = 6000;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const goToSlide = (index) => {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.classList.add('is-active');
        } else {
          slide.classList.remove('is-active');
        }
      });

      dots.forEach((dot, i) => {
        if (i === index) {
          dot.classList.add('is-active');
          dot.setAttribute('aria-selected', 'true');
        } else {
          dot.classList.remove('is-active');
          dot.setAttribute('aria-selected', 'false');
        }
      });

      currentIndex = index;
    };

    const nextSlide = () => {
      const nextIndex = (currentIndex + 1) % slides.length;
      goToSlide(nextIndex);
    };

    const prevSlide = () => {
      const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
      goToSlide(prevIndex);
    };

    const startAutoplay = () => {
      if (prefersReducedMotion || isPaused) return;
      stopAutoplay();
      timer = setInterval(nextSlide, interval);
    };

    const stopAutoplay = () => {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    };

    // Event Listeners
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        prevSlide();
        startAutoplay();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        nextSlide();
        startAutoplay();
      });
    }

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        goToSlide(i);
        startAutoplay();
      });
    });

    // Hover & Focus Pause
    heroSection.addEventListener('mouseenter', () => {
      isPaused = true;
      stopAutoplay();
    });

    heroSection.addEventListener('mouseleave', () => {
      isPaused = false;
      startAutoplay();
    });

    heroSection.addEventListener('focusin', () => {
      isPaused = true;
      stopAutoplay();
    });

    heroSection.addEventListener('focusout', () => {
      isPaused = false;
      startAutoplay();
    });

    // Touch Swipe Support
    let touchStartX = 0;
    let touchEndX = 0;

    heroSection.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    heroSection.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) {
        nextSlide();
        startAutoplay();
      } else if (touchEndX - touchStartX > 50) {
        prevSlide();
        startAutoplay();
      }
    }, { passive: true });

    // Start initial autoplay
    startAutoplay();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initHeaderScroll();
      initHeroSlider();
    });
  } else {
    initHeaderScroll();
    initHeroSlider();
  }
})();
