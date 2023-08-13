import React from "react";
import './Projects.css'
import face from '../assets/face.png'
import ProjectItem from './ProjectItem';
import github from '../assets/icons/github.svg'

const Projects = () => {
    const projectsData = [
        {
            title: "SAT Solver",
            github: "https://github.com/jhmlee",
            description: ["Intuitively visualize and solve NP-complete Boolean satisfiability problems", "Solver includes multiple algorithms and their visualizations to fully understand logic"],
            link: '',
            tags: ['React', 'Javascript', 'CSS', 'Git'],
        },
        {
            title: "Personal Portfolio",
            github: "https://github.com/jhmlee/personal_website",
            description: ["Designed and executed the proposed design from scratch to create a React.js-based front-end that boasts scalability and interactivity "],
            link: '',
            tags: ['React', 'Javascript', 'CSS', 'HTML','Figma'],
        },
        {
            title: "Concurrent Store",
            github: "https://github.com/jhmlee",
            description: ["High-performance concurrent key-value store, facilitating efficient operations on KV- pairs while dynamically managing load distribution",],
            link: '',
            tags: ['C'],
        },
        {
            title: "Wiki Search Engine",
            github: "https://github.com/jhmlee",
            description: ["Custom search engine to index and query XML wikis", "Utilizes TF/IDF term weighting and Google's PageRank Algorithm to return optimized results"],
            tags: ['Python'],
        },
        {
            title: "Decision Tree",
            github: "https://github.com/jhmlee",
            description: ["Description 5"],
            tags: ['Java'],
        },
    ];

    return (
        <div className="container">
            <div className="projectGrid">
                {projectsData.map((project, index) => (
                    <ProjectItem
                        key={index}
                        title={<div><h3>{project.title}</h3> </div>   }
                        github={project.github}
                        link={project.link}
                        description={
                            <ul>
                                {project.description.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        }
                        tags={
                            <div className="tags-container">
                                {project.tags.map((tag, i) => (
                                    <button key={i} className="tag-button">
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        }
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
