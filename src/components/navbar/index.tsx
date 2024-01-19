"use client";
import React, { useState, useEffect } from "react";
import {
  DNavBar,
  DNavContain,
  DNavLink,
  DNavLogo,
  DNavButton,
} from "@/components/navbar/navbar";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth > 1200) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const pages = [
    { href: "/", name: "Home", svg: "/svg/me.svg" },
    { href: "/projekte", name: "Projekte", svg: "/svg/projects.svg" },
    { href: "/kontakt", name: "Kontakt", svg: "/svg/contact.svg" },
  ];

  return (
    <DNavBar>
      <DNavLink link="logo" href="/" name={<DNavLogo src="/logo.svg" />} />

      <DNavButton con={menuOpen} setCon={setMenuOpen} />
      <DNavContain device="desktop">
        {pages.map((page, index) => {
          return <DNavLink href={page.href} name={page.name} key={index} />;
        })}
      </DNavContain>
      {menuOpen ? (
        <DNavContain device="mobile">
          {pages.map((page, index) => {
            return (
              <DNavLink
                href={page.href}
                name={page.name}
                svg={page.svg}
                key={index}
                con={menuOpen}
                setCon={setMenuOpen}
              />
            );
          })}
        </DNavContain>
      ) : null}
    </DNavBar>
  );
}

export default Navbar;
