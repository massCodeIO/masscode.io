<template>
  <div
    class="default"
    data-theme="dark"
  >
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
          <div class="header__menu">
            <NuxtLink to="/releases">
              Releases
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="content">
        <Nuxt />
      </div>
      <div class="footer">
        <div class="copyright">
          © 2019-{{ year }} Anton Reshetov
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      os: null,
      downloadLink: null,
      year: new Date().getFullYear()
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

.default {
  background-color: var(--color-bg);
}

.wrapper {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-flow: column;
}

.content {
  display: flex;
  flex-grow: 1;
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
    align-items: center;
  }
  &__menu {
    a {
      color: var(--color-text);
      display: inline-block;
      margin-left: var(--spacing-xs);
      &:first-child {
        margin-left: 0;
      }
    }
  }
}

.footer {
  margin-top: var(--spacing-lg);
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  .copyright {
    font-size: 12px;
    font-weight: 500;
    color: var(--color-contrast-medium);
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
</style>
