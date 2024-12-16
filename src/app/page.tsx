"use client";
import React from "react";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { EuroIcon, HandShakeIcon, SecurityIcon, WebIcon } from "@/utils/svg";

const HomePage = () => {
  return (
    <div className="PAGE--CONTAINER">
      <Header />
      <section className="FEATURES--CONTAINER">
        <h2>Warum an mich verkaufen?</h2>
        <div className="FEATURES">
          <div className="FEATURES--ITEM">
            <HandShakeIcon width="50" height="50" />
            <h3>Faire Bewertung</h3>
            <p>
              Erzielen den besten Marktpreis für Dein digitalen Vermögenswert
              auf der Grundlage von Umsatz und Potenzial
            </p>
          </div>
          <div className="FEATURES--ITEM">
            <EuroIcon width="50" height="50" />
            <h3>Schnelles Verfahren</h3>
            <p>
              Schließen den Verkauf in nur maximal 2 Tagen mit unserem
              optimierten Verfahren ab
            </p>
          </div>
          <div className="FEATURES--ITEM">
            <SecurityIcon width="50" height="50" />
            <h3>Sichere Transaktion</h3>
            <p>
              Sicherer und geschützter Zahlungsvorgang mit legaler Dokumentation
            </p>
          </div>
          <div className="FEATURES--ITEM">
            <WebIcon width="50" height="50" />
            <h3>Wachstumspotenzial</h3>
            <p>
              Wir suchen nach Projekten mit Potenzial, auch wenn die derzeitigen
              Einnahmen bescheiden sind
            </p>
          </div>
        </div>
      </section>
      <hr />
      <section className="HOMEPAGE--FIRST--CONTENT">
        <div>
          <h2>Ich kaufe Webseiten und Webprojekte!</h2>
          <p>
            Möchten Sie Ihre Webseite, Ihren Webshop oder ein anderes
            Online-Projekt verkaufen? Ich bin immer auf der Suche nach neuen,
            interessanten Projekten. Egal, ob es sich um einen Marktplatz, eine
            Social-Media-Plattform oder ein anderes Webprojekt handelt – ich bin
            daran sehr interessiert. Ich kaufen nicht nur fertige Webseiten,
            sondern auch junge Projekte mit Potenzial.
          </p>
          <p>
            Mein Ziel ist es, jedes Projekt sorgfältig zu prüfen und Ihnen ein
            faires Angebot zu machen. Dabei erhalten Sie von mir innerhalb
            kürzester Zeit ein individuelles Angebot, das den Wert Ihres
            Projekts widerspiegelt. Der gesamte Prozess wird von mir organisiert
            – schnell, unkompliziert und sicher.
          </p>
          <p>
            Wenn Sie bereit sind, Ihre Webseite oder Ihr Webprojekt zu
            verkaufen, kontaktieren Sie mich! Ich bieten transparente und faire
            Konditionen, um den Verkaufsprozess für Sie so einfach wie möglich
            zu gestalten.
          </p>
          <p>
            Melden Sie sich noch heute und lassen Sie uns gemeinsam besprechen,
            wie wir Ihre Webseite oder Ihr Projekt bewerten können!
          </p>
        </div>
        <div>
          <Image
            src="/images/Webseitenkauf.webp"
            height={800}
            width={1200}
            alt="Webseitenkauf"
            className="CONTENT--IMAGES"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Sind Sie bereit, Ihr Projekt zu verkaufen?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Fordern Sie noch heute eine kostenlose Bewertung und Beratung an.
          </p>
          <Link
            href="/kontakt"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Beginnen Sie den Prozess
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
