import React from "react";
import NiceSelect from "../ui/nice-select";

const ServiceRequestForm = () => {
  const selectHandler = (e) => {};
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} className="box">
        <div className="row gx-20">
          <div className="col-12">
            <div className="postbox__comment-input mb-30">
              <input type="text" className="inputText" required />
              <span className="floating-label">Full Name</span>
            </div>
          </div>
          <div className="col-12">
            <div className="postbox__comment-input mb-30">
              <input type="text" className="inputText" required />
              <span className="floating-label">Your Email</span>
            </div>
          </div>
          <div className="col-12">
            <div className="postbox__comment-input mb-35">
              <input type="text" className="inputText" required />
              <span className="floating-label">Phone Number</span>
            </div>
          </div>
          <div className="col-12">
            <div className="postbox__select mb-30">
              <NiceSelect
                   options={[
                { value: "AI Training", text: "AI Training" },
                { value: "AI Consulting", text: "AI Consulting" },
                { value: "AI Solutions & Automations", text: "AI Solutions & Automations" },
                { value: "AI Coaching", text: "AI Coaching" },
                { value: "Other", text: "Other" },
              ]}
                defaultCurrent={0}
                onChange={selectHandler}
              />
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="postbox__comment-input mb-30">
              <textarea className="textareaText" required></textarea>
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