import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PackageCardProps {
  title: string;
  description?: string;
  price?: string;
  duration?: string;
  href?: string;
  className?: string;
}

export function PackageCard({
  title,
  description,
  price,
  duration,
  href = "#",
  className,
}: PackageCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-lg border bg-card p-6 transition-all hover:shadow-lg",
        className
      )}
    >
      <div className="flex-1">
        {duration && (
          <span className="text-xs font-medium text-primary">{duration}</span>
        )}
        <h3 className="mt-2 text-xl font-semibold">{title}</h3>
        {description && (
          <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
            {description}
          </p>
        )}
      </div>
      <div className="mt-6 flex items-center justify-between">
        {price && (
          <div>
            <span className="text-2xl font-bold">{price}</span>
            <span className="text-sm text-muted-foreground">/person</span>
          </div>
        )}
        <Button asChild size="sm" variant="outline">
          <Link href={href}>View Details</Link>
        </Button>
      </div>
    </div>
  );
}

