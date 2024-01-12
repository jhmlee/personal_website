import React from "react";
import './Projects.css'
import face from '../assets/face.png'
import ProjectItem from './ProjectItem';
import github from '../assets/icons/github.svg'

const Projects = () => {
    const projectsData = [
        {
            title: "Neural Machine Translation: Language to Logic",
            github: "https://github.com/jhmlee",
            description: ["Implemented a neural machine translation model using a Transformer encoder-decoder architecture with attention to translate natural language to machine-readable logical form expression Successfully developed the full Seq2Seq model with attention to achieve up to 72% exact match accuracy and 89%\
            per-token accuracy on testing data"],
            link: '',
            tags: ["Python", "PyTorch", "NumPy"],
        },
        {
            title: "Expense Tracker",
            github: "https://github.com/jhmlee",
            description: ["Comprehensive MERN stack finance tracking application, utilizes token based authentication"],
            link: '',
            tags: ['Node', 'Express', 'MongoDB', 'Mongoose', 'React', 'Javascript', 'CSS', 'Git'],
        },
        {
            title: "Personal Portfolio",
            github: "https://github.com/jhmlee/personal_website",
            description: ["Designed and executed the proposed design from scratch to create a React.js-based front-end that boasts scalability and interactivity "],
            link: 'https://masonlee-jhmlee.vercel.app',
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
            title: "Spotify Webscraper",
            github: "https://github.com/jhmlee/spotify-webscrape",
            description: ["Utilizes Beautiful Soup python library and Spotify API to scrape and create playlist in Spotify of Billboard top 100 for any given date"],
            tags: ['Python', 'Beautiful Soup'],
        },
        {
            title: "Decision Tree",
            github: "https://github.com/jhmlee",
            description: ["Implemented ID3 machine-learning algorithm to develop a decision tree with proper object-oriented design in Java, trained the tree using a dataset to make predictions in new situations with up to 99.7% accuracy"],
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
