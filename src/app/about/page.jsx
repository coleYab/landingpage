import Wrapper from "@/layouts/wrapper";
import About from "@/components/about";
export const metadata = {
  // Title: Focused on brand identity and core mission
  title: {
    default: "About Axonova | Our Mission in AI Transformation",
    template: "%s | Axonova AI Consulting",
  },

  // Detailed Description: Highlights the company's ethos and key differentiators.
  description:
    "Learn about Axonova's mission to make AI practical, safe, and valuable for every business. Discover why our focus on practical application, governance, and end-to-end support makes us the partner of choice for AI adoption.",

  // Keywords: Focus on company ethics, values, and consulting profile
  keywords: [
    "About Axonova Consulting",
    "AI consulting mission",
    "Responsible AI firm",
    "Why choose Axonova",
    "Our AI strategy philosophy",
    "Digital transformation agency",
  ],

  // Canonical URL (Assuming the route is /about)
  alternates: {
    canonical: `https://www.axonova.com/about`,
  },

  // Open Graph (og): For sharing on platforms
  openGraph: {
    title: "Who We Are: The Axonova Story and AI Philosophy",
    description: "We are built for your people and processes. Our methods embed governance and measurable business impact into every step of your AI journey.",
    url: "https://www.axonova.com/about",
    siteName: "Axonova AI Consulting",
    images: [
      {
        url: "https://www.axonova.com/assets/img/og-about-us.jpg", // Use a professional team or mission image
        width: 1200,
        height: 630,
        alt: "Axonova Team and Mission Statement",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Practical, Safe, Measurable: The Axonova Difference",
    description: "We focus on real tasks, real workflows, and real value. Learn how we guide your organization through every stage of AI adoption.",
    creator: "@AxonovaOfficial",
    images: ["https://www.axonova.com/assets/img/og-about-us.jpg"],
  },
  
  // General SEO Tags
  robots: {
    index: true,
    follow: true,
  },
};

const AboutPage = () => {
  return (
    <Wrapper>
      <About />
    </Wrapper>
  );
};

export default AboutPage;
