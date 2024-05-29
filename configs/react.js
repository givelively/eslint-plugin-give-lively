const reactRules = require("../rules/react.js");

module.exports = {
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react"],
  rules: reactRules,
};
