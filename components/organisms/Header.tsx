"use client";

import { Logo } from "@/components/atoms/Logo";
import { Navigation } from "@/components/molecules/Navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavItem {
  href: string;
  label: string;
}

interface HeaderProps {
  navItems?: NavItem[];
  showCTA?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
}

const defaultNavItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/#destinations", label: "Destinations" },
  { href: "/#packages", label: "Packages" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header({
  navItems = defaultNavItems,
  showCTA = true,
  ctaLabel = "Book Now",
  ctaHref = "/book",
}: HeaderProps) {
  const pathname = usePathname();
  const isHomePage = pathname === "/" || pathname === "/about";
 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
    className={`fixed w-full z-50 transition-all duration-500 md:top-10 ${
      isScrolled
        ? "bg-card/95 backdrop-blur-md shadow-lg py-3 top-0!"
        : "bg-transparent py-4"
    }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Logo size="md" isScrolled={isScrolled} isHomePage={isHomePage} />

        {/* Desktop Navigation */}
        <Navigation
          items={navItems}
          className="hidden md:flex"
          orientation="horizontal"
          isScrolled={isScrolled}
          isHomePage={isHomePage}
        />

        {/* CTA Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          {showCTA && (
            <Button
              className="hidden md:inline-flex"
              asChild
              variant={isScrolled ? "default" : "hero"}
              size="default"
            >
              <a href={ctaHref}>{ctaLabel}</a>
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "md:hidden",
              !isHomePage && !isScrolled && "text-primary hover:text-secondary"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="border-t md:hidden">
          <div className="container mx-auto px-4 py-4">
            <Navigation
              items={navItems}
              orientation="vertical"
              className="mb-4"
              isHomePage={isHomePage}
            />
            {showCTA && (
              <Button className="w-full" size="sm" asChild>
                <a href={ctaHref}>{ctaLabel}</a>
              </Button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

