import ServiceIconOne from "../svg/service/service-icon-1";
import ServiceIconTwo from "../svg/service/service-icon-2";
import ServiceIconThree from "../svg/service/service-icon-3";
import ServiceIconFoure from "../svg/service/service-icon-4";

const service_data = [
  {
    id: 1,
    icon: <ServiceIconOne />,
    img: <ServiceIconOne />,
    title: "AI Training",
    bg_img: "/assets/img/card/services/service1.png",
    description: (
      <>
        Practical AI training for teams that want to work faster, smarter, and
        safer.
      </>
    ),
    delay: ".3s",
  },
  {
    id: 2,
    icon: <ServiceIconTwo />,
    img: <ServiceIconTwo />,
    bg_img: "/assets/img/card/services/service2.png",
    title: "AI Consulting",
    description: (
      <>
        End-to-end AI consulting that gives organisations clarity and measurable
        strategy.
      </>
    ),
    delay: ".4s",
  },
  {
    id: 3,
    icon: <ServiceIconThree />,
    img: <ServiceIconThree />,
    bg_img: "/assets/img/card/services/service3.png",
    title: "AI Solutions & Automations",
    description: (
      <>
        Secure, reliable AI-powered automations that optimise workflows and
        reduce admin.
      </>
    ),
    delay: ".5s",
  },
  {
    id: 4,
    icon: <ServiceIconFoure />,
    img: <ServiceIconFoure />,
    bg_img: "/assets/img/card/services/service4.webp",
    title: "AI Coaching",
    description: (
      <>
        Personalised 1:1 coaching that demystifies AI for leaders and
        professionals.
      </>
    ),
    delay: ".6s",
  },
];

export default service_data;
