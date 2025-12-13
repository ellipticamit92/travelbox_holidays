import { cn } from "@/lib/utils";

interface MapEmbedProps {
  src: string;
  title?: string;
  className?: string;
}

export function MapEmbed({ src, title = "Location", className }: MapEmbedProps) {
  return (
    <div
      className={cn(
        "bg-card border border-border rounded-2xl overflow-hidden h-[300px] relative",
        className
      )}
    >
      <iframe
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
        className="grayscale hover:grayscale-0 transition-all duration-500"
      />
    </div>
  );
}

