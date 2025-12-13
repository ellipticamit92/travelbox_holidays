import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Star, MapPin, Clock, Users } from "lucide-react";
import Image from "next/image";

interface PackageCardProps {
  id?: string;
  title: string;
  destination: string;
  duration: string;
  groupSize: string;
  price: string;
  originalPrice: string;
  rating: number;
  reviews?: number;
  image: string;
  featured: boolean;
  index?: number;
  variant?: "default" | "compact";
  href?: string;
  showReviews?: boolean;
  showPerPerson?: boolean;
  ctaText?: string;
  className?: string;
}

export function PackageCard({
  id,
  title,
  price,
  duration,
  index = 0,
  featured,
  rating,
  reviews,
  destination,
  groupSize,
  originalPrice,
  image,
  variant = "default",
  href,
  showReviews = true,
  showPerPerson = true,
  ctaText,
  className
}: PackageCardProps) {
  // Auto-generate href from id if href is not provided
  const packageHref = href || (id ? `/package/${id}` : undefined);
  
  const isCompact = variant === "compact";
  const imageHeight = isCompact ? "h-48" : "h-56";
  const padding = isCompact ? "p-5" : "p-6";
  const titleSize = isCompact ? "text-lg" : "text-xl";
  const priceSize = isCompact ? "text-xl" : "text-2xl";
  const iconSize = isCompact ? "h-3.5 w-3.5" : "h-4 w-4";
  const ratingBadgeSize = isCompact ? "px-2 py-1 text-xs" : "px-3 py-1 text-sm";
  const featuredBadgeSize = isCompact ? "px-3 py-1 text-xs" : "px-3 py-1 text-sm";
  const ratingIconSize = isCompact ? "h-3 w-3" : "h-4 w-4";

  const cardContent = (
    <>
      {/* Image */}
      <div className={cn("relative overflow-hidden", imageHeight)}>
        {image && (
          <Image
            src={image.startsWith("/") ? image : `/${image}`}
            alt={title}
            fill
            className={cn(
              "object-cover transition-transform duration-500",
              packageHref && "group-hover:scale-105"
            )}
          />
        )}
        {featured && (
          <span className={cn(
            "absolute top-3 left-3 bg-accent text-accent-foreground rounded-full font-semibold z-10",
            featuredBadgeSize
          )}>
            Best Seller
          </span>
        )}
        <div className={cn(
          "absolute top-3 right-3 bg-card/90 backdrop-blur-sm rounded-full flex items-center gap-1 z-10",
          ratingBadgeSize
        )}>
          <Star className={cn("text-accent fill-accent", ratingIconSize)} />
          <span className="font-semibold text-foreground">{rating}</span>
          {showReviews && reviews !== undefined && (
            <span className="text-xs text-muted-foreground">({reviews})</span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className={padding}>
        <div className={cn(
          "flex items-center gap-1.5 text-muted-foreground mb-2",
          isCompact ? "text-sm" : "text-sm"
        )}>
          <MapPin className={iconSize} />
          <span>{destination}</span>
        </div>
        <h3 className={cn(
          "font-display text-foreground font-bold mb-3",
          titleSize,
          packageHref && "group-hover:text-primary transition-colors"
        )}>
          {title}
        </h3>
        <div className={cn(
          "flex items-center gap-3 mb-4 text-muted-foreground",
          isCompact ? "text-sm" : "text-sm"
        )}>
          <div className="flex items-center gap-1">
            <Clock className={iconSize} />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className={iconSize} />
            <span>{groupSize}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className={cn("font-bold text-primary", priceSize)}>{price}</span>
            <span className={cn(
              "text-muted-foreground line-through ml-2",
              isCompact ? "text-xs" : "text-sm"
            )}>
              {originalPrice}
            </span>
            {showPerPerson && (
              <span className={cn(
                "block text-muted-foreground",
                isCompact ? "text-xs" : "text-xs"
              )}>
                per person
              </span>
            )}
          </div>
          {packageHref ? (
            <span className={cn(
              "font-medium text-primary",
              isCompact ? "text-sm" : "text-sm",
              "group-hover:underline"
            )}>
              {ctaText || "View Details"}
            </span>
          ) : (
            id ? (
              <Button variant="default" size="sm" asChild>
                <Link href={`/package/${id}`}>
                  {ctaText || "Book Now"}
                </Link>
              </Button>
            ) : (
              <Button variant="default" size="sm">
                {ctaText || "Book Now"}
              </Button>
            )
          )}
        </div>
      </div>
    </>
  );

  const cardClasses = cn(
    "bg-card rounded-2xl overflow-hidden border border-border",
    packageHref 
      ? "group hover:shadow-xl transition-all duration-300 cursor-pointer"
      : "card-elevated animate-scale-in",
    className
  );

  if (packageHref) {
    return (
      <Link
        href={packageHref}
        className={cardClasses}
        style={{ animationDelay: `${index * 100}ms` }}
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <div
      key={id || title}
      className={cardClasses}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {cardContent}
    </div>
  );
}

