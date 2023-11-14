import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Packages } from '../Data/index'
import {BiEuro} from 'react-icons/bi'
import { Link } from 'react-router-dom'

import Aos from 'aos'
import 'aos/dist/aos.css'
import './Pages.scss'

const PackagesPage = () => {
  return (
    <>
      <Navbar/>
  
           {
                  Packages.map(({id,img,price,name,description,title,type})=>{
                   return(
             
                    <section className="travelProject__packages-container">
                                   
                                   <div data-aos="fade-up" className="travelProject__packages-img">
                                       <img src={img} alt="" />
                                   </div>
                                   <div data-aos="fade-up" className="travelProject__packages-info ">
             
                                   <div className="travelProject__packages-description">
                                        <h2>{title}</h2>
                                        <p>{description}</p>
                                   </div>
                            
                                   <div className="travelProject__packages-price">
                                      from
                                      <p> {price}</p>
                                         <BiEuro className='icon'/>
                                    </div>

                                    <div className="travelproject__packages-btn">
                                    <Link to='/purchasingPage'>
                  <button>Buy Now</button>
                  </Link>
                                    </div>
             
                                   </div>

                                 
                    </section>
                     

                     

                   )
                  })
                }
   
    </>
   
  )
}

export default PackagesPage