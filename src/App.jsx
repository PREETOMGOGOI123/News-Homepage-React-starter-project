import React from 'react'
import Layout from './mainLayout/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css'

import Home from './components/pages/home/Home';
import New from './components/pages/new/New';
import Popular from './components/pages/popular/Popular';
import Categories from './components/pages/categories/Categories';
import Trending from './components/pages/trending/Trending';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='New' element ={<New />} />
            <Route path='Popular' element ={<Popular />} />
            <Route path='Trending' element ={<Trending />} />
            <Route path='Categories' element ={<Categories />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App