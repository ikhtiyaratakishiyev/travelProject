import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {MdOutlineTravelExplore} from "react-icons/md"
import {AiFillCloseCircle} from "react-icons/ai"
import {TbGridDots} from "react-icons/tb"




import './navbar.scss'

const Navbar = () => {

      const [active, setActive] =useState('navBar');


    
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
         

           <Link className='logo flex' to='/'>
                <h1><MdOutlineTravelExplore className="icon"/>  Travel</h1>
           </Link>


        </div>



        <div className={active}>

           <ul className="navLists flex">
              
                <li className='navItem'>
                   <Link className='navLink'  to='/'>Home</Link>
                </li>

                <li className='navItem'>
                   <Link className='navLink'  to='/packages'>Packages</Link>
                </li>

                <li className='navItem'>
                   <Link to="/about" className='navLink'>About</Link>
                </li>

                <li className='navItem'>
                   <Link to="/contact" className='navLink'>Contacts</Link>
                </li>

                <li className='navItem' >
                   <Link to='/packages'><button className='btn'>Book Now</button></Link>
                </li>

                                
           </ul>

           <div onClick={removeNavbar}  className="closeNavBar">
             <AiFillCloseCircle className='icon'/>
           </div>
        </div>
        
        <div onClick={showNav}   className="toggleNavbar ">
            <TbGridDots className='icon'/>
        </div>
      </header>
      
  </section>
  )
}

export default Navbar