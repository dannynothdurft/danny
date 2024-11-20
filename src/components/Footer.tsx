import Link from "next/link";

const Footer = () => (
  <footer className="footer">
    <Link
      href="#"
      target="_blank"
      rel="noreferrer"
      className="link footer__link"
    >
      Created by Danny Nothdurft
    </Link>
    <Link href="/dsgvo" rel="noreferrer" className="link footer__link">
      Datenschutz
    </Link>
  </footer>
);

export default Footer;
