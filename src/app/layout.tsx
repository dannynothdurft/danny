import React from "react";
import type { Metadata, Viewport } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import MainLayout from "@/layouts/mainLayout";

import "@/styles/index.css";
import "@/styles/App.css";
import "@/styles/Header.css";
import "@/styles/Navbar.css";
import "@/styles/About.css";
import "@/styles/Projects.css";
import "@/styles/ProjectCard.css";
import "@/styles/Skills.css";
import "@/styles/Contact.css";
import "@/styles/ScrollToTop.css";
import "@/styles/Footer.css";

import { ThemeProvider } from "@/contexts/theme";

export const metadata: Metadata = {
  title: "Danny Nothdurft - Fullstack Entwickler",
  description: "Danny Nothdurft - Portfolio",
  robots: "index,follow",
  manifest: "/manifest.json",
  authors: [{ name: "Danny Nothdurft" }],
  creator: "Danny Nothdurft",
  publisher: "Danny Nothdurft",
  generator: "Danny Nothdurft",
  applicationName: "Danny Nothdurft",
  keywords: [
    "Web-Investor, Danny Nothdurft, Webprojekte, Online-Erfolg, Webentwicklung, Webseitenoptimierung, Online-Geschäft, Unternehmenswachstum",
  ],
  icons: {
    icon: "/favicons/favicon.ico",
    shortcut: "/favicons/logo-256.jpg",
    apple: "/favicons/logo-256.jpg",
    other: {
      rel: "/favicons/logo-256.jpg",
      url: "/favicons/logo-256.jpg",
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <meta name="seobility" content="3288afe233a7dbeda71a9eec8ebc686b" />
        <meta
          name="google-site-verification"
          content="dyaI2PWFtURcH73MfuqvG34JtVy48TjQjjkaYzbFzas"
        />
      </head>
      <body>
        <ThemeProvider>
          <MainLayout />
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
