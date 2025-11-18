import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { serviceTabs, services } from "./service-details-page";
import hero_image from "../../../public/assets/img/service/sv-details-1.jpg";
import answer_question_data from "@/data/answer-question-data";
import AnswerQuestion from "@/common/answer-question";

const ServiceDetailsArea = () => {
  const [activeTab, setActiveTab] = useState(serviceTabs[0]?.id ?? "");
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
              <div className="service-module p-4 h-100 border rounded">
                <h4 className="module-title mb-3">{module.title}</h4>
                <p className="mb-3">{module.description}</p>
                <p className="mb-0">
                  <strong>Outcome:</strong> {module.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderChecklist = (title, items, iconClass = "fal fa-check") => {
    if (!items?.length) return null;
    return (
      <div className="sv-details-text mb-50">
        <h3 className="sv-details-text-title pb-20">{title}</h3>
        <ul className="checklist">
          {items.map((item, index) => (
            <li
              key={`${service.id}-${title}-${index}`}
              className="mb-2 d-flex align-items-start"
            >
              <i className={`${iconClass} text-primary me-2 mt-1`}></i>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const renderApproachCards = () => {
    if (!service.ourApproach?.length) return null;
    return (
      <div className="sv-details-text mb-50">
        <h3 className="sv-details-text-title pb-20">Our Approach</h3>
        <div className="row">
          {service.ourApproach.map((item, index) => {
            const [heading, detail] = item.split(":");
            return (
              <div
                key={`${service.id}-approach-${index}`}
                className="col-md-6 col-lg-4 mb-4"
              >
                <div className="approach-card p-4 h-100 border rounded">
                  <div className="d-flex align-items-center mb-3">
                    <div className="step-number me-3">{index + 1}</div>
                    <h4 className="mb-0">{heading?.trim()}</h4>
                  </div>
                  <p className="mb-0">{detail?.trim()}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderSplitList = (title, items, iconClass = "fal fa-check") => {
    if (!items?.length) return null;
    return (
      <div className="sv-details-text mb-40">
        <h3 className="sv-details-text-title pb-20">{title}</h3>
        <div className="row">
          {items.map((item, index) => (
            <div
              key={`${service.id}-${title}-${index}`}
              className="col-md-6 mb-2"
            >
              <div className="d-flex align-items-start">
                <i className={`${iconClass} text-primary me-2 mt-1`}></i>
                <span>{item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderOverview = () => (
    <div className="sv-details-title-box mb-55">
      <h1 className="sv-details-title">{service.title}</h1>
      <h3 className="sv-details-subtitle mb-20">{service.subtitle}</h3>
      <p className="lead">{service.intro}</p>
      {service.overview && <p>{service.overview}</p>}
    </div>
  );

  const renderHighlights = () => {
    if (!service.highlight && !service.empower) return null;
    return (
      <div className="sv-details-highlight p-4 mb-50 border rounded bg-white">
        {service.highlight && <p className="lead mb-2">{service.highlight}</p>}
        {service.empower && <p className="mb-0">{service.empower}</p>}
      </div>
    );
  };

  const renderServiceCards = () => {
    if (!service.serviceCards?.length) return null;

    return (
      <div className="sv-details-text mb-60">
        <h2 className="sv-details-title mb-30">Our Services</h2>
        <div className="row g-4">
          {service.serviceCards.map((card) => (
            <div key={card.id} className="col-md-6">
              <div className="service-card border rounded h-100 p-4">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <span className="text-uppercase text-muted fw-semibold">
                      {/* {card.tagline} */}
                    </span>
                    <h3 className="mt-2 mb-3">{card.title}</h3>
                  </div>
                  <span className="badge bg-primary-subtle text-primary">
                    {card.actionLabel}
                  </span>
                </div>
                <p className="mb-4">{card.description}</p>
                <button
                  type="button"
                  className="tp-btn-border tp-btn-hover"
                  onClick={() => setActiveTab(card.targetTab)}
                >
                  <span>{card.actionLabel}</span>
                  <b></b>
                </button>
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
      <div className="sv-details-text mb-60">
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
            {renderChecklist("Why It Works", service.benefits)}
            {renderHighlights()}
          </>
        );
      case "ai-consulting":
        return (
          <>
            {renderOverview()}
            {renderChecklist("What we cover", service.whatWeCover)}
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
            {renderChecklist(
              "Examples of what we automate",
              service.whatWeAutomate,
              "fal fa-robot"
            )}
            {renderApproachCards()}
            {renderHighlights()}
          </>
        );
      case "ai-coaching":
        return (
          <>
            {renderOverview()}
            {renderSplitList("What you'll learn", service.whatYoullLearn)}
            {renderSplitList(
              "Who this is for",
              service.whoThisIsFor,
              "fal fa-user-check"
            )}
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
    <div className="sv-details-area pt-100 pb-100">
      <div className="container">
        <div className="sv-details-tab mb-50">
          <ul className="nav nav-tabs" role="tablist">
            {serviceTabs.map((tab) => (
              <li className="nav-item" key={tab.id} role="presentation">
                <button
                  type="button"
                  role="tab"
                  className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="row">
          <div className="col-xl-10 mx-auto">
            <div className="sv-details-wrapper">
              {activeTab === "overview" && (
                <div className="sv-details-thumb mb-45">
                  <Image
                    className="w-100 rounded"
                    src={hero_image}
                    alt={service.title}
                    width={1200}
                    height={550}
                    priority
                  />
                </div>
              )}

              {renderServiceSpecificContent()}
              {service?.faqs?.length && (
                <>
                  <h3 className="sv-details-title mb-4">
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
