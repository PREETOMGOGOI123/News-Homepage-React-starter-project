import React from 'react'
import './articleHeading.css'

function ArticleHeading({className, children}) {
  return (
    <h4 className={className}>{children}</h4>
  )
}

export default ArticleHeading