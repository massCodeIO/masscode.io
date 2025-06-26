import type { EnhanceAppContext } from 'vitepress'
import VPButton from 'vitepress/dist/client/theme-default/components/VPButton.vue'
import DefaultTheme from 'vitepress/theme'
import { h, watch } from 'vue'
import { configure, pageview } from 'vue-gtag'
import AppLink from '../components/global/AppLink.vue'
import AppVersion from '../components/global/AppVersion.vue'
import AssetsDownload from '../components/global/AssetsDownload.vue'
import CodeEditor from '../components/global/CodeEditor.vue'
import CodePreview from '../components/global/CodePreview.vue'
import CollectionPreview from '../components/global/CollectionPreview.vue'
import SidebarSponsors from '../components/sponsors/SidebarSponsors.vue'

import './styles.scss'

function initGtag(context: EnhanceAppContext) {
  configure({
    tagId: import.meta.env.VITE_GA,
  })

  watch(() => context.router.route.data.relativePath, () => {
    pageview(context.router.route.path)
  })
}

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'aside-outline-after': () => h(SidebarSponsors),
    })
  },
  enhanceApp(context: EnhanceAppContext) {
    context.app.component('AppLink', AppLink)
    context.app.component('AppVersion', AppVersion)
    context.app.component('CodeEditor', CodeEditor)
    context.app.component('CodePreview', CodePreview)
    context.app.component('CollectionPreview', CollectionPreview)
    context.app.component('AssetsDownload', AssetsDownload)
    context.app.component('VPButton', VPButton)

    initGtag(context)
  },
}
