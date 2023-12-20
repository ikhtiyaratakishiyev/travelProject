import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {MdOutlineTravelExplore} from "react-icons/md"
import {AiFillCloseCircle} from "react-icons/ai"
import {TbGridDots} from "react-icons/tb"




import './navbar.scss'

const Navbar = () => {

      const [active, setActive] =useState('navBar')


      const [divVisible,setDivVisible] = useState(false);

      

      const handleMenuClick = () =>{
            setDivVisible(!divVisible)
      }
      // Function to toggle navbar

      const showNav = ()=>{
            setActive('navBar activeNavBar')
      }

      const twiceFunction =()=>{
            handleMenuClick();
            showNav()
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
                     
                    
                      <Link  to='/'>
                        <li className='navLink'>Home</li>
                      </Link>
                </li>

                <li className='navItem'>
                  
                        <Link  to='/packages'>
                        <li className='navLink'>Packages</li>
                      </Link>

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

                
                    {/* <a href="#">Book Now</a> */}
                  
           </ul>

           <div onClick={removeNavbar}  className="closeNavBar">
             <AiFillCloseCircle className='icon'/>
           </div>
        </div>
        
        <div  onClick={twiceFunction} className="toggleNavbar ">
            <TbGridDots className='icon'/>
        </div>
      </header>
      
  </section>
  )
}

export default Navbar