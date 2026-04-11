"use client";

import { SectionTitle } from "@/components/atoms/SectionTitle";
import { DestinationCard } from "@/components/molecules/DestinationCard";
import { Tabs } from "@/components/molecules/Tabs";
import { Button } from "@/components/ui/button";
import { Globe, Landmark } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export interface DestinationItem {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  image: string | null;
  category: string;
  packages: number;
}

interface DestinationsSectionProps {
  indianDestinations: DestinationItem[];
  internationalDestinations: DestinationItem[];
  showViewAll?: boolean;
}

const tabs = [
  { id: "indian", label: "Indian", icon: Landmark },
  { id: "international", label: "International", icon: Globe },
];

export function DestinationsSection({
  indianDestinations,
  internationalDestinations,
  showViewAll = false,
}: DestinationsSectionProps) {
  const [activeTab, setActiveTab] = useState("indian");

  const currentDestinations =
    activeTab === "indian" ? indianDestinations : internationalDestinations;

  return (
    <section id="destinations" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionTitle
          label="Popular Destinations"
          title={
            <>
              Explore <span className="text-primary">Amazing Places</span>
            </>
          }
          description="From India's majestic heritage to exotic international getaways"
        />
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {currentDestinations.map((destination, index) => (
            <DestinationCard
              key={destination.id}
              index={index}
              name={destination.name}
              subtitle={destination.subtitle}
              image={destination.image ?? undefined}
              href={`/destinations/${destination.slug}`}
              packages={destination.packages}
            />
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
