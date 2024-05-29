import React from 'react'

import Logo from '../../assets/images/logo/logo.svg'
import Navbar from '../../components/navbar/Navbar'

import './header.css'

function Header() {
  return (
    <div className='header'>
        <img src={Logo} alt="Site Logo" />
        <Navbar />
    </div>
  )
}

export default Header