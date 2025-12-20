export interface PackageData {
  id: string;
  title: string;
  destination: string;
  duration: string;
  groupSize: string;
  price: string;
  originalPrice: string;
  rating: number;
  reviews: number;
  image: string;
  featured: boolean;
  category: "india" | "international";
  type: "religious" | "leisure" | "honeymoon" | "adventure" | "cultural";
  description: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
}

export const allPackages: PackageData[] = [
  {
    id: "golden-triangle-tour",
    title: "Golden Triangle Tour",
    destination: "Delhi - Agra - Jaipur",
    duration: "6 Days / 5 Nights",
    groupSize: "2-8 People",
    price: "₹24,999",
    originalPrice: "₹32,999",
    rating: 4.9,
    reviews: 128,
    image: "jaipur.jpeg",
    featured: true,
    category: "india",
    type: "cultural",
    description: "Experience the magic of India's most iconic destinations. The Golden Triangle tour takes you through Delhi's vibrant streets, Agra's timeless Taj Mahal, and Jaipur's majestic palaces. This journey offers a perfect blend of history, culture, and architectural marvels.",
    highlights: [
      "Visit the iconic Taj Mahal at sunrise",
      "Explore the historic Red Fort in Delhi",
      "Discover Jaipur's stunning Amber Fort",
      "Experience local cuisine and culture",
      "Comfortable AC transportation throughout"
    ],
    inclusions: [
      "5 Nights accommodation in 4-star hotels",
      "Daily breakfast and dinner",
      "AC private vehicle for all transfers",
      "English-speaking guide",
      "All monument entry fees",
      "Airport pickup and drop"
    ],
    exclusions: [
      "Airfare / Train tickets",
      "Personal expenses",
      "Tips and gratuities",
      "Travel insurance",
      "Lunch meals"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Delhi", description: "Arrive at Delhi airport, transfer to hotel. Evening visit to India Gate and Connaught Place." },
      { day: 2, title: "Delhi Sightseeing", description: "Full day tour of Old and New Delhi - Red Fort, Jama Masjid, Qutub Minar, Humayun's Tomb." },
      { day: 3, title: "Delhi to Agra", description: "Drive to Agra. Visit Agra Fort and enjoy sunset view of Taj Mahal from Mehtab Bagh." },
      { day: 4, title: "Taj Mahal & Jaipur", description: "Sunrise visit to Taj Mahal. Drive to Jaipur, the Pink City. Evening at leisure." },
      { day: 5, title: "Jaipur Exploration", description: "Visit Amber Fort, City Palace, Hawa Mahal, and Jantar Mantar. Evening bazaar walk." },
      { day: 6, title: "Departure", description: "Transfer to Jaipur airport or drive back to Delhi for departure." }
    ]
  },
  {
    id: "kerala-backwaters-escape",
    title: "Kerala Backwaters Escape",
    destination: "Kochi - Alleppey - Munnar",
    duration: "5 Days / 4 Nights",
    groupSize: "2-6 People",
    price: "₹19,999",
    originalPrice: "₹26,999",
    rating: 4.8,
    reviews: 94,
    image: "kerala.jpeg",
    featured: false,
    category: "india",
    type: "leisure",
    description: "Discover God's Own Country with this enchanting Kerala tour. Cruise through serene backwaters, explore lush tea plantations, and experience the unique culture of South India.",
    highlights: [
      "Overnight stay in traditional houseboat",
      "Tea plantation visit in Munnar",
      "Kathakali dance performance",
      "Spice garden tour",
      "Chinese fishing nets experience"
    ],
    inclusions: [
      "4 Nights accommodation (3 hotel + 1 houseboat)",
      "All meals on houseboat",
      "Breakfast at hotels",
      "AC vehicle for transfers",
      "Sightseeing as per itinerary"
    ],
    exclusions: [
      "Airfare",
      "Personal expenses",
      "Optional activities",
      "Travel insurance"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Kochi", description: "Arrive in Kochi. Visit Fort Kochi, Chinese fishing nets, St. Francis Church." },
      { day: 2, title: "Kochi to Munnar", description: "Drive through scenic routes to Munnar. Visit tea plantations and Eravikulam National Park." },
      { day: 3, title: "Munnar Exploration", description: "Visit Tea Museum, spice plantations, and Mattupetty Dam." },
      { day: 4, title: "Munnar to Alleppey", description: "Drive to Alleppey. Board traditional houseboat for overnight cruise through backwaters." },
      { day: 5, title: "Departure", description: "Disembark from houseboat. Transfer to Kochi airport for departure." }
    ]
  },
  {
    id: "ladakh-adventure",
    title: "Ladakh Adventure",
    destination: "Leh - Nubra - Pangong",
    duration: "7 Days / 6 Nights",
    groupSize: "4-10 People",
    price: "₹34,999",
    originalPrice: "₹45,999",
    rating: 4.9,
    reviews: 76,
    image: "/ladakh.jpeg",
    featured: false,
    category: "india",
    type: "adventure",
    description: "Embark on an exhilarating adventure through the Land of High Passes. Experience the raw beauty of Ladakh with its stunning landscapes, ancient monasteries, and warm Ladakhi hospitality.",
    highlights: [
      "Visit stunning Pangong Lake",
      "Explore ancient monasteries",
      "Drive through Khardung La pass",
      "Camel safari in Nubra Valley",
      "Experience Ladakhi culture"
    ],
    inclusions: [
      "6 Nights accommodation",
      "All meals",
      "4x4 vehicle with driver",
      "Inner line permits",
      "Oxygen cylinder in vehicle"
    ],
    exclusions: [
      "Flights to/from Leh",
      "Personal expenses",
      "Adventure activities",
      "Travel insurance"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Leh", description: "Arrive in Leh. Rest and acclimatization day. Evening walk in Leh market." },
      { day: 2, title: "Leh Local Sightseeing", description: "Visit Shanti Stupa, Leh Palace, Thiksey Monastery, and Hemis Monastery." },
      { day: 3, title: "Leh to Nubra Valley", description: "Drive via Khardung La (world's highest motorable road). Evening at Hunder sand dunes." },
      { day: 4, title: "Nubra Valley", description: "Visit Diskit Monastery. Camel safari on double-humped Bactrian camels." },
      { day: 5, title: "Nubra to Pangong", description: "Scenic drive to Pangong Lake via Shyok route. Overnight by the lake." },
      { day: 6, title: "Pangong to Leh", description: "Morning at Pangong. Return to Leh via Chang La pass." },
      { day: 7, title: "Departure", description: "Transfer to Leh airport for departure." }
    ]
  },
  {
    id: "dubai-dazzle",
    title: "Dubai Dazzle",
    destination: "Dubai - Abu Dhabi",
    duration: "5 Days / 4 Nights",
    groupSize: "2-6 People",
    price: "₹54,999",
    originalPrice: "₹72,999",
    rating: 4.9,
    reviews: 156,
    image: "dubai.jpeg",
    featured: true,
    category: "international",
    type: "leisure",
    description: "Experience the glitz and glamour of the UAE with this exciting Dubai and Abu Dhabi tour. From towering skyscrapers to golden deserts, this trip offers the perfect blend of luxury and adventure.",
    highlights: [
      "Burj Khalifa observation deck visit",
      "Desert safari with BBQ dinner",
      "Abu Dhabi city tour",
      "Dubai Marina cruise",
      "Visit to Palm Jumeirah"
    ],
    inclusions: [
      "4 Nights in 4-star hotel",
      "Daily breakfast",
      "Desert safari with dinner",
      "City tours",
      "Airport transfers",
      "Visa assistance"
    ],
    exclusions: [
      "International airfare",
      "Visa fees",
      "Travel insurance",
      "Personal expenses",
      "Optional activities"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Dubai", description: "Arrive at Dubai airport. Transfer to hotel. Evening at leisure at Dubai Mall." },
      { day: 2, title: "Dubai City Tour", description: "Visit Burj Khalifa, Dubai Frame, old Dubai, Gold and Spice Souks." },
      { day: 3, title: "Desert Safari", description: "Morning at leisure. Evening desert safari with dune bashing, camel ride, and BBQ dinner." },
      { day: 4, title: "Abu Dhabi Day Trip", description: "Full day tour to Abu Dhabi - Sheikh Zayed Mosque, Emirates Palace, Yas Island." },
      { day: 5, title: "Departure", description: "Transfer to Dubai airport for departure." }
    ]
  },
  {
    id: "maldives-honeymoon",
    title: "Maldives Honeymoon",
    destination: "Malé - Resort Island",
    duration: "4 Days / 3 Nights",
    groupSize: "2 People",
    price: "₹89,999",
    originalPrice: "₹1,20,000",
    rating: 5.0,
    reviews: 89,
    image: "maldives.jpeg",
    featured: false,
    category: "international",
    type: "honeymoon",
    description: "Create unforgettable memories in paradise. This romantic Maldives getaway offers pristine beaches, crystal-clear waters, and world-class luxury for the perfect honeymoon experience.",
    highlights: [
      "Stay in overwater villa",
      "Sunset dolphin cruise",
      "Couples spa treatment",
      "Snorkeling adventure",
      "Romantic candlelit dinner"
    ],
    inclusions: [
      "3 Nights in beach/water villa",
      "All meals (Full board)",
      "Speedboat transfers",
      "Honeymoon cake and decoration",
      "Snorkeling equipment"
    ],
    exclusions: [
      "International airfare",
      "Visa on arrival fees",
      "Premium beverages",
      "Optional excursions",
      "Travel insurance"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Maldives", description: "Arrive at Malé. Speedboat transfer to resort. Welcome drink and room orientation." },
      { day: 2, title: "Resort Experience", description: "Full day at leisure. Enjoy beach, pool, and resort facilities. Sunset dolphin cruise." },
      { day: 3, title: "Adventure & Romance", description: "Morning snorkeling trip. Afternoon couples spa. Romantic candlelit dinner on beach." },
      { day: 4, title: "Departure", description: "Breakfast at resort. Speedboat transfer to Malé airport for departure." }
    ]
  },
  {
    id: "bali-paradise",
    title: "Bali Paradise",
    destination: "Ubud - Seminyak - Kuta",
    duration: "6 Days / 5 Nights",
    groupSize: "2-6 People",
    price: "₹64,999",
    originalPrice: "₹85,999",
    rating: 4.8,
    reviews: 112,
    image: "bali.jpeg",
    featured: false,
    category: "international",
    type: "leisure",
    description: "Discover the Island of Gods with its stunning temples, terraced rice fields, and vibrant culture. From spiritual Ubud to beachside Seminyak, experience the best of Bali.",
    highlights: [
      "Ubud rice terrace walk",
      "Tanah Lot temple sunset",
      "Traditional Balinese massage",
      "Water sports at Kuta beach",
      "Uluwatu Kecak dance"
    ],
    inclusions: [
      "5 Nights in 4-star hotels",
      "Daily breakfast",
      "Airport transfers",
      "Half-day tours",
      "English-speaking guide"
    ],
    exclusions: [
      "International airfare",
      "Visa on arrival fees",
      "Optional activities",
      "Personal expenses",
      "Travel insurance"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Bali", description: "Arrive at Ngurah Rai airport. Transfer to Ubud. Evening at leisure." },
      { day: 2, title: "Ubud Exploration", description: "Visit Tegallalang rice terraces, Tirta Empul temple, Monkey Forest." },
      { day: 3, title: "Ubud to Seminyak", description: "Transfer to Seminyak. Visit Tanah Lot temple for sunset." },
      { day: 4, title: "Seminyak & Beaches", description: "Morning spa session. Afternoon at beach. Evening explore Seminyak streets." },
      { day: 5, title: "Uluwatu & Kuta", description: "Visit Uluwatu temple. Watch Kecak dance at sunset. Transfer to Kuta." },
      { day: 6, title: "Departure", description: "Morning at leisure. Transfer to airport for departure." }
    ]
  }
];

export const getPackageById = (id: string): PackageData | undefined => {
  return allPackages.find((pkg) => pkg.id === id);
};

export const getPackagesByCategory = (category: "india" | "international"): PackageData[] => {
  return allPackages.filter((pkg) => pkg.category === category);
};

export const getPackagesByType = (type: "religious" | "leisure" | "honeymoon" | "adventure" | "cultural"): PackageData[] => {
  return allPackages.filter((pkg) => pkg.type === type);
};
