"use client";

import { SectionTitle } from "@/components/atoms/SectionTitle";
import { PackageCard } from "@/components/molecules/PackageCard";
import { Tabs } from "@/components/molecules/Tabs";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Landmark } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { getPackagesByCategory } from "@/data/packages";

interface PackagesSectionProps {
  showViewAll?: boolean;
}

const tabs = [
  { id: "indian", label: "Indian Tours", icon: Landmark },
  { id: "international", label: "International Tours", icon: Globe },
];

export function PackagesSection({
  showViewAll = true,
}: PackagesSectionProps) {
  const [activeTab, setActiveTab] = useState("indian");

  const indianPackages = getPackagesByCategory("india");
  const internationalPackages = getPackagesByCategory("international");

  const currentPackages =
    activeTab === "indian" ? indianPackages : internationalPackages;

  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row mb-10 md:mb-0">
          <div className="flex-1">
            <SectionTitle
              label="Travel Packages"
              title={
                <>
                  Carefully Curated <span className="text-primary">Holiday Packages</span>
                </>
              }
              description="Discover handpicked travel experiences designed for every type of traveler"
              align="left"
              className="max-w-2xl mx-0 mb-2 md:mb-12"
            />
          </div>
          {showViewAll && (
            <div className="flex items-center pt-0 md:pt-12">
              <Button asChild variant="outline" size="lg">
                <Link href="/packages">
                  View All Packages <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          )}
        </div>
        <Tabs
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          className="justify-start"
          inactiveBg="white"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {currentPackages.map((pkg, index) => (
            <PackageCard
              key={pkg.id}
              id={pkg.id}
              title={pkg.title}
              destination={pkg.destination}
              duration={pkg.duration}
              groupSize={pkg.groupSize}
              price={pkg.price}
              originalPrice={pkg.originalPrice}
              rating={pkg.rating}
              reviews={pkg.reviews}
              image={pkg.image}
              featured={pkg.featured}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

