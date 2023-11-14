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
     <div className="travelProject__packages-container">
    

         {/* <div className='travelProject__packages-smalltext'>
            <h3 className='text'>OUR BEST TOURS</h3>
         </div> */}
           
           {
                  Packages.map(({id,img,price,name,description,title,type})=>{
                   return(
             
                    <section className='travelProject__packages-card'>
                                   
                                   <div className="travelProject__packages-img">
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

                                   {/* <div className="travelProject__packages-rate">
                                    <ul>
                                      <li>{name}</li>
                                      <li className='icon'><AiTwotoneStar/></li>
                                      <li className='icon'><AiTwotoneStar/></li>
                                      <li className='icon'><AiTwotoneStar/></li>
                                      <li className='icon'><AiTwotoneStar/></li>
                                      <li className='icon'><BiSolidStarHalf/></li>
                                      <li>{type}</li>
                                    </ul>
                                   </div> */}
                    </section>
                     

                     

                   )
                  })
                }
          

     
      
    </div>
    </>
   
  )
}

export default PackagesPage