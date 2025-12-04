import { SectionTitle } from "@/components/atoms/SectionTitle";
import { PackageCard } from "@/components/molecules/PackageCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Package {
  title: string;
  description?: string;
  price?: string;
  duration?: string;
  href?: string;
}

interface PackagesSectionProps {
  packages?: Package[];
  showViewAll?: boolean;
}

const defaultPackages: Package[] = [
  {
    title: "European Adventure",
    description:
      "Explore the best of Europe with our curated 10-day tour covering major cities and hidden gems.",
    price: "$2,499",
    duration: "10 Days",
  },
  {
    title: "Tropical Paradise",
    description:
      "Relax and unwind in stunning tropical destinations with all-inclusive luxury resorts.",
    price: "$1,799",
    duration: "7 Days",
  },
  {
    title: "Cultural Discovery",
    description:
      "Immerse yourself in rich cultures and traditions across Asia with expert local guides.",
    price: "$3,299",
    duration: "14 Days",
  },
];

export function PackagesSection({
  packages = defaultPackages,
  showViewAll = true,
}: PackagesSectionProps) {
  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Travel Packages"
          subtitle="Carefully curated packages for every traveler"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <PackageCard key={index} {...pkg} />
          ))}
        </div>
        {showViewAll && (
          <div className="mt-8 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/packages">View All Packages</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

