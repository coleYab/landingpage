import VideoPopup from "@/modals/video-popup";
import React, { useState } from "react";

const company_content = {
  sub_title: "ABOUT AXONOVA CONSULTING",
  title: (
    <>
      AI Transformation, <br />
      Done Right.
    </>
  ),
  info_1: (
    <>
      Axonova Consulting helps organisations adopt AI with clarity, confidence,
      and measurable impact.
    </>
  ),
  info_2: (
    <>
      We believe AI should simplify work — not complicate it. That’s why our
      approach focuses on practical skills, safe adoption, and real outcomes
      that teams can feel and leaders can measure.
    </>
  ),
  info_3: (
    <>
      From training and coaching to strategy and automation, we guide
      organisations through AI transformation the right way — with your people
      at the centre.
    </>
  ),
};

const { sub_title, title, info_1, info_2, info_3 } = company_content;

const CompanyArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <div
        className="ab-company-area pt-105 pb-100"
        style={{
          backgroundColor: "#ffffff",
          color: "#0b3937",
        }}
      >
        <div className="container">
          <div className="row ab-company-section-space">
            <div className="col-xl-6">
              <div className="ab-company-section-box">
                <h4
                  className="inner-section-subtitle mb-2"
                  style={{
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "#7c908b",
                    fontSize: "13px",
                  }}
                >
                  {sub_title}
                </h4>
                <h3
                  className="tp-section-title mb-20"
                  style={{ color: "#0b3937" }}
                >
                  {title}
                </h3>
              </div>
            </div>
            <div
              className="col-xl-6 wow tpfadeRight"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="ab-company-right">
                <div
                  className="ab-company-section-text"
                  style={{
                    maxWidth: "620px",
                    lineHeight: 1.7,
                  }}
                >
                  <p className="pb-10 mb-2">{info_1}</p>
                  <p className="pb-10 mb-2">{info_2}</p>
                  <p className="mb-0">
                    <span>{info_3}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row align-items-center">
            <div className="col-xl-4">
              <div className="ab-company-video">
                <a className="popup-video" onClick={() => setIsVideoOpen(true)}>
                  <i className="fas fa-play"></i>
                </a>
                <span>Watch Demo</span>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="row">
                <div className="col-md-4 col-sm-4 mb-40">
                  <div className="ab-company-fun-fact-wrap d-flex justify-content-start">
                    <div className="ab-company-fun-fact">
                      <span>Working With</span>
                      <h4>
                        100<em>+</em>
                      </h4>
                      <p>Companies</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-sm-4 mb-40">
                  <div className="ab-company-fun-fact-wrap d-flex justify-content-md-center justify-content-left">
                    <div className="ab-company-fun-fact">
                      <span>Worked With</span>
                      <h4>
                        50<em></em>
                      </h4>
                      <p>Leaders</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4 mb-40">
                  <div className="ab-company-fun-fact-wrap ab-company-border-none d-flex justify-content-md-center justify-content-left">
                    <div className="ab-company-fun-fact">
                      <span>Experience</span>
                      <h4>
                        5<em>+</em>
                      </h4>
                      <p>Years</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"EW4ZYb3mCZk"}
      />
      {/* video modal end */}
    </>
  );
};

export default CompanyArea;
