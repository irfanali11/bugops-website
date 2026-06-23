import { caseStudies } from "@/lib/case-studies-data";
import { getPortfolioCardImage } from "@/lib/image-paths";

export interface ProjectMarqueeItem {
  slug: string;
  title: string;
  clientType: string;
  href: string;
  thumbnail?: { src: string; alt: string };
}

/** Portfolio projects for the social-proof marquee — sourced from /work case studies. */
export function getProjectMarqueeItems(): ProjectMarqueeItem[] {
  return caseStudies.map((study) => ({
    slug: study.slug,
    title: study.title,
    clientType: study.clientType,
    href: `/work/${study.slug}`,
    thumbnail: getPortfolioCardImage(study.slug),
  }));
}
