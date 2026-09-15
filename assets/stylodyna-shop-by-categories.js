/**
 * StyloDyna Shop by Categories Intelligent Rail Controller (HOME-005D Approved Reference)
 * Native scroll rail handler featuring overflow detection, lateral side navigation,
 * dynamic pagination indicator, and pause/resume intelligent autoplay engine.
 */

if (!customElements.get('stylodyna-shop-by-categories')) {
  class StylodynaShopByCategories {
    constructor(container) {
      this.container = container;
      this.rail = container.querySelector('.stylodyna-categories__rail');
      this.prevBtn = container.querySelector('.stylodyna-categories__nav-btn--prev');
      this.nextBtn = container.querySelector('.stylodyna-categories__nav-btn--next');
      this.pagination = container.querySelector('.stylodyna-categories__pagination');

      if (!this.rail) return;

      this.enableAutoplay = container.dataset.enableAutoplay === 'true';
      this.autoplayInterval = (parseInt(container.dataset.autoplayInterval, 10) || 5) * 1000;
      this.resumeDelay = 8000; // 8 seconds delay after manual interaction
      
      this.autoplayTimer = null;
      this.resumeTimer = null;
      this.isUserInteracting = false;
      this.lastPageCount = 0;

      this.initEvents();
      this.updateState();
    }

    initEvents() {
      // Manual Arrow Controls
      if (this.prevBtn) {
        this.prevBtn.addEventListener('click', () => {
          this.scrollRail('prev');
          this.handleUserInteraction();
        });
      }

      if (this.nextBtn) {
        this.nextBtn.addEventListener('click', () => {
          this.scrollRail('next');
          this.handleUserInteraction();
        });
      }

      // Scroll Event Listener (Debounced for performance)
      let scrollTimeout;
      this.rail.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          this.updateButtonStates();
          this.updatePaginationSync();
        }, 40);
      }, { passive: true });

      // Pause on Hover & Focus
      this.container.addEventListener('mouseenter', () => this.pauseAutoplay());
      this.container.addEventListener('mouseleave', () => this.handleUserInteraction());
      this.container.addEventListener('focusin', () => this.pauseAutoplay());
      this.container.addEventListener('focusout', () => this.handleUserInteraction());

      // Touch & Manual Pointer Interaction
      this.rail.addEventListener('touchstart', () => this.handleUserInteraction(), { passive: true });
      this.rail.addEventListener('mousedown', () => this.handleUserInteraction(), { passive: true });

      // Page Visibility API Hook
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          this.pauseAutoplay();
        } else {
          this.handleUserInteraction();
        }
      });

      // ResizeObserver for dynamic rail overflow & state recalculation
      if (window.ResizeObserver) {
        const resizeObserver = new ResizeObserver(() => this.updateState());
        resizeObserver.observe(this.rail);
      } else {
        window.addEventListener('resize', () => this.updateState(), { passive: true });
      }
    }

    scrollRail(direction) {
      const card = this.rail.querySelector('.stylodyna-category-card__item');
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
      
      // Update Arrow Button Visibility
      if (this.prevBtn) this.prevBtn.classList.toggle('is-visible', hasOverflow);
      if (this.nextBtn) this.nextBtn.classList.toggle('is-visible', hasOverflow);

      this.updateButtonStates();
      this.renderPagination(hasOverflow);
      this.evaluateAutoplay(hasOverflow);
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
        this.lastPageCount = 0;
        return;
      }

      const totalPages = Math.max(1, Math.ceil((this.rail.scrollWidth - 10) / this.rail.clientWidth));

      if (totalPages <= 1) {
        this.pagination.classList.remove('is-visible');
        this.pagination.innerHTML = '';
        this.lastPageCount = 0;
        return;
      }

      this.pagination.classList.add('is-visible');

      // Only re-render DOM dots if total page count changed
      if (totalPages !== this.lastPageCount) {
        this.lastPageCount = totalPages;
        this.pagination.innerHTML = '';

        for (let i = 0; i < totalPages; i++) {
          const dot = document.createElement('button');
          dot.type = 'button';
          dot.className = `stylodyna-categories__dot${i === 0 ? ' is-active' : ''}`;
          dot.setAttribute('aria-label', `Go to category slide ${i + 1}`);
          dot.setAttribute('role', 'tab');
          dot.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
          
          dot.addEventListener('click', () => {
            const targetScroll = i * this.rail.clientWidth;
            this.rail.scrollTo({ left: targetScroll, behavior: 'smooth' });
            this.handleUserInteraction();
          });

          this.pagination.appendChild(dot);
        }
      }

      this.updatePaginationSync();
    }

    updatePaginationSync() {
      if (!this.pagination || !this.pagination.classList.contains('is-visible')) return;

      const totalPages = this.lastPageCount || Math.max(1, Math.ceil((this.rail.scrollWidth - 10) / this.rail.clientWidth));
      const scrollLeft = Math.max(0, this.rail.scrollLeft);
      const maxScroll = Math.max(1, this.rail.scrollWidth - this.rail.clientWidth);
      const scrollProgress = scrollLeft / maxScroll;
      
      let activeIndex = Math.min(totalPages - 1, Math.round(scrollProgress * (totalPages - 1)));

      const dots = this.pagination.querySelectorAll('.stylodyna-categories__dot');
      dots.forEach((dot, index) => {
        const isActive = index === activeIndex;
        dot.classList.toggle('is-active', isActive);
        dot.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });
    }

    evaluateAutoplay(hasOverflow) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const isMobileDevice = window.innerWidth < 750;

      const shouldAutoplay = this.enableAutoplay &&
        hasOverflow &&
        !prefersReducedMotion &&
        !isMobileDevice &&
        !this.isUserInteracting &&
        !document.hidden;

      if (shouldAutoplay) {
        this.startAutoplay();
      } else {
        this.pauseAutoplay();
      }
    }

    startAutoplay() {
      this.pauseAutoplay();
      this.autoplayTimer = setInterval(() => {
        const scrollLeft = Math.ceil(this.rail.scrollLeft);
        const maxScroll = this.rail.scrollWidth - this.rail.clientWidth;

        if (scrollLeft >= maxScroll - 10) {
          // Smooth loop back to page 1
          this.rail.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          this.scrollRail('next');
        }
      }, this.autoplayInterval);
    }

    pauseAutoplay() {
      if (this.autoplayTimer) {
        clearInterval(this.autoplayTimer);
        this.autoplayTimer = null;
      }
    }

    handleUserInteraction() {
      this.isUserInteracting = true;
      this.pauseAutoplay();

      clearTimeout(this.resumeTimer);
      this.resumeTimer = setTimeout(() => {
        this.isUserInteracting = false;
        const hasOverflow = this.rail.scrollWidth > this.rail.clientWidth + 8;
        this.evaluateAutoplay(hasOverflow);
      }, this.resumeDelay);
    }
  }

  // Auto-initialize section instances
  const initShopByCategories = () => {
    document.querySelectorAll('.stylodyna-shop-by-categories').forEach(container => {
      if (!container.dataset.initialized) {
        container.dataset.initialized = 'true';
        new StylodynaShopByCategories(container);
      }
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initShopByCategories);
  } else {
    initShopByCategories();
  }

  // Shopify Theme Editor Integration Hooks
  document.addEventListener('shopify:section:load', (e) => {
    const section = e.target.querySelector('.stylodyna-shop-by-categories');
    if (section) {
      section.dataset.initialized = 'true';
      new StylodynaShopByCategories(section);
    }
  });
}
