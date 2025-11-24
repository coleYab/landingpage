import React, { useState } from "react";
import NiceSelect from "../ui/nice-select";
import { toast } from "react-toastify";

const ServiceRequestForm = () => {
  const selectHandler = (e) => {
    setServiceType(e.value);
  };
  const [serviceType, setServiceType] = useState("AI Training");
  return (
    <>
      <form
        // action="https://formspree.io/f/xjkdkord"
        // method="POST"
        onSubmit={async (e) => {
          e.preventDefault();
          const formData = new FormData(e.target);

          const response = await fetch("https://formspree.io/f/xjkdkord", {
            method: "POST",
            body: formData,
            headers: { Accept: "application/json" },
          });

          if (response.ok) {
            toast.success("Your request has been sent successfully");
          } else {
            toast.error("Something went wrong");
          }
        }}
        className="box"
      >
        <div className="row gx-20">
          <div className="col-12">
            <div className="postbox__comment-input mb-30">
              <input type="text" name="name" className="inputText" required />
              <span className="floating-label">Full Name</span>
            </div>
          </div>
          <div className="col-12">
            <div className="postbox__comment-input mb-30">
              <input type="email" name="email" className="inputText" required />
              <span className="floating-label">Your Email</span>
            </div>
          </div>
          <div className="col-12">
            <div className="postbox__comment-input mb-35">
              <input type="tel" name="phone" className="inputText" required />
              <span className="floating-label">Phone Number</span>
            </div>
          </div>
          <div className="col-12">
            <div className="postbox__select mb-30">
              <input type="hidden" name="service" value={serviceType} />
              <NiceSelect
                options={[
                  { value: "AI Training", text: "AI Training", id: 0 },
                  { value: "AI Consulting", text: "AI Consulting", id: 1 },
                  {
                    value: "AI Solutions & Automations",
                    text: "AI Solutions & Automations",
                    id: 2,
                  },
                  { value: "AI Coaching", text: "AI Coaching", id: 3 },
                  { value: "Other", text: "Other", id: 4 },
                ]}
                defaultCurrent={0}
                onChange={selectHandler}
              />
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="postbox__comment-input mb-30">
              <textarea
                className="textareaText"
                name="message"
                required
              ></textarea>
              <span className="floating-label-2">Message...</span>
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="postbox__btn-box">
              <button className="submit-btn w-100">Send your Request</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ServiceRequestForm;
