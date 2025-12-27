import { MapPin, Phone, Mail } from "lucide-react";
import { ContactHero } from "@/components/organisms/ContactHero";
import { ContactInfoSection } from "@/components/organisms/ContactInfoSection";
import { ContactForm } from "@/components/organisms/ContactForm";
import { MapEmbed } from "@/components/molecules/MapEmbed";
import { BusinessHoursCard } from "@/components/molecules/BusinessHoursCard";
import { EMAIL, PHONE_NUMBER, PHONE_NUMBER_ONE } from "../constants/constants";

export default function ContactPage() {
  const businessHours = [
    { day: "Monday - Saturday", hours: "9:00 AM - 6:00 PM" },
    { day: "Sunday", hours: "Holiday" },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        "Flat no. 201 on 2nd floor in suraj complex,sahayogi press marg, Exhibition Rd, near Domino's pizza",
        "Patna, Bihar 800001",
      ],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [PHONE_NUMBER, PHONE_NUMBER_ONE],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [EMAIL],
    },
  ];

  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.755203914991!2d72.83164131744384!3d19.021355987132746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ced7c9e2c4f3%3A0x9f70f7e0f4b9b8cd!2sMG%20Road%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1702900000000!5m2!1sen!2sin";

  return (
    <div className="min-h-screen bg-background">
      <ContactHero />

      <ContactInfoSection contactInfo={contactInfo} />

      {/* Contact Form & Map Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <ContactForm />

            {/* Map & Business Hours */}
            <div className="space-y-8">
              <MapEmbed src={mapSrc} title="Office Location" />
              <BusinessHoursCard
                businessHours={businessHours}
                footerText="* We're also available 24/7 for emergency travel assistance"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
