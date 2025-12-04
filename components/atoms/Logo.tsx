import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  href?: string;
  size?: "sm" | "md" | "lg";
  isScrolled?: boolean;
}

export function Logo({ className, href = "/", size = "md", isScrolled = false }: LogoProps) {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <Link
      href={href}
      className={cn(
        "font-bold tracking-tight text-foreground transition-colors hover:text-primary",
        sizeClasses[size],
        className
      )}
    >
       <span className={`font-display text-2xl font-bold transition-colors ${
                isScrolled ? "text-primary" : "text-background"
              }`}>
                Travel<span className="text-accent">Box</span>
              </span>
              <span className={`text-md font-medium transition-colors ${
                isScrolled ? "text-muted-foreground" : "text-background/80"
              }`}>
                 Holidays
              </span>
    </Link>
  );
}

