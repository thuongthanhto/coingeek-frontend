import React from "react";
import BlockHeader from "../BlockHeader";
import Article from "../Article";
import styles from "./styles.scss";
import { convertLastestNews } from "../../lib/converter";

const BusinessAndTech = ({ businessNews, techNews, t }) => {
  return (
    <div className={styles.businessAndTechWrapper}>
      <div className="container">
        <div className="row align-items-start justify-content-between">
          {businessNews.length > 0 && (
            <div className="col-12 col-md-6">
              <BlockHeader
                title={t("titleBusiness")}
                subTitle={t("subTitleBusiness")}
                url="/news/category/business"
              />
              <div className="row align-items-start justify-content-between">
                <div className="col-8 col-md-7">
                  <div className="row align-items-start justify-content-center">
                    <div className="col-12">
                      <Article {...convertLastestNews(businessNews[0])} />
                    </div>
                  </div>
                </div>
                <div className="col-4 col-md-5 pl-0">
                  <div className="row align-items-start justify-content-center">
                    {businessNews.map((item, index) => {
                      const dist = convertLastestNews(item);
                      const { id } = dist;
                      if (index > 0 && index < 3) {
                        return (
                          <div key={id} className="col-12">
                            <Article {...dist} isSmall />
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}
          {techNews.length > 0 && (
            <div className="col-12 col-md-6">
              <BlockHeader
                title={t("titleTech")}
                subTitle={t("subTitleTech")}
                url="/news/category/tech"
              />
              <div className="row align-items-start justify-content-between">
                <div className="col-8 col-md-7">
                  <div className="row align-items-start justify-content-center">
                    <div className="col-12">
                      <Article {...convertLastestNews(techNews[0])} />
                    </div>
                  </div>
                </div>
                <div className="col-4 col-md-5 pl-0">
                  <div className="row align-items-start justify-content-center">
                    {techNews.map((item, index) => {
                      const dist = convertLastestNews(item);
                      const { id } = dist;
                      if (index > 0 && index < 3) {
                        return (
                          <div key={id} className="col-12">
                            <Article {...dist} isSmall />
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BusinessAndTech;
