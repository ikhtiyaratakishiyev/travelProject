import React,{useState,useEffect} from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { productData } from '../Data/index'



import "./Pages.scss"

const ProductsPage = () => {

    const [currentProduct, setCurrentProduct] = useState({})

    const getData = async()=>{

        const productId = await localStorage.getItem('productId')

        const result = productData.map(item=>item.id==productId)

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
                <img src={currentProduct.img1} alt="" />           
        </div>

         <div className="productsPage__title">
           {/* <p>
                     Bora Bora is an island group in the Leeward Islands. The Leeward Islands comprise the western part of the Society Islands of French Polynesia, 
            which is an overseas collectivity of the French Republic in the Pacific Ocean. Bora Bora has a total land area of 30.55 km2 (12 sq mi). The main
           island,located about 230 kilometres (125 nautical miles) northwest of Papeete, is surrounded by a lagoon and a barrier reef. In the center of the island 
            are the remnants of an extinct volcano, rising to two peaks, Mount Pahia and Mount Otemanu; the highest point is at 727 m (2,385 ft). Bora Bora is part of
           the Commune of Bora-Bora, which also includes the atoll of Tūpai. The languages spoken in Bora Bora are Tahitian and French. However, due to the high 
           tourism population, many natives of Bora Bora have learned to speak English.[2]Bora Bora is a major international tourist destination, famous for its 
           seaside (and even offshore) luxury resorts. The major settlement, Vaitape, is on the western side of the main island, opposite the main channel leading
            into the lagoon. Produce of the island is mostly limited to what can be obtained from the sea and from the plentiful coconut trees, which were
             historically of economic importance for the production of copra.

           </p> */}
         </div>

       </div>
    </div>
  )
}

export default ProductsPage