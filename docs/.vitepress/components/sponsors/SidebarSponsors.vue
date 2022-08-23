<template>
  <div class="sidebar-sponsors">
    <SponsorsGroup
      tier="special"
      placement="sidebar"
    />
  </div>
</template>

<script setup lang="ts">
import SponsorsGroup from './SponsorsGroup.vue'
</script>

<style lang="scss" scoped>
.sidebar-sponsors {
  &:not(:first-child) {
    margin-top: 32px;
  }
}
</style>
