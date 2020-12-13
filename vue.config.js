module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://txcourseapi.jsplusplus.com",
        changeOrigin: true,
        pathRewrite: { "^/api": "/course" }
      }
    }
  }
};
