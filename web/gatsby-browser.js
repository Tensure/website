/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

const addScript = (url) => {
  const script = document.createElement("script");
  script.src = url;
  script.async = true;
  document.body.appendChild(script);
};

export const onClientEntry = () => {
  window.onload = () => {
    addScript("https://fast.wistia.com/embed/medias/02n68rjpjf.jsonp");
    addScript("https://fast.wistia.com/assets/external/E-v1.js");
  };
};
