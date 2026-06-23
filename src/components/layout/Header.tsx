"use client";

import { Fragment, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { AppLink, NavLink } from "@/components/layout/NavLink";
import { cn } from "@/lib/utils";

const links = [
  { label: "Services", href: "/services", hash: false },
  { label: "Industries", href: "/#industries", hash: true },
  { label: "Work", href: "/work", hash: false },
  { label: "About", href: "/#about", hash: true },
  { label: "Contact", href: "/#contact", hash: true },
] as const;

const menuEase = [0.22, 1, 0.36, 1] as const;
const mobileNavId = "mobile-nav";

function isNavActive(href: string, pathname: string, hash: string) {
  if (href === "/services") {
    return pathname.startsWith("/services");
  }
  if (href.startsWith("/#")) {
    return pathname === "/" && hash === href.slice(1);
  }
  if (href === "/work") {
    return pathname.startsWith("/work");
  }
  return pathname === href;
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hash, setHash] = useState("");

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 32);
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => {
      if (media.matches) setOpen(false);
    };

    media.addEventListener("change", closeOnDesktop);
    return () => media.removeEventListener("change", closeOnDesktop);
  }, []);

  const renderNavItem = (
    link: (typeof links)[number],
    active: boolean,
    className: string,
    onNavigate?: () => void
  ) => {
    const shared = {
      href: link.href,
      className: cn(className, active && "nav-link-active text-foreground"),
      "aria-current": active ? ("page" as const) : undefined,
    };

    if (link.hash) {
      return (
        <NavLink {...shared} onNavigate={onNavigate}>
          {link.label}
        </NavLink>
      );
    }

    return (
      <AppLink {...shared} onClick={onNavigate}>
        {link.label}
      </AppLink>
    );
  };

  return (
    <header className="sticky top-0 z-50">
      <div className={cn("premium-shell border-b border-transparent", scrolled && "is-scrolled border-border/40")}>
        <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center px-6 lg:px-8">
          <Logo size="md" />

          <nav className="relative z-10 mx-auto hidden items-center gap-9 lg:flex" aria-label="Primary">
            {links.map((link) => (
              <Fragment key={link.href}>
                {renderNavItem(
                  link,
                  isNavActive(link.href, pathname, hash),
                  "nav-link text-[0.9375rem] font-medium text-muted hover:text-foreground"
                )}
              </Fragment>
            ))}
          </nav>

          <div className="relative z-10 ml-auto hidden items-center gap-3 md:flex">
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="interactive-icon flex h-9 w-9 items-center justify-center rounded-xl border border-border-light bg-surface-elevated/80 text-muted hover:border-brand/30 hover:text-brand"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <Button href="/book" size="sm">
              Get in touch
            </Button>
          </div>

          <button
            type="button"
            className="interactive-icon relative z-10 ml-auto flex h-10 w-10 items-center justify-center rounded-xl border border-border-light bg-surface-elevated text-muted lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls={mobileNavId}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              id={mobileNavId}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.32, ease: menuEase }}
              className="motion-gpu relative z-10 overflow-hidden border-t border-border/50 lg:hidden"
            >
              <nav className="space-y-1 px-6 py-4" aria-label="Mobile">
                {links.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{ duration: 0.22, delay: i * 0.045, ease: menuEase }}
                  >
                    {renderNavItem(
                      link,
                      isNavActive(link.href, pathname, hash),
                      "interactive-nav-item block rounded-xl px-3 py-2.5 text-base font-medium text-muted hover:bg-surface-muted hover:text-foreground",
                      () => setOpen(false)
                    )}
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.22, delay: links.length * 0.045, ease: menuEase }}
                >
                  <Button href="/book" className="mt-3 w-full">
                    Get in touch
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
