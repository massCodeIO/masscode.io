<template>
  <div class="releases page">
    <div class="releases__inner">
      <h1>Releases</h1>
      <AppReleases :data="$store.state.releases" />
    </div>
  </div>
</template>

<script>
import AppReleases from '@/components/AppReleases.vue'

export default {
  name: 'Releases',

  components: {
    AppReleases
  },

  head () {
    return {
      title: 'Releases',
      titleTemplate: '%s - massCode',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Releases changelog'
        }
      ]
    }
  },

  data () {
    return {
      releases: [
        {
          title: 'v1.0.0-alpha',
          date: new Date('2020-01-19T00:00:00'),
          content: []
        },
        {
          title: 'v1.0.0-alpha.1',
          date: new Date('2020-01-22T08:00:00'),
          content: []
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.releases {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 900px;
  margin: 0 auto;
  h1 {
    text-align: center;
    margin-top: var(--spacing-lg);
  }
  code {
    background-color: var(--color-contrast-medium);
    color: var(--color-bg);
    font-weight: 600;
    padding: 0 4px;
    border-radius: 3px;
  }
}
</style>
