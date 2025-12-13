interface ContactHeroProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export function ContactHero({
  title = "Get In Touch",
  subtitle = "Have questions about our packages or need help planning your dream vacation? We're here to help you every step of the way.",
  className,
}: ContactHeroProps) {
  return (
    <section
      className={`relative pt-32 pb-20 bg-linear-to-br from-primary/10 via-background to-secondary/10 ${className || ""}`}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
          Get In <span className="text-primary">Touch</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  );
}

