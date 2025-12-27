import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { SectionTitle } from "../atoms";

const ContactCTA = () => {
  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionTitle
              align="left"
              label="Get In Touch"
              title={
                <>
                  Ready to Start Your
                  <span className="text-primary">Journey?</span>
                </>
              }
              description=" Let us help you plan the perfect trip — whether it's exploring
              India's heritage or an exotic international getaway. Our travel
              experts are here to create unforgettable experiences tailored just
              for you."
            />

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Call Us</p>
                  <a
                    href="tel:+919876543210"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Email Us</p>
                  <a
                    href="mailto:info@travelboxholidays.com"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    info@travelboxholidays.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Visit Us</p>
                  <p className="text-muted-foreground">Patna, Bihar, India</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-2xl p-8 shadow-xl">
            <h3 className="font-display text-xl font-bold text-foreground mb-6">
              Send Us a Message
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Destination of Interest
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all">
                  <option value="">Select a destination</option>
                  <optgroup label="India">
                    <option value="jaipur">Jaipur - The Pink City</option>
                    <option value="kerala">Kerala - Backwaters</option>
                    <option value="ladakh">Ladakh - Adventure</option>
                    <option value="varanasi">Varanasi - Spiritual</option>
                  </optgroup>
                  <optgroup label="International">
                    <option value="dubai">Dubai - City of Gold</option>
                    <option value="maldives">Maldives - Beach Paradise</option>
                    <option value="bali">Bali - Island of Gods</option>
                    <option value="singapore">Singapore - Garden City</option>
                    <option value="thailand">Thailand - Land of Smiles</option>
                  </optgroup>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your dream trip..."
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                />
              </div>
              <Button variant="hero" size="lg" className="w-full">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
