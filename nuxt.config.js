require('dotenv').config()

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */

  head: {
    title:
      'massCode - A free and open source code snippets manager for developers',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Code snippets manager for developers, developed using web technologies.'
      },
      { lang: 'en' },
      { name: 'google-site-verification', content: 'h-rU1tSutO83wOyvi4syrk_XTvgennlUPkL6fMmq5cI' },
      // FB
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://masscode.io' },
      { property: 'og:title', content: 'massCode - A free and open source code snippets manager for developers.' },
      { property: 'og:description', content: 'A free and open source code snippets manager for developers.' },
      { property: 'og:image', content: 'https://masscode.io/og.png' },
      // Twitter
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:url', content: 'https://masscode.io' },
      { property: 'twitter:title', content: 'massCode - A free and open source code snippets manager for developers.' },
      { property: 'twitter:description', content: 'A free and open source code snippets manager for developers.' },
      { property: 'twitter:image', content: 'https://masscode.io/og.png' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~plugins/ga'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {}
  }
}
