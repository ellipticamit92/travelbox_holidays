"use client";

import { GalleryImageItem, GalleryImageItemProps } from "@/components/atoms/GalleryImageItem";

interface GalleryGridProps {
    items: GalleryImageItemProps[];
    likedImages: number[];
    onItemClick: (item: GalleryImageItemProps) => void;
    onLike: (id: number) => void;
}

// Define the base pattern spans for the two-column grid layout
const BASE_PATTERN_SPANS = [
    "col-span-2 row-span-2", // Large item
    "col-span-1 row-span-1", // Small item
    "col-span-1 row-span-2", // Tall item
    "col-span-1 row-span-1", // Small item
    "col-span-2 row-span-1", // Wide item
    "col-span-1 row-span-1", // Small item
];

/**
 * Shuffles an array using Fisher-Yates algorithm
 */
function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

/**
 * Generates a random grid span pattern that repeats the base pattern
 * for larger image sets, ensuring variety while maintaining the two-column layout
 */
function generateGridSpans(count: number): string[] {
    const spans: string[] = [];
    // Calculate how many full pattern cycles we need
    const fullCycles = Math.floor(count / BASE_PATTERN_SPANS.length);
    const remainder = count % BASE_PATTERN_SPANS.length;
    // Add full shuffled cycles
    for (let i = 0; i < fullCycles; i++) {
        const shuffledPattern = shuffleArray(BASE_PATTERN_SPANS);
        spans.push(...shuffledPattern);
    }
    // Add remaining items from a shuffled pattern
    if (remainder > 0) {
        const shuffledPattern = shuffleArray(BASE_PATTERN_SPANS);
        spans.push(...shuffledPattern.slice(0, remainder));
    }
    return spans;
}

export function GalleryGrid({
    items,
    likedImages,
    onItemClick,
    onLike,
}: GalleryGridProps) {
    // Generate grid spans for all items
    const gridSpans = generateGridSpans(items.length);
    // Assign spans to items
    const itemsWithSpans = items.map((item, index) => ({
        ...item,
        span: gridSpans[index] || "col-span-1 row-span-1",
        index,
    }));

    return (
        <section className="py-12 md:py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
                    {itemsWithSpans.map((item) => (
                        <GalleryImageItem
                            key={item.id}
                            {...item}
                            isLiked={likedImages.includes(item.id)}
                            onLike={onLike}
                            onClick={() => onItemClick(item)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

