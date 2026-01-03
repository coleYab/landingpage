"use client";
import AssesmentProblems from "./assesment";
import HeaderThree from "@/layout/headers/header-3";
import FooterThree from "@/layout/footers/footer-3";
import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";

const Assesment = () => {
  return (
    <>
      <HeaderThree />
      <BreadcrumbTwo
        title="AI Readiness Assessment"
        innertitle="AI Readiness Assessment"
      />
      <AssesmentProblems />
      <FooterThree style_contact={true} style_team={true} />
    </>
  );
};

export default Assesment;
