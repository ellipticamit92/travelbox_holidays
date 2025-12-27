import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface BusinessHours {
  day: string;
  hours: string;
}

interface BusinessHoursCardProps {
  businessHours: BusinessHours[];
  footerText?: string;
  className?: string;
}

export function BusinessHoursCard({
  businessHours,
  footerText,
  className,
}: BusinessHoursCardProps) {
  return (
    <div
      className={cn("bg-card border border-border rounded-2xl p-8", className)}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
          <Clock className="w-6 h-6 text-primary" />
        </div>
        <h3 className="font-display text-2xl font-bold text-foreground">
          Business Hours
        </h3>
      </div>
      <div className="space-y-4">
        {businessHours.map((schedule, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-3 border-b border-border last:border-0"
          >
            <span className="font-medium text-foreground">{schedule.day}</span>
            <span className="text-primary font-semibold">{schedule.hours}</span>
          </div>
        ))}
      </div>
      {footerText && (
        <p className="text-sm text-muted-foreground mt-6">{footerText}</p>
      )}
    </div>
  );
}
