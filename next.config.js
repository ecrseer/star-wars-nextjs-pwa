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
 
 
  

module.exports = {wPWAProperties};


