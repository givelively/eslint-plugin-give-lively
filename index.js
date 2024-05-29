const baseConfig = require("./configs/base.js");
const reactConfig = require("./configs/react.js");
const jestConfig = require("./configs/jest.js");

module.exports = {
  configs: {
    base: baseConfig,
    react: reactConfig,
    jest: jestConfig,
  },
};
