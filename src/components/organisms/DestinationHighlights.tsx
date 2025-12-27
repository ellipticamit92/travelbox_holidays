import { HighlightItem } from "@/components/molecules/HighlightItem";

interface DestinationHighlightsProps {
  highlights: string[];
  className?: string;
}

export function DestinationHighlights({
  highlights,
  className,
}: DestinationHighlightsProps) {
  return (
    <div className={className}>
      <h2 className="font-display text-2xl text-foreground font-bold mb-4">Highlights</h2>
      <div className="grid sm:grid-cols-2 gap-3">
        {highlights.map((highlight, index) => (
          <HighlightItem key={index}>{highlight}</HighlightItem>
        ))}
      </div>
    </div>
  );
}

