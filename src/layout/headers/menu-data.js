const menu_data = [
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: "About",
    link: "/about",
    active: "",
  },
  {
    id: 3,
    mega_menu: false,
    has_dropdown: true,
    title: "Services",
    link: "/service-details",
    active: "",
    sub_menus: [
      { link: "/service-details", title: "AI Training" },
      { link: "/service-details", title: "AI Consulting" },
      { link: "/service-details", title: "AI Automations" },
      { link: "/service-details", title: "AI Coaching" },
    ],
  },
  // {
  //   id: 4,
  //   mega_menu: false,
  //   has_dropdown: false,
  //   title: "Blog",
  //   link: "/blog",
  //   active: "",
  // },
  {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title: "Contact",
    link: "/contact",
    active: "",
  },
];
export default menu_data;
