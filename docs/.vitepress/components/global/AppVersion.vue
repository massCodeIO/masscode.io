<script setup lang="ts">
interface Props {
  text: string
}

defineProps<Props>()
</script>

<template>
  <div class="app-version">
    {{ text }}
  </div>
</template>

<style lang="scss">
.app-version {
  display: inline-flex;
  padding: 0 6px;
  background: var(--vp-c-yellow-light);
  font-size: 12px;
  font-family: var(--font-code);
  border-radius: 3px;
  @media (prefers-color-scheme: dark) {
     background: var(--vp-c-yellow-dark);
  }
}

.dark {
  .app-version {
     background: var(--vp-c-yellow-darker);
  }
}
</style>
