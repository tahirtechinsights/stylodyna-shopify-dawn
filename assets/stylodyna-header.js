/**
 * StyloDyna Header & Global Floating WhatsApp Engine (HEADER-001 & HEADER-001F)
 * Handles Utility Bar message rotation, Floating WhatsApp interaction,
 * reduced motion compliance, page visibility changes, and Theme Editor lifecycle.
 */

(function () {
  'use strict';

  function initUtilityRotator(container) {
    if (!container) return;

    // Clear any pre-existing timer on this container instance
    if (container._stylodynaUtilityTimer) {
      clearInterval(container._stylodynaUtilityTimer);
      container._stylodynaUtilityTimer = null;
    }

    var messages = Array.prototype.slice.call(container.querySelectorAll('[data-utility-message]'));
    if (messages.length < 2) return;

    // Respect user's reduced-motion preference
    var prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      messages.forEach(function (msg, idx) {
        if (idx === 0) {
          msg.classList.add('is-active');
        } else {
          msg.classList.remove('is-active');
        }
      });
      return;
    }

    var intervalMs = parseInt(container.getAttribute('data-interval'), 10) || 7000;
    var currentIndex = 0;

    // Ensure initial slide state
    messages.forEach(function (msg, idx) {
      if (msg.classList.contains('is-active')) {
        currentIndex = idx;
      }
    });

    function startTimer() {
      if (container._stylodynaUtilityTimer) {
        clearInterval(container._stylodynaUtilityTimer);
      }
      container._stylodynaUtilityTimer = setInterval(function () {
        messages[currentIndex].classList.remove('is-active');
        currentIndex = (currentIndex + 1) % messages.length;
        messages[currentIndex].classList.add('is-active');
      }, intervalMs);
    }

    function stopTimer() {
      if (container._stylodynaUtilityTimer) {
        clearInterval(container._stylodynaUtilityTimer);
        container._stylodynaUtilityTimer = null;
      }
    }

    // Page Visibility API support
    function handleVisibilityChange() {
      if (document.hidden) {
        stopTimer();
      } else {
        startTimer();
      }
    }

    document.removeEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    startTimer();
  }

  function initFloatingWhatsapp() {
    var container = document.getElementById('StylodynaFloatingWhatsapp');
    if (!container) return;
    var trigger = document.getElementById('StylodynaFloatingWhatsappTrigger');
    var closeBtns = document.querySelectorAll('[data-whatsapp-close]');

    // Click on floating CTA opens canonical WhatsApp Web link directly (do NOT preventDefault)
    if (trigger) {
      trigger.addEventListener('click', function () {
        container.classList.remove('is-open');
        trigger.setAttribute('aria-expanded', 'false');
      });
    }

    // Close buttons ([data-whatsapp-close]) close the popover immediately without navigation
    closeBtns.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        container.classList.remove('is-open');
        if (trigger) trigger.setAttribute('aria-expanded', 'false');
      });
    });

    // Dismiss on outside click
    document.addEventListener('click', function (e) {
      if (container.classList.contains('is-open') && !container.contains(e.target)) {
        container.classList.remove('is-open');
        if (trigger) trigger.setAttribute('aria-expanded', 'false');
      }
    });

    // Dismiss on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && container.classList.contains('is-open')) {
        container.classList.remove('is-open');
        if (trigger) {
          trigger.setAttribute('aria-expanded', 'false');
          trigger.focus();
        }
      }
    });
  }

  function initMessagePopover() {
    var rotator = document.getElementById('stylodyna-live-rotator');
    var popover = document.getElementById('stylodyna-message-popover');
    var popoverText = document.getElementById('stylodyna-message-popover-text');
    if (!rotator || !popover || !popoverText) return;

    function isTruncated() {
      var activeText = rotator.querySelector('.stylodyna-utility-bar__live-text.is-active');
      if (!activeText) return false;
      return activeText.scrollWidth > activeText.clientWidth;
    }

    function showPopover() {
      if (!isTruncated()) return;
      var activeText = rotator.querySelector('.stylodyna-utility-bar__live-text.is-active');
      if (activeText) {
        popoverText.textContent = activeText.textContent;
        popover.classList.add('is-open');
        popover.setAttribute('aria-hidden', 'false');
      }
    }

    function hidePopover() {
      popover.classList.remove('is-open');
      popover.setAttribute('aria-hidden', 'true');
    }

    rotator.addEventListener('mouseenter', showPopover);
    rotator.addEventListener('mouseleave', hidePopover);
    rotator.addEventListener('focusin', showPopover);
    rotator.addEventListener('focusout', hidePopover);
  }

  function initEmailPopover() {
    var container = document.querySelector('[data-stylodyna-email-container]');
    var popover = document.getElementById('stylodyna-email-popover');
    if (!container || !popover) return;

    function showPopover() {
      popover.classList.add('is-open');
    }

    function hidePopover() {
      popover.classList.remove('is-open');
    }

    container.addEventListener('mouseenter', showPopover);
    container.addEventListener('mouseleave', hidePopover);
    container.addEventListener('focusin', showPopover);
    container.addEventListener('focusout', hidePopover);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') hidePopover();
    });
  }

  function initUtilityExpandMenu() {
    var trigger = document.getElementById('stylodyna-utility-expand-trigger');
    var panel = document.getElementById('stylodyna-utility-expand-panel');
    var closeBtn = document.getElementById('stylodyna-utility-expand-close');
    var mobileDrawer = document.getElementById('stylodyna-mobile-utility-drawer');
    var mobileClose = document.getElementById('stylodyna-mobile-utility-close');
    var innerGrid = document.querySelector('.stylodyna-utility-bar__inner');
    if (!trigger) return;

    var closeTimer = null;
    var isClickOpened = false;

    function isMobile() {
      return window.innerWidth < 990;
    }

    function openDesktopMenu() {
      if (closeTimer) {
        clearTimeout(closeTimer);
        closeTimer = null;
      }
      if (panel) {
        panel.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
        if (innerGrid) innerGrid.classList.add('has-expanded-open');
      }
    }

    function closeDesktopMenu() {
      if (closeTimer) {
        clearTimeout(closeTimer);
        closeTimer = null;
      }
      isClickOpened = false;
      if (panel) {
        panel.classList.remove('is-open');
        trigger.setAttribute('aria-expanded', 'false');
        if (innerGrid) innerGrid.classList.remove('has-expanded-open');
      }
    }

    function scheduleCloseDesktop() {
      if (isClickOpened) return;
      if (closeTimer) clearTimeout(closeTimer);
      closeTimer = setTimeout(function () {
        closeDesktopMenu();
      }, 250);
    }

    function openMobileDrawer() {
      if (mobileDrawer) {
        mobileDrawer.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
      }
    }

    function closeMobileDrawer() {
      if (mobileDrawer) {
        mobileDrawer.classList.remove('is-open');
        trigger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    }

    trigger.addEventListener('mouseenter', function () {
      if (!isMobile() && !isClickOpened) {
        openDesktopMenu();
      }
    });

    trigger.addEventListener('focus', function () {
      if (!isMobile() && !isClickOpened) {
        openDesktopMenu();
      }
    });

    trigger.addEventListener('click', function (e) {
      e.stopPropagation();
      if (isMobile()) {
        if (mobileDrawer && mobileDrawer.classList.contains('is-open')) {
          closeMobileDrawer();
        } else {
          openMobileDrawer();
        }
      } else {
        if (panel && panel.classList.contains('is-open')) {
          closeDesktopMenu();
        } else {
          isClickOpened = true;
          openDesktopMenu();
        }
      }
    });

    if (panel) {
      panel.addEventListener('mouseenter', function () {
        if (closeTimer) clearTimeout(closeTimer);
      });
      panel.addEventListener('mouseleave', scheduleCloseDesktop);
      trigger.addEventListener('mouseleave', scheduleCloseDesktop);
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        closeDesktopMenu();
        trigger.focus();
      });
    }

    if (mobileClose) {
      mobileClose.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        closeMobileDrawer();
        trigger.focus();
      });
    }

    if (mobileDrawer) {
      mobileDrawer.addEventListener('click', function (e) {
        if (e.target === mobileDrawer) {
          closeMobileDrawer();
        }
      });
    }

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        if (panel && panel.classList.contains('is-open')) {
          closeDesktopMenu();
          trigger.focus();
        }
        if (mobileDrawer && mobileDrawer.classList.contains('is-open')) {
          closeMobileDrawer();
          trigger.focus();
        }
      }
    });

    document.addEventListener('click', function (e) {
      if (panel && panel.classList.contains('is-open') && !panel.contains(e.target) && !trigger.contains(e.target)) {
        closeDesktopMenu();
      }
    });
  }

  function initAllHeaderComponents() {
    var rotators = document.querySelectorAll('[data-stylodyna-utility-rotator]');
    rotators.forEach(function (rotator) {
      initUtilityRotator(rotator);
    });
    initFloatingWhatsapp();
    initMessagePopover();
    initEmailPopover();
    initUtilityExpandMenu();
  }

  // Initial load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAllHeaderComponents);
  } else {
    initAllHeaderComponents();
  }

  // Shopify Theme Editor Lifecycle Events
  document.addEventListener('shopify:section:load', function (event) {
    if (event.detail && event.detail.sectionId) {
      var section = document.getElementById('shopify-section-' + event.detail.sectionId);
      if (section) {
        var rotators = section.querySelectorAll('[data-stylodyna-utility-rotator]');
        rotators.forEach(function (rotator) {
          initUtilityRotator(rotator);
        });
        initFloatingWhatsapp();
      }
    }
  });

  document.addEventListener('shopify:section:unload', function (event) {
    if (event.detail && event.detail.sectionId) {
      var section = document.getElementById('shopify-section-' + event.detail.sectionId);
      if (section) {
        var rotators = section.querySelectorAll('[data-stylodyna-utility-rotator]');
        rotators.forEach(function (rotator) {
          if (rotator._stylodynaUtilityTimer) {
            clearInterval(rotator._stylodynaUtilityTimer);
            rotator._stylodynaUtilityTimer = null;
          }
        });
      }
    }
  });
})();
