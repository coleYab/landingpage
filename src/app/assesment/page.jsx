import Wrapper from "@/layouts/wrapper";
import About from "@/components/about";
import Assesment from "@/components/assesment";

export const metadata = {
  title: {
    default: "AI Maturity Assessment | Find Your Next AI Step | Axonova",
    template: "Assesment | Axonova AI Consulting",
  },

  description:
    "Take Axonova's AI Maturity Assessment to instantly find your organization's current AI readiness, identify high-value opportunities, and receive an actionable roadmap for confident AI adoption.",

  keywords: [
    "AI Maturity Assessment",
    "AI Readiness Score",
    "AI Adoption Roadmap",
    "Assess AI capability",
    "Business AI potential",
    "Axonova Assessment",
  ],

  alternates: {
    canonical: `https://axonovaconsulting.co.uk/assesment`,
  },

  openGraph: {
    title: "Free AI Maturity Assessment for Businesses | Axonova",
    description:
      "Get immediate clarity on where your business stands with AI and what your next strategic steps should be. Start your confidential assessment now.",
    url: "https://axonovaconsulting.co.uk/assesment",
    siteName: "Axonova AI Consulting",
    images: [
      {
        url: "https://axonovaconsulting.co.uk/assets/img/logo/logo-small.png",
        width: 1200,
        height: 630,
        alt: "Axonova AI Maturity Assessment Tool",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "What's Your AI Readiness Score? Take the Assessment.",
    description:
      "Identify high-value AI opportunities and get a clear, measurable roadmap. Take the Axonova AI Assessment today.",
    creator: "@AxonovaOfficial",
    images: ["https://axonovaconsulting.co.uk/assets/img/logo/logo-small.png"],
  },

  // General SEO Tags
  robots: {
    index: true,
    follow: true,
  },
};

const AssesmentPage = () => {
  return (
    <Wrapper>
      <Assesment />
    </Wrapper>
  );
};

export default AssesmentPage;
