import { ContactInfoCard } from "@/components/molecules/ContactInfoCard";
import { LucideIcon } from "lucide-react";

interface ContactInfo {
  icon: LucideIcon;
  title: string;
  details: string[];
}

interface ContactInfoSectionProps {
  contactInfo: ContactInfo[];
  className?: string;
}

export function ContactInfoSection({
  contactInfo,
  className,
}: ContactInfoSectionProps) {
  return (
    <section className={`py-16 bg-background ${className || ""}`}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactInfo.map((info, index) => (
            <ContactInfoCard
              key={index}
              icon={info.icon}
              title={info.title}
              details={info.details}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

