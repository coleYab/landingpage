import Image from "next/image";
import React from "react";

// --- Data remains the same, but using  tags for bolding ---
const company_content = {
  // sub_title: "ABOUT AXONOVA CONSULTING",
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
      From training and coaching to strategy and automations, we guide
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

const { sub_title, title, info_1, info_2, info_3 } = company_content;

// --- Custom Styles (Updated for EVEN LARGER Text and Uniform Color) ---
const PRIMARY_COLOR = "#0b3937"; // Requested dark teal/green color

const customStyles = {
  // 1. White Background Section Style
  whiteSection: {
    backgroundColor: "#ffffff", // White background
    paddingTop: "6rem",
    paddingBottom: "6rem",
    color: PRIMARY_COLOR, // Default text color is the requested dark teal
  },
  // Subtitle style (Slightly larger for hierarchy)
  subtitle: {
    letterSpacing: "3px",
    fontSize: "1.05rem", // Increased subtitle size
    fontWeight: 700,
    color: PRIMARY_COLOR,
  },
  // 2. Text style for body content (Significantly LARGER Font Size for visibility)
  bodyText: {
    fontSize: "1.5rem", // SIGNIFICANTLY LARGER font size (approx 24px)
    lineHeight: "1.6", // Adjusted line height for readability at a larger size
    fontWeight: 400,
    color: PRIMARY_COLOR,
  },
  // Card-like containers for content blocks
  contentBlock: {
    padding: "30px",
    borderRadius: "10px",
    backgroundColor: "#f8f9fa",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
    height: "100%",
  },
  // Custom style to ensure the 'Done Right' span also uses the primary color
  titleSpan: {
    color: PRIMARY_COLOR,
  },
};

// Component that renders each column for reusability
const ColumnBlock = ({ content }) => {
  return (
    // 3. Three-column layout
    <div className="col-lg-4 col-md-6 mb-4">
      <div style={customStyles.contentBlock}>
        <p className="mb-0" style={customStyles.bodyText}>
          {content}
        </p>
      </div>
    </div>
  );
};

const CompanyArea = () => {
  return (
    // Applying the white background and styling
    <section className="ab-company-area" style={customStyles.whiteSection}>
      <div className="container">
        {/* Header Section (Centered) */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10 col-xl-8 text-center">
            <div className="ab-company-section-box">
              {/* 1. About Us subtitle */}
              <p className="text-uppercase mb-2" style={customStyles.subtitle}>
                {sub_title}
              </p>
              {/* Large, striking title. Using h1 for maximum impact/visibility, while still using display-5 class */}
              <h1
                className="fw-bold mb-4 display-5" // Changed display-5 to display-4 for bigger title
                style={{ color: PRIMARY_COLOR }}
              >
                AI Transformation, Done Right.
              </h1>
            </div>
          </div>
        </div>

        {/* Content Section - Three columns */}
        <div className="row justify-content-center g-4">
          <ColumnBlock content={info_1} />
          <ColumnBlock content={info_2} />
          <ColumnBlock content={info_3} />
        </div>
      </div>
    </section>
  );
};

export default CompanyArea;
