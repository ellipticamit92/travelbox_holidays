import { Button } from "@/components/ui/button";
import { MapPin, Award, Star, Users, Phone, Heart } from "lucide-react";
import Link from "next/link";

export default async function AboutPage() {
  const teamMembers = [
    {
      name: "Asish Kumar",
      role: "Founder & Director",
      image: "/teams/ashish-kumar.avif",
      bio: "Visionary leader with 10+ years of experience in building and scaling successful travel businesses.",
    },
    {
      name: "Raman Kumar",
      role: "Co-Founder & Managing Director",
      image: "/teams/raman.avif",
      bio: "Oversees operations and strategy, ensuring seamless execution and sustainable business growth.",
    },
    {
      name: "Sunny Kumar",
      role: "CEO",
      image: "/teams/sunny-kumar.avif",
      bio: "Leads the organization with a strong focus on innovation, customer experience, and international expansion.",
    },
    {
      name: "Asha Mishra",
      role: "Customer Relations Manager",
      image: "/teams/asha-mishra.avif",
      bio: "Manages customer relationships and support, ensuring high satisfaction at every stage of the journey.",
    },
    {
      name: "Sahid Rasool",
      role: "Sales Head (Bihar & Jharkhand)",
      image: "/teams/rasheed-rasol.avif",
      bio: "Drives regional sales growth through strong market knowledge and customer-focused sales strategies.",
    },
    {
      name: "Kumar Guddu",
      role: "Marketing Partner",
      image: "/teams/kumar-guddu.avif",
      bio: "Supports brand growth through strategic marketing initiatives and promotional partnerships.",
    },
    {
      //name: "Shiv Ranjan",
      role: "Legal Advisor",
      image: "/teams/shiv-ranjan.avif",
      bio: "Provides legal guidance, compliance support, and risk management for all business operations.",
    },
    {
      //name: "Suraj Chandra",
      role: "Business Coordinator",
      image: "/teams/suraj-chandra.avif",
      bio: "Coordinates between teams to ensure smooth business processes and timely service delivery.",
    },
    {
      //name: "Mani Nagi",
      role: "Package Head",
      image: "/teams/mani-negi.avif",
      bio: "Designs and manages travel packages, ensuring competitive pricing and high-quality experiences.",
    },
    {
      //name: "Md. Naseer",
      role: "Tour Planner",
      image: "/teams/naseer.avif",
      bio: "Creates detailed itineraries tailored to customer preferences and destination requirements.",
    },
    {
      //name: "Ravi",
      role: "Back Office",
      image: "/teams/ravi.avif",
      bio: "Manages documentation, data entry, and operational support for day-to-day business activities.",
    },
    {
      //name: "Bipin Jha",
      role: "Accountant",
      image: "/teams/bipin-jha.avif",
      bio: "Handles financial records, billing, and compliance to ensure accurate financial management.",
    },
    {
      //name: "Ranjan Kuma",
      role: "Team Leader",
      image: "/teams/ranjan-kumar.avif",
      bio: "Leads and motivates teams to achieve sales targets and maintain service excellence.",
    },
    {
      //name: "Rahul Kumar",
      role: "Sales Head Bangalore",
      image: "/teams/rahul-kumar.avif",
      bio: "Heads sales operations in Bangalore, driving revenue through strategic partnerships and client engagement.",
    },
    {
      //name: "Bharat Choubey",
      role: "Marketing Partner",
      image: "/teams/bharat-choubey.avif",
      bio: "Contributes to brand visibility and lead generation through targeted marketing campaigns.",
    },
    {
      //name: "Ravi Ranjan Kumar",
      role: "Tour Planner",
      image: "/teams/ravi-ranjan-kumar.avif",
      bio: "Specializes in planning customized tours with attention to detail and customer comfort.",
    },
  ];

  const stats = [
    { icon: Users, value: "50,000+", label: "Happy Travelers" },
    { icon: MapPin, value: "100+", label: "Destinations" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Star, value: "4.9", label: "Customer Rating" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-linear-to-b from-foreground/70 via-foreground/50 to-foreground/70" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-background mb-6 animate-fade-in">
            About TravelBox Holidays
          </h1>
          <p className="text-xl text-background/90 max-w-2xl mx-auto animate-fade-in">
            Your trusted travel partner since 2019, creating unforgettable
            journeys across India and beyond
          </p>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-10 w-10 text-accent mx-auto mb-4" />
                <div className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Founded in 2019 in Patna, TravelBox Holidays began with a simple
                vision: to make travel accessible, memorable, and hassle-free
                for every Indian family. What started as a small travel desk has
                now grown into one of Bihar's most trusted travel agencies.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Over the years, we have helped over 50,000 travelers explore the
                beauty of India and the world. From the serene backwaters of
                Kerala to the majestic peaks of Ladakh, from the vibrant streets
                of Dubai to the pristine beaches of Maldives – we've been there,
                done that, and loved every moment of it.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our commitment to quality service, personalized itineraries, and
                24/7 customer support has earned us the trust of families,
                honeymooners, corporate clients, and adventure seekers alike.
              </p>
              <div className="flex items-center gap-2 text-accent">
                <Heart className="h-5 w-5 fill-accent" />
                <span className="font-medium">
                  Crafting journeys with love and expertise
                </span>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800&q=80"
                alt="Travel memories"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-lg">
                <div className="font-display text-3xl font-bold">15+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-accent font-medium uppercase tracking-wider">
              Our Team
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Meet the Experts Behind Your Journeys
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our passionate team of travel experts is dedicated to making your
              travel dreams come true
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member?.name ?? ""}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-display text-xl font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-accent font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-accent font-medium uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              What Drives Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-card shadow-lg">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                Passion for Travel
              </h3>
              <p className="text-muted-foreground">
                We don't just plan trips – we create experiences that stay with
                you forever
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-card shadow-lg">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                Customer First
              </h3>
              <p className="text-muted-foreground">
                Your satisfaction is our priority, with 24/7 support throughout
                your journey
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-card shadow-lg">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                Excellence
              </h3>
              <p className="text-muted-foreground">
                We partner with the best hotels, airlines, and local guides to
                ensure quality
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Let our expert team help you plan your perfect vacation. Contact us
            today for a personalized travel consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#packages">
              <Button variant="hero" size="lg">
                Explore Packages
              </Button>
            </Link>
            <a href="tel:+919876543210">
              <Button variant="hero-outline" size="lg" className="gap-2">
                <Phone className="h-5 w-5" />
                Call Us Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
