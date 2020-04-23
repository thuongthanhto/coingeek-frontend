const NextI18Next = require("next-i18next").default;

module.exports = new NextI18Next({
  defaultLanguage: "en",
  otherLanguages: ["en", "zh-hans"],
  localeSubpaths: {
    "zh-hans": "zh-hans",
  },
  lowerCaseLng: true,
});
