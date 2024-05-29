import React from 'react'
import { Link } from 'react-router-dom'

import './newContent.css';

export default function NewContent() {
  return (
    <div className="new-content">
        <h3 className="new-content__main-header">New</h3>
        
        <div className="new-content__articles">
            <div className="new-content__article">
                <Link to ='#'><h4 className="new-content__article-header">Hydrogen VS Electric Cars</h4></Link>
                <p className="new-content__article-text">Will hydrogen fueled cars ever catch up to EVs?</p>
            </div>
            <hr />

            <div className="new-content__article">
                <Link to ='#'><h4 className="new-content__article-header">The downsides of AI Artistry</h4></Link>
                <p className= "new-content__article-text">What are the possible adverse effects of on-demand AI image generation?</p>
            </div>
            <hr />
            
            <div className="new-content__article">
                <Link to ='#'><h4 className="new-content__article-header">Is VC Funding Drying Up?</h4></Link>
                <p className="new-content__article-text">Private funding by VC firms is down by 50% YOY. We take a look at what that means</p>
            </div>
            <hr />
        </div>
    </div>    
 
  )
}
