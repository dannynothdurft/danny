"use client";

import React from "react";
import DATA from "@/data/portfolio.json";

const AboutMe = () => {
  const me = DATA.aboutMe;

  return (
    <div className="section" id="aboutMe">
      <h2 className="section__title">{me.titel}</h2>

      <p className="text">
        Hallo, mein Name ist <b>Danny</b>, ich bin 32 Jahre alt und stamme aus
        der <b>wunderschönen Stadt Hamburg</b>. Mein beruflicher Werdegang war
        eine spannende Reise, auf der ich verschiedene Pfade erkundet habe, um
        herauszufinden, wo meine Leidenschaft und mein Talent wirklich liegen.
        Nachdem ich meine <b>Ausbildung als Kfz-Mechatroniker begonnen</b>{" "}
        hatte, sammelte ich über sechs Jahre lang wertvolle Erfahrungen in drei
        unterschiedlichen Unternehmen. Diese Zeit ermöglichte es mir, ein
        breites Spektrum an Fähigkeiten und Kenntnissen im Bereich der
        Fahrzeugmechanik zu entwickeln und zu vertiefen.
      </p>
      <p className="text">
        Auf meiner <b>beruflichen Entdeckungsreise</b> habe ich auch andere Wege
        erkundet. Für etwas mehr als ein Jahr war ich als Kurier tätig, wodurch
        ich meine organisatorischen Fähigkeiten und meine Fähigkeit, unter
        Zeitdruck effizient zu arbeiten, weiterentwickelt habe. Anschließend
        verbrachte ich fast zwei Jahre als Paketzusteller bei DHL, wo ich nicht
        nur meine körperliche Ausdauer trainierte, sondern auch den Wert einer
        zuverlässigen und präzisen Arbeitsweise erkannte.
      </p>
      <p className="text">
        Im Jahr 2014 entschied ich mich für eine kurze Phase als
        Automobilverkäufer, doch diese Erfahrung erwies sich als weniger
        erfolgreich als erhofft. Dennoch war es eine wichtige Lektion für mich,
        die mich dazu inspirierte, mich erneut neu zu orientieren und nach neuen
        beruflichen Herausforderungen zu suchen.
      </p>
      <p className="text">
        Im Jahr 2020 bot sich mir dann die aufregende Möglichkeit, bei{" "}
        <b>Rafi</b>
        einzusteigen und beim Aufbau eines neuen Unternehmens mitzuwirken. Diese
        Erfahrung war für mich von unschätzbarem Wert, da ich die Gelegenheit
        hatte, in verschiedene Bereiche einzutauchen und meine Fähigkeiten
        weiterzuentwickeln. Zu meinen Aufgaben gehörte unter anderem der Aufbau
        einer Webseite mithilfe des Baukastensystems von 1&1, die professionelle
        Betreuung von Verkaufsplattformen, die erfolgreiche Durchführung von
        Verhandlungen mit Dienstleistern sowie die Leitung und Koordination
        eines Teams von fünf Mitarbeitern.
      </p>
      <p className="text">
        Des Weiteren war ich maßgeblich an der Entwicklung eines Lagerkonzepts
        für Autoteile beteiligt und knüpfte erfolgreiche Kontakte zu
        Kooperationspartnern, um eine reibungslose Zusammenarbeit
        sicherzustellen.
      </p>
      <p className="text">
        Im Jahr 2021 gründete ich <b>Moin Moin Möbelmonteur</b> und begann, eine
        Vielzahl von Kunden zu betreuen. Alles lief gut, bis die
        <b>COVID-19-Pandemie</b> zuschlug und die wirtschaftliche Landschaft
        veränderte. Leider zwang mich die finanzielle Belastung der Pandemie
        dazu, Insolvenz anzumelden, da meine Ausgaben die Einnahmen überstiegen.
        Doch wie sagt man so schön, wenn sich eine Tür schließt, öffnet sich
        eine andere. In dieser schwierigen Zeit entschied ich mich, eine neue
        berufliche Richtung einzuschlagen und absolvierte eine Umschulung bei
        <b>DCI zum Web- und Softwareentwickler</b>.
      </p>
      <p className="text">
        Während meiner Zeit bei DCI tauchte ich in die Welt der Entwicklung ein
        und entdeckte meine Leidenschaft für das Schaffen digitaler Lösungen.
        Als Teil meiner Ausbildung entwickelte ich ein kleines Spiel, das dazu
        diente, das Gehirn zu trainieren. Es forderte die Spieler heraus,
        mathematische Aufgaben innerhalb von 10 Sekunden zu lösen, und belohnte
        sie mit einem Punktesystem. Mit steigender Punktzahl wurden die Aufgaben
        immer anspruchsvoller. Nach Abschluss des Projekts verkaufte ich das
        Spiel erfolgreich, was mir nicht nur finanzielle Stabilität bot, sondern
        auch die Bestätigung, dass ich auf dem richtigen Weg war.
      </p>
      <p className="text">
        Mit dieser neuen Perspektive und einem gestärkten Selbstbewusstsein
        schloss ich meine berufliche Suche ab und fand das, was mir wirklich
        Freude bereitet: die Welt der Softwareentwicklung. Früher dachte ich,
        dass Programmierer in dunklen Kellern vergraben sind und alleine vor
        sich hin werkeln. Doch ich erkannte, dass dies ein völlig falsches Bild
        war.
      </p>
      <p className="text">
        Im Jahr 2022 begann ich ein Praktikum bei <b>SugarShape</b>, einem
        aufstrebenden Unternehmen, das als Unterwäsche-Label bekannt ist. Nach
        meinem Praktikum boten sie mir eine Stelle als Junior Fullstack
        Developer an. Seitdem arbeite ich an einer Vielzahl spannender
        Inhouse-Projekte. Meine Aufgaben umfassen die Umsetzung von
        React-Projekten sowie die Erstellung verschiedener Landingpages mit CMS
        für verschiedene Kampagnen und Events.
      </p>
      <p className="text">
        Im Jahr 2024 starteten wir bei <b>SugarShape</b> mit dem Umzug unseres
        Oxid-Shops zu Shopify, was eine aufregende neue Phase in meiner Karriere
        als Entwickler darstellte.
      </p>
      <p className="text">
        Neben meiner Tätigkeit bei <p>SugarShape</p> investiere ich auch Zeit
        und Energie in private Projekte, mit denen ich mein Portfolio erweitern
        und mir langfristig ein zusätzliches Einkommen erhoffe. Bislang habe ich
        bereits vier vielversprechende Projekte in der Pipeline.
      </p>
      <p className="text">
        Diese <a href="#projects">privaten Projekte</a> bieten mir nicht nur die
        Möglichkeit, mein Fachwissen und meine Fähigkeiten weiterzuentwickeln,
        sondern auch, meine kreative Seite auszuleben und neue Technologien zu
        erkunden. Jedes Projekt birgt seine eigenen Herausforderungen und
        Chancen, und ich bin bestrebt, sie alle erfolgreich umzusetzen.
      </p>
      <p className="text">
        Die Vielfalt meiner <a href="#projects">Projekte</a> spiegelt meine
        breite Interessenpalette wider und ermöglicht es mir, mich in
        verschiedenen Bereichen der Softwareentwicklung zu engagieren. Von der
        Entwicklung innovativer Apps bis hin zur Gestaltung benutzerfreundlicher
        Websites - ich bin stets bestrebt, meine Fähigkeiten zu erweitern und
        neue Wege zu finden, um Mehrwert zu schaffen.
      </p>
      <p className="text">
        Durch meine <a href="#projects">privaten Projekte</a> kann ich meine
        Kreativität und Innovationskraft voll entfalten und gleichzeitig mein
        unternehmerisches Denken schärfen. Mein Ziel ist es, diese Projekte
        langfristig erfolgreich zu etablieren und mein eigenes Unternehmen
        aufzubauen, das auf meinen individuellen Fähigkeiten und Leidenschaften
        basiert.
      </p>
    </div>
  );
};

export default AboutMe;
