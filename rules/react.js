module.exports = {
  "react/display-name": "off",
  "react/no-danger": "error",
  "react/no-invalid-html-attribute": "error",
  "react/jsx-no-script-url": "error",
  "react/hook-use-state": "error",
  "react/boolean-prop-naming": [
    "error",
    {
      message:
        'Boolean prop ({{ propName }}) should match boolean name convention, starting with verb like "is", "has", "should", etc.',
    },
  ],
  "react/destructuring-assignment": ["error", "always"],
  "react/jsx-boolean-value": ["error", "never", { always: [] }],
  "react/jsx-pascal-case": "error",
  "react/jsx-no-useless-fragment": "error",
  "react/jsx-max-depth": ["warn", { max: 3 }],
  "react/require-default-props": "warn",
  "react/no-unused-prop-types": "error",
};
