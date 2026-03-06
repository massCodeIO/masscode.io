# Storage

All your snippets are on your computer locally. massCode supports two storage engines: **SQLite** (default) and **Markdown Vault**. You can switch between them in **Settings → Storage**.

## SQLite (Default)

The default storage engine uses a SQLite database (`massCode.db`). You can change the folder where your snippets will be stored or open and import existing snippets.

### Open Existing

- Click on the **Open storage** button.
- Select the folder containing the file `massCode.db`.

### Move

- Click on the **Move storage** button.
- Select the folder where the `massCode.db` file will be moved.

## Markdown Vault

<AppVersion text=">=4.5" />

Starting from v4.5.0, you can store your snippets as plain Markdown files directly on disk.

### Why it matters

- **Your data is just files.** Each snippet is a `.md` file with frontmatter metadata. No database, no binary formats. You can read, edit, and organize snippets with any text editor or file manager.
- **Git-friendly.** Store snippets in a Git repository, sync via GitHub, track change history — everything works out of the box because it's just files.
- **Cloud sync.** iCloud, Dropbox, Syncthing — any file sync service will do. No database conflicts.
- **Live sync.** massCode watches the vault directory in real time via a file watcher. Edit a file externally — the app picks up changes automatically.

### How it works

The vault structure mirrors your folder hierarchy. Each folder is a directory on disk, each snippet is a `.md` file inside it. Metadata (language, tags, order) is stored in frontmatter, while `.state.json` handles UI state (expanded folders, sort order).

To enable Markdown Vault, go to **Settings → Storage** and switch the storage engine.

## Migrate

### From massCode v3

To migrate from massCode v3.0 select the folder containing the `db.json` file.
