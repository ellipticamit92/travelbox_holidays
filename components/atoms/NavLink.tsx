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
}

export function NavLink({
  href,
  children,
  className,
  activeClassName,
  isScrolled,
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium transition-colors hover:text-accent",
        isActive
          ? activeClassName || "text-primary"
          : "text-muted-foreground",
        isScrolled ? "text-foreground" : "text-background",
        className
      )}
    >
      {children}
    </Link>
  );
}

