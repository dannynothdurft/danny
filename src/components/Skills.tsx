import data from "@/data/portfolio.json";

const Skills = () => {
  const skills = data.skills;
  return (
    <section
      className="section skills animate__animated animate__fadeIn animate__delay-5s"
      id="skills"
    >
      <h2 className="section__title">Skills</h2>
      <ul className="skills__list">
        {skills.map((skill, index) => (
          <li key={index} className="skills__list-item btn btn--plain">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
