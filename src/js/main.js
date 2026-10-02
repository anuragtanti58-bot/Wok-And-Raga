/**
 * Wok & Raga - Main Client Script
 * 
 * Production-ready interactions, validation, WhatsApp generation,
 * cinematic scroll-reveal animations optimized for mobile and desktop,
 * dynamic business data binding, and high-performance Spotlight Card tracking.
 */

import { restaurantConfig } from '../data/restaurantConfig.js';
import { generateReservationWhatsAppUrl } from '../utils/whatsapp.js';

// Toast Notification Utility
export function showToast(message, type = 'info', duration = 4000) {
  let toast = document.getElementById('toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    document.body.appendChild(toast);
  }

  const iconName = type === 'success' ? 'check_circle' : type === 'error' ? 'error' : 'info';
  const borderColor = type === 'success' ? 'border-[#25D366]/40 bg-surface-container-high/95 text-on-surface' : 
                     type === 'error' ? 'border-red-500/40 bg-surface-container-high/95 text-on-surface' : 
                     'border-secondary/40 bg-surface-container-high/95 text-on-surface';

  toast.className = `fixed top-24 right-4 sm:right-6 z-50 max-w-[360px] rounded-xl p-4 shadow-2xl border backdrop-blur-xl flex items-start gap-3 transition-all duration-300 ${borderColor}`;
  toast.innerHTML = `
    <span class="material-symbols-outlined text-[22px] ${type === 'success' ? 'text-[#25D366]' : type === 'error' ? 'text-red-400' : 'text-secondary'} shrink-0 mt-0.5">${iconName}</span>
    <div class="flex flex-col gap-1 text-left flex-1">
      <p class="font-body-md text-[13px] text-on-surface leading-snug">${message}</p>
    </div>
    <button type="button" aria-label="Close notification" class="text-on-surface-variant hover:text-on-surface p-1 rounded-full" onclick="this.parentElement.classList.remove('toast-visible')">
      <span class="material-symbols-outlined text-[16px]">close</span>
    </button>
  `;

  setTimeout(() => {
    toast.classList.add('toast-visible');
  }, 10);

  if (window._toastTimeout) clearTimeout(window._toastTimeout);
  window._toastTimeout = setTimeout(() => {
    toast.classList.remove('toast-visible');
  }, duration);
}

// Bind restaurant configuration to all matching DOM elements
export function initConfigBindings() {
  document.querySelectorAll('[data-config-phone]').forEach(el => {
    el.setAttribute('href', restaurantConfig.phoneTel);
    if (el.dataset.configPhone === 'text') {
      el.textContent = restaurantConfig.phoneDisplay;
    }
  });

  document.querySelectorAll('[data-config-whatsapp]').forEach(el => {
    el.setAttribute('href', restaurantConfig.whatsappDirectUrl);
  });

  document.querySelectorAll('[data-config-email]').forEach(el => {
    el.setAttribute('href', restaurantConfig.emailMailto);
    if (el.dataset.configEmail === 'text') {
      el.textContent = restaurantConfig.email;
    }
  });

  document.querySelectorAll('[data-config-maps]').forEach(el => {
    el.setAttribute('href', restaurantConfig.mapsUrl);
  });
}

// Reservation Form Submission and Validation
export function handleReservationSubmit(event) {
  if (event) event.preventDefault();

  const guestSelect = document.getElementById('guest-count');
  const dateInput = document.getElementById('booking-date');
  const slotSelect = document.getElementById('booking-slot');
  const feedbackContainer = document.getElementById('form-feedback');

  if (!dateInput) return;

  const guests = guestSelect ? guestSelect.value : '4 Guests';
  const rawDate = dateInput.value.trim();
  const timeSlot = slotSelect ? slotSelect.value : 'Dinner Twilight (07:00 PM)';

  // Validation
  if (!rawDate) {
    if (feedbackContainer) {
      feedbackContainer.textContent = 'Please select a dining date.';
      feedbackContainer.className = 'text-xs text-red-400 mt-1 block';
    }
    dateInput.focus();
    dateInput.classList.add('border-red-500');
    return;
  }

  // Check if date is in the past
  const selectedDate = new Date(rawDate);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (selectedDate < today) {
    if (feedbackContainer) {
      feedbackContainer.textContent = 'Please select today or a future date for reservation.';
      feedbackContainer.className = 'text-xs text-red-400 mt-1 block';
    }
    dateInput.focus();
    dateInput.classList.add('border-red-500');
    return;
  }

  if (feedbackContainer) {
    feedbackContainer.textContent = '';
  }
  dateInput.classList.remove('border-red-500');

  // Format date nicely for WhatsApp
  const formattedDate = selectedDate.toLocaleDateString('en-IN', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  showToast('Redirecting to WhatsApp with your reservation details...', 'success', 3500);

  const waUrl = generateReservationWhatsAppUrl({
    guests,
    date: `${rawDate} (${formattedDate})`,
    timeSlot,
  });

  setTimeout(() => {
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  }, 400);
}

// Setup Date constraints on date picker
function setupDatePicker() {
  const dateInput = document.getElementById('booking-date');
  if (dateInput) {
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0];
    dateInput.setAttribute('min', todayStr);

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.value = tomorrow.toISOString().split('T')[0];
  }
}

