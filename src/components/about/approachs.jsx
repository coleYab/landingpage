import Link from "next/link";
import Image from "next/image";
import React from "react";

// images import
import about_img_1 from "@/assets/img/about/about-bg-shape.png";
import about_img_2 from "@/assets/img/about/about-2.jpg";
import about_img_3 from "@/assets/img/about/about-1.jpg";
import about_img_4 from "@/assets/img/about/about-3.jpg";
import about_img_5 from "@/assets/img/about/about-5.png";
import { BadgeCheck } from "lucide-react";
import RightArrow from "@/svg/right-arrow";

const approach_cards = [
  {
    icon: <BadgeCheck size={32} color="#0b3937" fill="#a9fa60" />,
    title: "1. Simple",
    description:
      "We cut through complexity and explain AI in clear, human language. No buzzwords. No tech jargon. No confusion.",
  },
  {
    icon: <BadgeCheck size={32} color="#0b3937" fill="#a9fa60" />,
    title: "2. Practical",
    description:
      "We focus on real tasks, real workflows, and real value. If it doesn’t help your people work better tomorrow, we don’t recommend it.",
  },
  {
    icon: <BadgeCheck size={32} color="#0b3937" fill="#a9fa60" />,
    title: "3. Safe",
    description:
      "Governance, guardrails, and responsible AI use are built into every engagement. Your data, your people, and your organisation stay protected.",
  },
];

// approach content
const approach_content = {
  title: "OUR APPROACH",
  sub_title: "Simple. Practical. Safe.",
  des: (
    <>
      Everything we deliver follows three core principles: This approach ensures
      AI becomes a trusted tool - not a risk, not a distraction, and not another
      project that never gets used.
    </>
  ),
  about_list: [
    "1. Simple: We cut through complexity and explain AI in clear, human language. No buzzwords. No tech jargon. No confusion.",
    "2. Practical: We focus on real tasks, real workflows, and real value. If it doesn’t help your people work better tomorrow, we don’t recommend it.",
    "3. Safe: Governance, guardrails, and responsible AI use are built into every engagement. Your data, your people, and your organisation stay protected.",
  ],
  btn_text: "Learn More About Axonova",
};

const Approaches = () => {
  const { title, sub_title, des, about_list, btn_text } = approach_content;

  return (
    <div
      className="tp-about__area tp-about__pt-pb pt-md-100 pt-8"
      style={{
        paddingTop: "50px",
        paddingBottom: "50px",
        backgroundColor: "#0b3937",
        color: "#a9fa60",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-12 wow tpfadeRight"
            data-wow-duration=".9s"
            data-wow-delay=".6s"
          >
            <div className="tp-about__right">
              <div className="tp-about__section-box text-center">
                {/* Changed subtitle to white */}
                <h4 className="tp-section-title" style={{ color: "#a9fa60" }}>
                  {title}
                </h4>
                {sub_title && (
                  <h3
                    className="tp-section-title mb-15"
                    style={{
                      color: "#a9fa60",
                      fontSize: "26px",
                    }}
                  >
                    {sub_title}
                  </h3>
                )}
                {/* <h4
                  className="tp-section-subtitle"
                  style={{ color: "#fff", background: "#a8ef6b" }}
                >
                  {title}
                </h4>
                {sub_title && (
                  // Changed title to #a9fa60
                  <h3
                    className="tp-section-title mb-15"
                    style={{ color: "#a9fa60" }}
                  >
                    {sub_title}
                  </h3>
                )} */}
                {/* Changed paragraph to #a9fa60 (inherits from parent div, but added for clarity) */}
                <p style={{ color: "#a9fa60" }}>{des}</p>
              </div>
              <div className="row justify-content-center g-4 mt-4">
                {approach_cards.map((card, i) => (
                  <div
                    key={i}
                    className="col-lg-4 col-md-6 wow tpfadeUp"
                    data-wow-duration=".9s"
                    data-wow-delay={`${i * 0.2 + 0.3}s`}
                  >
                    <div
                      className="tp-approach-card"
                      style={{
                        backgroundColor: "#1c4a48", // Slightly lighter dark green for card background
                        color: "#a9fa60",
                        padding: "30px",
                        borderRadius: "10px",
                        border: "1px solid #a9fa6050", // Subtle border
                        minHeight: "250px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}
                    >
                      <div className="d-flex align-items-center justify-content-start col-12">
                        {/* <div className="mb-3 me-3">{card.icon}</div> */}
                        <h4
                          className="tp-approach-card-title mb-2"
                          style={{
                            color: "#fff",
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                          }}
                        >
                          {card.title}
                        </h4>
                      </div>

                      {/* Description */}
                      <p style={{ color: "#a9fa60", opacity: 0.9 }}>
                        {card.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approaches;
