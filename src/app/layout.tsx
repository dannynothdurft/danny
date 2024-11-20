import "@/styles/globals.scss";

import type { Metadata, Viewport } from "next";
import { LayoutProviders } from "@/providers/layout";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Danny Nothdurft - Fullstack Developer",
  description: "Danny Nothdurft - Fullstack Developer - Portfolio",
  robots: "index,follow",
  manifest: "/manifest.json",
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
        <meta
          name="google-site-verification"
          content="dyaI2PWFtURcH73MfuqvG34JtVy48TjQjjkaYzbFzas"
        />
        <meta
          name="google-adsense-account"
          content="ca-pub-9015993706693550"
        ></meta>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9015993706693550"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        <LayoutProviders>{children}</LayoutProviders>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
