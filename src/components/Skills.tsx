import DATA from "@/data/portfolio.json";

const Skills = () => {
  if (!DATA.skills.length) return null;

  return (
    <section
      className="section skills animate__animated animate__fadeIn animate__delay-5s"
      id="skills"
    >
      <h2 className="section__title">Skills</h2>
      <ul className="skills__list">
        {DATA.skills.map((skill, index) => (
          <li key={index} className="skills__list-item btn btn--plain">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
