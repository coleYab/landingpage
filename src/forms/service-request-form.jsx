import React, { useState } from "react";
import NiceSelect from "../ui/nice-select";
import { toast } from "react-toastify";

// Module Data
const modules = [
  {
    id: "mod1",
    title: "Module 1: Foundational AI",
    description: "Understanding what AI is - and isn’t.",
  },
  {
    id: "mod2",
    title: "Module 2: AI for daily productivity",
    description:
      "Hands-on guidance on using AI tools for emails, reports, etc.",
  },
  {
    id: "mod3",
    title: "Module 3: Effective AI Prompting Skills",
    description: "Teaches how to communicate effectively with AI systems.",
  },
  {
    id: "mod4",
    title: "Module 4: AI for Managers and Team Leaders",
    description: "Integrating AI into team processes and operational planning.",
  },
  {
    id: "mod5",
    title: "Module 5: AI for Senior Leaders and Executives",
    description: "Strategic implications for competitiveness and growth.",
  },
  {
    id: "mod6",
    title: "Module 6: Responsible AI: Ethics and Governance",
    description: "Data privacy, bias, transparency, and responsible use.",
  },
  {
    id: "mod7",
    title: "Module 7: AI in Functions: Deep Dives",
    description: "Real use cases in HR, Finance, and Customer Service.",
  },
  {
    id: "mod8",
    title: "Module 8: Change Management for effective AI adoption",
    description: "Prepares organizations for the human side of AI adoption.",
  },
];

const ServiceRequestForm = () => {
  const [serviceType, setServiceType] = useState("AI Training");
  const [selectedModules, setSelectedModules] = useState([]);

  // Theme Color
  const themeColor = "#0b3937";

  const selectHandler = (e) => {
    setServiceType(e.value);
    if (e.value !== "AI Training") {
      setSelectedModules([]);
    }
  };

  const handleModuleChange = (title) => {
    if (selectedModules.includes(title)) {
      setSelectedModules(selectedModules.filter((item) => item !== title));
    } else {
      setSelectedModules([...selectedModules, title]);
    }
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedModules(modules.map((m) => m.title));
    } else {
      setSelectedModules([]);
    }
  };

  const isAllSelected =
    modules.length > 0 && selectedModules.length === modules.length;

  return (
    <>
      {/* Internal CSS for Date Picker Styling */}
      <style>
        {`
          /* Force the browser calendar UI to use your theme color */
          .custom-date-input {
            accent-color: ${themeColor};
            color: ${themeColor};
            font-weight: 500;
          }

          /* Style the calendar icon inside the input (Chrome/Edge/Safari) */
          .custom-date-input::-webkit-calendar-picker-indicator {
            cursor: pointer;
            filter: invert(18%) sepia(31%) saturate(760%) hue-rotate(124deg) brightness(96%) contrast(97%); /* Approximation of #0b3937 */
            opacity: 0.8;
            transform: scale(1.1);
          }

          /* Focus state */
          .custom-date-input:focus {
            border-color: ${themeColor} !important;
            outline: none;
          }

          /* Floating label specific for Date input (Always floats) */
          .date-floating-label {
             top: -10px;
             font-size: 14px;
             background: #fff;
             padding: 0 5px;
             color: ${themeColor};
             left: 20px;
             position: absolute;
             pointer-events: none;
             transition: 0.3s;
          }
        `}
      </style>

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const formData = new FormData(e.target);

          if (serviceType === "AI Training" && selectedModules.length > 0) {
            formData.append("requested_modules", selectedModules.join(", "));
          }

          const response = await fetch("https://formspree.io/f/xjkdkord", {
            method: "POST",
            body: formData,
            headers: { Accept: "application/json" },
          });

          if (response.ok) {
            toast.success("Your request has been sent successfully");
            setSelectedModules([]);
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

          {serviceType === "AI Training" && (
            <div className="col-12 mb-30">
              <div
                className="module-selection-box p-3 border rounded"
                style={{ borderColor: "#e5e5e5" }}
              >
                <h5
                  className="mb-3"
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "#000",
                  }}
                >
                  Select Training Modules
                </h5>

                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="selectAll"
                    checked={isAllSelected}
                    onChange={handleSelectAll}
                    style={{ cursor: "pointer", accentColor: themeColor }}
                  />
                  <label
                    className="form-check-label fw-bold"
                    htmlFor="selectAll"
                    style={{ cursor: "pointer", marginLeft: "8px" }}
                  >
                    Select All Modules
                  </label>
                </div>
                <hr />

                <div
                  className="modules-list"
                  style={{ maxHeight: "300px", overflowY: "auto" }}
                >
                  {modules.map((mod) => (
                    <div key={mod.id} className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={mod.id}
                        value={mod.title}
                        checked={selectedModules.includes(mod.title)}
                        onChange={() => handleModuleChange(mod.title)}
                        style={{ cursor: "pointer", accentColor: themeColor }}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={mod.id}
                        style={{ cursor: "pointer", marginLeft: "8px" }}
                      >
                        <strong>{mod.title}</strong>
                        <p
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px" }}
                        >
                          {mod.description}
                        </p>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Preferred Meeting Date - STYLED */}
          <div className="col-12">
            <div
              className="postbox__comment-input mb-30"
              style={{ position: "relative" }}
            >
              <input
                type="date"
                name="preferred_date"
                className="inputText custom-date-input"
                style={{
                  paddingTop: "15px",
                  color: themeColor,
                }}
                required
              />
              <span className="date-floating-label">
                Preferred Meeting Date
              </span>
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
