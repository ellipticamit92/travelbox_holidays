import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight, MapPin } from "lucide-react";

interface DestinationCardProps {
  name: string;
  image?: string;
  description?: string;
  href?: string;
  className?: string;
  index?: number;
  subtitle?: string;
  packages?: number;
}

export function DestinationCard({
  name,
  image,
  description,
  href = "#",
  className,
  index = 0,
  subtitle,
  packages,
}: DestinationCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative h-[400px] rounded-2xl overflow-hidden card-elevated animate-scale-in",
        className
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {image && (
        <Image
          src={image || "/placeholder.jpg"}
          alt={`${name} - ${subtitle || name}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      )}
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-foreground/90 via-foreground/20 to-transparent" />
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex items-center gap-2 text-white mb-2">
          <MapPin className="h-4 w-4" />
          <span className="text-sm font-medium">{packages} Packages</span>
        </div>
        <h3 className="font-display text-2xl text-background font-bold mb-1">
          {name}
        </h3>
        <p className="text-background/90 text-sm mb-4">{subtitle}</p>
        <div className="flex items-center gap-2 text-accent font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
          <span>Explore</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
