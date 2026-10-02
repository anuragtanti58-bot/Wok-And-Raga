/**
 * Wok & Raga - Dedicated Menu Page Logic
 * 
 * Category tabs, live search, veg/non-veg filtering,
 * dynamic card rendering, Spotlight Card interaction, and WhatsApp dish ordering.
 */

import '../styles/main.css';
import { menuCategories, menuItems } from '../data/menuData.js';
import { generateOrderWhatsAppUrl } from '../utils/whatsapp.js';
import { initConfigBindings, showToast, initSpotlightCards, setupScrollReveal } from './main.js';

let currentCategory = 'all';
let currentSearch = '';
let currentDietary = 'all'; // 'all' | 'veg' | 'non-veg'

export function renderCategories() {
  const container = document.getElementById('category-tabs');
  if (!container) return;

  container.innerHTML = menuCategories.map(cat => {
    const isActive = cat.id === currentCategory;
    const activeClasses = isActive
      ? 'bg-secondary text-on-secondary shadow-md font-semibold'
      : 'bg-surface-container-high text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest border border-outline-variant/20';

    return `
      <button 
        type="button" 
        data-category="${cat.id}" 
        class="category-tab-btn shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-xs uppercase tracking-wider transition-all duration-200 ${activeClasses}"
        aria-pressed="${isActive}"
      >
        <span class="material-symbols-outlined text-[18px]">${cat.icon}</span>
        <span>${cat.label}</span>
      </button>
    `;
  }).join('');

  // Attach event listeners
  container.querySelectorAll('.category-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentCategory = btn.dataset.category;
      renderCategories();
      renderMenuItems();
    });
  });
}

