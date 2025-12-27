import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface InclusionsExclusionsProps {
  inclusions: string[];
  exclusions: string[];
  className?: string;
}

export function InclusionsExclusions({
  inclusions,
  exclusions,
  className,
}: InclusionsExclusionsProps) {
  return (
    <div className={cn("grid md:grid-cols-2 gap-6", className)}>
      {/* Inclusions */}
      <div>
        <h3 className="font-display text-xl text-foreground font-bold mb-4 flex items-center gap-2">
          <Check className="h-5 w-5 text-green-600" />
          What's Included
        </h3>
        <ul className="space-y-2">
          {inclusions.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
              <span className="text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Exclusions */}
      <div>
        <h3 className="font-display text-xl text-foreground font-bold mb-4 flex items-center gap-2">
          <X className="h-5 w-5 text-red-600" />
          What's Not Included
        </h3>
        <ul className="space-y-2">
          {exclusions.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <X className="h-4 w-4 text-red-600 mt-0.5 shrink-0" />
              <span className="text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
