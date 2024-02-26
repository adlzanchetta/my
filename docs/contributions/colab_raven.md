---
sidebar_position: 1
description: Widely used hydrologic modelling framework in C++.
---

# Raven Framework

**About**

A hydrologic modelling framework very popular among operational teams and academics in Canada, implemented and maintained by Prof. James Craig - University of Waterloo.

Official repo: [CSHS-CWRA/RavenHydroFramework](https://github.com/CSHS-CWRA/RavenHydroFramework).

**My contribution**

1. Supported the implementation of the Basic Model Interface (BMI) interface;
2. Replaced global variables by local variables for parallelization in BMI frameworks (refactoring).

## Create a docs version

Release a version 1.0 of your project:

```bash
npm run docusaurus docs:version 1.0
```

The `docs` folder is copied into `versioned_docs/version-1.0` and `versions.json` is created.

Your docs now have 2 versions:

- `1.0` at `http://localhost:3000/docs/` for the version 1.0 docs
- `current` at `http://localhost:3000/docs/next/` for the **upcoming, unreleased docs**

## Add a Version Dropdown

To navigate seamlessly across versions, add a version dropdown.

Modify the `docusaurus.config.js` file:

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'docsVersionDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

The docs version dropdown appears in your navbar:

![Docs Version Dropdown](./img/docsVersionDropdown.png)

## Update an existing version

It is possible to edit versioned docs in their respective folder:

- `versioned_docs/version-1.0/hello.md` updates `http://localhost:3000/docs/hello`
- `docs/hello.md` updates `http://localhost:3000/docs/next/hello`
