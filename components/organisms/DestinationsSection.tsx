import { SectionTitle } from "@/components/atoms/SectionTitle";
import { DestinationCard } from "@/components/molecules/DestinationCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Destination {
  name: string;
  image?: string;
  description?: string;
  href?: string;
}

interface DestinationsSectionProps {
  destinations?: Destination[];
  showViewAll?: boolean;
}

const defaultDestinations: Destination[] = [
  {
    name: "Paris, France",
    description: "The City of Light awaits you with its romantic charm",
  },
  {
    name: "Tokyo, Japan",
    description: "Experience the perfect blend of tradition and modernity",
  },
  {
    name: "Bali, Indonesia",
    description: "Tropical paradise with stunning beaches and culture",
  },
  {
    name: "New York, USA",
    description: "The city that never sleeps offers endless adventures",
  },
];

export function DestinationsSection({
  destinations = defaultDestinations,
  showViewAll = true,
}: DestinationsSectionProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Popular Destinations"
          subtitle="Discover amazing places around the world"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((destination, index) => (
            <DestinationCard key={index} {...destination} />
          ))}
        </div>
        {showViewAll && (
          <div className="mt-8 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/destinations">View All Destinations</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

