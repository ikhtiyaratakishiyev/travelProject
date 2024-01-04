import React,{useEffect} from "react";
import {GrLocation} from 'react-icons/gr'
import {FiFacebook} from 'react-icons/fi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {SiTripadvisor} from 'react-icons/si'
import {BsListTask} from 'react-icons/bs'
import {TbApps} from 'react-icons/tb'
import video from "../../Assets/Videos/video.mp4";


import Aos from 'aos'
import 'aos/dist/aos.css'
import "./home.scss";


const Home = () => {

  // lets create a react hook to add a scroll animation.

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])



  return (
    <section className="home">
      <div className="overlay">
        <h1>Home</h1>
      </div>

      <video className="video" autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>

      <div className="homeContent container">
    

         <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcon">
            <a target="blank" href="https://www.facebook.com"><FiFacebook className='icon'/></a>
            <a target="blank" href="https://www.instagram.com"> <AiOutlineInstagram className='icon'/></a>
             <a target="blank" href="https://www.tripadvisor.com/"> <SiTripadvisor className='icon'/></a>
         
          </div>
       
         </div>
      </div>
       
    </section>
    
  );
};

export default Home;
