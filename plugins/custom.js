const reactReduxNoImport = require("../rules/reactReduxNoImport.js");
const noNan = require("../rules/noNan.js");

module.exports = {
  rules: {
    "enforce-no-nan": noNan,
    "enforce-no-react-redux-import": reactReduxNoImport,
  },
};
