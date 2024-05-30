module.exports = {
  "jest/consistent-test-it": [
    "error",
    {
      fn: "it",
      withinDescribe: "it",
    },
  ],
  "jest/expect-expect": "error",
  "jest/max-expects": ["error", { max: 3 }],
  "jest/max-nested-describe": "error",
  "jest/no-confusing-set-timeout": "error",
  "jest/no-done-callback": "warn",
  "jest/no-duplicate-hooks": "error",
  "jest/prefer-hooks-in-order": "error",
  "jest/prefer-hooks-on-top": "error",
  "jest/prefer-to-be": "warn",
  "jest/require-to-throw-message": "error",
  "jest/require-top-level-describe": "error",
};
