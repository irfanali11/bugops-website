/** Shared B/O lettermark for Next.js OG / icon routes (ImageResponse) */
export function brandMarkSvg(size: number) {
  const r = size * 0.25;
  const fontSize = Math.round(size * 0.34);
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: r,
        background: "linear-gradient(135deg, #0B0F19 0%, #111827 55%, #06B6D4 100%)",
        border: `${Math.max(1, size * 0.04)}px solid rgba(6, 182, 212, 0.45)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12), 0 8px 24px rgba(31, 28, 24, 0.22)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          fontFamily: "ui-monospace, monospace",
          fontWeight: 700,
          fontSize,
          letterSpacing: "-0.08em",
          color: "#FFFCF8",
          lineHeight: 1,
        }}
      >
        B<span style={{ color: "#8B5CF6" }}>/</span>O
      </div>
    </div>
  );
}

export const brandColors = {
  background: "#F8FAFC",
  surface: "#FFFFFF",
  foreground: "#0F172A",
  brand: "#06B6D4",
  brandSoft: "#8B5CF6",
  muted: "#475569",
} as const;
