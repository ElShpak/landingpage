module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/landingpage/'
    : '/',
    css: {
      loaderOptions: {
        sass: {
          data: `
            @import "@/scss/_variables.scss";
            @import "@/scss/_mixins.scss";
          `
        }
      }
    }
  };