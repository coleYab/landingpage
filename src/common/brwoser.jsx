import Image from "next/image";
import Link from "next/link";
import React from "react";

// import img_1 from "../../public/assets/img/hero/browser-icon-1.png";
// import img_2 from "../../public/assets/img/hero/browser-icon-2.png";
// import img_3 from "../../public/assets/img/hero/browser-icon-3.png";
// import img_4 from "../../public/assets/img/hero/browser-icon-4.png";

import img_1 from "../../public/assets/img/hero/browsers/gpt.svg";
import img_2 from "../../public/assets/img/hero/browsers/claude.svg";
import img_3 from "../../public/assets/img/hero/browsers/gemini.svg";
import img_4 from "../../public/assets/img/hero/browsers/grok.svg";
import img_5 from "../../public/assets/img/hero/browsers/runway.svg";

// import img_1 from "../../public/assets/img/hero/browser-icon-1.png";
// import img_2 from "../../public/assets/img/hero/browser-icon-2.png";
// import img_3 from "../../public/assets/img/hero/browser-icon-3.png";
// import img_4 from "../../public/assets/img/hero/browser-icon-4.png";
// import img_5 from "../../public/assets/img/hero/browser-icon-5.png";

const ai_tools_data = [
  { img: img_1, title: "ChatGPT", link: "https://chat.openai.com" },
  { img: img_2, title: "Claude", link: "https://claude.ai" },
  // { img: img_3, title: "Gemini", link: "https://gemini.google.com" },
  { img: img_4, title: "Midjourney", link: "https://www.midjourney.com" },
  { img: img_5, title: "RunwayML", link: "https://runwayml.com" },
];

const Brwoser = () => {
  return (
    <>
      {ai_tools_data.map((item, i) => (
        <div key={i} className="tp-hero-browser-item">
          <Link href={item.link} target="_blank">
            <Image src={item.img} width={80} height={80} alt="them-pure" />
          </Link>
          {/* <p className="d-none d-sm-block">{item.title}</p> */}
        </div>
      ))}
    </>
  );
};

export default Brwoser;
