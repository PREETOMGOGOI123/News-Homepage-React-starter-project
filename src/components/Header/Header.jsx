import Logo from '../../assets/images/logo.svg'

function Header() {
  return(  
    <header className="header">
        <img src={Logo} alt="" />
        <nav className="navbar">
            <a href="#" className='nav__item-link'><span className="navbar__item">Home</span></a>
            <a href="#" className='nav__item-link'><span className="navbar__item">New</span></a>
            <a href="#" className='nav__item-link'><span className="navbar__item">Popular</span></a>
            <a href="#" className='nav__item-link'><span className="navbar__item">Trending</span></a>
            <a href="#" className='nav__item-link'><span className="navbar__item">Categories</span></a>
        </nav>
    </header>
  )    
}

export default Header