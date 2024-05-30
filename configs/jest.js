const jestRules = require("../rules/jest.js");

module.exports = {
  env: {
    jest: true,
  },
  extends: ["plugin:jest/recommended"],
  plugins: ["jest"],
  rules: jestRules,
};
