import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface StoryCardProps {
  title: string;
  author?: string;
  excerpt?: string;
  image?: string;
  date?: string;
  href?: string;
  className?: string;
}

export function StoryCard({
  title,
  author,
  excerpt,
  image,
  date,
  href = "#",
  className,
}: StoryCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col overflow-hidden rounded-lg border bg-card transition-all hover:shadow-lg",
        className
      )}
    >
      <div className="relative aspect-video w-full bg-muted">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
            <span className="text-4xl">📸</span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        {date && (
          <span className="text-xs text-muted-foreground">{date}</span>
        )}
        <h3 className="mt-1 font-semibold group-hover:text-primary transition-colors">
          {title}
        </h3>
        {author && (
          <p className="mt-1 text-xs text-muted-foreground">By {author}</p>
        )}
        {excerpt && (
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
            {excerpt}
          </p>
        )}
      </div>
    </Link>
  );
}

