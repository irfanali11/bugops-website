import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { AppLink, NavLink } from "@/components/layout/NavLink";

const columns = [
  {
    title: "Services",
    links: [
      { label: "Web development", href: "/services/web-development", hash: false },
      { label: "AI solutions", href: "/services", hash: false },
      { label: "Industries", href: "/#industries", hash: true },
      { label: "How we deliver", href: "/#how-we-deliver", hash: true },
      { label: "Book a call", href: "/book", hash: false },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our work", href: "/work", hash: false },
      { label: "Process", href: "/#process", hash: true },
      { label: "About", href: "/#about", hash: true },
      { label: "Contact", href: "/#contact", hash: true },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 bg-surface">
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="footer-cta cta-band flex flex-col items-start justify-between gap-6 p-8 md:flex-row md:items-center md:p-10">
          <div>
              <p className="display-heading text-xl text-foreground md:text-2xl">Ready to start your project?</p>
            <p className="mt-2 max-w-md text-sm text-muted">
              Web platforms, AI systems, or both — scoped properly from day one.
            </p>
          </div>
          <Button href="/book">
            Get in touch
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-14 grid gap-12 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <Logo size="sm" showTagline={false} />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">{siteConfig.description}</p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="interactive-icon flex h-10 w-10 items-center justify-center rounded-xl border border-border-light bg-surface-elevated text-muted hover:border-brand/30 hover:text-brand"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="interactive-icon flex h-10 w-10 items-center justify-center rounded-xl border border-border-light bg-surface-elevated text-muted hover:border-brand/30 hover:text-brand"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="interactive-icon flex h-10 w-10 items-center justify-center rounded-xl border border-border-light bg-surface-elevated text-muted hover:border-brand/30 hover:text-brand"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-bold uppercase tracking-widest text-brand">{col.title}</p>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    {link.hash ? (
                      <NavLink
                        href={link.href}
                        className="footer-link text-base text-muted hover:text-brand"
                      >
                        {link.label}
                      </NavLink>
                    ) : (
                      <AppLink
                        href={link.href}
                        className="footer-link text-base text-muted hover:text-brand"
                      >
                        {link.label}
                      </AppLink>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border-light pt-8 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="font-medium">{siteConfig.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
