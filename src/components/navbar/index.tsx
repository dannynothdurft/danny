"use client";
import React, { useState } from "react";
import {
  DNavBar,
  DNavContain,
  DNavLink,
  DNavLogo,
  DNavButton,
} from "@/components/navbar/navbar";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const pages = [
    { href: "/", name: "Home", svg: "/svg/me.svg" },
    { href: "/projekte", name: "Projekte", svg: "/svg/projects.svg" },
    { href: "/kontakt", name: "Kontakt", svg: "/svg/contact.svg" },
    { href: "/shop", name: "Shop", svg: "/svg/shop.svg" },
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
