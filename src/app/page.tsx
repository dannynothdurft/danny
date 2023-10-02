import React from "react";
import Link from "next/link";
import Image from "next/image";

import Dots from "@/images/Dots_Purple.svg";
import CirBack from "@/images/Circle_Background.svg";
import Avatar from "@/images/Danny_profil_pic.webp";
import WABusiness from "@/images/whatsapp-business.png";

export default function Home() {
  return (
    <main>
      <div className="Home-Componente">
        <div className="Circle-Background">
          <Image src={CirBack} alt="Circle Background" width={305} height={361} />
        </div>
        <div className="Text-Container">
          <h1>
            Hi, ich bin ein <br />
            <span className="Highlight">Web-Entwickler</span>
          </h1>
          <p>
            Hi, ich bin Danny und habe gerade die Umschulung bei der
            <Link href="https://digitalcareerinstitute.org/">Digital Career Institute gGmbH (DCI)</Link>
            für die Web-Entwicklung abgeschlossen.
          </p>

          <span className="Abstand"></span>

          <p>
            Zurzeit arbeite ich bei der Firma
            <Link href="https://sugarshape.de">SugarShape GmbH</Link>
            als Web-Developer
          </p>

          <span className="Abstand"></span>

          <p>
            Fals du mich für kleine Projekte Buchen möchtest, schreibe mir gerne per WhatsApp.
          </p>

          <a
            href="https://api.whatsapp.com/send?phone=4917656612113"
            title="Schreibe mir für ein Job Angebot"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image
              src={WABusiness}
              alt="WhatsApp"
              className="WhatsApp-Button"
              width={163}
              height={78}
            />
          </a>
        </div>
        <div className="Image-Container">
          <Image width={149} height={93} src={Dots} alt="35 Punkte" className="Dots-Image" />
          <Image width={632} height={632} src={Avatar} alt="Das bin ich" className="Avatar-Image" />
        </div>
      </div>
    </main>
  );
}