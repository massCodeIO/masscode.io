<template>
  <div class="page donate">
    <div class="donate__inner">
      <h1>Support massCode development</h1>
      <br>
      <div class="donate__desc">
        <p>
          <strong>massCode</strong> is open source project and completely free to use.
        </p>
        <p>However, the amount of effort needed to maintain and develop new features for the project is not sustainable without proper financial backing. You can support massCode development via the following methods:</p>
        <br>
        <div class="donate__actions">
          <div class="donate__button">
            <a
              href="https://opencollective.com/masscode"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AppButton>Become a backer or sponsor on Open Collective</AppButton>
            </a>
          </div>
          <div class="donate__button">
            <a
              href="https://www.patreon.com/antonreshetov"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AppButton>Become a backer or sponsor on Patreon</AppButton>
            </a>
          </div>
          <div class="donate__button">
            <a
              href="https://paypal.me/antonreshetov"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AppButton>On-time donation via PayPal</AppButton>
            </a>
          </div>
        </div>
        <br>
        <p>If you just share massCode with friends or social networks it will be also a huge and valuable contribution!</p>
        <div class="paragraph-divide" />
        <p>Let’s spread the word.</p>
        <AppShare class="donate-share" />
      </div>
      <CarbonAd />
    </div>
  </div>
</template>

<script>
import CarbonAd from '@/components/CarbonAd.vue'
import AppButton from '@/components/AppButton.vue'
import AppShare from '@/components/AppShare.vue'

export default {
  name: 'Donate',

  components: {
    AppButton,
    AppShare,
    CarbonAd
  },

  head () {
    return {
      title: 'Support massCode development',
      titleTemplate: '%s - massCode',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Support massCode development'
        }
      ]
    }
  },

  data () {
    return {}
  }
}
</script>

<style lang="scss">
.donate {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin: 0 auto;
  &__desc {
    max-width: 600px;
    margin: 0 auto;
  }
  &__actions {
    // display: flex;
    justify-content: center;
    @media (max-width: 667px) {
      flex-flow: column;
    }
  }
  &__button {
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &-share {
    span.share {
      font-size: var(--text-lg);
    }
  }
  @media (max-width: 667px) {
    &__button {
      // margin-bottom: 14px;
    }
  }
}
</style>
