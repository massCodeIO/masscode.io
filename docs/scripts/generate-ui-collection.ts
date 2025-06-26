import type { SnippetUI, SnippetUICollection } from '../types'
import { basename, dirname, join } from 'node:path'
import chokidar from 'chokidar'
import fs from 'fs-extra'
import matter from 'gray-matter'

const UI_SNIPPETS_DIR = join(__dirname, '../snippets/ui')
const DIST = join(__dirname, '../.vitepress/_data')

function generate(path: string) {
  fs.ensureDirSync(DIST)
  const collection: SnippetUICollection[] = []

  const dirs = fs
    .readdirSync(path)
    .filter(i => fs.lstatSync(join(path, i)).isDirectory())

  dirs.forEach((i) => {
    collection.push({
      category: i,
      snippets: [],
    })
  })

  const walker = (path: string) => {
    const files = fs.readdirSync(path)

    files.forEach((i) => {
      const innerPath = join(path, i)
      const parent = basename(dirname(innerPath))

      if (fs.lstatSync(innerPath).isDirectory()) {
        const innerFiles = fs.readdirSync(innerPath)

        const snippet: SnippetUI = {
          slug: '',
          author: '',
          name: '',
          css: '',
          html: '',
        }

        innerFiles.forEach((f) => {
          const pathToFile = join(innerPath, f)

          snippet.slug = i

          if (f.endsWith('md')) {
            const content = matter(fs.readFileSync(pathToFile, 'utf-8'))
            snippet.name = content.data.title
            snippet.author = content.data.author
            snippet.isDark = content.data.isDark
            snippet.isGray = content.data.isGray
          }

          if (f.endsWith('html'))
            snippet.html = fs.readFileSync(pathToFile, 'utf-8')

          if (f.endsWith('css'))
            snippet.css = fs.readFileSync(pathToFile, 'utf-8')

          snippet.dateCreated = fs.statSync(pathToFile).birthtime.valueOf()
        })

        const snippets = collection.find(i => i.category === parent)?.snippets
        snippets?.push(snippet)

        walker(innerPath)
      }
    })
  }

  walker(path)

  fs.writeJSONSync(join(DIST, 'ui.json'), collection)
}

generate(UI_SNIPPETS_DIR)

chokidar.watch(UI_SNIPPETS_DIR).on('change', () => {
  generate(UI_SNIPPETS_DIR)
})
