import React from "react";
import Link from "next/link";
import { i18n } from "../../i18n";

const BlockHeader = (props) => {
  const lang = i18n.language;

  const { title, subTitle, url } = props;
  const dynamicHref =
    lang === "zh-hans"
      ? "/zh-hans/news/category/[category-slug]"
      : "/news/category/[category-slug]";
  const currentUrl = lang === "zh-hans" ? `/zh-hans${url}` : url;
  return (
    <div className="row align-items-center justify-content-center">
      <div className="col">
        <h2 className="text-uppercase font-weight-normal font0_9 py-2 my-0">
          {url && (
            <Link href={dynamicHref} as={currentUrl}>
              <a>{title}</a>
            </Link>
          )}
          {!url && title}
        </h2>
      </div>
      {subTitle && (
        <div className="col-auto">
          <Link href={dynamicHref} as={currentUrl}>
            <a className="text-uppercase font0_7 text-right text-dark cursorPointer">
              {subTitle}
            </a>
          </Link>
        </div>
      )}
      <div className="col-12">
        <hr className="my-1" />
      </div>
    </div>
  );
};

export default React.memo(BlockHeader);
