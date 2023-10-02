import React from "react";
import Link from "next/link";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { AiOutlineGlobal } from "@react-icons/all-files/ai/AiOutlineGlobal";

interface ProjectCardProps {
  titel: string;
  text: string;
  github: string;
  website: string;
  image: string;
}

function ProjectCard({
  titel,
  text,
  github,
  website,
  image,
}: ProjectCardProps) {
  return (
    <div className="Project-Card">
      <div className="Project-Pic">
        <img src={image} alt="Project Bild" />
      </div>
      <div className="Project-Info">
        <h2>{titel}</h2>
        <hr />
        <p>{text}</p>
        <div className="Project-Icon-Container">
          <Link href={github}>
            <AiFillGithub className="Project-Icon" />
          </Link>
          <Link href={website}>
            <AiOutlineGlobal className="Project-Icon" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
