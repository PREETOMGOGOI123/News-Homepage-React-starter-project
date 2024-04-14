import RetroPc from '../../assets/images/image-retro-pcs.jpg';
import TopLaptops from '../../assets/images/image-top-laptops.jpg';
import GamingGrowth from '../../assets/images/image-gaming-growth.jpg'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content__articles-container">
                <img src={RetroPc} alt="Retro PCs" className='footer-content__image' />
                <div className='footer-content__article__text-container'>
                    <p className='footer-content__serial-number'>01</p>
                    <a href="#"><h4 className='footer-content__article-header'>Reviving Retro PCs</h4></a>
                    <p className='footer-content__article-text'>What happens when old PCs are given modern upgrades?</p>
                </div>
            </div>

            <div className="footer-content__articles-container">
                <img src={TopLaptops} alt="Retro PCs" className='footer-content__image' />
                <div className='footer-content__article__text-container'>
                    <p className='footer-content__serial-number'>02</p>
                    <a href="#"><h4 className='footer-content__article-header'>Top 10 Laptops of 2022</h4></a>
                    <p className='footer-content__article-text'>Our best picks for various needs and budgets.</p>
                </div>
            </div>

            <div className="footer-content__articles-container">
                <img src={GamingGrowth} alt="Retro PCs" className='footer-content__image' />
                <div className='footer-content__article__text-container'>
                    <p className='footer-content__serial-number'>03</p>
                    <a href="#"><h4 className='footer-content__article-header'>The Growth of Gaming</h4></a>
                    <p className='footer-content__article-text'>How the pandemic has sparked best opportunities.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;