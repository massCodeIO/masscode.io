import { defineConfig } from 'vitepress'

const description = 'Code snippets manager for developers, developed using web technologies.'
const ogDescription = 'A free and open source code snippets manager for developers'
const ogImage = 'https://masscode.io/og-image.png'
const ogTitle = 'massCode'
const ogUrl = 'https://masscode.io'
const gsv = 'h-rU1tSutO83wOyvi4syrk_XTvgennlUPkL6fMmq5cI'

export default defineConfig({
  title: 'massCode',
  description,

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo-64w.png' }],
    ['meta', { property: 'description', content: description }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: ogTitle }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'og:description', content: ogDescription }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'google-site-verification', content: gsv }]
  ],

  themeConfig: {
    logo: '/logo-64w.png',

    nav: [
      { text: 'Documentation', link: '/documentaion' },
      { text: 'Releases', link: '/releases' },
      { text: 'Snippet Collection', link: '/snippets' },
      { text: 'Donate', link: '/donate' }
    ],

    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/antonreshetov' },
      { icon: 'github', link: 'https://github.com/massCodeIO/massCode' }
    ],

    footer: {
      message: 'massCode released under the AGPL v3 License.<br>Snippet collection released under the CC-BY-4.0 License.',
      copyright: 'Copyright © 2019-present Anton Reshetov'
    }
  }
})
