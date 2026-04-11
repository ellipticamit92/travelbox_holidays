"use client";

import { useState } from "react";
import { GalleryHero, GalleryGrid } from "@/components/organisms";
import {
  GalleryStats,
  GalleryCTA,
  GalleryLightbox,
} from "@/components/molecules";
import type { GalleryImageItemProps } from "@/components/atoms";

const galleryItems: Omit<
  GalleryImageItemProps,
  "index" | "isLiked" | "onLike" | "onClick"
>[] = [
  {
    id: 1,
    image: "/clients/client-1.avif",
    title: "Sunset at Taj Mahal",
    location: "Agra, India",
    client: "Rahul & Priya",
    story: "An unforgettable honeymoon experience",
    span: "col-span-2 row-span-2",
  },
  {
    id: 2,
    image: "/clients/client-2.avif",
    title: "Backwaters Bliss",
    location: "Kerala, India",
    client: "The Sharma Family",
    story: "Perfect family getaway",
    span: "col-span-1 row-span-1",
  },
  {
    id: 3,
    image: "/clients/client-3.avif",
    title: "Desert Safari Adventure",
    location: "Dubai, UAE",
    client: "Amit & Friends",
    story: "Bachelor trip of a lifetime",
    span: "col-span-1 row-span-2",
  },
  {
    id: 4,
    image: "/clients/client-4.avif",
    title: "Spiritual Journey",
    location: "Varanasi, India",
    client: "Mrs. Meera Devi",
    story: "Soul-stirring pilgrimage",
    span: "col-span-1 row-span-1",
  },
  {
    id: 5,
    image: "/clients/client-5.avif",
    title: "Mountain Magic",
    location: "Ladakh, India",
    client: "Adventure Club",
    story: "Breathtaking road trip",
    span: "col-span-2 row-span-1",
  },
  {
    id: 6,
    image: "/clients/client-6.avif",
    title: "Island Paradise",
    location: "Maldives",
    client: "Vikram & Sneha",
    story: "Anniversary celebration",
    span: "col-span-1 row-span-1",
  },
  {
    id: 7,
    image: "/clients/client-7.avif",
    title: "Mountain Magic",
    location: "Ladakh, India",
    client: "Adventure Club",
    story: "Breathtaking road trip",
    span: "col-span-2 row-span-1",
  },
  {
    id: 8,
    image: "/clients/client-8.avif",
    title: "Island Paradise",
    location: "Maldives",
    client: "Vikram & Sneha",
    story: "Anniversary celebration",
    span: "col-span-1 row-span-1",
  },
  {
    id: 9,
    image: "/clients/client-10.jpg",
    title: "Mountain Magic",
    location: "Ladakh, India",
    client: "Adventure Club",
    story: "Breathtaking road trip",
    span: "col-span-2 row-span-1",
  },
  {
    id: 10,
    image: "/clients/client-13.jpg",
    title: "Island Paradise",
    location: "Maldives",
    client: "Vikram & Sneha",
    story: "Anniversary celebration",
    span: "col-span-1 row-span-1",
  },
  {
    id: 11,
    image: "/clients/client-15.avif",
    title: "Island Paradise",
    location: "Maldives",
    client: "Vikram & Sneha",
    story: "Anniversary celebration",
    span: "col-span-1 row-span-1",
  },
  {
    id: 12,
    image: "/clients/client-16.avif",
    title: "Island Paradise",
    location: "Maldives",
    client: "Vikram & Sneha",
    story: "Anniversary celebration",
    span: "col-span-1 row-span-1",
  },
  {
    id: 13,
    image: "/clients/client-11.jpg",
    title: "Mountain Magic",
    location: "Ladakh, India",
    client: "Adventure Club",
    story: "Breathtaking road trip",
    span: "col-span-2 row-span-1",
  },
  {
    id: 14,
    image: "/clients/client-12.jpg",
    title: "Island Paradise",
    location: "Maldives",
    client: "Mr Ketan",
    story: "Leisure",
    span: "col-span-1 row-span-1",
  },
  {
    id: 15,
    image: "/clients/client-9.jpg",
    title: "Island Paradise",
    location: "Maldives",
    client: "Vikram & Sneha",
    story: "Anniversary celebration",
    span: "col-span-1 row-span-1",
  },
];

const stats = [
  { value: "5000+", label: "Happy Travelers" },
  { value: "50+", label: "Destinations" },
  { value: "1000+", label: "Photos Shared" },
  { value: "100%", label: "Memories Made" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] =
    useState<GalleryImageItemProps | null>(null);
  const [likedImages, setLikedImages] = useState<number[]>([]);

  const toggleLike = (id: number) => {
    setLikedImages((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleItemClick = (item: GalleryImageItemProps) => {
    setSelectedImage(item);
  };

  return (
    <div className="min-h-screen bg-background">
      <GalleryHero />

      <GalleryGrid
        items={galleryItems}
        likedImages={likedImages}
        onItemClick={handleItemClick}
        onLike={toggleLike}
      />

      <GalleryStats stats={stats} />

      <GalleryCTA />

      <GalleryLightbox
        image={selectedImage}
        isLiked={selectedImage ? likedImages.includes(selectedImage.id) : false}
        onClose={() => setSelectedImage(null)}
        onLike={toggleLike}
      />
    </div>
  );
};

export default Gallery;
