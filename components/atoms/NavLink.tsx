"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  isScrolled?: boolean;
  isHomePage?: boolean;
}

export function NavLink({
  href,
  children,
  className,
  activeClassName,
  isScrolled,
  isHomePage = true,
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  // Determine text colors based on home page and scroll state
  const getTextColor = () => {
    if (isActive && isHomePage) return "text-secondary";
    if (isActive) return activeClassName || "text-primary";
    if (isScrolled) return "text-foreground";
    if (!isHomePage) return "text-primary";
    return "text-background";
  };

  const getHoverColor = () => {
    if (!isHomePage && !isScrolled) return "hover:text-secondary";
    return "hover:text-accent";
  };

  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium transition-colors",
        getTextColor(),
        getHoverColor(),
        className
      )}
    >
      {children}
    </Link>
  );
}

