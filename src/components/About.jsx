
import face from '../assets/face.png'
import React from 'react';
import './About.css'

const About = () => {
    return ( 
        <>
        <div className="container">
            <div className='about'>
                <div className="image">
                    <img src={face} alt="face" />
                    <div className="socials">
                        <a href="https://www.linkedin.com/in/jaehyun-mason-lee" target='_blank' rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" ><path d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23s23-10.317,23-23S37.682,2,25,2z M18,35h-4V20h4V35z M16,17 c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C18,16.105,17.105,17,16,17z M37,35h-4v-5v-2.5c0-1.925-1.575-3.5-3.5-3.5 S26,25.575,26,27.5V35h-4V20h4v1.816C27.168,20.694,28.752,20,30.5,20c3.59,0,6.5,2.91,6.5,6.5V35z"/></svg>
                        </a>
                        <a href="mailto:jhmasonlee@gmail.com">
                            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zM6.231 7h7.52c.399 0 .193.512-.024.643-.217.13-3.22 1.947-3.333 2.014s-.257.1-.403.1a.793.793 0 0 1-.402-.1L6.255 7.643C6.038 7.512 5.833 7 6.231 7zM14 12.5c0 .21-.252.5-.444.5H6.444C6.252 13 6 12.71 6 12.5V8.853c0-.092-.002-.211.172-.11l3.417 2.015a.69.69 0 0 0 .402.1c.146 0 .252-.011.403-.1l3.434-2.014c.174-.102.172.018.172.11V12.5z"/></svg>
                        </a>
                        <a href="https://github.com/jhmlee">
                            <svg viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" /></svg>
                        </a>
                    </div>
                </div>
                <div className="bio">
                <p>As a rising Junior studying Applied Math-Computer Science at Brown University focused on Data and Systems, I'm passionate about solving complex problems and working collaboratively with a focus on data and AI/ML.</p> 
                <p>I spent the last summer working as a finance intern at Verizon, where I utilized both my quantitative and programming knowledge to provide meaningful solutions to the business.</p>
                <p>At school, I'm the website manager for the Applied Mathematics Dept. Undergrad Group, mentor first-year students as a Meiklejohn Peer Advisor, and play IM soccer and basketball.</p>
                <p>In my free time, I enjoy playing soccer, reading books, film photography, and playing all kinds of games with my friends.  </p>
                <p>Thanks for visiting :)</p>
                </div>
            </div> 
        </div>
        
        </>
        
    );
}
 
export default About;