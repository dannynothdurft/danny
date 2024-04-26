import { about } from "@/data/portfolio.json";
import Image from "next/image";

const About = () => {
  const { name, role, company, description, resume, social, greetingEmoji } =
    about;
  const firstName = name ? name.split(" ")[0] : null;
  const fadeInAnimationClassName =
    "animate__animated animate__fadeIn animate__delay-5s";

  return (
    <div className="about">
      <div className="about__pseudo-padding about__pseudo-padding-top" />

      {(firstName || role) && (
        <div>
          {firstName && (
            <h1 className="about__greeting animate__animated animate__fadeInUp animate__delay-1s">
              Hi, ich bin <span className="text--strong">{firstName}</span>.
              {greetingEmoji && <span> {greetingEmoji}</span>}
            </h1>
          )}

          {role && (
            <h1 className="about__role animate__animated animate__fadeInUp animate__delay-3s">
              Ich bin ein {role}
              {company && (
                <span>
                  bei <span className="text--strong">{company}</span>
                </span>
              )}
              .
            </h1>
          )}
        </div>
      )}

      {description && (
        <div className={fadeInAnimationClassName}>
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
        <div className={`about__contact center ${fadeInAnimationClassName}`}>
          {resume && (
            <a href={resume} target="_blank" rel="noreferrer">
              <span className="btn btn--outline">Resume</span>
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
                  <Image
                    className="icon"
                    src="/svg/github.svg"
                    alt="Github"
                    width={30}
                    height={30}
                  />
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
                  <Image
                    className="icon"
                    src="/svg/linkin.svg"
                    alt="LinkIn"
                    width={30}
                    height={30}
                  />
                </a>
              )}
            </>
          )}
        </div>
      )}

      <div className="about__pseudo-padding" />
    </div>
  );
};

export default About;
