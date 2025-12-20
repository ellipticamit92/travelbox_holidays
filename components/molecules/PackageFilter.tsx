"use client";

import { FilterButton } from "@/components/atoms/FilterButton";
import { Filter } from "lucide-react";

interface FilterOption {
  id: string;
  label: string;
}

interface PackageFilterProps {
  categoryFilters: FilterOption[];
  typeFilters: FilterOption[];
  activeCategory: string;
  activeType: string;
  onCategoryChange: (categoryId: string) => void;
  onTypeChange: (typeId: string) => void;
}

export function PackageFilter({
  categoryFilters,
  typeFilters,
  activeCategory,
  activeType,
  onCategoryChange,
  onTypeChange,
}: PackageFilterProps) {
  return (
    <section className="py-8 bg-card border-b border-border sticky top-16 z-40">
      <div className="container mx-auto px-4">
        {/* Category Filters */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-3">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">
              Category:
            </span>
          </div>
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            {categoryFilters.map((category) => (
              <FilterButton
                key={category.id}
                label={category.label}
                isActive={activeCategory === category.id}
                onClick={() => onCategoryChange(category.id)}
              />
            ))}
          </div>
        </div>

        {/* Type Filters */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">
              Type:
            </span>
          </div>
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            {typeFilters.map((type) => (
              <FilterButton
                key={type.id}
                label={type.label}
                isActive={activeType === type.id}
                onClick={() => onTypeChange(type.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

