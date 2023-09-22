import React from 'react'

import {travelData} from '../../Data/index'
import {HiOutlineClipboardCheck, HiOutlineLocationMarker} from 'react-icons/hi'
import "./main.scss"



const Main = () => {
  return (
   <section className='main container section'>
      <div className="secTitle">
          <h3 className="title">
              Most visited destination
          </h3>
      </div>

      <div className="secContent ">
          {/* here I will use high order array method(map) */}
         {
          travelData.map(({id,imgSrc,destTitle,grade,location,fees,description})=>{
             return(
              <div key={id} className="singleDestination">
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

                     <button className='btn flex'>
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