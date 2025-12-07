import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicEffect";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

import left_shape from "../../../../public/assets/img/hero/hero-left-shape-3-1.png";
import Link from "next/link";

const hero_content = {
  title_1: <>AI Transformation, </>,
  title_2: "Done Right.",
  info: (
    <>
      <p
        style={{
          paddingTop: 30 + "px",
          paddingBottom: 30 + "px",
          color: "#a9fa60",
        }}
      >
        We make AI practical, safe, and valuable for your team and business
        through training, strategy, and automation solutions, helping you adopt
        AI with confidence and achieve meaningful results.
      </p>
      <p
        style={{
          paddingBottom: 30 + "px",
          color: "#a9fa60",
        }}
      >
        Our experts guide you through AI implementation, ensuring ethical use,
        maximum ROI, and smooth integration.
      </p>
      <p
        style={{
          color: "#a9fa60",
        }}
      >
        Whether you're a startup or an enterprise, we tailor our approach to
        meet your needs and accelerate your digital transformation.
      </p>
    </>
  ),
  btn_1: "Get Started with Axonova",
  btn_2: "Assess Your AI Readiness",
};
// const hero_content = {
//    title_1: <>Great <span>Customer</span></>,
//    title_2: "Relationships Start Here.",
//    info: <>Softec provides all customer management service within one software. <br /> Our landing works on all devices.</>,
//    btn_1: "Live Damo",
//    btn_2: "Try it on Browser",
// }
const { title_1, title_2, info, btn_1, btn_2 } = hero_content;

const HeroArea = () => {
  let info_anim = useRef(null);

  useIsomorphicLayoutEffect(() => {
    let tl = gsap.timeline({ default: { ease: "SlowMo.easeOut" } });
    tl.to(".hero-text-anim i.child-1", {
      y: "0px",
      duration: 1,
      opacity: 1,
      stagger: 0.3,
      delay: 0.5,
    });
  }, []);

  // useEffect(() => {
  //   const video = document.querySelector("video");
  //   if (video) {
  //     video.play().catch(() => {
  //       // Autoplay blocked, fallback: show poster only
  //       console.log("Autoplay blocked on mobile");
  //     });
  //   }
  // }, []);

  return (
    <>
      <div
        className="tp-hero-area tp-hero-pt pt-170 pb-70 p-relative"
        style={{
          backgroundColor: "#0b3937",
          minHeight: "100vh",
        }}
      >
        {/* <div className="tp-hero-gradient-bg">
          <video
            className="w-100 h-100"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
            // poster="/assets/video/tumbnail.png"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          >
            <source src="/assets/video/background.mp4" type="video/mp4" />
          </video>
        </div> */}
        <div className="tp-hero-gradient-bg">
          <video
            className="w-100 h-100"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          >
            <source src="/assets/video/background.mp4" type="video/mp4" />
          </video>

          {/* NEW: Video Overlay Element */}
          <div
            className="position-absolute w-100 h-100"
            style={{
              top: 0,
              left: 0,
              // Set the required color with opacity for transparency
              backgroundColor: "#0b3937",
              opacity: 0.8, // Adjust opacity for desired visibility of the video
              // Use a lower z-index than the main content (container z-index-3)
              zIndex: 1,
            }}
          ></div>
        </div>
        <div
          className="container"
          style={{
            height: "75vh",
          }}
        >
          <div
            className="row justify-content-center align-items-evenly z-index-3"
            style={{
              height: "100%",
            }}
          >
            <div className="col-xl-11">
              <div
                className="tp-hero-title-box text-center"
                style={{
                  color: "#a9fa60",
                }}
              >
                <h2
                  className="tp-hero-title-3 hero-text-anim pb-5"
                  style={{
                    color: "#a9fa60",
                  }}
                >
                  <i>
                    <i
                      className="child-1"
                      style={{
                        color: "#a9fa60",
                      }}
                    >
                      {title_1}
                    </i>
                  </i>
                  <i>
                    <i
                      className="child-1"
                      style={{
                        color: "#a9fa60",
                      }}
                    >
                      {title_2}
                    </i>
                  </i>
                </h2>
                <div
                  className="tp-char-animation-2 wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".7s"
                  style={{
                    color: "#a9fa60",
                  }}
                >
                  {info}
                </div>
              </div>
              <div
                className="tp-hero-btn-3 text-center wow tpfadeUp mt-8"
                data-wow-duration="1s"
                data-wow-delay=".9s"
              >
                <Link
                  className="tp-btn-blue-lg tp-btn-hover alt-color-black"
                  href="/new-service"
                >
                  <span
                    style={{
                      color: "#a9fa60",
                    }}
                  >
                    {btn_1}
                  </span>
                  <b></b>
                </Link>
                <Link
                  className="tp-btn-border tp-btn-hover alt-color-black"
                  href="/assesment"
                >
                  <span
                    style={{
                      color: "#a9fa60",
                    }}
                  >
                    {btn_2}
                  </span>
                  <b></b>
                </Link>
              </div>
              {/* <div
                className="tp-hero-browser-wrapper d-flex align-items-center justify-content-center wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".9s"
              ></div> */}
              <div className="tp-hero-3-wrapper p-relative"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroArea;
