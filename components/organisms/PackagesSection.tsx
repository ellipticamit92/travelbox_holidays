"use client";

import { SectionTitle } from "@/components/atoms/SectionTitle";
import { PackageCard } from "@/components/molecules/PackageCard";
import { Tabs } from "@/components/molecules/Tabs";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Landmark } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export interface Package {
  title: string;
  destination: string;
  duration: string;
  groupSize: string;
  price: string;
  originalPrice: string;
  rating: number;
  reviews: number;
  image: string;
  featured: boolean;
}

interface PackagesSectionProps {
  indianPackages?: Package[];
  internationalPackages?: Package[];
  showViewAll?: boolean;
}

const defaultIndianPackages: Package[] = [
  {
    title: "Golden Triangle Tour",
    destination: "Delhi - Agra - Jaipur",
    duration: "6 Days / 5 Nights",
    groupSize: "2-8 People",
    price: "₹24,999",
    originalPrice: "₹32,999",
    rating: 4.9,
    reviews: 128,
    image: "/jaipur.jpeg",
    featured: true,
  },
  {
    title: "Kerala Backwaters Escape",
    destination: "Kochi - Alleppey - Munnar",
    duration: "5 Days / 4 Nights",
    groupSize: "2-6 People",
    price: "₹19,999",
    originalPrice: "₹26,999",
    rating: 4.8,
    reviews: 94,
    image: "/kerala.jpeg",
    featured: false,
  },
  {
    title: "Ladakh Adventure",
    destination: "Leh - Nubra - Pangong",
    duration: "7 Days / 6 Nights",
    groupSize: "4-10 People",
    price: "₹34,999",
    originalPrice: "₹45,999",
    rating: 4.9,
    reviews: 76,
    image: "/ladakh.jpeg",
    featured: false,
  },
];

const defaultInternationalPackages: Package[] = [
  {
    title: "Dubai Dazzle",
    destination: "Dubai - Abu Dhabi",
    duration: "5 Days / 4 Nights",
    groupSize: "2-6 People",
    price: "₹54,999",
    originalPrice: "₹72,999",
    rating: 4.9,
    reviews: 156,
    image: "/dubai.jpeg",
    featured: true,
  },
  {
    title: "Maldives Honeymoon",
    destination: "Malé - Resort Island",
    duration: "4 Days / 3 Nights",
    groupSize: "2 People",
    price: "₹89,999",
    originalPrice: "₹1,20,000",
    rating: 5.0,
    reviews: 89,
    image: "maldives.jpeg",
    featured: false,
  },
  {
    title: "Bali Paradise",
    destination: "Ubud - Seminyak - Kuta",
    duration: "6 Days / 5 Nights",
    groupSize: "2-6 People",
    price: "₹64,999",
    originalPrice: "₹85,999",
    rating: 4.8,
    reviews: 112,
    image: "bali.jpeg",
    featured: false,
  },
];


const tabs = [
  { id: "indian", label: "Indian Tours", icon: Landmark },
  { id: "international", label: "International Tours", icon: Globe },
];

export function PackagesSection({
  indianPackages = defaultIndianPackages,
  internationalPackages = defaultInternationalPackages,
  showViewAll = true,
}: PackagesSectionProps) {
  const [activeTab, setActiveTab] = useState("indian");

  const currentPackages =
    activeTab === "indian" ? indianPackages : internationalPackages;

  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex items-start justify-between gap-4">
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
              className="max-w-2xl mx-0"
            />
          </div>
          {showViewAll && (
            <div className="flex items-center pt-12">
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
            <PackageCard key={index} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}

