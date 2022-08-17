import DefaultTheme from 'vitepress/theme'
import type { EnhanceAppContext } from 'vitepress'
import AppLink from '../components/global/AppLink.vue'
import AppVersion from '../components/global/AppVersion.vue'
import CodeEditor from '../components/global/CodeEditor.vue'
import CodePreview from '../components/global/CodePreview.vue'
import CollectionPreview from '../components/global/CollectionPreview.vue'

import './styles.scss'
export default {
  ...DefaultTheme,
  enhanceApp (context: EnhanceAppContext) {
    context.app.component('AppLink', AppLink)
    context.app.component('AppVersion', AppVersion)
    context.app.component('CodeEditor', CodeEditor)
    context.app.component('CodePreview', CodePreview)
    context.app.component('CollectionPreview', CollectionPreview)
  }
}
