import { FeatureCard } from "@/components/molecules/FeatureCard";
import {
  Shield,
  Award,
  Clock,
  Headphones,
  HeartHandshake,
  Plane,
} from "lucide-react";

interface Feature {
  icon: typeof Shield;
  title: string;
  description: string;
}

interface WhyTravelWithUsSectionProps {
  features?: Feature[];
}

const defaultFeatures: Feature[] = [
  {
    icon: Shield,
    title: "100% Safe Travels",
    description: "Your safety is our priority with verified hotels, sanitized vehicles, and insured trips.",
  },
  {
    icon: Award,
    title: "Best Price Guarantee",
    description: "We offer competitive prices without compromising on quality or comfort.",
  },
  {
    icon: Clock,
    title: "Flexible Bookings",
    description: "Easy rescheduling and cancellation options for your peace of mind.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Service",
    description: "Customized itineraries tailored to your preferences and budget.",
  },
  {
    icon: Plane,
    title: "Expert Local Guides",
    description: "Knowledgeable guides who bring destinations to life with stories and insights.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock assistance throughout your journey for any help you need.",
  },
];

export function WhyTravelWithUsSection({
  features = defaultFeatures,
}: WhyTravelWithUsSectionProps) {
  return (
    <section id="about" className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold tracking-wider uppercase mb-3">
            Why Travel With Us
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Your Journey, <span className="text-accent">Our Passion</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            With over a decade of experience, Travel Box Holidays is your trusted partner
            for unforgettable travel experiences across India.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} index={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

