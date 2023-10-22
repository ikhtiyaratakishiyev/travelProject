import React,{useState,useEffect} from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { productData } from '../Data/index'



import "./Pages.scss"

const ProductsPage = (id) => {

    const [currentProduct, setCurrentProduct] = useState({})

    const getData = async()=>{

        const productId = await localStorage.getItem('productId',id)

        const result = productData.map(item=> item.id === productId)

        setCurrentProduct(result);
    }

    useEffect(()=>{
        getData()
    },[])
  return (
    <div>
        <Navbar/>

       <div className="productsPage__container">
      
        <div className="productsPage__img">
               {
                productData.map((id)=>{
                  return(
                    <img src={currentProduct.img1} alt="" />
                  )
                })
               }          
        </div>

         <div className="productsPage__title">
         
         </div>

       </div>
    </div>
  )
}

export default ProductsPage