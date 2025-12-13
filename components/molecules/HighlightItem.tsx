import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface HighlightItemProps {
  children: React.ReactNode;
  className?: string;
}

export function HighlightItem({ children, className }: HighlightItemProps) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 bg-card p-4 rounded-xl border border-border",
        className
      )}
    >
      <ChevronRight className="h-5 w-5 text-accent shrink-0 mt-0.5" />
      <span className="text-foreground">{children}</span>
    </div>
  );
}
