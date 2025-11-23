import ContactUsForm from "@/forms/contact-us-form";
import ServiceRequestForm from "@/forms/service-request-form";
import SendIcon from "@/svg/send-icon";
import Link from "next/link";
import React from "react";
const contact_content = {
  sub_title: "LET'S GET STARTED",
  tilte: (
    <>
      Ready to <br /> work together?
    </>
  ),
  info: (
    <>
      We’re excited to help your organisation adopt AI <br />
      in a practical, safe, and impactful way. <br />
      Let’s make it happen!
    </>
  ),
};
const { sub_title, tilte, info } = contact_content;

const RequestServiceArea = () => {
  return (
    <>
      <div className="contact-form-area pb-120 pt-120">
        <div className="container">
          <div className="row gx-0">
            <div className="col-xl-5 col-lg-6">
              <div className="contact-form-left">
                <div className="contact-form-section-box pb-80">
                  <h5
                    className="inner-section-subtitle"
                    style={{
                      color: "#0b3937",
                    }}
                  >
                    {sub_title}
                  </h5>
                  <h4 className="tp-section-title pb-10">{tilte}</h4>
                  <p>{info}</p>
                </div>
                <div className="contact-form-social-box p-relative">
                  <div className="contact-form-social-item">
                    <Link href="#">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link href="#">
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                    <Link href="#">
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="contact-form-right-warp">
                <div className="postbox__comment-form">
                  <ServiceRequestForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestServiceArea;
