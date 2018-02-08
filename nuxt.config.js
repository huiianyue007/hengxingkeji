var Webpack = require('webpack')
module.exports = {
  build: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 1000, // 1KO
          name: 'phone_img/[name].[hash:7].[ext]'
        }
      }
    ],
    plugins: [
      new Webpack.ProvidePlugin({
        'AV': 'leancloud-storage'
      })
    ]
  },
  /*
   ** Headers of the page
   */
  head: {
    title: '默客科技 专业跨平台app开发',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: '微信，安卓，ios，pc，四端一体'},
      {
        name: 'description',
        content: '最短一周+最低一万=四端一体app，当前最成熟的跨平台解决方案，ios、安卓、微信、浏览器，一份代码四端运行。使用html5 plus，webpack，vue，baas等技术开发，海量可复用组件，标准化开发，可快速上线，高速迭代。顶级技术，敢言横行。'
      },
      {name: 'keywords', content: 'app开发，微信开发，四端一体，默客科技，跨平台'},
      {'http-equiv': 'cleartype', content: 'on'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1,maximum-scale=1,user-scalable=no'},
      {name: 'apple-mobile-web-app-capable', content: 'yes'},
      {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '~assets/scss/_base.scss',
    '~assets/scss/style.scss'
  ],
  /*
   ** Customize the progress-bar color
   */
  loading: {color: '#3B8070'},
  plugins: ['~plugins/init.js']
}
