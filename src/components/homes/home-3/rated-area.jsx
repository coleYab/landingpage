import React, { useState } from "react";
import { Phone, ChevronDown } from "lucide-react";
import Link from "next/link";
// import s10 from "../../../public/assets/img/services/s10.png";
// import s9 from "../../../public/assets/img/services/s9.png";
// import s8 from "../../../public/assets/img/services/s8.png";

const rated_content = {
  bg_img: "/assets/img/rate/rated-bg.jpg",
  title: "Why Choose Us",
  intro:
    "Reasons organisations trust Axonova to guide them through every stage of their AI journey — with clarity, confidence, and solutions built around their real-world needs.",
  points: [
    {
      id: 1,
      title: "Built for your people and processes",
      description:
        "Everything we deliver is tailored to your organisation – your roles, your systems, your challenges.",
    },
    {
      id: 2,
      title: "Practical, not theoretical",
      description: "We focus on real tasks, real workflows, and real value.",
    },
    {
      id: 3,
      title: "Safe and responsible, by design",
      description:
        "Our methods embed governance, guardrails, and data safety into every step of your AI journey.",
    },
    {
      id: 4,
      title: "End-to-end support",
      description:
        "From training to strategy to automation, we guide you through every stage of AI adoption.",
    },
    {
      id: 5,
      title: "Measurable business impact",
      description:
        "We track adoption, time saved, ROI, and quality improvements so progress is always visible.",
    },
    {
      id: 6,
      title: "Clear, simple, actionable",
      description:
        "Complexity is removed. Clarity is delivered. Your teams know exactly what to do next.",
    },
    // {
    //   id: 7,
    //   title: "How can we help you?",
    //   has: true,
    // },
  ],
};

