import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Star, MapPin, Clock, Users } from "lucide-react";
import Image from "next/image";

interface PackageCardProps {
  title: string;
  destination: string;
  duration: string;
  groupSize: string;
  price: string;
  originalPrice: string;
  rating: number;
  reviews: number;
  image: string;
  featured: boolean;
  index?: number;
}

export function PackageCard({
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
  image
}: PackageCardProps) {
  return (

    <div
      key={title}
      className="bg-card rounded-2xl overflow-hidden card-elevated animate-scale-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative h-56">
        {image && (
          <Image
            src={image || "/placeholder.jpg"}
            alt={title}
            fill
            className="object-cover"
          />
        )}
        {featured && (
          <span className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold z-10">
            Best Seller
          </span>
        )}
        <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 z-10">
          <Star className="h-4 w-4 text-accent fill-accent" />
          <span className="text-sm font-semibold text-foreground">{rating}</span>
          <span className="text-xs text-muted-foreground">({reviews})</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
          <MapPin className="h-4 w-4" />
          <span>{destination}</span>
        </div>
        <h3 className="font-display text-xl text-foreground font-bold mb-4">
          {title}
        </h3>
        <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{groupSize}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-primary">{price}</span>
            <span className="text-sm text-muted-foreground line-through ml-2">
              {originalPrice}
            </span>
            <span className="block text-xs text-muted-foreground">per person</span>
          </div>
          <Button variant="default" size="sm">
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
}

