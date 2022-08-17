<template>
  <div
    class="code-preview"
    :class="{
      'is-dark': isDark,
      'is-gray': isGray,
    }"
  >
    <div class="body">
      <iframe
        :srcDoc="srcDoc"
        frameborder="0"
        height="100%"
        width="100%"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'

interface Props {
  html: string
  css: string
  isGray: boolean
  isDark: boolean
}

const props = defineProps<Props>()

const srcDoc = ref()
const isDark = ref(false)
let observer = null

const htmlDefault
  = '<div>Add fragments with HTML & CSS languages to view result.</div>'

const cssDefault = computed(() => {
  const bgColor = props.isGray
    ? '#f6f6f6'
    : isDark.value || props.isDark
      ? '#242424'
      : '#fff'

  return `body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
    background-color: ${bgColor};
  }`
})

const importCss = props.css.match(/^@import.*/gm)

const checkIsDark = () => {
  isDark.value = document.documentElement.classList.contains('dark')
}

onMounted(() => {
  checkIsDark()

  observer = new MutationObserver(() => {
    checkIsDark()
  })

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class']
  })
})

onBeforeUnmount(() => observer.disconnect())

watch(
  () => [props.html, props.css, isDark.value],
  () => {
    srcDoc.value = `
<html>
  <body>${props.html || htmlDefault}<body>
  <style>
    ${importCss ? importCss.join() : ''}${cssDefault.value + props.css}
  <style>
</html>
`
  },
  { immediate: true }
)
</script>

<style lang="scss" scoped>
.code-preview {
  height: 100%;
  width: 100%;
  min-height: 250px;
  display: grid;
  align-items: center;
  overflow: hidden;
  border-radius: 8px;

  // &.is-dark {
  //   background-color: var(--vp-c-black-soft);
  // }
  // &.is-gray {
  //   background-color: var(--vp-c-gray-light-5);
  // }
  .body {
    height: 100%;
  }
}
</style>
