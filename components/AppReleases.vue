<template>
  <div class="app-releases">
    <div
      v-for="(i, index) in data"
      :key="index"
      class="app-releases__item"
    >
      <div class="app-releases__item-name">
        <a
          :href="i.url"
          target="_blank"
          rel="noopener noreferrer"
        > {{ i.tagName }}</a>
        <div class="app-releases__item-date">
          <div class="desc">
            {{ i.dateView }}
          </div>
        </div>
        <div class="dot" />
      </div>
      <div class="app-releases__item-body">
        <AppMarkdown
          :model="i.body"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AppMarkdown from '@/components/AppMarkdown.vue'

export default {
  name: 'AppReleases',

  components: {
    AppMarkdown
  },

  props: {
    data: {
      type: Array,
      default: () => []
    }
  },

  data () {
    return {}
  }
}
</script>

<style lang="scss">
.app-releases {
  color: var(--color-text);
  display: flex;
  flex-flow: column;
  text-align: left;
  &__item {
    display: flex;
    flex-shrink: 0;
    margin-top: 40px;
    &:not(:last-child) {
      .app-releases__item-name {
        &::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          bottom: -44px;
          width: 2px;
          background-color: var(--color-border);
        }
      }
    }
    .app-releases__item-name {
      width: 150px;
      position: relative;
      margin-right: var(--spacing-lg);
      font-size: 15px;
      font-weight: 600;
      flex-shrink: 0;
      @media (max-width: 768px) {
        font-size: var(--text-xs);
        flex-shrink: 0;
        width: 120px;
      }
    }
    .app-releases__item-date {
       @media (max-width: 768px) {
        font-size: var(--text-xs);
      }
    }
  }
  .dot {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: var(--color-bg);
    border: 2px solid var(--color-border);
    right: -9px;
    top: 0;
    border-radius: 100%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    z-index: 10;
    &::after {
      position: absolute;
      content: '';
      width: 8px;
      height: 8px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: var(--color-primary);
      // background-color: #fff;
      border-radius: 100%;
      z-index: 11;
    }
    // @media (max-width: $mobile) {
    //   left: 0;
    //   top: 20px;
    // }
  }
}
</style>
