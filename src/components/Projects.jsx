import React from "react";
import './Projects.css'
import face from '../assets/face.png'
import ProjectItem from './ProjectItem'; // Adjust the import path as needed
import github from '../assets/icons/github.svg'

const Projects = () => {
    const projectsData = [
        {
            title: "Title 1",
            github: "https://github.com/jhmlee",
            description: ["Description 1 point 1", "Description 1 point 2"],
            link: '',
        },
        {
            title: "Title 2",
            github: "https://github.com/jhmlee",
            description: ["Description 2"],
            link: '',
        },
        {
            title: "Title 3",
            github: "https://github.com/jhmlee",
            description: ["Description 3"],
            link: '',
        },
        {
            title: "Title 4",
            github: "https://github.com/jhmlee",
            description: ["Description 4"],
            link: '',
        },
        {
            title: "Title 5",
            github: "https://github.com/jhmlee",
            description: ["Description 5"],
            link: '',
        },
    ];

    return (
        <div className="container">
            <div className="projectGrid">
                {projectsData.map((project, index) => (
                    <ProjectItem
                        key={index}
                        title={project.title}
                        github={project.github}
                        link={project.link}
                        description={
                            <ul>
                                {project.description.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        }
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
