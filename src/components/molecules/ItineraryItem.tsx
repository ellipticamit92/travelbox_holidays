import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

interface ItineraryItemProps {
  day: number;
  title: string;
  description: string;
  className?: string;
}

export function ItineraryItem({
  day,
  title,
  description,
  className,
}: ItineraryItemProps) {
  return (
    <div
      className={cn(
        "flex gap-4 p-4 bg-card rounded-xl border border-border",
        className
      )}
    >
      <div className="shrink-0">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold">
          {day}
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <Calendar className="h-4 w-4 text-accent" />
          <h4 className="font-display text-lg text-foreground font-semibold">
            Day {day}: {title}
          </h4>
        </div>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
