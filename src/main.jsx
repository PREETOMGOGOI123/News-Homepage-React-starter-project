import React from "react"
import ReactDOM  from 'react-dom/client';
import '../css/main.css';

import Header from './components/Header/Header';
import MidSection from './components/MidSection/MidSection';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="container-main">
      <Header />
      <MidSection />
      <Footer />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

