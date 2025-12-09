import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { serviceTabs, services } from "./service-details-page";
import hero_image from "../../../public/assets/img/service/sv-details-1.jpg";
import answer_question_data from "@/data/answer-question-data";
import AnswerQuestion from "@/common/answer-question";
import { Check } from "lucide-react";
import { CheckCircle } from "lucide-react";
import { Bot } from "lucide-react";
import { UserCheck } from "lucide-react";

const getDefaultTab = () => serviceTabs[0]?.id ?? "";

const ServiceDetailsArea = ({ initialTab }) => {
  const [activeTab, setActiveTab] = useState(initialTab ?? getDefaultTab());

  useEffect(() => {
    setActiveTab(initialTab ?? getDefaultTab());
  }, [initialTab]);
  const service = services[activeTab];

  if (!service) {
    return null;
  }

  const renderModules = () => {
    if (!service.modules?.length) return null;
    return (
      <div className="sv-details-text mb-50">
        <h3 className="sv-details-text-title pb-20">Training Programs</h3>
        <div className="row">
          {service.modules.map((module, index) => (
            <div
              key={`${service.id}-module-${index}`}
              className="col-md-6 mb-30"
            >
              <style jsx>{`
                .modern-card {
                  position: relative;
                  height: 450px;
                  border-radius: 16px;
                  overflow: hidden;
                  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
                  cursor: pointer;
                  background-color: #000;
                }

                /* BASE IMAGE LAYER */
                .state-image-layer {
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  z-index: 1;
                }

                .bg-image {
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  background-image: url("/assets/img/modules/${index + 1}.png");
                  background-size: cover;
                  background-position: center;
                  transition: transform 0.5s ease;
                }

                .modern-card:hover .bg-image {
                  transform: scale(1.05);
                }

                /* NEW COLOR OVERLAY (#0b3937) */
                .bg-color-overlay {
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  background-color: rgba(
                    11,
                    57,
                    55,
                    0.6
                  ); /* #0b3937 with transparency */
                  z-index: 2;
                }

                /* Bottom gradient for readability */
                .bg-overlay {
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  background: linear-gradient(
                    to bottom,
                    rgba(0, 0, 0, 0) 40%,
                    rgba(0, 0, 0, 0.8) 100%
                  );
                  z-index: 3;
                }

                .image-layer-content {
                  position: absolute;
                  bottom: 0;
                  left: 0;
                  width: 100%;
                  padding: 30px;
                  color: #fff;
                  z-index: 4;
                }

                /* HOVER LAYER */
                .state-hover-layer {
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  z-index: 10;
                  background-color: #0b3937;
                  padding: 30px;
                  opacity: 0;
                  transition: opacity 0.4s ease-in-out;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  color: #a9fa60;
                }

                .modern-card:hover .state-hover-layer {
                  opacity: 1;
                }

                .eyebrow {
                  font-size: 0.85rem;
                  font-weight: 600;
                  letter-spacing: 1px;
                  text-transform: uppercase;
                  opacity: 0.8;
                  margin-bottom: 10px;
                  display: block;
                }

                .card-title {
                  font-size: 1.6rem;
                  font-weight: 700;
                  line-height: 1.3;
                  margin-bottom: 15px;
                  color: #fff;
                }

                .hover-description {
                  font-size: 1rem;
                  line-height: 1.5;
                  margin-bottom: 20px;
                  opacity: 0.95;
                }

                .purchase-btn {
                  border: none;
                  padding: 12px 24px;
                  border-radius: 8px;
                  font-weight: 700;
                  width: 100%;
                  text-transform: uppercase;
                  font-size: 0.9rem;
                  letter-spacing: 0.5px;
                  transition: all 0.2s ease;
                  cursor: pointer;
                  margin-top: auto;
                }

                .purchase-btn:hover {
                  background-color: #f0f0f0;
                  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
                }
              `}</style>

              <div className="modern-card">
                <div className="state-image-layer">
                  <div className="bg-image"></div>

                  {/* NEW COLOR OVERLAY */}
                  <div className="bg-color-overlay"></div>

                  <div className="bg-overlay"></div>

                  <div className="image-layer-content">
                    <span className="eyebrow" style={{ color: "#a9fa60" }}>
                      Module
                    </span>
                    <h4 className="card-title">{module.title}</h4>
                  </div>
                </div>

                <div className="state-hover-layer">
                  <span className="eyebrow">Overview</span>
                  <h4 className="card-title" style={{ color: "#a9fa60" }}>
                    {module.title}
                  </h4>
                  <p className="hover-description" style={{ color: "#a9fa60" }}>
                    {module.description}
                  </p>
                  <p
                    className="hover-description"
                    style={{ fontSize: "0.9rem", color: "#a9fa60" }}
                  >
                    <strong>Outcome:</strong> {module.outcome}
                  </p>

                  <button
                    className="purchase-btn"
                    style={{
                      backgroundColor: "#a9fa60",
                      color: "#0b3937",
                    }}
                  >
                    Purchase Module
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  const renderChecklist = (title, items, iconClass = null) => {
    if (!items?.length) return null;

    const iconMap = {
      "fal fa-check": Check,
      "fal fa-check-circle": CheckCircle,
      "fal fa-robot": Bot,
      "fal fa-user-check": UserCheck,
    };

    const IconComponent =
      iconClass && iconMap[iconClass] ? iconMap[iconClass] : Check;

    return (
      <div className="sv-details-text mb-5">
        <h3 className="sv-details-text-title fw-bold pb-3 mb-4">{title}</h3>
        <div className="tp-about__list">
          <ul className="list-unstyled">
            {/* Remove default bullets for clean look */}
            {items.map((item, i) => (
              <li
                key={i}
                style={{
                  paddingLeft: "0px",
                }}
                className="d-flex align-items-center mb-3 py-2 border-bottom" // Flex for alignment, spacing for modern rhythm
              >
                <IconComponent
                  className="me-3"
                  style={{
                    color: "#0b3937",
                  }}
                />
                {/* Changed span className to include fw-bold and fs-5 for bigger font */}
                <span className="flex-grow-1 text-muted fw-bold fs-5 lh-lg">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  const renderApproachCards = () => {
    if (!service.ourApproach?.length) return null;

    return (
      <div className="sv-details-text mb-50">
        <h3 className="sv-details-text-title pb-20">Our Approach</h3>
        <div className="approach-list">
          <ul className="list-unstyled">
            {service.ourApproach.map((item, index) => {
              // Check if item is a string before splitting
              if (typeof item !== "string" || !item.includes(":")) {
                // Optional: Handle malformed data gracefully
                console.warn(`Skipping malformed approach item: ${item}`);
                return null;
              }

              // Trim to clean up any extra whitespace from the split parts
              const [rawHeading, rawDetail] = item.split(":");
              const heading = rawHeading.trim();
              const detail = rawDetail.trim();

              return (
                <li
                  key={index}
                  style={{
                    paddingLeft: "0px",
                  }}
                  className="approach-item py-3 mb-3 border-bottom d-flex align-items-start"
                >
                  <div className="approach-step-number flex-shrink-0 me-4">
                    <span className="h4 fw-bold">0{index + 1}.</span>
                  </div>
                  <div className="approach-content flex-grow-1">
                    <h4 className="mt-0 mb-2">
                      <span className="fw-semibold">{heading}</span>
                    </h4>
                    <p className="text-secondary mb-0">{detail}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  };

  const renderSplitList = (title, items, iconClass = "fal fa-check") => {
    if (!items?.length) return null;
    return (
      <div className="sv-details-text mb-40">
        {/* Title: Made bolder (fw-bold) and slightly bigger (fs-4) */}
        <h3 className="sv-details-text-title fw-bold fs-4 pb-20">{title}</h3>
        <div className="row g-4">
          {items.map((item, index) => (
            <div
              key={`${service.id}-${title}-${index}`}
              className="col-md-6 mb-2"
            >
              <div className="d-flex align-items-start">
                <i
                  className={`${iconClass} me-4 mt-1`}
                  style={{
                    color: "#0b3937",
                    // Icon: Made bigger (1.5rem)
                    fontSize: "1.5rem",
                  }}
                ></i>
                {/* List Item Text: Made bolder (fw-bold) and slightly bigger (fs-5) */}
                <span className="fw-bold fs-5">{item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderOverview = () => (
    <div className="sv-details-title-box mb-55">
      <h1 className="sv-details-title fw-bold">{service.title}</h1>

      <h3 className="sv-details-subtitle fw-bold fs-4 mb-20">
        {service.subtitle}
      </h3>

      {renderHero()}
      <p className="lead fw-bold fs-5">{service.intro}</p>
      {service.overview && <p className="fw-bold fs-5">{service.overview}</p>}
    </div>
  );

  // const renderHighlights = () => {
  //   if (!service.highlight && !service.empower) return null;

  //   return (
  //     <div className="card mb-5 bg-white border-1">
  //       <div className="card-body p-4 p-md-5">
  //         {(service.highlight || service.empower) && (
  //           <h3
  //             className="card-title mb-4 fw-bold"
  //             style={{
  //               color: "#0b3937",
  //             }}
  //           >
  //             Key Highlights
  //           </h3>
  //         )}

  //         {service.highlight && (
  //           <p className="lead fw-medium mb-3">
  //             <i className="bi bi-check-circle-fill text-success me-2"></i>
  //             {service.highlight}
  //           </p>
  //         )}

  //         {service.empower && (
  //           <p className="mb-4">
  //             <i className="bi bi-star-fill me-2"></i>
  //             {service.empower}
  //           </p>
  //         )}

  //         <div className="mt-4">
  //           <Link
  //             className="tp-btn-blue-lg tp-btn-hover alt-color-black"
  //             href="/new-service"
  //           >
  //             <span
  //               style={{
  //                 color: "white",
  //               }}
  //             >
  //               Start Now
  //             </span>
  //             <b></b>
  //           </Link>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  const renderHighlights = () => {
    if (!service.highlight && !service.empower) return null;

    return (
      <div
        style={{
          width: "100%",
        }}
      >
        <div
          className="card mb-5 border-1"
          style={{
            backgroundColor: "#0b3937",
            color: "white",
          }}
        >
          <div className="card-body p-4 p-md-5">
            {(service.highlight || service.empower) && (
              <h3
                className="card-title mb-4 fw-bold text-center"
                style={{
                  color: "#a9fa60",
                }}
              >
                Core Benefits & Outcomes
              </h3>
            )}

            {service.highlight && (
              <p className="lead fw-medium mb-3" style={{ color: "white" }}>
                {/* <i
                  className="bi bi-check-circle-fill me-2"
                  style={{ color: "#a9fa60" }}
                ></i> */}
                {service.highlight}
              </p>
            )}

            {service.empower && (
              <p className="mb-4" style={{ color: "white" }}>
                {/* <i
                  className="bi bi-star-fill me-2"
                  style={{ color: "#a9fa60" }}
                ></i> */}
                {service.empower}
              </p>
            )}

            <div className="mt-4 d-flex justify-content-center">
              <Link
                className="tp-btn-blue-lg tp-btn-hover alt-color-black"
                href="/new-service"
                style={{
                  backgroundColor: "#a9fa60",
                  borderColor: "#a9fa60",
                }}
              >
                <span
                  style={{
                    color: "#0b3937",
                  }}
                >
                  {service.highlightButtonText}
                </span>
                <b></b>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderServiceCards = () => {
    if (!service.serviceCards?.length) return null;

    return (
      <div className="sv-details-text mb-60">
        {/* <h2 className="sv-details-title mb-30">Our Services</h2> */}
        <div className="row g-4">
          {service.serviceCards.map((card) => (
            <div key={card.id} className="col-md-6">
              <div
                className="service-card border rounded h-100 p-4"
                style={{
                  position: "relative",
                  backgroundImage: `url(/assets/img/services/s6.png)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundColor: "#1f2937",
                }}
              >
                <div
                  className="position-absolute"
                  style={{
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#1f2937",
                    opacity: 0.8,
                    borderRadius: "0.5rem",
                    zIndex: 1,
                  }}
                ></div>

                <div style={{ position: "relative", zIndex: 2 }}>
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div>
                      <span className="text-uppercase text-muted fw-semibold"></span>
                      <h3 className="mt-2 mb-3" style={{ color: "white" }}>
                        {card.title}
                      </h3>
                    </div>
                    {/* <span
                      className="badge bg-primary-subtle text-primary"
                      style={{ color: "white" }}
                    >
                      {card.actionLabel}
                    </span> */}
                  </div>
                  <p className="mb-4" style={{ color: "white" }}>
                    {card.description}
                  </p>
                  <Link
                    href={`/service/${card.targetTab}`}
                    type="button"
                    style={{ color: "white" }}
                    className="tp-btn-border tp-btn-hover"
                  >
                    <span style={{ color: "white" }}>{card.actionLabel}</span>
                    <b></b>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderWhyChooseUs = () => {
    if (!service.whyChooseUs?.length) return null;

    return (
      <div
        className="sv-details-text mb-60"
        style={{
          color: "#0b3937",
        }}
      >
        <div className="d-flex align-items-center mb-3 gap-3">
          <span className="badge bg-secondary text-white">1.4</span>
          <h2 className="sv-details-title mb-0">Why Choose Us</h2>
        </div>
        <div className="row g-4">
          {service.whyChooseUs.map((item, index) => (
            <div key={`${service.id}-why-${index}`} className="col-md-6">
              <div className="why-card border rounded h-100 p-4">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <span className="step-number">{index + 1}</span>
                  <h4 className="mb-0">{item.title}</h4>
                </div>
                <p className="mb-0">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderAbout = () => {
    if (!service.about) return null;

    return (
      <div className="sv-details-text mb-60">
        <div className="row g-4 align-items-start">
          <div className="col-lg-6">
            <div className="about-card border rounded h-100 p-4">
              <h3 className="mb-3">About Axonova Consulting</h3>
              <p className="mb-4">{service.about.intro}</p>
              {service.about.paragraphs?.map((paragraph, index) => (
                <p key={`${service.id}-about-${index}`} className="mb-3">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mission-card border rounded p-4 h-100 bg-light">
              <h4 className="mb-3">Our Mission</h4>
              <p>{service.about.mission}</p>
              <div className="mt-4">
                <h4 className="mb-3">Our Approach</h4>
                <ul className="list-unstyled mb-0">
                  {service.about.approachPrinciples?.map((principle, index) => (
                    <li
                      key={`${service.id}-principle-${index}`}
                      className="mb-3"
                    >
                      <strong>{principle.title}:</strong>{" "}
                      {principle.description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {service.about.values?.length ? (
          <div className="row g-4 mt-4">
            {service.about.values.map((value, index) => (
              <div key={`${service.id}-value-${index}`} className="col-md-4">
                <div className="value-card border rounded h-100 p-4">
                  <h5>{value.title}</h5>
                  <p className="mb-0">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : null}
        {service.about.closing && (
          <div className="about-closing mt-4 p-4 border rounded bg-white">
            <p className="mb-0">{service.about.closing}</p>
          </div>
        )}
      </div>
    );
  };

  const renderHero = () => {
    if (!service.hero) return null;

    return (
      <div className="sv-details-hero mb-40">
        <div
          className="position-relative overflow-hidden rounded-4"
          style={{
            backgroundColor: "#0b3937",
          }}
        >
          <Image
            src={service.hero}
            alt={service.title}
            className="w-100"
            style={{
              objectFit: "cover",
              maxHeight: 420,
              width: "100%",
              filter: "saturate(1.05)",
              opacity: 0.95,
            }}
            priority
          />
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
              background:
                "linear-gradient(120deg, rgba(255,255,255,0.15), rgba(11,57,55,0.55))",
              mixBlendMode: "multiply",
            }}
          ></div>
        </div>
      </div>
    );
  };

  const renderServiceSpecificContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <>
            {renderOverview()}
            {renderServiceCards()}
            {renderWhyChooseUs()}
            {renderAbout()}
            {renderHighlights()}
          </>
        );
      case "ai-training":
        return (
          <>
            {renderOverview()}
            {renderModules()}

            <div
              style={{
                position: "relative",
                // Changed to Primary Color: #0b3937
                backgroundColor: "#0b3937",
                height: "100px",
                width: "100%",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "30px",
                color: "white",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  overflow: "hidden",
                  lineHeight: 0,
                }}
              >
                <svg
                  viewBox="0 0 1440 320"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    position: "relative",
                    display: "block",
                    width: "calc(100% + 1.3px)",
                    height: "100px",
                  }}
                >
                  <path
                    // Changed fill to Primary Color: #0b3937
                    fill="#0b3937"
                    fillOpacity="1"
                    d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,186.7C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>

                  <path
                    // Changed fill to Secondary Color: #a9fa60
                    fill="#a9fa60"
                    fillOpacity="1"
                    d="M0,256L48,250.7C96,245,192,235,288,208C384,181,480,139,576,144C672,149,768,203,864,229.3C960,256,1056,256,1152,234.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>

                  <path
                    fill="none"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="2"
                    d="M480,130 C600,120, 700,200, 864,220 C960,240, 1050,220, 1150,190"
                  ></path>
                  <path
                    fill="none"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="1.5"
                    d="M900,200 C1000,240, 1100,200, 1300,100"
                  ></path>

                  <path
                    fill="#ffffff"
                    fillOpacity="1"
                    d="M0,288L48,280C96,272,192,256,288,250.7C384,245,480,248,576,256C672,264,768,272,864,266.7C960,261,1056,256,1152,245.3C1248,235,1344,229,1392,226.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </div>
            </div>
            {renderChecklist("Why It Works", service.benefits)}

            {/* <div
              style={{
                position: "relative",
                // Changed to Primary Color: #0b3937
                backgroundColor: "#0b3937",
                height: "100px",
                width: "100%",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "30px",
                color: "white",
              }}
            >
              <div
                class="wave-container"
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  overflow: "hidden",
                  lineHeight: 0,
                }}
              >
                <svg
                  viewBox="0 0 1440 320"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    position: "relative",
                    display: "block",
                    width: "calc(100% + 1.3px)",
                    height: "100px",
                  }}
                >
                  <path
                    // Changed fill to Primary Color: #0b3937
                    fill="#0b3937"
                    fillOpacity="1"
                    d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,186.7C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>

                  <path
                    // Changed fill to Secondary Color: #a9fa60
                    fill="#a9fa60"
                    fillOpacity="1"
                    d="M0,256L48,250.7C96,245,192,235,288,208C384,181,480,139,576,144C672,149,768,203,864,229.3C960,256,1056,256,1152,234.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>

                  <path
                    fill="none"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="2"
                    d="M480,130 C600,120, 700,200, 864,220 C960,240, 1050,220, 1150,190"
                  ></path>
                  <path
                    fill="none"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="1.5"
                    d="M900,200 C1000,240, 1100,200, 1300,100"
                  ></path>

                  <path
                    fill="#ffffff"
                    fillOpacity="1"
                    d="M0,288L48,280C96,272,192,256,288,250.7C384,245,480,248,576,256C672,264,768,272,864,266.7C960,261,1056,256,1152,245.3C1248,235,1344,229,1392,226.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </div>
            </div> */}
            {renderHighlights()}
          </>
        );
      case "ai-consulting":
        return (
          <>
            {renderOverview()}

            <div
              style={{
                position: "relative",
                // Changed to Primary Color: #0b3937
                backgroundColor: "#0b3937",
                height: "100px",
                width: "100%",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "30px",
                color: "white",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  overflow: "hidden",
                  lineHeight: 0,
                }}
              >
                <svg
                  viewBox="0 0 1440 320"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    position: "relative",
                    display: "block",
                    width: "calc(100% + 1.3px)",
                    height: "100px",
                  }}
                >
                  <path
                    // Changed fill to Primary Color: #0b3937
                    fill="#0b3937"
                    fillOpacity="1"
                    d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,186.7C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>

                  <path
                    // Changed fill to Secondary Color: #a9fa60
                    fill="#a9fa60"
                    fillOpacity="1"
                    d="M0,256L48,250.7C96,245,192,235,288,208C384,181,480,139,576,144C672,149,768,203,864,229.3C960,256,1056,256,1152,234.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>

                  <path
                    fill="none"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="2"
                    d="M480,130 C600,120, 700,200, 864,220 C960,240, 1050,220, 1150,190"
                  ></path>
                  <path
                    fill="none"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="1.5"
                    d="M900,200 C1000,240, 1100,200, 1300,100"
                  ></path>

                  <path
                    fill="#ffffff"
                    fillOpacity="1"
                    d="M0,288L48,280C96,272,192,256,288,250.7C384,245,480,248,576,256C672,264,768,272,864,266.7C960,261,1056,256,1152,245.3C1248,235,1344,229,1392,226.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </div>
            </div>
            {renderChecklist("What we cover", service.whatWeCover)}

            <div
              style={{
                position: "relative",
                // Changed to Primary Color: #0b3937
                backgroundColor: "#0b3937",
                height: "100px",
                width: "100%",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "30px",
                color: "white",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  overflow: "hidden",
                  lineHeight: 0,
                }}
              >
                <svg
                  viewBox="0 0 1440 320"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    position: "relative",
                    display: "block",
                    width: "calc(100% + 1.3px)",
                    height: "100px",
                  }}
                >
                  <path
                    // Changed fill to Primary Color: #0b3937
                    fill="#0b3937"
                    fillOpacity="1"
                    d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,186.7C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>

                  <path
                    // Changed fill to Secondary Color: #a9fa60
                    fill="#a9fa60"
                    fillOpacity="1"
                    d="M0,256L48,250.7C96,245,192,235,288,208C384,181,480,139,576,144C672,149,768,203,864,229.3C960,256,1056,256,1152,234.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>

                  <path
                    fill="none"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="2"
                    d="M480,130 C600,120, 700,200, 864,220 C960,240, 1050,220, 1150,190"
                  ></path>
                  <path
                    fill="none"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="1.5"
                    d="M900,200 C1000,240, 1100,200, 1300,100"
                  ></path>

                  <path
                    fill="#ffffff"
                    fillOpacity="1"
                    d="M0,288L48,280C96,272,192,256,288,250.7C384,245,480,248,576,256C672,264,768,272,864,266.7C960,261,1056,256,1152,245.3C1248,235,1344,229,1392,226.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </div>
            </div>
            {renderChecklist(
              "How we work",
              service.howWeWork,
              "fal fa-check-circle"
            )}
            {renderHighlights()}
          </>
        );
      case "ai-automations":
        return (
          <>
            {renderOverview()}

            <div
              style={{
                position: "relative",
                // Changed to Primary Color: #0b3937
                backgroundColor: "#0b3937",
                height: "100px",
                width: "100%",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "30px",
                color: "white",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  overflow: "hidden",
                  lineHeight: 0,
                }}
              >
                <svg
                  viewBox="0 0 1440 320"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    position: "relative",
                    display: "block",
                    width: "calc(100% + 1.3px)",
                    height: "100px",
                  }}
                >
                  <path
                    // Changed fill to Primary Color: #0b3937
                    fill="#0b3937"
                    fillOpacity="1"
                    d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,186.7C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>

                  <path
                    // Changed fill to Secondary Color: #a9fa60
                    fill="#a9fa60"
                    fillOpacity="1"
                    d="M0,256L48,250.7C96,245,192,235,288,208C384,181,480,139,576,144C672,149,768,203,864,229.3C960,256,1056,256,1152,234.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>

                  <path
                    fill="none"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="2"
                    d="M480,130 C600,120, 700,200, 864,220 C960,240, 1050,220, 1150,190"
                  ></path>
                  <path
                    fill="none"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="1.5"
                    d="M900,200 C1000,240, 1100,200, 1300,100"
                  ></path>

                  <path
                    fill="#ffffff"
                    fillOpacity="1"
                    d="M0,288L48,280C96,272,192,256,288,250.7C384,245,480,248,576,256C672,264,768,272,864,266.7C960,261,1056,256,1152,245.3C1248,235,1344,229,1392,226.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </div>
            </div>

            {renderChecklist(
              "Examples of what we automate",
              service.whatWeAutomate,
              "fal fa-robot"
            )}
            <div
              style={{
                position: "relative",
                // Changed to Primary Color: #0b3937
                backgroundColor: "#0b3937",
                height: "100px",
                width: "100%",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "30px",
                color: "white",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  overflow: "hidden",
                  lineHeight: 0,
                }}
              >
                <svg
                  viewBox="0 0 1440 320"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    position: "relative",
                    display: "block",
                    width: "calc(100% + 1.3px)",
                    height: "100px",
                  }}
                >
                  <path
                    // Changed fill to Primary Color: #0b3937
                    fill="#0b3937"
                    fillOpacity="1"
                    d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,186.7C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>

                  <path
                    // Changed fill to Secondary Color: #a9fa60
                    fill="#a9fa60"
                    fillOpacity="1"
                    d="M0,256L48,250.7C96,245,192,235,288,208C384,181,480,139,576,144C672,149,768,203,864,229.3C960,256,1056,256,1152,234.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>

                  <path
                    fill="none"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="2"
                    d="M480,130 C600,120, 700,200, 864,220 C960,240, 1050,220, 1150,190"
                  ></path>
                  <path
                    fill="none"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="1.5"
                    d="M900,200 C1000,240, 1100,200, 1300,100"
                  ></path>

                  <path
                    fill="#ffffff"
                    fillOpacity="1"
                    d="M0,288L48,280C96,272,192,256,288,250.7C384,245,480,248,576,256C672,264,768,272,864,266.7C960,261,1056,256,1152,245.3C1248,235,1344,229,1392,226.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </div>
            </div>
            {renderApproachCards()}
            {renderHighlights()}
          </>
        );
      case "ai-coaching":
        return (
          <>
            {renderOverview()}

            <div
              style={{
                position: "relative",
                // Changed to Primary Color: #0b3937
                backgroundColor: "#0b3937",
                height: "100px",
                width: "100%",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "30px",
                color: "white",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  overflow: "hidden",
                  lineHeight: 0,
                }}
              >
                <svg
                  viewBox="0 0 1440 320"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    position: "relative",
                    display: "block",
                    width: "calc(100% + 1.3px)",
                    height: "100px",
                  }}
                >
                  <path
                    // Changed fill to Primary Color: #0b3937
                    fill="#0b3937"
                    fillOpacity="1"
                    d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,186.7C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>

                  <path
                    // Changed fill to Secondary Color: #a9fa60
                    fill="#a9fa60"
                    fillOpacity="1"
                    d="M0,256L48,250.7C96,245,192,235,288,208C384,181,480,139,576,144C672,149,768,203,864,229.3C960,256,1056,256,1152,234.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>

                  <path
                    fill="none"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="2"
                    d="M480,130 C600,120, 700,200, 864,220 C960,240, 1050,220, 1150,190"
                  ></path>
                  <path
                    fill="none"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="1.5"
                    d="M900,200 C1000,240, 1100,200, 1300,100"
                  ></path>

                  <path
                    fill="#ffffff"
                    fillOpacity="1"
                    d="M0,288L48,280C96,272,192,256,288,250.7C384,245,480,248,576,256C672,264,768,272,864,266.7C960,261,1056,256,1152,245.3C1248,235,1344,229,1392,226.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </div>
            </div>
            {renderSplitList("What you'll learn", service.whatYoullLearn)}
            {renderSplitList(
              "Who this is for",
              service.whoThisIsFor,
              "fal fa-user-check"
            )}

            <div
              style={{
                position: "relative",
                // Changed to Primary Color: #0b3937
                backgroundColor: "#0b3937",
                height: "100px",
                width: "100%",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "30px",
                color: "white",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  overflow: "hidden",
                  lineHeight: 0,
                }}
              >
                <svg
                  viewBox="0 0 1440 320"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    position: "relative",
                    display: "block",
                    width: "calc(100% + 1.3px)",
                    height: "100px",
                  }}
                >
                  <path
                    // Changed fill to Primary Color: #0b3937
                    fill="#0b3937"
                    fillOpacity="1"
                    d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,186.7C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>

                  <path
                    // Changed fill to Secondary Color: #a9fa60
                    fill="#a9fa60"
                    fillOpacity="1"
                    d="M0,256L48,250.7C96,245,192,235,288,208C384,181,480,139,576,144C672,149,768,203,864,229.3C960,256,1056,256,1152,234.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>

                  <path
                    fill="none"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="2"
                    d="M480,130 C600,120, 700,200, 864,220 C960,240, 1050,220, 1150,190"
                  ></path>
                  <path
                    fill="none"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="1.5"
                    d="M900,200 C1000,240, 1100,200, 1300,100"
                  ></path>

                  <path
                    fill="#ffffff"
                    fillOpacity="1"
                    d="M0,288L48,280C96,272,192,256,288,250.7C384,245,480,248,576,256C672,264,768,272,864,266.7C960,261,1056,256,1152,245.3C1248,235,1344,229,1392,226.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </div>
            </div>
            {renderChecklist(
              "Session includes",
              service.sessionIncludes,
              "fal fa-check-circle"
            )}
            {renderHighlights()}
          </>
        );
      default:
        return null;
    }
  };

  const renderCta = () => {
    if (!service.cta) return null;
    return (
      <div className="cta-section text-center mt-5 pt-5">
        <h3 className="mb-4">{service.cta.title}</h3>
        <p className="lead mb-4">{service.cta.description}</p>
        <Link href="/contact" className="btn btn-primary btn-lg">
          {service.cta.button}
        </Link>
        {service.cta.secondaryButton ? (
          <Link
            href={service.cta.secondaryButton.href}
            className="btn btn-outline-primary btn-lg ms-3"
          >
            {service.cta.secondaryButton.label}
          </Link>
        ) : null}
        {service.cta.note && (
          <p className="text-muted mt-3 mb-0">{service.cta.note}</p>
        )}
      </div>
    );
  };

  return (
    <div className="sv-details-area pt-100 mb-50">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 mx-auto">
            <div className="sv-details-wrapper">
              {renderServiceSpecificContent()}
              {service?.faqs?.length && (
                <>
                  <h3 className="sv-details-title mb-4 mt-50">
                    Frequently Asked Questions
                  </h3>
                  <AnswerQuestion
                    style={true}
                    answer_question_data={service.faqs}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsArea;
