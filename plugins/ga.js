import Vue from 'vue'
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: 'UA-56182454-12',
  debug: {
    enabled: false,
    sendHitTask: process.env.NODE_ENV === 'production'
  }
})
