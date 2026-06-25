const PENDING_HASH_KEY = "bugops-pending-hash";

import {
  pauseMotionForScroll,
  resumeMotionAfterScroll,
} from "@/lib/motion-scroll";

export function setPendingHash(hash: string) {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(PENDING_HASH_KEY, hash);
  } catch {
    /* private browsing or storage blocked — URL hash still works */
  }
}

export function consumePendingHash() {
  if (typeof window === "undefined") return "";
  try {
    const hash = sessionStorage.getItem(PENDING_HASH_KEY) ?? "";
    if (hash) sessionStorage.removeItem(PENDING_HASH_KEY);
    return hash;
  } catch {
    return "";
  }
}

export function parseHref(href: string) {
  const hashIndex = href.indexOf("#");

  if (hashIndex === -1) {
    return { path: href, hash: "" };
  }

  return {
    path: href.slice(0, hashIndex) || "/",
    hash: href.slice(hashIndex + 1),
  };
}

export function getScrollOffset() {
  if (typeof window === "undefined") return 88;

  const styles = getComputedStyle(document.documentElement);
  const paddingTop = parseFloat(styles.scrollPaddingTop);
  if (!Number.isNaN(paddingTop) && paddingTop > 0) return paddingTop;

  const headerHeight = parseFloat(styles.getPropertyValue("--site-header-height"));
  return (Number.isNaN(headerHeight) ? 72 : headerHeight) + 16;
}

export function scrollToSection(hash: string, behavior: ScrollBehavior = "auto") {
  if (!hash) return false;

  const target = document.getElementById(hash);
  if (!target) return false;

  const top = target.getBoundingClientRect().top + window.scrollY - getScrollOffset();
  window.scrollTo({ top: Math.max(0, top), behavior });
  if (window.location.hash !== `#${hash}`) {
    window.history.replaceState(null, "", `#${hash}`);
  }
  return true;
}

/** rAF-based retry — avoids setInterval main-thread churn during route + hash nav. */
export function scrollToSectionWithRetry(hash: string, maxMs = 400) {
  if (!hash || typeof window === "undefined") return () => {};

  pauseMotionForScroll(450);

  let cancelled = false;
  const started = performance.now();
  let rafId = 0;

  const finish = () => {
    if (cancelled) return;
    cancelled = true;
    cancelAnimationFrame(rafId);
    window.setTimeout(resumeMotionAfterScroll, 160);
  };

  const attempt = () => {
    if (cancelled) return;

    if (scrollToSection(hash, "auto")) {
      finish();
      return;
    }

    if (performance.now() - started >= maxMs) {
      finish();
      return;
    }

    rafId = requestAnimationFrame(attempt);
  };

  attempt();

  return () => {
    cancelled = true;
    cancelAnimationFrame(rafId);
    resumeMotionAfterScroll();
  };
}
