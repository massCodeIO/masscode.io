<template>
  <div
    ref="sponsorsRef"
    class="sponsors"
  >
    <template v-if="isShow">
      <h2>{{ title }} sponsors</h2>
      <div

        class="body"
      >
        <a
          v-for="{ img, url, name } of data[tier]"
          :key="name"
          :href="url"
          target="_blank"
          class="sponsors-item"
          rel="noopener sponsored"
        >
          <img
            :src="img"
            :alt="name"
          >
        </a>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import sponsorsData from './sponsors.json'

interface Sponsor {
  url: string
  img: string
  name: string
  description?: string
}

interface SponsorData {
  special: Sponsor[]
}

interface Props {
  title: string
  tier: keyof SponsorData
}

defineProps<Props>()

const data = ref<SponsorData>(sponsorsData)
const isShow = ref(false)

const sponsorsRef = ref<HTMLElement>()

const showSponsors = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        isShow.value = true
        observer.disconnect()
      }
    },
    { rootMargin: '0px 0px 300px 0px' }
  )
  observer.observe(sponsorsRef.value)

  onUnmounted(() => observer.disconnect())
}

onMounted(async () => {
  showSponsors()
})
</script>

<style lang="scss" scoped>
.sponsors {
  margin-top: 48px;
  .body {
    margin-top: 24px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;;
  }
  h2 {
    font-size: 20px;
    font-weight: 600;
  }
}
.sponsors-item {
  background-color: var(--vp-c-bg-soft);
  padding: 24px;
  border-radius: 4px;
}

.dark {
  .sponsors-item {
    img {
      filter: grayscale(1) invert(1);
    }
    &:hover {
      img {
        filter:  none;
      }
    }
  }
}
</style>
