module.exports = {
  presets: ["next/babel"],
  plugins: [
    "react-strict-dom/babel",
    [
      "@stylexjs/babel-plugin",
      {
        dev: true,
        runtimeInjection: true,
        // genConditionalClasses: true,
        treeshakeCompensation: true,
        importSources: [{ from: "@ethr/core", as: "css" }, "@stylexjs/stylex"],
        unstable_moduleResolution: {
          type: "commonJS",
          rootDir: __dirname,
        },
      },
    ],
  ],
};
