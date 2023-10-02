import React from 'react';

import ProjectData from '@/data/projectData.json';
import ProjectCard from '@/components/ProjectCard';

function Projects() {
    return (
        <div className='Projects-Pages'>
            {ProjectData.map(project => (
                <li key={project.id}>
                    <ProjectCard
                        titel={project.titel}
                        text={project.text}
                        github={project.github}
                        website={project.website}
                        image={project.image}
                    />
                </li>
            ))}
        </div>
    )
}

export default Projects