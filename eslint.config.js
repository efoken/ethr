const { FlatCompat } = require("@eslint/eslintrc");
const eslintPluginJsdoc = require("eslint-plugin-jsdoc");
const eslintPluginUnicorn = require("eslint-plugin-unicorn");

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/** @type {import("eslint").Linter.FlatConfig[]} */
module.exports = [
  ...compat.extends(
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "prettier",
  ),
  eslintPluginJsdoc.configs["flat/recommended-typescript-error"],
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
      "jsdoc/multiline-blocks": [
        "error",
        {
          noSingleLineBlocks: true,
          singleLineTags: ["default"],
        },
      ],
      "jsdoc/require-jsdoc": "off",
      "jsdoc/require-param": "off",
      "jsdoc/require-returns": "off",
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
      "@typescript-eslint/consistent-type-exports": "error",
      "@typescript-eslint/consistent-type-imports": "error",
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