export function renderMenuItems() {
  const container = document.getElementById('menu-grid');
  const countBadge = document.getElementById('item-count-badge');
  if (!container) return;

  // Filter items
  const filtered = menuItems.filter(item => {
    // Category match
    const categoryMatch = currentCategory === 'all' || item.category === currentCategory;

    // Dietary match
    let dietaryMatch = true;
    if (currentDietary === 'veg') dietaryMatch = item.vegetarian === true;
    if (currentDietary === 'non-veg') dietaryMatch = item.vegetarian === false;

    // Search match
    let searchMatch = true;
    if (currentSearch) {
      const q = currentSearch.toLowerCase();
      searchMatch = item.name.toLowerCase().includes(q) || 
                    item.description.toLowerCase().includes(q) || 
                    item.category.toLowerCase().includes(q);
    }

    return categoryMatch && dietaryMatch && searchMatch;
  });

  if (countBadge) {
    countBadge.textContent = `${filtered.length} item${filtered.length === 1 ? '' : 's'}`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center flex flex-col items-center justify-center gap-3 bg-surface-container-low rounded-2xl border border-outline-variant/20 fade-in-scale is-revealed">
        <span class="material-symbols-outlined text-secondary text-[48px]">search_off</span>
        <h3 class="font-headline-sm text-headline-sm text-on-surface font-display-hero">No Culinary Matches Found</h3>
        <p class="font-body-md text-on-surface-variant max-w-md">Try searching for another dish, resetting your dietary filter, or exploring all categories.</p>
        <button type="button" id="reset-filters-btn" class="mt-2 px-6 py-2 rounded-full bg-secondary text-on-secondary text-xs uppercase font-semibold tracking-wider hover:bg-secondary-fixed-dim transition-colors">
          Reset Filters
        </button>
      </div>
    `;

    const resetBtn = document.getElementById('reset-filters-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        currentCategory = 'all';
        currentSearch = '';
        currentDietary = 'all';
        const searchInput = document.getElementById('menu-search');
        if (searchInput) searchInput.value = '';
        const dietaryAll = document.querySelector('input[name="dietary-filter"][value="all"]');
        if (dietaryAll) dietaryAll.checked = true;
        renderCategories();
        renderMenuItems();
      });
    }
    return;
  }

  container.innerHTML = filtered.map((item, idx) => {
    const vegIndicator = item.vegetarian
      ? `<span class="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
           <span class="w-2 h-2 rounded-full bg-emerald-400"></span> VEG
         </span>`
      : `<span class="inline-flex items-center gap-1 text-[11px] font-semibold text-rose-400 bg-rose-950/60 px-2 py-0.5 rounded border border-rose-500/30">
           <span class="w-2 h-2 rounded-full bg-rose-400"></span> NON-VEG
         </span>`;

    const spicyBadge = item.spicy
      ? `<span class="inline-flex items-center text-primary-container text-xs gap-0.5" title="Spicy">
           <span class="material-symbols-outlined text-[15px]">local_fire_department</span>
         </span>`
      : '';

    const customBadge = item.badge
      ? `<span class="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-primary-container/90 backdrop-blur-md text-on-primary font-label-caps text-[10px] uppercase tracking-wider shadow-md">
           ${item.badge}
         </span>`
      : '';

    const imageHtml = item.image
      ? `<div class="relative w-full aspect-[4/3] overflow-hidden bg-surface-container-highest">
           <img 
             src="${item.image}" 
             alt="${item.name}" 
             loading="lazy"
             class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
           />
           ${customBadge}
         </div>`
      : `<div class="relative w-full aspect-[4/3] overflow-hidden bg-surface-container-highest flex items-center justify-center">
           <span class="material-symbols-outlined text-secondary/40 text-[48px]">restaurant</span>
           ${customBadge}
         </div>`;

    const spotlightGlow = idx % 3 === 0 ? 'orange' : idx % 3 === 1 ? 'gold' : 'amber';
    const staggerClass = `stagger-${(idx % 4) + 1}`;

    return `
      <div class="fade-in-up ${staggerClass} group flex flex-col rounded-xl overflow-hidden bg-surface-container shadow-md hover:shadow-xl transition-all duration-300 border border-outline-variant/15 hover:-translate-y-1 spotlight-card" data-spotlight="${spotlightGlow}">
        ${imageHtml}
        <div class="p-space-md flex flex-col justify-between flex-1 gap-space-sm">
          <div>
            <div class="flex items-center justify-between gap-2 mb-1.5">
              ${vegIndicator}
              ${spicyBadge}
            </div>
            <div class="flex items-start justify-between gap-2 mb-1">
              <h3 class="font-headline-sm text-[18px] text-on-surface font-display-hero group-hover:text-primary transition-colors">${item.name}</h3>
              <span class="font-title-md text-secondary font-semibold whitespace-nowrap">${item.price}</span>
            </div>
            <p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">${item.description}</p>
          </div>
          <div class="pt-3 flex items-center justify-between border-t border-outline-variant/15 mt-2">
            <span class="text-xs text-on-surface-variant font-label-caps uppercase tracking-wider">Live Fire Wok</span>
            <button 
              type="button" 
              data-order-item="${item.id}"
              class="order-dish-btn inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary-container/20 text-primary-container hover:bg-primary-container hover:text-on-primary transition-all duration-200 text-xs font-semibold uppercase tracking-wider"
              aria-label="Order ${item.name} on WhatsApp"
            >
              <span class="material-symbols-outlined text-[15px]">chat</span>
              <span>Order</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Attach order button click events
  container.querySelectorAll('.order-dish-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const itemId = btn.dataset.orderItem;
      const item = menuItems.find(m => m.id === itemId);
      if (!item) return;

      showToast(`Generating WhatsApp order for ${item.name}...`, 'info', 2500);

      const orderUrl = generateOrderWhatsAppUrl({
        itemName: item.name,
        price: item.price,
        category: item.category,
      });

      setTimeout(() => {
        window.open(orderUrl, '_blank', 'noopener,noreferrer');
      }, 300);
    });
  });

  // Observe newly rendered cards for scroll reveal & initialize spotlight hover
  setupScrollReveal();
  initSpotlightCards();
}

function setupMenuControls() {
  // Search Input
  const searchInput = document.getElementById('menu-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value.trim();
      renderMenuItems();
    });
  }

  // Dietary Radio/Filter Buttons
  const dietaryRadios = document.querySelectorAll('input[name="dietary-filter"]');
  dietaryRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      currentDietary = e.target.value;
      renderMenuItems();
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initConfigBindings();
  renderCategories();
  renderMenuItems();
  setupMenuControls();
});
