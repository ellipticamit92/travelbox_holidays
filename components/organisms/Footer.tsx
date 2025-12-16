import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";


export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <span className="font-display text-2xl font-bold">
                Travel<span className="text-accent">Box</span>
              </span>
              <span className="text-sm font-medium ml-1 text-primary-foreground/80">
                Holidays
              </span>
            </div>
            <p className="text-primary-foreground/70 mb-6">
              Your trusted travel partner for customized India & international
              tours. Creating unforgettable memories since 2014.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* India Destinations */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6">
              India Destinations
            </h4>
            <ul className="space-y-3">
              {[
                "Jaipur",
                "Kerala",
                "Ladakh",
                "Varanasi",
                "Goa",
                "Rajasthan",
              ].map((dest) => (
                <li key={dest}>
                  <a
                    href="#destinations"
                    className="text-primary-foreground/70 hover:text-accent flex items-center gap-2 transition-colors group"
                  >
                    <ArrowRight className="h-4 w-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {dest}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support and Legal */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6">
              Support and Legal
            </h4>
            <ul className="space-y-3">
              {[
                "FAQ",
                "Privacy Policy",
                "Term & Conditions",
                "Help Center",
                "Terms of Service",
              ].map((dest) => (
                <li key={dest}>
                  <a
                    href="#destinations"
                    className="text-primary-foreground/70 hover:text-accent flex items-center gap-2 transition-colors group"
                  >
                    <ArrowRight className="h-4 w-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {dest}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* International Destinations */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6">
              International
            </h4>
            <ul className="space-y-3">
              {[
                "Dubai",
                "Maldives",
                "Bali",
                "Singapore",
                "Thailand",
                "Malaysia",
              ].map((dest) => (
                <li key={dest}>
                  <a
                    href="#destinations"
                    className="text-primary-foreground/70 hover:text-accent flex items-center gap-2 transition-colors group"
                  >
                    <ArrowRight className="h-4 w-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {dest}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70">
                201-Suraj Complex, Exhibition Road
                Patna, Bihar 800001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  +91 96544 22590,  +91 76548 35326
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a
                  href="mailto:info@travelboxholidays.com"
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  packagetbh@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
              <p>
                © {currentYear} Travel Box Holidays Pvt. Ltd. All rights
                reserved.
              </p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-accent transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-accent transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
