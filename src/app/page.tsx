import React from "react";
import Link from "next/link";
import Image from "next/image";

import Dots from "@/images/Dots_Purple.svg";
import CirBack from "@/images/Circle_Background.svg";
import Avatar from "@/images/Danny_profil_pic.webp";

export default function Home() {
  return (
    <main>
      <div className="Home-Componente">
        <div className="Circle-Background">
          <Image src={CirBack} alt="Circle Background" width={305} height={361} />
        </div>
        <div className="Text-Container">
          <h1>
          Hi, mein Name ist <br />
            <span className="Highlight">Danny Nothdurft</span>
          </h1>
          
          <p>
          Ich bin Web Investor und engagiere mich in webbasierte Projekte, indem ich in webbasierte Unternehmen investiere. Darüber hinaus erwerbe ich auch webbasierte Projekte und arbeite daran, ihren Umsatz und Gewinn zu steigern.
          </p>

          <span className="Abstand"></span>

          <p>
          Falls du daran interessiert bist, dein Projekt zu verkaufen oder weitere Informationen benötigst, lade ich dich ein, mein <Link href="/contact" title="Kontaktformular">Kontaktformular</Link> auszufüllen. Ich stehe dir gerne zur Verfügung.
          </p>

        </div>
        <div className="Image-Container">
          <Image width={149} height={93} src={Dots} alt="35 Punkte" className="Dots-Image" />
          <Image width={632} height={632} src={Avatar} alt="Das bin ich" className="Avatar-Image" />
        </div>
      </div>
    </main>
  );
}