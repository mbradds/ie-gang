import justWhy from "../dist/index.js";
let warningParams = {
  message:
    "We noticed you are using Internet Explorer. Please consider using a different browser for a better experience on this page.",
  type: "panel",
  title: false,
  applyIE: true,
};
justWhy.ieWarn(warningParams);
