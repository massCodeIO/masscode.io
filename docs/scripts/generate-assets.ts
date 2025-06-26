/* eslint-disable node/prefer-global/process */
import { join } from 'node:path'
import axios from 'axios'
import * as dotenv from 'dotenv'
import { ensureDirSync, writeJSONSync } from 'fs-extra'

dotenv.config({ path: join(__dirname, '../.env') })

const BASE_URL = 'https://api.github.com'
const RELEASES_URL = '/repos/massCodeIO/massCode/releases'
const DIST = join(__dirname, '../.vitepress/_data')
const DOWNLOAD_PATH = join(__dirname, '../download/')

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `token ${process.env.VITE_GIT_TOKEN}`,
  },
})

async function fetch() {
  try {
    const { data } = await api.get(RELEASES_URL)

    const releases = data.filter(i => !i.prerelease)
    const tagName = releases[0].tag_name
    const version = tagName.substring(1)
    const macAsset = `massCode-${version}.dmg`
    const macM1Asset = `massCode-${version}-arm64.dmg`
    const winAsset = `massCode.Setup.${version}.exe`
    const linuxAsset = `massCode_${version}_amd64.snap`
    const downloadUrl = `https://github.com/massCodeIO/massCode/releases/download/${tagName}`

    const assets = {
      version,
      mac: `${downloadUrl}/${macAsset}`,
      macM1: `${downloadUrl}/${macM1Asset}`,
      win: `${downloadUrl}/${winAsset}`,
      linux: `${downloadUrl}/${linuxAsset}`,
    }

    ensureDirSync(DIST)
    ensureDirSync(DOWNLOAD_PATH)

    writeJSONSync(join(DIST, 'assets.json'), assets)
  }
  catch (error) {
    console.error(error)
  }
}

fetch()
