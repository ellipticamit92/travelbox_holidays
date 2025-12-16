"use client";

import { useState } from "react";
import { X, MapPin, Heart, ZoomIn } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const galleryItems = [
    {
        id: 1,
        image: "/gallery/gallery-1.jpg",
        title: "Sunset at Taj Mahal",
        location: "Agra, India",
        client: "Rahul & Priya",
        story: "An unforgettable honeymoon experience",
        span: "col-span-2 row-span-2",
    },
    {
        id: 2,
        image: "/gallery/gallery-1.jpg",
        title: "Backwaters Bliss",
        location: "Kerala, India",
        client: "The Sharma Family",
        story: "Perfect family getaway",
        span: "col-span-1 row-span-1",
    },
    {
        id: 3,
        image: "/gallery/gallery-1.jpg",
        title: "Desert Safari Adventure",
        location: "Dubai, UAE",
        client: "Amit & Friends",
        story: "Bachelor trip of a lifetime",
        span: "col-span-1 row-span-2",
    },
    {
        id: 4,
        image: "/gallery/gallery-1.jpg",
        title: "Spiritual Journey",
        location: "Varanasi, India",
        client: "Mrs. Meera Devi",
        story: "Soul-stirring pilgrimage",
        span: "col-span-1 row-span-1",
    },
    {
        id: 5,
        image: "/gallery/gallery-1.jpg",
        title: "Mountain Magic",
        location: "Ladakh, India",
        client: "Adventure Club",
        story: "Breathtaking road trip",
        span: "col-span-2 row-span-1",
    },
    {
        id: 6,
        image: "/gallery/gallery-1.jpg",
        title: "Island Paradise",
        location: "Maldives",
        client: "Vikram & Sneha",
        story: "Anniversary celebration",
        span: "col-span-1 row-span-1",
    },
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);
    const [likedImages, setLikedImages] = useState<number[]>([]);

    const toggleLike = (id: number) => {
        setLikedImages((prev) =>
            prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
        );
    };

    return (
        <div className="min-h-screen bg-background">

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-linear-to-b from-primary/10 to-background">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-accent font-semibold tracking-wider uppercase mb-3 animate-fade-in">
                        Client Memories
                    </p>
                    <h1 className="font-display text-4xl md:text-6xl text-foreground font-bold mb-6 animate-fade-in">
                        Travel <span className="text-primary">Gallery</span>
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in">
                        Discover the beautiful moments captured by our clients during their incredible journeys with TravelBox Holidays.
                    </p>
                </div>
            </section>

            {/* Masonry Gallery Grid */}
            <section className="py-12 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
                        {galleryItems.map((item, index) => (
                            <div
                                key={item.id}
                                className={`group relative overflow-hidden rounded-2xl cursor-pointer ${item.span} animate-scale-in`}
                                style={{ animationDelay: `${index * 100}ms` }}
                                onClick={() => setSelectedImage(item)}
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className={cn(
                                        "object-cover transition-transform duration-500",
                                    )}
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Content */}
                                <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                    <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
                                        <MapPin className="h-4 w-4" />
                                        <span>{item.location}</span>
                                    </div>
                                    <h3 className="font-display text-lg md:text-xl text-white font-bold mb-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/70 text-sm">
                                        by {item.client}
                                    </p>
                                </div>

                                {/* Action Buttons */}
                                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleLike(item.id);
                                        }}
                                        className={`p-2 rounded-full backdrop-blur-sm transition-colors ${likedImages.includes(item.id)
                                            ? "bg-red-500 text-white"
                                            : "bg-white/20 text-white hover:bg-white/30"
                                            }`}
                                    >
                                        <Heart className={`h-4 w-4 ${likedImages.includes(item.id) ? "fill-current" : ""}`} />
                                    </button>
                                    <button className="p-2 rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 transition-colors">
                                        <ZoomIn className="h-4 w-4" />
                                    </button>
                                </div>

                                {/* Corner Accent */}
                                <div className="absolute top-0 left-0 w-16 h-16 bg-linear-to-br from-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-primary/5">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { value: "5000+", label: "Happy Travelers" },
                            { value: "50+", label: "Destinations" },
                            { value: "1000+", label: "Photos Shared" },
                            { value: "100%", label: "Memories Made" },
                        ].map((stat, index) => (
                            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                                <div className="text-muted-foreground">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-display text-2xl md:text-3xl text-foreground font-bold mb-4">
                        Ready to Create Your Own Memories?
                    </h2>
                    <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                        Join thousands of happy travelers and start your adventure with us today.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
                    >
                        Plan Your Trip
                    </a>
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X className="h-6 w-6" />
                    </button>

                    <div
                        className="max-w-5xl w-full flex flex-col md:flex-row gap-6 animate-scale-in"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex-1">
                            {/*
                            <img
                                src={selectedImage.image}
                                alt={selectedImage.title}
                                className="w-full h-auto max-h-[70vh] object-contain rounded-xl"
                            />
                            */}
                        </div>
                        <div className="md:w-80 text-white">
                            <div className="flex items-center gap-2 text-white/70 text-sm mb-3">
                                <MapPin className="h-4 w-4" />
                                <span>{selectedImage.location}</span>
                            </div>
                            <h2 className="font-display text-2xl font-bold mb-4">
                                {selectedImage.title}
                            </h2>
                            <div className="bg-white/10 rounded-xl p-4 mb-4">
                                <p className="text-white/80 italic mb-2">"{selectedImage.story}"</p>
                                <p className="text-accent font-semibold">— {selectedImage.client}</p>
                            </div>
                            <button
                                onClick={() => toggleLike(selectedImage.id)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${likedImages.includes(selectedImage.id)
                                    ? "bg-red-500 text-white"
                                    : "bg-white/10 text-white hover:bg-white/20"
                                    }`}
                            >
                                <Heart className={`h-4 w-4 ${likedImages.includes(selectedImage.id) ? "fill-current" : ""}`} />
                                {likedImages.includes(selectedImage.id) ? "Liked" : "Like this photo"}
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Gallery;