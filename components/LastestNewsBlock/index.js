import React from "react";
import PropTypes from "prop-types";
import classname from "classnames";
import BlockHeader from "../BlockHeader";
import Article from "../Article";
import styles from "./styles.scss";
import GridNews from "../GridNews";
import { convertLastestNews, convertBanner } from "../../lib/converter";

const LastestNewsBlock = (props) => {
  const { limit, isShowAds, isVerticle, data, listLastestNewsBlock, t } = props;

  const lastNewsWrapperClasses = classname(styles.lastNewsWrapper, {
    [styles.isVerticle]: isVerticle,
  });

  if (listLastestNewsBlock.length < 0) {
    return null;
  }
  const lastestNews = listLastestNewsBlock.map((item) =>
    convertLastestNews(item)
  );

  return (
    <div className={lastNewsWrapperClasses}>
      {!isVerticle && (
        <div className="container">
          {isShowAds && (
            <div className="row align-items-start justify-content-between">
              <div className="col-12 col-md-8">
                <BlockHeader title={t("titleLastestBlock")} />
                <div className="row align-items-start justify-content-between">
                  {listLastestNewsBlock.map((item, index) => {
                    if (index >= limit) return null;
                    const dist = convertLastestNews(item);
                    const { id } = dist;
                    return (
                      <div key={id} className="col-6 col-md-6 col-lg-6 mb-3">
                        <Article {...dist} />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="overflow-hidden position-relative">
                  <a
                    href={convertBanner(data).url}
                    target="_blank"
                    className="cgRadius d-block overflow-hidden"
                  >
                    <img
                      className="img-fluid lazyload-loaded"
                      src={convertBanner(data).image}
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          )}
          {!isShowAds && (
            <GridNews title="Lastest News" news={lastestNews} limit={limit} />
          )}
        </div>
      )}
      {isVerticle && (
        <>
          <div className="overflow-hidden position-relative my-3">
            <a
              href={convertBanner(data).url}
              target="_blank"
              className="cgRadius d-block overflow-hidden"
            >
              <img
                className="img-fluid lazyload-loaded"
                src={convertBanner(data).image}
                alt=""
              />
            </a>
          </div>
          <div className="row align-items-start justify-content-center">
            <div className="col-12">
              <BlockHeader title="Lastest News" />
              <div className="row align-items-start justify-content-between">
                {lastestNews.map((item, index) => {
                  if (index >= limit) return null;
                  const { id } = item;
                  return (
                    <div key={id} className="col-6 col-md-6 col-lg-12 mb-3">
                      <Article {...item} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

LastestNewsBlock.propTypes = {
  limit: PropTypes.number,
  isShowAds: PropTypes.bool,
  isVerticle: PropTypes.bool,
};

LastestNewsBlock.defaultProps = {
  limit: 2,
  isShowAds: true,
  isVerticle: false,
};

export default React.memo(LastestNewsBlock);
