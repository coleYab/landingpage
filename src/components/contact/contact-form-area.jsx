import ContactUsForm from "@/forms/contact-us-form";
import SendIcon from "@/svg/send-icon";
import Link from "next/link";
import React from "react";

const contact_content = {
  sub_title: "CONTACT US",
  tilte: (
    <>
      We'd love to <br /> hear From you.
    </>
  ),
  info: (
    <>
      While we're good with calls, there <br /> are easier ways to get in touch.
    </>
  ),
};
const { sub_title, tilte, info } = contact_content;

const ContactFormArea = () => {
  return (
    <>
      <div
        className="contact-form-area py-5"
        style={{
          backgroundColor: "#ffffff",
          color: "#0b3937",
        }}
      >
        <div className="container">
          <div className="row gx-0">
            <div className="col-xl-5 col-lg-6 d-flex justify-content-center justify-content-lg-start">
              <div className="contact-form-left pe-xl-5 pe-lg-4 text-center text-lg-start">
                <div className="contact-form-section-box pb-3 pb-lg-4">
                  <h5
                    className="inner-section-subtitle"
                    style={{ color: "#0b3937", letterSpacing: "0.2em" }}
                  >
                    {sub_title}
                  </h5>
                  <h4
                    className="tp-section-title pb-10"
                    style={{ color: "#0b3937" }}
                  >
                    {tilte}
                  </h4>
                  <p
                    className="text-center text-lg-start"
                    style={{ color: "#324644" }}
                  >
                    {info}
                  </p>
                </div>
                <div className="contact-form-social-box p-relative">
                  <div className="contact-form-social-item d-none d-md-flex gap-3 justify-content-center justify-content-lg-start mt-3">
                    {["facebook-f", "twitter", "linkedin-in", "instagram"].map(
                      (icon) => (
                        <Link
                          href="#"
                          key={icon}
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            border: "1px solid #0b3937",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#0b3937",
                          }}
                        >
                          <i className={`fab fa-${icon}`}></i>
                        </Link>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="contact-form-right-warp ps-lg-5">
                <div
                  className="postbox__comment-form"
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "24px",
                    // padding: "40px",
                  }}
                >
                  <ContactUsForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactFormArea;
