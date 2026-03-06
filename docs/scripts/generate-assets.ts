/* eslint-disable node/prefer-global/process */
import { join } from 'node:path'
import axios from 'axios'
import * as dotenv from 'dotenv'
import { ensureDirSync, writeFileSync, writeJSONSync } from 'fs-extra'
import handlebars from 'handlebars'

interface GitHubRelease {
  tag_name: string
  prerelease: boolean
  draft: boolean
  body: string
}

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

const templateLatestRelease = handlebars.compile(`---
title: Latest Release
---
# v{{ version }}
{{ content }}
<AssetsDownload />`)

// massCode-4.0.4-arm64.dmg

// massCode-4.0.4-x64-portable.exe

// massCode-4.0.4-x64.exe

// massCode-4.0.4.AppImage

// massCode-4.0.4.dmg

async function fetch() {
  try {
    const { data }: { data: GitHubRelease[] } = await api.get(RELEASES_URL)

    const releases = data.filter(i => !i.prerelease && !i.draft)
    const tagName = releases[0].tag_name
    const version = tagName.substring(1)
    const macAsset = `massCode-${version}.dmg`
    const macM1Asset = `massCode-${version}-arm64.dmg`
    const winAsset = `massCode-${version}-x64.exe`
    const winPortableAsset = `massCode-${version}-x64-portable.exe`
    const linuxAsset = `massCode-${version}.AppImage`
    const downloadUrl = `https://github.com/massCodeIO/massCode/releases/download/${tagName}`
    const changelog = releases[0].body

    const assets = {
      version,
      mac: `${downloadUrl}/${macAsset}`,
      macM1: `${downloadUrl}/${macM1Asset}`,
      win: `${downloadUrl}/${winAsset}`,
      winPortable: `${downloadUrl}/${winPortableAsset}`,
      linux: `${downloadUrl}/${linuxAsset}`,
    }

    ensureDirSync(DIST)
    ensureDirSync(DOWNLOAD_PATH)

    const latestReleaseMd = templateLatestRelease({ version, content: changelog })

    writeJSONSync(join(DIST, 'assets.json'), assets)
    writeFileSync(join(DOWNLOAD_PATH, 'latest-release.md'), latestReleaseMd, 'utf-8')
  }
  catch (error) {
    console.error(error)
  }
}

fetch()
