import "@/styles/project.scss";

import ProjectCard from "@/components/ProjectCard";
import DATA from "@/data/portfolio.json";

const Projects = () => {
  if (!DATA.projects.length) return null;

  return (
    <section className="section projects" id="projects">
      <h2 className="section__title">Projekte</h2>
      <div className="projects__column">
        {DATA.projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
