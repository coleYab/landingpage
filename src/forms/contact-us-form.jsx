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
          const data = Object.fromEntries(formData.entries());

          const response = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });

          if (response.ok) {
            toast.success("Your request has been sent successfully");
            e.target.reset();
          } else {
            toast.error("Something went wrong");
          }
        }}
        // method="POST"
        // action="https://formspree.io/f/xjkdkord"
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
              <button className="submit-btn w-100">Get in touch</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactUsForm;
