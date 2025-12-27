interface DestinationAboutProps {
  destinationName: string;
  description: string;
  className?: string;
}

export function DestinationAbout({
  destinationName,
  description,
  className,
}: DestinationAboutProps) {
  return (
    <div className={className}>
      <h2 className="font-display text-2xl text-foreground font-bold mb-4">
        About {destinationName}
      </h2>
      <p className="text-muted-foreground leading-relaxed text-lg">{description}</p>
    </div>
  );
}

