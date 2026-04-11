import Image from "next/image";
import { Button } from "@/components/ui/button";
import { DestinationsSection } from "@/components/organisms/DestinationsSection";
import { PackagesSection } from "@/components/organisms/PackagesSection";
import { WhyTravelWithUsSection } from "@/components/organisms/WhyTravelWithUsSection";
import { TravelStoriesSection } from "@/components/organisms/TravelStoriesSection";
import { ChevronDown } from "lucide-react";
import ContactCTA from "@/components/organisms/ContactCTA";
import ReviewSection from "@/components/organisms/ReviewsSection";
import PackageCategories from "@/components/organisms/PackageCategories";
import Services from "@/components/organisms/Services";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const [destinations, packages] = await Promise.all([
    prisma.destination.findMany({
      select: { id: true, slug: true, name: true, subtitle: true, image: true, category: true, packages: true },
      orderBy: { createdAt: "asc" },
    }),
    prisma.package.findMany({
      select: { id: true, slug: true, title: true, destination: true, duration: true, groupSize: true, price: true, originalPrice: true, rating: true, reviews: true, image: true, featured: true, category: true },
      orderBy: { createdAt: "asc" },
    }),
  ]);

  const indianDestinations = destinations.filter((d) => d.category === "india");
  const internationalDestinations = destinations.filter((d) => d.category === "international");
  const indianPackages = packages.filter((p) => p.category === "india");
  const internationalPackages = packages.filter((p) => p.category === "international");
  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/hero-taj-mahal.jpg"
            alt="Taj Mahal at golden hour sunrise"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-accent font-semibold tracking-wider uppercase mb-4 animate-fade-up">
              Your Trusted Travel Partner in Patna
            </p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-background font-bold leading-tight mb-6 animate-fade-up animation-delay-100">
              Explore <span className="text-accent">India</span> & Beyond
            </h1>
            <p className="text-lg md:text-xl text-background/90 mb-8 max-w-2xl mx-auto animate-fade-up animation-delay-200">
              From India's spiritual destinations to exotic international
              getaways — customized, affordable tours for unforgettable
              memories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-300">
              <Button variant="hero" size="lg">
                India Tours
              </Button>
              <Button variant="hero-outline" size="lg">
                International Tours
              </Button>
            </div>
          </div>

          {/* Search Box
          <div className="mt-16 max-w-5xl mx-auto animate-fade-up animation-delay-400">
            <div className="bg-card/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-3 p-3 bg-muted rounded-xl">
                  <MapPin className="h-5 w-5 text-accent" />
                  <div>
                    <p className="text-xs text-muted-foreground">Destination</p>
                    <p className="font-semibold text-foreground">Where to?</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted rounded-xl">
                  <Calendar className="h-5 w-5 text-accent" />
                  <div>
                    <p className="text-xs text-muted-foreground">Travel Date</p>
                    <p className="font-semibold text-foreground">Pick a date</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted rounded-xl">
                  <Users className="h-5 w-5 text-accent" />
                  <div>
                    <p className="text-xs text-muted-foreground">Travelers</p>
                    <p className="font-semibold text-foreground">2 Adults</p>
                  </div>
                </div>
                <Button variant="default" size="lg" className="h-full">
                  Search Trips
                </Button>
              </div>
            </div>
          </div>
          */}

          {/* Partner Badges */}
          <div className="mt-16 max-w-4xl mx-auto animate-fade-up animation-delay-400">
            <p className="text-background/70 text-sm font-medium mb-6 uppercase tracking-wider text-center">
              Trusted Partner Of
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              <div className="bg-background rounded-sm">
                <Image
                  src="/partner/bihar_tourism_logo.webp"
                  alt="Bihar Tourism Logo"
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>
              <div className="bg-background rounded-sm px-4 py-2">
                <Image
                  src="/partner/ministry_of_tourism_india.svg"
                  alt="Bihar Tourism Logo"
                  width={280}
                  height={280}
                  className="object-contain"
                />
              </div>
              <div className="bg-background rounded-sm px-6">
                <Image
                  src="/partner/iata_logo.svg"
                  alt="Bihar Tourism Logo"
                  width={145}
                  height={145}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <a
            href="#destinations"
            className="flex flex-col items-center gap-2 text-background/80 hover:text-background transition-colors"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ChevronDown className="h-6 w-6" />
          </a>
        </div>
      </section>
      {/* Destinations Section */}
      <DestinationsSection
        indianDestinations={indianDestinations}
        internationalDestinations={internationalDestinations}
      />
      <PackageCategories />
      {/* Packages Section */}
      <PackagesSection
        indianPackages={indianPackages}
        internationalPackages={internationalPackages}
      />
      <Services />
      {/* Why Travel With Us Section */}
      <WhyTravelWithUsSection />
      {/* Travel Stories Section */}
      <TravelStoriesSection />
      <ReviewSection />
      {/* Contact CTA Section */}
      <ContactCTA />
    </>
  );
}
