module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./**/tsconfig.json", "./**/tsconfig.*.json"],
    sourceType: "module",
  },
  plugins: ["react", "import", "@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
      webpack: {
        config: {
          resolve: {
            extensions: [".scss"],
          },
        },
      },
    },
  },
  rules: {
    // typescript
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/ban-ts-comment": [
      "error",
      {
        "ts-expect-error": "allow-with-description",
        "ts-ignore": true,
        "ts-nocheck": "allow-with-description",
        "ts-check": false,
        minimumDescriptionLength: 1,
      },
    ],
    "@typescript-eslint/prefer-ts-expect-error": "error",
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/prefer-nullish-coalescing": "error",
    "@typescript-eslint/no-explicit-any": [
      "error",
      {
        fixToUnknown: true,
      },
    ],
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "@typescript-eslint/method-signature-style": ["error", "property"],
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
    // common
    "no-console": "warn",
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "type",
          "internal",
          "parent",
          "index",
          "sibling",
          "object",
          "unknown",
        ],
        pathGroups: [
          {
            pattern: "~/**",
            group: "internal",
            position: "before",
          },
        ],
        alphabetize: {
          order: "asc",
        },
        "newlines-between": "never",
      },
    ],
    // react
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
  },
};
