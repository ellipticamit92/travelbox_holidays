import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionTitleProps {
  label?: string;
  title: string | ReactNode;
  description?: string;
  className?: string;
  align?: "left" | "center" | "right";
}

export function SectionTitle({
  label,
  title,
  description,
  className,
  align = "center",
}: SectionTitleProps) {
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const containerClasses = cn(
    "max-w-2xl mx-auto mb-12",
    alignClasses[align],
    className
  );

  return (
    <div className={containerClasses}>
      {label && (
        <p className="text-accent font-semibold tracking-wider uppercase mb-3 animate-fade-up">
          {label}
        </p>
      )}
      <h2 className="font-display text-3xl md:text-5xl text-foreground font-bold mb-4 animate-fade-up animation-delay-100">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-lg animate-fade-up animation-delay-200">
          {description}
        </p>
      )}
    </div>
  );
}

