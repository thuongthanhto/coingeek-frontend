import moment from "moment";
import _capitalize from "lodash/capitalize";
import _isArray from "lodash/isArray";
import _isEmpty from "lodash/isEmpty";

export const convertLastestNews = (source) => {
  const now = moment();
  const publishAt = moment(source.publish_at);
  const from = now.diff(publishAt, "hours");
  const dist = {
    id: source["_id"],
    title: source.title,
    image: source.image ? source.image.path : "",
    description: source.summary,
    url: `/${source.title_slug}`,
    category: source.categories ? source.categories[0].display : "",
    datetime: from < 24 ? from : moment(source.publishAt).format("d MMM YYYY"),
  };

  return dist;
};

export const convertVideo = (source) => {
  const now = moment();
  const publishAt = moment(source.publish_at);
  const from = now.diff(publishAt, "hours");
  const dist = {
    id: source["_id"],
    title: source.title,
    image: source.image ? source.image.path : "",
    description: source.summary,
    url: `/${source.title_slug}`,
    category: "video",
    datetime: from < 24 ? from : moment(source.publishAt).format("d MMM YYYY"),
  };

  return dist;
};

export const convertPodCast = (source) => {
  const dist = {
    url: `/${source.title_slug}`,
    image: source.image ? source.image.path : "",
    title: source.title,
  };

  return dist;
};

export const convertVideos = (source) => {
  const dist = {
    url: `/${source.title_slug}`,
    videoUrl: source.video_link,
    title: source.title,
    description: source.meta_description,
  };

  return dist;
};

export const convertBanner = (source) => {
  if (source.length === 0) {
    return {};
  }
  const dist = {
    image: source[0].settings.image.path,
    url: source[1].settings.url,
  };

  return dist;
};

export const convertPost = (source) => {
  const now = moment();
  const publishAt = moment(source.publish_at);
  const from = now.diff(publishAt, "hours");
  let fakeAuthor = {
    name: "",
    image: "",
    url: "",
  };
  let author = fakeAuthor;
  if (!_isEmpty(source.author)) {
    author = convertAuthorPost(source.author);
  }

  let tags = [];
  if (source.tags) {
    tags = source.tags.map((item) => ({
      title: item.name,
      slug: item.name_slug,
    }));
  }

  const dist = {
    id: source["_id"],
    title: source.title,
    image: source.image.path,
    description: source.meta_description,
    url: `/${source.title_slug}`,
    category: !_isEmpty(source.categories) ? source.categories[0].name : "",
    categoryUrl: !_isEmpty(source.categories)
      ? source.categories[0].name_slug
      : "",
    datetime: from < 24 ? from : moment(source.publishAt).format("d MMM YYYY"),
    content: source.content,
    tags,
    author,
  };

  return dist;
};

export const convertAuthorPost = (source) => {
  const dist = {
    name: source.name,
    image: source.avatar.path,
    url: `/authors/${source.name_slug}/`,
  };

  return dist;
};

export const convertAuthor = (source) => {
  const dist = {
    id: source["_id"],
    name: source.name,
    image: source.avatar.path,
    slug: source.name_slug,
    position: source.title,
    defaultPosition: "author",
    socials: {
      facebook: source.facebook,
      twitter: source.twitter,
      linkedin: source.linkedin,
    },
    description: source.description,
  };

  return dist;
};

export const convertMenu = (source) => {
  const dist = {
    title: _capitalize(source.menu_name),
    key: source.menu_name,
    url: `${source.menu_name_slug}`,
    isExternalSite: false,
    color: source.order,
    isShow: true,
  };
  if (_isArray(source.sub_menu)) {
    dist.children = convertSubmenu(source.sub_menu);
  }

  return dist;
};

export const convertSubmenu = (source) => {
  const submenu = source.map((item) => {
    const dist = {
      title: _capitalize(item.value.name),
      url: `/${item.value.slug}`,
      key: item.value.slug,
      isExternalSite: false,
    };

    if (_isArray(item.value.sub_menu)) {
      dist.children = convertNestSubmenu(item.value.sub_menu, item.value.name);
    }

    return dist;
  });

  return submenu;
};

export const convertNestSubmenu = (source, url) => {
  const submenu = source.map((item) => {
    const dist = {
      title: _capitalize(item.value.name),
      key: item.value.slug,
    };

    if (item.value.slug.includes("category")) {
      let category = item.value.slug.split("/");

      if (category) {
        dist.query = {};
        dist.query.category = category[category.length - 2];
        dist.url = url;
      }
    } else {
      dist.url = `/${item.value.name}`;
    }

    return dist;
  });

  return submenu;
};

export const convertBitcoinArticles = (source) => {
  const dist = {
    id: source["_id"],
    title: source.title,
    image: source.image.path,
    slug: source.title_slug,
  };

  return dist;
};

export const convertBitcoin = (source) => {
  const dist = {
    description: source.body,
    data: source.slider_posts.map((item) => convertBitcoinArticles(item)),
    pageTitle: source.header,
  };

  return dist;
};

export const convertRelatedArticles = (source) => {
  const dist = {
    id: source["_id"],
    title: source.title,
    slug: source.title_slug,
  };

  return dist;
};
