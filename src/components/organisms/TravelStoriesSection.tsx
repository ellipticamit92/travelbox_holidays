import { SectionTitle } from "@/components/atoms/SectionTitle";
import { StoryCard } from "@/components/molecules/StoryCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Story {
  id: number;
  name?: string;
  location?: string;
  image?: string;
  trip?: string;
}

interface TravelStoriesSectionProps {
  stories?: Story[];
  showViewAll?: boolean;
}


const defaultStories: Story[] = [
  {
    id: 1,
    image: "/clients/client-2.avif",
    name: "The Sharma Family",
    location: "Taj Mahal, Agra",
    trip: "Golden Triangle Tour",
  },
  {
    id: 2,
    image: "/clients/client-3.avif",
    name: "Amit & Priya",
    location: "Maldives",
    trip: "Honeymoon Package",
  },
  {
    id: 3,
    image: "/clients/client-9.jpg",
    name: "College Friends",
    location: "Phuket Karabi, Thailand",
    trip: "Thailand Dazzle Tour",
  },
  {
    id: 4,
    image: "/clients/client-10.jpg",
    name: "The Gupta Family",
    location: "Kerala Backwaters",
    trip: "Kerala Escape",
  },
  {
    id: 5,
    image: "/clients/client-7.avif",
    name: "Meera Singh",
    location: "Ubud, Bali",
    trip: "Bali Paradise Tour",
  },
  {
    id: 6,
    image: "/clients/client-6.avif",
    name: "Mr. & Mrs. Kapoor",
    location: "Jaisalmer, Rajasthan",
    trip: "Rajasthan Heritage",
  },
  {
    id: 7,
    image: "/clients/client-5.avif",
    name: "Mr. & Mrs. Kapoor",
    location: "Jaisalmer, Rajasthan",
    trip: "Rajasthan Heritage",
  },
];

export function TravelStoriesSection({
  stories = defaultStories,
  showViewAll = false,
}: TravelStoriesSectionProps) {
  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionTitle
          label="Travel Stories"
          title={
            <>
              Moments From <span className="text-primary">Our Travelers</span>
            </>
          }
          description="Real memories from real travelers. See the joy and adventure our customers experience."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story, index) => (
            <StoryCard key={index} index={index} {...story} />
          ))}
        </div>
        {showViewAll && (
          <div className="mt-8 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/stories">Read All Stories</Link>
            </Button>
          </div>
        )}

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-2">
            Share your travel memories with us!
          </p>
          <p className="text-accent font-semibold">
            Tag us @travelboxholidays on Instagram
          </p>
        </div>
      </div>
    </section>
  );
}

