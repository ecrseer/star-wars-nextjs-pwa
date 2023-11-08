const withPWA = require("next-pwa");

module.exports = withPWA({
  dest: "public",
  swSrc: "service-worker.js",
});
