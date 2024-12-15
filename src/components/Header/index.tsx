import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="HOME--HEADER">
      <div className="HEADER--CONTENT">
        <h1>Ich kaufen Ihre Webseite!</h1>
        <p>
          Verkaufen Sie Ihre Webseite schnell und unkompliziert. Ich bieten
          Ihnen faire Preise und eine sichere Abwicklung.
        </p>
        <Link href="/kontakt" className="btn">
          Angebot erhalten
        </Link>
      </div>
    </div>
  );
};
export default Header;
