<script setup lang="ts">
import type { SnippetUICollection } from '../../../types'
import snippetsUI from '../../_data/ui.json'
import AppLink from './AppLink.vue'

interface Props {
  category: string
}

const props = defineProps<Props>()

const snippets = (snippetsUI as SnippetUICollection[])
  .find(i => i.category === props.category)
  .snippets
  .sort((a, b) => (a.dateCreated < b.dateCreated ? 1 : -1))
</script>

<template>
  <div class="collection">
    <div
      v-for="i in snippets"
      :key="i.slug"
      class="item"
      :class="{
        'is-dark': i.isDark,
        'is-gray': i.isGray,
      }"
    >
      <div class="header">
        {{ i.name }}
      </div>
      <CodePreview
        :html="i.html"
        :css="i.css"
        :is-dark="i.isDark"
        :is-gray="i.isGray"
      />
      <div class="footer">
        <div class="author">
          <AppLink :href="`https://github.com/${i.author}`">
            @{{ i.author }}
          </AppLink>
        </div>
        <div class="go-to">
          <a :href="`${i.slug}/`">View code</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.collection {
  margin-top: 12px;
  font-size: 14px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  position: relative;

  .item {
    border: 1px solid var(--vp-c-divider-light);
    border-radius: 8px;
    position: relative;
    min-height: 250px;
    &.is-dark {
      .header {
        color: rgba(255, 255, 255, 0.87);
      }
    }
  }

  .header {
    position: absolute;
    padding: 0 12px;
    top: 6px;
  }

  .footer {
    padding: 0 12px;
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    bottom: 6px;
  }
}
</style>
