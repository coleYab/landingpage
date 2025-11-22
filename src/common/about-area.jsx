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

// about data
const about_data = [
  { id: 1, cls: "bg-shape", img: about_img_1 },
  { id: 2, cls: "main-img z-index", img: about_img_2 },
  { id: 3, cls: "sub-img-1 d-none d-sm-block z-index-3", img: about_img_3 },
  { id: 4, cls: "sub-img-2 d-none d-sm-block", img: about_img_4 },
  { id: 5, cls: "sub-img-3 d-none d-sm-block z-index-3", img: about_img_5 },
];

// mission content
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
    "Provide end-to-end support from strategy and training to automation and coaching.",
    "Deliver measurable business impact through time savings, efficiency gains, and ROI tracking.",
    "Simplify complexity, making AI understandable and actionable for everyone.",
    "Build long-term AI adoption strategies that are scalable and sustainable.",
  ],
  btn_text: "Learn More About Axonova",
};

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

// values content
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
  const { title, sub_title, des, about_list, btn_text } = content;

  return (
    <div
      className="tp-about__area tp-about__pt-pb pt-md-100 pt-8"
      style={{ backgroundColor: "#ffffff", color: "#0b3937" }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Uncomment this if you want to show images */}
          {/* <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".2s">
            <div className="tp-about__img-wrapper text-center text-lg-end p-relative">
              {about_data.map((item) => (
                <div key={item.id} className={`tp-about__${item.cls}`}>
                  <Image src={item.img} alt="theme-pure" />
                </div>
              ))}
            </div>
          </div> */}
          <div
            className="col-12 wow tpfadeRight"
            data-wow-duration=".9s"
            data-wow-delay=".6s"
          >
            <div className="tp-about__right">
              <div className="tp-about__section-box">
                <h4
                  className="tp-section-subtitle mb-2"
                  style={{
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    fontSize: "13px",
                    color: "#7f908c",
                  }}
                >
                  {title}
                </h4>
                {sub_title && (
                  <h3
                    className="tp-section-title mb-15"
                    style={{ color: "#0b3937" }}
                  >
                    {sub_title}
                  </h3>
                )}
                <p style={{ maxWidth: "720px", lineHeight: 1.7 }}>{des}</p>
              </div>
              <div className="tp-about__list">
                <ul>
                  {about_list.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                        marginBottom: "8px",
                        lineHeight: 1.6,
                      }}
                    >
                      <BadgeCheck
                        style={{
                          color: "#a9fa60",
                          marginRight: "10px",
                        }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="tp-about__btn d-flex align-items-center w-100 justify-content-center mt-4">
                {/* <Link
                  className="tp-btn tp-btn-hover alt-color-black"
                  href="/about"
                >
                  <span>{btn_text}</span>
                  <b></b>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutArea = () => {
  return (
    <>
      <Section content={mission_content} />
      <Section content={approach_content} />
      <Section content={values_content} />
      <div className="pt-md-100 pt-8"></div>
    </>
  );
};

export default AboutArea;
