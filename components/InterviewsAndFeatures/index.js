import React, { useEffect } from "react";
import EmbedJS from "embed-js";
import basic from "embed-preset-basic";
import BlockHeader from "../BlockHeader";
import Article from "../Article";
import conversationIcon from "../../assets/conversationIcon.png";
import styles from "./styles.scss";
import {
  convertLastestNews,
  convertPodCast,
  convertVideos,
} from "../../lib/converter";

const InterviewsAndFeatures = ({ data, interviewNews, t }) => {
  const podCast = convertPodCast(data["featured_pocast"] || {});
  const videos = convertVideos(data["featured_video"] || {});

  useEffect(() => {
    const input = document.getElementById("video");
    if (input) {
      const x = new EmbedJS({
        input,
        preset: basic({
          facebook: {
            height: 460,
          },
          youtube: {
            details: false,
            gAuthKey: "AIzaSyCqFouT8h5DKAbxlrTZmjXEmNBjC69f0ts",
            height: 460,
            width: 500,
          },
          exclude: ["soundcloud", "highlight"],
        }),
      });

      x.render();
    }
  }, []);
  return (
    <div className={styles.interviewsandFeaturesWrapper}>
      <div className="container">
        <div className="row align-items-start justify-content-between">
          {/* interviews */}
          {interviewNews.length > 0 && (
            <div className="col-12 col-md-4">
              <BlockHeader
                title={t("titleInterviews")}
                subTitle={t("subTitleInterviews")}
                url="/news/category/interviews"
              />
              <div className="row align-items-start justify-content-center">
                {interviewNews.map((item, index) => {
                  const dist = convertLastestNews(item);
                  const { id } = dist;
                  return (
                    <div key={id} className="col-12">
                      <Article {...dist} isVerticalImage />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {/* podcasts */}
          <div className="col-12 col-md-4">
            <BlockHeader
              title={t("titlePostcasts")}
              subTitle={t("subTitlePostcasts")}
              url="https://coingeek.com/news/tag/coingeek-podcast/"
            />
            <div className="row align-items-start justify-content-center">
              <div className="col-12">
                <div className="cgRadius my-3">
                  <a
                    href={podCast.url}
                    className="cgRadius d-block overflow-hidden"
                  >
                    <img className="lazyload-loaded" src={podCast.image} />
                  </a>
                </div>
              </div>
            </div>
            <div className="row align-items-center justify-content-center">
              <div className="col-3">
                <img
                  className="lazyload-loaded"
                  src={conversationIcon}
                  alt="CoinGeek Coinversations"
                />
              </div>
              <div className="col-9 pl-0">
                <a
                  href={podCast.url}
                  className="font-weight-bold text-decoration-none"
                >
                  {podCast.title}
                </a>
              </div>
            </div>
          </div>
          {/* videos */}
          <div className="col-12 col-md-4">
            <BlockHeader
              title={t("titleVideos")}
              subTitle={t("subTitleVideos")}
              url="/videos"
            />
            <div className="row align-items-start justify-content-center">
              <div className="col-12">
                <div className="cgRadius my-3 overflow-hidden">
                  <div
                    id="video"
                    className={`container-lazyload preview-lazyload ${styles.videoContainer} embed-responsive embed-responsive-16by9`}
                  >
                    <a href={videos.videoUrl}>
                      {`${videos.title} (${videos.videoUrl})`}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center justify-content-center">
              <div className="col-12">
                <div className="cgRadius">
                  <div className={styles.videoTitle}>
                    <a href={videos.url} className="text-decoration-none">
                      {videos.title}
                    </a>
                  </div>
                  <p className="font0_8 my-1">{videos.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewsAndFeatures;
