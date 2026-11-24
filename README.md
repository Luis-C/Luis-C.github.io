# [Personal Website](https://luis-c.github.io)

This repository contains the deployed website and an isolated Angular 22
replacement. The replacement has not been published; the existing deployment
and Angular 9 source remain unchanged.

## Projects

| Location | Purpose |
|----------|---------|
| [luis-hernandez-v22/](./luis-hernandez-v22/) | Standalone Angular 22 application; all new development |
| [luis-hernandez/](./luis-hernandez/) | Original Angular 9 reference |
| Root HTML, bundles, and [assets/](./assets/) | Existing deployed site; leave unchanged for rollback |

## Develop

Use Node **26.13.0**, pinned in `luis-hernandez-v22/.node-version`.

```bash
cd luis-hernandez-v22
fnm use # If using fnm
npm ci
npm start
```

Open **http://localhost:4200/**. For the app's routes and development details,
see the [Angular workspace README](./luis-hernandez-v22/README.md).

## Verify and preview

From `luis-hernandez-v22/`, install the browser binaries and run the complete
verification:

```bash
npm exec playwright install chromium webkit
npm run verify
```

Verification runs unit tests, browser-test type checking, a production build,
and Chromium/WebKit browser tests. It produces
`dist/luis-hernandez-v22/browser/`; the build also generates `404.html`.
See the [workspace README](./luis-hernandez-v22/README.md) for test coverage
and the Firefox host limitation.

To preview the production build locally, run `npm run preview` from the
workspace and open **http://localhost:4300/**. Stop that preview before
`npm run verify`, which starts its own server on port 4300.

## Deploy to GitHub Pages

Pages serves committed files; it does not build Angular or run tests. The
current setting is **Deploy from a branch > master > / (root)**. To publish the
Angular replacement, commit its built files to `docs/` on `master`, then switch
the Pages folder to `/docs`. The original root site remains available for
rollback.

### 1. Verify and prepare the release

Run from the repository root, using the pinned Node version:

```bash
cd luis-hernandez-v22
fnm use # If using fnm
npm ci
npm exec playwright install chromium webkit
npm run verify
cd ..
mkdir -p docs
cp -R luis-hernandez-v22/dist/luis-hernandez-v22/browser/. docs/
touch docs/.nojekyll
```

`npm run verify` includes the production build, so there is no need to run
`npm run build` again. Copy the contents of `browser/` so `docs/index.html`,
`docs/404.html`, and the generated assets are directly inside `docs/`.
`.nojekyll` prevents Jekyll processing. The copy overlays existing files but
does not remove old hashed bundles; review `docs/` and remove only files known
to be obsolete generated output.

### 2. Review and publish

Review the source changes and the complete `docs/` output. Commit the Angular
workspace source, public assets, configuration, tests, scripts, package files,
documentation, and release files in `docs/` (including `.nojekyll`). Do not
commit `node_modules/`, `dist/`, `.angular/`, `playwright-report/`, or
`test-results/`.

Push the release to `master`, directly or by merging a reviewed pull request.
Pushing another branch does not publish it. For example, when already on
`master`:

```bash
git push origin master
```

### 3. Switch the Pages folder once

After the release files are on `master`:

1. Open [Settings > Pages](https://github.com/Luis-C/Luis-C.github.io/settings/pages).
2. Keep **Source: Deploy from a branch** and **Branch: master**; change the
   folder from **/ (root)** to **/docs**, then save.
3. Check the repository's **Actions** tab for deployment status.

For future releases, leave these settings unchanged. Committing updated `docs/`
files to `master` triggers publication.

### 4. Check the live site

Open [the home page](https://luis-c.github.io/), then visit and refresh
`/portfolio` and `/watchfaces`. Check that images, navigation, and watchface
links work. If the old site remains visible, try a hard refresh or private
window. If the page is blank, check the browser Console/Network tabs and confirm
that `docs/` contains `index.html` and assets directly at its root.

The public base URL remains `/`, not `/docs/`. The generated fallback lets
Angular render deep links, but GitHub Pages may still return HTTP 404 for those
requests; this is not an HTTP-200 server rewrite.

### Rollback

- **Undo a bad Angular release:** revert the release commit(s), including both
  source and `docs/`, then push or merge the revert to `master`. For a
  source-only fix, verify, copy the new build to `docs/`, and commit both.
- **Restore the original site:** in Pages settings, change the folder from
  **/docs** back to **/ (root)**. The original root files are unchanged.

Reference: [GitHub Pages publishing sources](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).
