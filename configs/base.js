const baseRules = require("../rules/base.js");

const baseConfig = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  extends: ["eslint:recommended"],
  rules: baseRules,
};

module.exports = baseConfig;
