"use client";

import Breadcrumb from "@/common/breadcrumbs/breadcrumb";
import HeroBanner from "@/common/hero-banner";
import HeaderSix from "@/layout/headers/header-6";
import OfficeLocation from "../contact/office-location";
import FooterThree from "@/layout/footers/footer-3";
import RequestServiceArea from "../contact/service-form-area";
import HeaderThree from "@/layout/headers/header-3";

const NewService = () => {
  return (
    <>
      <HeaderThree />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title_top="New" title_bottom="New" />
            <HeroBanner
              title="New"
              subtitle="Service"
              bg_img="/assets/img/contact/contact-banner.jpg"
            />
            {/* <OfficeLocation /> */}
            <RequestServiceArea />
          </main>
          <FooterThree style_contact={true} style_team={true} />
        </div>
      </div>
    </>
  );
};

export default NewService;
