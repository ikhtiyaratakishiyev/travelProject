import React from 'react'
import {MdOutlineTravelExplore} from "react-icons/md"
import './navbar.scss'

const Navbar = () => {

  return (
  <section className='navbarSection'>
      <header className='header flex'>
        <div className='logoDiv'>
           <a href="#" className='logo'>
                <h1> <MdOutlineTravelExplore className="icon"/> Travel</h1>
           </a>
        </div>

        <div className="navBar">
           <ul className="navLists flex">
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
        </div>
      </header>
  </section>
  )
}

export default Navbar