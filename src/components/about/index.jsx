'use client';
import AboutArea from "@/common/about-area";
import FooterFive from "@/layout/footers/footer-5";
import HeaderSix from "@/layout/headers/header-6";
import Breadcrumb from "../../common/breadcrumbs/breadcrumb";
import HeroBanner from "../../common/hero-banner";
import CtaArea from "../contact/cta-area";
import CompanyArea from "./company-area";
 
const About = () => {
  return (
    <>
      <HeaderSix />
      <Breadcrumb title_top="About"  title_bottom="Axonova" />
      <HeroBanner title="About" subtitle="Axonova" bg_img="/assets/img/breadcrumb/breadcrumb-2.jpg" />
      {/* <Brand /> */}
      <CompanyArea />
      <AboutArea />
      <CtaArea />
      <FooterFive style_contact={true} style_team={true} />
    </>
  );
};

export default About;
