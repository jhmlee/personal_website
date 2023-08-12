
import React, {useState, useEffect} from 'react';
import './Home.css'
import './AosInit'; 
import HomeProjects from './HomeProjects';

const Home = () => {
    const [isActive, setIsActive] = useState(false);
    const projectsData = [
        {
            projectName: "ProjectA",
            link: "https://github.com/jhmlee",
            description: ["Description 1 point 1", "Description 1 point 2"],
            image: "",
        },
        {
            projectName: "ProjectB",
            link: "https://github.com/jhmlee",
            description: ["Description 2"],
            image: "",
        },
    ];

    const generateAOSAttributes = (delay) => ({
        'data-aos': 'zoom-in',
        'data-aos-delay': delay,
      });      

    useEffect(() => {
        setIsActive(true);
      }, []);

          
    return (
        <div className = "home">
            <div className="homeText">
                <p className="name" {...generateAOSAttributes(0)} >Hi, I'm &#160;<span className={`Mason ${isActive ? 'active' : ''}`}>Mason</span>.</p>
                <p {...generateAOSAttributes(500)} >Previously &#160;<a href=""> @Verizon</a></p>
                <p {...generateAOSAttributes(1000)} >Studying CS and Applied Math &#160;<a href=""> @BrownU</a></p>
                <p {...generateAOSAttributes(1500)}  >Nice to meet you  &#160;<span className='wave'>👋</span></p>
                <div className='projectStart'>
                    <p className='arrow'>↓</p>
                </div>
            </div>
            <div class="main_bg"></div>
            <div class="main_bg layer1"></div>
            <div class="main_bg layer 2"></div>
            <div className='projectsMain'>
                <div className="projectPages">
                {projectsData.map((project, index) => (
                    <HomeProjects
                        key={index}
                        projectName={project.projectName}
                        git={project.git}
                        description={
                            <ul>
                                {project.description.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        }
                        image={project.image}
                    />
                ))}
                </div>
            </div>
        </div>
      );
}
 
export default Home;