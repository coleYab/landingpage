import React, { useState, useMemo } from "react";
import { toast } from "react-toastify";
import {
  CheckCircle2,
  Circle,
  ChevronRight,
  ChevronLeft,
  BarChart3,
  AlertCircle,
  Zap,
  Eye,
  User,
  Clock,
  Target,
  ShieldCheck,
  BookOpen,
  Sparkles,
  Info,
} from "lucide-react";

// --- CUSTOM STYLES & CONSTANTS ---
const BRAND_COLOR = "#0b3937";

const styles = {
  brandText: { color: BRAND_COLOR },
  brandBg: { backgroundColor: BRAND_COLOR, color: "white" },
  brandBorder: { borderColor: BRAND_COLOR },
  brandLightBg: {
    backgroundColor: "rgba(11, 57, 55, 0.08)",
    color: BRAND_COLOR,
  },
  cardHover: { transition: "transform 0.2s, box-shadow 0.2s" },
  activeTab: {
    borderBottom: `3px solid ${BRAND_COLOR}`,
    color: BRAND_COLOR,
    fontWeight: "bold",
    backgroundColor: "rgba(11, 57, 55, 0.05)",
  },
  inactiveTab: {
    borderBottom: "3px solid transparent",
    color: "#6c757d",
  },
  disabledTab: {
    borderBottom: "3px solid transparent",
    color: "#adb5bd",
    cursor: "not-allowed",
  },
  optionSelected: {
    backgroundColor: "rgba(11, 57, 55, 0.05)",
    borderColor: BRAND_COLOR,
    color: BRAND_COLOR,
    fontWeight: "600",
  },
};

// --- DATA STORAGE ---
const QUESTIONS_DATA = [
  {
    id: "q1",
    section: "Strategic Alignment",
    tag: "STRATEGY",
    text: "Is AI part of your overall business or digital transformation strategy?",
  },
  {
    id: "q2",
    section: "Strategic Alignment",
    tag: "LEADERSHIP",
    text: "Do leaders understand AI’s potential impact on your industry?",
  },
  {
    id: "q3",
    section: "Strategic Alignment",
    tag: "GOALS",
    text: "Are AI initiatives clearly linked to business goals and use cases?",
  },
  {
    id: "q4",
    section: "Strategic Alignment",
    tag: "CHAMPION",
    text: "Is someone in leadership actively championing AI adoption?",
  },
  // ... (Truncated for brevity, same data as before)
  {
    id: "q5",
    section: "Technology & Data",
    tag: "DATA QUALITY",
    text: "Do you collect and manage sufficient, high-quality structured data?",
  },
  {
    id: "q6",
    section: "Technology & Data",
    tag: "DATA ACCESS",
    text: "Is your data stored in secure, integrated, and accessible systems?",
  },
  {
    id: "q7",
    section: "Technology & Data",
    tag: "INFRASTRUCTURE",
    text: "Is your IT infrastructure flexible enough to support AI (e.g., cloud, APIs)?",
  },
  {
    id: "q8",
    section: "Technology & Data",
    tag: "EXISTING TOOLS",
    text: "Do you already use automations or analytics tools (e.g., BI dashboards)?",
  },
  {
    id: "q9",
    section: "Culture & Change",
    tag: "ADOPTION",
    text: "Are employees open to learning and adopting new digital tools?",
  },
  {
    id: "q10",
    section: "Culture & Change",
    tag: "EXPERIMENTATION",
    text: "Is experimentation (test-and-learn) encouraged in your organization?",
  },
  {
    id: "q11",
    section: "Culture & Change",
    tag: "RESISTANCE",
    text: 'Are fears or resistance to AI and automations high? (Note: Select "Fully in place" if resistance is LOW)',
  },
  {
    id: "q12",
    section: "Culture & Change",
    tag: "RECOGNITION",
    text: "Do you celebrate small wins and innovation from within teams?",
  },
  {
    id: "q13",
    section: "Skills & Capability",
    tag: "AWARENESS",
    text: "Do staff have a basic understanding of AI tools (e.g., ChatGPT, Copilot)?",
  },
  {
    id: "q14",
    section: "Skills & Capability",
    tag: "TRAINING",
    text: "Have you provided AI-related training or upskilling initiatives?",
  },
  {
    id: "q15",
    section: "Skills & Capability",
    tag: "EXPERIMENTING",
    text: "Are departments (HR, operations, finance, marketing, etc.) experimenting with AI?",
  },
  {
    id: "q16",
    section: "Skills & Capability",
    tag: "SPECIALISTS",
    text: "Do you have (or plan to develop) internal AI champions or specialists?",
  },
  {
    id: "q17",
    section: "Process Readiness",
    tag: "AUTOMATION",
    text: "Are some business processes already automated?",
  },
  {
    id: "q18",
    section: "Process Readiness",
    tag: "DOCUMENTATION",
    text: "Are processes documented and structured enough to apply AI (e.g., SOPs)?",
  },
  {
    id: "q19",
    section: "Process Readiness",
    tag: "EVALUATION",
    text: "Do you regularly evaluate efficiency and performance metrics?",
  },
  {
    id: "q20",
    section: "Process Readiness",
    tag: "PILOTING",
    text: "Have you pilot-tested or experimented with AI use cases?",
  },
];

