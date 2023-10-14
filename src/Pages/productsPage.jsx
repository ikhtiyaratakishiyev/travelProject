import React,{useState,useEffect} from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { productData } from '../Data/index'

const ProductsPage = () => {

    const [currentProduct, setCurrentProduct] = useState({})

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
       {
                productData.map((item)=>{
                   return(
                    <div className="productsPage__img">
        
                    <img src={item.img1_1} alt="" />
                 
                            
                </div>
                   ) 
                })
            }
       

         <div className="productsPage__title-container">
           <div className="productsPage__txt">
             <h2>About tour</h2>
             
                {/* {productData.map((item)=>{
                    return(
                      <p>{item.description}</p>
                    )
                })} */}
             
           </div>
         </div>
       </div>
    </div>
  )
}

export default ProductsPage