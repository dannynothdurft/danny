import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="HOME--HEADER">
      <div className="HEADER--CONTENT">
        <h1 className="text-4xl font-bold mb-6">
          Verkaufen Dein Webprojekt zum besten Preis
        </h1>
        <p className="text-xl mb-8">
          Ich kaufe Deine Website, Webshop und digitale Projekte. Erhalte eine
          faire Bewertung und schnelle Bezahlung.
        </p>
        <Link href="/kontakt" className="btn">
          Verkaufe jetzt Dein Projekt
        </Link>
      </div>
    </div>
  );
};
export default Header;