const SCORES = [
  { value: 0, text: "Not at all in place" },
  { value: 1, text: "Rarely in place" },
  { value: 2, text: "Partially in place" },
  { value: 3, text: "Moderately in place" },
  { value: 4, text: "Substantially in place" },
  { value: 5, text: "Fully in place" },
];

const RECOMMENDATIONS = {
  unprepared: {
    range: "0–39 points",
    title: "AI Unprepared (Very Low Readiness)",
    alertClass: "alert-danger",
    insight:
      "You’re just beginning your AI journey. Cultural readiness, basic digital maturity, and awareness need to be strengthened.",
    steps: [
      "Develop leadership alignment on strategic AI value.",
      "Run internal workshops on AI potential and risks.",
      "Train employees on AI Foundations.",
      "Audit your existing digital systems and gaps.",
      "Identify one non-technical team to experiment with AI.",
    ],
  },
  beginner: {
    range: "40–59 points",
    title: "AI Beginner (Low Readiness)",
    alertClass: "alert-warning",
    insight:
      "You’re showing potential with pockets of readiness, but missing integration across leadership, tech, and culture.",
    steps: [
      "Improve data collection and governance.",
      "Start with low-risk pilots to build confidence.",
      "Invest in staff training and AI literacy.",
      "Assign an “AI Champion” internally to drive momentum.",
      "Begin documenting SOPs for AI-powered workflows.",
    ],
  },
  explorer: {
    range: "60–79 points",
    title: "AI Explorer (Moderately Ready)",
    alertClass: "alert-info",
    insight:
      "You have the infrastructure and cultural openness to begin embedding AI more deeply into operations.",
    steps: [
      "Scale successful pilots across departments.",
      "Address weak spots (e.g., governance, infrastructure).",
      "Prioritize 2–3 high-value AI use cases with measurable ROI.",
      "Build a structured change management approach.",
    ],
  },
  leader: {
    range: "80–100 points",
    title: "AI Leader (Highly Ready)",
    alertClass: "alert-success",
    insight: "Your business is primed to scale AI as a core capability.",
    steps: [
      "Scale AI across multiple functions.",
      "Explore advanced applications (generative AI, predictive models).",
      "Develop an enterprise-wide AI playbook.",
      "Build long-term AI roadmap aligned to innovation strategy.",
    ],
  },
};

// --- COMPONENTS ---

