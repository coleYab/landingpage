import Wrapper from "@/layouts/wrapper";
import ServiceDetails from "@/components/service-details";
import { serviceTabs } from "@/components/service-details/service-details-page";
import { notFound } from "next/navigation";

const serviceSlugs = serviceTabs
  .map((tab) => tab.id)
  .filter((id) => id !== "overview");

export const metadata = {
  title: "Service Details - Axonova",
};

export const generateStaticParams = () =>
  serviceSlugs.map((service) => ({ service }));

const ServiceDetailsDynamicPage = async ({ params }) => {
  const { service } = await params;

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
