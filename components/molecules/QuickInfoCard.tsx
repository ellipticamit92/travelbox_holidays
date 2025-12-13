import Link from "next/link";
import { Button } from "@/components/ui/button";
import { InfoItem } from "@/components/atoms/InfoItem";
import { LucideIcon } from "lucide-react";

interface QuickInfo {
  icon: LucideIcon;
  label: string;
  value: string;
}

interface QuickInfoCardProps {
  title: string;
  infoItems: QuickInfo[];
  primaryAction?: {
    label: string;
    onClick?: () => void;
    href?: string;
  };
  secondaryAction?: {
    label: string;
    onClick?: () => void;
    href?: string;
  };
  footerText?: string;
  className?: string;
}

export function QuickInfoCard({
  title,
  infoItems,
  primaryAction,
  secondaryAction,
  footerText,
  className,
}: QuickInfoCardProps) {
  return (
    <div className={`sticky top-24 bg-card p-6 rounded-2xl border border-border shadow-lg ${className || ""}`}>
      <h3 className="font-display text-xl text-foreground font-bold mb-4">{title}</h3>

      <div className="space-y-4 mb-6 pb-6 border-b border-border">
        {infoItems.map((item, index) => (
          <InfoItem
            key={index}
            icon={item.icon}
            label={item.label}
            value={item.value}
          />
        ))}
      </div>

      {primaryAction && (
        primaryAction.href ? (
          <Button className="w-full mb-3" size="lg" asChild>
            <Link href={primaryAction.href}>{primaryAction.label}</Link>
          </Button>
        ) : (
          <Button
            className="w-full mb-3"
            size="lg"
            onClick={primaryAction.onClick}
          >
            {primaryAction.label}
          </Button>
        )
      )}

      {secondaryAction && (
        secondaryAction.href ? (
          <Button variant="outline" className="w-full" size="lg" asChild>
            <Link href={secondaryAction.href}>{secondaryAction.label}</Link>
          </Button>
        ) : (
          <Button
            variant="outline"
            className="w-full"
            size="lg"
            onClick={secondaryAction.onClick}
          >
            {secondaryAction.label}
          </Button>
        )
      )}

      {footerText && (
        <p className="text-center text-xs text-muted-foreground mt-4">{footerText}</p>
      )}
    </div>
  );
}

