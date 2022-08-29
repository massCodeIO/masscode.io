---
title: Download
---

# Select your platform

Current version v{{assets.version}}

<AppLink href="https://github.com/massCodeIO/massCode/releases">Change Log</AppLink>

## macOS

<VPButton @click="onShowDialog" :href="assets.macM1" theme="brand" text="Download for Apple Silicon" />

macOS 11.0+

<VPButton @click="onShowDialog" :href="assets.mac" theme="brand" text="Download for Intel" />

macOS 10.13+

## Windows

<VPButton @click="onShowDialog" :href="assets.win" theme="brand" text="Download for Windows" />

Windows 10, 11

## Linux

<VPButton @click="onShowDialog" :href="assets.linux" theme="brand" text="Download for Linux" />

Ubuntu

<ClientOnly>
  <ElDialog v-model="isShowDialog" title="Pay what you want">
    <p>Name your price, or leave $0 to get massCode for free</p>
    <ElInput
      v-model="price"
      style="margin-bottom: 24px;"
      size="large"
      type="number"
      placeholder="0">
      <template #prepend>$</template>
    </ElInput>
    <VPButton @click="onDownload" :text="buttonText"></VPButton>
  </ElDialog>
</ClientOnly>

<script setup lang="ts">
import { ref, computed } from 'vue'
import VPButton from 'vitepress/client/theme-default/components/VPButton.vue'
import assets from '../.vitepress/_data/assets.json'

import { ElInput, ElDialog } from 'element-plus'

import 'element-plus/theme-chalk/base.css'
import 'element-plus/theme-chalk/el-overlay.css'
import 'element-plus/theme-chalk/el-dialog.css'
import 'element-plus/theme-chalk/el-input.css'

const isShowDialog = ref(false)
const price = ref()
const url = ref()
const buttonText = computed(() => price.value > 0 ? 'Donate' : 'Download')

const onShowDialog = (e) => {
  e.preventDefault()
  url.value = e.target.href
  isShowDialog.value = true
}

const onDownload = (e) => {
  const a = document.createElement('a')
 
  if (price.value > 0) {
    a.href = `https://antonreshetov.gumroad.com/l/masscode?price=${price.value}`
  } else {
    a.href = url.value
    a.download = true
  }

  a.click()
  isShowDialog.value = false
}
</script>
