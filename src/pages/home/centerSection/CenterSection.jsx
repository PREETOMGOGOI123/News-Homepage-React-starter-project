import React from "react";

import PrimaryArticleHeading from "../../../components/PrimaryArticleHeading/PrimaryArticleHeading/PrimaryArticleHeading";
import ArticleText from "../../../components/ArticleText/ArticleText";
import Button from "../../../components/button/Button";

import "./centerSection.css";

function CenterSection() {
  return (
    <div className="center-section">
      <div className="primary-image"></div>
      <div className="primary-article">
        <PrimaryArticleHeading className="primary-article__heading">
          The Bright Future of Web 3.0?
        </PrimaryArticleHeading>
        <div className="primary-article__description">
          <ArticleText>
            We dive into the next evolution of web that claims to put the power
            of the platforms back into the hands of the people. But is it really
            fulfilling its promise?
          </ArticleText>
          <Button className='button'>Read More</Button>
        </div>
      </div>
    </div>
  );
}

export default CenterSection;
