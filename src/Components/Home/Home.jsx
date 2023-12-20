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
         <div className="textDiv">
           <span data-aos="fade-up" className="smallText">
            Our Packages
           </span>
           <h1 data-aos="fade-up" className="homeTitle">
            Search your Holiday
           </h1>
         </div>

         <div data-aos="fade-up" className="carddiv grid">

           <div className="destinationInput">
            <label htmlFor="city">Search your Destination</label>
           <div className="input flex">
             <input type="text" placeholder="Enter your name..." />
              <GrLocation className="icon"/>
           </div>
           </div>

          <div className="dateInput">
             <label htmlFor="date">Select your 
             date:</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>

          <div className="priceInput">
              <div className="label_total flex">
                  <label htmlFor="price">MaxPrice:</label>
                  <h3 className="total">$5000</h3>
              </div>
              <div className="input flex">
                  <input type="range" max='5000' min='1000' />
              </div>
          </div>
           
        
         </div>

         <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcon">
            <a target="blank" href="https://www.facebook.com"><FiFacebook className='icon'/></a>
            <a target="blank" href="https://www.instagram.com"> <AiOutlineInstagram className='icon'/></a>
             <a target="blank" href="https://www.tripadvisor.com/"> <SiTripadvisor className='icon'/></a>
         
          </div>
          <div className="leftIcon">
          <BsListTask className='icon'/>
          <TbApps className='icon'/> 
          </div>
         </div>
      </div>
       
    </section>
    
  );
};

export default Home;
