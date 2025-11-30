import Wrapper from "@/layouts/wrapper";
import ServiceDetails from "@/components/service-details";

export const metadata = {
  title: {
    default: "Practical AI Consulting Services & Training | Axonova",
    template: "Service Details | Axonova AI Services",
  },

  description:
    "Adopt AI with confidence. Axonova offers practical AI training, strategic consulting, automation solutions, and personalized coaching to ensure safe, valuable, and measurable AI transformation for your business.",

  keywords: [
    "AI consulting services",
    "AI training for business",
    "AI automation solutions",
    "AI strategy and roadmap",
    "AI transformation consulting",
    "Practical AI adoption",
    "Responsible AI governance",
    "Axonova AI services",
  ],

  alternates: {
    canonical: `https://axonovaconsulting.co.uk/service-details`,
  },

  openGraph: {
    title: "AI Transformation: Strategy, Training, and Automation | Axonova",
    description: "End-to-end AI consulting that delivers measurable business impact. Explore our services for practical, safe, and valuable AI adoption.",
    url: "https://axonovaconsulting.co.uk/service-details",
    siteName: "Axonova Consulting",
    images: [
      {
        url: "https://axonovaconsulting.co.uk/assets/img/logo/logo-small.png", // Use a relevant OG image
        width: 1200,
        height: 630,
        alt: "Axonova AI Consulting Services Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Practical AI Adoption Done Right by Axonova",
    description: "We make AI practical, safe, and valuable for your people and your business through expert training and strategy.",
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
      <ServiceDetails />
    </Wrapper>
  );
};

export default ServiceDetailsPage;
