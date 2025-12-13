import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  href?: string;
  size?: "sm" | "md" | "lg";
  isScrolled?: boolean;
  isHomePage?: boolean;
}

export function Logo({ className, href = "/", size = "md", isScrolled = false, isHomePage = true }: LogoProps) {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  // Determine text colors based on home page and scroll state
  const getMainTextColor = () => {
    if (isScrolled) return "text-primary";
    if (!isHomePage) return "text-primary";
    return "text-background";
  };

  const getSubTextColor = () => {
    if (isScrolled) return "text-muted-foreground";
    if (!isHomePage) return "text-muted-foreground";
    return "text-background/80";
  };

  return (
    <Link
      href={href}
      className={cn(
        "font-bold tracking-tight text-foreground transition-colors",
        !isHomePage && !isScrolled && "hover:text-secondary",
        isHomePage && "hover:text-primary",
        sizeClasses[size],
        className
      )}
    >
       <span className={cn(
         "font-display text-2xl font-bold transition-colors",
         getMainTextColor()
       )}>
                Travel<span className="text-accent">Box</span>
              </span>
              <span className={cn(
                "text-md font-medium transition-colors",
                getSubTextColor()
              )}>
                 Holidays
              </span>
    </Link>
  );
}

