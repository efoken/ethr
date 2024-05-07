const { FlatCompat } = require("@eslint/eslintrc");

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/** @type {import("eslint").Linter.FlatConfig[]} */
module.exports = [
  ...compat.extends("airbnb", "airbnb-typescript", "prettier"),
  {
    ignores: [
      ".yarn/*",
      "app/.expo/",
      "docs/.next/",
      "babel.config.js",
      "eslint.config.js",
    ],
  },
  {
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    rules: {
      "no-console": "off",
      "no-nested-ternary": "off",
      "no-restricted-syntax": "off",
      "import/no-extraneous-dependencies": "off",
      "import/prefer-default-export": "off",
      "react/function-component-definition": "off",
      "react/jsx-props-no-spreading": "off",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "react/require-default-props": "off",
    },
  },
];
