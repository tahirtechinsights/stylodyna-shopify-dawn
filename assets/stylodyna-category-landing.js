/**
 * StyloDyna Category Landing Page System (CAT-UI-002G)
 * Unified JS controller for Department Landing Section Rails, Category Carousels, and Client Reviews Carousel
 */

// 1. CATEGORY RAIL CAROUSEL CONTROLLER
if (!customElements.get('stylodyna-category-carousel')) {
  customElements.define('stylodyna-category-carousel', class extends HTMLElement {
    constructor() {
      super();
      this.rail = this.querySelector('.stylodyna-category-carousel__rail');
      this.prevBtn = this.querySelector('.stylodyna-categories__nav-btn--prev');
      this.nextBtn = this.querySelector('.stylodyna-categories__nav-btn--next');
      this.pagination = this.querySelector('.stylodyna-categories__pagination');

      if (!this.rail) return;

      this.init();
    }

    init() {
      if (this.prevBtn) {
        this.prevBtn.addEventListener('click', () => this.scrollRail('prev'));
      }
      if (this.nextBtn) {
        this.nextBtn.addEventListener('click', () => this.scrollRail('next'));
      }

      this.rail.addEventListener('scroll', () => {
        this.updateButtonStates();
        this.syncPagination();
      }, { passive: true });

      this.updateState();

      if ('ResizeObserver' in window) {
        this.resizeObserver = new ResizeObserver(() => this.updateState());
        this.resizeObserver.observe(this.rail);
      } else {
        window.addEventListener('resize', () => this.updateState(), { passive: true });
      }
    }

    scrollRail(direction) {
      const card = this.rail.querySelector('.stylodyna-category-carousel__item');
      const cardWidth = card ? card.offsetWidth + 16 : 240;
      const visibleCount = Math.max(1, Math.floor(this.rail.clientWidth / cardWidth));
      const step = Math.max(cardWidth, visibleCount * cardWidth * 0.75);
      const targetScroll = direction === 'next' 
        ? this.rail.scrollLeft + step 
        : this.rail.scrollLeft - step;

      this.rail.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }

    updateState() {
      const hasOverflow = this.rail.scrollWidth > this.rail.clientWidth + 8;
      
      if (this.prevBtn) this.prevBtn.classList.toggle('is-visible', hasOverflow);
      if (this.nextBtn) this.nextBtn.classList.toggle('is-visible', hasOverflow);

      this.updateButtonStates();
      this.renderPagination(hasOverflow);
    }

    updateButtonStates() {
      if (!this.prevBtn && !this.nextBtn) return;

      const scrollLeft = Math.ceil(this.rail.scrollLeft);
      const maxScroll = this.rail.scrollWidth - this.rail.clientWidth;

      if (this.prevBtn) {
        this.prevBtn.disabled = scrollLeft <= 5;
      }
      if (this.nextBtn) {
        this.nextBtn.disabled = scrollLeft >= maxScroll - 5;
      }
    }

    renderPagination(hasOverflow) {
      if (!this.pagination) return;

      if (!hasOverflow) {
        this.pagination.classList.remove('is-visible');
        this.pagination.innerHTML = '';
        return;
      }

      const totalPages = Math.max(1, Math.ceil((this.rail.scrollWidth - 10) / this.rail.clientWidth));

      if (totalPages <= 1) {
        this.pagination.classList.remove('is-visible');
        this.pagination.innerHTML = '';
        return;
      }

      this.pagination.classList.add('is-visible');
      this.pagination.innerHTML = '';

      for (let i = 0; i < totalPages; i++) {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = `stylodyna-categories__dot ${i === 0 ? 'is-active' : ''}`;
        dot.setAttribute('aria-label', `Go to category page ${i + 1}`);
        dot.setAttribute('role', 'tab');
        dot.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
        dot.addEventListener('click', () => {
          this.rail.scrollTo({
            left: i * this.rail.clientWidth * 0.85,
            behavior: 'smooth'
          });
        });
        this.pagination.appendChild(dot);
      }
    }

    syncPagination() {
      if (!this.pagination) return;
      const dots = this.pagination.querySelectorAll('.stylodyna-categories__dot');
      if (!dots.length) return;

      const totalPages = dots.length;
      const scrollRatio = this.rail.scrollLeft / (this.rail.scrollWidth - this.rail.clientWidth);
      const activeIndex = Math.min(totalPages - 1, Math.max(0, Math.round(scrollRatio * (totalPages - 1))));

      dots.forEach((dot, idx) => {
        const isActive = idx === activeIndex;
        dot.classList.toggle('is-active', isActive);
        dot.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });
    }
  });
}

