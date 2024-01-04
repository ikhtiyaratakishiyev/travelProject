import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Home from '../Components/Home/Home'
import CoruselComponent from '../Components/Corusel/corusel'
import Footer from '../Components/Footer/Footer'


 
const HomePage = () => {

  
  return (
    <div>
        <Navbar/>
        <Home/>
       <CoruselComponent/>
        <Footer/>
    </div>
  )
}

export default HomePage