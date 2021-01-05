const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    swSrc: 'service-worker.js'
  },
  env:{
      NODE_ENV: process.env.NODE_ENV,
      MY_SWAPI: process.env.MY_SWAPI,
  }
})
