import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { 
  Zap, Shield, Users, BarChart3, Clock, Smartphone, 
  Globe, Lock, Workflow, Bell, FileText, Settings 
} from "lucide-react";

export default function FeaturesPage() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Performance",
      description:
        "Experience blazing fast load times and instant updates with our optimized infrastructure.",
      benefits: ["Sub-second response times", "Global CDN delivery", "Optimized caching"],
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Bank-level encryption and security protocols to keep your data safe.",
      benefits: ["256-bit encryption", "SOC 2 compliant", "Regular security audits"],
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Work together seamlessly with real-time collaboration and communication tools.",
      benefits: ["Real-time editing", "Team chat", "Role-based permissions"],
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description:
        "Get deep insights into your data with powerful analytics and reporting.",
      benefits: ["Custom dashboards", "Export reports", "Data visualization"],
    },
    {
      icon: Clock,
      title: "Automation",
      description:
        "Automate repetitive tasks and workflows to save time and reduce errors.",
      benefits: ["Custom workflows", "Scheduled tasks", "API integrations"],
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description:
        "Access your work anywhere with native iOS and Android applications.",
      benefits: ["Offline mode", "Push notifications", "Native performance"],
    },
    {
      icon: Globe,
      title: "Global Infrastructure",
      description:
        "Deployed across multiple regions for maximum reliability and speed.",
      benefits: ["99.9% uptime SLA", "Auto-scaling", "Load balancing"],
    },
    {
      icon: Lock,
      title: "Privacy First",
      description:
        "Your data belongs to you. We never sell or share your information.",
      benefits: ["GDPR compliant", "Data portability", "Right to deletion"],
    },
    {
      icon: Workflow,
      title: "Custom Workflows",
      description:
        "Build custom workflows that match your unique business processes.",
      benefits: ["Drag-and-drop builder", "Conditional logic", "Multi-step automation"],
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description:
        "Stay informed with intelligent notifications that matter to you.",
      benefits: ["Custom alerts", "Email & SMS", "Notification preferences"],
    },
    {
      icon: FileText,
      title: "Document Management",
      description:
        "Organize, share, and collaborate on documents with version control.",
      benefits: ["Version history", "File sharing", "Advanced search"],
    },
    {
      icon: Settings,
      title: "Customization",
      description:
        "Tailor the platform to your needs with extensive customization options.",
      benefits: ["Custom branding", "API access", "Webhook support"],
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-20 md:py-32">
          <div className="container text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Powerful Features for Modern Teams
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Everything you need to streamline your workflow, collaborate
              effectively, and scale your business
            </p>
            <button className="mt-4 bg-primary text-white px-6 py-3 rounded-lg hover:opacity-90 transition">
              Start Free Trial
            </button>
          </div>
        </section>

        {/* Features Grid */}
        <section className="container py-20 md:py-32">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <div
                key={i}
                className="p-6 border-2 rounded-lg hover:border-primary/50 transition-all hover:shadow-lg bg-white"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, j) => (
                    <li key={j} className="text-sm flex items-start gap-2">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted/30 py-20 md:py-32">
          <div className="container text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Ready to experience these features?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Start your free trial today and see how our platform can transform
              your workflow
            </p>
            <button className="mt-4 bg-primary text-white px-6 py-3 rounded-lg hover:opacity-90 transition">
              Get Started Free
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
