import { gitHubApi } from '@/services/github'

export const state = () => ({
  github: 'https://github.com/antonreshetov/massCode',
  version: '',
  downloadLinks: {
    mac: '',
    win: '',
    linux: ''
  },
  downloads: null,
  stars: null
})

export const mutations = {
  SET_DOWNLOAD_LINKS (state, links) {
    state.downloadLinks = links
  },
  SET_VERSION (state, version) {
    state.version = version
  },
  SET_DOWNLOADS (state, downloads) {
    state.downloads = downloads
  },
  SET_STARS (state, stars) {
    state.stars = stars
  }
}

export const actions = {
  async getGithubTags ({ commit }) {
    const res = await gitHubApi.get('/repos/antonreshetov/massCode/tags')

    if (res.data && res.data[0]) {
      const tagName = res.data[0].name
      const tagNumber = res.data[0].name.substring(1)

      const macAsset = `massCode-${tagNumber}-mac.zip`
      const winAsset = `massCode.Setup.${tagNumber}.exe`
      const linuxAsset = `massCode-${tagNumber}.AppImage`
      const downloadUrl = `https://github.com/antonreshetov/massCode/releases/download/${tagName}`

      const links = {
        mac: `${downloadUrl}/${macAsset}`,
        win: `${downloadUrl}/${winAsset}`,
        linux: `${downloadUrl}/${linuxAsset}`
      }

      commit('SET_DOWNLOAD_LINKS', links)
      commit('SET_VERSION', tagName)
    }
  },
  async getGitHubStats ({ commit }) {
    try {
      const { data: releases } = await gitHubApi.get('/repos/antonreshetov/massCode/releases')
      const { data: { stargazers_count: stars } } = await gitHubApi.get('/repos/antonreshetov/massCode')

      const downloads = releases.reduce((total, release) => {
        total += release.assets.reduce((count, asset) => {
          count += asset.download_count
          return count
        }, 0)
        return total
      }, 0)
      commit('SET_DOWNLOADS', downloads)
      commit('SET_STARS', stars)
    } catch (err) {}
  },
  async nuxtServerInit ({ dispatch }) {
    await dispatch('getGithubTags')
  }
}

export const getters = {}
