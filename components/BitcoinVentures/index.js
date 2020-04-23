import React, { useEffect, useState } from "react";
import InfoForm from "./InfoForm";
import { parseHtmlString } from "../../utils/functions";
import FullWidthHeaderPassString from "../FullWidthHeaderPassString";

const BitcoinVentures = ({ result, t }) => {
  return (
    <article>
      <FullWidthHeaderPassString
        content={result.header}
        isPaddingTop={false}
        color="purple"
      />
      <div className="wrapper">
        <div className="container page-container">
          <div className="row align-items-start justify-content-between mb-5">
            <div className="col-12 col-md-12 longContent">
              {parseHtmlString(result.body)}
              <InfoForm t={t} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BitcoinVentures;
