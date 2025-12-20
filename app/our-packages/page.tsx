"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PackageFilter } from "@/components/molecules/PackageFilter";
import { PackagesHero } from "@/components/organisms/PackagesHero";
import { PackagesGrid } from "@/components/organisms/PackagesGrid";
import { allPackages, PackageData } from "@/data/packages";

const categoryFilters = [
  { id: "all", label: "All Categories" },
  { id: "india", label: "India Tours" },
  { id: "international", label: "International Tours" },
];

const typeFilters = [
  { id: "all", label: "All Types" },
  { id: "religious", label: "Religious Tours" },
  { id: "adventure", label: "Adventure Tours" },
  { id: "leisure", label: "Leisure Tours" },
  { id: "honeymoon", label: "Honeymoon Tours" },
  { id: "cultural", label: "Cultural Tours" },
];

const Packages = () => {
  const router = useRouter();

  const [activeCategory, setActiveCategory] = useState("all");
  const [activeType, setActiveType] = useState("all");
  const [filteredPackages, setFilteredPackages] =
    useState<PackageData[]>(allPackages);

  // Filter logic
  useEffect(() => {
    let filtered = allPackages;

    if (activeCategory !== "all") {
      filtered = filtered.filter(
        (pkg) => pkg.category === activeCategory
      );
    }

    if (activeType !== "all") {
      filtered = filtered.filter(
        (pkg) => pkg.type === activeType
      );
    }

    setFilteredPackages(filtered);
  }, [activeCategory, activeType]);

  // Sync URL (state → URL only)
  useEffect(() => {
    const params = new URLSearchParams();

    if (activeCategory !== "all") {
      params.set("category", activeCategory);
    }

    if (activeType !== "all") {
      params.set("type", activeType);
    }

    const query = params.toString();
    router.replace(
      query ? `/our-packages?${query}` : "/our-packages",
      { scroll: false }
    );
  }, [activeCategory, activeType, router]);

  const handleResetFilters = () => {
    setActiveCategory("all");
    setActiveType("all");
  };

  const getCategoryLabel = () =>
    categoryFilters.find((c) => c.id === activeCategory)?.label || "";

  const getTypeLabel = () =>
    typeFilters.find((t) => t.id === activeType)?.label || "";

  return (
    <div className="min-h-screen bg-background">
      <PackagesHero />

      <PackageFilter
        categoryFilters={categoryFilters}
        typeFilters={typeFilters}
        activeCategory={activeCategory}
        activeType={activeType}
        onCategoryChange={setActiveCategory}
        onTypeChange={setActiveType}
      />

      <PackagesGrid
        packages={filteredPackages}
        activeCategory={activeCategory}
        activeType={activeType}
        categoryLabel={getCategoryLabel()}
        typeLabel={getTypeLabel()}
        onResetFilters={handleResetFilters}
      />
    </div>
  );
};

export default Packages;