const RatedArea = () => {
  const [activeId, setActiveId] = useState(2);

  const theme = {
    primary: "#0b3937",
    accent: "#a9fa60",
    accentLight: "#E8F7F5",
    white: "#ffffff",
  };

  const toggleItem = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section
      className="py-5"
      style={{ backgroundColor: "#fff", fontFamily: "'Inter', sans-serif" }}
    >
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <h2
              className="fw-bold mb-3 display-6"
              style={{ color: theme.primary }}
            >
              {rated_content.title}
            </h2>

            <p className="mb-5" style={{ color: "#555", lineHeight: "1.7" }}>
              {rated_content.intro}
            </p>

            <div className="d-flex flex-column gap-4 pt-4">
              {rated_content.points.map((item) => {
                const isActive = activeId === item.id;

                return (
                  <div
                    key={item.id}
                    className="accordion-item-custom"
                    style={{ cursor: "pointer" }}
                    onClick={() => toggleItem(item.id)}
                  >
                    {/* Header Part */}
                    <div className="d-flex align-items-center mb-2">
                      <span
                        className="me-3 d-flex align-items-center justify-content-center"
                        style={{
                          color: theme.primary,
                          transition: "all 0.4s ease",
                        }}
                      >
                        <ChevronDown
                          size={20}
                          strokeWidth={3}
                          style={{
                            transform: isActive
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                            transition:
                              "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
                          }}
                        />
                      </span>

                      <h5
                        className="m-0 fw-medium"
                        style={{ color: "#333", fontSize: "1.1rem" }}
                      >
                        {item.title}
                      </h5>
                    </div>

                    {/* CHANGES MADE HERE: 
                        The description box logic
                    */}
                    <div
                      style={{
                        display: "grid",
                        gridTemplateRows: isActive ? "1fr" : "0fr",
                        opacity: isActive ? 1 : 0.6,
                        transition:
                          "grid-template-rows 0.4s ease-out, opacity 0.4s ease-out",
                      }}
                    >
                      <div style={{ overflow: "hidden" }}>
                        <div
                          className="p-4 mt-3 rounded-3"
                          style={{
                            backgroundColor: theme.primary,
                            color: theme.accent,
                            boxShadow: "0 4px 12px rgba(44, 165, 141, 0.2)",
                          }}
                        >
                          {item?.has ? (
                            <form
                              onClick={(e) => e.stopPropagation()}
                              onSubmit={async (e) => {
                                e.preventDefault();
                                const formData = new FormData(e.target);

                                const response = await fetch(
                                  "https://formspree.io/f/xjkdkord",
                                  {
                                    method: "POST",
                                    body: formData,
                                    headers: { Accept: "application/json" },
                                  }
                                );

                                if (response.ok) {
                                  toast.success(
                                    "Your request has been sent successfully"
                                  );
                                } else {
                                  toast.error("Something went wrong");
                                }
                              }}
                              className="box"
                            >
                              <div className="row gx-20">
                                <div className="col-12">
                                  <div className="postbox__comment-input mb-30">
                                    <input
                                      type="text"
                                      className="inputText"
                                      name="name"
                                      required
                                      style={{
                                        borderColor: "#0b3937",
                                        color: "#0b3937",
                                      }}
                                    />
                                    <span
                                      className="floating-label"
                                      style={{ color: "black" }}
                                    >
                                      Full Name
                                    </span>
                                  </div>
                                </div>
                                <div className="col-12">
                                  <div className="postbox__comment-input mb-30">
                                    <input
                                      type="email"
                                      className="inputText"
                                      name="email"
                                      required
                                      style={{
                                        borderColor: "#0b3937",
                                        color: "#0b3937",
                                      }}
                                    />
                                    <span
                                      className="floating-label"
                                      style={{
                                        color: "black",
                                      }}
                                    >
                                      Your Email
                                    </span>
                                  </div>
                                </div>
                                <div className="col-xxl-12">
                                  <div className="postbox__comment-input mb-30">
                                    <textarea
                                      name="message"
                                      className="textareaText"
                                      required
                                      style={{
                                        borderColor: "#0b3937",
                                        color: "#0b3937",
                                      }}
                                    ></textarea>
                                    <span
                                      className="floating-label-2"
                                      style={{
                                        color: "black",
                                      }}
                                    >
                                      Message...
                                    </span>
                                  </div>
                                </div>
                                <div className="col-xxl-12">
                                  <div className="postbox__btn-box">
                                    <button
                                      className="submit-btn w-100 rounded"
                                      style={{
                                        backgroundColor: "#a9fa60",
                                      }}
                                    >
                                      Get in touch
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </form>
                          ) : (
                            <p
                              // 4. Removed 'small' class
                              // 5. Added 'lh-lg' for taller line height
                              className="m-0 fw-medium lh-lg"
                              // 6. Manually increased font size
                              style={{
                                fontSize: "1.05rem",
                                color: theme.accent,
                              }}
                            >
                              {item.description}
                            </p>
                          )}
                        </div>
                        {/* Added slightly more margin at bottom of expanded state */}
                        <div style={{ height: "15px" }}></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div
              style={{
                width: "100%",
              }}
              className="d-flex justify-content-center"
            >
              <Link
                href="/new-service"
                className="tp-btn-blue-lg tp-btn-hover text-white border-0 mt-4 shadow-sm"
                style={{
                  fontSize: "1rem",
                  fontWeight: "500",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 15px rgba(44, 165, 141, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                How Can we help you?
              </Link>
            </div>
          </div>

          {/* --- Right Column: Image Collage --- */}
          <div className="col-lg-6">
            <div className="row g-3 h-100">
              <div className="col-8">
                <div
                  className="w-100 h-100 rounded-4 shadow-sm"
                  style={{
                    backgroundImage: `url('/assets/img/services/s10.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "400px",
                  }}
                ></div>
              </div>

              <div className="col-4 d-flex flex-column gap-3">
                <div
                  className="flex-grow-1 rounded-4 shadow-sm"
                  style={{
                    backgroundImage: "url('/assets/img/services/s9.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "190px",
                  }}
                ></div>
                <div
                  className="flex-grow-1 rounded-4 shadow-sm"
                  style={{
                    backgroundImage: "url('/assets/img/services/s8.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "190px",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RatedArea;
