import React from "react";
import Link from "next/link.js";

import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { AiOutlineGlobal } from "@react-icons/all-files/ai/AiOutlineGlobal";

function ProjectCard({ titel, text, github, website, image }) {
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
