import Image from "next/image";

const ProjectCard = ({ project }: { project: any }) => (
  <div className="project">
    {project.thumbnail && (
      <Image
        className="project__thumbnail"
        src={project.thumbnail}
        alt="thumbnail"
        width={200}
        height={150}
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
            <Image
              alt="icon"
              width={30}
              height={30}
              className="icon"
              src="/svg/github.svg"
            />
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
            <Image
              alt="icon"
              width={30}
              height={30}
              className="icon"
              src="/svg/launch.svg"
            />
          </a>
        )}
      </div>
    </div>
  </div>
);

export default ProjectCard;
