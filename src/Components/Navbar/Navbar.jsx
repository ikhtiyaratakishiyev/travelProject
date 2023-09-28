import React,{useState} from 'react'
import {Link} from 'react-router-dom'
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
           {/* <a href="logo" className='logo flex'>
                <h1><MdOutlineTravelExplore className="icon"/>  Travel</h1>
                
           </a> */}

           <Link className='logo flex' to='/'>
                <h1><MdOutlineTravelExplore className="icon"/>  Travel</h1>
           </Link>

        </div>



        <div className={active}>

           <ul className="navLists flex">
                <li className='navItem'>
                      {/* <a href="#" className='navLink'>Home</a> */}
                      <Link  to='/'>
                        <li className='navLink'>Home</li>
                      </Link>
                </li>

                <li className='navItem'>
                      {/* <a href="#" className='navLink'>Packages</a> */}
                        <Link  to='/packages'>
                        <li className='navLink'>Packages</li>
                      </Link>
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
        
        <div onClick={showNav} className="toggleNavbar ">
            <TbGridDots className='icon'/>
        </div>
      </header>
      
  </section>
  )
}

export default Navbar