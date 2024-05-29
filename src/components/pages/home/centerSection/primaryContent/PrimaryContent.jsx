import React from 'react';
import Button from '../../../../button/Button';

import './primaryContent.css'

function PrimaryContent() {
  return (
    <div className='primary-content'>
        <div className='primary-image'></div>
        <PrimaryArticle />
    </div>
  )
}

function PrimaryArticle() {
    return (
        <div className='primary-article'>
            <PrimaryHeading />
            <PrimaryText />
        </div>
    )
}

function PrimaryHeading () {
    return(
        <h2 className='primary-article__heading'>
            The Bright Future of Web 3.0?
        </h2>
    )
}

function PrimaryText() {
    return(
        <div className='primary-article__description'>
            <p>
                We dive into the next evolution of web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
            </p>
            <Button className='button'>Read More</Button>
        </div>
    )
}


export default PrimaryContent