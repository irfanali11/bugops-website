import Image from "next/image";
import { cn } from "@/lib/utils";

type PortfolioPreviewImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  imageClassName?: string;
  /** list = work grid (no blur overlays, no ambient drift); detail = case study page */
  variant?: "list" | "detail";
};

export function PortfolioPreviewImage({
  src,
  alt,
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 1024px",
  className,
  imageClassName,
  variant = "detail",
}: PortfolioPreviewImageProps) {
  const isList = variant === "list";

  return (
    <div
      className={cn(
        "work-preview relative aspect-[16/10] overflow-hidden",
        isList ? "work-preview-list" : "work-preview-privacy",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        loading={priority ? undefined : "lazy"}
        className={cn("object-cover object-top", imageClassName)}
      />
      {!isList ? (
        <>
          <div className="portfolio-privacy-zone portfolio-privacy-zone-header" aria-hidden />
          <div className="portfolio-privacy-zone portfolio-privacy-zone-center" aria-hidden />
          <div className="portfolio-privacy-zone portfolio-privacy-zone-sidebar" aria-hidden />
        </>
      ) : null}
    </div>
  );
}
