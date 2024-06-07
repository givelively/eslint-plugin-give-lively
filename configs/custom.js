const exempt = [
    'frontend/SmartDonations/Legacy/**/*',
    'frontend/providers/UserProvider.js',
    'frontend/P2P/P2PTeams/pages/TeamPage/Donate/index.jsx',
    'frontend/SmartDonations/StoryTemplate/StoryTemplateContainer.js',
    'frontend/SmartDonations/DefaultTemplate/index.js',
    'frontend/__tests__/providers/UserProvider.spec.js',
    'frontend/__tests__/SmartDonations/**/*',
    'frontend/__tests__/Auth/CartLogin.spec.js',
];

module.exports = {
  plugins: ["give-lively"],
  rules: {
    "give-lively/enforce-no-react-redux-import": "error",
  },
  overrides: [
    {
      files: exempt,
      rules: {
        "give-lively/enforce-no-react-redux-import": "off",
      },
    },
  ],
};

