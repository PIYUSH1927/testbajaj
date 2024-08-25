// config-overrides.js
const path = require('path');

module.exports = function override(config, env) {
  // Add polyfills
  config.resolve.fallback = {
    "path": require.resolve("path-browserify"),
    "fs": false,
    "file": false,
    "system": false
  };

  return config;
};