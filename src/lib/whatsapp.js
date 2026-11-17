import { company } from '../data/site';

/** Opens WhatsApp with a pre-filled message. Empty lines/values are dropped. */
export function openWhatsApp(lines) {
  const text = lines.filter((l) => l !== false && l !== null && l !== undefined).join('\n');
  const url = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank', 'noopener');
}

export const waLink = `https://wa.me/${company.whatsapp}`;
