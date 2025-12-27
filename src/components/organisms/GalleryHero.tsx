interface GalleryHeroProps {
    subtitle?: string;
    title?: string;
    description?: string;
}

export function GalleryHero({
    subtitle = "Client Memories",
    title = "Travel Gallery",
    description = "Discover the beautiful moments captured by our clients during their incredible journeys with TravelBox Holidays.",
}: GalleryHeroProps) {
    return (
        <section className="pt-32 pb-16 bg-linear-to-b from-primary/10 to-background">
            <div className="container mx-auto px-4 text-center">
                <p className="text-accent font-semibold tracking-wider uppercase mb-3 animate-fade-in">
                    {subtitle}
                </p>
                <h1 className="font-display text-4xl md:text-6xl text-foreground font-bold mb-6 animate-fade-in">
                    Travel <span className="text-primary">Gallery</span>
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in">
                    {description}
                </p>
            </div>
        </section>
    );
}

