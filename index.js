const baseConfig = require("./configs/base.js");
const reactConfig = require("./configs/react.js");
const jestConfig = require("./configs/jest.js");
const customConfig = require("./configs/custom.js");
const reactReduxNoImport = require("./rules/reactReduxNoImport.js");
const noNan = require("./rules/noNan.js");

module.exports = {
  configs: {
    base: baseConfig,
    react: reactConfig,
    jest: jestConfig,
    custom: customConfig,
  },
  rules: {
    "enforce-no-nan": noNan,
    "enforce-no-react-redux-import": reactReduxNoImport,
  },
};
