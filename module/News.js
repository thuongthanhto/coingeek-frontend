import React from "react";
import { useRouter } from "next/router";
import _isEmpty from "lodash/isEmpty";
import { useMediaQuery } from "react-responsive";
import Head from "next/head";
import Header from "../components/Header";
import LastestNewsBlock from "../components/LastestNewsBlock";
import BusinessAndTech from "../components/BusinessAndTech";
import FooterHome from "../components/FooterHome";
import Footer from "../components/Footer";

const News = ({
  t,
  data,
  listLastestNewsBlock,
  techNews,
  businessNews,
  headerMenu,
}) => {
  const router = useRouter();
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });
  const style = {
    paddingTop: isMobile ? "8rem" : "5rem",
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
        <div style={{ marginBottom: 50 }} />
        {!_isEmpty(data.footer) && (
          <FooterHome footerData={data.footer} t={t} />
        )}
        <Footer t={t} />
      </div>
    </>
  );
};

export default News;
