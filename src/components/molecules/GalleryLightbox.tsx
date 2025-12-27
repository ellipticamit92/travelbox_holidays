"use client";

import { X, MapPin, Heart } from "lucide-react";
import { GalleryImageItemProps } from "@/components/atoms/GalleryImageItem";
import { cn } from "@/lib/utils";

interface GalleryLightboxProps {
  image: GalleryImageItemProps | null;
  isLiked: boolean;
  onClose: () => void;
  onLike: (id: number) => void;
}

export function GalleryLightbox({
  image,
  isLiked,
  onClose,
  onLike,
}: GalleryLightboxProps) {
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <button
        className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
        onClick={onClose}
      >
        <X className="h-6 w-6" />
      </button>

      <div
        className="max-w-5xl w-full flex flex-col md:flex-row gap-6 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex-1 relative h-[70vh] rounded-xl overflow-hidden">
          <img
            src={image.image}
            alt={image.title}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="md:w-80 text-white">
          <div className="flex items-center gap-2 text-white/70 text-sm mb-3">
            <MapPin className="h-4 w-4" />
            <span>{image.location}</span>
          </div>
          <h2 className="font-display text-2xl font-bold mb-4">
            {image.title}
          </h2>
          <div className="bg-white/10 rounded-xl p-4 mb-4">
            <p className="text-white/80 italic mb-2">"{image.story}"</p>
            <p className="text-accent font-semibold">— {image.client}</p>
          </div>
          <button
            onClick={() => onLike(image.id)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-full transition-colors",
              isLiked
                ? "bg-red-500 text-white"
                : "bg-white/10 text-white hover:bg-white/20"
            )}
          >
            <Heart className={cn("h-4 w-4", isLiked && "fill-current")} />
            {isLiked ? "Liked" : "Like this photo"}
          </button>
        </div>
      </div>
    </div>
  );
}
