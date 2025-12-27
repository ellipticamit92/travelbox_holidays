import Link from "next/link";
import { Button } from "@/components/ui/button";
import { InfoItem } from "@/components/atoms/InfoItem";
import { Star, Clock, Users, MapPin, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface PackageBookingCardProps {
  price: string;
  originalPrice: string;
  rating: number;
  reviews: number;
  duration: string;
  groupSize: string;
  destination: string;
  infoItems?: {
    icon: LucideIcon;
    label: string;
    value: string;
  }[];
  onBookNow?: () => void;
  onEnquire?: () => void;
  bookNowHref?: string;
  enquireHref?: string;
  className?: string;
}

export function PackageBookingCard({
  price,
  originalPrice,
  rating,
  reviews,
  duration,
  groupSize,
  destination,
  infoItems,
  onBookNow,
  onEnquire,
  bookNowHref,
  enquireHref,
  className,
}: PackageBookingCardProps) {
  const defaultInfoItems = infoItems || [
    {
      icon: Clock,
      label: "Duration",
      value: duration,
    },
    {
      icon: Users,
      label: "Group Size",
      value: groupSize,
    },
    {
      icon: MapPin,
      label: "Destination",
      value: destination,
    },
  ];

  return (
    <div
      className={cn(
        "sticky top-24 bg-card p-6 rounded-2xl border border-border shadow-lg",
        className
      )}
    >
      {/* Price Section */}
      <div className="mb-6 pb-6 border-b border-border">
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-3xl font-bold text-primary">{price}</span>
          <span className="text-sm text-muted-foreground line-through">
            {originalPrice}
          </span>
        </div>
        <p className="text-xs text-muted-foreground mb-4">per person</p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-accent fill-accent" />
            <span className="font-semibold text-foreground">{rating}</span>
          </div>
          <span className="text-sm text-muted-foreground">
            ({reviews} reviews)
          </span>
        </div>
      </div>

      {/* Info Items */}
      <div className="space-y-4 mb-6 pb-6 border-b border-border">
        {defaultInfoItems.map((item, index) => (
          <InfoItem
            key={index}
            icon={item.icon}
            label={item.label}
            value={item.value}
          />
        ))}
      </div>

      {/* CTA Buttons */}
      {bookNowHref ? (
        <Button className="w-full mb-3" size="lg" asChild>
          <Link href={bookNowHref}>Book Now</Link>
        </Button>
      ) : (
        <Button className="w-full mb-3" size="lg" onClick={onBookNow}>
          Book Now
        </Button>
      )}

      {enquireHref ? (
        <Button variant="outline" className="w-full" size="lg" asChild>
          <Link href={enquireHref}>Enquire Now</Link>
        </Button>
      ) : (
        <Button
          variant="outline"
          className="w-full"
          size="lg"
          onClick={onEnquire}
        >
          Enquire Now
        </Button>
      )}

      <p className="text-center text-xs text-muted-foreground mt-4">
        Free cancellation up to 7 days before travel
      </p>
    </div>
  );
}
