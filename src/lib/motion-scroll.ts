const PAUSE_CLASS = "motion-scroll-paused";
const PAUSE_EVENT = "motion-scroll-pause";
const RESUME_EVENT = "motion-scroll-resume";

let pauseTimer = 0;

export function isMotionScrollPaused() {
  if (typeof document === "undefined") return false;
  return document.documentElement.classList.contains(PAUSE_CLASS);
}

export function pauseMotionForScroll(durationMs = 650) {
  if (typeof document === "undefined") return;

  document.documentElement.classList.add(PAUSE_CLASS);
  window.dispatchEvent(new Event(PAUSE_EVENT));

  window.clearTimeout(pauseTimer);
  pauseTimer = window.setTimeout(() => {
    resumeMotionAfterScroll();
  }, durationMs);
}

export function resumeMotionAfterScroll() {
  if (typeof document === "undefined") return;

  document.documentElement.classList.remove(PAUSE_CLASS);
  window.dispatchEvent(new Event(RESUME_EVENT));
  window.clearTimeout(pauseTimer);
}
