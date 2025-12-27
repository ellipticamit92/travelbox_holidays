import Image from "next/image";
import { InfoBadge } from "@/components/atoms/InfoBadge";
import { BackLink } from "@/components/molecules/BackLink";
import { Calendar, Globe, MessageCircle, Package, LucideIcon, MapPin } from "lucide-react";

interface DestinationHeroProps {
  image: string;
  name: string;
  subtitle: string;
  backHref?: string;
  badges?: {
    icon: LucideIcon;
    text: string;
  }[];
  packages?: number;
  bestTimeToVisit?: string;
  currency?: string;
  language?: string;
  className?: string;
  pageName?: string;
}

export function DestinationHero({
  image,
  name,
  subtitle,
  backHref = "/#destinations",
  badges,
  packages,
  bestTimeToVisit,
  currency,
  language,
  className,
  pageName = "Destinations",
}: DestinationHeroProps) {
  // Build default badges if not provided
  const defaultBadges = badges || [
    ...(packages ? [{ icon: Package, text: `${packages}+ packages` }] : []),
    ...(bestTimeToVisit ? [{ icon: Calendar, text: `Best: ${bestTimeToVisit}` }] : []),
    ...(currency ? [{ icon: Globe, text: currency }] : []),
    ...(language ? [{ icon: MessageCircle, text: language }] : []),
  ];

  return (
    <section className={`relative h-[50vh] md:h-[60vh] ${className || ""}`}>
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-linear-to-t from-background via-background/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
        <div className="container mx-auto">
          <BackLink href={backHref}>Back to {pageName}</BackLink>
          <div className="text-muted-foreground font-semibold mb-2 flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>{subtitle}</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl text-foreground font-bold mb-4">
            {name}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-foreground">
            {defaultBadges.map((badge, index) => (
              <InfoBadge key={index} icon={badge.icon}>
                {badge.text}
              </InfoBadge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

