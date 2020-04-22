import { postFetch } from "../../utils/request";
import { i18n, withTranslation, Router } from "../../i18n";
import Home from "../../module/Home";

const HomePage = (props) => {
  return <Home {...props} />;
};

export const getServerSideProps = async ({ req }) => {
  const currentLanguage = req ? req.language : i18n.language;
  let data = {};
  let listLastestNewsBlock = [];
  let businessNews = [];
  let techNews = [];
  let interviewNews = [];
  let headerMenu = [];

  const [
    result,
    resultLastestNews,
    resultBusinessNews,
    resultTechNews,
    resultInterviewNews,
    resultMenu,
  ] = await Promise.all([
    postFetch("/api/collections/get/page", {
      filter: {
        title_slug: "home",
        language: currentLanguage,
        published: true,
      },
      populate: 1,
    }),
    postFetch("/api/collections/get/post", {
      filter: {
        language: currentLanguage,
      },
      limit: 4,
      skip: 0,
      sort: {
        _created: -1,
      },
    }),
    postFetch("/api/collections/get/post", {
      filter: {
        category_slug: "business",
        language: currentLanguage,
      },
      limit: 3,
      skip: 0,
      sort: {
        publish_at: -1,
      },
    }),
    postFetch("/api/collections/get/post", {
      filter: {
        category_slug: "tech",
        language: currentLanguage,
      },
      limit: 3,
      skip: 0,
      sort: {
        publish_at: -1,
      },
    }),
    postFetch("/api/collections/get/post", {
      filter: {
        category_slug: "interviews",
        language: currentLanguage,
      },
      limit: 2,
      skip: 0,
      sort: {
        publish_at: -1,
      },
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
  if (resultLastestNews.entries) {
    listLastestNewsBlock = resultLastestNews.entries;
  }
  if (resultBusinessNews.entries) {
    businessNews = resultBusinessNews.entries;
  }
  if (resultTechNews.entries) {
    techNews = resultTechNews.entries;
  }
  if (resultInterviewNews.entries) {
    interviewNews = resultInterviewNews.entries;
  }
  if (resultMenu.entries) {
    headerMenu = resultMenu.entries;
  }

  return {
    props: {
      headerMenu,
      interviewNews,
      data,
      techNews,
      businessNews,
      listLastestNewsBlock,
      namespacesRequired: ["common"],
    },
  };
};

export default withTranslation("common")(HomePage);
