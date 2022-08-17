---
title: Download
---

# Select your platform

## macOS

<VPButton :href="assets.macM1" theme="brand" text="Download for Apple Silicon" />

macOS 11.0+

<VPButton :href="assets.mac" theme="brand" text="Download for Intel" />

macOS 10.13+

## Windows

<VPButton :href="assets.win" theme="brand" text="Download for Windows" />

Windows 10, 11

## Linux

<VPButton :href="assets.linux" theme="brand" text="Download for Linux" />

Ubuntu

<script setup lang="ts">
import VPButton from 'vitepress/client/theme-default/components/VPButton.vue'
import assets from '../.vitepress/_data/assets.json'
</script>
