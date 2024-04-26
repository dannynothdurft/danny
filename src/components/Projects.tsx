import "@/styles/projects.scss";

import ProjectCard from "@/components/ProjectCard";
import DATA from "@/data/portfolio.json";

const Projects = () => {
  if (!DATA.projects.length) return null;

  return (
    <section
      className="section projects animate__animated animate__fadeIn animate__delay-5s"
      id="projects"
    >
      <h2 className="section__title">Projects</h2>
      <div className="projects__column">
        {DATA.projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
