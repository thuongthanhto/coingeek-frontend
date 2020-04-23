import React from "react";
import FullWidthHeaderPassString from "../FullWidthHeaderPassString";
import { parseHtmlString } from "../../utils/functions";

const Advertising = ({ result }) => {
  return (
    <article>
      <FullWidthHeaderPassString content={result.header} isPaddingTop={false} />
      <div className="wrapper">
        <div className="container page-container">
          {parseHtmlString(result.body)}
        </div>
      </div>
    </article>
  );
};

export default Advertising;
