import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
// import Footer from '../Components/Footer/Footer'
import video from '../Assets/Videos/video.mp4'

import './Pages.scss'
import Footer from '../Components/Footer/Footer'

const ContactPage = () => {
  return (
  <>
    <Navbar/>
    <section className="Contact">
     
      <video className="video" autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>

      <div className="contactContent ">
       
      <h1>bvbvbvb</h1>

    </div>
    </section>
    <Footer/>
  </>
  )
}

export default ContactPage