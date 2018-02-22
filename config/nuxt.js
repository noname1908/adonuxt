'use strict'

const resolve = require('path').resolve
const webpack = require('webpack')
const APP_URL = use('Env').get('APP_URL')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Unews',
    htmlAttrs: {
      lang: 'vi'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Unews' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    noscript: [{
      innerHtml: `
        <h1>Javascript Disabled</h1>
        <p>Please enable Javascript and <a href=".">reload</a> in order to use this site.</p>
      `
    }]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /**
   * Global css
   */
  css: [

  ],
  /**
   * Plugins
   */
  plugins: [
    { src: '~/plugins/axios', ssr: true },
    { src: '~/plugins/bootstrap-vue', ssr: true },
    { src: '~/plugins/vue-notifications', ssr: false }
  ],
  modules: [
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt'
  ],
  axios: {
    prefix: '/api',
    credentials: true
  },
  /*
  ** Build configuration
  */
  build: {
    analyze: {
      analyzerMode: 'static',
      generateStatsFile: true,
      statsFilename: 'webpack-stats.json'
    },
    extractCSS: true,
    vendor: [
      'axios',
      'jquery',
      'lodash',
      'vue-chartjs',
      'bootstrap-vue',
      'vue-notifications',
      'moment',
      'mini-toastr',
      'js-cookie',
      'slug',
    ],
    plugins: [
      new webpack.ProvidePlugin({
        '$': 'jquery',
        'jQuery': 'jquery',
        'window.jQuery': 'jquery',
        '_': 'lodash'
      }),
      new webpack.DefinePlugin({
        'typeof global': JSON.stringify('undefined'),
      }),
    ],
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      /* if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      } */
    }
  },
  /**
   * Vue Router config
   */
  router: {
    base: '/',
    linkActiveClass: 'open active',
    scrollBehavior: () => ({
      x: 0,
      y: 0
    })
  },
  /**
   * Point to resources
   */
  srcDir: resolve(__dirname, '..', 'resources')
}
