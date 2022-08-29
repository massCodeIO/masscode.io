---
title: Download
---

# Select your platform

Current version {{assets.version}}

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

# Select your platform

<AssetsDownload />

<script setup lang="ts">
import assets from '../.vitepress/_data/assets.json'
</script>
