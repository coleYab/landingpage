// const company_content = {
//   // sub_title: "ABOUT AXONOVA CONSULTING",
//   title: <>AI Transformation, Done Right.</>,
//   info_1: (
//     <>
//       Axonova Consulting helps organisations adopt AI with clarity, confidence,
//       and measurable impact.
//     </>
//   ),
//   info_2: (
//     <>
//       We believe AI should simplify work — not complicate it. That’s why our
//       approach focuses on practical skills, safe adoption, and real outcomes
//       that teams can feel and leaders can measure.
//     </>
//   ),
//   info_3: (
//     <>
//       From training and coaching to strategy and automations, we guide
//       organisations through AI transformation the right way — with your people
//       at the centre.
//     </>
//   ),
//   images: [
//     {
//       src: "/assets/img/about/new/gkmc.jpg",
//       alt: "AI Virtual Assistant for Organization Transformation",
//       width: 500,
//       height: 350,
//     },
//     {
//       src: "/assets/img/about/new/gkmc.jpg",
//       alt: "JetBrains Junie Agentic AI Coding Assistant",
//       width: 500,
//       height: 350,
//     },
//   ],
// };
import Link from "next/link";
import Image from "next/image";
import React, { useRef } from "react";

// icon import
import icon_1 from "@/assets/img/feature/fea-icon-1.png";
import icon_2 from "@/assets/img/feature/fea-icon-2.png";
import icon_3 from "@/assets/img/feature/fea-icon-3.png";
import feature_bottom_shape from "@/assets/img/feature/fea-bg-shape-1.png";
import useTitleAnimation from "@/hooks/useTitleAnimation";
import RightArrow from "@/svg/right-arrow";
import { Star } from "lucide-react";

// feature data

//   info_1: (
//     <>
//       Axonova Consulting helps organisations adopt AI with clarity, confidence,
//       and measurable impact.
//     </>
//   ),
//   info_2: (
//     <>
//       We believe AI should simplify work — not complicate it. That’s why our
//       approach focuses on practical skills, safe adoption, and real outcomes
//       that teams can feel and leaders can measure.
//     </>
//   ),
//   info_3: (
//     <>
//       From training and coaching to strategy and automations, we guide
//       organisations through AI transformation the right way — with your people
//       at the centre.
//     </>
//   ),
const feature_data = [
  {
    id: 1,
    img: icon_1,
    title: (
      <>
        Axonova Consulting helps organisations adopt AI with clarity,
        confidence, and measurable impact.
      </>
    ),
    delay: ".4s",
  },
  {
    id: 2,
    img: icon_2,
    title: (
      <>
        {" "}
        We believe AI should simplify work — not complicate it. That’s why our
        approach focuses on practical skills, safe adoption, and real outcomes
        that teams can feel and leaders can measure.
      </>
    ),
    delay: ".6s",
  },
  {
    id: 3,
    img: icon_3,
    title: (
      <>
        From training and coaching to strategy and automations, we guide
        organisations through AI transformation the right way — with your people
        at the centre.
      </>
    ),
    delay: ".8s",
  },
];

// feature content
const feature_content = {
  title: "Axonova Consulting",
  sub_title: "Empowering Your People for Measurable AI Impact.", // <-- Updated and improved
};
const { title, sub_title } = feature_content;

const CompanyArea = () => {
  let titleRef = useRef(null);
  useTitleAnimation(titleRef);

  return (
    <>
      <div className="tp-feature__area tp-feature__pt-pb pt-100 pb-100 p-relative">
        <div className="tp-feature__bottom-shape">
          {/* <Image
            style={{ width: "auto", height: "auto" }}
            src={feature_bottom_shape}
            alt="them-pure"
          /> */}
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xl-6 wow tpfadeUpp"
              data-wow-duration=".9s"
              data-wow-delay=".2s"
            >
              <div
                ref={titleRef}
                className="tp-feature__section-box tp__title_anime text-center mb-55 tp-title-anim"
              >
                <h2 className="tp-section-title">{title}</h2>
                <p>{sub_title}</p>
              </div>
            </div>
          </div>

          <div className="row">
            {feature_data.map((item, i) => (
              <div
                key={i}
                className="col-xl-4 col-lg-4 col-md-6 mb-30 wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay={item.delay}
              >
                <div
                  id="divtest"
                  className="tp-feature__item"
                  style={{
                    minHeight: 370 + "px",
                  }}
                >
                  <div className="tp-feature__icon">
                    {/* <Star /> */}
                    {/* <Image src={item.img} alt={item.title} /> */}
                  </div>
                  <h3 className="tp-feature__title-sm">{item.title}</h3>
                  {/* <div className="tp-feature__link tp-common-btn">
                    <Link href="/service-details">
                      <RightArrow />
                    </Link>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyArea;
