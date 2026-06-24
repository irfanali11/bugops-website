import Image from "next/image";
import Link from "next/link";
import { ProjectBrandMark } from "@/components/work/ProjectBrandMark";
import type { ProjectMarqueeItem } from "@/lib/project-marquee-data";

export function ProjectMarquee({ items }: { items: ProjectMarqueeItem[] }) {
  const loop = [...items, ...items];

  return (
    <div className="project-marquee mt-14" aria-label="Shipped portfolio projects">
      <div className="project-marquee-edge project-marquee-edge-left" aria-hidden />
      <div className="project-marquee-edge project-marquee-edge-right" aria-hidden />
      <div className="project-marquee-track">
        {loop.map((item, index) => (
          <Link
            key={`${item.slug}-${index}`}
            href={item.href}
            className="project-marquee-item group"
            title={`${item.title} — ${item.clientType}`}
          >
            {item.thumbnail ? (
              <span className="project-marquee-thumb">
                <Image
                  src={item.thumbnail.src}
                  alt=""
                  width={56}
                  height={40}
                  loading="lazy"
                  sizes="56px"
                  className="h-full w-full object-cover object-top"
                  aria-hidden
                />
              </span>
            ) : null}
            <ProjectBrandMark slug={item.slug} title={item.title} className="h-8 w-auto min-w-[7rem] max-w-[12rem] [&_svg]:h-full [&_svg]:w-auto" />
          </Link>
        ))}
      </div>
    </div>
  );
}
