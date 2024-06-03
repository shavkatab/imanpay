module.exports = {
  locales: ["ru", "en", "uz"],
  defaultLocale: "uz",
  loadLocaleFrom: (lang, ns) =>
    import(`locales/${lang}/${ns}.json`).then((m) => m.default),
  pages: {
    "*": ["common"],
    "/": ["faq"],
    "/faq": ["faq"],
  },
  localeDetection: false,
};
