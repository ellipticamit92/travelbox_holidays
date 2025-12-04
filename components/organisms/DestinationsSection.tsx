"use client";

import { SectionTitle } from "@/components/atoms/SectionTitle";
import { DestinationCard } from "@/components/molecules/DestinationCard";
import { Tabs } from "@/components/molecules/Tabs";
import { Button } from "@/components/ui/button";
import { Globe, Landmark } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface Destination {
  name: string;
  image?: string;
  href?: string;
  subtitle?: string;
  packages?: number;
}

interface DestinationsSectionProps {
  indianDestinations?: Destination[];
  internationalDestinations?: Destination[];
  showViewAll?: boolean;
}

const defaultIndianDestinations: Destination[] = [
  { name: "Jaipur", subtitle: "The Pink City", image: "/jaipur.jpeg", packages: 12 },
  { name: "Kerala", subtitle: "God's Own Country", image: "/kerala.jpeg", packages: 15 },
  { name: "Ladakh", subtitle: "Land of High Passes", image: "/ladakh.jpeg", packages: 8 },
  { name: "Varanasi", subtitle: "The Spiritual Capital", image: "/varanasi.jpeg", packages: 10 },
];

const defaultInternationalDestinations: Destination[] = [
  { name: "Dubai", subtitle: "City of Gold", image: "/dubai.jpeg", packages: 18 },
  { name: "Maldives", subtitle: "Tropical Paradise", image: "/maldives.jpeg", packages: 12 },
  { name: "Bali", subtitle: "Island of Gods", image: "/bali.jpeg", packages: 14 },
  { name: "Singapore", subtitle: "Garden City", image: "/singapore.jpeg", packages: 10 },
];

const tabs = [
  { id: "indian", label: "Indian", icon: Landmark },
  { id: "international", label: "International", icon: Globe },
];

export function DestinationsSection({
  indianDestinations = defaultIndianDestinations,
  internationalDestinations = defaultInternationalDestinations,
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
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab}  />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {currentDestinations.map((destination, index) => (
            <DestinationCard key={index} index={index} {...destination} />
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

