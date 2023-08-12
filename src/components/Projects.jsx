import React from "react";
import './Projects.css'
import face from '../assets/face.png'
import ProjectItem from './ProjectItem'; // Adjust the import path as needed
import github from '../assets/icons/github.svg'

const Projects = () => {
    const projectsData = [
        {
            title: "Title 1",
            link: "https://github.com/jhmlee",
            description: ["Description 1 point 1", "Description 1 point 2"],
        },
        {
            title: "Title 2",
            link: "https://github.com/jhmlee",
            description: ["Description 2"],
        },
        {
            title: "Title 3",
            link: "https://github.com/jhmlee",
            description: ["Description 3"],
        },
        {
            title: "Title 4",
            link: "https://github.com/jhmlee",
            description: ["Description 4"],
        },
        {
            title: "Title 5",
            link: "https://github.com/jhmlee",
            description: ["Description 5"],
        },
    ];

    return (
        <div className="container">
            <div className="projectGrid">
                {projectsData.map((project, index) => (
                    <ProjectItem
                        key={index}
                        title={project.title}
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
