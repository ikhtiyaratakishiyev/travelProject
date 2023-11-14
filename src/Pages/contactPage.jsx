import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Location from '../Components/Location/Location'
import video from '../Assets/Videos/video.mp4'
import { ImFacebook2 } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";




import './Pages.scss'
import Footer from '../Components/Footer/Footer'

const ContactPage = () => {
  const location = { lat: 40.3886378, lng: 49.8166182 };
  return (
  <>
    <Navbar/>
    <section className="Contact">
     
      <video className="video" autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>

      <div className="contactContent ">
       <div className="contactlocation">
           {/* <Location location={location}/> */}
       </div>
      <div className="contactText">
        <div className="contactAdres">
         <h5>Adres</h5>
         <p>Tbilisi 5, <br />Baku,Azerbaijan</p>
        </div>
       <div className="contactSocial">
         <ul>
          <li><h5>Social Media</h5></li>
          <li><ImFacebook2 />FaceBook</li>
          <li><BsLinkedin />Linkedin</li>
          <li><FaInstagram />Instagram</li>
          <li><FaTiktok />TikTok</li>
          <li><FaTwitterSquare />Twitter</li>
         </ul>
         
       </div>
        

      </div>

    </div>
    </section>
    <Footer/>
  </>
  )
}

export default ContactPage