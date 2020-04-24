import React from "react";
import App from "next/app";
import Router from "next/router";
import Head from "next/head";
import NProgress from "nprogress";
import { appWithTranslation } from "../i18n";

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <Head>
          {/* Import CSS for nprogress */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://coingeek.com/wp-content/uploads/2018/12/CG-News-Square.png"
          />
          <meta
            property="og:image:secure_url"
            content="https://coingeek.com/wp-content/uploads/2018/12/CG-News-Square.png"
          />
          <meta
            property="og:image"
            content="https://coingeek.com/wp-content/uploads/2019/08/qrcode_for_gh_906aba1be2b7_258.jpg"
          />
          <meta property="og:image:height" content="1300" />
          <meta property="og:image:width" content="1300" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@realcoingeek" />
          <meta
            name="twitter:image"
            content="https://coingeek.com/wp-content/uploads/2018/12/CG-News-Square.png"
          />
          <meta name="twitter:creator" content="@realcoingeek" />
          <link
            rel="stylesheet"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/swiper/css/swiper.css"
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/swiper/css/swiper.min.css"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900&display=swap"
            rel="stylesheet"
          ></link>
          <link
            rel="stylesheet"
            type="text/css"
            href="https://unpkg.com/nprogress@0.2.0/nprogress.css"
          />
        </Head>
        <Component {...pageProps} />
        <style jsx global>{`
          body {
            font-family: Montserrat, Helvetica, sans-serif;
            font-weight: 400;
            letter-spacing: normal;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            line-height: 1.25rem;
            margin: 0;
            font-size: 1rem;
            color: #212529;
          }
        `}</style>
        <script
          async
          defer
          crossOrigin="anonymous"
          src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v6.0&appId=378175109331993&autoLogAppEvents=1"
        ></script>
        <script
          src="https://platform.linkedin.com/in.js"
          type="text/javascript"
        >
          lang: en_US
        </script>
      </React.Fragment>
    );
  }
}

export default appWithTranslation(MyApp);
