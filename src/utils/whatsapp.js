/**
 * WhatsApp URL & Message Utilities
 * 
 * Provides safe, encoded links for table reservations, dish ordering, 
 * menu requests, and direct inquiries.
 */

import { restaurantConfig } from '../data/restaurantConfig.js';

/**
 * Clean phone number to digits only
 */
export function formatPhoneNumber(phone) {
  return phone.replace(/\D/g, '');
}

/**
 * Generate a WhatsApp reservation URL with structured booking details
 */
export function generateReservationWhatsAppUrl({
  guests = '4 Guests',
  date = '',
  timeSlot = 'Dinner Twilight (07:00 PM)',
  specialRequest = '',
} = {}) {
  const number = restaurantConfig.whatsapp;
  const name = restaurantConfig.name;

  let message = `Hello ${name}!\n\nI would like to reserve a table.\n\n• Guests: ${guests}\n• Date: ${date}\n• Time: ${timeSlot}`;
  
  if (specialRequest && specialRequest.trim()) {
    message += `\n• Special Request: ${specialRequest.trim()}`;
  }
  
  message += `\n\nPlease confirm availability.`;

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/**
 * Generate a WhatsApp URL for ordering a specific menu item
 */
export function generateOrderWhatsAppUrl({
  itemName,
  price = '',
  category = '',
  notes = '',
} = {}) {
  const number = restaurantConfig.whatsapp;
  const name = restaurantConfig.name;

  let message = `Hello ${name}!\n\nI would like to order:\n• ${itemName}${price ? ` (${price})` : ''}`;
  
  if (category) {
    message += `\n• Category: ${category}`;
  }
  if (notes && notes.trim()) {
    message += `\n• Note: ${notes.trim()}`;
  }

  message += `\n\nPlease confirm availability and preparation time for dine-in / takeaway.`;

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/**
 * Generate a WhatsApp URL for general inquiries
 */
export function generateGeneralWhatsAppUrl(customText) {
  const number = restaurantConfig.whatsapp;
  const name = restaurantConfig.name;
  const message = customText || `Hello ${name}! I would like to inquire about dining and table availability.`;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/**
 * Generate a WhatsApp URL for requesting the complete PDF menu
 */
export function generateMenuRequestWhatsAppUrl() {
  const number = restaurantConfig.whatsapp;
  const name = restaurantConfig.name;
  const message = `Hello ${name}! Please send the complete PDF menu and specials for today.`;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
