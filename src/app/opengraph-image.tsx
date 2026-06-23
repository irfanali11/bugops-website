import { ImageResponse } from "next/og";
import { brandColors, brandMarkSvg } from "@/lib/brand-assets";
import { siteConfig } from "@/lib/site-config";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 80px",
          background: `radial-gradient(ellipse 80% 60% at 50% 0%, rgba(6, 182, 212, 0.22), transparent 55%), radial-gradient(ellipse 60% 50% at 100% 100%, rgba(139, 92, 246, 0.18), transparent 50%), linear-gradient(165deg, ${brandColors.background} 0%, #E2E8F0 100%)`,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {brandMarkSvg(96)}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ display: "flex", fontSize: 56, fontWeight: 700, letterSpacing: "-0.03em", color: brandColors.foreground }}>
              Bug<span style={{ color: brandColors.brand }}>Ops</span>
            </div>
            <div style={{ fontSize: 22, fontWeight: 500, color: brandColors.muted }}>{siteConfig.tagline}</div>
          </div>
        </div>

        <div
          style={{
            marginTop: 40,
            width: 72,
            height: 3,
            borderRadius: 9999,
            background: `linear-gradient(90deg, ${brandColors.brandSoft}, transparent)`,
          }}
        />

        <p
          style={{
            marginTop: 28,
            maxWidth: 720,
            fontSize: 26,
            lineHeight: 1.45,
            color: brandColors.muted,
          }}
        >
          {siteConfig.description}
        </p>
      </div>
    ),
    { ...size }
  );
}
