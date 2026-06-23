import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Technical Strategy Call",
};

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