const TabButton = ({
  isActive,
  onClick,
  label,
  count,
  completed,
  disabled,
  isResultTab,
  isStartTab,
  isIntroTab,
}) => {
  let btnStyle = styles.inactiveTab;
  if (isActive) btnStyle = styles.activeTab;
  if (disabled) btnStyle = styles.disabledTab;

  return (
    <button
      onClick={disabled ? undefined : onClick}
      className="btn btn-link text-decoration-none rounded-0 px-4 py-3 d-none d-md-flex align-items-center flex-grow-1 flex-md-grow-0"
      style={btnStyle}
      disabled={disabled}
    >
      <div
        className="rounded-circle d-flex align-items-center justify-content-center me-2"
        style={{
          width: "24px",
          height: "24px",
          fontSize: "0.75rem",
          backgroundColor:
            completed || isResultTab || isStartTab || isIntroTab
              ? BRAND_COLOR
              : "#e9ecef",
          color:
            completed || isResultTab || isStartTab || isIntroTab
              ? "#fff"
              : "#6c757d",
          opacity: disabled ? 0.5 : 1,
        }}
      >
        {isStartTab ? (
          <User size={14} />
        ) : isIntroTab ? (
          <Info size={14} />
        ) : isResultTab ? (
          <BarChart3 size={14} />
        ) : completed ? (
          <CheckCircle2 size={14} />
        ) : (
          count
        )}
      </div>
      <span className="text-nowrap">{label}</span>
    </button>
  );
};

