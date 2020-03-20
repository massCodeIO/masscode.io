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

      const issueRe = /(#\d+)/g
      const pullRe = /(\(#\d+\))/g
      const userRe = /(@\w+)/g
      let link
      let replacer
      let model = this.model

      if (model.match(issueRe)) {
        link = model.match(issueRe)[0].substring(1)
        replacer = `[$1](https://github.com/antonreshetov/massCode/issues/${link})`
        model = model.replace(issueRe, replacer)
      }

      if (model.match(pullRe)) {
        link = model.match(pullRe)[0].substring(1)
        replacer = `[$1](https://github.com/antonreshetov/massCode/pull/${link}`
        model = model.replace(pullRe, replacer)
      }

      if (model.match(userRe)) {
        link = model.match(userRe)[0].substring(1)
        replacer = `[$1](https://github.com/${link})`
        model = model.replace(userRe, replacer)
      }

      this.result = this.md.render(model)
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
