# Website

My personal website. Built using [Docusaurus](https://docusaurus.io/).

### Installation

```bash
$ npm install
```

### Local Development

```bash
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```bash
$ USE_SSH=true yarn deploy
```

Not using SSH:

```bash
$ GIT_USER={...} yarn deploy
```

or 

```bash
$ GIT_USER={...} GIT_PASS={...} GIT_USER_EMAIL={...} npm run deploy
```

*NOTE*: a token can be used as the value of `GIT_PASS`.

This command builds the website and pushes to the `gh-pages` branch. The repository must be public and have its Github pages activated.
