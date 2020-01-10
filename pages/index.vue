<template>
  <div class="page home">
    <div class="body">
      <div class="hero">
        <h1>Boost your productivity</h1>
        <h3>A free and open source code snippets manager for developers.</h3>
        <img
          src="/preview.png"
          alt=""
        >
        <div class="meta">
          <a :href="$store.state.github">View on GitHub</a>
          <div class="version">
            Current {{ $store.state.version }} (unstable)
          </div>
        </div>
      </div>
      <div class="warning">
        <p class="desc">
          Exclusively for introductory purposes. Please do not use as a primary
          tool until the stable build.
        </p>
      </div>
    </div>
    <CarbonAd />
  </div>
</template>

<script>
import CarbonAd from '@/components/CarbonAd.vue'

export default {
  components: {
    CarbonAd
  },

  data () {
    return {
      os: null,
      downloadLink: null
    }
  },

  created () {
    this.$ga.page('/')
  }
}
</script>

<style lang="scss">
.body {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 80px);
  @media (max-width: 768px) {
    height: 100%;
    margin-top: 30px;
  }
  .hero {
    img {
      margin-top: 30px;
      max-width: 700px;
    }
  }
}

.meta {
  display: flex;
  justify-content: space-between;
  max-width: 70%;
  margin: 0 auto;
  font-size: 12px;
  font-weight: 500;
  color: var(--color-contrast-medium);
}

.warning {
  font-weight: 500;
  margin-bottom: 50px;
  .desc {
    margin-top: 20px;
  }
}
</style>
