
import React, {useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import './Home.css'
const Home = () => {

    useEffect(() => {
        Aos.init({duration: 2000});
      }, []);

    return (
        <div className = "home">
            <div className="homeText">
                <p className="name" data-aos="zoom-in" >Hi, I'm &#160;<span className='Mason'>Mason</span>.</p>
                <p data-aos="zoom-in" data-aos-delay="500" >Previously &#160;<a href=""> @Verizon</a></p>
                <p data-aos="zoom-in" data-aos-delay="1000">Studying CS and Applied Math &#160;<a href=""> @BrownU</a></p>
                <p data-aos="zoom-in" data-aos-delay="1500" >Nice to meet you  &#160;<span className='wave'>👋</span></p>
            </div>
            <div class="main_bg"></div>
            <div class="main_bg layer1"></div>
            <div class="main_bg layer 2"></div>
        </div>
      );
}
 
export default Home;