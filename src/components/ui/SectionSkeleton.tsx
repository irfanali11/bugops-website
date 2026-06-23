export function SectionSkeleton({ rows = 3 }: { rows?: number }) {
  return (
    <div className="section-band-base py-24 md:py-32" aria-hidden>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-xl space-y-3">
          <div className="skeleton-line h-3 w-24" />
          <div className="skeleton-line h-9 w-full max-w-md" />
          <div className="skeleton-line h-4 w-full max-w-lg" />
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: rows }).map((_, index) => (
            <div key={index} className="surface-card h-48 bg-surface-muted/30" />
          ))}
        </div>
      </div>
    </div>
  );
}
