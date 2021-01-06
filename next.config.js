const withPWA = require('next-pwa')

 
  

module.exports = withPWA({
    pwa: {
      dest: 'public',
      swSrc: 'service-worker.js'
    },
    env:{      
        MY_SWAPI: process.env.MY_SWAPI,
    },
    
    
  });

