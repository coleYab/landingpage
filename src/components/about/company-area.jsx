import Image from "next/image";
import React from "react";

const company_content = {
  sub_title: "ABOUT AXONOVA CONSULTING",
  title: <>AI Transformation, Done Right.</>,
  info_1: (
    <>
      Axonova Consulting helps organisations adopt AI with clarity, confidence,
      and measurable impact.
    </>
  ),
  info_2: (
    <>
      We believe AI should simplify work — not complicate it. That’s why our
      approach focuses on practical skills, safe adoption, and real outcomes
      that teams can feel and leaders can measure.
    </>
  ),
  info_3: (
    <>
      From training and coaching to strategy and automation, we guide
      organisations through AI transformation the right way — with your people
      at the centre.
    </>
  ),
  images: [
    {
      src: "/assets/img/about/new/gkmc.jpg",
      alt: "AI Virtual Assistant for Organization Transformation",
      width: 500,
      height: 350,
    },
    {
      src: "/assets/img/about/new/gkmc.jpg",
      alt: "JetBrains Junie Agentic AI Coding Assistant",
      width: 500,
      height: 350,
    },
  ],
};

const { sub_title, title, info_1, info_2, info_3, images } = company_content;

// We keep minimal custom styles for specific brand consistency
const customStyles = {
  // Styles for the background image section
  backgroundSection: {
    // backgroundImage: `url(${images[0].src})`, // Use the first image as background
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative", // Needed for absolute positioning of overlay
    color: "#0b3937", // Default text color for contrast
    minHeight: "500px", // Ensure enough height to see the background
    display: "flex",
    alignItems: "center",
  },
  // Overlay to make text readable
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(228, 227, 227, 0.5)", // Dark semi-transparent overlay
    zIndex: 1, // Ensure overlay is behind text
  },
  // Subtitle style for contrast
  subtitle: {
    letterSpacing: "2px",
    fontSize: "14px",
    fontWeight: 700,
    color: "#0b3937", // Lighter color for subtitle
  },
  // Ensure content is above the overlay
  contentZIndex: {
    position: "relative",
    zIndex: 2,
  },
};

const CompanyArea = () => {
  return (
    <section
      className="ab-company-area py-5"
      style={customStyles.backgroundSection}
    >
      {/* Background Overlay */}
      {/* <div style={customStyles.overlay}></div> */}

      <div className="container" style={customStyles.contentZIndex}>
        {/* Header Section */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10 col-xl-8 text-center text-white">
            <div className="ab-company-section-box">
              <h4 className="text-uppercase mb-2" style={customStyles.subtitle}>
                {sub_title}
              </h4>
              <h3 className="fw-bold mb-4 display-6">{title}</h3>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="row justify-content-center">
          <div
            className="col-lg-11 col-xl-11 wow tpfadeRight text-white"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
          >
            <div className="ab-company-right text-center">
              <div
                className="lead mb-4"
                style={{ fontWeight: 500, color: "#0b3937" }}
              >
                <p className="mb-3 fw-bold" style={{ color: "#0b3937" }}>
                  {info_1}
                </p>
                <p className="mb-3 fw-bold" style={{ color: "#0b3937" }}>
                  {info_2}
                </p>
                <p className="mb-0 fw-bold" style={{ color: "#0b3937" }}>
                  {info_3}
                </p>
              </div>
              {/* Individual images are removed as one is now the background */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyArea;
