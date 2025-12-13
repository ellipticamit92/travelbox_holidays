import { notFound } from "next/navigation";
import { getDestinationById } from "@/data/destinations";
import { allPackages } from "@/data/packages";
import { DestinationHero } from "@/components/organisms/DestinationHero";
import { DestinationAbout } from "@/components/organisms/DestinationAbout";
import { DestinationHighlights } from "@/components/organisms/DestinationHighlights";
import { DestinationPackages } from "@/components/molecules/DestinationPackages";
import { QuickInfoCard } from "@/components/molecules/QuickInfoCard";
import { Calendar, Globe, MapPin, MessageCircle } from "lucide-react";

interface DestinationPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: DestinationPageProps) {
  const { id } = await params;
  const destination = getDestinationById(id);

  if (!destination) {
    return {
      title: "Destination Not Found",
    };
  }

  return {
    title: `${destination.name} - ${destination.subtitle} | TravelBox Holidays`,
    description: destination.description,
  };
}

export default async function DestinationPage({ params }: DestinationPageProps) {
  const { id } = await params;
  const destination = getDestinationById(id);

  if (!destination) {
    notFound();
  }

  const destinationPackages = allPackages.filter((pkg) =>
    pkg.destination.toLowerCase().includes(destination?.name.toLowerCase() || "") ||
    pkg.title.toLowerCase().includes(destination?.name.toLowerCase() || "")
  );

  // Prepare quick info items for sidebar
  const quickInfoItems = [
    {
      icon: Calendar,
      label: "Best Time to Visit",
      value: destination.bestTimeToVisit,
    },
    ...(destination.currency
      ? [
          {
            icon: Globe,
            label: "Currency",
            value: destination.currency,
          },
        ]
      : []),
    {
      icon: MessageCircle,
      label: "Language",
      value: destination.language || "N/A",
    },
    {
      icon: MapPin,
      label: "Category",
      value: destination.category.charAt(0).toUpperCase() + destination.category.slice(1),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <DestinationHero
        image={destination.image}
        name={destination.name}
        subtitle={destination.subtitle}
        packages={destination.packages}
        bestTimeToVisit={destination.bestTimeToVisit}
        currency={destination.currency}
        language={destination.language}
      />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              <DestinationAbout
                destinationName={destination.name}
                description={destination.description}
              />
              <DestinationHighlights highlights={destination.highlights} />
              <DestinationPackages
                title={`Packages to ${destination.name}`}
                packages={destinationPackages}
                destinationName={destination.name}
              />
            </div>
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <QuickInfoCard
                title="Quick Info"
                infoItems={quickInfoItems}
                primaryAction={{
                  label: "Plan My Trip",
                }}
                secondaryAction={{
                  label: "Request Custom Package",
                }}
                footerText="Get a personalized itinerary from our travel experts"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
