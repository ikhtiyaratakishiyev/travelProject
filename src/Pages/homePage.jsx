import React from 'react'
import NavBar from '../Components/Navbar/Navbar'
import Home from '../Components/Home/Home'
import Main from '../Components/Main/Main'
import Footer from '../Components/Footer/Footer'

const HomePage = () => {
  return (
    <div>
      <NavBar/>
      <Home/>
    <Main/>
    <Footer/>
    </div>
  )
}

export default HomePage