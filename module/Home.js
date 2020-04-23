import React from "react";
import Head from "next/head";
import { useMediaQuery } from "react-responsive";
import _isEmpty from "lodash/isEmpty";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Slider from "../components/Slider";
import LastestNewsBlock from "../components/LastestNewsBlock";
import BusinessAndTech from "../components/BusinessAndTech";
import InterviewsAndFeatures from "../components/InterviewsAndFeatures";
import FooterHome from "../components/FooterHome";
import Footer from "../components/Footer";

const Home = ({
  t,
  data,
  listLastestNewsBlock,
  techNews,
  businessNews,
  interviewNews,
  headerMenu,
}) => {
  const router = useRouter();
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });
  const style = {
    paddingTop: isMobile ? "5rem" : "3rem",
  };

  return (
    <>
      <Head>
        <title>{data.meta_title}</title>
        <meta charSet="utf-8" />
        <meta property="og:locale" content={data.language} />
        <meta
          property="og:url"
          content={`https://coingeek.com${router.pathname}`}
        />
        <meta property="og:title" content={data.meta_title} />
        <meta property="og:description" content={data.meta_description} />
        <meta name="twitter:description" content={data.meta_description} />
        <meta name="twitter:title" content={data.meta_title} />
      </Head>
      {!_isEmpty(headerMenu) && <Header headerMenu={headerMenu} t={t} />}
      <div style={style}>
        {!_isEmpty(data.slider_posts) && (
          <Slider data={data.slider_posts} t={t} />
        )}
        {!_isEmpty(data.banner) && (
          <LastestNewsBlock
            t={t}
            data={data.banner}
            listLastestNewsBlock={listLastestNewsBlock}
          />
        )}
        {!_isEmpty(businessNews) && !_isEmpty(techNews) && (
          <BusinessAndTech
            businessNews={businessNews}
            techNews={techNews}
            t={t}
          />
        )}
        {!_isEmpty(data) && !_isEmpty(interviewNews) && (
          <InterviewsAndFeatures
            data={data}
            interviewNews={interviewNews}
            t={t}
          />
        )}
        {!_isEmpty(data.footer) && (
          <FooterHome footerData={data.footer} t={t} />
        )}
        <Footer t={t} />
      </div>
    </>
  );
};

export default Home;
