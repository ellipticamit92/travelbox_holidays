import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface InfoItemProps {
  icon: LucideIcon;
  label: string;
  value: string;
  className?: string;
}

export function InfoItem({ icon: Icon, label, value, className }: InfoItemProps) {
  return (
    <div className={cn("flex items-start gap-3", className)}>
      <Icon className="h-5 w-5 text-primary mt-0.5 shrink-0" />
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="text-foreground font-medium">{value}</p>
      </div>
    </div>
  );
}
