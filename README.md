# projects

![deploy](https://img.shields.io/github/actions/workflow/status/johanbook/projects/deploy.yaml)
![last commit](https://img.shields.io/github/last-commit/johanbook/projects)

**projects** is a list of different projects I am working on, hosted at
[johanbook.com/projects](https://johanbook.com/projects). They are written using
[markdown](https://www.markdownguide.org/) and compiled to a static site using
the Nodejs-based [Docusaurus](https://docusaurus.io/) framework.

## Found an error?

If something is incorrect or could be improved, open an issue in
[here](https://github.com/johanbook/projects/issues).

## Running locally

The documentation site can be run locally. It requires a Nodejs runtime and the
NPM package manager. The dependencies are installed by running

```sh
npm install -d
```

To start a development server run

```sh
npm run dev
```

## Deployment

The docs are hosted on Github pages and are built as part of a CD pipeline. The
compilation is done using Node v16 (LTS).
