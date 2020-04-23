import React from "react";
import { postFetch } from "../utils/request";
import { i18n, withTranslation, Router } from "../i18n";
import AboutUs from "../module/AboutUs";

const AboutUsPage = (props) => {
  return <AboutUs {...props} />;
};

export const getServerSideProps = async ({ req }) => {
  const currentLanguage = req ? req.language : i18n.language;
  let data = {};
  let headerMenu = [];

  const [result, resultMenu] = await Promise.all([
    postFetch("/api/collections/get/page", {
      filter: {
        title_slug: "terms-of-use",
        language: currentLanguage,
        published: true,
      },
      populate: 1,
    }),
    postFetch("/api/collections/get/menu", {
      filter: {
        language: currentLanguage,
      },
      sort: {
        order: 1,
      },
    }),
  ]);

  if (result && result.entries && result.entries[0]) {
    data = result.entries[0];
  }
  if (resultMenu.entries) {
    headerMenu = resultMenu.entries;
  }

  return {
    props: {
      headerMenu,
      data,
      namespacesRequired: ["common"],
    },
  };
};

export default withTranslation("common")(AboutUsPage);
