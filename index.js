const baseRules = require("./rules/base.js");
const reactRules = require("./rules/react.js");

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

const ReactConfig = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  plugins: ["react"],
  rules: reactRules,
};

module.exports = {
  configs: {
    base: baseConfig,
    react: ReactConfig,
  },
};
