<template>
  <div class="sponsors-item">
    <img
      :src="src"
      alt=""
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

type Brand = 'digitalocean'

interface Props {
  brand: Brand
}

const props = defineProps<Props>()

const src = 'https://opensource.nyc3.cdn.digitaloceanspaces.com/attribution/assets/PoweredByDO/DO_Powered_by_Badge_blue.svg'
</script>

<style lang="scss" scoped>
.sponsors-item {
  background-color: var(--vp-c-bg-soft);
  padding: 24px;
  border-radius: 4px;
}

.dark {
  .sponsors-item {
    img {
      filter: grayscale(1) invert(1);
      &:hover {
        filter:  none;
      }
    }
  }
}
</style>
