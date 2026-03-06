---
title: Latest Release
---

# v4.5.0

## Markdown Vault — New Storage Engine

This is arguably the most significant update in massCode&#x27;s history. You can now store your snippets as plain Markdown files directly on disk.

**Why it matters:**

- **Your data is just files.** Each snippet is a &#x60;.md&#x60; file with frontmatter metadata. No database, no binary formats. You can read, edit, and organize snippets with any text editor or file manager.
- **Git-friendly.** Store snippets in a Git repository, sync via GitHub, track change history — everything works out of the box because it&#x27;s just files.
- **Cloud sync.** iCloud, Dropbox, Syncthing — any file sync service will do. No database conflicts.
- **Live sync.** massCode watches the vault directory in real time via a file watcher. Edit a file externally — the app picks up changes automatically.

**How it works:**

The vault structure mirrors your folder hierarchy. Each folder is a directory on disk, each snippet is a &#x60;.md&#x60; file inside it. Metadata (language, tags, order) is stored in frontmatter, while &#x60;.state.json&#x60; handles UI state (expanded folders, sort order).

You can switch between SQLite and Markdown Vault in Settings → Storage.

## Custom Themes

Added support for custom themes. You can now fully customize the look and feel of massCode — UI colors, editor syntax highlighting colors.

- Themes are stored in &#x60;~/.massCode/themes/&#x60; as JSON files
- Create a new theme directly from settings — a Rose Pine-based template will be generated
- Both light and dark theme types are supported
- Theme files are watched in real time — edit the JSON, see the result instantly

## What&#x27;s Changed

- fix(snippets): resolve default language correctly for nested folders by @antonreshetov in https://github.com/massCodeIO/massCode/pull/657
- feat(folder): add default language indication by @antonreshetov in https://github.com/massCodeIO/massCode/pull/659
- fix(snippets): language mode search by @antonreshetov in https://github.com/massCodeIO/massCode/pull/665
- feat: add markdown vault as storage engine by @antonreshetov in https://github.com/massCodeIO/massCode/pull/671
- feat: add support custom themes by @antonreshetov in https://github.com/massCodeIO/massCode/pull/672
- feat: Add OpenEdge ABL language support by @DGovender in https://github.com/massCodeIO/massCode/pull/670
- feat: add Nushell language support by @archcorsair in https://github.com/massCodeIO/massCode/pull/663

## New Contributors

- @DGovender made their first contribution in https://github.com/massCodeIO/massCode/pull/670
- @archcorsair made their first contribution in https://github.com/massCodeIO/massCode/pull/663

**Full Changelog**: https://github.com/massCodeIO/massCode/compare/v4.4.0...v4.5.0
<AssetsDownload />
