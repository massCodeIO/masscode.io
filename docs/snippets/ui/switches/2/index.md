---
title: Love Switcher
titleTemplate: Snippet Collection | massCode
author: barisdogansutcu
---

# {{ $frontmatter.title }}

Author: <AppLink :href="`https://github.com/${$frontmatter.author}`">@{{$frontmatter.author}}</AppLink>

## Result

<CodePreview
  :css="css"
  :html="html"
  :isDark="$frontmatter.isDark"
  :isGray="$frontmatter.isGray"
/>

## CSS

<ClientOnly>
  <CodeEditor
    lang="css"
    v-model="css"
  />
</ClientOnly>

## HTML

<ClientOnly>
  <CodeEditor
    lang="htmlmixed"
    v-model="html"
  />
</ClientOnly>

<script setup>
import htmlRaw from './markup.html?raw'
import cssRaw from './styles.css?raw'
import { ref } from 'vue'

const css = ref(cssRaw)
const html = ref(htmlRaw)
</script>
