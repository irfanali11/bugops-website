"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  parseHref,
  scrollToSectionWithRetry,
  setPendingHash,
} from "@/lib/navigation";
import {
  pauseMotionForScroll,
  resumeMotionAfterScroll,
} from "@/lib/motion-scroll";

export function NavLink({
  href,
  className,
  children,
  onNavigate,
  prefetch = true,
  ...props
}: {
  href: string;
  className?: string;
  children: ReactNode;
  onNavigate?: () => void;
  prefetch?: boolean;
} & Omit<React.ComponentProps<typeof Link>, "href" | "className" | "children" | "onClick" | "prefetch">) {
  const pathname = usePathname();
  const router = useRouter();
  const { path, hash } = parseHref(href);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onNavigate?.();

    if (hash) {
      event.preventDefault();

      if (pathname === path) {
        scrollToSectionWithRetry(hash);
        return;
      }

      setPendingHash(hash);
      router.push(`${path}#${hash}`, { scroll: false });
      return;
    }

    if (pathname === path) {
      event.preventDefault();
      pauseMotionForScroll(450);
      window.scrollTo({ top: 0, behavior: "auto" });
      window.setTimeout(resumeMotionAfterScroll, 350);
    }
  };

  return (
    <Link
      href={href}
      prefetch={prefetch}
      className={cn(className)}
      onClick={handleClick}
      scroll={false}
      {...props}
    >
      {children}
    </Link>
  );
}

export function AppLink({
  href,
  className,
  children,
  prefetch = true,
  ...props
}: {
  href: string;
  className?: string;
  children: ReactNode;
  prefetch?: boolean;
} & Omit<React.ComponentProps<typeof Link>, "href" | "className" | "children" | "prefetch">) {
  return (
    <Link href={href} prefetch={prefetch} className={cn(className)} {...props}>
      {children}
    </Link>
  );
}
