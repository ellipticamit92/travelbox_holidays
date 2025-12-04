import { SectionTitle } from "@/components/atoms/SectionTitle";
import { StoryCard } from "@/components/molecules/StoryCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Story {
  title: string;
  author?: string;
  excerpt?: string;
  image?: string;
  date?: string;
  href?: string;
}

interface TravelStoriesSectionProps {
  stories?: Story[];
  showViewAll?: boolean;
}

const defaultStories: Story[] = [
  {
    title: "Sunset in Santorini",
    author: "Sarah Johnson",
    excerpt:
      "An unforgettable journey through the Greek islands, capturing the most beautiful sunsets.",
    date: "March 15, 2024",
  },
  {
    title: "Adventures in the Amazon",
    author: "Michael Chen",
    excerpt:
      "Exploring the rainforest and discovering incredible wildlife and indigenous cultures.",
    date: "February 28, 2024",
  },
  {
    title: "Tokyo Nights",
    author: "Emma Williams",
    excerpt:
      "A week in Tokyo exploring neon-lit streets, traditional temples, and amazing cuisine.",
    date: "February 10, 2024",
  },
];

export function TravelStoriesSection({
  stories = defaultStories,
  showViewAll = true,
}: TravelStoriesSectionProps) {
  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Travel Stories"
          subtitle="Inspiring stories from our travelers"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story, index) => (
            <StoryCard key={index} {...story} />
          ))}
        </div>
        {showViewAll && (
          <div className="mt-8 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/stories">Read All Stories</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

