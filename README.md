# The official site for massCode

The repository contains a landing page, documentation, and a collection of snippets.

## Development

```sh
# Install dependencies
pnpm i

# Start development
pnpm run dev
```

## Build

```sh
pnpm run build
```

## Snippet Collection

Сommunity-driven snippet collection

- Visit our [website](https://masscode.io/snippets/) to view our snippet collection

## Contribution

To add new UI snippet

- Make a fork
- Install dependencies
- Run dev `pnpm run dev:ui-collection`
- Add snippet folder inside `/docs/.vitepress/snippets/ui` folder to one of the categories (subfolder) `/buttons`, `/checkboxes`, `/effects`, `/inputs`, `/loaders`, `/switches` similar to the previous ones. The folder name must be numeric with the increment step.
- Make PR

## Licences

[MIT](https://github.com/massCodeIO/snippet-collection/blob/master/LICENSE).

All in `/docs/.vitepress/snippets` folder is under [CC-BY-4.0](https://github.com/massCodeIO/snippet-collection/blob/master/LICENSE-SNIPPETS).

Copyright (c) 2019-present, [Anton Reshetov](https://github.com/antonreshetov).
