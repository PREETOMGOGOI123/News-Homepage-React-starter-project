import React from 'react'
import PrimaryContent from './primaryContent/PrimaryContent';
import NewContent from './newContnent/NewContent';

import './centerSection.css'

function CenterSection() {
  return (
    <div className='center-section'>
        <PrimaryContent />
        <NewContent />
    </div>
  )
}

export default CenterSection