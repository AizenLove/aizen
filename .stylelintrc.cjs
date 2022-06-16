module.exports = {
  extends: [
    "stylelint-config-recommended-scss",
    "stylelint-config-standard-scss",
    "stylelint-config-prettier",
  ],
  plugins: ["stylelint-scss"],
  overrides: [
    {
      files: ["**/*.module.scss"],
      rules: {
        'selector-class-pattern': '^[a-z][a-zA-Z0-9]+$'  // CSS Modules
      }
    },
  ]
};
