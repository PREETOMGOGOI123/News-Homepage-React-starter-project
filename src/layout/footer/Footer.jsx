import React from 'react'

import './footer.css'

import ArticleHeading from '../../components/ArticleHeading'
import ArticleText from '../../components/ArticleText'

import retroPcs from '../../assets/images/footer-images/image-retro-pcs.jpg' 
import topLaptops from '../../assets/images/footer-images/image-top-laptops.jpg'
import gamingGrowth from '../../assets/images/footer-images/image-gaming-growth.jpg'

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-article">
            <img src={retroPcs} alt="Retro Pcs" className='footer-article__image' />
            <div className='footer-article__text'>
                <ArticleText className='serial-number'>01</ArticleText>
                <ArticleHeading className='article-header'>Reviving Retro PCs</ArticleHeading>
                <ArticleText>What happens when old PCs are given modern upgrades?</ArticleText>    
            </div>
        </div>
        <div className="footer-article">
            <img src={topLaptops} alt="Top Laptops"className='footer-article__image' />
            <div className='footer-article__text'>
                <ArticleText className='serial-number'>02</ArticleText>
                <ArticleHeading className='article-header'>Top 10 Laptops of 2022</ArticleHeading>
                <ArticleText>Our best picks for various needs and budgets.</ArticleText>    
            </div>
        </div>
        <div className="footer-article">
            <img src={gamingGrowth} alt="Gaming Growth" className='footer-article__image' />
            <div className='footer-article__text'>
                <ArticleText className='serial-number'>03</ArticleText>
                <ArticleHeading className='article-header'>The Growth of Gaming</ArticleHeading>
                <ArticleText>How the pandemic has sparked fresh opportunities.</ArticleText>    
            </div>
        </div>
    </div>
  )
}

export default Footer