const QuestionCard = ({ question, answer, onAnswer }) => {
  return (
    <div
      className="card shadow-sm border-0 mb-4 animate-fade-in"
      style={{ borderRadius: "12px" }}
    >
      <div className="card-body p-4">
        <div className="d-flex justify-content-between align-items-start mb-4">
          <h5 className="card-title fw-bold text-dark pe-3">{question.text}</h5>
          <span className="badge rounded-pill" style={styles.brandLightBg}>
            {question.tag}
          </span>
        </div>

        <div className="row g-2">
          {SCORES.map((score) => {
            let pointValue = score.value;
            if (question.id === "q11") {
              pointValue = 5 - score.value;
            }
            const isSelected = answer === pointValue;

            return (
              <div key={score.value} className="col-12 col-md-4">
                <div
                  onClick={() => onAnswer(question.id, pointValue)}
                  className="p-3 border rounded d-flex align-items-center h-100"
                  style={{
                    cursor: "pointer",
                    transition: "all 0.2s",
                    ...(isSelected
                      ? styles.optionSelected
                      : {
                          backgroundColor: "#fff",
                          borderColor: "#dee2e6",
                        }),
                  }}
                >
                  <div className="me-2 d-flex align-items-center">
                    {isSelected ? (
                      <CheckCircle2 size={20} color={BRAND_COLOR} />
                    ) : (
                      <Circle size={20} className="text-muted" />
                    )}
                  </div>
                  <small className={isSelected ? "fw-bold" : "text-muted"}>
                    {score.text}
                  </small>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// --- 1. DATA CAPTURE COMPONENT (Step 0) ---
const DataCaptureForm = ({ onSubmit, savedData }) => {
  const [formData, setFormData] = useState({
    name: savedData?.name || "",
    email: savedData?.email || "",
    company: savedData?.company || "",
  });
  const [validationError, setValidationError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setValidationError(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setValidationError(
        "Name and Email are required to start the assessment."
      );
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setValidationError("Please enter a valid email address.");
      return;
    }
    onSubmit(formData);
  };

  return (
    <div className="card border-0 animate-fade-in p-2 p-md-4">
      <div className="card-body">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3" style={styles.brandText}>
            Let's Get Started
          </h2>
          <p className="lead text-secondary">
            Tell us a little about yourself so we can personalize your AI
            readiness report.
          </p>
        </div>

        {validationError && (
          <div
            className="alert alert-danger d-flex align-items-center mb-4 rounded-3"
            role="alert"
          >
            <AlertCircle className="me-2 flex-shrink-0" size={20} />
            <div>{validationError}</div>
          </div>
        )}

        <div className="tp-contact-input-wrapper p-relative">
          <form onSubmit={handleSubmit} className="box">
            <div className="row gx-20">
              <div className="col-12">
                <div className="postbox__comment-input mb-30">
                  <input
                    type="text"
                    className="inputText"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
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
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      borderColor: "#0b3937",
                      color: "#0b3937",
                    }}
                  />
                  <span className="floating-label">Work Email</span>
                </div>
              </div>
              <div className="col-12">
                <div className="postbox__comment-input mb-30">
                  <input
                    type="text"
                    className="inputText"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    style={{
                      borderColor: "#0b3937",
                      color: "#0b3937",
                    }}
                  />
                  <span className="floating-label">
                    Company Name (Optional)
                  </span>
                </div>
              </div>
              <div className="col-xxl-12">
                <div className="postbox__btn-box w-100 d-flex justify-content-center">
                  <button
                    className="submit-btn px-5 rounded-pill d-flex align-items-center"
                    type="submit"
                  >
                    Next Step <ChevronRight className="ms-2" size={18} />
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// --- 2. NEW ASSESSMENT INTRO COMPONENT (Step 1) ---
const AssessmentIntro = ({ onStart, onBack, userName }) => {
  return (
    <div className="card border-0 animate-fade-in p-4 p-md-5">
      <div className="card-body">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3" style={styles.brandText}>
            Welcome, {userName || "Guest"}!
          </h2>
          <p className="lead text-secondary">
            You are about to evaluate your organization's AI Maturity.
          </p>
        </div>

        <div className="row g-4 mb-5">
          <div className="col-md-6">
            <div
              className="p-4 rounded-4 h-100 border"
              style={{ backgroundColor: "#f8f9fa" }}
            >
              <div
                className="d-flex align-items-center mb-3"
                style={styles.brandText}
              >
                <Target size={24} className="me-2" />
                <h5 className="fw-bold mb-0">What We Measure</h5>
              </div>
              <p className="text-muted small mb-0">
                We analyze 5 key pillars: Strategy, Leadership, Data
                Infrastructure, Corporate Culture, and Skills Readiness.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="p-4 rounded-4 h-100 border"
              style={{ backgroundColor: "#f8f9fa" }}
            >
              <div
                className="d-flex align-items-center mb-3"
                style={styles.brandText}
              >
                <Sparkles size={24} className="me-2" />
                <h5 className="fw-bold mb-0">What You Get</h5>
              </div>
              <p className="text-muted small mb-0">
                A customized readiness score out of 100, a maturity
                classification (e.g., "Explorer"), and a tailored action plan.
              </p>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center gap-4 text-muted my-5">
          <div className="d-flex align-items-center">
            <Clock size={18} className="me-2" /> 2-3 Minutes
          </div>
          <div className="d-flex align-items-center">
            <BookOpen size={18} className="me-2" /> 20 Questions
          </div>
          <div className="d-flex align-items-center">
            <ShieldCheck size={18} className="me-2" /> Private Data
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 border-top pt-4">
          <button
            onClick={onBack}
            className="btn btn-outline-secondary btn-lg fw-bold rounded-pill"
          >
            Edit Details
          </button>
          <button
            onClick={onStart}
            className="btn btn-dark btn-lg fw-bold d-flex align-items-center justify-content-center shadow rounded-pill"
            style={{ backgroundColor: "#0b3937" }}
          >
            Start Assessment <ChevronRight size={20} className="ms-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

// --- 3. RESULT COMPONENT ---
const ResultCard = ({ result, totalScore, userData, onRestart }) => {
  if (!result) return null;

  const handleStartNow = async () => {
    const data = {
      name: userData.name,
      email: userData.email,
      company: userData.company || "Unknown Company",
      message: "Wants to level up after AI assessment",
      service: "AI Assessment Follow-Up",
      totalScore,
      recommendationTitle: result.title,
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      toast.success("Your request has been sent successfully");
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className={`mt-0 card border-0 shadow-lg animate-fade-in`}>
      <div className={`card-header p-4 bg-white border-bottom`}>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div>
            <p className="text-uppercase text-muted fw-bold small mb-1">
              Assessment Report For:{" "}
              <span className="text-dark">{userData?.name || "Guest"}</span>
            </p>
            <div className="d-flex align-items-baseline">
              <span className="display-4 fw-bold text-dark">{totalScore}</span>
              <span className="h4 text-muted ms-2">/ 100</span>
            </div>
          </div>

          <div
            className={`alert ${result.alertClass} mt-3 mt-md-0 mb-0 text-center text-md-end px-5 py-3 rounded-5`}
          >
            <h3 className="alert-heading fw-bold mb-0">{result.title}</h3>
            <p className="mb-0 small fw-bold">{result.range}</p>
          </div>
        </div>
      </div>

      <div className="card-body p-4 p-md-5">
        <div className="mb-5">
          <h5
            className="fw-bold mb-3 d-flex align-items-center"
            style={styles.brandText}
          >
            <BarChart3 size={24} className="me-2" /> Key Insight
          </h5>
          <p className="lead text-secondary">{result.insight}</p>
        </div>

        <div>
          <h5
            className="fw-bold mb-3 d-flex align-items-center"
            style={styles.brandText}
          >
            <CheckCircle2 size={24} className="me-2" /> Recommended Next Steps
          </h5>

          <div className="list-group list-group-flush mb-4">
            {result.steps.map((step, idx) => (
              <div
                key={idx}
                className="list-group-item bg-light border-0 mb-2 rounded d-flex align-items-start p-3"
              >
                <span
                  className="badge rounded-pill me-3 d-flex align-items-center justify-content-center"
                  style={{
                    backgroundColor: "#e9ecef",
                    color: "#495057",
                    width: "24px",
                    height: "24px",
                    flexShrink: 0,
                  }}
                >
                  {idx + 1}
                </span>

                <span className="text-dark fw-medium">{step}</span>
              </div>
            ))}
          </div>
          <div className="d-flex flex-column flex-sm-row justify-content-center pt-4 border-top gap-3">
            <button
              onClick={handleStartNow}
              className="btn btn-dark btn-lg fw-bold d-flex align-items-center justify-content-center shadow rounded-pill"
              style={{
                backgroundColor: "#0b3937",
              }}
            >
              <Zap size={20} className="me-2" /> Level Up With Axonova
            </button>
            <button
              onClick={onRestart}
              className="btn btn-outline-secondary btn-lg fw-bold rounded-pill"
            >
              Start Over
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function AssesmentProblems() {
  const [answers, setAnswers] = useState({});
  // Step 0 = User Info
  // Step 1 = Intro / Overview
  // Step 2..N = Questions
  // Step Last = Results
  const [activeTab, setActiveTab] = useState(0);
  const [capturedData, setCapturedData] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [showResults, setShowResults] = useState(false);

  // Derive sections uniquely from data
  const sections = useMemo(() => {
    return [...new Set(QUESTIONS_DATA.map((q) => q.section))];
  }, []);

  // --- TAB INDICES ---
  const TAB_INFO = 0;
  const TAB_INTRO = 1; // New Step
  const TAB_FIRST_QUESTION = 2; // Shifted by 1
  const TAB_RESULTS = sections.length + 2;

  const totalScore = Object.values(answers).reduce(
    (acc, curr) => acc + curr,
    0
  );

  const totalQuestions = QUESTIONS_DATA.length;
  const answeredCount = Object.keys(answers).length;
  const progress = (answeredCount / totalQuestions) * 100;

  // Determine Current View
  const isInfoTab = activeTab === TAB_INFO;
  const isIntroTab = activeTab === TAB_INTRO;
  const isResultsTab = activeTab === TAB_RESULTS;

  // Since activeTab 2 corresponds to section index 0
  const currentSectionIndex = activeTab - 2;
  const currentSectionName =
    currentSectionIndex >= 0 && currentSectionIndex < sections.length
      ? sections[currentSectionIndex]
      : null;

  const currentQuestions = currentSectionName
    ? QUESTIONS_DATA.filter((q) => q.section === currentSectionName)
    : [];

  const handleAnswer = (questionId, value) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
    if (errorMsg) setErrorMsg(null);
  };

  const getRecommendation = (score) => {
    if (score >= 80) return RECOMMENDATIONS.leader;
    if (score >= 60) return RECOMMENDATIONS.explorer;
    if (score >= 40) return RECOMMENDATIONS.beginner;
    return RECOMMENDATIONS.unprepared;
  };

  // STEP 1: Handle Info Form Submit -> Go to Intro
  const handleInfoSubmit = (data) => {
    setCapturedData(data);
    setActiveTab(TAB_INTRO);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // STEP 2: Handle Intro Start -> Go to First Question
  const handleStartAssessment = () => {
    setActiveTab(TAB_FIRST_QUESTION);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // STEP 3: Handle Final Calculation
  const finishAssessment = async () => {
    if (answeredCount < totalQuestions) {
      setErrorMsg(
        `You have answered ${answeredCount} out of ${totalQuestions} questions. Please complete all sections.`
      );
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const recommendation = getRecommendation(totalScore);

    try {
      // Mock API call
      await fetch("/api/assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          answers,
          totalScore,
          recommendationTitle: recommendation.title,
          userData: capturedData,
          name: capturedData?.name,
          email: capturedData?.email,
        }),
      });
    } catch (error) {
      console.error("Failed to persist assessment results", error);
    }

    setShowResults(true);
    setActiveTab(TAB_RESULTS);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isSectionComplete = (sectionName) => {
    const sectionQIds = QUESTIONS_DATA.filter(
      (q) => q.section === sectionName
    ).map((q) => q.id);
    return sectionQIds.every((id) => answers[id] !== undefined);
  };

  const handleRestart = () => {
    setAnswers({});
    setShowResults(false);
    setCapturedData(null);
    setActiveTab(TAB_INFO);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style>
        {`
          .bg-brand { background-color: ${BRAND_COLOR} !important; }
          .text-brand { color: ${BRAND_COLOR} !important; }
          .btn-brand { background-color: ${BRAND_COLOR}; color: white; border: none; }
          .btn-brand:hover { background-color: #082d2b; color: white; }
          .progress-bar-brand { background-color: ${BRAND_COLOR}; }
          
          .tabs-container {
            overflow-x: auto;
            white-space: nowrap;
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .tabs-container::-webkit-scrollbar {
            display: none;
          }
          
          .animate-fade-in {
            animation: fadeIn 0.5s ease-in-out;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      <div className="min-vh-100 bg-light pb-5 font-sans">
        {/* Header */}
        <header className="bg-white border-bottom sticky-top shadow-sm z-3">
          <div className="container py-4">
            <div className="row align-items-center gy-3">
              <div className="col-md-8">
                <p className="text-secondary mb-0 small">
                  Evaluate your strategic, technical, and cultural readiness.
                </p>
              </div>
            </div>

            {/* Progress Bar (Only show if we have past the intro tab) */}
            <div className="mt-4">
              <div className="d-flex justify-content-between small fw-bold text-secondary mb-1">
                <span>Progress</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="progress" style={{ height: "8px" }}>
                <div
                  className="progress-bar progress-bar-brand transition-all"
                  role="progressbar"
                  style={{
                    width: `${progress}%`,
                    transition: "width 0.5s ease",
                  }}
                  aria-valuenow={progress}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="border-top mt-3 d-none d-md-block">
            <div className="d-flex px-0 px-md-3 justify-content-center">
              <div className="d-flex tabs-container">
                {/* 1. START TAB */}
                <TabButton
                  key="Your Details"
                  label="Your Details"
                  isActive={activeTab === TAB_INFO}
                  onClick={() => {
                    setActiveTab(TAB_INFO);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  completed={capturedData !== null}
                  isStartTab={true}
                  disabled={false}
                />

                {/* 2. OVERVIEW TAB (NEW) */}
                <TabButton
                  key="Overview"
                  label="Overview"
                  isActive={activeTab === TAB_INTRO}
                  onClick={() => {
                    if (capturedData) {
                      setActiveTab(TAB_INTRO);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  completed={activeTab > TAB_INTRO}
                  isIntroTab={true}
                  disabled={!capturedData}
                />

                {/* 3. QUESTION SECTIONS */}
                {sections.map((section, idx) => {
                  const sectionTabIdx = idx + 2; // Offset by 2 (Details + Intro)
                  return (
                    <TabButton
                      key={section}
                      label={section}
                      isActive={activeTab === sectionTabIdx}
                      onClick={() => {
                        if (capturedData) {
                          setActiveTab(sectionTabIdx);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                      }}
                      count={idx + 1}
                      completed={isSectionComplete(section)}
                      disabled={!capturedData}
                    />
                  );
                })}

                {/* 4. RESULTS TAB */}
                <TabButton
                  key="Results"
                  label="Results"
                  isActive={activeTab === TAB_RESULTS}
                  onClick={() => {
                    if (showResults) {
                      setActiveTab(TAB_RESULTS);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  isResultTab={true}
                  disabled={!showResults}
                />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container py-5">
          {errorMsg && (
            <div
              className="alert alert-danger d-flex align-items-start animate-fade-in"
              role="alert"
            >
              <AlertCircle className="me-2 flex-shrink-0" size={24} />
              <div>
                <h6 className="alert-heading fw-bold mb-1">
                  Incomplete Assessment
                </h6>
                <p className="mb-0 small">{errorMsg}</p>
              </div>
            </div>
          )}

          {isInfoTab ? (
            /* --- TAB 0: USER INFO FORM --- */
            <DataCaptureForm
              onSubmit={handleInfoSubmit}
              savedData={capturedData}
            />
          ) : isIntroTab ? (
            /* --- TAB 1: INTRO / OVERVIEW --- */
            <AssessmentIntro
              onStart={handleStartAssessment}
              onBack={() => setActiveTab(TAB_INFO)}
              userName={capturedData?.name}
            />
          ) : isResultsTab ? (
            /* --- TAB LAST: RESULTS --- */
            <ResultCard
              result={getRecommendation(totalScore)}
              totalScore={totalScore}
              userData={capturedData}
              onRestart={handleRestart}
            />
          ) : (
            /* --- TABS 2-N: QUESTIONS --- */
            <div className="animate-fade-in">
              <div className="mb-4 d-flex align-items-center">
                <span
                  className="badge rounded me-2 d-flex align-items-center justify-content-center"
                  style={{ width: "28px", height: "28px", ...styles.brandBg }}
                >
                  {/* Current Section Number (activeTab - 1 effectively) */}
                  {activeTab - 1}
                </span>
                <div>
                  <h4 className="fw-bold mb-0 text-dark">
                    {currentSectionName}
                  </h4>
                </div>
              </div>

              {currentQuestions.map((q) => (
                <QuestionCard
                  key={q.id}
                  question={q}
                  answer={answers[q.id]}
                  onAnswer={handleAnswer}
                />
              ))}

              {/* Navigation Buttons for Question Area Only */}
              <div className="d-flex flex-column flex-sm-row justify-content-between gap-3 pt-4 border-top mt-5">
                <button
                  onClick={() => {
                    // Go back to previous. If current is 2 (First Q), go to 1 (Intro).
                    setActiveTab((prev) => Math.max(0, prev - 1));
                    window.scrollTo({ top: 100, behavior: "smooth" });
                  }}
                  className="btn btn-outline-secondary btn-lg fw-bold d-flex align-items-center justify-content-center rounded-pill"
                >
                  <ChevronLeft size={20} className="me-2" /> Previous
                </button>

                {activeTab < sections.length + 1 ? (
                  <button
                    onClick={() => {
                      setActiveTab((prev) => prev + 1);
                      window.scrollTo({ top: 100, behavior: "smooth" });
                    }}
                    className="btn btn-brand btn-lg fw-bold d-flex align-items-center justify-content-center rounded-pill"
                  >
                    Next Section <ChevronRight size={20} className="ms-2" />
                  </button>
                ) : (
                  <button
                    onClick={finishAssessment}
                    className="btn btn-dark btn-lg fw-bold d-flex align-items-center justify-content-center shadow rounded-pill"
                    style={{
                      backgroundColor: "#0b3937",
                    }}
                  >
                    <Eye size={20} className="me-2" /> View Results
                  </button>
                )}
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
}
