import Wrapper from "@/layouts/wrapper";
import About from "@/components/about";
import Assesment from "@/components/assesment";

export const metadata = {
  title: "About - Axonova",
};

const AssesmentPage = () => {
  return (
    <Wrapper>
      <Assesment />
    </Wrapper>
  );
};

export default AssesmentPage;
