module.exports = {
  "no-restricted-syntax": [
    "error",
    {
      message: "Use userEvent instead of fireEvent",
      selector: 'MemberExpression > Identifier[name="fireEvent"]',
    },
  ],
};
