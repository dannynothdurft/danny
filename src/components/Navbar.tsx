"use client";
import { useEffect, useState } from "react";

import DATA from "@/data/portfolio.json";

import ThemeSwitch from "@/module/theme/ThemeSwitcher";

import Logo from "@/svg/logo";
import Close from "@/svg/close";
import Menu from "@/svg/menu";

const Navbar = () => {
  const [showNavList, setShowNavList] = useState(false);
  const { name } = DATA.about;
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const toggleNavListOverlay = () => {
    showNavList
      ? document.body.classList.remove("disable-scroll")
      : document.body.classList.add("disable-scroll");
    setShowNavList(!showNavList);
  };

  const hideNavListOverlay = () => {
    document.body.classList.remove("disable-scroll");
    setShowNavList(false);
  };

  useEffect(() => {
    const hideNavListOverlayIfScreenTooBig = () =>
      window.innerWidth > 600 ? hideNavListOverlay() : null;
    window.addEventListener("resize", hideNavListOverlayIfScreenTooBig);
    return () =>
      window.removeEventListener("resize", hideNavListOverlayIfScreenTooBig);
  }, []);

  return (
    <nav
      className="nav container"
      style={{
        opacity: animate ? 1 : 0,
        transition: "opacity 1s, transform 1s",
        transitionDelay: animate ? "3s" : "0s",
      }}
    >
      <ul className={showNavList ? "nav__list open" : "nav__list"}>
        <li className="nav__list-item">
          <strong>
            <a
              href="#top"
              onClick={hideNavListOverlay}
              className="link nav__link__icon"
            >
              <Logo width="18px" height="18px" />
              {name || "About Me"}
            </a>
          </strong>
        </li>

        {DATA.projects.length && (
          <li className="nav__list-item">
            <a
              href="#projects"
              onClick={hideNavListOverlay}
              className="link link--nav"
            >
              Projekte
            </a>
          </li>
        )}

        {DATA.skills.length && (
          <li className="nav__list-item">
            <a
              href="#skills"
              onClick={hideNavListOverlay}
              className="link link--nav"
            >
              Skills
            </a>
          </li>
        )}

        {DATA.aboutMe && (
          <li className="nav__list-item">
            <a
              href="#aboutMe"
              onClick={hideNavListOverlay}
              className="link link--nav"
            >
              Über mich
            </a>
          </li>
        )}

        {DATA.contact.email && (
          <li className="nav__list-item">
            <a
              href="#contact"
              onClick={hideNavListOverlay}
              className="link link--nav"
            >
              Kontakt
            </a>
          </li>
        )}
      </ul>

      <button
        type="button"
        onClick={toggleNavListOverlay}
        aria-label="toggle navigation"
        className="btn btn--icon nav__button nav__hamburger"
      >
        {showNavList ? <Close /> : <Menu />}
      </button>
      <ThemeSwitch />
    </nav>
  );
};

export default Navbar;
