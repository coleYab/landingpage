import React from "react";
import { CheckCircle } from "lucide-react";

const rated_content = {
  bg_img: "/assets/img/rate/rated-bg.jpg",
  title: <>Why Choose Us</>,
  reason: <>Reasons organisations trust Axonova</>,
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
    },
    {
      id: 1,
      text: (
        <>
          <strong>2. Practical, not theoretical</strong>
          <br /> We focus on real tasks, real workflows, and real value.
        </>
      ),
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
      // img: icon1,
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
      // img: icon2,
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
    },
  ],
};

const { title, reason, points } = rated_content;

const RatedArea = () => {
  const accentColor = "#0b3937";

  return (
    <section className="tp-rated-area bg-white text-dark py-5">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <p
              className="text-uppercase fw-semibold mb-2"
              style={{ color: "#8aa09a", letterSpacing: "0.2em" }}
            >
              {reason}
            </p>
            <h5
              className="tp-section-title-3 fw-bold mb-3"
              style={{ color: accentColor }}
            >
              {title}
            </h5>
            <div
              className="mx-auto"
              style={{
                width: "80px",
                height: "3px",
                backgroundColor: "#a9fa60",
              }}
            ></div>
          </div>
        </div>

        <div className="row g-4">
          {points.map((item) => (
            <div className="col-xl-4 col-lg-4 col-md-6" key={item.id}>
              <div
                className="card h-100 border-0 rounded-4 bg-white p-4"
                style={{
                  color: accentColor,
                  border: "1px solid #e5ebe8",
                }}
              >
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div
                    className="d-inline-flex align-items-center justify-content-center rounded-circle"
                    style={{
                      width: "48px",
                      height: "48px",
                      backgroundColor: "#eef5f3",
                    }}
                  >
                    <CheckCircle size={24} color={accentColor} />
                  </div>
                  <span className="fw-semibold" style={{ color: accentColor }}>
                    Insight #{item.id}
                  </span>
                </div>
                <div style={{ color: accentColor, lineHeight: 1.6 }}>
                  {item.text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RatedArea;
