import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { NavLink, AppLink } from "@/components/layout/NavLink";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-12rem)] items-center py-20 md:py-28">
      <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
        <p className="section-label justify-center">404</p>
        <h1 className="section-heading mt-3">Page not found</h1>
        <p className="type-body mx-auto mt-5 max-w-md text-muted">
          The page you requested is not available. Return to {siteConfig.name} to explore our services, work, and
          contact options.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
          <Button href="/">
            Back to home
          </Button>
          <AppLink href="/services" className="text-link inline-flex items-center gap-1 text-sm font-medium text-muted">
            Services
            <ArrowUpRight className="h-4 w-4" />
          </AppLink>
          <AppLink href="/work" className="text-link inline-flex items-center gap-1 text-sm font-medium text-muted">
            Our work
            <ArrowUpRight className="h-4 w-4" />
          </AppLink>
          <NavLink href="/#contact" className="text-link inline-flex items-center gap-1 text-sm font-medium text-muted">
            Contact us
            <ArrowUpRight className="h-4 w-4" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
