const withPWA = require('next-pwa')

 
  

module.exports = withPWA({
    pwa: {
      dest: 'public',
      swSrc: 'service-worker.js'
    },
    env:{      
        /* achei que ia ser necessario passar
        a url da api como variavel local
         mas acabei nao precisando(por enquanto) */
        MY_SWAPI: process.env.MY_SWAPI,
    },
    
    
  });

