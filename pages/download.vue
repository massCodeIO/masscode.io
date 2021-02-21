<template>
  <div class="page all-platforms">
    <div class="all-platforms__inner">
      <h1>Select your platform</h1>
      <h3>Current {{ $store.state.version }}</h3>
      <div class="platforms">
        <div class="platform">
          <a
            :href="$store.state.downloadStableLinks.mac"
            download
          >
            <AppButton>Download for Mac</AppButton>
          </a>
          <div class="desc">
            macOS 10.13+
          </div>
        </div>
        <div class="platform">
          <a
            :href="$store.state.downloadStableLinks.win"
            download
          >
            <AppButton>Download for Windows</AppButton>
          </a>
          <div class="desc">
            Windows 7, 8, 10
          </div>
        </div>
        <div class="platform">
          <a
            :href="$store.state.downloadStableLinks.linux"
            download
          >
            <AppButton>Download for Linux</AppButton>
          </a>
          <div class="desc">
            Ubuntu
          </div>
        </div>
      </div>
      <br><br>
      <h3>Beta {{ $store.state.versionBeta }}</h3>
      <div class="platforms">
        <div class="platform">
          <a
            :href="$store.state.downloadBetaLinks.mac"
            download
          >
            <AppButton plain>Download for Mac</AppButton>
          </a>
          <div class="desc">
            macOS 10.13+
          </div>
        </div>
        <div class="platform">
          <a
            :href="$store.state.downloadBetaLinks.win"
            download
          >
            <AppButton plain>Download for Windows</AppButton>
          </a>
          <div class="desc">
            Windows 7, 8, 10
          </div>
        </div>
        <div class="platform">
          <a
            :href="$store.state.downloadBetaLinks.linux"
            download
          >
            <AppButton plain>Download for Linux</AppButton>
          </a>
          <div class="desc">
            Ubuntu
          </div>
        </div>
      </div>
      <CarbonAd />
    </div>
  </div>
</template>

<script>
import CarbonAd from '@/components/CarbonAd.vue'
import AppButton from '@/components/AppButton.vue'

export default {
  name: 'Download',

  components: {
    CarbonAd,
    AppButton
  },

  head () {
    return {
      title: 'Download for Mac, Window and Linux',
      titleTemplate: '%s - massCode',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Download massCode for Mac, Window and Linux'
        }
      ]
    }
  },

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
  align-items: center;
  text-align: center;
  justify-content: center;
  margin: 0 auto;
  @media (max-width: 768px) {
    align-items: flex-start;
  }
}
.platforms {
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 667px) {
    display: flex;
    flex-flow: column;
  }
  .platform {
    margin: 0 24px;
    @media (max-width: 667px) {
      margin-bottom: 14px;
    }
    .desc {
      margin-top: 10px;
    }
  }
}
</style>
