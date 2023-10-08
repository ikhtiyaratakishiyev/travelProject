import React,{useEffect} from "react";
import about from '../../Assets/Images/about.jpg'


import video from "../../Assets/Videos/video.mp4";
import Aos from 'aos'
import 'aos/dist/aos.css'

import "./About.scss";

const About = () => {



  useEffect(()=>{
    Aos.init({duration:2000})
  },[])


  return (
    <section className="About ">
   

      <video className="video" autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>

      <div className="aboutContent ">
       
         <div data-aos="fade-up" className="carddiv__img ">
           <img src={about} alt="about" />            
         </div>

         <div data-aos="fade-up" className="carddiv__title ">
               <h1 className="aboutTitle">About Us</h1>
               <p className="aboutTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, hic aliquam. Optio, quod, id minima nostrum animi illum exercitationem atque commodi voluptatem perferendis fugiat minus dolorem necessitatibus accusamus voluptatum delectus consequatur doloribus ratione tempora eligendi, eius temporibus velit ipsa neque! Nemo repellendus provident, nobis sunt libero aliquid labore reiciendis voluptate odit aut dolorum. Rerum non dolor esse est ipsa natus sed numquam voluptatum harum repellat, dolores illum optio, cum eveniet minima commodi quod quas maiores provident omnis, dolore accusamus soluta deleniti earum! Adipisci error asperiores omnis nostrum libero numquam voluptatum fugit, saepe quo officia, facilis natus quod facere, dolore ex. </p>
          </div>

       

      </div>
         
    </section>
  );
};

export default About;