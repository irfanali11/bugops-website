"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { consumePendingHash, scrollToSectionWithRetry } from "@/lib/navigation";

function runHashScroll(hash: string, maxMs: number) {
  if (!hash) return undefined;
  return scrollToSectionWithRetry(hash, maxMs);
}

export function HashScrollHandler() {
  const pathname = usePathname();
  const lastScrollRef = useRef({ key: "", at: 0 });

  useEffect(() => {
    const pending = consumePendingHash();
    const hash = pending || window.location.hash.replace("#", "");
    if (!hash) return;

    const key = `${pathname}#${hash}`;
    const now = Date.now();
    if (key === lastScrollRef.current.key && now - lastScrollRef.current.at < 600) {
      return;
    }

    lastScrollRef.current = { key, at: now };
    return runHashScroll(hash, 400);
  }, [pathname]);

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;

      const key = `${pathname}#${hash}`;
      const now = Date.now();
      if (key === lastScrollRef.current.key && now - lastScrollRef.current.at < 600) {
        return;
      }

      lastScrollRef.current = { key, at: now };
      runHashScroll(hash, 350);
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [pathname]);

  return null;
}
