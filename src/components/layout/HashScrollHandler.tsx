"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { consumePendingHash, scrollToSectionWithRetry } from "@/lib/navigation";

export function HashScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    const pending = consumePendingHash();
    const hash = pending || window.location.hash.replace("#", "");
    if (!hash) return;

    return scrollToSectionWithRetry(hash, 1200);
  }, [pathname]);

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) scrollToSectionWithRetry(hash, 900);
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return null;
}
