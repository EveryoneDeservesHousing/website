# Everyone Deserves Housing Website

Static Bootstrap website for Everyone Deserves Housing.

## Local preview

Open `src/index.html` in a browser. No build step is required.

## Structure

- `src/index.html` is the live site.
- `src/assets/` contains site CSS, JavaScript, images, and fonts.
- `src/vendor/` contains Bootstrap and jQuery files used by the template navigation.
- `src_11ty/` preserves the previous Eleventy version for reference.
- `docs/` preserves the original source material and EDH image assets.
- `temp_template/` preserves the original template for reference.

## Deployment

The GitHub Pages workflow copies `src/` into `_site/`, then publishes that static folder.
