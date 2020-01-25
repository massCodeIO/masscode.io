import { gitHubApi } from '@/services/github'
import { format } from 'date-fns'

export const state = () => ({
  github: 'https://github.com/antonreshetov/massCode',
  version: '',
  downloadLinks: {
    mac: '',
    win: '',
    linux: ''
  },
  downloads: null,
  stars: null,
  releases: null
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
  },
  SET_RELEASES (state, releases) {
    state.releases = releases
  }
}

export const actions = {
  async getGithubTags ({ commit }) {
    const { data: releases } = await gitHubApi.get(
      '/repos/antonreshetov/massCode/releases'
    )

    if (releases && releases[0]) {
      const tagName = releases[0].tag_name
      const tagNumber = tagName.substring(1)

      const macAsset = `massCode-${tagNumber}.dmg`
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

      const releasesV1 = releases
        .filter(i => i.tag_name.includes('v1.'))
        .map(i => {
          return {
            name: i.name,
            tagName: i.tag_name,
            date: i.published_at,
            dateView: format(new Date(i.published_at), 'MMMM dd, yyyy'),
            url: i.html_url,
            body: i.body
          }
        })
      commit('SET_RELEASES', releasesV1)
    }
  },
  async getGitHubStats ({ commit }) {
    try {
      const { data: releases } = await gitHubApi.get(
        '/repos/antonreshetov/massCode/releases'
      )
      const {
        data: { stargazers_count: stars }
      } = await gitHubApi.get('/repos/antonreshetov/massCode')
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
