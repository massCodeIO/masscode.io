<script>
export default {
  mounted () {
    this.load()
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) {
        this.$el.innerHTML = ''
        this.load()
      }
    })
  },

  methods: {
    load () {
      const id =
        process.env.NODE_ENV === 'development'
          ? 'CVAIKKQM&placement=carbonadsnet'
          : 'CE7DEKQM&placement=masscodeio'
      const s = document.createElement('script')
      s.id = '_carbonads_js'
      s.src = `//cdn.carbonads.com/carbon.js?serve=${id}`
      this.$el.appendChild(s)
    }
  },

  render (h) {
    return h('div', { class: 'carbon' })
  }
}
</script>

<style lang="scss">
.carbon {
  position: absolute;
  display: flex;
  right: 0;
  bottom: 0;
  margin: 0 0 20px 20px;
  max-width: 130px;
  border-radius: 4px;
  background-color: hsl(0, 0%, 98%);
  box-shadow: 0 0 1px hsla(0, 0%, 0%, 0.15);
  font-size: 11px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', Helvetica, Arial,
    sans-serif;
}

.carbon a {
  color: #111;
  text-decoration: none;
}

.carbon a:hover {
  color: #111;
}

.carbon-img {
  display: block;
  margin-bottom: 8px;
  max-width: 130px;
  line-height: 1;
}

.carbon-img img {
  display: block;
  margin: 0 auto;
  max-width: 130px;
  width: 130px;
  height: auto;
}

.carbon-text {
  display: block;
  padding: 0 10px 8px;
  text-align: left;
  line-height: 1.35;
}

.carbon-poweredby {
  display: block;
  padding: 10px;
  background: repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 5px,
      hsla(0, 0%, 0%, 0.025) 5px,
      hsla(0, 0%, 0%, 0.025) 10px
    )
    hsla(203, 11%, 95%, 0.4);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 600;
  font-size: 8px;
  line-height: 0;
}

@media only screen and (min-width: 320px) and (max-width: 759px) {
  .carbon {
    position: relative;
    float: none;
    margin: 20px 0;
    max-width: 330px;
  }

  .carbon-wrap {
    display: flex;
    flex-direction: row;
  }

  .carbon-img {
    margin: 0;
  }

  .carbon-text {
    padding: 10px 10px 0 10px;
    font-size: 12px;
  }

  .carbon-poweredby {
    position: absolute;
    right: 0;
    bottom: 0;
    border-radius: 0;
    border-top-left-radius: 3px;
    text-align: center;
  }
}
</style>
