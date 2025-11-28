"use client";
import AboutArea from "@/common/about-area";
import FooterFive from "@/layout/footers/footer-5";
import HeaderSix from "@/layout/headers/header-6";
import Breadcrumb from "../../common/breadcrumbs/breadcrumb";
import HeroBanner from "../../common/hero-banner";
import CtaArea from "../contact/cta-area";
import CompanyArea from "./company-area";
import HeaderThree from "@/layout/headers/header-3";
import FooterThree from "@/layout/footers/footer-3";
import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";
import MissionArea from "./missions";
import Approaches from "./approachs";

const About = () => {
  return (
    <>
      <HeaderThree />
      <BreadcrumbTwo title="About" innertitle="About" />
      <CompanyArea />
      <Approaches />
      <MissionArea />
      <AboutArea />
      {/* <CtaArea /> */}
      <FooterThree style_contact={true} style_team={true} />
    </>
  );
};

export default About;
