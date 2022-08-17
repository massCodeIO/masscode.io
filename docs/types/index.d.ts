export interface SnippetUI {
  slug: string
  author: string
  name: string
  html: string
  css: string,
  dateCreated?: number
  isDark?: boolean
  isGray?: boolean
}

export interface SnippetUICollection {
  category: string
  snippets: SnippetUI[]
}