// 2. CLIENT REVIEWS TESTIMONIAL CAROUSEL CONTROLLER (3000ms AUTOPLAY)
if (!customElements.get('stylodyna-reviews-carousel')) {
  customElements.define('stylodyna-reviews-carousel', class extends HTMLElement {
    constructor() {
      super();
      this.grid = this.querySelector('.stylodyna-reviews-grid');
      this.pagination = this.querySelector('.stylodyna-reviews__pagination');
      this.autoplayInterval = 3000;
      this.timer = null;
      this.isPaused = false;

      if (!this.grid) return;

      this.init();
    }

    init() {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // Event Listeners for Pause / Resume
      this.addEventListener('mouseenter', () => this.pause());
      this.addEventListener('mouseleave', () => this.resume());
      this.addEventListener('focusin', () => this.pause());
      this.addEventListener('focusout', () => this.resume());

      this.grid.addEventListener('scroll', () => this.syncPagination(), { passive: true });
      this.grid.addEventListener('touchstart', () => this.pause(), { passive: true });
      this.grid.addEventListener('touchend', () => this.resume(), { passive: true });

      document.addEventListener('visibilitychange', () => {
        if (document.hidden) this.pause();
        else this.resume();
      });

      this.renderPagination();

      if (!prefersReducedMotion) {
        this.startAutoplay();
      }
    }

    startAutoplay() {
      this.stopAutoplay();
      this.timer = setInterval(() => {
        if (!this.isPaused) {
          this.advance();
        }
      }, this.autoplayInterval);
    }

    stopAutoplay() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    }

    pause() {
      this.isPaused = true;
    }

    resume() {
      this.isPaused = false;
    }

    advance() {
      const maxScroll = this.grid.scrollWidth - this.grid.clientWidth;
      if (maxScroll <= 10) return;

      const card = this.grid.querySelector('.stylodyna-review-card');
      const step = card ? card.offsetWidth + 24 : 320;
      let targetLeft = this.grid.scrollLeft + step;

      if (targetLeft >= maxScroll - 10) {
        targetLeft = 0; // Infinite continuous loop back to start
      }

      this.grid.scrollTo({
        left: targetLeft,
        behavior: 'smooth'
      });
    }

    renderPagination() {
      if (!this.pagination) return;
      const cards = this.grid.querySelectorAll('.stylodyna-review-card');
      if (cards.length <= 1) return;

      this.pagination.innerHTML = '';
      cards.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = `stylodyna-categories__dot ${idx === 0 ? 'is-active' : ''}`;
        dot.setAttribute('aria-label', `Go to testimonial ${idx + 1}`);
        dot.addEventListener('click', () => {
          const card = cards[idx];
          if (card) {
            this.grid.scrollTo({
              left: card.offsetLeft - this.grid.offsetLeft,
              behavior: 'smooth'
            });
          }
        });
        this.pagination.appendChild(dot);
      });
    }

    syncPagination() {
      if (!this.pagination) return;
      const dots = this.pagination.querySelectorAll('.stylodyna-categories__dot');
      if (!dots.length) return;

      const scrollRatio = this.grid.scrollLeft / (this.grid.scrollWidth - this.grid.clientWidth || 1);
      const activeIndex = Math.min(dots.length - 1, Math.max(0, Math.round(scrollRatio * (dots.length - 1))));

      dots.forEach((dot, idx) => {
        dot.classList.toggle('is-active', idx === activeIndex);
        dot.setAttribute('aria-selected', idx === activeIndex ? 'true' : 'false');
      });
    }
  });
}
