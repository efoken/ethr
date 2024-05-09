const { FlatCompat } = require("@eslint/eslintrc");
const eslintPluginUnicorn = require("eslint-plugin-unicorn");

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/** @type {import("eslint").Linter.FlatConfig[]} */
module.exports = [
  ...compat.extends("airbnb", "airbnb/hooks", "airbnb-typescript", "prettier"),
  eslintPluginUnicorn.configs["flat/recommended"],
  {
    ignores: [
      ".yarn/*",
      "app/.expo/",
      "docs/.next/",
      "**/babel.config.js",
      "**/eslint.config.js",
    ],
  },
  {
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    rules: {
      "consistent-return": "off",
      "no-console": "off",
      "no-continue": "off",
      "no-nested-ternary": "off",
      "no-restricted-syntax": "off",
      "import/no-extraneous-dependencies": "off",
      "import/prefer-default-export": "off",
      "react/function-component-definition": "off",
      "react/jsx-props-no-spreading": "off",
      "react/no-unused-class-component-methods": "off",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "react/require-default-props": "off",
      "react/state-in-constructor": "off",
      "react/static-property-placement": "off",
      "react-hooks/exhaustive-deps": [
        "error",
        {
          additionalHooks: "useEnhancedEffect",
        },
      ],
      "unicorn/filename-case": "off",
      "unicorn/no-array-reduce": "off",
      "unicorn/no-nested-ternary": "off",
      "unicorn/no-null": "off",
      "unicorn/prefer-module": "off",
      "unicorn/prefer-top-level-await": "off",
      "unicorn/prevent-abbreviations": "off",
    },
  },
];
