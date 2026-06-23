"use client";

import { useEffect, useState } from "react";
import { isMotionScrollPaused } from "@/lib/motion-scroll";

export function useMotionScrollPaused() {
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const sync = () => setPaused(isMotionScrollPaused());

    sync();
    window.addEventListener("motion-scroll-pause", sync);
    window.addEventListener("motion-scroll-resume", sync);

    return () => {
      window.removeEventListener("motion-scroll-pause", sync);
      window.removeEventListener("motion-scroll-resume", sync);
    };
  }, []);

  return paused;
}
