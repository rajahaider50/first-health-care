import { LeadAttribution } from "./types";

export function getClientAttribution(): LeadAttribution {
  if (typeof window === "undefined") {
    return {};
  }

  const urlParams = new URLSearchParams(window.location.search);

  // Generate or retrieve persistent visitor ID
  let visitorId = localStorage.getItem("fhc_visitor_id");
  if (!visitorId) {
    visitorId = "vis_" + Math.random().toString(36).substring(2, 11) + Date.now().toString(36);
    localStorage.setItem("fhc_visitor_id", visitorId);
  }

  // Generate or retrieve session ID (sessionStorage)
  let sessionId = sessionStorage.getItem("fhc_session_id");
  if (!sessionId) {
    sessionId = "ses_" + Math.random().toString(36).substring(2, 11) + Date.now().toString(36);
    sessionStorage.setItem("fhc_session_id", sessionId);
  }

  // Store first arrival ID
  let arrivalId = sessionStorage.getItem("fhc_arrival_id");
  if (!arrivalId) {
    arrivalId = "arr_" + Date.now().toString(36) + "_" + Math.random().toString(36).substring(2, 7);
    sessionStorage.setItem("fhc_arrival_id", arrivalId);
  }

  // Store landing page
  let landingPage = sessionStorage.getItem("fhc_landing_page");
  if (!landingPage) {
    landingPage = window.location.pathname + window.location.search;
    sessionStorage.setItem("fhc_landing_page", landingPage);
  }

  const attribution: LeadAttribution = {
    source_platform: "web",
    landing_page: landingPage,
    page_url: window.location.href,
    referrer: document.referrer || "direct",
    utm_source: urlParams.get("utm_source") || sessionStorage.getItem("fhc_utm_source") || undefined,
    utm_medium: urlParams.get("utm_medium") || sessionStorage.getItem("fhc_utm_medium") || undefined,
    utm_campaign: urlParams.get("utm_campaign") || sessionStorage.getItem("fhc_utm_campaign") || undefined,
    utm_content: urlParams.get("utm_content") || sessionStorage.getItem("fhc_utm_content") || undefined,
    utm_term: urlParams.get("utm_term") || sessionStorage.getItem("fhc_utm_term") || undefined,
    gclid: urlParams.get("gclid") || sessionStorage.getItem("fhc_gclid") || undefined,
    gbraid: urlParams.get("gbraid") || undefined,
    wbraid: urlParams.get("wbraid") || undefined,
    fbclid: urlParams.get("fbclid") || sessionStorage.getItem("fhc_fbclid") || undefined,
    google_campaign_id: urlParams.get("campaignid") || undefined,
    google_ad_group_id: urlParams.get("adgroupid") || undefined,
    google_ad_id: urlParams.get("creative") || undefined,
    google_keyword: urlParams.get("keyword") || undefined,
    meta_campaign_id: urlParams.get("ad_id") || undefined,
    visitor_id: visitorId,
    session_id: sessionId,
    arrival_id: arrivalId,
  };

  // Persist UTMs in session for cross-page navigation
  if (urlParams.get("utm_source")) sessionStorage.setItem("fhc_utm_source", urlParams.get("utm_source")!);
  if (urlParams.get("utm_medium")) sessionStorage.setItem("fhc_utm_medium", urlParams.get("utm_medium")!);
  if (urlParams.get("utm_campaign")) sessionStorage.setItem("fhc_utm_campaign", urlParams.get("utm_campaign")!);
  if (urlParams.get("utm_content")) sessionStorage.setItem("fhc_utm_content", urlParams.get("utm_content")!);
  if (urlParams.get("utm_term")) sessionStorage.setItem("fhc_utm_term", urlParams.get("utm_term")!);
  if (urlParams.get("gclid")) sessionStorage.setItem("fhc_gclid", urlParams.get("gclid")!);
  if (urlParams.get("fbclid")) sessionStorage.setItem("fhc_fbclid", urlParams.get("fbclid")!);

  return attribution;
}

export function trackEvent(eventName: string, params?: Record<string, any>) {
  if (typeof window === "undefined") return;

  const payload = {
    event: eventName,
    timestamp: new Date().toISOString(),
    path: window.location.pathname,
    ...params,
  };

  // Log locally for debugging and dispatch custom DOM event
  try {
    const customEvt = new CustomEvent("fhc_tracking", { detail: payload });
    window.dispatchEvent(customEvt);

    // If Google Tag Manager / dataLayer is present
    if ((window as any).dataLayer) {
      (window as any).dataLayer.push(payload);
    }
  } catch (e) {
    // ignore
  }
}
