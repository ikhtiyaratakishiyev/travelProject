import React from 'react'
import video2 from '../../Assets/Videos/video2.mp4'

import {MdOutlineTravelExplore,} from 'react-icons/md'
import {AiOutlineTwitter,AiFillYoutube,AiFillInstagram} from 'react-icons/ai'
import { FiSend,FiChevronRight } from 'react-icons/fi'
import { FaTripadvisor } from 'react-icons/fa'
import "./footer.scss"
const Footer = () => {
  return (
   <section className='footer'>
        <div className="videoDiv">
           <video className="video" autoPlay muted loop>
        <source src={video2} type="video/mp4" />
           </video>
        </div>

        <div className="secContent container">
              <div className="contactDiv flex">
                 <div className="text">
                    <small>KEEP IN TOUCH</small>
                    <h2>Travel with Us</h2>
                 </div>

                 <div className="inputDiv flex">
                    <input type="text" placeholder='Enter Email Adres' />
                    <button className='btn flex'>
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

                    <div className="footerparagraph">
                       <p>
                       Lorem ipsum dolor sit amet consectetur adipisicing 
                        elit. Voluptate cum earum ratione odio laborum illo 
                        reprehenderit corporis quo ipsum sint aliquam, molestias
                         debitis enim sequi. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Voluptate cum earum ratione odio laborum illo 
                        reprehenderit corporis quo ipsum sint aliquam, molestias.
                       </p>
                        
                        
                    </div>

                    <div className="footerSocial">
                      <AiOutlineTwitter className='icon'/>
                      <AiFillYoutube className='icon'/>
                      <AiFillInstagram className='icon'/>
                      <FaTripadvisor className='icon'/>
                    </div>

                    <div className="footerLinks grid">
                      <div className="linkGroup">
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
                    </div>
                  </div>

              </div>
        </div>
   </section>
  )
}

export default Footer