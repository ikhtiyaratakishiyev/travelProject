import React,{useState} from 'react'
import {MdOutlineTravelExplore} from "react-icons/md"
import {AiFillCloseCircle} from "react-icons/ai"
import {TbGridDots} from "react-icons/tb"


import './navbar.scss'

const Navbar = () => {

      const [active, setActive] =useState('navBar')

      // Function to toggle navbar

      const showNav = ()=>{
            setActive('navBar activeNavBar')
      }

// Function to remove navBar
      const removeNavbar = ()=>{
            setActive('navBar')
      }
  return (
  <section className='navbarSection'>
      <header className='header flex'>

        <div className='logoDiv'>
           <a href="logo" className='logo flex'>
                <h1><MdOutlineTravelExplore className="icon"/>  Travel</h1>
                
           </a>
        </div>



        <div className={active}>

           <ul className="navList flex">
                <li className='navItem'>
                      <a href="#" className='navLink'>Home</a>
                </li>

                <li className='navItem'>
                      <a href="#" className='navLink'>Packages</a>
                </li>

                <li className='navItem'>
                      <a href="#" className='navLink'>About</a>
                </li>

                <li className='navItem'>
                      <a href="#" className='navLink'>Pages</a>
                </li>

                <li className='navItem'>
                      <a href="#" className='navLink'>News</a>
                </li>

                <li className='navItem'>
                      <a href="#" className='navLink'>Contact</a>
                </li>

                <button className='btn'>
                    <a href="#">Book Now</a>
                </button>
           </ul>

           <div onClick={removeNavbar}  className="closeNavBar">
             <AiFillCloseCircle className='icon'/>
           </div>
        </div>
        
        <div onClick={showNav} className="toggleNavbar">
            <TbGridDots className='icon'/>
        </div>
      </header>
      
  </section>
  )
}

export default Navbar