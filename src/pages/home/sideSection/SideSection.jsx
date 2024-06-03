import React from 'react'
import { Link } from 'react-router-dom'

import ArticleHeading from '../../../components/ArticleHeading/ArticleHeading'
import ArticleText from '../../../components/ArticleText/ArticleText'

import './sideSection.css'

function SideSection() {
  return (
    <div className="side-section">
      <h3 className="new-content__main-header">New</h3>
      <div className="new-content__articles">
            <div className="new-content__article">
                <Link to ='#'><ArticleHeading className="new-content__article-header">Hydrogen VS Electric Cars</ArticleHeading></Link>
                <ArticleText className="new-content__article-text">Will hydrogen fueled cars ever catch up to EVs?</ArticleText>
            </div>
            <hr />

            <div className="new-content__article">
                <Link to ='#'><ArticleHeading className="new-content__article-header">The downsides of AI Artistry</ArticleHeading></Link>
                <ArticleText className= "new-content__article-text">What are the possible adverse effects of on-demand AI image generation?</ArticleText>
            </div>
            <hr />
            
            <div className="new-content__article">
                <Link to ='#'><ArticleHeading className="new-content__article-header">Is VC Funding Drying Up?</ArticleHeading></Link>
                <ArticleText className="new-content__article-text">Private funding by VC firms is down by 50% YOY. We take a look at what that means</ArticleText>
            </div>
            <hr />
        </div>
    </div>
  )
}

export default SideSection