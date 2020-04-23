/* eslint-disable react/prop-types */
import React from "react";
import Link from "next/link";
import { checkHasDomain } from "../../utils/functions";

const CgLink = (props) => {
  const { title, href, dynamicPath, query, className } = props;
  let url = href;
  const isExternalSite = checkHasDomain(href);
  if (!href.includes("/")) {
    url = `/${href}`;
  }

  return (
    <>
      {isExternalSite && (
        <a href={href} className={className}>
          {title}
        </a>
      )}
      {!isExternalSite && (
        <Link href={{ pathname: url, query }} as={dynamicPath}>
          <a className={className}>{title}</a>
        </Link>
      )}
    </>
  );
};

export default CgLink;
