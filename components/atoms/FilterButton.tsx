import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FilterButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  className?: string;
}

export function FilterButton({
  label,
  isActive,
  onClick,
  className,
}: FilterButtonProps) {
  return (
    <Button
      variant={isActive ? "default" : "outline"}
      size="sm"
      onClick={onClick}
      className={cn("shrink-0", className)}
    >
      {label}
    </Button>
  );
}

