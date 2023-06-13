const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    try{
       app.use(
           '/api',
           createProxyMiddleware({
             target: 'https://ahd.instapract.com/web',
             changeOrigin: true
           })
         )
             }
    catch(err){
       console.log(err.message);
    }
   }