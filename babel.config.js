module.exports = {
  presets: ["next/babel", "react-strict-dom/babel-preset"],
  plugins: [
    [
      "@stylexjs/babel-plugin",
      {
        dev: true,
        // genConditionalClasses: true,
        importSources: [{ from: "@ethr/core", as: "css" }],
        runtimeInjection: true,
        treeshakeCompensation: true,
        unstable_moduleResolution: {
          type: "commonJS",
          rootDir: __dirname,
        },
      },
    ],
  ],
};
