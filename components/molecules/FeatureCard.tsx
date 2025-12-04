import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  index?: number;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
  index = 0
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-colors animate-fade-up",
        className
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-6">
        <Icon className="h-7 w-7 text-accent-foreground" />
      </div>
      <h3 className="font-display text-xl font-bold mb-3">{title}</h3>
      <p className="text-primary-foreground/70">{description}</p>
    </div>
  );
}

