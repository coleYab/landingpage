import Wrapper from "@/layouts/wrapper";
import ServiceDetails from "@/components/service-details";
import { serviceTabs } from "@/components/service-details/service-details-page";
import { notFound } from "next/navigation";

// Get the list of service slugs from serviceTabs, excluding "overview"
const serviceSlugs = serviceTabs
  .map((tab) => tab.id)
  .filter((id) => id !== "overview");

// --- START: FIXES APPLIED HERE ---

/**
 * Generates static params for all service pages during build time.
 * This is essential for SSG (Static Site Generation).
 */
export const generateStaticParams = () =>
  serviceSlugs.map((service) => ({ service }));

/**
 * Generates dynamic metadata (SEO tags) for each service page.
 * This is the Next.js standard way to handle metadata in dynamic routes.
 */
export async function generateMetadata({ params }) {
  const { service } = params;

  const serviceTitle = service;
  return {
    title: {
      default: `${service} Services | Axonova Services`,
      template: "%s | Axonova Services",
    },

    description: `Expert ${serviceTitle} solutions by Axonova. Discover how our strategies, technology, and design accelerate your business growth.`,

    keywords: [
      `Axonova ${service} services`,
      `${serviceTitle} solutions`,
      `Full-service digital agency ${service}`,
      // Add other general keywords from the original list
      "Axonova digital services",
      "Branding and Identity solutions",
      "Marketing Strategy Agency",
      "Technology Development",
      "Full-service digital agency",
      "Creative Design services",
      "Web Development",
    ],

    alternates: {
      canonical: `https://www.axonova.com/services/${service}`,
    },

    openGraph: {
      title: `${serviceTitle} Solutions: Branding, Marketing & Tech | Axonova`,
      description: `Explore Axonova's ${serviceTitle} service and see how we deliver measurable results for ambitious businesses.`,
      url: `https://www.axonova.com/services/${service}`,
      siteName: "Axonova",
      images: [
        {
          url: "https://www.axonova.com/assets/img/logo/logo-small.png",
          width: 1200,
          height: 630,
          alt: `${serviceTitle} Services Overview - Axonova`,
        },
      ],
      locale: "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: `${serviceTitle} Services by Axonova`,
      description: `Ready to scale with expert ${serviceTitle}? We provide high-impact strategy and technology solutions.`,
      creator: "@AxonovaOfficial",
      images: ["https://www.axonova.com/assets/img/logo/logo-small.png"],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

const ServiceDetailsDynamicPage = async ({ params }) => {
  // params is already an object containing the route segment, no need for await
  const { service } = params;

  if (!serviceSlugs.includes(service)) {
    notFound();
  }

  return (
    <Wrapper>
      <ServiceDetails initialTab={service} />
    </Wrapper>
  );
};

export default ServiceDetailsDynamicPage;
