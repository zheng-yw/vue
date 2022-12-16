module.exports = {
  publicPath: './',
  css: {
    extract: false
  },
  chainWebpack(config) {
    config.module.rule('images').test(/.(jpg|jpeg|png|gif|ico)$/)
      .use('url-loader')
      .loader('url-loader')
      .options({
        limit: 1024 * 20,
        name: '[name].[hash:8].[ext]',
        esModule: false
      })
      .end()
      .enforce('post')
  },
}
