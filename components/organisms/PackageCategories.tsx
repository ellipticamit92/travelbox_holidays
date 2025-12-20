import Link from "next/link";
import { Mountain, Heart, Palmtree, Building2, Sparkles } from "lucide-react";

const categories = [
  {
    id: "religious",
    title: "Religious Tours",
    description: "Sacred pilgrimages & spiritual journeys",
    icon: Sparkles,
    color: "from-amber-500 to-orange-600",
  },
  {
    id: "adventure",
    title: "Adventure Tours",
    description: "Thrilling experiences & outdoor activities",
    icon: Mountain,
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: "leisure",
    title: "Leisure Tours",
    description: "Relaxing getaways & rejuvenation",
    icon: Palmtree,
    color: "from-sky-500 to-blue-600",
  },
  {
    id: "honeymoon",
    title: "Honeymoon Tours",
    description: "Romantic escapes for couples",
    icon: Heart,
    color: "from-rose-500 to-pink-600",
  },
  {
    id: "cultural",
    title: "Cultural Tours",
    description: "Heritage sites & local traditions",
    icon: Building2,
    color: "from-violet-500 to-purple-600",
  },
];

const PackageCategories = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-accent font-semibold tracking-wider uppercase mb-3">
            Browse By Category
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground font-bold">
            Find Your Perfect <span className="text-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Whether you seek spiritual enlightenment, thrilling adventures, or peaceful relaxation, we have the perfect tour for you.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              href={`/our-packages?type=${category.id}`}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-linear-to-br ${category.color} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
                <category.icon className="h-7 w-7 text-white" />
              </div>
              {/* Content */}
              <h3 className="font-display text-lg font-bold text-foreground mb-1">
                {category.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {category.description}
              </p>

              {/* Hover Arrow */}
              <div className="absolute bottom-4 right-4 opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackageCategories;
