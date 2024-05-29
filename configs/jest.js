const jestRules = require("../rules/jest.js");

module.exports = {
  env: {
    jest: true,
  },
  plugins: ["jest"],
  rules: jestRules,
};
