import { MainConfig, FooterConfig } from "@/config";
import React from "react";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>
        {FooterConfig.fromYear} {year} {MainConfig.title}
      </p>
      <nav className="NAVIGATION--LINKS--CONTAINER">
        {FooterConfig.navigationLinks.map((navLink) => {
          return (
            <Link href={navLink.href} key={navLink.id}>
              {navLink.label}
            </Link>
          );
        })}
      </nav>
    </footer>
  );
};

export default Footer;
