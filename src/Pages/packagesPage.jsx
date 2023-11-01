import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Packages } from '../Data/index'
import {FaAccessibleIcon} from 'react-icons/fa'

import './Pages.scss'

const PackagesPage = () => {
  return (
    <>
      <Navbar/>

      <div className="travelProject__packages-container">
         <div className='travelProject__packages-smalltext'>
            <h3 className='text'>OUR BEST TOURS</h3>
         </div>
        <div className="travelProject__packages-cards">

           <div className="travelPfroject__packages-title">
              <h3>BEST TOUR</h3>
           </div>
           {
                  Packages.map(({id,img,price,name,description,title,type})=>{
                   return(
                    <div className="travelProject__packages-info ">
                                   
                      <div className="travelProject__packages-img">
                          <img src={img} alt="" />
                      </div>

                      <div className="travelProject__packages-description">
                           <h2>{title}</h2>
                           <p>{description}</p>
                      </div>
               
                      <div className="travelProject__packages-price">
                         from
                         <p> {price}</p>
                            <FaAccessibleIcon className='icon'/>
                     </div>

           </div>
                   )
                  })
                }
          

          
        </div>
      </div>
      
    </>
  )
}

export default PackagesPage