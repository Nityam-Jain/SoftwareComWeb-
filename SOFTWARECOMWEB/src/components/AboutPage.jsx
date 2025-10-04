import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Target, Heart, Lightbulb, Users } from "lucide-react";

const Button = ({ children, size, variant, className }) => {
  const base = "rounded-md font-medium transition-colors";
  const sizes = {
    lg: "px-6 py-3 text-lg",
    default: "px-4 py-2 text-sm",
  };
  const variants = {
    secondary: "bg-white text-blue-600 hover:bg-gray-100",
    default: "bg-blue-600 text-white hover:bg-blue-700",
  };

  return (
    <button
      className={`${base} ${sizes[size] || sizes.default} ${
        variants[variant] || variants.default
      } ${className || ""}`}
    >
      {children}
    </button>
  );
};

// Simple Card + CardContent wrapper
const Card = ({ children, className }) => (
  <div className={`rounded-lg border bg-white shadow-sm ${className || ""}`}>
    {children}
  </div>
);

const CardContent = ({ children, className }) => (
  <div className={`p-6 ${className || ""}`}>{children}</div>
);

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Mission Driven",
      description:
        "We are committed to helping teams work smarter and achieve more together.",
    },
    {
      icon: Heart,
      title: "Customer First",
      description:
        "Your success is our success. We listen, adapt, and continuously improve.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We push boundaries and embrace new technologies to stay ahead.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We believe in the power of teamwork and building strong relationships.",
    },
  ];

  const team = [
    { name: "Sarah Johnson", role: "CEO & Founder", initials: "SJ" },
    { name: "Michael Chen", role: "CTO", initials: "MC" },
    { name: "Emily Rodriguez", role: "Head of Design", initials: "ER" },
    { name: "David Kim", role: "Head of Engineering", initials: "DK" },
    { name: "Lisa Anderson", role: "Head of Product", initials: "LA" },
    { name: "James Wilson", role: "Head of Sales", initials: "JW" },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Building the future of work
            </h1>
            <p className="text-lg text-gray-500">
              We are on a mission to empower teams around the world to
              collaborate more effectively and achieve their goals faster.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="bg-gray-100 py-20 md:py-32">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center max-w-6xl mx-auto">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Our Story
                </h2>
                <div className="space-y-4 text-gray-500">
                  <p>
                    Founded in 2020, we started with a simple idea: work should
                    be easier, more enjoyable, and more productive. We saw teams
                    struggling with disconnected tools, inefficient processes,
                    and communication barriers.
                  </p>
                  <p>
                    Today, we serve over 10,000 teams worldwide, helping them
                    streamline their workflows and achieve more together. Our
                    platform has evolved, but our mission remains the same:
                    empower teams to do their best work.
                  </p>
                  <p>
                    We are backed by leading investors and supported by an
                    incredible team of passionate individuals who believe in
                    building products that make a real difference.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200/50 to-purple-200/50 rounded-3xl blur-3xl" />
                <div className="relative aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center">
                  <Users className="h-32 w-32 text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="container py-20 md:py-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl mb-4">Our Values</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {values.map((value, i) => (
              <Card key={i} className="border-2 text-center">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mx-auto">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="text-gray-500 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-gray-100 py-20 md:py-32">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold sm:text-4xl mb-4">
                Meet Our Team
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                The talented people behind our success
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
              {team.map((member, i) => (
                <Card key={i} className="text-center">
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-600 text-white text-2xl font-bold mx-auto">
                      {member.initials}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{member.name}</h3>
                      <p className="text-gray-500 text-sm">{member.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-20 md:py-32">
          <div className="bg-gradient-to-br from-blue-600 to-purple-500 rounded-3xl p-12 md:p-16 text-center space-y-6">
            <h2 className="text-3xl font-bold sm:text-4xl text-white">
              Join us on our journey
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              We are always looking for talented individuals to join our team
            </p>
            <Button size="lg" variant="secondary">
              View Open Positions
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
