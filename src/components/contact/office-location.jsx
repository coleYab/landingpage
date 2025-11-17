import React from 'react';


import img_1 from "@/assets/img/contact/contact-icon-sm-5.png";
import img_2 from "@/assets/img/contact/contact-icon-sm-6.png";
import img_3 from "@/assets/img/contact/contact-icon-sm-7.png";
import Image from 'next/image';
import Link from 'next/link';


// office location data
const office_data = [
    {
        id: 2, 
        cls:"p-relative",
        img: img_2,
        badge: "Main Office",
        location: "France",
        address: <>9 Pearse Street, Kinsale,Cork, <br /> P17 AH66, Ireland</>,
    },
]

const OfficeLocation = () => {
    return (
      <>
        <div className="contact-info-area pb-90">
          <div className="container">
            <div className="row d-flex justify-items-center">
              {office_data.map((item, i) => (
                <div key={i} className="col-xl-4 col-lg-4 mb-30">
                  <div className={`contact-info-item ${item.cls}`}>
                    {item.badge && (
                      <div className="contact-info-badge">
                        <span>Main Office</span>
                      </div>
                    )}
                    <div className="contact-info-img">
                      <Image src={item.img} alt="theme-pure" />
                    </div>
                    <div className="contact-info-title-box">
                      <h5 className="contact-info-title-sm">
                        <Link href="#">{item.location}</Link>
                      </h5>
                      <p>{item.address}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
};

export default OfficeLocation;