// Single source of truth for the business phone number.
// Change PHONE_NATIONAL only. Every other form is derived.
const PHONE_NATIONAL = '0547657771';

export const PHONE_TEL = PHONE_NATIONAL;
export const PHONE_DISPLAY = PHONE_NATIONAL.replace(
  /^(\d{3})(\d{3})(\d{4})$/,
  '$1-$2-$3'
);
export const PHONE_E164_DASHED = `+972-${PHONE_DISPLAY.slice(1)}`;

// Business WhatsApp number. Receives messages only, no voice calls.
const WHATSAPP_NATIONAL = '0587002323';

export const WHATSAPP_WA = `972${WHATSAPP_NATIONAL.slice(1)}`;
export const WHATSAPP_DISPLAY = WHATSAPP_NATIONAL.replace(
  /^(\d{3})(\d{3})(\d{4})$/,
  '$1-$2-$3'
);
