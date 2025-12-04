import { SectionTitle } from "@/components/atoms/SectionTitle";
import { FeatureCard } from "@/components/molecules/FeatureCard";
import {
  Shield,
  Users,
  Award,
  Clock,
  MapPin,
  Heart,
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
    title: "Trusted & Secure",
    description:
      "Your safety and security are our top priorities with comprehensive travel insurance.",
  },
  {
    icon: Users,
    title: "Expert Guides",
    description:
      "Travel with experienced local guides who know the best spots and hidden gems.",
  },
  {
    icon: Award,
    title: "Best Value",
    description:
      "Get the most out of your budget with carefully selected accommodations and experiences.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description:
      "Round-the-clock assistance whenever you need help during your journey.",
  },
  {
    icon: MapPin,
    title: "Curated Experiences",
    description:
      "Handpicked destinations and activities tailored to create unforgettable memories.",
  },
  {
    icon: Heart,
    title: "Personalized Service",
    description:
      "Customized itineraries designed to match your preferences and travel style.",
  },
];

export function WhyTravelWithUsSection({
  features = defaultFeatures,
}: WhyTravelWithUsSectionProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Why Travel With Us"
          subtitle="Experience the difference of traveling with experts"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

