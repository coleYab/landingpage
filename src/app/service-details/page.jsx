import Wrapper from "@/layouts/wrapper";
import ServiceDetails from "@/components/service-details";

export const metadata = {
  title: "Services - Axonova",
};

const ServiceDetailsPage = () => {
  return (
    <Wrapper>
      <ServiceDetails />
    </Wrapper>
  );
};

export default ServiceDetailsPage;
