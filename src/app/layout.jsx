import "./globals.scss";
import {
  DM_Serif_Display,
  Montserrat_Alternates,
  Urbanist,
  Manrope,
  Sora,
} from "next/font/google";

import { ToastContainer } from "react-toastify";
import Script from "next/script";

const dmSerifDisplay = Manrope({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--tp-ff-dm",
});

const montserratAlternates = Sora({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-mont",
});

const manrope = Manrope({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-body",
});

const urbanist = Manrope({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-urban",
});

const sora = Sora({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-heading",
});

export const metadata = {
  title: "Axonova Consulting – Practical AI Training, Strategy & Automation",
  description:
    "Axonova Consulting helps organisations adopt AI with clarity and confidence through practical AI Training, Consulting, Automations & Solutions, and personalised AI Coaching.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <style>
        {`
          .progress {
            background-color: #0b3937;
          }
        `}
      </style>
      <body
        className={`${dmSerifDisplay.variable} ${montserratAlternates.variable} ${manrope.variable} ${sora.variable} ${urbanist.variable}`}
      >
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-933ZPDQHR4"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-933ZPDQHR4');
          `}
        </Script>

        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
