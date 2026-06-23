"use client";

import dynamic from "next/dynamic";

const ChatWidget = dynamic(
  () => import("@/components/layout/ChatWidget").then((mod) => mod.ChatWidget),
  { ssr: false }
);

export function LazyChatWidget() {
  return <ChatWidget />;
}
