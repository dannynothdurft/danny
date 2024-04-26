import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../contexts/theme";
import data from "@/data/portfolio.json";
import Image from "next/image";

const Navbar = () => {
  const { themeName, toggleTheme } = useContext<{
    themeName: string;
    toggleTheme: () => void;
  }>(ThemeContext);

  const [showNavList, setShowNavList] = useState(false);
  const projects = data.projects;
  const skills = data.skills;
  const contact = data.contact;
  const about = data.about;
  const { name } = about;

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
    <nav className="nav container animate__animated animate__fadeIn animate__delay-5s">
      <ul
        className="nav__list"
        style={{ display: showNavList ? "flex" : null }}
      >
        <li className="nav__list-item">
          <strong>
            <a href="#top" onClick={hideNavListOverlay} className="link">
              {name || "Über mich"}
            </a>
          </strong>
        </li>

        {projects.length && (
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

        {skills.length && (
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

        {contact.email && (
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
        {showNavList ? (
          <Image
            alt="icon"
            width={30}
            height={30}
            className="icon"
            src="/svg/close.svg"
          />
        ) : (
          <Image
            alt="icon"
            width={30}
            height={30}
            className="icon"
            src="/svg/menu.svg"
          />
        )}
      </button>

      <button
        type="button"
        onClick={toggleTheme}
        aria-label="toggle theme"
        className="btn btn--icon nav__button nav__theme"
      >
        {themeName === "dark" ? (
          <Image
            alt="icon"
            width={30}
            height={30}
            className="icon"
            src="/svg/sun.svg"
          />
        ) : (
          <Image
            alt="icon"
            width={30}
            height={30}
            className="icon"
            src="/svg/moon.svg"
          />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
