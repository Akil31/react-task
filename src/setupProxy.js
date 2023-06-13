const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://ahd.instapract.com/web',
      changeOrigin: true,
    })
  );
};
