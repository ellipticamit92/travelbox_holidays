"use client";

import { NavLink } from "@/components/atoms/NavLink";
import { cn } from "@/lib/utils";

interface NavItem {
  href: string;
  label: string;
}

interface NavigationProps {
  items: NavItem[];
  className?: string;
  orientation?: "horizontal" | "vertical";
  isScrolled?: boolean;
  isHomePage?: boolean;
}

export function Navigation({
  items,
  className,
  orientation = "horizontal",
  isScrolled,
  isHomePage = true,
}: NavigationProps) {
  return (
    <nav
      className={cn(
        "flex",
        orientation === "horizontal" ? "flex-row gap-6" : "flex-col gap-4",
        className
      )}
    >
      {items.map((item) => (
        <NavLink
          key={item.href}
          href={item.href}
          isScrolled={isScrolled}
          isHomePage={isHomePage}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
