# Website

My personal website - accessible at [https://adlzanchetta.github.io/](https://adlzanchetta.github.io/).

Built using [Docusaurus](https://docusaurus.io/).

### Installation

```bash
$ npm install
```

### Local Development

```bash
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

When a page runs in *local development* but fails in the *deployment* step, this command can be used to help debugging.

### Deployment

```bash
$ GIT_USER={...} GIT_PASS={...} GIT_USER_EMAIL={...} npm run deploy
```

**NOTE**: the value of `GIT_PASS` can be a Git *token*.

This command builds the website and pushes to the `gh-pages` branch.
