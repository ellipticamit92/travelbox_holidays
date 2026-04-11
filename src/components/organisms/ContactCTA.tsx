"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { SectionTitle } from "../atoms";

interface FormValues {
  name: string;
  phone: string;
  email: string;
  destination: string;
  message: string;
}

const ContactCTA = () => {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    const res = await fetch("/api/inquiries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      setSubmitted(true);
      reset();
    }
  };

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
                  <span className="text-primary"> Journey?</span>
                </>
              }
              description="Let us help you plan the perfect trip — whether it's exploring India's heritage or an exotic international getaway. Our travel experts are here to create unforgettable experiences tailored just for you."
            />

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Call Us</p>
                  <a href="tel:+919876543210" className="text-muted-foreground hover:text-accent transition-colors">
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
                  <a href="mailto:info@travelboxholidays.com" className="text-muted-foreground hover:text-accent transition-colors">
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
            <h3 className="font-display text-xl font-bold text-foreground mb-6">Send Us a Message</h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <CheckCircle className="h-12 w-12 text-green-500" />
                <p className="text-lg font-semibold text-foreground">Message Sent!</p>
                <p className="text-muted-foreground text-sm">We'll get back to you within 24 hours.</p>
                <Button variant="outline" onClick={() => setSubmitted(false)}>Send another</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                    <input
                      {...register("name", { required: "Name is required" })}
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                    <input
                      {...register("phone", { required: "Phone is required" })}
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    />
                    {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                  <input
                    {...register("email", { required: "Email is required" })}
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Destination of Interest</label>
                  <select
                    {...register("destination")}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  >
                    <option value="">Select a destination</option>
                    <optgroup label="India">
                      <option value="Jaipur">Jaipur - The Pink City</option>
                      <option value="Kerala">Kerala - Backwaters</option>
                      <option value="Ladakh">Ladakh - Adventure</option>
                      <option value="Varanasi">Varanasi - Spiritual</option>
                    </optgroup>
                    <optgroup label="International">
                      <option value="Dubai">Dubai - City of Gold</option>
                      <option value="Maldives">Maldives - Beach Paradise</option>
                      <option value="Bali">Bali - Island of Gods</option>
                      <option value="Singapore">Singapore - Garden City</option>
                      <option value="Thailand">Thailand - Land of Smiles</option>
                    </optgroup>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Your Message</label>
                  <textarea
                    {...register("message", { required: "Message is required" })}
                    rows={4}
                    placeholder="Tell us about your dream trip..."
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                  />
                  {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                  <Send className="h-4 w-4 mr-2" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
