import React from "react";
import Head from "next/head";
import _isEmpty from "lodash/isEmpty";
import { useRouter } from "next/router";
import Header from "../components/Header";

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
    </>
  );
};

export default Home;
