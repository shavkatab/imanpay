export const changeContent = (lang, en, ru, uz) => {
  switch (lang) {
    case "en":
      return en;
    case "ru":
      return ru;
    default:
      return uz;
  }
};
