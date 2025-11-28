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

// approach content
const approach_content = {
  title: "OUR APPROACH",
  sub_title: "Simple. Practical. Safe.",
  des: (
    <>
      Everything we deliver follows three core principles:
      <br />
      This approach ensures AI becomes a trusted tool - not a risk, not a
      distraction, and not another project that never gets used.
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
              <div className="tp-about__section-box">
                {/* Changed subtitle to white */}
                <h4
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
                )}
                {/* Changed paragraph to #a9fa60 (inherits from parent div, but added for clarity) */}
                <p style={{ color: "#a9fa60" }}>{des}</p>
              </div>
              <div className="tp-about__list">
                <ul>
                  {about_list.map((item, i) => (
                    // Changed list item content to #a9fa60
                    <li key={i} style={{ color: "#a9fa60" }}>
                      <BadgeCheck
                        style={{
                          // Kept BadgeCheck color for a subtle accent or you can change it to '#a9fa60' or a bright accent color
                          color: "#a9fa60",
                          marginRight: "10px",
                        }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approaches;
