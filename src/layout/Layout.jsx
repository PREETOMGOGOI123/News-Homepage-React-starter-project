import React from 'react'
import { Outlet } from 'react-router-dom'

import './layout.css'
import Header from './header/Header'

function Layout() {
  return (
    <div className='container'>
      <Header />
      <Outlet /> 
    </div>
  )
}

export default Layout