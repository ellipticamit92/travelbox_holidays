import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactInfoCardProps {
  icon: LucideIcon;
  title: string;
  details: string[];
  className?: string;
}

export function ContactInfoCard({
  icon: Icon,
  title,
  details,
  className,
}: ContactInfoCardProps) {
  return (
    <div
      className={cn(
        "bg-card border border-border rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300",
        className
      )}
    >
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="font-display text-xl font-semibold text-foreground mb-4">
        {title}
      </h3>
      {details.map((detail, idx) => (
        <p key={idx} className="text-muted-foreground">
          {detail}
        </p>
      ))}
    </div>
  );
}

