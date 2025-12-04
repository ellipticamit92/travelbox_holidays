import { MapPin, Heart } from "lucide-react";

interface StoryCardProps {
  id: number;
  name?: string;
  location?: string;
  image?: string;
  trip?: string;
  index?: number;
}

export function StoryCard({
  id,
  name,
  location,
  image,
  trip,
  index = 0
}: StoryCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl cursor-pointer animate-fade-up ${index === 0 || index === 3 ? "row-span-2" : ""
        }`}
      style={{ animationDelay: `${index * 100}ms` }}
    //onClick={() => setSelectedImage(item)}
    >
      <img
        src={image}
        alt={`${name} at ${location}`}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        style={{ minHeight: index === 0 || index === 3 ? "500px" : "240px" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <div className="flex items-center gap-2 text-accent text-sm mb-1">
          <MapPin className="h-4 w-4" />
          <span>{location}</span>
        </div>
        <p className="text-background font-semibold">{name}</p>
        <p className="text-background/70 text-sm">{trip}</p>
      </div>

      {/* Heart Icon */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <Heart className="h-6 w-6 text-background fill-accent/50" />
      </div>
    </div>
  );
}

