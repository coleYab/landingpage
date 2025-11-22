import React from "react";
import Link from "next/link";
import Image from "next/image";
import card_img_8 from "../../public/assets/img/card/cardi.avif";

const card_content = {
  card_images: [
    { id: 1, cls: "main-img", data_parallax: "", img: card_img_8 },
    // {
    //   id: 2,
    //   cls: "img-1 d-none d-sm-block",
    //   data_parallax: "",
    //   img: card_img_2,
    // },
    // {
    //   id: 3,
    //   cls: "img-2 d-none d-sm-block",
    //   data_parallax: '{"x": 50, "smoothness": 30}',
    //   img: card_img_3,
    // },
    // {
    //   id: 4,
    //   cls: "img-3 d-none d-sm-block",
    //   data_parallax: '{"x": -50, "smoothness": 30}',
    //   img: card_img_4,
    // },
    // {
    //   id: 5,
    //   cls: "img-4 d-none d-sm-block",
    //   data_parallax: "",
    //   img: card_img_5,
    // },
    // {
    //   id: 6,
    //   cls: "img-5 d-none d-sm-block",
    //   data_parallax: "",
    //   img: card_img_6,
    // },
  ],

  title: <>Ready to bring AI into your organisation the right way?</>,
  description: (
    <>
      Whether you’re starting small or scaling across your entire business,
      we’ll help you move forward with clarity, confidence, and measurable
      value.
      <br />
      {/* <strong>Start Your AI Adoption Journey by completing an AI Maturity Assessment</strong> */}
    </>
  ),
  btn_text: "Book a session",
};

const { card_images, title, description, btn_text } = card_content;

const CardArea = ({ style_service, spacing = "pt-175 pb-185" }) => {
  return (
    <>
      {/* <hr /> */}
      <div
        className={`tp-card-area tp-card-space ${spacing}`}
        style={{
          backgroundColor: "#0b3937",
          color: "#a9fa60",
        }}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-xl-6 col-lg-6 wow tpfadeLeft"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="tp-card-thumb-wrapper p-relative">
                {card_images.map((item, i) => (
                  <div
                    key={i}
                    className={`tp-card-${item.cls}`}
                    data-parallax={item.data_parallax}
                  >
                    <Image src={item.img} alt="theme-pure" />
                  </div>
                ))}
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 wow tpfadeRight"
              data-wow-duration=".9s"
              data-wow-delay=".7s"
            >
              <div className="tp-card-title-box">
                <h3
                  className="tp-section-title-3 pb-15"
                  style={{
                    color: "#a9fa60",
                  }}
                >
                  {title}
                </h3>
                <p
                  className=""
                  style={{
                    color: "#a9fa60",
                    opacity: 0.9,
                  }}
                >
                  {description}
                </p>
                <Link
                  className={`${
                    style_service ? "tp-btn-inner" : "tp-btn-blue-lg"
                  } tp-btn-hover alt-color-black`}
                  href="/new-service"
                  style={{
                    backgroundColor: "#92d25a",
                    borderColor: "white",
                    color: "white",
                  }}
                >
                  <span>{btn_text}</span>
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

export default CardArea;
