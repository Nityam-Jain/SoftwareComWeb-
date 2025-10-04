import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Check } from "lucide-react";

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$9",
      description: "Perfect for individuals and small projects",
      features: [
        "Up to 5 team members",
        "10 GB storage",
        "Basic analytics",
        "Email support",
        "Mobile apps",
        "API access",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Professional",
      price: "$29",
      description: "Ideal for growing teams and businesses",
      features: [
        "Up to 25 team members",
        "100 GB storage",
        "Advanced analytics",
        "Priority support",
        "Mobile apps",
        "API access",
        "Custom workflows",
        "Advanced integrations",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with specific needs",
      features: [
        "Unlimited team members",
        "Unlimited storage",
        "Enterprise analytics",
        "24/7 dedicated support",
        "Mobile apps",
        "API access",
        "Custom workflows",
        "Advanced integrations",
        "SSO & SAML",
        "Custom SLA",
        "Dedicated account manager",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  const faqs = [
    {
      q: "Can I change plans later?",
      a: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept all major credit cards, PayPal, and wire transfers for Enterprise plans.",
    },
    {
      q: "Is there a long-term contract?",
      a: "No, all plans are month-to-month. You can cancel anytime without any penalties.",
    },
    {
      q: "Do you offer discounts for annual billing?",
      a: "Yes, save 20% when you choose annual billing on any plan.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-20 md:py-32">
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect plan for your needs. All plans include a 14-day free trial.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-lg p-8 border-2 ${
                  plan.popular
                    ? "border-primary shadow-xl scale-105"
                    : "border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-sm font-semibold px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center pb-8">
                  <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                  <p className="text-base text-muted-foreground">{plan.description}</p>
                  <div className="mt-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.price !== "Custom" && (
                      <span className="text-muted-foreground">/month</span>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-lg text-lg font-medium transition ${
                    plan.popular
                      ? "bg-primary text-white hover:opacity-90"
                      : "border border-border hover:border-primary"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="mt-20 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-border pb-6 last:border-0">
                  <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
