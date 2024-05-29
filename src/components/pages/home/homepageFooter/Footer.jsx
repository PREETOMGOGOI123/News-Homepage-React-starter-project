import React from 'react'

import './footer.css'

import retroPcs from '../../../../assets/images/footer-images/image-retro-pcs.jpg'
import topLaptops from '../../../../assets/images/footer-images/image-top-laptops.jpg'
import gamingGrowth from '../../../../assets/images/footer-images/image-gaming-growth.jpg'

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-article">
            <img src={retroPcs} alt="Retro Pcs" className='footer-article__image' />
            <div className='footer-article__text'>
                <p className='serial-number'>01</p>
                <h4 className='article-header'>Reviving Retro PCs</h4>
                <p>What happens when old PCs are given modern upgrades?</p>    
            </div>
        </div>
        <div className="footer-article">
            <img src={topLaptops} alt="Top Laptops"className='footer-article__image' />
            <div className='footer-article__text'>
                <p className='serial-number'>02</p>
                <h4 className='article-header'>Top 10 Laptops of 2022</h4>
                <p>Our best picks for various needs and budgets.</p>    
            </div>
        </div>
        <div className="footer-article">
            <img src={gamingGrowth} alt="Gaming Growth" className='footer-article__image' />
            <div className='footer-article__text'>
                <p className='serial-number'>03</p>
                <h4 className='article-header'>The Growth of Gaming</h4>
                <p>How the pandemic has sparked fresh opportunities.</p>    
            </div>
        </div>
    </div>
  )
}

export default Footer