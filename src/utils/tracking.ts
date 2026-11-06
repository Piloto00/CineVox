/**
 * CineVox UTM & Ad-Tracking Parameter Management System
 * Integrates Meta Ads (Facebook/Instagram), Google Ads, and Kirvano Checkout
 */

// Keys monitored specifically for ad attribution
export const TRACKED_PARAM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "fbclid",
  "gclid",
  "src",
  "sck",
  "ttclid",
] as const;

export type TrackedParams = Record<string, string>;

const STORAGE_KEY = "cinevox_utm_tracking";

/**
 * Safely access sessionStorage or localStorage with fallback
 */
const getStorageItem = (storage: Storage, key: string): string | null => {
  try {
    return storage.getItem(key);
  } catch {
    return null;
  }
};

const setStorageItem = (storage: Storage, key: string, value: string): void => {
  try {
    storage.setItem(key, value);
  } catch {
    // Ignore private browsing / quota errors
  }
};

/**
 * Capture parameters from the current window location search string
 */
export const captureCurrentUrlParams = (): TrackedParams => {
  if (typeof window === "undefined" || !window.location.search) {
    return {};
  }

  const urlParams = new URLSearchParams(window.location.search);
  const captured: TrackedParams = {};

  // First check our primary tracked keys
  for (const key of TRACKED_PARAM_KEYS) {
    const val = urlParams.get(key);
    if (val && val.trim() !== "") {
      captured[key] = val.trim();
    }
  }

  // Also capture any other custom utm_* or tracking parameters passed in the URL
  urlParams.forEach((value, key) => {
    if (value && value.trim() !== "") {
      if (key.startsWith("utm_") || key.startsWith("src") || key.startsWith("sck")) {
        captured[key] = value.trim();
      }
    }
  });

  return captured;
};

/**
 * Retrieve stored parameters from sessionStorage (priority) or localStorage (fallback)
 */
export const getStoredParams = (): TrackedParams => {
  if (typeof window === "undefined") {
    return {};
  }

  try {
    const sessionData = getStorageItem(sessionStorage, STORAGE_KEY);
    if (sessionData) {
      const parsed = JSON.parse(sessionData);
      if (parsed && typeof parsed === "object") {
        return parsed;
      }
    }

    const localData = getStorageItem(localStorage, STORAGE_KEY);
    if (localData) {
      const parsed = JSON.parse(localData);
      if (parsed && typeof parsed === "object") {
        return parsed;
      }
    }
  } catch (e) {
    console.warn("[Tracking] Error reading stored tracking params:", e);
  }

  return {};
};

/**
 * Save parameters to both sessionStorage and localStorage without overwriting
 * valid existing values with empty ones.
 */
export const persistParams = (newParams: TrackedParams): TrackedParams => {
  if (typeof window === "undefined") {
    return {};
  }

  const existing = getStoredParams();
  const merged: TrackedParams = { ...existing };

  // Only merge non-empty, non-null values
  for (const [key, value] of Object.entries(newParams)) {
    if (value && typeof value === "string" && value.trim() !== "") {
      merged[key] = value.trim();
    }
  }

  if (Object.keys(merged).length > 0) {
    const serialized = JSON.stringify(merged);
    setStorageItem(sessionStorage, STORAGE_KEY, serialized);
    setStorageItem(localStorage, STORAGE_KEY, serialized);
  }

  return merged;
};

/**
 * Initialize tracking on page load: captures current URL params and merges with stored ones.
 * Returns the active merged tracking parameters.
 */
export const initTracking = (): TrackedParams => {
  const currentParams = captureCurrentUrlParams();
  return persistParams(currentParams);
};

/**
 * Build the full Kirvano checkout URL with all preserved UTMs and ad-tracking parameters.
 * Preserves existing checkout parameters without duplicates.
 */
export const buildKirvanoCheckoutUrl = (baseCheckoutUrl: string): string => {
  if (!baseCheckoutUrl) {
    return baseCheckoutUrl;
  }

  try {
    const url = new URL(baseCheckoutUrl);
    const stored = getStoredParams();
    const current = captureCurrentUrlParams();
    // Merge: current URL takes priority if freshly visited, then stored
    const allParams: TrackedParams = { ...stored, ...current };

    // Append each non-empty parameter to URL searchParams without duplication
    for (const [key, value] of Object.entries(allParams)) {
      if (value && typeof value === "string" && value.trim() !== "") {
        // Only set if not already set or overwrite with active tracked value
        url.searchParams.set(key, value.trim());
      }
    }

    return url.toString();
  } catch (e) {
    console.error("[Tracking] Error building checkout URL:", e);
    // Fallback in case of invalid URL object
    return baseCheckoutUrl;
  }
};
