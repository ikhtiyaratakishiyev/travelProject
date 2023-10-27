import React,{useEffect} from 'react'
import Navbar from '../Components/Navbar/Navbar'
import video3 from '../Assets/Videos/video3.mp4'
import './Pages.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'
const PurchasingPage = () => {

    useEffect(()=>{
        Aos.init({duration:2000})
      },[])
  return (
    <>
    <Navbar/>
    <div className="travelProject__purchasing-container">
      <div className="overlay">
         <h1>Purchase</h1>
      </div>
    <video className="video" autoPlay muted loop>
        <source src={video3} type="video/mp4" />
      </video>


          <div data-aos="fade-up" className="travelProject__purchasing-input-wrapper grid  ">

            <div className="travelProject__purchasing-inpt">
                <label htmlFor="number">Select your card number:</label>

                <div className="input flex">
                   <input type="number" placeholder='Card Number' />
                 
                </div>
             
            </div>

            <div className="travelProject__purchasing-inpt ">
                <label htmlFor="date">Select card validation date:</label>

                <div className="input flex">
                <input type="date" />
                
                </div>
           
            </div>

            <div className="travelProject__purchasing-inpt">
                <label htmlFor="number">Select card cvv number:</label>

                <div className="input flex">
                <input type="number" placeholder='cvv' />
                </div>
              
                <div className="travelProject__btn">
                    <button>Confirm</button>
                </div>
            </div>
           
           
          </div>
    </div>
        
    </>
  )
}

export default PurchasingPage