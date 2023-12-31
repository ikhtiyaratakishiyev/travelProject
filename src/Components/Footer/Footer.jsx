import React,{useEffect} from 'react'
import video2 from '../../Assets/Videos/video2.mp4'
import {Link} from 'react-router-dom'

import {MdOutlineTravelExplore,} from 'react-icons/md'
import {AiOutlineTwitter,AiFillYoutube,AiFillInstagram} from 'react-icons/ai'
import { FiSend,FiChevronRight } from 'react-icons/fi'
import { FaTripadvisor } from 'react-icons/fa'

import Aos from 'aos'
import 'aos/dist/aos.css'

import "./footer.scss"
const Footer = () => {

    // lets create a react hook to add a scroll animation.


    useEffect(()=>{
        Aos.init({duration:2000})
      },[])  


  return (
   <section className='footer'>
        <div className="videoDiv">
           <video className="video" autoPlay muted loop>
        <source src={video2} type="video/mp4" />
           </video>
        </div>

        <div className="secContent container">
              <div className="contactDiv flex">
                 <div data-aos="fade-up" className="text">
                    <small>KEEP IN TOUCH</small>
                    <h2>Travel with Us</h2>
                 </div>

                 <div className="inputDiv flex">
                    <input data-aos="fade-up" type="text" placeholder='Enter Email Adres' />
                    <button data-aos="fade-up" className='btn flex'>
                      <h1>SEND</h1>
                       <FiSend className='icon'/>
                    </button>
                 </div>
              </div>

              <div className="footerCard flex">
                  <div className="footerInfo flex">
                    <div className="logoDiv">
                       <a href="a" className='logo flex' >
                         <MdOutlineTravelExplore className='icon'/>Travel.
                       </a>
                    </div>

                    <div data-aos="fade-up" className="footerparagraph">
                       <p>
                       Lorem ipsum dolor sit amet consectetur adipisicing 
                        elit. Voluptate cum earum ratione odio laborum illo 
                        reprehenderit corporis quo ipsum sint aliquam, molestias
                         debitis enim sequi. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Voluptate cum earum ratione odio laborum illo 
                        reprehenderit corporis quo ipsum sint aliquam, molestias.
                       </p>
                        
                        
                    </div>

                    <div data-aos="fade-up" className="footerSocials flex">
                      
                      <a target='blank' href="https://twitter.com/" >   <AiOutlineTwitter className='icon'/></a>
                      <a target='blank' href="https://www.youtube.com/" >   <AiFillYoutube className='icon'/></a>
                      <a target='blank' href="https://www.instagram.com/" >  <AiFillInstagram className='icon'/></a>
                      <a target='blank' href="https://www.tripadvisor.com/" >  <FaTripadvisor className='icon'/></a>
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
                                 <a className='footerList flex' target='blank' href="https://www.booking.com/"> <FiChevronRight className='icon'/>Booking</a> 
                              </li>

                              <li className='footerList flex'>
                                 <a className='footerList flex' target='blank' href="https://www.rentalcars.com/"> <FiChevronRight className='icon'/>Rentcars</a> 
                              </li>

                              <li className='footerList flex'>
                                 <a className='footerList flex' target='blank' href="https://www.hostelworld.com/"> <FiChevronRight className='icon'/>Hostelworld</a> 
                              </li>
                              <li className='footerList flex'>
                                 <a className='footerList flex' target='blank' href="https://www.trivago.com/"> <FiChevronRight className='icon'/>Trivago</a> 
                              </li>

                              <li className='footerList flex'>
                                 <a className='footerList flex' target='blank' href="https://www.tripadvisor.com/"> <FiChevronRight className='icon'/>Tripadvisor</a> 
                              </li>
                          </span>
                      </div> 

                    

                        

                            <div  data-aos="fade-up" data-aos-duration='5000' className="linkGroup">
                            <span className="groupTitle">
                            <h3>LAST MINUTE</h3>
                                <li  className='footerList flex'>
                                <Link className='footerList flex'  to='/purchasingPage' >
                                    <FiChevronRight className='icon'/>
                                    Baku
                                </Link>
                                   
                                </li>
  
                                <li className='footerList flex'>
                                <Link className='footerList flex'  to='/purchasingPage' >
                                    <FiChevronRight className='icon'/>
                                    Moscow
                                </Link>
                                </li>
  
                                <li className='footerList flex'>
                                <Link className='footerList flex'  to='/purchasingPage' >
                                    <FiChevronRight className='icon'/>
                                    Istanbul
                                </Link>
                                </li>
  
                                <li className='footerList flex'>
                                <Link className='footerList flex'  to='/purchasingPage' >
                                    <FiChevronRight className='icon'/>
                                    Bora Bora
                                </Link>
                                </li>
  
                                <li className='footerList flex'>
                                <Link className='footerList flex'  to='/purchasingPage' >
                                    <FiChevronRight className='icon'/>
                                    India
                                </Link>
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
  )
}

export default Footer