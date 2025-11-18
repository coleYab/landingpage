import BlurStart from "@/svg/blur-start";
import React from "react";
import Image from "next/image";

import icon1 from "../../../../public/assets/img/rate/rate-logo-1.png";
import icon2 from "../../../../public/assets/img/rate/rate-logo-2.png";
import icon3 from "../../../../public/assets/img/rate/rate-logo-3.png";

import shape1 from "../../../../public/assets/img/rate/rate-shape-1.png";
import shape2 from "../../../../public/assets/img/rate/rate-shape-2.png";
import main_img from "../../../../public/assets/img/rate/rated-img.png";
import Link from "next/link";

const rated_content = {
  bg_img: "/assets/img/rate/rated-bg.jpg",
  title: (
    <>
      Why Choose Us
      <br />
      Reasons organisations trust Axonova
    </>
  ),
  points: [
    {
      id: 2,
      text: (
        <>
          <strong>1. Built for your people and processes</strong>
          <br /> Everything we deliver is tailored to your organisation – your
          roles, your systems, your challenges.
        </>
      ),
      img: icon2,
    },
    {
      id: 1,
      text: (
        <>
          <strong>2. Practical, not theoretical</strong>
          <br /> We focus on real tasks, real workflows, and real value.
        </>
      ),
      img: icon1,
    },
    {
      id: 3,
      text: (
        <>
          <strong>3. Safe and responsible, by design</strong>
          <br /> Our methods embed governance, guardrails, and data safety into
          every step of your AI journey.
        </>
      ),
      img: icon3,
    },
    {
      id: 4,
      text: (
        <>
          <strong>4. End‑to‑end support</strong>
          <br /> From training to strategy to automation, we guide you through
          every stage of AI adoption.
        </>
      ),
      img: icon1,
    },
    {
      id: 5,
      text: (
        <>
          <strong>5. Measurable business impact</strong>
          <br /> We track adoption, time saved, ROI, and quality improvements so
          progress is always visible.
        </>
      ),
      img: icon2,
    },
    {
      id: 6,
      text: (
        <>
          <strong>6. Clear, Simple, Actionable</strong>
          <br /> Complexity is removed. Clarity is delivered. Your teams know
          exactly what to do next.
        </>
      ),
      img: icon3,
    },
  ],
};

const { bg_img, title, points } = rated_content;

const RatedArea = () => {
  return (
    <>
      <div className="tp-rated-area fix p-relative">
        <div
          className="tp-rated-bg pt-120"
          style={{ backgroundImage: `url(${bg_img})` }}
        >
          <div className="tp-rated-shape-1 d-none d-lg-block">
            <Image src={shape1} alt="theme-pure" />
          </div>
          <div className="tp-rated-shape-2 d-none d-sm-block">
            <Image src={shape2} alt="theme-pure" />
          </div>

          <div className="container z-index-6">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="tp-rated-title-box text-center mb-60">
                  {/* <div className="tp-rated-icon tp-title-anim">
                    <BlurStart />
                    <BlurStart />
                    <BlurStart />
                    <BlurStart />
                    <BlurStart />
                  </div> */}

                  <h5 className="tp-section-title-3 text-white pb-40">
                    {title}
                  </h5>

                  {/* <Link
                    className="tp-btn-blue-lg tp-btn-hover alt-color-white"
                    href="#"
                  >
                    <span className="text-color-black">Explore Services</span>
                    <b></b>
                  </Link> */}
                </div>
              </div>
            </div>

            <div className="author-rated-wrapper">
              <div className="row">
                {points.map((item) => (
                  <div
                    key={item.id}
                    className="col-xl-4 col-lg-4 col-md-6 mb-4"
                  >
                    <div className="author-rated text-center">
                      <div className="author-rated-icon">
                        <span>
                          <i className="fas fa-check-circle"></i>
                        </span>
                      </div>
                      <p>{item.text}</p>
                      {/* <div className="author-rated-logo">
                        <Image src={item.img} alt="icon" />
                      </div> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="tp-rated-title-box text-center mb-60">
                  <Link
                    className="tp-btn-blue-lg tp-btn-hover alt-color-white"
                    href="#"
                  >
                    <span className="text-color-black">Explore Services</span>
                    <b></b>
                  </Link>
                </div>
              </div>
            </div> */}

            {/* <div className="author-rated-big-img">
              <Image src={main_img} alt="theme-pure" />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default RatedArea;
