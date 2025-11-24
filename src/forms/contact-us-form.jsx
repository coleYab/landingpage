import React from "react";
import NiceSelect from "../ui/nice-select";
import { toast } from "react-toastify";

const ContactUsForm = () => {
  const selectHandler = (e) => {};
  return (
    <>
      <form
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
              <input
                type="text"
                className="inputText"
                name="name"
                required
                style={{
                  borderColor: "#0b3937",
                  color: "#0b3937",
                }}
              />
              <span className="floating-label">Full Name</span>
            </div>
          </div>
          <div className="col-12">
            <div className="postbox__comment-input mb-30">
              <input
                type="email"
                className="inputText"
                name="email"
                required
                style={{
                  borderColor: "#0b3937",
                  color: "#0b3937",
                }}
              />
              <span className="floating-label">Your Email</span>
            </div>
          </div>
          {/* <div className="col-12">
            <div className="postbox__comment-input mb-35">
              <input
                type="text"
                className="inputText"
                required
                style={{
                  borderColor: "#0b3937",
                  color: "#0b3937",
                }}
              />
              <span className="floating-label">Phone Number</span>
            </div>
          </div> */}
          {/* <div className="col-12">
            <div className="postbox__select mb-30">
              <NiceSelect
                options={[
                  { value: "Your Inquiry about", text: "Your Inquiry about" },
                  { value: "01 Year", text: "01 Year" },
                  { value: "02 Year", text: "02 Year" },
                  { value: "03 Year", text: "03 Year" },
                  { value: "04 Year", text: "04 Year" },
                  { value: "05 Year", text: "05 Year" },
                ]}
                defaultCurrent={0}
                onChange={selectHandler}
              />
            </div>
          </div> */}
          <div className="col-xxl-12">
            <div className="postbox__comment-input mb-30">
              <textarea
                name="message"
                className="textareaText"
                required
                style={{
                  borderColor: "#0b3937",
                  color: "#0b3937",
                }}
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

export default ContactUsForm;
