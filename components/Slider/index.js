import React from "react";
import Swiper from "react-id-swiper";
import ArticleMeta from "../ArticleMeta";
import cgLogo from "../../assets/cgLogo.svg";
import "swiper/swiper.scss";
import styles from "./styles.scss";
import Link from "next/link";
import { convertLastestNews } from "../../lib/converter";

const Slider = ({ data, t }) => {
  const params = {
    slideActiveClass: styles.carouselActive,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      bulletElement: "li",
      clickable: true,
    },
    spaceBetween: 15,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    effect: "fade",
    rebuildOnUpdate: true,
  };
  const handleClickSlider = (url) => {};

  return (
    <div className={styles.sliderWrapper}>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-md-10 col-lg-7">
            <header
              className={`${styles.sliderHeader} overflow-hidden position-relative my-3`}
            >
              <div className="row align-items-center justify-content-center my-3">
                <div
                  className={`col-6 col-md-6 text-right pr-md-0 ${styles.firstDivider}`}
                >
                  <Link href="/">
                    <a className={styles.customLogoLink} rel="home">
                      <img
                        src={cgLogo}
                        className="lazyload-loaded"
                        alt="CoinGeek"
                      />
                    </a>
                  </Link>
                </div>
                <div className="col-6 col-md-6 text-left">
                  <h1
                    className="text-white text-uppercase font1_0 font-md1_75 my-0"
                    title="CoinGeek | The Bitcoin Beat"
                  >
                    {t("titleBanner")}
                  </h1>
                </div>
              </div>
            </header>
          </div>
        </div>
        <div className="row align-items-start justify-content-between">
          <div className="position-relative">
            <div className="col-12">
              {data && data.length > 0 && (
                <Swiper {...params}>
                  {data.map((item) => {
                    const dist = convertLastestNews(item);
                    const {
                      id,
                      url,
                      image,
                      category,
                      datetime,
                      title,
                      description,
                    } = dist;

                    return (
                      <div
                        className={`${styles.sliderItem} d-inline-block h-100 w-100`}
                        key={id}
                      >
                        <article
                          id={id}
                          className="d-block w-100 h-100 position-relative"
                        >
                          <div className="row align-items-center justify-content-between mx-auto">
                            <div
                              className="col-12 order-md-last col-md-8 px-0"
                              onClick={handleClickSlider}
                            >
                              <a
                                className={`${styles.sliderImage} float-none float-md-right d-block position-relative`}
                              >
                                <img
                                  className="cgRadius img-fluid lazyload-loaded"
                                  alt={title}
                                  src={image}
                                />
                              </a>
                            </div>
                            <div
                              className="col-11 order-md-first col-md-4 px-0 mx-auto"
                              onClick={handleClickSlider}
                            >
                              <div
                                className={`${styles.sliderContent} cgRadius mx-auto bg-white p-3 p-md-4 overflow-hidden shadow`}
                              >
                                <ArticleMeta
                                  category={category}
                                  datetime={datetime}
                                />
                                <header className="articleHeader">
                                  <a className="text-body font0_9">
                                    <h2 className="articleTitle">{title}</h2>
                                  </a>
                                </header>
                                <a href={url} className="text-body font0_8">
                                  <p className="font0_8 text-dark">
                                    {description}
                                  </p>
                                </a>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                    );
                  })}
                </Swiper>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Slider);
