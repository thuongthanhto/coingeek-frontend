import React from "react";
import BlockHeader from "../BlockHeader";
import Article from "../Article";
import Pagination from "../Pagination";

const GridNews = (props) => {
  const {
    title,
    news,
    limit,
    justifyContent = "between",
    imgClassName,
    dynamicPath,
    total,
    page,
    setPage,
  } = props;
  if (!news || !Array.isArray(news) || news.length < 1) return null;

  return (
    <>
      <BlockHeader title={title} />
      <div
        className={`row align-items-start justify-content-${justifyContent}`}
      >
        {news.map((item, index) => {
          if (limit && index >= limit) return null;
          const { id } = item;
          return (
            <div key={id} className="col-6 col-md-4 col-lg-3 mb-3">
              <Article
                {...item}
                dynamicPath={dynamicPath}
                imgClassName={imgClassName}
              />
            </div>
          );
        })}
      </div>
      <div className="container mb-4">
        <div className="row align-items-start justify-content-center py-4">
          <Pagination
            totalPages={Math.ceil(total / limit)}
            page={page}
            onChange={(page) => setPage(page)}
          />
        </div>
      </div>
    </>
  );
};

export default GridNews;
