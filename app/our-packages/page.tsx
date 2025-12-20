"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
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
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") || "all";
  const typeParam = searchParams.get("type") || "all";

  const [activeCategory, setActiveCategory] = useState(categoryParam);
  const [activeType, setActiveType] = useState(typeParam);
  const [filteredPackages, setFilteredPackages] = useState<PackageData[]>(allPackages);

  // Sync state with URL params
  useEffect(() => {
    setActiveCategory(categoryParam);
    setActiveType(typeParam);
  }, [categoryParam, typeParam]);

  // Filter packages based on both category and type
  useEffect(() => {
    let filtered = allPackages;

    // Filter by category
    if (activeCategory !== "all") {
      filtered = filtered.filter((pkg) => pkg.category === activeCategory);
    }

    // Filter by type
    if (activeType !== "all") {
      filtered = filtered.filter((pkg) => pkg.type === activeType);
    }

    setFilteredPackages(filtered);
  }, [activeCategory, activeType]);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    const params = new URLSearchParams(searchParams.toString());
    
    if (categoryId === "all") {
      params.delete("category");
    } else {
      params.set("category", categoryId);
    }

    // Keep type param if it exists
    if (activeType !== "all") {
      params.set("type", activeType);
    } else {
      params.delete("type");
    }

    router.push(`/our-packages?${params.toString()}`);
  };

  const handleTypeChange = (typeId: string) => {
    setActiveType(typeId);
    const params = new URLSearchParams(searchParams.toString());
    
    if (typeId === "all") {
      params.delete("type");
    } else {
      params.set("type", typeId);
    }

    // Keep category param if it exists
    if (activeCategory !== "all") {
      params.set("category", activeCategory);
    } else {
      params.delete("category");
    }

    router.push(`/our-packages?${params.toString()}`);
  };

  const handleResetFilters = () => {
    setActiveCategory("all");
    setActiveType("all");
    router.push("/our-packages");
  };

  const getCategoryLabel = () => {
    return categoryFilters.find((c) => c.id === activeCategory)?.label || "";
  };

  const getTypeLabel = () => {
    return typeFilters.find((t) => t.id === activeType)?.label || "";
  };

  return (
    <div className="min-h-screen bg-background">
      <PackagesHero />
      <PackageFilter
        categoryFilters={categoryFilters}
        typeFilters={typeFilters}
        activeCategory={activeCategory}
        activeType={activeType}
        onCategoryChange={handleCategoryChange}
        onTypeChange={handleTypeChange}
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
