<template>
  <div
    class="app-markdown"
    v-html="result"
  />
</template>

<script>
import MarkdownIt from 'markdown-it'
import mila from 'markdown-it-link-attributes'

export default {
  name: 'AppMarkdown',

  props: {
    model: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      md: null,
      result: null
    }
  },

  mounted () {
    this.init()
  },

  methods: {
    init () {
      this.md = new MarkdownIt()
      this.md.use(mila, {
        attrs: {
          target: '_blank',
          rel: 'noopener'
        }
      })

      const re = /(#\d+)/g
      let issue

      if (this.model.match(re)) {
        issue = this.model.match(re)[0].substring(1)
      }

      const replacer = `[$1](https://github.com/antonreshetov/massCode/issues/${issue})`
      const md = this.model.replace(re, replacer)

      this.result = this.md.render(md)
    }
  }
}
</script>

<style lang="scss">
.app-markdown {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: var(--spacing-sm) 0;
    &:first-child {
      margin-top: 0;
    }
  }
  li {
    line-height: 1.5em;
  }
}
</style>
