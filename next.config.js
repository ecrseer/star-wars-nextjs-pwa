const withPWA = require('next-pwa')
const wPWAProperties = withPWA({
    pwa: {
      dest: 'public',
      swSrc: 'service-worker.js'
    },
    env:{      
        MY_SWAPI: process.env.MY_SWAPI,
    },
    
    
  });
async function headers() {
    return [
      {
        // matching all API routes
        source: "https://swapi.dev/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "https://swapi.dev/api/" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
    }
]}

module.exports = {headers,wPWAProperties};


