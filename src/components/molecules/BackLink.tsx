import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface BackLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function BackLink({ href, children, className }: BackLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center text-primary hover:text-primary/90 mb-4 transition-colors",
        className
      )}
    >
      <ArrowLeft className="h-4 w-4 mr-2" />
      {children}
    </Link>
  );
}
