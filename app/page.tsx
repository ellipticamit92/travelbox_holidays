import { Button } from "@/components/ui/button";
import { DestinationsSection } from "@/components/organisms/DestinationsSection";
import { PackagesSection } from "@/components/organisms/PackagesSection";
import { WhyTravelWithUsSection } from "@/components/organisms/WhyTravelWithUsSection";
import { TravelStoriesSection } from "@/components/organisms/TravelStoriesSection";
import { Award, Calendar, ChevronDown, MapPin, Plane, Users } from "lucide-react";
import ContactCTA from "@/components/organisms/ContactCTA";
import ReviewSection from "@/components/organisms/ReviewsSection";
import Image from "next/image";
import PackageCategories from "@/components/organisms/PackageCategories";
import Services from "@/components/organisms/Services";

export default function Home() {
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
          <div className="mt-16 max-w-4xl mx-auto animate-fade-up animation-delay-400 text-center">
            <p className="text-background text-sm font-medium mb-6 uppercase tracking-wider">
              Trusted & Certified By
            </p>

            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {[
                { src: "/partner/ministryoftourism.jpeg", alt: "Ministry of Tourism" },
                { src: "/partner/bihar-tourism-logo.jpg", alt: "Bihar Tourism" },
                { src: "/partner/iata.avif", alt: "IATA" },
              ].map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center w-36 h-36 md:w-40 md:h-40"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={140}
                    height={140}
                    className="object-contain"
                  />
                </div>
              ))}
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
      <DestinationsSection />
      <PackageCategories />
      {/* Packages Section */}
      <PackagesSection />
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
