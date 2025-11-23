"use client";

import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";
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
            <BreadcrumbTwo title="Get Started" innertitle="Get Started" />
            <RequestServiceArea />
          </main>
          <FooterThree style_contact={true} style_team={true} />
        </div>
      </div>
    </>
  );
};

export default NewService;
