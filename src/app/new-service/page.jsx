import Wrapper from "@/layouts/wrapper";
import ServiceDetails from "@/components/service-details";
import NewService from "@/components/new-service";

export const metadata = {
  // Title: Focused on action and starting the journey
  title: {
    default: "Start Your AI Journey Today: Book a Session or Assessment | Axonova",
    template: "Start Now | Axonova AI Consulting",
  },

  // Detailed Description: Clear Call-to-Action (CTA) and benefit.
description:
    "Ready to bring AI into your organization the right way? Complete our AI Maturity Assessment or book a personalised session to move forward with clarity, confidence, and measurable value.",

  // Keywords: Action-oriented and business-focused
  keywords: [
    "Start AI adoption",
    "Book AI consulting session",
    "AI Maturity Assessment",
    "AI strategy consultation",
    "Get started with AI transformation",
    "Axonova contact",
  ],

  // Canonical URL
  alternates: {
    canonical: `https://axonovaconsulting.co.uk/new-service`,
  },

  // Open Graph (og): For sharing on platforms
  openGraph: {
    title: "Ready to Scale with AI? Start Here | Axonova Consulting",
    description: "Whether you're starting small or scaling across your business, we'll help you move forward with clarity and measurable value. Take the first step now.",
    url: "https://axonovaconsulting.co.uk/new-service",
    siteName: "Axonova Consulting",
    images: [
      {
        url: "https://axonovaconsulting.co.uk/assets/img/logo/logo-small.png", // Use a relevant, engaging image
        width: 1200,
        height: 630,
        alt: "Axonova AI Consulting Next Steps",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Don't Wait: Begin Your AI Transformation",
    description: "Take the AI Maturity Assessment or book your personalized AI session with an Axonova expert today.",
    creator: "@AxonovaOfficial",
    images: ["https://axonovaconsulting.co.uk/assets/img/logo/logo-small.png"],
  },

   robots: {
    index: true,
    follow: true,
  },
};

const ServiceDetailsPage = () => {
  return (
    <Wrapper>
      <NewService />
    </Wrapper>
  );
};

export default ServiceDetailsPage;
