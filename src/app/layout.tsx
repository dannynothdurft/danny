import React from 'react';
import type { Metadata } from 'next';
import '@/styles/main.scss';
import LayoutProvider from '@/provider/LayoutProvider';


export const metadata: Metadata = {
  title: 'Danny Nothdurft - Fullstack Entwickler',
  description: 'Danny Nothdurft - Ihr Schlüssel zum Erfolg in webbasierten Projekten.',
  robots: "index,follow",
  viewport: "width=device-width, initial-scale=1.0",
  authors: [{ name: "Danny Nothdurft" }],
  creator: "Danny Nothdurft",
  publisher: "Danny Nothdurft",
  generator: "Danny Nothdurft",
  applicationName: "Danny Nothdurft",
  keywords: ["Web-Investor, Danny Nothdurft, Webprojekte, Online-Erfolg, Webentwicklung, Webseitenoptimierung, Online-Geschäft, Unternehmenswachstum"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <head>
        {/* <meta name="seobility" content="3288afe233a7dbeda71a9eec8ebc686b"></meta> */}
        {/* <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        /> */}
        <link rel="manifest" href="/manifest.json" />
        {/* <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" /> */}
      </head>
      <body><LayoutProvider>{children}</LayoutProvider></body>
    </html>
  )
}
