import React,{useEffect} from "react";
import {MdOutlineTravelExplore,} from 'react-icons/md'
import {AiOutlineTwitter,AiFillYoutube,AiFillInstagram} from 'react-icons/ai'
import { FiChevronRight } from 'react-icons/fi'
import { FaTripadvisor } from 'react-icons/fa'


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

         <div className="footerCard flex">
                  <div className="footerInfo flex">
                    <div className="logoDiv">
                       <a href="a" className='logo flex' >
                         <MdOutlineTravelExplore className='icon'/>Travel.
                       </a>
                    </div>

                    <div data-aos="fade-up" className="footerparagraph" >
                       <p >
                       Lorem ipsum dolor sit amet consectetur adipisicing 
                        elit. Voluptate cum earum ratione odio laborum illo 
                        reprehenderit corporis quo ipsum sint aliquam, molestias
                         debitis enim sequi. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Voluptate cum earum ratione odio laborum illo 
                        reprehenderit corporis quo ipsum sint aliquam, molestias.
                       </p>
                        
                        
                    </div>

                    <div data-aos="fade-up" className="footerSocials flex">
                      <AiOutlineTwitter className='icon'/>
                      <AiFillYoutube className='icon'/>
                      <AiFillInstagram className='icon'/>
                      <FaTripadvisor className='icon'/>
                    </div>

                    <div  className="footerLinks flex">

                      <div data-aos="fade-up" data-aos-duration='3000' className="linkGroup">
                        <h3>OUR AGENCY</h3>
                          <span className="groupTitle">
                              <li className='footerList flex'>
                                  <FiChevronRight className='icon'/>
                                  Services
                              </li>

                              <li className='footerList flex'>
                                  <FiChevronRight className='icon'/>
                                  Insurance
                              </li>

                              <li className='footerList flex'>
                                  <FiChevronRight className='icon'/>
                                  Agency
                              </li>

                              <li className='footerList flex'>
                                  <FiChevronRight className='icon'/>
                                  Tourism
                              </li>

                              <li className='footerList flex'>
                                  <FiChevronRight className='icon'/>
                                  Payment
                              </li>
                          </span>
                      </div>


                       <div data-aos="fade-up" data-aos-duration='4000' className="linkGroup">
                          <span className="groupTitle">
                          <h3>PARTNERS</h3>
                              <li className='footerList flex'>
                                  <FiChevronRight className='icon'/>
                                  Bookings
                              </li>

                              <li className='footerList flex'>
                                
                                  <FiChevronRight className='icon'/>
                                  Rentcars
                              </li>

                              <li className='footerList flex'>
                                  <FiChevronRight className='icon'/>
                                  Hostelworld
                              </li>

                              <li className='footerList flex'>
                                  <FiChevronRight className='icon'/>
                                  Trivago
                              </li>

                              <li className='footerList flex'>
                                  <FiChevronRight className='icon'/>
                                  Tripadvisor
                              </li>
                          </span>
                      </div> 


                      <div data-aos="fade-up" data-aos-duration='5000' className="linkGroup">
                          <span className="groupTitle">
                          <h3>LAST MINUTE</h3>
                              <li className='footerList flex'>
                                  <FiChevronRight className='icon'/>
                                  United Kingdom
                              </li>

                              <li className='footerList flex'>
                                
                                  <FiChevronRight className='icon'/>
                                  California
                              </li>

                              <li className='footerList flex'>
                                  <FiChevronRight className='icon'/>
                                  Indonesia
                              </li>

                              <li className='footerList flex'>
                                  <FiChevronRight className='icon'/>
                                  Europe
                              </li>

                              <li className='footerList flex'>
                                  <FiChevronRight className='icon'/>
                                  Oceania
                              </li>
                          </span>
                      </div> 

                      <div  className="footerDiv flex">
                         <small>BEST TRAVEL WEBSITE THEME</small>
                         <small>COPYRIGHTS RESERVED-iKHTIYAR ATAKISHIYEV 2023</small>
                      </div>


                    </div>
                  </div>

              </div>

       

      </div>
         
    </section>
  );
};

export default About;