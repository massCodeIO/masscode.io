<template>
  <div class="app-share-buttons">
    <p>
      <span
        class="share"
        @click="onTw"
      >Twitter</span>
      <span
        class="share"
        @click="onFb"
      >Facebook</span>
      <span
        class="share"
        @click="onTelegram"
      >Telegram</span>
    </p>
  </div>
</template>

<script>
import qs from 'qs'

export default {
  name: 'AppShare',

  data () {
    return {
      url: 'https://masscode.io',
      text: 'A free and open source code snippets manager for developers.',
      hashtags: 'vue,electron,productivity,opnesource'
    }
  },

  methods: {
    createNewWindow (url) {
      window.open(url, 'Share', 'height=600,width=600')
    },
    createUrl (social, query) {
      let url
      switch (social) {
        case 'fb': url = 'https://www.facebook.com/sharer/sharer.php'
          break
        case 'vk': url = 'https://vk.com/share.php'
          break
        case 'tw': url = 'https://twitter.com/intent/tweet'
          break
        case 'telegram': url = 'https://t.me/share/url'
          break
        case 'whatsapp': url = 'https://api.whatsapp.com/send'
          break
      }
      this.$ga.event({
        eventCategory: 'App',
        eventAction: 'Share',
        eventLabel: social
      })
      const q = qs.stringify(query)
      return `${url}?${q}`
    },
    onFb () {
      this.createNewWindow(this.createUrl('fb', {
        u: this.url
      }))
    },
    onVk () {
      this.createNewWindow(this.createUrl('vk', {
        url: this.url,
        text: this.text,
        hashtags: this.hashtags
      }))
    },
    onTw () {
      this.createNewWindow(this.createUrl('tw', {
        url: this.url,
        text: this.text,
        hashtags: this.hashtags
      }))
    },
    onTelegram () {
      this.createNewWindow(this.createUrl('telegram', {
        url: this.url,
        text: this.text,
        description: this.description
      }))
    },
    onWhatsapp () {
      this.createNewWindow(this.createUrl('whatsapp', {
        text: `${this.text}, ${this.url}`,
        description: this.description
      }))
    }
  }
}
</script>

<style lang="scss" scoped>
.app-share-buttons {
    p {
      font-size: 0;
    }
    span {
      font-size: var(--text-md);
      &::after {
        content: '•';
        padding: 0 5px;
        color: var(--color-text);
      }
      &:last-child {
        &::after {
          content: ''
        }
      }
    }
  }
</style>
