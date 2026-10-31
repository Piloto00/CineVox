/**
 * Utility functions for Facebook Meta Pixel tracking
 * Pixel ID: 2019940606076995
 */

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

/**
 * Track standard Facebook Meta Pixel events (PageView, InitiateCheckout, Purchase, ViewContent, Lead, etc.)
 */
export const trackPixelEvent = (
  eventName: string,
  parameters?: Record<string, any>
) => {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    try {
      if (parameters) {
        window.fbq("track", eventName, parameters);
      } else {
        window.fbq("track", eventName);
      }
    } catch (e) {
      console.warn("Pixel tracking error:", e);
    }
  }
};

/**
 * Track custom Facebook Meta Pixel events for specific user movements on the page
 */
export const trackPixelCustom = (
  eventName: string,
  parameters?: Record<string, any>
) => {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    try {
      if (parameters) {
        window.fbq("trackCustom", eventName, parameters);
      } else {
        window.fbq("trackCustom", eventName);
      }
    } catch (e) {
      console.warn("Pixel custom tracking error:", e);
    }
  }
};
