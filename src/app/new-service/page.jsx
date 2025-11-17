import Wrapper from "@/layouts/wrapper";
import ServiceDetails from "@/components/service-details";
import NewService from "@/components/new-service";

export const metadata = {
  title: "New Service - Axonova",
};

const ServiceDetailsPage = () => {
  return (
    <Wrapper>
      <NewService />
    </Wrapper>
  );
};

export default ServiceDetailsPage;
