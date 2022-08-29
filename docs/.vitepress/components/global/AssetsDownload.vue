<template>
  <h2>macOS</h2>

  <VPButton
    :href="assets.macM1"
    theme="brand"
    text="Download for Apple Silicon"
    @click="onShowDialog"
  />

  <p>macOS 11.0+</p>

  <VPButton
    :href="assets.mac"
    theme="brand"
    text="Download for Intel"
    @click="onShowDialog"
  />

  <p>macOS 10.13+</p>

  <h2>Windows</h2>

  <VPButton
    :href="assets.win"
    theme="brand"
    text="Download for Windows"
    @click="onShowDialog"
  />

  <p>Windows 10, 11</p>

  <h2>Linux</h2>

  <VPButton
    :href="assets.linux"
    theme="brand"
    text="Download for Linux"
    @click="onShowDialog"
  />

  <p>Ubuntu</p>

  <ClientOnly>
    <ElDialog
      v-model="isShowDialog"
      title="Pay what you want"
    >
      <p>Name your price, or leave $0 to get massCode for free</p>
      <ElInput
        v-model="price"
        style="margin-bottom: 24px"
        size="large"
        type="number"
        placeholder="0"
      >
        <template #prepend>
          $
        </template>
      </ElInput>
      <VPButton
        :text="dialogButtonText"
        @click="onDownloadAssets"
      />
    </ElDialog>
  </ClientOnly>
</template>

<script setup lang="ts">
import { ElDialog, ElInput } from 'element-plus'
import { useDownloadAssets } from '../../composables'
import assets from '../../_data/assets.json'

import 'element-plus/theme-chalk/base.css'
import 'element-plus/theme-chalk/el-overlay.css'
import 'element-plus/theme-chalk/el-dialog.css'
import 'element-plus/theme-chalk/el-input.css'

const {
  isShowDialog,
  price,
  dialogButtonText,
  onDownloadAssets,
  onShowDialog
} = useDownloadAssets()
</script>

<style lang="scss" scoped></style>
