import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PackageCard } from "@/components/molecules/PackageCard";
import { PackageData } from "@/data/packages";

interface DestinationPackagesProps {
  title: string;
  packages: PackageData[];
  destinationName: string;
  browseAllHref?: string;
  className?: string;
}

export function DestinationPackages({
  title,
  packages,
  destinationName,
  browseAllHref = "/#packages",
  className,
}: DestinationPackagesProps) {
  return (
    <div className={className}>
      <h2 className="font-display text-2xl text-foreground font-bold mb-6">{title}</h2>
      {packages.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-6">
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
              variant="compact"
              href={`/package/${pkg.id}`}
              showReviews={false}
              showPerPerson={false}
              ctaText="View Details"
              index={index}
            />
          ))}
        </div>
      ) : (
        <div className="bg-card p-8 rounded-2xl border border-border text-center">
          <p className="text-muted-foreground mb-4">
            No specific packages available for {destinationName} yet.
          </p>
          <Link href={browseAllHref}>
            <Button variant="outline">Browse All Packages</Button>
          </Link>
        </div>
      )}
    </div>
  );
}

