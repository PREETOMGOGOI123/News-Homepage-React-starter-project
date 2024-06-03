import Layout from './Layout/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css'

import Home from './pages/home/Home';
import New from './pages/home/sideSection/SideSection';
import Popular from './pages/popular/Popular';
import Categories from './pages/categories/Categories';
import Trending from './pages/trending/Trending';


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