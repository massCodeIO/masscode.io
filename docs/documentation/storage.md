# Storage

All your snippets are on your computer locally. You can change the folder where your snippets will be stored or open and import existing snippets. To go to Storage settings, select **"massCode"** > **"Preferences"** from the menu bar, then go to **Storage**.

## Importing

Follow these steps:

- Click on the **Open storage** button.
- Select the folder containing the file `db.json`.

## Move

- Click on the **Move storage** button.
- Select the folder where the `db.json` file will be moved.

## Migrate

### From massCode v1.0

To migrate from massCode v1.0 select the folder containing the files `masscode.db`, `snippets.db`, `tags.db`.

### From SnippetsLab

Before you migrate, you must export the snippets library from SnippetsLab. Select **"Library"** > **"Export..."** from the menu bar, then select **"JSON Document"** in Format section.

To migrate from SnippetsLab select JSON file.

::: warning Some Limitations
- All folders will be first level as JSON file (below v2.1) does not represent nested folders.
- Snippets with unsupported languages will be set to default Plain Text.

:::

