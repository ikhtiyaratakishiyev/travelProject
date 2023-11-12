import React from "react";
import video from '../Assets/Videos/video.mp4'
import Navbar from "../Components/Navbar/Navbar";
import Footer from '../Components/Footer/Footer'


import './Pages.scss'



const AboutPage = () => {
  return (
    <>
     <Navbar />
     <section className="About">
     
      {/* <About/> */}
      <div className="overlay">
    
      </div>

      <video className="video" autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
      <div className="aboutContent ">
       
       <div data-aos="fade-up" className="carddiv__img ">
        <h1 className="About__title"> About Us</h1> 
        <p className="About__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nihil sed in officia natus deleniti similique aspernatur incidunt, corporis necessitatibus molestiae iure pariatur. Voluptates iste aspernatur consequatur, eveniet illum hic aut iure quos rerum, minus velit quasi beatae. Quaerat expedita sit nemo mollitia blanditiis ab eos totam vel officia porro aperiam eligendi ex, alias maxime doloremque sed laudantium, est eius in eveniet impedit magnam quis? Harum aspernatur at ut ab doloremque officia, minima accusamus voluptatem distinctio, sint quae nihil, rem aperiam voluptatibus natus cupiditate voluptates nemo exercitationem velit alias facere debitis. Non fugit tenetur quidem nesciunt error quos ullam autem.</p>           
       </div>

    </div>
    </section>
    <Footer/>
    </>
   
  );
};

export default AboutPage;
