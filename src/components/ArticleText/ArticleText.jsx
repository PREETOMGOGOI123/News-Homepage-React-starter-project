import React from 'react'

import './articleText.css'

function ArticleText({ className, children }) {
    return <p className={className}>{children}</p>;
  }

export default ArticleText