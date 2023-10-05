import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {MdOutlineTravelExplore} from "react-icons/md"
import {AiFillCloseCircle} from "react-icons/ai"
import {TbGridDots} from "react-icons/tb"
import { Link } from 'react-router-dom'


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
<<<<<<< HEAD
           <Link to="/" className='logo flex'   ><h1  className="icon"><MdOutlineTravelExplore /></h1> Travel</Link>
=======

           <Link className='logo flex' to='/'>
                <h1><MdOutlineTravelExplore className="icon"/>  Travel</h1>
           </Link>

>>>>>>> 99857844d59d103ca35f2d6bbacb0d5a8057f11f
        </div>



        <div className={active}>

           <ul className="navLists flex">
                <li className='navItem'>
<<<<<<< HEAD
                    
                      <Link to="/" className='navLink'>Home</Link>
                </li>

                <li className='navItem'>
                     
                      <Link to="/packages" className='navLink'>Packages</Link>
=======
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
>>>>>>> 99857844d59d103ca35f2d6bbacb0d5a8057f11f
                </li>

                <li className='navItem'>
                     
                      <Link to="/about" className='navLink'>About</Link>
                </li>

                <li className='navItem'>
                <Link to="/news" className='navLink'>News</Link>
                </li>

                <li className='navItem'>
                <Link to="/contact" className='navLink'>Contacts</Link>
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