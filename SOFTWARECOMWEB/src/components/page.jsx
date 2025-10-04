
import React from "react";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import {
  Smartphone,
  Zap,
  Shield,
  Users,
  BarChart3,
  Clock,
  CheckCircle2,
  Star,
  ArrowRight,
} from "lucide-react";

function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-20 md:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                ✨ New features available
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-balance">
                Transform Your Digital Experience
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl text-pretty">
                Streamline your workflow with our powerful, intuitive platform
                designed for modern teams. Get started in minutes and see
                results instantly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base bg-transparent"
                >
                  Watch Demo
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-10 w-10 rounded-full border-2 border-background bg-muted"
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex items-center gap-1 text-primary font-semibold">
                    <Star className="h-4 w-4 fill-primary" />
                    <Star className="h-4 w-4 fill-primary" />
                    <Star className="h-4 w-4 fill-primary" />
                    <Star className="h-4 w-4 fill-primary" />
                    <Star className="h-4 w-4 fill-primary" />
                  </div>
                  <p className="text-muted-foreground">
                    Trusted by 10,000+ users
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
              <Card className="relative border-2 shadow-2xl">
                <CardContent className="p-8">
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center">
                    <Smartphone className="h-32 w-32 text-primary" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="container py-20 md:py-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 text-balance">
              Everything you need to succeed
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Powerful features designed to help you work smarter, not harder
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description:
                  "Experience blazing fast performance with our optimized infrastructure",
              },
              {
                icon: Shield,
                title: "Secure & Private",
                description:
                  "Enterprise-grade security to keep your data safe and protected",
              },
              {
                icon: Users,
                title: "Team Collaboration",
                description:
                  "Work together seamlessly with real-time collaboration tools",
              },
              {
                icon: BarChart3,
                title: "Advanced Analytics",
                description:
                  "Get insights with powerful analytics and reporting features",
              },
              {
                icon: Clock,
                title: "Save Time",
                description:
                  "Automate repetitive tasks and focus on what matters most",
              },
              {
                icon: Smartphone,
                title: "Mobile Ready",
                description:
                  "Access your work anywhere with our mobile-optimized platform",
              },
            ].map((feature, i) => (
              <Card
                key={i}
                className="border-2 hover:border-primary/50 transition-colors"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* App Showcase */}
        <section className="bg-muted/30 py-20 md:py-32">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
                <div className="relative bg-gradient-to-br from-primary to-accent p-8 rounded-3xl">
                  <div className="bg-background rounded-2xl p-6 shadow-2xl">
                    <div className="space-y-4">
                      <div className="h-4 bg-muted rounded w-3/4" />
                      <div className="h-4 bg-muted rounded w-1/2" />
                      <div className="h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg" />
                      <div className="grid grid-cols-2 gap-4">
                        <div className="h-20 bg-muted rounded-lg" />
                        <div className="h-20 bg-muted rounded-lg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6 order-1 lg:order-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance">
                  Beautiful interface, powerful features
                </h2>
                <p className="text-lg text-muted-foreground text-pretty">
                  Our intuitive design makes it easy to get started, while
                  advanced features give you the power you need to scale.
                </p>
                <ul className="space-y-4">
                  {[
                    "Drag-and-drop interface",
                    "Customizable workflows",
                    "Real-time updates",
                    "Advanced integrations",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button size="lg" className="mt-4">
                  Explore Features
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="container py-20 md:py-32">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { value: "10K+", label: "Active Users" },
              { value: "99.9%", label: "Uptime" },
              { value: "24/7", label: "Support" },
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-primary to-accent py-20 md:py-32">
          <div className="container text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary-foreground text-balance">
              Ready to get started?
            </h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
              Join thousands of teams already using our platform to transform
              their workflow
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-base">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base bg-transparent text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;
