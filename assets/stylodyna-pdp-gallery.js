// Decor PDP Media Gallery Extension (PDP-UI-002B)
document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('media-gallery');
  if (!gallery) return;

  // 1. Previous / Next Stage Arrows Synchronization
  const prevBtn = gallery.querySelector('.stylodyna-pdp-stage-arrow--prev');
  const nextBtn = gallery.querySelector('.stylodyna-pdp-stage-arrow--next');

  if (prevBtn && nextBtn) {
    const getMediaNodes = () => Array.from(gallery.querySelectorAll('.product__media-list > .product__media-item'));

    const navigateStage = (direction) => {
      const mediaNodes = getMediaNodes();
      if (mediaNodes.length === 0) return;

      const activeIdx = mediaNodes.findIndex((node) => node.classList.contains('is-active'));
      let newIdx = direction === 'next' ? activeIdx + 1 : activeIdx - 1;

      if (newIdx >= mediaNodes.length) newIdx = 0;
      if (newIdx < 0) newIdx = mediaNodes.length - 1;

      const targetMediaId = mediaNodes[newIdx].dataset.mediaId;
      if (gallery.setActiveMedia && targetMediaId) {
        gallery.setActiveMedia(targetMediaId, false);
      }
    };

    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      navigateStage('prev');
    });

    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      navigateStage('next');
    });

    // Prevent hover zoom when mouse is over stage arrow controls
    [prevBtn, nextBtn].forEach((btn) => {
      btn.addEventListener('mousemove', (e) => e.stopPropagation());
      btn.addEventListener('mouseenter', (e) => {
        e.stopPropagation();
        const activeImg = gallery.querySelector('.product__media-item.is-active img');
        if (activeImg) {
          activeImg.style.transformOrigin = 'center center';
          activeImg.style.transform = 'scale(1)';
        }
      });
    });

    // Keyboard Arrow Left / Right Support inside Gallery
    gallery.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        navigateStage('prev');
      } else if (e.key === 'ArrowRight') {
        navigateStage('next');
      }
    });
  }

  // 2. Desktop Cursor Focal Hover Zoom (Only where (hover: hover) and (pointer: fine) and min-width: 990px)
  const isDesktopHover = window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 990px)');
  if (!isDesktopHover.matches) return;

  const bindHoverZoom = (mediaItem) => {
    const opener = mediaItem.querySelector('.product__modal-opener');
    const img = mediaItem.querySelector('img');
    if (!opener || !img) return;

    opener.style.overflow = 'hidden';
    opener.style.position = 'relative';

    const onMouseMove = (e) => {
      if (!mediaItem.classList.contains('is-active')) return;
      const rect = opener.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      img.style.transformOrigin = `${x}% ${y}%`;
      img.style.transform = 'scale(1.8)';
      img.style.transition = 'transform 0.15s ease-out';
    };

    const onMouseLeave = () => {
      img.style.transformOrigin = 'center center';
      img.style.transform = 'scale(1)';
      img.style.transition = 'transform 0.25s ease-out';
    };

    opener.addEventListener('mousemove', onMouseMove);
    opener.addEventListener('mouseleave', onMouseLeave);
  };

  gallery.querySelectorAll('.product__media-item').forEach(bindHoverZoom);
});

// 3. Variant UX & Semantic Option Reconciliation (STOREFRONT-PDP-VARIANTS-002)
document.addEventListener('DOMContentLoaded', () => {
  const syncVariantState = () => {
    const variantSelects = document.querySelector('variant-selects');
    if (!variantSelects) return;
    const selectedConfig = variantSelects.querySelector('input[name*="Configuration"]:checked, input[name*="configuration"]:checked');
    if (selectedConfig && selectedConfig.value.toLowerCase().includes('without planter')) {
      const planterColorFieldset = variantSelects.querySelector('fieldset[data-option-name="Planter Color"], fieldset[data-option-name="Planter color"]');
      if (planterColorFieldset) {
        const naInput = planterColorFieldset.querySelector('input[value="N/A"], input[value="n/a"]');
        if (naInput) naInput.checked = true;
      }
    }
  };
  syncVariantState();

  if (typeof subscribe === 'function' && typeof PUB_SUB_EVENTS !== 'undefined') {
    subscribe(PUB_SUB_EVENTS.variantChange, ({ data: { variant } }) => {
      if (variant && variant.sku) {
        const skuItem = document.querySelector('.stylodyna-pdp-meta__item');
        if (skuItem) {
          skuItem.innerHTML = `<strong>SKU:</strong> ${variant.sku}`;
        }
      }
    });
  }
});

document.addEventListener('click', (e) => {
  const target = e.target;
  if (!target || target.tagName !== 'INPUT' || target.type !== 'radio') return;

  const variantSelects = target.closest('variant-selects');
  if (!variantSelects) return;

  const optionName = target.getAttribute('data-option-name') || '';
  const val = target.value;

  if (optionName.toLowerCase() === 'configuration' || target.name.toLowerCase().includes('configuration') || val.toLowerCase().includes('planter')) {
    const planterColorFieldset = variantSelects.querySelector('fieldset[data-option-name="Planter Color"], fieldset[data-option-name="Planter color"]');
    if (!planterColorFieldset) return;

    if (val.toLowerCase().includes('without planter')) {
      const naInput = planterColorFieldset.querySelector('input[value="N/A"], input[value="n/a"]');
      if (naInput) {
        naInput.checked = true;
      }
    } else {
      const checkedPlanterInput = planterColorFieldset.querySelector('input:checked');
      if (!checkedPlanterInput || checkedPlanterInput.value.toUpperCase() === 'N/A') {
        const firstValidInput = planterColorFieldset.querySelector('input:not([value="N/A"]):not([value="n/a"])');
        if (firstValidInput) {
          firstValidInput.checked = true;
        }
      }
    }
  }
}, true);
