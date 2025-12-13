import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface InfoBadgeProps {
  icon: LucideIcon;
  children: React.ReactNode;
  className?: string;
}

export function InfoBadge({ icon: Icon, children, className }: InfoBadgeProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-1.5 bg-primary/10 backdrop-blur-sm  px-3 py-1.5 rounded-full border border-border",
        className
      )}
    >
      <Icon className="h-4 w-4 text-accent" />
      <span className="text-sm">{children}</span>
    </div>
  );
}
