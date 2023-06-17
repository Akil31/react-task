import { createProxyMiddleware } from 'http-proxy-middleware';

export default function (app) {
  console.log("Setup proxy is ever called");
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://ahd.instapract.com/web/api/default/login', // Replace with your backend server URL
      "secure": false,
      "logLevel":"debug",
      changeOrigin: true,
    })
  );
};
