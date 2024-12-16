import "@/styles/globals.scss";

import type { Metadata, Viewport } from "next";
import MainLayout from "@/layout/MainLayout";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Danny Nothdurft - Webseiten kauf",
  description:
    "Danny Nothdurft - Ich kaufe eure Webseiten, Webshops, Webprojekte und URL",
  robots: "index,follow",
  manifest: "/manifest.json",
  authors: [{ name: "Danny Nothdurft" }],
  creator: "Danny Nothdurft",
  publisher: "Danny Nothdurft",
  generator: "Danny Nothdurft",
  applicationName: "Danny Nothdurft",
  keywords: [
    "Danny Nothdurft, Web-Investor, Webseiten kauf, Webprojekte kaufen, Webshop ankauf",
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
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <meta
          name="f0c354151b0bf52"
          content="ff8f688d205457b1f788338f9f6774d7"
        />
        <meta name="seobility" content="3288afe233a7dbeda71a9eec8ebc686b" />
      </head>
      <body>
        <MainLayout>{children}</MainLayout>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
