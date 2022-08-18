<template>
  <div class="features">
    <FeaturesItem title="Organization">
      massCode allows you to organize snippets using multi-level folders as
      well as tags. Each snippet has fragments - tabs, which gives even
      greater level of organization.
    </FeaturesItem>
    <FeaturesItem title="Editor">
      massCode uses
      <AppLink href="https://github.com/codemirror/codemirror5">
        Codemirror
      </AppLink>
      as the basis for the editor and .tmLanguage as the grammar for syntax
      highlighting. This tandem opens the door to over
      <AppLink href="https://github.com/github/linguist/blob/master/vendor/README.md">
        600
      </AppLink>
      existing grammars. The application currently supports more than 160
      grammars. In addition to <code>.tmLanguage</code>, the application
      supports <code>.tmTheme</code> for themes. There is also support for
      <AppLink href="https://prettier.io/">
        Prettier
      </AppLink>
      for code formatting.
    </FeaturesItem>
    <FeaturesItem title="Markdown">
      massCode allows you to write in Markdown and provide support to syntax
      highlighting, tables, list and other formatting. Also massCode supports
      <AppLink
        href="https://mermaid-js.github.io/mermaid/#/"
        :external="true"
      >
        Mermaid
      </AppLink>
      - diagramming and charting tool that renders Markdown-inspired text
      definitions to create and modify diagrams dynamically.
    </FeaturesItem>
    <FeaturesItem title="Presentation Mode">
      massCode allows you to make a presentation out of a sequence of
      snippets. It's great for classroom use, team meetings, conferences or
      simply reviewing notes on your own.
    </FeaturesItem>
    <FeaturesItem title="Real-time Render for HTML & CSS">
      You can not only collect snippets, but also see the rendering result for
      HTML and CSS in real time. Test the idea or just view the result.
    </FeaturesItem>
    <FeaturesItem title="Search">
      It is impossible to imagine a productive snippets manager without quick
      access to snippets. Therefore massCode has a fast full-text search with
      highlighting of the search query.
    </FeaturesItem>
    <FeaturesItem title="Autosave">
      massCode automatically saves any changes you make during work, so you
      don't have to worry about losing changes.
    </FeaturesItem>
    <FeaturesItem title="Sync">
      You can use any service that provides cloud synchronization, such as
      iCloud Drive, Google Drive, Dropbox or other similar.
    </FeaturesItem>
    <FeaturesItem title="Database">
      massCode uses a simple JSON to store your data. The database files are
      on your local computer.
    </FeaturesItem>
    <FeaturesItem title="Integrations">
      massCode supports extensions for
      <AppLink href="https://marketplace.visualstudio.com/items?itemName=AntonReshetov.masscode-assistant">
        VS Code
      </AppLink>,
      <AppLink href="https://www.raycast.com/antonreshetov/masscode">
        Raycast
      </AppLink>
      and
      <AppLink href="https://github.com/massCodeIO/assistant-alfred">
        Alfred
      </AppLink>, which gives even more possibilities to use application. With the VS
      Code extension you get practically zen mode, search for the necessary
      snippets and insert them immediately or save the selected code sections
      as a snippet.
    </FeaturesItem>
    <FeaturesItem title="Screnshots">
      Create beautiful snippet images on different backgrounds and in
      different modes.
    </FeaturesItem>
    <FeaturesItem title="Localization">
      massCode is available in English, Español, Português (Brasil), Русский,
      中文 (简体), 中文 (繁體), 中文 (繁體 香港特別行政區) & 日本語 languages.
    </FeaturesItem>
  </div>
</template>

<script setup lang="ts">
import FeaturesItem from './FeaturesItem.vue'
</script>

<style lang="scss" scoped>
.features {
  padding: 24px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
</style>
