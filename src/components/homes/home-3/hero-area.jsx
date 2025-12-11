import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicEffect";
import gsap from "gsap";
import Link from "next/link";
import React, { useRef } from "react";

// 1. We organize the data cleanly here so we can map it into columns
const feature_data = [
  {
    id: 1,
    title: "Strategy & Automation",
    text: "We make AI practical, safe, and valuable for your team and business through training, strategy, and automations solutions, helping you adopt AI with confidence.",
  },
  {
    id: 2,
    title: "Expert Implementation",
    text: "Our experts guide you through AI implementation, ensuring ethical use, maximum ROI, and smooth integration into your existing workflows.",
  },
  {
    id: 3,
    title: "Tailored Scaling",
    text: "Whether you're a startup or an enterprise, we tailor our approach to meet your specific needs and accelerate your digital transformation.",
  },
];

const hero_content = {
  btn_1: "Get Started with Axonova",
  btn_2: "Assess Your AI Readiness",
};

const { btn_1, btn_2 } = hero_content;

const HeroArea = () => {
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

  return (
    <>
      {/* 2. Added Internal Styles for the Glassmorphism cards */}
      <style jsx>{`
        .glass-card {
          background: rgba(11, 57, 55, 0.6); /* Semi-transparent match to bg */
          backdrop-filter: blur(10px); /* The frosted glass effect */
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(169, 250, 96, 0.2); /* Subtle neon border */
          border-radius: 16px;
          padding: 30px 20px;
          height: 100%;
          transition: all 0.3s ease;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        }

        .glass-card:hover {
          transform: translateY(-5px);
          border-color: rgba(169, 250, 96, 0.6);
          box-shadow: 0 10px 40px rgba(169, 250, 96, 0.1);
          background: rgba(11, 57, 55, 0.8);
        }

        .glass-title {
          color: #fff;
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 15px;
        }

        .glass-text {
          color: #a9fa60;
          font-size: 16px;
          line-height: 1.6;
          opacity: 0.9;
        }
      `}</style>

      <div
        className="tp-hero-area tp-hero-pt pt-170 pb-70 p-relative"
        style={{
          backgroundColor: "#0b3937",
          minHeight: "100vh",
        }}
      >
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

          <div
            className="position-absolute w-100 h-100"
            style={{
              top: 0,
              left: 0,
              backgroundColor: "#0b3937",
              opacity: 0.85,
              zIndex: 1,
            }}
          ></div>
        </div>

        <div className="container z-index-3 p-relative">
          <div className="row justify-content-center">
            <div className="col-xl-12">
              <div className="tp-hero-title-box text-center mb-60">
                <h2
                  className="tp-hero-title-3 pb-10"
                  style={{ color: "#a9fa60" }}
                >
                  AI Transformation, Done Right.
                </h2>
              </div>

              {/* 3. The 3-Column Layout */}
              <div className="row">
                {feature_data.map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6 mb-4">
                    <div className="glass-card text-center">
                      {/* Optional: Add an icon here if you have them */}
                      <h4 className="glass-title">{item.title}</h4>
                      <p className="glass-text">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Buttons Area */}
              <div
                className="tp-hero-btn-3 text-center wow tpfadeUp mt-40"
                data-wow-duration="1s"
                data-wow-delay=".9s"
              >
                <Link
                  className="tp-btn-blue-lg tp-btn-hover alt-color-black"
                  href="/new-service"
                >
                  <span style={{ color: "#a9fa60" }}>{btn_1}</span>
                  <b></b>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroArea;
