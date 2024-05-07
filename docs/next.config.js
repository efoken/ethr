const stylexPlugin = require("@stylexjs/nextjs-plugin");

const config = {};

module.exports = stylexPlugin({
  rootDir: __dirname,
})(config);
