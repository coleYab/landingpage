import useSticky from "@/hooks/use-sticky";
import Offcanvus from "@/common/offcanvus";
import Link from "next/link";
import React, { useState } from "react";
import NavMenu from "./nav-menu";
import Image from "next/image";

import logo from "@/assets/img/logo/logo-white.png";
import logosmall from "@/assets/img/logo/logo-small.png";

const HeaderThree = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <header className="tp-header-height">
        <div
          id="header-sticky"
          style={{
            paddingRight: "30px",
            background: "white",
          }}
          className={`header-bottom__area header__space header-sticky-bg-2 z-index-5 header-sticky`}
        >
          <div
            className=""
            style={{ paddingLeft: "30px", paddingRight: "30px" }}
          >
            <div className="row align-items-center justify-content-lg-evenly justify-content-between">
              <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-2">
                <div className="header-bottom__logo">
                  <Link href="/">
                    <Image src={logo} alt="" className="d-none d-lg-block" />
                    <Image src={logosmall} alt="" className="d-lg-none" />
                  </Link>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 d-none d-lg-block">
                <div className="header-bottom__main-menu header-bottom__main-menu-3">
                  <nav id="mobile-menu">
                    <NavMenu />
                  </nav>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-2">
                <div className="header-bottom__right d-flex align-items-center justify-content-start">
                  <div className="header-bottom__btn d-flex align-items-center">
                    <Link
                      className="tp-btn-blue-sm d-none d-md-inline-block tp-btn-hover alt-color-black"
                      href="/new-service"
                    >
                      Contact Us
                    </Link>
                    <Link
                      className="tp-btn-blue-sm d-none d-lg-inline-block d-md-none tp-btn-hover alt-color-black"
                      style={{
                        paddingLeft: "15px",
                        paddingRight: "15px",
                        backgroundColor: "#80bb4c",
                      }}
                      href="/assesment"
                    >
                      Assess your AI readiness
                    </Link>
                    <a
                      className="header-bottom__bar tp-menu-bar d-lg-none"
                      onClick={() => setSidebarOpen(true)}
                    >
                      <i className="fal fa-bars"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Offcanvus sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </>
  );
};

export default HeaderThree;
