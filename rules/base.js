module.exports = {
  "array-callback-return": [
    "warn",
    {
      checkForEach: true,
    },
  ],
  complexity: [
    "error",
    {
      max: 4,
    },
  ],
  "consistent-return": [
    "error",
    {
      treatUndefinedAsUnspecified: true,
    },
  ],
  "default-case": "error",
  "default-case-last": "error",
  "dot-notation": "error",
  "eol-last": "warn",
  eqeqeq: ["error", "always"],
  "max-depth": [
    "error",
    {
      max: 3,
    },
  ],
  "max-lines": [
    "warn",
    {
      max: 300,
      skipComments: true,
    },
  ],
  "max-params": [
    "error",
    {
      max: 3,
    },
  ],
  "max-statements": [
    "warn",
    {
      max: 20,
    },
  ],
  "no-alert": "warn",
  "no-console": [
    "error",
    {
      allow: ["warn", "error"],
    },
  ],
  "no-duplicate-imports": "error",
  "no-magic-numbers": [
    "warn",
    {
      ignore: [0, 1],
      ignoreArrayIndexes: true,
      ignoreDefaultValues: true,
    },
  ],
  "no-nested-ternary": "error",
  "no-param-reassign": "error",
  "no-throw-literal": "error",
  "no-unneeded-ternary": "error",
  "no-use-before-define": "error",
  "no-useless-computed-key": "error",
  "no-useless-return": "warn",
  "no-var": "error",
  "object-shorthand": ["error", "properties"],
  "one-var": ["error", "never"],
  "prefer-arrow-callback": "error",
  "prefer-const": [
    "error",
    {
      destructuring: "all",
      ignoreReadBeforeAssign: true,
    },
  ],
  "prefer-destructuring": [
    "error",
    {
      object: true,
    },
  ],
  "prefer-object-spread": "error",
  "prefer-template": "error",
  "sort-keys": ["warn", "asc", { caseSensitive: false }],
  yoda: ["warn", "never"],
};
