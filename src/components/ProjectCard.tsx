import Github from "@/svg/github";
import Launch from "@/svg/launch";

const ProjectCard = ({ project }: { project: any }) => (
  <div className="project">
    {project.thumbnail && (
      <img
        className="project__thumbnail"
        src={project.thumbnail}
        alt="thumbnail"
      />
    )}

    <div className="project__info">
      {project.name && <h3>{project.name}</h3>}

      {project.description && (
        <div className="project__description paragraph__list">
          {project.description.map((item: string, index: number) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      )}

      {project.stack && (
        <ul className="project__stack">
          {project.stack.map((item: string, index: number) => (
            <li key={index} className="project__stack-item">
              {item}
            </li>
          ))}
        </ul>
      )}

      <div className="project__links">
        {project.sourceCode && (
          <a
            href={project.sourceCode}
            target="_blank"
            rel="noreferrer"
            aria-label="source code"
            className="link link--icon"
          >
            <Github />
          </a>
        )}

        {project.livePreview && (
          <a
            href={project.livePreview}
            target="_blank"
            rel="noreferrer"
            aria-label="live preview"
            className="link link--icon"
          >
            <Launch />
          </a>
        )}
      </div>
    </div>
  </div>
);

export default ProjectCard;
