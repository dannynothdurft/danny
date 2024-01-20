import React from "react";
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "@/styles/global.scss";
import "@/styles/main.scss";
import MainLayout from "@/layouts/mainLayout";

export const metadata: Metadata = {
  title: "Danny Nothdurft - Fullstack Entwickler",
  description:
    "Danny Nothdurft - Ihr Schlüssel zum Erfolg in webbasierten Projekten.",
  robots: "index,follow",
  manifest: "/manifest.json",
  viewport: "width=device-width, initial-scale=1.0",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <meta name="seobility" content="3288afe233a7dbeda71a9eec8ebc686b" />
      </head>
      <body>
        <MainLayout>{children}</MainLayout>
        <SpeedInsights />
      </body>
    </html>
  );
}
