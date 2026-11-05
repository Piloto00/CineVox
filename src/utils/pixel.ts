/**
 * Utility functions for Facebook Meta Pixel tracking with built-in deduplication
 * Pixel ID: 2019940606076995
 */

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

// In-memory cache to prevent duplicate events within a timeframe
const recentEvents = new Map<string, number>();
const oneTimeEvents = new Set<string>();

// Cooldown in milliseconds for identical events (e.g. rapid clicks)
const DEFAULT_COOLDOWN_MS = 2500;

/**
 * Generate a unique eventID for Meta Pixel deduplication
 */
export const generateEventId = (eventName: string): string => {
  return `${eventName.toLowerCase()}_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
};

interface PixelOptions {
  eventId?: string;
  oncePerSession?: boolean;
  cooldownMs?: number;
}

/**
 * Track standard Facebook Meta Pixel events (PageView, InitiateCheckout, Purchase, ViewContent, Lead, etc.)
 * Includes automatic eventID attachment and cooldown deduplication to prevent duplicate events.
 */
export const trackPixelEvent = (
  eventName: string,
  parameters?: Record<string, any>,
  options?: PixelOptions
) => {
  if (typeof window === "undefined" || typeof window.fbq !== "function") {
    return;
  }

  // Prevent duplicate one-time events (e.g. ViewContent or PageView)
  if (options?.oncePerSession || eventName === "ViewContent" || eventName === "PageView") {
    const sessionKey = `once_${eventName}`;
    if (oneTimeEvents.has(sessionKey)) {
      return;
    }
    oneTimeEvents.add(sessionKey);
  }

  // Debounce duplicate events with the same payload within cooldown window
  const payloadHash = parameters ? JSON.stringify(parameters) : "";
  const eventKey = `${eventName}:${payloadHash}`;
  const now = Date.now();
  const lastTime = recentEvents.get(eventKey) || 0;
  const cooldown = options?.cooldownMs ?? DEFAULT_COOLDOWN_MS;

  if (now - lastTime < cooldown) {
    // Suppress duplicate event within cooldown window
    return;
  }
  recentEvents.set(eventKey, now);

  try {
    const eventId = options?.eventId || generateEventId(eventName);
    if (parameters) {
      window.fbq("track", eventName, parameters, { eventID: eventId });
    } else {
      window.fbq("track", eventName, {}, { eventID: eventId });
    }
  } catch (e) {
    console.warn("Pixel tracking error:", e);
  }
};

/**
 * Track custom Facebook Meta Pixel events with deduplication
 */
export const trackPixelCustom = (
  eventName: string,
  parameters?: Record<string, any>,
  cooldownMs: number = DEFAULT_COOLDOWN_MS
) => {
  if (typeof window === "undefined" || typeof window.fbq !== "function") {
    return;
  }

  const payloadHash = parameters ? JSON.stringify(parameters) : "";
  const eventKey = `custom_${eventName}:${payloadHash}`;
  const now = Date.now();
  const lastTime = recentEvents.get(eventKey) || 0;

  if (now - lastTime < cooldownMs) {
    // Suppress duplicate custom event
    return;
  }
  recentEvents.set(eventKey, now);

  try {
    const eventId = generateEventId(eventName);
    if (parameters) {
      window.fbq("trackCustom", eventName, parameters, { eventID: eventId });
    } else {
      window.fbq("trackCustom", eventName, {}, { eventID: eventId });
    }
  } catch (e) {
    console.warn("Pixel custom tracking error:", e);
  }
};
