import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Mail, MessageSquare, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-balance">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Have a question or want to learn more? We'd love to hear from you.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {/* Email */}
              <div className="p-6 border rounded-lg shadow-sm bg-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-2">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Email Us</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Our team typically responds within 24 hours
                </p>
                <a
                  href="mailto:hello@example.com"
                  className="text-primary hover:underline"
                >
                  hello@example.com
                </a>
              </div>

              {/* Live Chat */}
              <div className="p-6 border rounded-lg shadow-sm bg-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-2">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Live Chat</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Chat with our support team in real-time
                </p>
                <button className="w-full border rounded-lg px-4 py-2 text-sm hover:bg-primary/10 transition">
                  Start Chat
                </button>
              </div>

              {/* Phone */}
              <div className="p-6 border rounded-lg shadow-sm bg-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-2">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Call Us</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Mon-Fri from 9am to 6pm EST
                </p>
                <a href="tel:+1234567890" className="text-primary hover:underline">
                  +1 (234) 567-890
                </a>
              </div>

              {/* Address */}
              <div className="p-6 border rounded-lg shadow-sm bg-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-2">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Visit Us</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Come say hello at our office
                </p>
                <address className="not-italic text-sm text-muted-foreground">
                  123 Business Street
                  <br />
                  San Francisco, CA 94102
                  <br />
                  United States
                </address>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 p-6 border rounded-lg shadow-sm bg-white">
              <h2 className="text-2xl font-semibold mb-2">Send us a message</h2>
              <p className="text-sm text-muted-foreground mb-6">
                Fill out the form below and we'll get back to you as soon as possible
              </p>
              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="block text-sm font-medium">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      placeholder="John"
                      className="w-full border rounded-lg px-3 py-2 text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="block text-sm font-medium">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      placeholder="Doe"
                      className="w-full border rounded-lg px-3 py-2 text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full border rounded-lg px-3 py-2 text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="block text-sm font-medium">
                    Company (Optional)
                  </label>
                  <input
                    id="company"
                    placeholder="Acme Inc."
                    className="w-full border rounded-lg px-3 py-2 text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    placeholder="How can we help?"
                    className="w-full border rounded-lg px-3 py-2 text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    className="w-full border rounded-lg px-3 py-2 text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white rounded-lg py-3 text-sm font-medium hover:opacity-90 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  ); 
}
