"use client";

import ContactFormArea from "./contact-form-area";
import ContactInner from "./contact-inner";

import FooterThree from "@/layout/footers/footer-3";
import HeaderThree from "@/layout/headers/header-3";
import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";

const Contact = () => {
  return (
    <>
      <HeaderThree />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbTwo title="Contact us" innertitle="Contact us" />
            {/* <OfficeLocation /> */}
            <ContactFormArea />
          </main>
          <FooterThree style_contact={true} style_team={true} />
        </div>
      </div>
    </>
  );
};

export default Contact;
