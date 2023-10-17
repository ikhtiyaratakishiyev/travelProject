import React,{useState,useEffect} from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { productData } from '../Data/index'



import "./Pages.scss"
const ProductsPage = () => {

    // const [currentProduct, setCurrentProduct] = useState({})

    // const getData = async()=>{
    //     const productId = await localStorage.getItem('productId')

    //     const result = productData.find(item=>item.id===productId)

    //     setCurrentProduct(result)
    // }

    useEffect(()=>{
        // getData()
    },[])
  return (
    <div>
        <Navbar/>

       <div className="productsPage__container">
      
        <div className="productsPage__img">
           {
            productData.map((item)=>{
              return(
                <img src={item.img1} alt="" />
              )
            })
           }
        </div>

         <div className="productsPage__title">
         {
            productData.map((item)=>{
              return(
                <h2>{item.description}</h2>
              )
            })
           }         
         </div>

       </div>
    </div>
  )
}

export default ProductsPage