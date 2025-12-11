import Link from "next/link";
import Image from "next/image";
import React from "react";
import { BadgeCheck } from "lucide-react";

// images import
import about_img_1 from "@/assets/img/services/s10.png";
import about_img_2 from "@/assets/img/services/s6.png";
import about_img_3 from "@/assets/img/services/s9.png";
import about_img_4 from "@/assets/img/services/s10.png";
import about_img_5 from "@/assets/img/services/s9.png";

const bg_images = [
  about_img_1,
  about_img_2,
  about_img_3,
  about_img_4,
  about_img_5,
];

const values_content = {
  title: "OUR VALUES",
  sub_title: "The principles that guide everything we do",
  des: <></>,
  about_list: [
    "Practical Impact: Everything we do is designed to make work more efficient, accurate, and meaningful.",
    "Clarity Over Complexity: We believe AI should simplify decisions, not create new challenges.",
    "Responsible Innovation: Safety, ethics, and governance guide every recommendation we make.",
    "People First: AI should amplify human capability, not replace it.",
    "Transparency and Trust: Clear communication, clear expectations, and a clear plan - every time.",
  ],
  btn_text: "Learn More About Axonova",
};

const Section = ({ content }) => {
  const { title, sub_title, des, about_list } = content;

  return (
    <div className="tp-about__area tp-about__pt-pb pt-md-100 pt-8 pb-100">
      <div className="container">
        {/* Header Section */}
        <div className="row mb-5 text-center">
          <div className="col-lg-12">
            <div className="tp-about__section-box">
              <h4
                className="tp-section-title mb-2"
                style={{
                  color: "#0b3937",
                }}
              >
                {title}
              </h4>
              {sub_title && (
                <h3
                  className="tp-section-title mb-15"
                  style={{
                    fontSize: "32px",
                    color: "#0b3937",
                    fontWeight: "700",
                  }}
                >
                  {sub_title}
                </h3>
              )}
              <p className="text-muted">{des}</p>
            </div>
          </div>
        </div>

        {/* Values Grid Section */}
        <div className="row g-4 justify-content-center">
          {about_list.map((item, i) => {
            const [valTitle, valDesc] = item.split(": ");
            const bgImage = bg_images[i % bg_images.length];

            return (
              <div key={i} className="col-lg-4 col-md-6 d-flex">
                <div
                  className="card border-0 w-100 shadow-lg position-relative overflow-hidden"
                  style={{
                    borderRadius: "20px",
                    minHeight: "260px",
                    transition: "transform 0.3s ease",
                  }}
                >
                  {/* Background Image Layer */}
                  <div
                    className="position-absolute w-100 h-100"
                    style={{ zIndex: 0 }}
                  >
                    <Image
                      src={bgImage}
                      alt={valTitle}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  {/* New Dark/Elegant Overlay */}
                  <div
                    className="position-absolute w-100 h-100"
                    style={{
                      zIndex: 1,
                      background:
                        "linear-gradient(135deg, rgba(11, 57, 55, 0.95) 0%, rgba(11, 57, 55, 0.8) 100%)",
                    }}
                  ></div>

                  {/* Card Content */}
                  <div
                    className="card-body position-relative d-flex flex-column p-4 justify-content-center"
                    style={{ zIndex: 2 }}
                  >
                    <div className="mb-3">
                      <BadgeCheck
                        size={36}
                        style={{
                          color: "#ffffff", // Changed to white for contrast
                          opacity: 0.9,
                        }}
                      />
                    </div>

                    <h5
                      className="fw-bold mb-3"
                      style={{ color: "#ffffff", fontSize: "20px" }}
                    >
                      {valTitle}
                    </h5>

                    <p
                      className="mb-0 flex-grow-1"
                      style={{
                        color: "rgba(255, 255, 255, 0.8)",
                        fontSize: "15px",
                        lineHeight: "1.6",
                      }}
                    >
                      {valDesc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const AboutArea = () => {
  return (
    <>
      <Section content={values_content} />
    </>
  );
};

export default AboutArea;
