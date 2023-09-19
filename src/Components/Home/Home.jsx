import React from "react";
import {GrLocation} from 'react-icons/gr'
import {HiFilter} from 'react-icons/hi'
import {FiFacebook} from 'react-icons/fi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {SiTripadvisor} from 'react-icons/si'
import {BsListTask} from 'react-icons/bs'
import {TbApps} from 'react-icons/tb'
import video from "../../Assets/video.mp4";

import "./home.scss";

const Home = () => {
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
           <span className="smallText">
            Our Packages
           </span>
           <h1 className="homeTitle">
            Search your Holiday
           </h1>
         </div>

         <div className="carddiv grid">

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
           
          <div className="searchOptions flex">
            <HiFilter className="icon"/>
            <span>MORE FILTERS</span>
          </div>

         </div>

         <div className="homeFooterIcons flex">
          <div className="rightIcon">
          <FiFacebook className='icon'/>
          <AiOutlineInstagram className='icon'/>
          <SiTripadvisor className='icon'/>
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
