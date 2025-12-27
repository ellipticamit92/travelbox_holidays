"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Delhi",
    rating: 5,
    text: "Our Kerala trip was absolutely magical! Travel Box Holidays arranged everything perfectly - from the houseboat stay to the spice garden tours. Highly recommended!",
    trip: "Kerala Backwaters Escape",
  },
  {
    name: "Rajesh Kumar",
    location: "Mumbai",
    rating: 5,
    text: "The Golden Triangle tour exceeded all expectations. The guides were knowledgeable, hotels were top-notch, and the overall experience was seamless. Will definitely book again!",
    trip: "Golden Triangle Tour",
  },
  {
    name: "Anita Gupta",
    location: "Bangalore",
    rating: 5,
    text: "Ladakh with Travel Box was a dream come true. They handled everything from permits to accommodations. The team was responsive and helpful throughout our journey.",
    trip: "Ladakh Adventure",
  },
];

const ReviewSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold tracking-wider uppercase mb-3">
            Testimonials
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground font-bold">
            What Our <span className="text-primary">Travelers Say</span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
            {/* Quote Icon */}
            <Quote className="absolute top-8 right-8 h-24 w-24 text-accent/10" />

            {/* Content */}
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-accent fill-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-display text-lg font-bold text-foreground">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-muted-foreground">
                    {testimonials[currentIndex].location} •{" "}
                    {testimonials[currentIndex].trip}
                  </p>
                </div>

                {/* Navigation */}
                <div className="flex gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5 text-foreground" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "w-8 bg-accent" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
