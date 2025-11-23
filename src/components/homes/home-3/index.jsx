"use client";
import FooterThree from "@/layout/footers/footer-3";
import HeaderThree from "@/layout/headers/header-3";
import TestimonialArea from "../home-3/testimonial-area";
import BlogArea from "./blog-area";
import CardArea from "../../../common/card-area";
import CounterArea from "./counter-area";
import HeroArea from "./hero-area";
import IntegrationArea from "./integration-area";
import RatedArea from "./rated-area";
import SalesArea from "../../../common/sales-area";
import ServiceArea from "./service-area";
import ContactFormArea from "@/components/contact/contact-form-area";

const HomeThree = () => {
  return (
    <>
      <HeaderThree />
      <HeroArea />
      {/* <CounterArea /> */}
      <RatedArea />
      <CardArea />
      <ServiceArea />
      <SalesArea />
      {/* <TestimonialArea /> */}
      {/* <IntegrationArea /> */}
      {/* <BlogArea /> */}
      <ContactFormArea />
      <FooterThree />
    </>
  );
};

export default HomeThree;
