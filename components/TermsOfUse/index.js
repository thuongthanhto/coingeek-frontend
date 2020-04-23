import React from "react";
import FullWidthHeaderPassString from "../FullWidthHeaderPassString";
import { parseHtmlString } from "../../utils/functions";

const TermsOfUse = ({ result, t }) => {
  return (
    <article>
      <FullWidthHeaderPassString content={result.header} isPaddingTop={false} />
      <div className="wrapper">
        <div className="container page-container">
          <div className="row align-items-start justify-content-between mb-5">
            {parseHtmlString(result.body)}
          </div>
        </div>
      </div>
    </article>
  );
};

export default TermsOfUse;
