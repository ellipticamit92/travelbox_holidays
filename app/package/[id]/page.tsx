import { notFound } from "next/navigation";
import { getPackageById, getPackagesByCategory } from "@/data/packages";
import { DestinationHero } from "@/components/organisms/DestinationHero";
import { DestinationAbout } from "@/components/organisms/DestinationAbout";
import { DestinationHighlights } from "@/components/organisms/DestinationHighlights";
import { PackageItinerary } from "@/components/organisms/PackageItinerary";
import { InclusionsExclusions } from "@/components/molecules/InclusionsExclusions";
import { PackageBookingCard } from "@/components/molecules/PackageBookingCard";
import { Clock, MapPin, Star, Users } from "lucide-react";
import Link from "next/link";

interface PackagePageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: PackagePageProps) {
  const { id } = await params;
  const packageData = getPackageById(id);

  if (!packageData) {
    return {
      title: "Package Not Found",
    };
  }

  return {
    title: `${packageData.title} | TravelBox Holidays`,
    description: packageData.description,
  };
}

export default async function PackagePage({ params }: PackagePageProps) {
  const { id } = await params;
  const packageData = getPackageById(id);

  if (!packageData) {
    notFound();
  }

  // Get similar packages (same category, excluding current)
  const similarPackages = packageData
    ? getPackagesByCategory(packageData.category).filter(p => p.id !== packageData.id).slice(0, 3)
    : [];

  // Prepare hero badges
  const heroBadges = [
    {
      icon: Star,
      text: `${packageData.rating} (${packageData.reviews} reviews)`,
    },
    {
        icon: Clock,
        text: packageData.duration
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <DestinationHero
        image={packageData.image.startsWith("/") ? packageData.image : `/${packageData.image}`}
        name={packageData.title}
        subtitle={packageData.destination}
        backHref="/#packages"
        badges={heroBadges}
        pageName="Packages"
      />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              <DestinationAbout
                destinationName={packageData.title}
                description={packageData.description}
              />
              <DestinationHighlights highlights={packageData.highlights} />
              <PackageItinerary itinerary={packageData.itinerary} />
              <div>
                <h2 className="font-display text-2xl text-foreground font-bold mb-6">
                  Inclusions & Exclusions
                </h2>
                <InclusionsExclusions
                  inclusions={packageData.inclusions}
                  exclusions={packageData.exclusions}
                />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <PackageBookingCard
                price={packageData.price}
                originalPrice={packageData.originalPrice}
                rating={packageData.rating}
                reviews={packageData.reviews}
                duration={packageData.duration}
                groupSize={packageData.groupSize}
                destination={packageData.destination}
                bookNowHref={`/book?package=${id}`}
                enquireHref="/contact"
              />
            </div>
          </div>
        </div>
      </section>

        {/* Similar Packages */}
        {similarPackages.length > 0 && (
        <section className="py-12 md:py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-2xl md:text-3xl text-foreground font-bold mb-8">
              Similar {packageData.category === "india" ? "India" : "International"} Packages
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarPackages.map((similarPkg) => (
                <Link 
                  key={similarPkg.id} 
                  href={`/package/${similarPkg.id}`}
                  className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={similarPkg.image}
                      alt={similarPkg.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {similarPkg.featured && (
                      <span className="absolute top-3 left-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                        Best Seller
                      </span>
                    )}
                    <div className="absolute top-3 right-3 bg-card/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                      <Star className="h-3 w-3 text-accent fill-accent" />
                      <span className="text-xs font-semibold text-foreground">{similarPkg.rating}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-2">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{similarPkg.destination}</span>
                    </div>
                    <h3 className="font-display text-lg text-foreground font-bold mb-3 group-hover:text-primary transition-colors">
                      {similarPkg.title}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{similarPkg.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3.5 w-3.5" />
                        <span>{similarPkg.groupSize}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xl font-bold text-primary">{similarPkg.price}</span>
                        <span className="text-xs text-muted-foreground line-through ml-2">{similarPkg.originalPrice}</span>
                      </div>
                      <span className="text-sm font-medium text-primary group-hover:underline">View Details</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
