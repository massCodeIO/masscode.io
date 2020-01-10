<template>
  <div class="wrapper">
    <div class="header">
      <div class="header__inner">
        <NuxtLink to="/">
          <div class="logo">
            <img
              src="/logo.png"
              alt="logo"
            >
            <span>massCode</span>
          </div>
        </NuxtLink>
        <div class="download">
          <a
            :href="downloadLink"
            download
          >
            <button
              class="button"
              @click="onDownload"
            >
              Download for {{ os }}
            </button>
          </a>
          <div class="desc">
            <NuxtLink to="/all-platforms">
              Other platforms
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  data () {
    return {
      os: null,
      downloadLink: null
    }
  },

  created () {
    this.$ga.page(this.$route)
  },

  mounted () {
    this.getPlatform()
  },

  methods: {
    onDownload () {
      this.$ga.event({
        eventCategory: 'Download',
        eventAction: 'Click',
        eventLabel: 'macOs'
      })
    },
    getPlatform () {
      if (navigator.appVersion.includes('Mac')) {
        this.os = 'Mac'
        this.downloadLink = this.$store.state.downloadLinks.mac
      }
      if (navigator.appVersion.includes('Win')) {
        this.os = 'Windows'
        this.downloadLink = this.$store.state.downloadLinks.win
      }
      if (navigator.appVersion.includes('X11')) {
        this.os = 'Linux'
        this.downloadLink = this.$store.state.downloadLinks.linux
      }
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/main';
.wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

.header {
  height: 80px;
  display: flex;
  width: 100%;
  &__inner {
    display: flex;
    margin-top: 20px;
    width: 100%;
    justify-content: space-between;
  }
}

.logo {
  display: flex;
  align-items: center;
  color: var(--color-text);
  img {
    width: 40px;
    margin-right: 10px;
  }
  span {
    font-size: 16px;
    font-weight: 600;
  }
}

.download {
  .desc {
    margin-top: 4px;
    font-weight: 500;
    text-align: center;
  }
}
</style>
