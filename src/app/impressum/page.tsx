"use client";
import { MainConfig } from "@/config";
import React from "react";
import Link from "next/link";

const ImpressumPage = () => {
  return (
    <div className="PAGE--CONTAINER">
      <section>
        <h1>Impressum</h1>

        <h2>Angaben gemäß § 5 TMG</h2>

        <p>
          <strong>{MainConfig.company}</strong>
        </p>
        <p>
          {MainConfig.addres} <br />
          {MainConfig.zip} {MainConfig.city} <br />
          {MainConfig.land}
        </p>

        <h3>Vertreten durch:</h3>
        <p>{MainConfig.ceo}</p>

        <h3>Kontakt:</h3>
        <p>
          Telefon: {MainConfig.mobile}
          <br />
          E-Mail: {MainConfig.email}
        </p>

        {/* <h3>Handelsregister:</h3>
        <p>Eintrag im Handelsregister des [Handelsregistergericht]</p>
        <p>Handelsregisternummer: [Nummer]</p>

        <h3>Umsatzsteuer-ID gemäß § 27 a Umsatzsteuergesetz:</h3>
        <p>USt-IdNr.: [Deine Umsatzsteuer-ID]</p> */}

        <h2>Haftungsausschluss</h2>
        <p>
          Die Inhalte dieser Webseite wurden mit größtmöglicher Sorgfalt
          erstellt. Dennoch kann für die Richtigkeit, Vollständigkeit und
          Aktualität der Inhalte keine Gewähr übernommen werden. Als
          Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf
          dieser Webseite nach den allgemeinen Gesetzen verantwortlich. Nach §§
          8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
          übermittelte oder gespeicherte fremde Informationen zu überwachen oder
          nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
          hinweisen.
        </p>

        <h2>Haftung für Links</h2>
        <p>
          Unsere Webseite enthält Links zu externen Webseiten Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich.
        </p>

        <h2>Datenschutz</h2>
        <p>
          Informationen zum Datenschutz finden Sie in unserer{" "}
          <Link href="/datenschutz">Datenschutzerklärung</Link>.
        </p>
      </section>
    </div>
  );
};

export default ImpressumPage;
