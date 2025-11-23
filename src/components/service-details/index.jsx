"use client";
import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";
import FooterThree from "@/layout/footers/footer-3";
import HeaderSix from "@/layout/headers/header-6";
import ServiceDetailsArea from "./service-details-area";
import HeaderThree from "@/layout/headers/header-3";
import { services, serviceTabs } from "./service-details-page";

const ServiceDetails = ({ initialTab }) => {
  const title = services[initialTab]?.title || "overview";
  return (
    <>
      <HeaderThree />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbTwo title={title} innertitle={title} />
            <ServiceDetailsArea initialTab={initialTab} />
          </main>
          <FooterThree />
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
