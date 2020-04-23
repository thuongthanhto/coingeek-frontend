import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";
import _isEmpty from "lodash/isEmpty";
import NewLetterBlock from "../components/NewLetterBlock";
import Header from "../components/Header";
import TermsOfUseComponent from "../components/TermsOfUse";
import Footer from "../components/Footer";

const TermOfUse = ({ headerMenu, data, t }) => {
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
        <TermsOfUseComponent result={data} t={t} />
        <NewLetterBlock t={t} />
        <Footer t={t} />
      </div>
    </>
  );
};

export default React.memo(TermOfUse);
