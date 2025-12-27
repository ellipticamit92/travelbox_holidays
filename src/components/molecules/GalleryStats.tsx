interface Stat {
    value: string;
    label: string;
}

interface GalleryStatsProps {
    stats: Stat[];
}

export function GalleryStats({ stats }: GalleryStatsProps) {
    return (
        <section className="py-16 bg-primary/5">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="animate-fade-in"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                                {stat.value}
                            </div>
                            <div className="text-muted-foreground">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

