import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface DestinationCardProps {
  name: string;
  image?: string;
  description?: string;
  href?: string;
  className?: string;
}

export function DestinationCard({
  name,
  image,
  description,
  href = "#",
  className,
}: DestinationCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative overflow-hidden rounded-lg border bg-card transition-all hover:shadow-lg",
        className
      )}
    >
      <div className="relative aspect-video w-full bg-muted">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
            <span className="text-4xl">🌍</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold group-hover:text-primary transition-colors">
          {name}
        </h3>
        {description && (
          <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        )}
      </div>
    </Link>
  );
}

