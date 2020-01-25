<template>
  <div class="features">
    <div class="feature">
      <div class="feature__title">
        <h3>Organization</h3>
      </div>
      <div class="feature__body">
        <p>massCode allows you to organize snippets using multi-level folders as well as tags. Each snippet has fragments - tabs, which gives even greater level of organization.</p>
      </div>
    </div>
    <div class="feature">
      <div class="feature__title">
        <h3>Editor</h3>
      </div>
      <div class="feature__body">
        <p>
          A snippet manager must not only provide organization of snippets but also have a good code editor.
          That's why under the hood of massCode there's
          <a
            href="https://microsoft.github.io/monaco-editor"
            target="_blank"
            rel="noopener noreferrer"
          >Monaco</a>. Monaco is a modern code editor from Microsoft which is used in one of the most popular editor
          <a
            href="https://code.visualstudio.com"
            target="_blank"
            rel="noopener noreferrer"
          >VS Code</a>.
          The editor provides IntelliSense, validation for TypeScript, JavaScript, CSS, LESS, SCSS, JSON, HTML. We also added a super productive
          <a
            href="https://emmet.io"
            target="_blank"
            rel="noopener noreferrer"
          >Emmet</a> and <a
            href="https://prettier.io/"
            target="_blank"
            rel="noopener noreferrer"
          >Prettier</a> to code formatter.
        </p>
      </div>
    </div>
    <div class="feature">
      <div class="feature__title">
        <h3>Tray Assistant</h3>
      </div>
      <div class="feature__body">
        <p>massCode assistant lives in the tray and gives you the ability to always have quick access to your snippets using the search. The snippet you selected will be copied to the clipboard.</p>
      </div>
    </div>
    <div class="feature">
      <div class="feature__title">
        <h3>Markdown</h3>
      </div>
      <div class="feature__body">
        <p>massCode allows you to write in Markdown and also provide syntax highlighting inside a code block. And of course there is a preview.</p>
      </div>
    </div>
    <div class="feature">
      <div class="feature__title">
        <h3>Search</h3>
      </div>
      <div class="feature__body">
        <p>It is impossible to imagine a productive snippet manager without quick access to snippets. Therefore massCode has a fast full-text search with highlighting of the search query.</p>
      </div>
    </div>
    <div class="feature">
      <div class="feature__title">
        <h3>Autosave</h3>
      </div>
      <div class="feature__body">
        <p>massCode automatically saves any changes you make during work, so you don't have to worry about losing changes.</p>
      </div>
    </div>
    <div class="feature">
      <div class="feature__title">
        <h3>Sync</h3>
      </div>
      <div class="feature__body">
        <p>You can use any service that provides cloud synchronization, such as iCloud Drive, Google Drive, Dropbox or other similar.</p>
      </div>
    </div>
    <div class="feature">
      <div class="feature__title">
        <h3>Database</h3>
      </div>
      <div class="feature__body">
        <p>
          massCode uses a simple but powerful <a
            href="https://github.com/louischatriot/nedb"
            target="_blank"
            rel="noopener noreferrer"
          >NeDB</a> to store your data, every entry is a simple JSON structure. The database files are on your local computer.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Features',

  data () {
    return {}
  }
}
</script>

<style lang="scss">
.features {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 48px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  .feature {
    p {
      font-size: var(--text-md);
    }
    &__title {
      margin-bottom: 12px;
    }
    text-align: left;
  }
}
</style>
