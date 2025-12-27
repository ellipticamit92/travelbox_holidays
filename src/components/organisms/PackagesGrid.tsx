"use client";

import { PackageCard } from "@/components/molecules/PackageCard";
import { Button } from "@/components/ui/button";
import { PackageData } from "@/data/packages";

interface PackagesGridProps {
  packages: PackageData[];
  activeCategory: string;
  activeType: string;
  categoryLabel?: string;
  typeLabel?: string;
  onResetFilters: () => void;
}

export function PackagesGrid({
  packages,
  activeCategory,
  activeType,
  categoryLabel,
  typeLabel,
  onResetFilters,
}: PackagesGridProps) {
  const getFilterDescription = () => {
    const parts: string[] = [];
    if (activeCategory !== "all") {
      parts.push(categoryLabel || activeCategory);
    }
    if (activeType !== "all") {
      parts.push(typeLabel || activeType);
    }
    return parts.length > 0 ? ` in ${parts.join(" - ")}` : "";
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {packages.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">
              No packages found matching your filters.
            </p>
            <Button variant="outline" className="mt-4" onClick={onResetFilters}>
              View All Packages
            </Button>
          </div>
        ) : (
          <>
            <p className="text-muted-foreground mb-8">
              Showing {packages.length} package
              {packages.length !== 1 ? "s" : ""}
              {getFilterDescription()}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
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
          </>
        )}
      </div>
    </section>
  );
}
