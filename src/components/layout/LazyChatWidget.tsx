"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ChatWidget = dynamic(
  () => import("@/components/layout/ChatWidget").then((mod) => mod.ChatWidget),
  { ssr: false }
);

export function LazyChatWidget() {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const enable = () => {
      if (!cancelled) setMount(true);
    };

    const idle = window.requestIdleCallback?.(enable, { timeout: 2500 });
    const timer = idle == null ? window.setTimeout(enable, 1500) : undefined;

    return () => {
      cancelled = true;
      if (idle != null) window.cancelIdleCallback?.(idle);
      if (timer != null) window.clearTimeout(timer);
    };
  }, []);

  if (!mount) return null;

  return <ChatWidget />;
}
