"use client";
import React from "react";
import Header from "@/components/Header";
import Image from "next/image";
import { EuroIcon, HandShakeIcon, SecurityIcon, WebIcon } from "@/utils/svg";

const HomePage = () => {
  return (
    <div className="PAGE--CONTAINER">
      <Header />
      <section className="FEATURES--CONTAINER">
        <h2>Warum mich wählen?</h2>
        <div className="FEATURES">
          <div className="FEATURES--ITEM">
            <HandShakeIcon width="50" height="50" />
            <h3>Schneller Prozess</h3>
            <p>Ich kümmern mich um alles – schnell und unkompliziert.</p>
          </div>
          <div className="FEATURES--ITEM">
            <EuroIcon width="50" height="50" />
            <h3>Faire Preise</h3>
            <p>
              Sie erhalten ein transparentes und faires Angebot für Ihr Projekt.
            </p>
          </div>
          <div className="FEATURES--ITEM">
            <SecurityIcon width="50" height="50" />
            <h3>Sicherer Verkauf</h3>
            <p>
              Der Verkaufsprozess ist sicher und geschützt – für Ihre
              Sicherheit.
            </p>
          </div>
          <div className="FEATURES--ITEM">
            <WebIcon width="50" height="50" />
            <h3>Vielseitige Projekte</h3>
            <p>
              Ich kaufen alle Arten von Webseiten, Webshops und Social
              Media-Projekten.
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
    </div>
  );
};

export default HomePage;
