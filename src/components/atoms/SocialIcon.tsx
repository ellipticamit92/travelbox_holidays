import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialIconProps {
  href: string;
  icon: LucideIcon;
  label: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function SocialIcon({
  href,
  icon: Icon,
  label,
  className,
  size = "md",
}: SocialIconProps) {
  const sizeClasses = {
    sm: "size-4",
    md: "size-5",
    lg: "size-6",
  };

  return (
    <Link
      href={href}
      aria-label={label}
      className={cn(
        "text-muted-foreground transition-colors hover:text-primary",
        className
      )}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className={sizeClasses[size]} />
    </Link>
  );
}
