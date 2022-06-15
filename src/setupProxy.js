const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://13.125.247.60", //접속하려는 서버의 루트 URL
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/user", {
      target: "http://13.125.247.60", //접속하려는 서버의 루트 URL
      changeOrigin: true,
    })
  );
};