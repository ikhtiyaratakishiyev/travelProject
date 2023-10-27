import React,{useState,useEffect} from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import { productData } from '../Data/index'
import {Link} from 'react-router-dom'


import "./Pages.scss"

const ProductPage = (id) => {

  const [currentProduct ,setCurrentProduct]= useState({})

  const getData =async()=>{

    const productId = await localStorage.getItem("productId")

    const result =productData.find(item=>item.id==productId)

   setCurrentProduct(result);
  }

    useEffect(()=>{
      getData()
    },[])
  return (
    <div>
        <Navbar/>

       <div className="productPage__container">
      
        <div className="productPage__img">
          <img src={currentProduct.img1} alt="" /> 
          <img src={currentProduct.img2} alt="" /> 
          <img src={currentProduct.img3} alt="" />         
        </div>

         <div className="productPage__title">
          
           <div className="productPage__text">
                 <p>{currentProduct.description}</p>
                 <div className="productPage__btn">
                  <Link to='/purchasingPage'>
                  <button>Buy Now</button>
                  </Link>
                 
           </div>

           </div>

           

         </div>

        
       </div>

       <Footer/>
    </div>
  )
}

export default ProductPage