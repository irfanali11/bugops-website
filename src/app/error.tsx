"use client";

import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AppLink } from "@/components/layout/NavLink";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[calc(100vh-12rem)] items-center py-20 md:py-28">
      <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
        <p className="section-label justify-center">Error</p>
        <h1 className="section-heading mt-3">Something went wrong</h1>
        <p className="type-body mx-auto mt-5 max-w-md text-muted">
          An unexpected error occurred while loading this page. You can try again or return to the homepage.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button type="button" onClick={reset}>
            Try again
          </Button>
          <AppLink href="/" className="text-link inline-flex items-center gap-1 text-sm font-medium text-muted">
            Back to home
            <ArrowUpRight className="h-4 w-4" />
          </AppLink>
        </div>
      </div>
    </div>
  );
}
