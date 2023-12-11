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
          <p className="About__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque culpa inventore qui dignissimos nobis itaque temporibus minus deleniti, nihil molestias nulla. Nobis aliquam illo beatae harum cum voluptas fuga libero obcaecati, numquam voluptatum qui velit magni ipsam deserunt voluptatem soluta modi aliquid dolores quia minima, cumque iste quod. Quibusdam, dolorem optio? Eaque recusandae veritatis pariatur, delectus natus, totam deleniti impedit atque facere dicta ad eligendi vero architecto alias commodi amet ea ab necessitatibus. Earum distinctio doloremque omnis nemo dolorem rem consequuntur, amet impedit reiciendis molestias nisi. Illo modi vel laudantium quasi eum fuga, ducimus et cupiditate eius praesentium velit iure esse. Corporis fugiat suscipit accusantium! Dolores, dignissimos. Consequuntur consectetur, quod velit voluptatem quas dolorum. Officia tenetur, dolorum nulla facere architecto aspernatur sit maxime consequatur accusantium expedita? Architecto adipisci, dolor impedit tempore tenetur expedita officia, blanditiis ex vel aliquid sunt consequatur, facilis nisi nostrum nulla porro! Illo possimus expedita, eveniet consequuntur vero nobis sunt fuga ullam minima autem impedit nisi itaque. Reprehenderit exercitationem amet dolorem adipisci beatae. Tempore impedit, praesentium quaerat voluptate facilis dolorem earum tenetur beatae assumenda aspernatur, qui recusandae autem velit architecto provident ullam soluta cupiditate deserunt nesciunt, adipisci necessitatibus minima mollitia repudiandae eum. Dolorem mollitia facilis architecto maxime.</p>           
         </div>

       <Footer/>

      </div>
         
    </section>
  );
};

export default About;