# Everyone Deserves Housing Website

Minimal Eleventy setup for a static nonprofit website.

## Commands

- `npm install`
- `npm start`
- `npm run build`

## Structure

- `src/_data/` holds site content and structured homepage data.
- `src/_includes/base.njk` is the shared page layout.
- `src/index.njk` renders the homepage from the data files.
- `src/assets/styles.css` contains the current design system.
- `docs/` preserves the original source material and extracted assets.

## Deployment

This project builds to `_site/`, which can be deployed to GitHub Pages.

If you use GitHub Pages with Actions:

- push the repo to GitHub
- set the default branch to `main`
- in GitHub, configure Pages to use `GitHub Actions`
- the workflow at `.github/workflows/deploy.yml` will build and publish `_site`
