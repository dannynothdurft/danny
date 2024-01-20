"use client";
import "@/styles/home.scss";
import Link from "next/link";
import Image from "next/image";

import Dots from "@/utils/images/Dots_Purple.svg";
import CirBack from "@/utils/images/Circle_Background.svg";
import Avatar from "@/utils/images/Danny_profil_pic.webp";

export default function HomePage() {
  return (
    <div className="dn-home">
      <div className="circle-background">
        <Image
          src={CirBack}
          alt="Circle Background"
          width={305}
          height={361}
          priority={false}
          loading="eager"
        />
      </div>
      <div className="dn-welcome-content">
        <h1>
          Hi, ich bin <br />
          <span className="dn-highlight">Danny Nothdurft</span>
        </h1>

        <p>
          Als Fullstack-Entwickler widme ich mich kontinuierlich an spannenden
          Projekten. Mein Interesse umfasst nicht nur die Entwicklung eigener
          webbasierter Programme, sondern auch den Ankauf und Optimierung
          interessanter Projekte. Derzeit arbeite ich in Vollzeit bei der Firma{" "}
          <Link
            href="https://www.sugarshape.de/"
            title="SugarShape"
            target="_blank"
          >
            SugarShape
          </Link>{" "}
          und bin sowohl in der Entwicklungsabteilung als auch im E-Commerce
          Management tätig.
        </p>

        <p>
          Wenn du Interesse daran hast, dein Projekt zu verkaufen oder
          Unterstützung bei deinem eigenen Vorhaben benötigst, lade ich dich
          herzlich ein, mein{" "}
          <Link href="/kontakt" title="Kontaktformular">
            Kontaktformular
          </Link>{" "}
          auszufüllen.
        </p>
      </div>
      <div className="dn-image-container">
        <Image
          width={149}
          height={93}
          src={Dots}
          alt="35 Punkte"
          className="Dots-Image"
          priority={false}
          loading="eager"
        />
        <Image
          width={632}
          height={632}
          src={Avatar}
          alt="Das bin ich"
          className="Avatar-Image"
          priority={false}
          loading="eager"
        />
      </div>
    </div>
  );
}
