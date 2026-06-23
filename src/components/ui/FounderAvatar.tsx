import Image from "next/image";
import { cn } from "@/lib/utils";

export function FounderAvatar({
  name,
  avatar,
  initials,
  className,
}: {
  name: string;
  avatar: string;
  initials: string;
  className?: string;
}) {
  return (
    <div className={cn("founder-avatar", className)}>
      <div className="founder-avatar-glow" aria-hidden />
      <div className="founder-avatar-ring" aria-hidden>
        <div className="founder-avatar-ring-track" />
      </div>
      <div className="founder-avatar-frame">
        <Image
          src={avatar}
          alt={`Portrait of ${name}`}
          width={128}
          height={128}
          className="founder-avatar-image"
          loading="lazy"
        />
        <span className="founder-avatar-fallback">{initials}</span>
      </div>
    </div>
  );
}
