import axios from 'axios'

export const gitHubApi = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `token ${process.env.NUXT_ENV_GIT_TOKEN}`
  }
})
