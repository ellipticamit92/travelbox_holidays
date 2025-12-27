import { ItineraryItem } from "@/components/molecules/ItineraryItem";

interface ItineraryDay {
  day: number;
  title: string;
  description: string;
}

interface PackageItineraryProps {
  itinerary: ItineraryDay[];
  className?: string;
}

export function PackageItinerary({
  itinerary,
  className,
}: PackageItineraryProps) {
  return (
    <div className={className}>
      <h2 className="font-display text-2xl text-foreground font-bold mb-6">
        Itinerary
      </h2>
      <div className="space-y-4">
        {itinerary.map((day) => (
          <ItineraryItem
            key={day.day}
            day={day.day}
            title={day.title}
            description={day.description}
          />
        ))}
      </div>
    </div>
  );
}

