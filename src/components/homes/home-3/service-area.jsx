import service_data from "@/data/service-data";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const service_content = {
  title: <>Our Services</>,
  // Updated text per requirement (d)
  btn_text: <>See all service</>,

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
        {/* Section Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
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

        {/* 1. The 4 Services Grid
            Moved above the Tailored card and expanded to full width
        */}
        <div className="row g-4 mb-4">
          {service_data.slice(0, 4).map((item, i) => (
            // Expanded boxes: Used col-lg-3 to fit 4 in a row across the full width,
            // or use col-md-6 if you want them really big (2 per row).
            <div className="col-xl-6 col-lg-6 col-md-6" key={i}>
              <div
                style={{
                  // Gradient opacity set to 0.65
                  backgroundImage: `linear-gradient(rgba(11, 57, 55, 0.65), rgba(11, 57, 55, 0.65)), url(${item.bg_img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  ...cardBase,
                  padding: "40px",
                  minHeight: "400px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "24px",
                  color: "#ffffff",
                }}
              >
                <div
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "28px",
                    backgroundColor: "rgba(255,255,255, 0.1)",
                    marginBottom: "10px",
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <h4
                    style={{
                      color: "#ffffff",
                      fontSize: "26px",
                      marginBottom: "15px",
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    style={{
                      color: "#ffffff",
                      fontSize: "18px",
                      lineHeight: 1.6,
                      marginBottom: "25px",
                    }}
                  >
                    {item.description}
                  </p>
                  <Link
                    href="/service-details"
                    style={{
                      color: "#ffffff",
                      fontWeight: 600,
                      fontSize: "18px", // Increased link size
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    Learn More <i className="far fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col-12">
            <div
              style={{
                ...cardBase,
                padding: "50px", // Kept large padding
                overflow: "hidden", // Ensures content stays within border radius
              }}
            >
              <div className="row align-items-center g-5">
                {/* 1. Image Column (Left Side) */}
                <div className="col-lg-5">
                  <div style={{ width: "100%", position: "relative" }}>
                    <Image
                      src="/assets/img/card/services/service5.webp"
                      alt="Tailored AI Enablement"
                      width={400}
                      height={350}
                      layout="responsive"
                      style={{
                        borderRadius: "12px",
                        objectFit: "cover",
                        width: "100%",
                      }}
                    />
                  </div>
                </div>

                {/* 2. Content Column (Right Side) */}
                <div className="col-lg-7 text-start">
                  <h4
                    style={{
                      fontSize: "32px", // Increased size for better hierarchy
                      color: accentColor,
                      marginBottom: "20px",
                    }}
                  >
                    Tailored AI Enablement
                  </h4>
                  <p
                    style={{
                      color: "#54706a",
                      fontSize: "18px",
                      lineHeight: 1.7,
                      marginBottom: "30px",
                    }}
                  >
                    We combine strategy, training, and automation into flexible
                    programs that meet your team where they are. Explore our
                    core services or reach out for a bespoke roadmap.
                  </p>
                  <Link
                    href="/service-details"
                    className="tp-btn-blue-lg tp-btn-hover d-inline-flex align-items-center justify-content-center"
                    style={{
                      backgroundColor: accentColor,
                      color: "#ffffff",
                      borderRadius: "999px",
                      padding: "0 32px",
                      minHeight: "56px",
                      fontWeight: 600,
                    }}
                  >
                    {btn_text}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
