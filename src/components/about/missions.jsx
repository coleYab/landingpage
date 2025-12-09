// import service_data from "@/data/service-data";
import Link from "next/link";
import React from "react";
// import Image from "next/image"; // Image is not needed after the fix

// about data
// const about_data = [
//   { id: 1, cls: "bg-shape", img: about_img_1 },
//   { id: 2, cls: "main-img z-index", img: about_img_2 },
//   { id: 3, cls: "sub-img-1 d-none d-sm-block z-index-3", img: about_img_3 },
//   { id: 4, cls: "sub-img-2 d-none d-sm-block", img: about_img_4 },
//   { id: 5, cls: "sub-img-3 d-none d-sm-block z-index-3", img: about_img_5 },
// ];

// // mission content
const mission_content = {
  title: "OUR MISSION",
  sub_title: "Making AI Practical, Safe, and Valuable",
  des: (
    <>
      At Axonova Consulting, our mission is to make AI practical, safe, and
      valuable for every organisation. We empower people to work smarter, decide
      faster, and deliver their best work with confidence.
      <br />
      Our approach bridges the gap between AI potential and everyday
      practicality, ensuring AI adoption is simple, intuitive, and aligned with
      real business needs.
      <br />
      Here’s what drives us every day:
    </>
  ),
  about_list: [
    "Empower teams with practical AI skills that deliver real results.",
    "Ensure safe and responsible AI adoption with embedded governance and ethical practices.",
    "Tailor AI solutions and guidance to fit your organisation's workflows, roles, and industry.",
    "Provide end-to-end support from strategy and training to automations and coaching.",
    "Deliver measurable business impact through time savings, efficiency gains, and ROI tracking.",
    "Simplify complexity, making AI understandable and actionable for everyone.",
    "Build long-term AI adoption strategies that are scalable and sustainable.",
  ],
  btn_text: "Learn More About Axonova",
  link: "/about", // Added a link for the button
};

const mission_data = [
  {
    id: 1,
    title: "Practical AI Skills",
    description: (
      <>Empower teams with practical AI skills that deliver real results.</>
    ),
    delay: ".3s",
    icon: "💡",
    bg_img: "/assets/img/card/services/service3.png",
  },
  {
    id: 2,
    title: "Safe & Responsible Adoption",
    description: (
      <>
        Ensure safe and responsible AI adoption with embedded governance and
        ethical practices.
      </>
    ),
    delay: ".4s",
    icon: "🔒",
    bg_img: "/assets/img/card/services/service2.png",
  },
  {
    id: 3,
    title: "Tailored Solutions",
    description: (
      <>
        Tailor AI solutions and guidance to fit your organisation's workflows,
        roles, and industry.
      </>
    ),
    delay: ".5s",
    icon: "🎯",
    bg_img: "/assets/img/card/services/service1.png",
  },
  {
    id: 4,
    title: "End-to-End Support",
    description: (
      <>
        Provide end-to-end support from strategy and training to automations and
        coaching.
      </>
    ),
    delay: ".6s",
    icon: "🤝",
    bg_img: "/assets/img/card/services/service3.png",
  },
  {
    id: 5,
    title: "Measurable Business Impact",
    description: (
      <>
        Deliver measurable business impact through time savings, efficiency
        gains, and ROI tracking.
      </>
    ),
    delay: ".7s",
    icon: "📈",
    bg_img: "/assets/img/card/services/service2.png",
  },
  {
    id: 6,
    title: "Simplify Complexity",
    description: (
      <>
        Simplify complexity, making AI understandable and actionable for
        everyone.
      </>
    ),
    delay: ".8s",
    icon: "✨",
    bg_img: "/assets/img/card/services/service1.png",
  },
  {
    id: 7,
    title: "Sustainable Strategy",
    description: (
      <>
        Build long-term AI adoption strategies that are scalable and
        sustainable.
      </>
    ),
    delay: ".9s",
    icon: "🌱",
    bg_img: "/assets/img/card/mission-bg-7.jpg", // Placeholder image
  },
];

// Removed unnecessary destructuring of service_content

const MissionArea = () => {
  // Destructure mission content for cleaner use
  const { title, sub_title, des, btn_text, link } = mission_content;

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
          <div className="col-lg-12">
            <h4 className="tp-section-title">{title}</h4>
            {sub_title && (
              <h3
                className="tp-section-title mb-15"
                style={{
                  fontSize: "26px",
                }}
              >
                {sub_title}
              </h3>
            )}
            {/* Mission Description */}
            <p
              className="mt-3"
              style={{
                color: "#54706a",
                fontSize: "18px",
                lineHeight: 1.6,
              }}
            >
              {des}
            </p>
          </div>
        </div>
        <div className="row g-4 align-items-stretch">
          {/* Display all mission data points in 3-column rows */}
          <div className="col-xl-12">
            <div className="row g-4">
              {mission_data.slice(0, 6).map((item, i) => (
                <div className="col-md-4" key={i}>
                  <div
                    style={{
                      // Using a dynamic background image with overlay
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
                      // Override border for dark card background
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <div>
                      {/* Card Title */}
                      <h4
                        style={{
                          color: "#ffffff",
                          fontSize: "22px",
                          marginBottom: "10px",
                        }}
                      >
                        {item.title}
                      </h4>
                      {/* Card Description */}
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
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Action Button for Mission
        <div className="row justify-content-center text-center mt-5">
          <div className="col-lg-12">
            <Link
              href={link || "/about"}
              className="tp-btn-blue-lg tp-btn-hover d-inline-flex align-items-center justify-content-center mt-10"
              style={{
                backgroundColor: accentColor,
                color: "#ffffff",
                borderRadius: "999px",
                padding: "0 32px",
                minHeight: "60px",
                fontSize: "17px",
                textDecoration: "none",
              }}
            >
              <span style={{ position: "relative", zIndex: 1 }}>
                {btn_text}
              </span>
            </Link>
          </div>
        </div> */}
      </div>
      <div
        style={{
          position: "relative",
          backgroundColor: "#0b3937",
          height: "200px",
          width: "100%",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "30px",
          marginTop: "100px",
          color: "white",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            overflow: "hidden",
            lineHeight: 0,
          }}
        >
          <svg
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: "relative",
              display: "block",
              width: "calc(100% + 1.3px)",
              height: "100px",
            }}
          >
            <path
              // Changed fill to Primary Color: #0b3937
              fill="#0b3937"
              fillOpacity="1"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,186.7C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>

            <path
              // Changed fill to Secondary Color: #a9fa60
              fill="#a9fa60"
              fillOpacity="1"
              d="M0,256L48,250.7C96,245,192,235,288,208C384,181,480,139,576,144C672,149,768,203,864,229.3C960,256,1056,256,1152,234.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>

            <path
              fill="none"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="2"
              d="M480,130 C600,120, 700,200, 864,220 C960,240, 1050,220, 1150,190"
            ></path>
            <path
              fill="none"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="1.5"
              d="M900,200 C1000,240, 1100,200, 1300,100"
            ></path>

            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,288L48,280C96,272,192,256,288,250.7C384,245,480,248,576,256C672,264,768,272,864,266.7C960,261,1056,256,1152,245.3C1248,235,1344,229,1392,226.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default MissionArea;