// Mobile navigation drawer controls
function setupMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !menu) return;

  function closeMenu() {
    menu.classList.remove('menu-open');
    menu.classList.add('menu-closed');
    if (menuIcon) menuIcon.textContent = 'menu';
    toggleBtn.setAttribute('aria-expanded', 'false');
  }

  function openMenu() {
    menu.classList.remove('menu-closed');
    menu.classList.add('menu-open');
    if (menuIcon) menuIcon.textContent = 'close';
    toggleBtn.setAttribute('aria-expanded', 'true');
  }

  toggleBtn.addEventListener('click', () => {
    const isOpen = menu.classList.contains('menu-open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('menu-open')) {
      closeMenu();
    }
  });
}

// Navbar Shrink & Backdrop Blur on Scroll
function setupNavbarScroll() {
  const header = document.getElementById('main-header');
  const navInner = document.getElementById('nav-inner');
  if (!header || !navInner) return;

  const handleNavScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 40) {
      header.classList.add('bg-[#121316]/95', 'border-white/10', 'shadow-[0_4px_20px_rgba(0,0,0,0.6)]');
      header.classList.remove('bg-surface-dim/85', 'border-transparent');
      navInner.classList.remove('h-20');
      navInner.classList.add('h-16');
    } else {
      header.classList.remove('bg-[#121316]/95', 'border-white/10', 'shadow-[0_4px_20px_rgba(0,0,0,0.6)]');
      header.classList.add('bg-surface-dim/85', 'border-transparent');
      navInner.classList.remove('h-16');
      navInner.classList.add('h-20');
    }
  };

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();
}

// Hero entrance animations (Sequenced & Non-blocking)
function setupHeroAnimations() {
  requestAnimationFrame(() => {
    const heroBadge = document.getElementById('hero-badge');
    const heroTitle = document.getElementById('hero-title');
    const heroDesc = document.getElementById('hero-desc');
    const heroCtas = document.getElementById('hero-ctas');
    const heroMicroBadges = document.getElementById('hero-micro-badges');
    const heroImage = document.getElementById('hero-image');
    const waButton = document.getElementById('floating-whatsapp');

    if (heroBadge) setTimeout(() => heroBadge.classList.add('is-revealed'), 40);
    if (heroTitle) setTimeout(() => heroTitle.classList.add('is-revealed'), 120);
    if (heroDesc) setTimeout(() => heroDesc.classList.add('is-revealed'), 200);
    if (heroCtas) setTimeout(() => heroCtas.classList.add('is-revealed'), 280);
    if (heroMicroBadges) setTimeout(() => heroMicroBadges.classList.add('is-revealed'), 360);
    if (heroImage) setTimeout(() => heroImage.classList.add('is-revealed'), 220);
    if (waButton) setTimeout(() => waButton.classList.add('wa-revealed'), 480);
  });
}

// Intersection Observer for scroll reveal elements (Mobile & Desktop optimized)
export function setupScrollReveal() {
  // Elements outside hero section that should animate into view
  const revealElements = document.querySelectorAll(
    'main section:not(#hero) .fade-in-up, ' +
    'main section:not(#hero) .fade-in-scale, ' +
    'main section:not(#hero) .spotlight-card, ' +
    'footer .fade-in-up'
  );

  if (revealElements.length === 0) return;

  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.08
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealElements.forEach(el => observer.observe(el));
  } else {
    // Immediate fallback for reduced motion or non-supporting browsers
    revealElements.forEach(el => el.classList.add('is-revealed'));
  }
}

/**
 * High-performance Spotlight Card Pointer Tracking
 * 
 * Uses requestAnimationFrame, ignores touch events (preserving 100% natural mobile scrolling),
 * and updates CSS custom properties --mouse-x and --mouse-y per card.
 */
export function initSpotlightCards() {
  const cards = document.querySelectorAll('.spotlight-card');
  if (cards.length === 0) return;

  cards.forEach(card => {
    let rafId = null;

    const handlePointerMove = (e) => {
      // Ignore touch events to preserve effortless mobile vertical scroll
      if (e.pointerType === 'touch') return;

      if (rafId !== null) cancelAnimationFrame(rafId);

      rafId = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };

    const handlePointerLeave = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      card.style.setProperty('--mouse-x', `-1000px`);
      card.style.setProperty('--mouse-y', `-1000px`);
    };

    card.addEventListener('pointermove', handlePointerMove, { passive: true });
    card.addEventListener('pointerleave', handlePointerLeave, { passive: true });
  });
}

// Global initialization
document.addEventListener('DOMContentLoaded', () => {
  initConfigBindings();
  setupDatePicker();
  setupMobileMenu();
  setupNavbarScroll();
  setupHeroAnimations();
  setupScrollReveal();
  initSpotlightCards();

  const form = document.getElementById('booking-form');
  if (form) {
    form.addEventListener('submit', handleReservationSubmit);
  }
});

window.submitBooking = handleReservationSubmit;
