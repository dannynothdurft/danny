import ProjectCard from "./ProjectCard";
import { projects } from "@/data/portfolio.json";

const Projects = () => {
  if (!projects.length) return null;

  return (
    <section
      className="section projects animate__animated animate__fadeIn animate__delay-5s"
      id="projects"
    >
      <h2 className="section__title">Projects</h2>
      <div className="projects__column">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
