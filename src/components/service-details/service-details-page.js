// import bg1 from "../../assets/images/bg/bg1.jpg";
import bg1 from "../../../public/assets/img/services/s1.png";
import bg2 from "../../../public/assets/img/services/s2.png";
import bg3 from "../../../public/assets/img/services/s3.png";
import bg4 from "../../../public/assets/img/services/s4.png";

const hero_image = "";
export const serviceTabs = [
  { id: "overview", label: "Overview" },
  { id: "ai-training", label: "AI Training" },
  { id: "ai-consulting", label: "AI Consulting" },
  { id: "ai-automations", label: "AI Automations" },
  { id: "ai-coaching", label: "AI Coaching" },
];

export const services = {
  overview: {
    id: "overview",
    hero: hero_image,
    title: "Our Services",
    subtitle: "Explore the services that move your organisation forward",
    intro:
      "Axonova Consulting helps organisations adopt AI with clarity, confidence, and measurable impact.",
    overview:
      "From training and coaching to strategy and automation, we tailor every engagement to your teams, workflows, and goals.",
    serviceCards: [
      {
        id: "service-ai-training",
        title: "AI Training",
        tagline:
          "Practical AI training for teams that want to work faster, smarter, and safer.",
        description:
          "Our hands-on programs teach employees how to use AI tools effectively, ethically, and confidently with real examples from their own roles.",
        actionLabel: "Learn More",
        targetTab: "ai-training",
        background: bg1,
      },
      {
        id: "service-ai-consulting",
        title: "AI Consulting",
        tagline:
          "End-to-end AI consulting that turns uncertainty into a clear, measurable AI strategy.",
        description:
          "We help organisations identify high-value opportunities, build safe AI governance, and create an actionable roadmap that aligns with business goals.",
        actionLabel: "Explore Consulting",
        targetTab: "ai-consulting",
        background: bg2,
      },
      {
        id: "service-ai-automations",
        title: "AI Solutions and Automations",
        tagline:
          "Automate repetitive tasks and optimise workflows with secure, reliable AI-powered solutions.",
        description:
          "We design and implement automations that reduce admin, eliminate errors, and connect your systems for faster, more efficient operations.",
        actionLabel: "View Solutions",
        targetTab: "ai-automations",
        background: bg3,
      },
      {
        id: "service-ai-coaching",
        title: "AI Coaching",
        tagline: "A personalised 1:1 session designed to demystify AI.",
        description:
          "Personalised AI coaching for leaders and professionals. Get clarity on what AI means for your role and the practical steps you can apply immediately.",
        actionLabel: "Book Coaching",
        targetTab: "ai-coaching",
        background: bg4,
      },
    ],
    cta: {
      title: "Ready to bring AI into your organisation the right way?",
      description:
        "Whether you're starting small or scaling across your entire business, we'll help you move forward with clarity, confidence, and measurable value.",
      button: "Book a session",
      buttonHref: "/contact",
      secondaryButton: {
        label: "Start Your AI Adoption Journey",
        href: "/ai-maturity-assessment",
      },
      note: "Start your AI adoption journey by completing an AI Maturity Assessment.",
    },
  },
  "ai-training": {
    id: "ai-training",
    hero: hero_image,
    title: "AI Training",
    subtitle:
      "Practical, hands-on AI Training for every team - No technical skills needed",
    intro:
      "AI shouldn't feel confusing or risky. Our training programs make AI simple, safe, and immediately useful by teaching people through real examples from their own roles. Instead of vague theory, teams practice live with guided exercises, templates, and scenarios that match their day-to-day responsibilities.",
    overview:
      "We focus on demystifying AI, building confidence, and establishing safe, responsible habits across the organisation.",
    highlight:
      "A confident, AI-enabled workforce that works faster, delivers higher-quality output, and uses AI safely, consistently, and responsibly.",
    empower:
      "Give your people the confidence, safety, and capability they need to thrive with AI today and tomorrow.",
    modules: [
      {
        title: "Module 1: Foundational AI",
        description:
          "Understanding what AI is - and isn’t. A simple, practical introduction to AI concepts, trends, and applications.",
        outcome:
          "Clarity on AI fundamentals and confidence to engage in AI conversations and decisions.",
      },
      {
        title: "Module 2: AI for daily productivity",
        description:
          "Hands-on guidance on using AI tools for emails, reports, data analysis, research, creativity, presentations, and personal productivity.",
        outcome:
          "Participants achieve productivity gains while maintaining compliance and data integrity.",
      },
      {
        title: "Module 3: Effective AI Prompting Skills",
        description:
          "Teaches how to communicate effectively with AI systems - crafting clear prompts to generate accurate, useful results.",
        outcome:
          "Improved precision, creativity, and efficiency in AI interactions.",
      },
      {
        title: "Module 4: AI for Managers and Team Leaders",
        description:
          "Focuses on integrating AI into team processes, operational planning, and guiding teams in AI adoption.",
        outcome:
          "Managers learn to lead AI-enabled teams, balance efficiency with human judgment, and measure results.",
      },
      {
        title: "Module 5: AI for Senior Leaders and Executives",
        description:
          "Explores AI's strategic implications for competitiveness, growth, risk management, governance, and ROI.",
        outcome:
          "Executives gain insight into how to align AI with business strategy, culture, and stakeholder expectations.",
      },
      {
        title: "Module 6: Responsible AI: Ethics and Governance",
        description:
          "Addresses data privacy, bias, transparency, and responsible use frameworks, including guidance on developing organisational policies for ethical AI.",
        outcome:
          "Participants understand how to protect reputation, ensure compliance, and maintain public trust.",
      },
      {
        title: "Module 7: AI in Functions: Deep Dives",
        description:
          "Function-specific modules exploring real use cases in Human Resources, Finance, and Customer Service.",
        outcome:
          "Teams gain targeted insights and ready-to-apply use cases for their department.",
      },
      {
        title: "Module 8: Change Management for effective AI adoption",
        description:
          "Prepares organizations for the human side of AI adoption - communication, engagement, leadership alignment, and culture shift.",
        outcome:
          "Smooth integration of AI across an organization with high engagement and minimal resistance.",
      },
    ],
    benefits: [
      "Learn by doing: Participants apply AI to real tasks during the session.",
      "No technical knowledge needed: Designed for employees at all levels.",
      "Ready-made playbooks: Easy prompts, templates, and workflows that teams can use immediately.",
      "Clear adoption tracking: Insights on usage, time saved, and capability growth across teams.",
      "Built-in safety: Training embeds organisation-specific guardrails and compliance requirements.",
    ],
    cta: {
      title: "Empower your teams with AI Skills that deliver real results",
      description:
        "Start your AI Learning journey with practical, safe, and role-specific training.",
      button: "Start your AI Learning journey",
    },
    faqs: [
      {
        id: 1,
        question: "Do participants need any technical background?",
        answer:
          "No. Our training is designed for non-technical users. If you can use email, you can learn AI.",
        accordion_id: "heading1",
        collapsed: "",
        data_bs_target: "#collapse1",
        aria_expanded: "true",
        aria_controls: "collapse1",
        show: true,
        active: "active",
      },
      {
        id: 2,
        question:
          "Can the training be tailored to specific roles or departments?",
        answer:
          "Yes — every program is customised. We build role-specific modules for HR, Finance, Operations, Customer Service, Leadership, and more.",
        accordion_id: "heading2",
        collapsed: "collapsed",
        data_bs_target: "#collapse2",
        aria_expanded: "false",
        aria_controls: "collapse2",
        show: false,
        active: "",
      },
      {
        id: 3,
        question: "How long are the sessions?",
        answer:
          "We offer half-day and full-day trainings. Session length can vary based on modules — multi-module programs can run for two or more days.",
        accordion_id: "heading3",
        collapsed: "collapsed",
        data_bs_target: "#collapse3",
        aria_expanded: "false",
        aria_controls: "collapse3",
        show: false,
        active: "",
      },
      {
        id: 4,
        question: "Is the training delivered online or in person?",
        answer:
          "Both options are available. Most organisations choose virtual sessions for scalability.",
        accordion_id: "heading4",
        collapsed: "collapsed",
        data_bs_target: "#collapse4",
        aria_expanded: "false",
        aria_controls: "collapse4",
        show: false,
        active: "",
      },
      {
        id: 5,
        question: "Do you provide tools or software?",
        answer:
          "We train your teams using the AI tools you already have to ensure practical, real-world adoption.",
        accordion_id: "heading5",
        collapsed: "collapsed",
        data_bs_target: "#collapse5",
        aria_expanded: "false",
        aria_controls: "collapse5",
        show: false,
        active: "",
      },
      {
        id: 6,
        question: "How do you measure ROI?",
        answer:
          "We track time saved, adoption rates, usage patterns, and output improvements.",
        accordion_id: "heading6",
        collapsed: "collapsed",
        data_bs_target: "#collapse6",
        aria_expanded: "false",
        aria_controls: "collapse6",
        show: false,
        active: "",
      },
      {
        id: 7,
        question: "Can you help us build AI policies or guardrails?",
        answer:
          "Yes. We can develop responsible AI guidelines or collaborate with your compliance team.",
        accordion_id: "heading7",
        collapsed: "collapsed",
        data_bs_target: "#collapse7",
        aria_expanded: "false",
        aria_controls: "collapse7",
        show: false,
        active: "",
      },
      {
        id: 8,
        question: "Is follow-up training available?",
        answer:
          "Absolutely. We offer Mastery Modules, department-specific workshops, and executive sessions.",
        accordion_id: "heading8",
        collapsed: "collapsed",
        data_bs_target: "#collapse8",
        aria_expanded: "false",
        aria_controls: "collapse8",
        show: false,
        active: "",
      },
    ],
  },
  "ai-consulting": {
    id: "ai-consulting",
    hero: hero_image,
    title: "AI Consulting",
    subtitle: "End-to-End AI Strategy and Roadmap for successful AI Adoption",
    intro:
      "AI conversations often feel overwhelming - too many tools, too much hype, and no clear starting point. We remove the confusion and replace it with a clear strategic plan your entire organisation can align behind.",
    overview:
      "Our AI Consulting service brings structure, clarity, and measurable value to your AI journey, from initial readiness assessment to execution support.",
    whatWeCover: [
      "AI Readiness Assessment: Understand your data, workflows, culture, and current systems.",
      "Opportunity Assessment: Identify high-impact use cases across functions.",
      "Prioritisation and Business Cases: Ensure investment goes where the ROI is highest.",
      "Enterprise AI Governance: Policies, controls, roles, and risk management tailored to your organisation.",
      "Roadmap Development: Captures quick wins plus a long-term scale plan.",
      "Ongoing Measurement: KPIs, baselines, dashboards, and performance tracking.",
    ],
    howWeWork: [
      "Discovery and Audit – Deep dive into current processes, systems, risks, and opportunities.",
      "Use Case Prioritisation – Score and select the most valuable, safest opportunities.",
      "Strategy Development – Build a practical roadmap aligned with business goals.",
      "Governance and Risk Frameworks – Define policies, roles, and guardrails.",
      "Execution Support – Assist with pilots, adoption, integration, and measurement.",
    ],
    highlight:
      "AI Strategy - A practical, organisation-wide AI plan that is safe, realistic, measurable, and designed for long-term success.",
    cta: {
      title: "Create a clear, confident plan for AI in your organisation",
      description:
        "Let’s build a roadmap that reduces risk, aligns teams, and unlocks real value without the hype or confusion.",
      button: "Let’s build your AI Strategy together",
    },
    faqs: [
      {
        id: 1,
        question: "What size organisations do you work with?",
        answer:
          "We support small, mid-sized, and large enterprises across multiple industries.",
        accordion_id: "heading1",
        collapsed: "",
        data_bs_target: "#collapse1",
        aria_expanded: "true",
        aria_controls: "collapse1",
        show: true,
        actice: "active",
      },
      {
        id: 2,
        question: "How long does the consulting engagement take?",
        answer: "Most engagements run 4–8 weeks depending on scope and scale.",
        accordion_id: "heading2",
        collapsed: "collapsed",
        data_bs_target: "#collapse2",
        aria_expanded: "false",
        aria_controls: "collapse2",
        show: false,
        actice: "",
      },
      {
        id: 3,
        question:
          "Do you only build strategy, or do you help with implementation?",
        answer:
          "We offer both. You can choose strategy-only or end-to-end delivery support.",
        accordion_id: "heading3",
        collapsed: "collapsed",
        data_bs_target: "#collapse3",
        aria_expanded: "false",
        aria_controls: "collapse3",
        show: false,
        actice: "",
      },
      {
        id: 4,
        question: "What about data privacy and compliance?",
        answer:
          "Governance, data safety, and responsible AI frameworks are core components of every engagement.",
        accordion_id: "heading4",
        collapsed: "collapsed",
        data_bs_target: "#collapse4",
        aria_expanded: "false",
        aria_controls: "collapse4",
        show: false,
        actice: "",
      },
      {
        id: 5,
        question: "Do we need technical expertise to start?",
        answer:
          "No. Our consulting is designed for organisations at any maturity level.",
        accordion_id: "heading5",
        collapsed: "collapsed",
        data_bs_target: "#collapse5",
        aria_expanded: "false",
        aria_controls: "collapse5",
        show: false,
        actice: "",
      },
      {
        id: 6,
        question: "Can you work with multiple departments?",
        answer:
          "Absolutely. We run workshops with HR, Finance, Operations, Customer Service, IT, and leadership.",
        accordion_id: "heading6",
        collapsed: "collapsed",
        data_bs_target: "#collapse6",
        aria_expanded: "false",
        aria_controls: "collapse6",
        show: false,
        actice: "",
      },
      {
        id: 7,
        question: "Will this help with budget planning?",
        answer:
          "Yes. Each prioritised use case includes effort, cost, and ROI estimates.",
        accordion_id: "heading7",
        collapsed: "collapsed",
        data_bs_target: "#collapse7",
        aria_expanded: "false",
        aria_controls: "collapse7",
        show: false,
        actice: "",
      },
    ],
  },
  "ai-automations": {
    id: "ai-automations",
    hero: hero_image,
    title: "AI Automations and Solutions",
    subtitle:
      "Automate repetitive work and integrate your systems for faster, more accurate operations",
    intro:
      "Most organisations lose countless hours to manual admin - copying data, data entry, updating records, preparing documents, managing approvals, raising invoices, chasing updates, resume screening, survey analysis, content generation, key insight generation, summarizing long documents, and others.",
    overview:
      "Our AI Automations and Solutions service replaces or streamlines these repetitive tasks with reliable workflows that run in the background.",
    whatWeAutomate: [
      "Admin and documentation: Drafting emails, reports, summaries, proposals, meeting notes.",
      "Approvals and routing: Requests, tickets, HR documents, finance workflows.",
      "Data movement: Syncing information between CRMs, ERPs, spreadsheets, and communication tools.",
      "Notifications and follow-ups: Automated reminders, status updates, escalations.",
      "Service and operations: Ticket management, case progress, data validation, task allocation.",
      "Document processing: Generating, updating, organising, and storing documents automatically.",
    ],
    ourApproach: [
      "Process Analysis: Understand your workflows and identify bottlenecks.",
      "Opportunity Selection: Choose high-impact automations with measurable ROI.",
      "Design and Build: Create secure, audit-ready workflows tailored to your environment.",
      "Testing & Human Oversight: Automation that drafts, humans approve.",
      "Deployment & Monitoring: Ensure stability, accuracy, and adoption.",
    ],
    highlight:
      "Faster operations, reduced errors, clear visibility, improved compliance, happier teams - all with measurable ROI.",
    cta: {
      title: "Ready to eliminate admin and accelerate your operations?",
      description:
        "Let’s build automations that save hours every week, reduce errors, and make your organisation run smoothly.",
      button: "Start your AI Automation journey today",
    },
    faqs: [
      {
        id: 1,
        question: "Do we need new software?",
        answer:
          "Usually not. We design solutions that work with what you already have.",
        accordion_id: "heading1",
        collapsed: "",
        data_bs_target: "#collapse1",
        aria_expanded: "true",
        aria_controls: "collapse1",
        show: true,
        actice: "active",
      },
      {
        id: 2,
        question: "Will automations replace people?",
        answer:
          "No — they free people from low-value admin so they can focus on meaningful work.",
        accordion_id: "heading2",
        collapsed: "collapsed",
        data_bs_target: "#collapse2",
        aria_expanded: "false",
        aria_controls: "collapse2",
        show: false,
        actice: "",
      },
      {
        id: 3,
        question: "Is there human oversight?",
        answer:
          "Yes. Most workflows include human-in-the-loop checkpoints for safety and accuracy.",
        accordion_id: "heading3",
        collapsed: "collapsed",
        data_bs_target: "#collapse3",
        aria_expanded: "false",
        aria_controls: "collapse3",
        show: false,
        actice: "",
      },
      {
        id: 4,
        question: "How long does implementation take?",
        answer:
          "Simple automations take days; more complex workflow suites take a few weeks.",
        accordion_id: "heading4",
        collapsed: "collapsed",
        data_bs_target: "#collapse4",
        aria_expanded: "false",
        aria_controls: "collapse4",
        show: false,
        actice: "",
      },
      {
        id: 5,
        question: "Is the solution secure?",
        answer:
          "Yes — we apply enterprise-grade data handling, governance, and audit controls.",
        accordion_id: "heading5",
        collapsed: "collapsed",
        data_bs_target: "#collapse5",
        aria_expanded: "false",
        aria_controls: "collapse5",
        show: false,
        actice: "",
      },
      {
        id: 6,
        question: "Can you work with multiple departments?",
        answer:
          "Absolutely. We commonly support Operations, HR, Finance, Customer Service, and Leadership teams.",
        accordion_id: "heading6",
        collapsed: "collapsed",
        data_bs_target: "#collapse6",
        aria_expanded: "false",
        aria_controls: "collapse6",
        show: false,
        actice: "",
      },
    ],
  },
  "ai-coaching": {
    id: "ai-coaching",
    hero: hero_image,
    title: "AI Coaching",
    subtitle:
      "A personalised one-on-one AI Coaching for Leaders, Founders, and Professionals",
    intro:
      'If AI feels overwhelming, confusing, or too "technical," our coaching session gives you clarity and confidence - without the jargon.',
    overview:
      "This is the perfect starting point for individuals and businesses who want to understand AI strategically and practically.",
    whatYoullLearn: [
      "What AI actually is (and isn’t)",
      "How to spot valuable opportunities in your role or business",
      "Safe and responsible use of AI",
      "Tools worth using - and tools to avoid",
      "How AI will impact your industry and workflow",
      "How to start building your own AI habits and routines",
      "What steps to take in the next 30 days to build momentum",
    ],
    whoThisIsFor: [
      "CEOs, Directors, and Managers",
      "Small business owners",
      "Professionals wanting to upskill",
      "Anyone unsure where to begin with AI",
    ],
    sessionIncludes: [
      "1-hour personalised coaching",
      "Real examples tailored to your role or industry",
      "Recommended workflows you can start using immediately",
      "Curated list of safe, effective tools",
      "A personalised “Next Steps” plan",
    ],
    benefits:
      "Clear direction, practical understanding, and a confident starting point for integrating AI into your work and decision-making.",
    cta: {
      title: "Ready to get clarity and confidence with AI?",
      description:
        "Start your AI journey with a personalized session designed around your goals, your industry, and your everyday work.",
      button: "Schedule your Coaching Session now",
    },
    faqs: [
      {
        id: 1,
        question: "Who should attend an AI Coaching session?",
        answer:
          "Anyone looking to understand AI's practical implications in their role or business, including leaders, professionals, and small business owners.",
        accordion_id: "heading1",
        collapsed: "",
        data_bs_target: "#collapse1",
        aria_expanded: "true",
        aria_controls: "collapse1",
        show: true,
        active: "active",
      },
      {
        id: 2,
        question: "How is the coaching session delivered?",
        answer:
          "Sessions are 1:1 and can be conducted online or in-person depending on your preference and location.",
        accordion_id: "heading2",
        collapsed: "collapsed",
        data_bs_target: "#collapse2",
        aria_expanded: "false",
        aria_controls: "collapse2",
        show: false,
        active: "",
      },
      {
        id: 3,
        question: "Can the session be customised for my industry or role?",
        answer:
          "Yes. Each session is tailored to your specific role, industry, and objectives, using real examples and actionable guidance.",
        accordion_id: "heading3",
        collapsed: "collapsed",
        data_bs_target: "#collapse3",
        aria_expanded: "false",
        aria_controls: "collapse3",
        show: false,
        active: "",
      },
    ],
  },
};
