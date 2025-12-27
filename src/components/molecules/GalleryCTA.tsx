import Link from "next/link";

interface GalleryCTAProps {
    title?: string;
    description?: string;
    ctaText?: string;
    ctaHref?: string;
}

export function GalleryCTA({
    title = "Ready to Create Your Own Memories?",
    description = "Join thousands of happy travelers and start your adventure with us today.",
    ctaText = "Plan Your Trip",
    ctaHref = "/contact",
}: GalleryCTAProps) {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4 text-center">
                <h2 className="font-display text-2xl md:text-3xl text-foreground font-bold mb-4">
                    {title}
                </h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                    {description}
                </p>
                <Link
                    href={ctaHref}
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
                >
                    {ctaText}
                </Link>
            </div>
        </section>
    );
}

