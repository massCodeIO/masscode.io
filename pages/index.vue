<template>
  <div class="page home">
    <div class="body">
      <section class="section-1">
        <div class="overview">
          <h1>
            Boost
            <br>your productivity
          </h1>
          <p>
            A free and open source code snippets manager for developers.
            <br>It helps you create and organize your own personal snippets collection and have quick access to it.
          </p>
          <div class="buttons">
            <div class="download">
              <a
                :href="downloadLink"
                download
              >
                <AppButton>Download for {{ os }}</AppButton>
              </a>
            </div>
            <NuxtLink to="/donate">
              <AppButton plain>
                Support massCode
              </AppButton>
            </NuxtLink>
          </div>
          <div class="other-platforms">
            <NuxtLink to="/download">
              Other platforms
            </NuxtLink>
          </div>
          <div class="desc">
            <a
              href="https://github.com/antonreshetov/massCode"
              target="_blank"
              rel="noopener noreferrer"
            >View on GitHub</a>
            |
            Current {{ $store.state.version }}
          </div>
          <div
            class="desc"
          >
            Downloads: {{ $store.state.downloads }} | Stars: {{ $store.state.stars }}
          </div>
        </div>
        <div class="ph">
          <a
            href="https://www.producthunt.com/posts/masscode?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-code-snippets-manager-for-developers"
            target="_blank"
          ><img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=181520&theme=dark"
            alt="Code snippets manager for developers - A free and open source code snippets manager for developers. | Product Hunt Embed"
            style="height: 40px;"
            height="40px"
          ></a>
          <div class="preview">
            <img
              src="/preview.png"
              alt="preview"
            >
          </div>
        </div>
      </section>
      <section class="section-2">
        <h2 class="section-title">
          Features
        </h2>
        <Features />
      </section>
      <section class="section-3">
        <div class="paragraph-divide" />
        <p>If you like the app, help spread it in the public</p>
        <AppShare class="main" />
        <NuxtLink to="/donate">
          <AppButton
            class="main-donate"
            plain
          >
            Support massCode
          </AppButton>
        </NuxtLink>
      </section>
    </div>
  </div>
</template>

<script>
import Features from '@/components/Features.vue'
import AppButton from '@/components/AppButton.vue'
import AppShare from '@/components/AppShare.vue'

export default {
  components: {
    Features,
    AppButton,
    AppShare
  },

  data () {
    return {
      os: null,
      downloadLink: null
    }
  },

  async created () {
    this.$ga.page('/')
    await this.$store.dispatch('getGitHubStats')
  },

  async mounted () {
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
section.section-1 {
  margin-top: 80px;
  grid-gap: var(--spacing-lg);
  max-width: 900px;
  margin: 0 auto;
  margin-top: 100px;
  @media (max-width: 768px) {
    margin-top: var(--spacing-md);
  }
  .overview {
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
    h1 {
      margin-bottom: var(--spacing-md);
      line-height: 1;
    }
    .buttons {
      margin-top: var(--spacing-sm);
      margin-bottom: var(--spacing-sm);
      display: flex;
      justify-content: center;
      @media (max-width: 768px) {
        flex-flow: column;
        align-items: center;
        .app-button {
          margin-bottom: var(--spacing-sm);
        }
      }
      .download {
        display: inline-block;
        margin-right: var(--spacing-xs);
        @media (max-width: 768px) {
          margin-right: 0;
        }
      }
      .other-platforms {
        margin-top: var(--spacing-sm);
        font-size: var(--text-sm);
      }
    }
  }
  .other-platforms {
    margin: var(--spacing-sm) 0;
    font-size: var(--text-sm);
  }
  .preview {
    @media (max-width: 768px) {
      margin-top: var(--spacing-md);
    }
  }
}
section.section-2 {
}

section.section-3 {
  p {
    font-size: var(--text-md);
  }
  text-align: center;
  .main-donate {
    margin: var(--spacing-xs);
  }
}

.meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 70%;
  margin: 0 auto;
  font-size: 12px;
  font-weight: 500;
  color: var(--color-contrast-medium);
  @media (max-width: 667px) {
    flex-flow: column;
    &__item {
      margin-bottom: 14px;
    }
  }
}

.warning {
  font-weight: 500;
  .desc {
    margin-top: 20px;
  }
}

.shields {
  img {
    width: unset;
  }
}
.ph {
  margin-top: var(--spacing-xs);
  text-align: center;
  .desc {
    margin-bottom: var(--spacing-xs);
  }
}
</style>
