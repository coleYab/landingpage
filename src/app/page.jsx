import Wrapper from "@/layouts/wrapper";
import HomeThree from "@/components/homes/home-3";


export const metadata = {
  // Title: Optimized for the main homepage, using brand and key offering
  title: {
    default: "Axonova AI Consulting | Practical Strategy, Training & Automation",
    template: "%s | Axonova AI Consulting",
  },

  // Detailed Description: The main value proposition and key services.
  description:
    "AI Transformation, Done Right. Axonova provides practical AI training, strategy, and automation solutions, enabling your organization to adopt AI safely, confidently, and with measurable value.",

  // Keywords: Essential terms for search engines
  keywords: [
    "AI consulting firm",
    "AI strategy services",
    "AI training and adoption",
    "AI automation solutions",
    "Business AI transformation",
    "Responsible AI governance",
    "Axonova Digital Agency",
  ],

  // Canonical URL (Highly Recommended): Set to the root domain.
  alternates: {
    canonical: `https://axonovaconsulting.co.uk`,
  },

  // --- Open Graph (og): For sharing on platforms like LinkedIn and Facebook ---
  openGraph: {
    title: "Axonova AI Consulting: Strategy, Training, & Automation",
    description: "We make AI practical, safe, and valuable for your people and your business. Start your AI journey with confidence.",
    url: "https://www.axonova.com/",
    siteName: "Axonova AI Consulting",
    images: [
      {
        url: "https://axonovaconsulting.co.uk/assets/img/logo/logo-small.png", // Use a relevant, high-impact image
        width: 1200,
        height: 630,
        alt: "Axonova AI Transformation and Consulting",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // --- Twitter Card: For sharing on Twitter/X ---
  twitter: {
    card: "summary_large_image",
    title: "AI Transformation, Done Right | Axonova",
    description: "Practical AI training, strategy, and automation enabling your organization to adopt AI with confidence.",
    creator: "@AxonovaOfficial",
    images: ["https://axonovaconsulting.co.uk/assets/img/logo/logo-small.png"],
  },
  
  // --- General SEO Tags ---
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  }
};

const HomePage = () => {
  return (
    <Wrapper>
      <HomeThree />
    </Wrapper>
  );
};

export default HomePage;
