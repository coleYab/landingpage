import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

// images import 
import about_img_1 from "@/assets/img/about/about-bg-shape.png"
import about_img_2 from "@/assets/img/about/about-2.jpg"
import about_img_3 from "@/assets/img/about/about-1.jpg"
import about_img_4 from "@/assets/img/about/about-3.jpg"
import about_img_5 from "@/assets/img/about/about-5.png"

// about data
const about_data =[
    { id: 1, cls: "bg-shape", img: about_img_1 },
    { id: 2, cls: "main-img z-index", img: about_img_2 },
    { id: 3, cls: "sub-img-1 d-none d-sm-block z-index-3", img: about_img_3 },
    { id: 4, cls: "sub-img-2 d-none d-sm-block", img: about_img_4 },
    { id: 5, cls: "sub-img-3 d-none d-sm-block z-index-3", img: about_img_5 },
]

// about content
const about_content = {
    title: "OUR MISSION",
    sub_title: "Making AI Practical, Safe, and Valuable",
    des: (
        <>
            At Axonova Consulting, our mission is to make AI practical, safe, and valuable for every organisation. 
            We empower people to work smarter, decide faster, and deliver their best work with confidence.<br />
            Our approach bridges the gap between AI potential and everyday practicality, ensuring AI adoption is simple, intuitive, and aligned with real business needs.<br />
            Here’s what drives us every day:
        </>
    ),
    about_list: [
        "Empower teams with practical AI skills that deliver real results.",
        "Ensure safe and responsible AI adoption with embedded governance and ethical practices.",
        "Tailor AI solutions and guidance to fit your organisation's workflows, roles, and industry.",
        "Provide end-to-end support from strategy and training to automation and coaching.",
        "Deliver measurable business impact through time savings, efficiency gains, and ROI tracking.",
        "Simplify complexity, making AI understandable and actionable for everyone.",
        "Build long-term AI adoption strategies that are scalable and sustainable.",
    ],
    btn_text: "Learn More About Axonova",
}

const AboutArea = () => {
    const { title, sub_title, des, about_list, btn_text } = about_content;

    return (
        <div className="tp-about__area tp-about__pt-pb pt-100 pb-160">
            <div className="container">
                <div className="row align-items-center">
                    {/* Uncomment this if you want to show images */}
                    {/* <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".2s">
                        <div className="tp-about__img-wrapper text-center text-lg-end p-relative">
                            {about_data.map((item) => (
                                <div key={item.id} className={`tp-about__${item.cls}`}>
                                    <Image src={item.img} alt="theme-pure" />
                                </div>
                            ))}
                        </div>
                    </div> */}
                    <div className="col-12 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".6s">
                        <div className="tp-about__right">
                            <div className="tp-about__section-box">
                                <h4 className="tp-section-subtitle">{title}</h4>
                                <h3 className="tp-section-title mb-15">{sub_title}</h3>
                                <p>{des}</p>
                            </div>
                            <div className="tp-about__list">
                                <ul>
                                    {about_list.map((item, i) => (
                                        <li key={i}>
                                            <i className="fal fa-check"></i>
                                            <span className="ml-2">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="tp-about__btn d-flex align-items-center w-100 justify-content-center mt-4">
                                <Link className="tp-btn tp-btn-hover alt-color-black" href="/about">
                                    <span>{btn_text}</span>
                                    <b></b>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutArea;
