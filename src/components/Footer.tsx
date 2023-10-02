import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <div className="Footer-Componente">
      <p>© 2023 Danny Nothdurft. Powered by Danny Nothdurft</p>
      <ul>
        <li>
          <Link href="/impressum">Impressum</Link>
        </li>
        <li>
          <Link href="/dsgvo">Datenschutz</Link>
        </li>
      </ul>
    </div>
  );
}

export default Footer;