import DefaultTheme from 'vitepress/theme'
import type { EnhanceAppContext } from 'vitepress'
import AppLink from '../components/global/AppLink.vue'
import AppVersion from '../components/global/AppVersion.vue'

import './styles.scss'
export default {
  ...DefaultTheme,
  enhanceApp (context: EnhanceAppContext) {
    context.app.component('AppLink', AppLink)
    context.app.component('AppVersion', AppVersion)
  }
}
