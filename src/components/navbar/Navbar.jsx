import { useState } from "react"
import { NavLink } from "react-router-dom"
import IconMenu from '../../assets/images/mobile-responsive-icons/Header-icons/icon-menu.svg'
import IconMenuClose from '../../assets/images/mobile-responsive-icons/Header-icons/icon-menu-close.svg'

import './navbar.css'


function Navbar() {
  const[openNavMenu, setOpenNavMenu] = useState(false);
  function handleClick() {
    setOpenNavMenu(menuOpen => !menuOpen);
  }



  return (
    <nav className="navbar">
    <img onClick={handleClick} src={openNavMenu ? IconMenuClose : IconMenu} alt="icon-menu" className='icon-menu'/>
    <div className='navElements' style={{display: openNavMenu ? 'flex' : 'none'}}>
      <NavLink to='/'>
        Home
      </NavLink>
      <NavLink to='New'>
        New
      </NavLink>
      <NavLink to='Popular'>
        Popular
      </NavLink>
      <NavLink to='Trending'>
        Trending
      </NavLink>
      <NavLink to='Categories'>
        Categories
      </NavLink>
    </div>
    </nav>
  )
}

export default Navbar