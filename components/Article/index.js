import React from "react";
import classname from "classnames";
import ArticleMeta from "../ArticleMeta";
import Link from "next/link";
import { getInternalSlug } from "../../utils/functions";
import { i18n } from "../../i18n";

const Article = (props) => {
  const {
    datetime,
    title,
    description,
    url,
    dynamicPath,
    category,
    image,
    isSmall,
    isVerticalImage,
    imgClassName,
  } = props;
  const headerClasses = classname("articleTitle", {
    font0_8: isSmall,
    font1_0: !isSmall,
  });
  const imageClasses = classname(
    "cgRadius img-fluid  lazyload-loaded",
    // imgClassName,
    {
      "w-100": !isSmall,
    }
  );
  const lang = i18n.language;
  let articleUrl = getInternalSlug(url);
  let dynamicHref = dynamicPath || "/[article]";
  if (lang === "zh-hans") {
    dynamicHref = `${lang}${dynamicHref}`;
    articleUrl = `${lang}/${articleUrl}`;
  }

  if (isVerticalImage) {
    return (
      <article>
        <div className="row align-items-start justify-content-between">
          <div className="col-4 col-md-4">
            <Link href={dynamicHref} as={`/${articleUrl}`}>
              <a className={`d-block my-3 ${imgClassName}`}>
                <img className={imageClasses} alt={title} src={image} />
              </a>
            </Link>
          </div>
          <div className="col-8 col-md-8 pl-0">
            <ArticleMeta datetime={datetime} category={category} />
            <header>
              <Link href={dynamicHref} as={`/${articleUrl}`}>
                <a>
                  <h2 className={headerClasses}>{title}</h2>
                </a>
              </Link>
            </header>
            {!isSmall && <p className="font0_8 text-dark">{description}</p>}
          </div>
        </div>
      </article>
    );
  }
  return (
    <article>
      <Link href={dynamicHref} as={`/${articleUrl}`}>
        <a className={`d-block my-3 ${imgClassName}`}>
          <img className={imageClasses} alt={title} src={image} />
        </a>
      </Link>
      {datetime && <ArticleMeta datetime={datetime} category={category} />}
      <header>
        <Link href={dynamicHref} as={`/${articleUrl}`}>
          <a>
            <h2 className={headerClasses}>{title}</h2>
          </a>
        </Link>
      </header>
      {!isSmall && <p className="font0_8 text-dark">{description}</p>}
    </article>
  );
};

export default Article;
