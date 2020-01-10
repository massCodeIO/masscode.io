import { gitHubApi } from '@/services/github'

export const state = () => ({
  github: 'https://github.com/antonreshetov/massCode',
  downloadLinks: {
    mac: '',
    win: '',
    linux: ''
  }
})

export const mutations = {
  SET_DOWNLOAD_LINKS (state, links) {
    state.downloadLinks = links
  }
}

export const actions = {
  async nuxtServerInit ({ commit }) {
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
    }
  }
}

export const getters = {}
