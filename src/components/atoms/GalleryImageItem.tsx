import { MapPin, Heart, ZoomIn } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface GalleryImageItemProps {
  id: number;
  image: string;
  title: string;
  location: string;
  client: string;
  story: string;
  span: string;
  index?: number;
  isLiked?: boolean;
  onLike?: (id: number) => void;
  onClick?: () => void;
}

export function GalleryImageItem({
  id,
  image,
  title,
  location,
  client,
  span,
  index = 0,
  isLiked = false,
  onLike,
  onClick,
}: GalleryImageItemProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl cursor-pointer",
        span,
        "animate-scale-in"
      )}
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={onClick}
    >
      <Image
        src={image}
        alt={title}
        fill
        className={cn(
          "object-cover transition-transform duration-500 group-hover:scale-110"
        )}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      {/* <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
        <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
          <MapPin className="h-4 w-4" />
          <span>{location}</span>
        </div>
        <h3 className="font-display text-lg md:text-xl text-white font-bold mb-1">
          {title}
        </h3>
        <p className="text-white/70 text-sm">by {client}</p>
      </div> */}

      {/* Action Buttons */}
      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {onLike && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onLike(id);
            }}
            className={cn(
              "p-2 rounded-full backdrop-blur-sm transition-colors",
              isLiked
                ? "bg-red-500 text-white"
                : "bg-white/20 text-white hover:bg-white/30"
            )}
          >
            <Heart className={cn("h-4 w-4", isLiked && "fill-current")} />
          </button>
        )}
        <button className="p-2 rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 transition-colors">
          <ZoomIn className="h-4 w-4" />
        </button>
      </div>

      {/* Corner Accent */}
      <div className="absolute top-0 left-0 w-16 h-16 bg-linear-to-br from-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}
