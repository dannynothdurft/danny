import "@/styles/globals.scss";

import type { Metadata } from "next";
import { LayoutProviders } from "@/providers/layout";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Danny Nothdurft - Fullstack Developer",
  description: "Danny Nothdurft - Fullstack Developer - Portfolio",
  robots: "index,follow",
  manifest: "/manifest.json",
  viewport: "width=device-width, initial-scale=1.0",
  authors: [{ name: "Danny Nothdurft" }],
  creator: "Danny Nothdurft",
  publisher: "Danny Nothdurft",
  generator: "Danny Nothdurft",
  applicationName: "Danny Nothdurft",
  keywords: [
    "Web-Investor, Danny Nothdurft, Webprojekte, Online-Erfolg, Webentwicklung, Webseitenoptimierung, Online-Geschäft, Unternehmenswachstum, Fullstack Developer",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <meta name="seobility" content="3288afe233a7dbeda71a9eec8ebc686b" />
        <meta
          name="google-site-verification"
          content="dyaI2PWFtURcH73MfuqvG34JtVy48TjQjjkaYzbFzas"
        />
      </head>
      <body>
        <LayoutProviders>{children}</LayoutProviders>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
