import {
    Plane,
    MapPin,
    Compass,
    FileText,
    Building,
    Ship,
    Heart,
    Sparkles,
    Waves,
    PartyPopper,
    CreditCard,
    ShieldCheck,
    Globe,
    Stamp
} from "lucide-react";

const serviceCategories = [
    {
        id: "flight",
        title: "Flight Services",
        icon: Plane,
        color: "from-sky-500 to-blue-600",
        services: [
            "Seamless booking for domestic and international flights at competitive prices"
        ]
    },
    {
        id: "tours",
        title: "Tour Packages",
        icon: MapPin,
        color: "from-emerald-500 to-teal-600",
        services: [
            "Domestic and International Tours",
            "Customized Individual Tour Packages",
            "Group Inclusive Tour Packages",
            "Cruise Packages"
        ]
    },
    {
        id: "adventure",
        title: "Adventure & Experiences",
        icon: Compass,
        color: "from-orange-500 to-red-600",
        services: [
            "Water Sports & Diving Adventures",
            "Romantic Honeymoon Packages",
            "Luxurious Spa Experiences",
            "Destination Weddings"
        ]
    },
    {
        id: "assistance",
        title: "Travel Assistance",
        icon: FileText,
        color: "from-violet-500 to-purple-600",
        services: [
            "Visa Application Processing",
            "Passport Assistance & Renewals",
            "Comprehensive Travel Insurance",
            "Forex & Currency Exchange"
        ]
    },
    {
        id: "accommodation",
        title: "Accommodation",
        icon: Building,
        color: "from-amber-500 to-orange-600",
        services: [
            "Hotels and Resorts Booking worldwide"
        ]
    }
];

const serviceIcons: Record<string, typeof Plane> = {
    "Domestic and International Tours": Globe,
    "Customized Individual Tour Packages": Sparkles,
    "Group Inclusive Tour Packages": MapPin,
    "Cruise Packages": Ship,
    "Water Sports & Diving Adventures": Waves,
    "Romantic Honeymoon Packages": Heart,
    "Luxurious Spa Experiences": Sparkles,
    "Destination Weddings": PartyPopper,
    "Visa Application Processing": Stamp,
    "Passport Assistance & Renewals": FileText,
    "Comprehensive Travel Insurance": ShieldCheck,
    "Forex & Currency Exchange": CreditCard,
    "Hotels and Resorts Booking worldwide": Building,
};

const Services = () => {
    return (
        <section id="services" className="py-20 bg-muted">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="text-accent font-semibold tracking-wider uppercase mb-3">
                        What We Offer
                    </p>
                    <h2 className="font-display text-3xl md:text-5xl text-foreground font-bold">
                        Our <span className="text-primary">Services</span>
                    </h2>
                    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                        From flights to accommodations, we handle every detail of your journey with expertise and care.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {serviceCategories.map((category, index) => (
                        <div
                            key={category.id}
                            className={`bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg animate-fade-in ${category.id === "accommodation" ? "md:col-span-2 lg:col-span-1" : ""
                                }`}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Header */}
                            <div className="flex items-center gap-4 mb-5">
                                <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${category.color} flex items-center justify-center shrink-0`}>
                                    <category.icon className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="font-display text-xl font-bold text-foreground">
                                    {category.title}
                                </h3>
                            </div>

                            {/* Services List */}
                            <ul className="space-y-3">
                                {category.services.map((service, idx) => {
                                    const ServiceIcon = serviceIcons[service] || Sparkles;
                                    return (
                                        <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                                            <ServiceIcon className="h-4 w-4 mt-1 text-primary shrink-0" />
                                            <span className="text-sm">{service}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Quote Banner */}
                <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-primary/90 to-accent/90 p-8 md:p-12">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10 text-center max-w-3xl mx-auto">
                        <div className="inline-block mb-6">
                            <Sparkles className="h-10 w-10 text-white/80" />
                        </div>
                        <blockquote className="text-xl md:text-2xl font-display text-white leading-relaxed mb-4">
                            "Unleash your wanderlust with our remarkable hotels and travel experiences."
                        </blockquote>
                        <p className="text-white/90 text-lg">
                            TravelBox Holidays will take care of all the details, allowing you to fully enjoy every moment of your adventure.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
