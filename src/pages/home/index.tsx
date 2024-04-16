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
          alt="Hintergrund"
          width={183}
          height={216}
          priority={false}
          loading="eager"
          title="Hintergrund"
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
          Derzeit arbeite ich an einem Marktplatz für Grading-Karten.
          <br />
          Auf dieser Plattform können Nutzer Konten erstellen, um entweder ihre
          eigenen Grading-Karten zum Verkauf anzubieten oder Karten von anderen
          Nutzern zu erwerben. Die Webseite befindet sich noch in der
          Anfangsphase und bietet bisher lediglich eine Registrierungs- und
          Login-Funktion an. Der Design-Stil steht noch nicht endgültig fest und
          wird sich im Laufe der Entwicklung noch ändern. Der nächste Schritt
          wird sein, die Benutzerprofile einzurichten und die Möglichkeit zur
          Erstellung von Anzeigen hinzuzufügen.
          <br />
          <Link
            href="https://grading-card-market.com/"
            title="Grading Card Market"
            target="_blank"
          >
            Grading Card Market
          </Link>
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
          width={50}
          height={30}
          src={Dots}
          alt="35 Punkte"
          className="Dots-Image"
          priority={false}
          loading="eager"
          title="35 Punkte"
        />
        <Image
          width={200}
          height={200}
          src={Avatar}
          alt="Danny Nothdurft"
          className="Avatar-Image"
          priority={false}
          loading="eager"
          title="Danny Nothdurft"
        />
      </div>
    </div>
  );
}
