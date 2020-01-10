<template>
  <div class="page all-platforms">
    <div class="all-platforms__inner">
      <h1>Select your platform</h1>
      <div class="platforms">
        <div class="platform">
          <a
            :href="$store.state.downloadLinks.mac"
            download
          >
            <button class="button button--filled">Download for Mac</button>
          </a>
          <div class="desc">
            macOS 10.13+
          </div>
        </div>
        <div class="platform">
          <a
            :href="$store.state.downloadLinks.win"
            download
          >
            <button class="button button--filled">Download for Windows</button>
          </a>
          <div class="desc">
            Windows 7, 8, 10
          </div>
        </div>
        <div class="platform">
          <a
            :href="$store.state.downloadLinks.linux"
            download
          >
            <button class="button button--filled">Download for Linux</button>
          </a>
          <div class="desc">
            Ubuntu
          </div>
        </div>
      </div>
      <div class="warning">
        <div class="desc">
          Exclusively for introductory purposes. Please do not use as a primary
          tool until the stable build.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AllPlatformsPage',

  data () {
    return {}
  },

  created () {
    this.$ga.page(this.$route)
  }
}
</script>

<style lang="scss" scoped>
.all-platforms {
  display: flex;
  height: calc(100vh - 80px);
  align-items: center;

}
.platforms {
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  .platform {
    margin: 0 24px;
    .desc {
      margin-top: 10px;
    }
  }
}
</style>
