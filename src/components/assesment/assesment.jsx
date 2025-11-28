import React, { useState, useMemo } from "react";
import {
  CheckCircle2,
  Circle,
  ChevronRight,
  ChevronLeft,
  Calculator,
  BarChart3,
  AlertCircle,
  RotateCcw,
} from "lucide-react";
import { Zap } from "lucide-react";
import { Eye } from "lucide-react";

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
    text: "Do you already use automation or analytics tools (e.g., BI dashboards)?",
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
    text: 'Are fears or resistance to AI and automation high? (Note: Select "Fully in place" if resistance is LOW)',
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
      "Run internal workshops on AI potential and risks to build awareness.",
      "Train employees on AI Foundations.",
      "Audit your existing digital systems and gaps.",
      "Identify one non-technical team to experiment with AI (e.g. HR, marketing).",
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
      "Address weak spots (e.g., governance, infrastructure, staff skills).",
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
      "Explore advanced applications (generative AI, predictive models, automation).",
      "Develop an enterprise-wide AI playbook.",
      "Build long-term AI roadmap aligned to innovation or product strategy.",
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
}) => {
  let btnStyle = styles.inactiveTab;
  if (isActive) btnStyle = styles.activeTab;
  if (disabled) btnStyle = styles.disabledTab;

  return (
    <button
      onClick={disabled ? undefined : onClick}
      // Added d-md-flex to ensure it only appears on medium+ screens as a flex item
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
          backgroundColor: completed || isResultTab ? BRAND_COLOR : "#e9ecef",
          color: completed || isResultTab ? "#fff" : "#6c757d",
          opacity: disabled ? 0.5 : 1,
        }}
      >
        {isResultTab ? (
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
      className="card shadow-sm border-0 mb-4"
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
            // Q11 Logic: "Are fears or resistance to AI and automation high?"
            // We want LOW resistance (0) to map to a HIGH score (5).
            // Original Score 0 (Not at all high) -> pointValue 5
            // Original Score 5 (Fully high) -> pointValue 0
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
                      : { backgroundColor: "#fff", borderColor: "#dee2e6" }),
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

const ResultCard = ({ result, totalScore, onRestart }) => {
  if (!result) return null; // Function to handle the "Start Now" action (you'd replace this with actual routing or logic)

  const handleStartNow = () => {
    alert(
      `Redirecting you to the "${result.title}" action plan page for the next steps!`
    ); // In a real app, you would use: // navigate('/start-ai-journey/' + result.title.replace(/\s/g, '-'));
  };

  return (
    <div className={`mt-0 card border-0 shadow-lg animate-fade-in`}>
      <div className={`card-header p-4 bg-white border-bottom`}>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div>
            <p className="text-uppercase text-muted fw-bold small mb-1">
              Total Readiness Score
            </p>

            <div className="d-flex align-items-baseline">
              <span className="display-4 fw-bold text-dark">{totalScore}</span>
              <span className="h4 text-muted ms-2">/ 100</span>
            </div>
          </div>

          <div
            // UPDATED: Changed rounded-4 to rounded-5 for a deeper curve on the result alert box
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
              // UPDATED: Added rounded-pill for full rounded button
              className="btn btn-dark btn-lg fw-bold d-flex align-items-center justify-content-center shadow rounded-pill"
              style={{
                backgroundColor: "#0b3937",
              }}
            >
              <Zap size={20} className="me-2" /> Level Up With Axonova
            </button>
            {/* <button
              onClick={onRestart}
              // UPDATED: Added rounded-pill for full rounded button
              className="btn btn-outline-secondary btn-lg fw-bold d-flex align-items-center justify-content-center rounded-pill"
            >
              <RotateCcw size={16} className="me-2" />
              Restart Assessment
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function AssesmentProblems() {
  const [answers, setAnswers] = useState({});
  const [activeTab, setActiveTab] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  // Derive sections uniquely from data
  const sections = useMemo(() => {
    return [...new Set(QUESTIONS_DATA.map((q) => q.section))];
  }, []);

  const totalScore = Object.values(answers).reduce(
    (acc, curr) => acc + curr,
    0
  );

  const totalQuestions = QUESTIONS_DATA.length;
  const answeredCount = Object.keys(answers).length;
  const progress = (answeredCount / totalQuestions) * 100;

  // Determine if we are on the results tab
  const isResultsTab = activeTab === sections.length;
  const currentSectionName = isResultsTab
    ? "Assessment Results"
    : sections[activeTab];

  const currentQuestions = isResultsTab
    ? []
    : QUESTIONS_DATA.filter((q) => q.section === currentSectionName);

  const handleAnswer = (questionId, value) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
    if (errorMsg) setErrorMsg(null);
  };

  const calculateResult = () => {
    if (answeredCount < totalQuestions) {
      setErrorMsg(
        `You have answered ${answeredCount} out of ${totalQuestions} questions. Please complete all sections to get an accurate report.`
      );
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setShowResults(true);
    // Switch to the results tab (which is index = sections.length)
    setActiveTab(sections.length);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getRecommendation = (score) => {
    if (score >= 80) return RECOMMENDATIONS.leader;
    if (score >= 60) return RECOMMENDATIONS.explorer;
    if (score >= 40) return RECOMMENDATIONS.beginner;
    return RECOMMENDATIONS.unprepared;
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
    setActiveTab(0);
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
          
          /* Custom Scrollbar for tabs on mobile */
          .tabs-container {
            overflow-x: auto;
            white-space: nowrap;
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
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
                {/* <h1 className="fw-bold mb-1" style={styles.brandText}>
                  AI Readiness Assessment
                </h1> */}
                <p className="text-secondary mb-0 small">
                  Evaluate your strategic, technical, and cultural readiness.
                </p>
              </div>
            </div>

            {/* Progress Bar */}
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

          {/* Tab Navigation (Hidden on small screens using d-none d-md-block) */}
          <div className="border-top mt-3 d-none d-md-block">
            <div className="d-flex px-0 px-md-3 justify-content-center">
              <div className="d-flex tabs-container">
                {/* Section Tabs */}
                {sections.map((section, idx) => (
                  <TabButton
                    key={section}
                    label={section}
                    isActive={activeTab === idx}
                    onClick={() => {
                      setActiveTab(idx);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    count={idx + 1}
                    completed={isSectionComplete(section)}
                    disabled={false}
                  />
                ))}

                {/* Results Tab */}
                <TabButton
                  key="Results"
                  label="Results"
                  isActive={activeTab === sections.length}
                  onClick={() => {
                    setActiveTab(sections.length);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  isResultTab={true}
                  disabled={!showResults} // Only clickable after calculation
                />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container py-5">
          {/* Error Alert */}
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

          {/* Conditional Rendering: Questions vs Results */}

          {isResultsTab ? (
            /* Results View */
            <ResultCard
              result={getRecommendation(totalScore)}
              totalScore={totalScore}
              onRestart={handleRestart}
            />
          ) : (
            /* Questions View */
            <div className="animate-fade-in">
              <div className="mb-4 d-flex align-items-center">
                <span
                  className="badge rounded me-2 d-flex align-items-center justify-content-center"
                  style={{ width: "28px", height: "28px", ...styles.brandBg }}
                >
                  {activeTab + 1}
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
            </div>
          )}

          {/* Navigation Buttons (Hide if on Results tab) */}
          {!isResultsTab && (
            <div className="d-flex flex-column flex-sm-row justify-content-between gap-3 pt-4 border-top mt-5">
              <button
                onClick={() => {
                  setActiveTab((prev) => Math.max(0, prev - 1));
                  window.scrollTo({ top: 100, behavior: "smooth" });
                }}
                disabled={activeTab === 0}
                // UPDATED: Added rounded-pill for full rounded button
                className="btn btn-outline-secondary btn-lg fw-bold d-flex align-items-center justify-content-center rounded-pill"
              >
                <ChevronLeft size={20} className="me-2" /> Previous
              </button>

              {activeTab < sections.length - 1 ? (
                <button
                  onClick={() => {
                    setActiveTab((prev) =>
                      Math.min(sections.length - 1, prev + 1)
                    );
                    window.scrollTo({ top: 100, behavior: "smooth" });
                  }}
                  // UPDATED: Added rounded-pill for full rounded button
                  className="btn btn-brand btn-lg fw-bold d-flex align-items-center justify-content-center rounded-pill"
                >
                  Next Section <ChevronRight size={20} className="ms-2" />
                </button>
              ) : (
                <button
                  onClick={calculateResult}
                  // UPDATED: Added rounded-pill for full rounded button
                  className="btn btn-dark btn-lg fw-bold d-flex align-items-center justify-content-center shadow rounded-pill"
                  style={{
                    backgroundColor: "#0b3937",
                  }}
                >
                  <Eye size={20} className="me-2" /> View Results
                </button>
              )}
            </div>
          )}
        </main>
      </div>
    </>
  );
}
