interface PackagesHeroProps {
  title?: string;
  description?: string;
}

export function PackagesHero({
  title = "Our Travel Packages",
  description = "Explore our curated collection of travel packages designed to create unforgettable experiences",
}: PackagesHeroProps) {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
          Our <span className="text-primary">Travel Packages</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
}

