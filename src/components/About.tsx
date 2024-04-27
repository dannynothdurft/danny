import "@/styles/about.scss";

import React, { useState, useEffect } from "react";
import Github from "@/svg/github";
import Linkedin from "@/svg/linkedin";

import DATA from "@/data/portfolio.json";

const About = () => {
  const { name, role, company, description, resume, social, greetingEmoji } =
    DATA.about;
  const [animate, setAnimate] = useState(false);
  const firstName = name ? name.split(" ")[0] : null;

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="about">
      {(firstName || role) && (
        <div>
          {firstName && (
            <h2
              className="about__greeting"
              style={{
                opacity: animate ? 1 : 0,
                transform: animate ? "translateY(0px)" : "translateY(+100px)",
                transition: "opacity 1s, transform 1s",
                transitionDelay: animate ? "0.5s" : "0s",
              }}
            >
              Hey, ich bin <span className="text--strong">{firstName}</span>.
              {greetingEmoji && <span> {greetingEmoji}</span>}
            </h2>
          )}

          {role && (
            <h1
              className="about__role"
              style={{
                opacity: animate ? 1 : 0,
                transform: animate ? "translateY(0px)" : "translateY(+100px)",
                transition: "opacity 1s, transform 1s",
                transitionDelay: animate ? "2s" : "0s",
              }}
            >
              Ein {role}
              {company && (
                <span>
                  {" "}
                  von <span className="text--strong">{company}</span>
                </span>
              )}
              .
            </h1>
          )}
        </div>
      )}

      {description && (
        <div
          style={{
            opacity: animate ? 1 : 0,
            transition: "opacity 1s, transform 1s",
            transitionDelay: animate ? "3s" : "0s",
          }}
        >
          {description && (
            <div className="about__desc paragraph__list">
              {description.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          )}
        </div>
      )}

      {(resume || social) && (
        <div
          className={`about__contact center`}
          style={{
            opacity: animate ? 1 : 0,
            transition: "opacity 1s, transform 1s",
            transitionDelay: animate ? "3s" : "0s",
          }}
        >
          {resume && (
            <a href={resume} target="_blank" rel="noreferrer">
              <button type="button" className="btn btn--outline">
                Resume
              </button>
            </a>
          )}

          {social && (
            <>
              {social.github && (
                <a
                  href={social.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="github"
                  className="link link--icon"
                >
                  <Github />
                </a>
              )}

              {social.linkedin && (
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="linkedin"
                  className="link link--icon"
                >
                  <Linkedin />
                </a>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default About;
