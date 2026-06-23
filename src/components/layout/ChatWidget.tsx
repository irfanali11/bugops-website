"use client";

import { useEffect, useState } from "react";
import { NavLink } from "@/components/layout/NavLink";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [panelReady, setPanelReady] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!open) {
      setPanelReady(true);
      return;
    }
    setPanelReady(false);
    const id = window.setTimeout(() => setPanelReady(true), reduceMotion ? 0 : 180);
    return () => window.clearTimeout(id);
  }, [open, reduceMotion]);

  return (
    <div className="fixed bottom-6 right-6 z-50 pb-[env(safe-area-inset-bottom)] pr-[env(safe-area-inset-right)]">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.92, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="surface-card mb-4 w-[min(100vw-3rem,320px)] overflow-hidden p-0"
            aria-busy={!panelReady}
          >
            <div className="flex items-center justify-between border-b border-border-light px-5 py-4">
              <p className="text-sm font-semibold text-foreground">{siteConfig.name}</p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="interactive-icon flex h-8 w-8 items-center justify-center rounded-lg text-muted"
                aria-label="Close contact menu"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-3 p-5">
              {!panelReady ? (
                <div className="chat-panel-skeleton space-y-3" aria-hidden>
                  <span className="skeleton-line w-full" />
                  <span className="skeleton-line w-4/5" />
                  <span className="skeleton-line w-full" />
                </div>
              ) : (
                <>
                  <Button href="/book" className="w-full" size="sm">
                    Get in touch
                  </Button>
                  <NavLink
                    href="/#contact"
                    onNavigate={() => setOpen(false)}
                    className="footer-link block text-center text-sm text-muted"
                  >
                    Contact
                  </NavLink>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        whileHover={reduceMotion ? undefined : { scale: 1.03 }}
        whileTap={reduceMotion ? undefined : { scale: 0.97 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="btn-primary flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg"
        aria-label={open ? "Close contact menu" : "Open contact menu"}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? "close" : "open"}
            initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
