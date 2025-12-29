"use client";
import AboutArea from "@/common/about-area";

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
      <BreadcrumbTwo title="About us" innertitle="About us" />
      <CompanyArea />
      <Approaches />
      <MissionArea />
      <AboutArea />
      <FooterThree style_contact={true} style_team={true} />
    </>
  );
};

export default About;
