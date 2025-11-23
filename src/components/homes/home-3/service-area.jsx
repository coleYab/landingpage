import service_data from "@/data/service-data";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const service_content = {
  title: <>Our Services</>,
  btn_text: <>See All Services</>,

  bg_img: "/assets/img/service/service-3-bg.png",
  service_title: "Axonova",
  service_info: (
    <>
      Here are our services that help organisations adopt AI with clarity and
      confidence — through hands-on training, strategic guidance, and reliable
      automation.
    </>
  ),
};
const { title, btn_text, bg_img, service_title, service_info } =
  service_content;

const ServiceArea = () => {
  const accentColor = "#0b3937";
  const sectionStyles = {
    backgroundColor: "#ffffff",
    paddingTop: "50px",
    paddingBottom: "90px",
    color: accentColor,
  };
  const cardBase = {
    backgroundColor: "#ffffff",
    borderRadius: "24px",
    border: "1px solid #dfe6e4",
  };

  return (
    <section className="tp-service-area z-index" style={sectionStyles}>
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            {/* <span
              className="text-uppercase"
              style={{
                fontSize: "14px",
                letterSpacing: "0.2em",
                color: "#7a8d88",
              }}
            >
              {service_title}
            </span> */}
            <h3
              className="tp-section-title-3 mt-3"
              style={{
                color: accentColor,
                fontSize: "48px",
                lineHeight: 1.1,
              }}
            >
              {title}
            </h3>
            <p
              className="mt-3"
              style={{
                color: "#54706a",
                fontSize: "18px",
                lineHeight: 1.6,
              }}
            >
              {service_info}
            </p>
          </div>
        </div>

        <div className="row g-4 align-items-stretch">
          <div className="col-xl-4  d-none d-lg-flex">
            <div
              style={{
                ...cardBase,
                padding: "40px",
                height: "100%",
              }}
            >
              <Image
                src="/assets/img/card/services/service5.webp"
                alt="Tailored AI Enablement"
                width={400}
                height={350}
                layout="responsive"
                style={{
                  marginBottom: "20px",
                  borderRadius: "5px",
                }}
              />
              <h4
                style={{
                  fontSize: "28px",
                  color: accentColor,
                  marginBottom: "20px",
                }}
              >
                Tailored AI Enablement
              </h4>
              <p
                style={{
                  color: "#54706a",
                  lineHeight: 1.7,
                }}
              >
                We combine strategy, training, and automation into flexible
                programs that meet your team where they are. Explore our core
                services or reach out for a bespoke roadmap.
              </p>
              <Link
                href="/service-details"
                className="tp-btn-blue-lg tp-btn-hover d-inline-flex align-items-center justify-content-center mt-4"
                style={{
                  backgroundColor: accentColor,
                  color: "#ffffff",
                  borderRadius: "999px",
                  padding: "0 28px",
                  minHeight: "54px",
                  fontWeight: 600,
                }}
              >
                {btn_text}
              </Link>
            </div>
          </div>

          <div className="col-xl-8">
            <div className="row g-4">
              {service_data.slice(0, 4).map((item, i) => (
                <div className="col-md-6" key={i}>
                  <div
                    style={{
                      backgroundImage: `linear-gradient(rgba(11, 57, 55, 0.85), rgba(11, 57, 55, 0.85)), url(${item.bg_img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      ...cardBase,
                      padding: "32px",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      gap: "18px",
                      color: "#ffffff",
                    }}
                  >
                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "16px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "24px",
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h4
                        style={{
                          color: "#ffffff",
                          fontSize: "22px",
                          marginBottom: "10px",
                        }}
                      >
                        {item.title}
                      </h4>
                      <p
                        style={{
                          color: "#ffffff",
                          fontSize: "16px",
                          lineHeight: 1.6,
                          marginBottom: "18px",
                        }}
                      >
                        {item.description}
                      </p>
                      <Link
                        href="/service-details"
                        style={{
                          color: "#ffffff",
                          fontWeight: 600,
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        Learn More <i className="far fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
