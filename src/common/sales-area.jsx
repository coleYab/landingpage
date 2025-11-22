import React from "react";
import Image from "next/image";

import sales_img_1 from "../../public/assets/img/card/sale-1.png";
import sales_img_2 from "../../public/assets/img/card/sale-2.png";
import sales_img_3 from "../../public/assets/img/card/sale-3.png";
import sales_img_4 from "../../public/assets/img/card/imgi.png";
import { Check } from "lucide-react";
import { CircleCheck } from "lucide-react";

const sales_content = {
  title: <>Bring AI into Your Organisation the Right Way</>,
  dub_title: <>Start Your AI Adoption Journey with Clarity and Confidence</>,
  description: (
    <>
      Lets see how we can help you move forward your business with measurable
      value.
    </>
  ),

  sales_feature: [
    {
      id: 1,
      color: "yellow-1",
      list: "Practical AI strategy, and automation tailored to your organisation.",
    },
    {
      id: 2,
      color: "purple-2",
      list: "Safe, responsible, and measurable AI adoption for your teams.",
    },
    {
      id: 3,
      color: "green-3",
      list: "End-to-end guidance from training and coaching to automation.",
    },
  ],

  sales_img: [
    {
      id: 1,
      cls: "main-thumb",
      img: sales_img_4,
    },
    // {
    //   id: 2,
    //   cls: "sub-img-1",
    //   img: sales_img_2,
    // },
    {
      id: 3,
      cls: "sub-img-2 d-none d-sm-block",
      img: sales_img_3,
    },
  ],
};
const { title, dub_title, description, sales_feature, sales_img } =
  sales_content;

const SalesArea = ({ style_service }) => {
  return (
    <>
      <div
        className="tp-sales-area tp-sales-space"
        style={{
          backgroundColor: "#0b3937",
          color: "#a9fa60",
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-xl-6 col-lg-6 order-1 order-md-1 wow tpfadeLeft"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="tp-sales-section-box pb-20">
                <h3
                  className="tp-section-title-3 pb-15"
                  style={{ color: "#a9fa60" }}
                >
                  {style_service ? dub_title : title}
                </h3>
                <p
                  className="tp-title-anim"
                  style={{ color: "#d4ff9f", maxWidth: "520px" }}
                >
                  {description}
                </p>
              </div>
              <div className="tp-sales-feature">
                <ul className="list-unstyled">
                  {sales_feature.map((item, i) => (
                    <li
                      key={i}
                      className="d-flex align-items-center gap-3 mb-3"
                      style={{
                        paddingBottom: "12px",
                      }}
                    >
                      <span className="d-inline-flex align-items-center justify-content-center">
                        <CircleCheck />
                      </span>
                      <em style={{ color: "#a9fa60", fontStyle: "normal" }}>
                        {item.list}
                      </em>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 order-0 order-md-2 wow tpfadeRight"
              data-wow-duration=".9s"
              data-wow-delay=".7s"
            >
              <div
                className="tp-sales-img-wrapper p-relative text-end"
                style={{
                  borderRadius: "24px",
                  overflow: "hidden",
                }}
              >
                {sales_img.map((item, i) => (
                  <div key={i} className={`tp-sales-${item.cls}`}>
                    <Image src={item.img} alt="theme-pure" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SalesArea;
