const baseRules = require("../rules/base.js");

const baseConfig = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: baseRules,
};

module.exports = baseConfig;
