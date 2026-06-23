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

export function scrollToSectionWithRetry(hash: string, maxMs = 1200) {
  if (!hash || typeof window === "undefined") return () => {};

  pauseMotionForScroll(maxMs + 350);

  let finished = false;
  const started = performance.now();
  let intervalId = 0;

  const finish = () => {
    if (finished) return;
    finished = true;
    window.clearInterval(intervalId);
    window.setTimeout(resumeMotionAfterScroll, 280);
  };

  if (scrollToSection(hash, "auto")) {
    finish();
    return finish;
  }

  intervalId = window.setInterval(() => {
    if (scrollToSection(hash, "auto") || performance.now() - started >= maxMs) {
      finish();
    }
  }, 48);

  return () => {
    finished = true;
    window.clearInterval(intervalId);
    resumeMotionAfterScroll();
  };
}
