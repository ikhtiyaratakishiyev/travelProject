import React,{useEffect} from "react";
import video from "../../Assets/Videos/video.mp4";
import Footer from "../Footer/Footer";

import Aos from 'aos'
import 'aos/dist/aos.css'

import "./About.scss";

const About = () => {



  useEffect(()=>{
    Aos.init({duration:2000})
  },[])


  return (
    <section className="About ">
    <div className="overlay">
        <h1>Home</h1>
      </div>

      <video className="video" autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>

      <div className="aboutContent ">
       
         <div data-aos="fade-up" className="carddiv__img ">
          <h1 className="About__title"> About Us</h1> 
          <p className="About__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nihil sed in officia natus deleniti similique aspernatur incidunt, corporis necessitatibus molestiae iure pariatur. Voluptates iste aspernatur consequatur, eveniet illum hic aut iure quos rerum, minus velit quasi beatae. Quaerat expedita sit nemo mollitia blanditiis ab eos totam vel officia porro aperiam eligendi ex, alias maxime doloremque sed laudantium, est eius in eveniet impedit magnam quis? Harum aspernatur at ut ab doloremque officia, minima accusamus voluptatem distinctio, sint quae nihil, rem aperiam voluptatibus natus cupiditate voluptates nemo exercitationem velit alias facere debitis. Non fugit tenetur quidem nesciunt error quos ullam autem.</p>           
         </div>

       <Footer/>

      </div>
         
    </section>
  );
};

export default About;