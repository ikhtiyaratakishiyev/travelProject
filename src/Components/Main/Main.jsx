import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { productData } from '../../Data/index'
import {travelData} from '../../Data/index'
import {HiOutlineClipboardCheck, HiOutlineLocationMarker} from 'react-icons/hi'
import Aos from 'aos'
import 'aos/dist/aos.css'

import "./main.scss"



const Main = () => {

    // lets create a react hook to add a scroll animation.

  useEffect(()=>{
   Aos.init({duration:2000})
 },[])

 const navigate = useNavigate()

 const clickHandle= async(item)=>{

   const travelProducts= localStorage.setItem('productId',"item.id")

   navigate('/productsPage')
 }


  return (
   <section className='main container section'>
      <div className="secTitle">
          <h3 data-aos="fade-right"  className="title">
              Most visited destination
          </h3>
      </div>

      <div className="secContent ">
          {/* here I will use high order array method(map) */}
         {
          travelData.map(({id,imgSrc,destTitle,grade,location,fees,description})=>{
             return(

              <div key={id} data-aos="fade-up" className="singleDestination">
                  <div className="imageDiv">
                      <img src={imgSrc} alt={destTitle} />
                  </div>

                  <div className="cardInfo">
                     <h4 className="destTitle">{destTitle}</h4>
                     <span className="content flex">
                        <span className="name">{location}</span>
                        <HiOutlineLocationMarker className='icon'/>
                     </span>

                     <div className="fees flex">
                        <div className="grade">
                           <span>{grade}<small>+1</small></span>
                        </div>
                        <div className="price">
                          <h5>{fees}</h5>
                        </div>
                     </div>

                     <div className="desc">
                        <p>{description}</p> 
                     </div>

                     <button onClick={()=>clickHandle()}   className='btn flex'>
                         DETAILS <HiOutlineClipboardCheck className='icon'/>
                     </button>
                  </div>
              </div>
             )
          })
         }
      </div>
   </section>

  )
}

export default Main