import "./globals.scss";
import {
  DM_Serif_Display,
  Montserrat_Alternates,
  Plus_Jakarta_Sans,
  Urbanist,
} from "next/font/google";

const dmSerifDisplay = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--tp-ff-dm",
});

const montserratAlternates = Montserrat_Alternates({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-mont",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: ["--tp-ff-body", "--tp-ff-heading"],
});

const urbanist = Urbanist({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-urban",
});

export const metadata = {
  title: "Axonova Consulting – Practical AI Training, Strategy & Automation",
  description: `Axonova Consulting helps organisations adopt AI with clarity and confidence. 
  We offer practical AI Training, end-to-end AI Consulting, AI Automations & Solutions, 
  and personalized AI Coaching to make AI practical, safe, and valuable for your people and business.`,
  keywords: [
    "AI Training",
    "AI Consulting",
    "AI Automation",
    "AI Coaching",
    "AI adoption",
    "AI strategy",
    "Responsible AI",
    "Practical AI",
    "Business AI solutions",
    "Axonova Consulting",
  ],
  authors: [
    { name: "Axonova Consulting", email: "info@axonovaconsulting.co.uk" },
  ],
  openGraph: {
    title: "Axonova Consulting – Practical AI Training, Strategy & Automation",
    description:
      "Empowering organizations to adopt AI safely and effectively through training, consulting, and automation.",
    url: "https://www.axonovaconsulting.co.uk",
    siteName: "Axonova Consulting",
    type: "website",
    images: [
      {
        url: "/assets/img/logo/logo-black.png", // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "Axonova Consulting - AI Transformation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Axonova Consulting – Practical AI Training, Strategy & Automation",
    description:
      "Helping organisations adopt AI safely and effectively through practical programs, consulting, and automations.",
    images: ["/assets/img/logo/logo-black.png"], // Replace with your actual Twitter image
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${dmSerifDisplay.variable} ${montserratAlternates.variable} ${plusJakartaSans.variable} ${urbanist.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
