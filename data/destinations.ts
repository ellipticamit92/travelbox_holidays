export interface DestinationData {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  category: "india" | "international";
  description: string;
  highlights: string[];
  bestTimeToVisit: string;
  currency?: string;
  language?: string;
  packages?: number
}

export const allDestinations: DestinationData[] = [
  {
    id: "jaipur",
    name: "Jaipur",
    subtitle: "The Pink City",
    image: "/jaipur.jpeg",
    category: "india",
    description: "Jaipur, the vibrant capital of Rajasthan, is a captivating blend of royal heritage, stunning architecture, and colorful culture. Known as the 'Pink City' for its iconic terracotta-pink buildings, it forms part of India's famous Golden Triangle.",
    highlights: [
      "Majestic Amber Fort with elephant rides",
      "Stunning Hawa Mahal (Palace of Winds)",
      "City Palace and royal heritage",
      "Colorful bazaars and handicrafts",
      "Traditional Rajasthani cuisine"
    ],
    bestTimeToVisit: "October to March",
    language: "Hindi, Rajasthani",
    packages: 4,
  },
  {
    id: "kerala",
    name: "Kerala",
    subtitle: "God's Own Country",
    image: "/kerala.jpeg",
    category: "india",
    description: "Kerala, nestled on India's southwestern coast, is a tropical paradise of serene backwaters, lush hill stations, and pristine beaches. Known as 'God's Own Country', it offers a unique blend of natural beauty and rich cultural heritage.",
    highlights: [
      "Serene backwater houseboat cruises",
      "Lush tea plantations of Munnar",
      "Ayurvedic wellness treatments",
      "Beautiful beaches of Kovalam",
      "Wildlife at Periyar National Park"
    ],
    bestTimeToVisit: "September to March",
    language: "Malayalam",
    packages: 5,
  },
  {
    id: "ladakh",
    name: "Ladakh",
    subtitle: "Land of High Passes",
    image: "/ladakh.jpeg",
    category: "india",
    description: "Ladakh, the 'Land of High Passes', is a breathtaking high-altitude desert offering dramatic landscapes, ancient monasteries, and adventure at every turn. This remote Himalayan region provides an otherworldly experience.",
    highlights: [
      "Stunning Pangong Lake",
      "Ancient Buddhist monasteries",
      "Thrilling mountain passes",
      "Nubra Valley sand dunes",
      "Unique Ladakhi culture"
    ],
    bestTimeToVisit: "May to September",
    language: "Ladakhi, Hindi",
    packages: 3,
  },
  {
    id: "varanasi",
    name: "Varanasi",
    subtitle: "The Spiritual Capital",
    image: "/varanasi.jpeg",
    category: "india",
    description: "Varanasi, one of the world's oldest living cities, is India's spiritual heart. Situated on the banks of the sacred Ganges, this ancient city offers a profound glimpse into Hindu traditions, rituals, and the cycle of life.",
    highlights: [
      "Evening Ganga Aarti ceremony",
      "Sunrise boat ride on Ganges",
      "Ancient ghats and temples",
      "Sarnath Buddhist site",
      "Traditional silk weaving"
    ],
    bestTimeToVisit: "October to March",
    language: "Hindi, Bhojpuri",
    packages: 5,
  },
  {
    id: "dubai",
    name: "Dubai",
    subtitle: "City of Gold",
    image: "/dubai.jpeg",
    category: "international",
    description: "Dubai is a dazzling metropolis that seamlessly blends ultramodern architecture with traditional Arabian culture. From the world's tallest building to golden desert adventures, Dubai offers an unparalleled luxury experience.",
    highlights: [
      "Iconic Burj Khalifa observation",
      "Desert safari with BBQ dinner",
      "World-class shopping malls",
      "Palm Jumeirah and beaches",
      "Traditional souks and culture"
    ],
    bestTimeToVisit: "November to March",
    currency: "UAE Dirham (AED)",
    language: "Arabic, English"
  },
  {
    id: "maldives",
    name: "Maldives",
    subtitle: "Tropical Paradise",
    image: "/maldives.jpeg",
    category: "international",
    description: "The Maldives is a tropical paradise of pristine white beaches, crystal-clear turquoise waters, and luxurious overwater villas. This island nation offers the ultimate romantic escape and world-class diving experiences.",
    highlights: [
      "Overwater villa experience",
      "World-class snorkeling & diving",
      "Pristine white sand beaches",
      "Sunset dolphin cruises",
      "Underwater restaurants"
    ],
    bestTimeToVisit: "November to April",
    currency: "Maldivian Rufiyaa (MVR)",
    language: "Dhivehi, English"
  },
  {
    id: "bali",
    name: "Bali",
    subtitle: "Island of Gods",
    image: "/bali.jpeg",
    category: "international",
    description: "Bali, the 'Island of Gods', enchants visitors with its dramatic landscapes, ancient temples, and vibrant arts scene. From spiritual Ubud to beach-side Seminyak, Bali offers a perfect blend of culture, nature, and relaxation.",
    highlights: [
      "Iconic rice terraces of Tegallalang",
      "Sacred Tanah Lot temple",
      "Ubud arts and crafts scene",
      "Beautiful beach clubs",
      "Traditional Balinese spa"
    ],
    bestTimeToVisit: "April to October",
    currency: "Indonesian Rupiah (IDR)",
    language: "Indonesian, Balinese",
    packages: 4,
  },
  {
    id: "singapore",
    name: "Singapore",
    subtitle: "Garden City",
    image: "/singapore.jpeg",
    category: "international",
    description: "Singapore is a dynamic city-state where futuristic architecture meets lush tropical gardens. Known for its cleanliness, efficiency, and diverse food scene, Singapore offers a perfect mix of urban excitement and natural beauty.",
    highlights: [
      "Futuristic Gardens by the Bay",
      "Marina Bay Sands skypark",
      "Sentosa Island attractions",
      "World-famous hawker food",
      "Orchard Road shopping"
    ],
    bestTimeToVisit: "February to April",
    currency: "Singapore Dollar (SGD)",
    language: "English, Mandarin, Malay, Tamil",
    packages: 4,
  }
];

export const getDestinationById = (id: string): DestinationData | undefined => {
  return allDestinations.find((dest) => dest.id === id);
};

export const getDestinationsByCategory = (category: "india" | "international"): DestinationData[] => {
  return allDestinations.filter((dest) => dest.category === category);
};
