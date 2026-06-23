export default function ServicesLoading() {
  return (
    <div className="section-band-base py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl space-y-4">
          <div className="skeleton-line h-3 w-24" />
          <div className="skeleton-line h-10 w-full max-w-xl" />
          <div className="skeleton-line h-4 w-full max-w-lg" />
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="surface-card h-56 animate-pulse bg-surface-muted/40" />
          ))}
        </div>
      </div>
    </div>
  );
}
