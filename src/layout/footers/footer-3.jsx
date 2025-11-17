import Brwoser from "@/common/brwoser";
import EmailIcon from "@/svg/email";
import EmailTwo from "@/svg/email-2";
import PhoneTwo from "@/svg/phone-2";
import RightArrow from "@/svg/right-arrow";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";

import footer_logo from "@/assets/img/logo/logo-black.png";

const footer_content = {
  bg_img: "/assets/img/footer/overly.png",
  title: (
    <>
      Ready to bring <span>AI into your organisation</span> the right way?
    </>
  ),
  btn_text: "Explore Our Services",
  phone: "+44 7447 921919",
  email: "info@axonovaconsulting.co.uk",
  description: (
    <>
      Axonova Consulting helps organisations adopt AI with clarity, confidence,
      and measurable impact.
    </>
  ),

  footer_lisks: [
    {
      id: 1,
      cls_1: "col-xl-3 col-lg-3",
      cls_2: "footer-col-3-2",
      title: "Services",
      delay: ".7s",
      links: [
        { name: "AI Training", link: "/service-details" },
        { name: "AI Consulting", link: "/service-details" },
        { name: "AI Solutions & Automations", link: "/service-details" },
        { name: "AI Coaching", link: "/service-details" },
      ],
    },
    {
      id: 2,
      cls_1: "col-xl-2 col-lg-2",
      cls_2: "footer-col-3-3",
      title: "Company",
      delay: ".9s",
      links: [
        { name: "About Us", link: "/about" },
        { name: "Our Mission", link: "/about#mission" },
        { name: "Our Approach", link: "/about#approach" },
        { name: "Our Values", link: "/about#values" },
        { name: "Contact", link: "/contact" },
      ],
    },
  ],

  social_links: [
    {
      link: "http://facebook.com",
      target: "_blank",
      icon: "fab fa-facebook-f",
    },
    { link: "http://twitter.com", target: "_blank", icon: "fab fa-twitter" },
    {
      link: "http://www.linkedin.com",
      target: "_blank",
      icon: "fab fa-linkedin-in",
    },
    {
      link: "http://www.instagram.com",
      target: "_blank",
      icon: "fab fa-instagram",
    },
  ],
};

// Footer slider highlights updated to reflect AI services
const footer_slider_data = [
  "Practical AI Training",
  "End-to-end AI Consulting",
  "Automations & AI Solutions",
  "1:1 AI Coaching",
  "Safe and responsible AI adoption",
  "Measurable business impact",
  "Clarity, confidence, actionable steps",
  "Tailored for your people and processes",
  "Fast ROI and improved workflows",
  "AI strategy aligned with your goals",
];

const {
  bg_img,
  title,
  btn_text,
  footer_lisks,
  social_links,
  phone,
  email,
  description,
} = footer_content;

// slider setting
const setting = {
  speed: 7000,
  autoplay: true,
  autoplaySpeed: 0,
  centerMode: true,
  cssEase: "linear",
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  infinite: true,
  initialSlide: 1,
  arrows: false,
  buttons: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {},
    },
    {
      breakpoint: 992,
      settings: {},
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const FooterThree = () => {
  return (
    <>
      <div
        className="footer-bottom-content tp-browser-bg-shape"
        style={{ backgroundImage: `url(${bg_img})` }}
      >
        <div className="tp-browser-details-area pt-110 pb-30 p-relative">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-9 col-lg-9">
                <div className="tp-browser-section-box d-flex justify-content-between align-items-center mb-30">
                  <h3 className="tp-section-title-3">{title}</h3>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3">
                <div className="tp-browser-btn text-lg-end text-start mb-40">
                  <Link
                    className="tp-btn-blue-lg tp-btn-hover"
                    href="/service-details"
                  >
                    <span>{btn_text}</span>
                    <b></b>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="tp-hero-browser-wrapper footer-browser-item d-flex align-items-center">
                  <Brwoser />
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div className="tp-footer-slide pb-80">
            <div className="container-fluid g-0">
              <div className="row g-0 justify-content-center">
                <Slider {...setting} className="footer-slide-active">
                  {footer_slider_data.map((item, i) => (
                    <div key={i} className="footer-slide-wrapper">
                      <div className="footer-slide-item">
                        <i className="fal fa-check"></i>
                        <span>{item}</span>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>

          <div className="tp-footer__pl-pr">
            <div className="tp-footer__area tp-footer__tp-border-bottom">
              <div className="container">
                <div className="row">
                  <div
                    className="col-xl-3 col-lg-3 col-md-6 pb-30 wow tpfadeUp"
                    data-wow-duration=".9s"
                    data-wow-delay=".3s"
                  >
                    <div className="tp-footer__widget footer-widget-3 footer-col-3-1">
                      <div className="tp-footer__logo mb-25">
                        <Link href="/">
                          <Image src={footer_logo} alt="" />
                        </Link>
                      </div>
                      <div className="tp-footer__contact-info">
                        <p>{description}</p>
                        <ul>
                          <li>
                            <span>
                              <PhoneTwo />
                            </span>
                            <Link className="first-child" href={`tel:${phone}`}>
                              {phone}
                            </Link>
                          </li>
                          <li>
                            <span>
                              <EmailTwo />
                            </span>
                            <Link href={`mailto:${email}`}>{email}</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {footer_lisks.map((item, i) => (
                    <div
                      key={i}
                      className={`${item.cls_1} col-md-6 pb-30 wow tpfadeUp`}
                      data-wow-duration=".9s"
                      data-wow-delay=".7s"
                    >
                      <div
                        className={`tp-footer__widget footer-widget-3 ${item.cls_2}`}
                      >
                        <h4 className="tp-footer__widget-title">
                          {item.title}
                        </h4>
                        <div className="tp-footer__content">
                          <ul>
                            {item.links.map((link, i) => (
                              <li key={i}>
                                <Link href={link.link}>{link.name}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div
                    className="col-xl-4 col-lg-4 col-md-6 pb-30 wow tpfadeUp"
                    data-wow-duration=".9s"
                    data-wow-delay=".9s"
                  >
                    <div className="tp-footer__widget footer-widget-3 footer-col-3-4">
                      <h4 className="tp-footer__widget-title">
                        Our Newsletter
                      </h4>
                      <div className="tp-footer__input mb-35 p-relative">
                        <form onSubmit={(e) => e.preventDefault()}>
                          <input
                            type="text"
                            placeholder="Business email adress"
                          />
                          <span>
                            <EmailIcon />
                          </span>
                          <button>
                            <RightArrow />
                          </button>
                        </form>
                      </div>
                      <div className="tp-footer__social-3">
                        <h4>Social media</h4>
                        {social_links.map((l, i) => (
                          <Link
                            key={i}
                            href={l.link}
                            target={l.target ? l.target : ""}
                          >
                            <i className={l.icon}></i>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default FooterThree;
