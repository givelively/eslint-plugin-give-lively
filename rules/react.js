module.exports = {
  "react/boolean-prop-naming": [
    "warn",
    {
      message:
        'Boolean prop ({{ propName }}) should match boolean name convention, starting with verb like "is", "has", "should", etc.',
    },
  ],
  "react/destructuring-assignment": ["error", "always"],
  "react/display-name": "off",
  "react/hook-use-state": "error",
  "react/jsx-boolean-value": [
    "error",
    "never",
    {
      always: [],
    },
  ],
  "react/jsx-max-depth": [
    "warn",
    {
      max: 3,
    },
  ],
  "react/jsx-no-script-url": "error",
  "react/jsx-no-useless-fragment": "error",
  "react/jsx-pascal-case": "error",
  "react/no-danger": "error",
  "react/no-invalid-html-attribute": "error",
  "react/no-multi-comp": "warn",
  "react/no-unused-prop-types": "error",
  "react/require-default-props": "warn",
};
