# [Personal Website](https://luis-c.github.io)

This repository contains the original website and a separately verified Angular
22 copy. The upgrade has **not** been published; the existing deployment and
Angular 9 source remain unchanged.

## Projects

| Location | Purpose |
|----------|---------|
| [luis-hernandez-v22/](./luis-hernandez-v22/) | Standalone, zoneless Angular 22 application; all new development |
| [luis-hernandez/](./luis-hernandez/) | Original Angular 9 reference; its old toolchain is not needed for the copy |
| Root HTML, bundles, and [assets/](./assets/) | Existing deployed Angular 9 website; do not overwrite when building |
| [UPGRADE-PLAN.md](./UPGRADE-PLAN.md) | Migration plan, acceptance criteria, and implementation results |

## Run the Upgraded Copy

Use Node **26.13.0**, pinned in the new workspace's `.node-version`.
If using fnm, run `fnm use` from that workspace.

```bash
cd luis-hernandez-v22
npm ci
npm start
```

Open **http://localhost:4200/**. Both `/home` and `/portfolio` work, including
direct loads and browser refresh. The **Watchfaces** tab at `/watchfaces` showcases
seven released Garmin Connect IQ products with short summaries and store links;
beta apps are excluded.

## Build and Verify

```bash
cd luis-hernandez-v22
npm exec playwright install chromium webkit
npm run verify
```

Verification runs unit tests, strict browser-test type checking, a
production build, Chromium acceptance tests, and WebKit appearance checks. It checks content/card
pairings, assets, audio playback, links, routing, Pages-style fallback, and all
three pages at 320px, 768px, and 1440px widths. Tests read the original source
for legacy content parity and verify the released watchface catalog separately.
Appearance checks cover readable glass fallbacks, contrast samples, keyboard focus,
reduced effects, and mobile/200% zoom reflow. Firefox checks are available separately;
see the [workspace README](./luis-hernandez-v22/README.md) for the current host limitation.

The production artifact is **`luis-hernandez-v22/dist/luis-hernandez-v22/browser/`**,
including a generated `404.html` identical to its `index.html`. The build never
writes into the repository root.

For manual production preview:

```bash
cd luis-hernandez-v22
npm run build
npm run preview
```

Open **http://localhost:4300/**. Stop a manual preview before running
`npm run verify`, because Playwright owns that port and refuses to reuse another
server. See the [workspace README](./luis-hernandez-v22/README.md) for details.

## Deployment

### How the new deployment works

Use **GitHub Actions**, rather than copying compiled files into the repository
root. GitHub builds the Angular source, runs verification, and publishes only
`luis-hernandez-v22/dist/luis-hernandez-v22/browser/` to
**https://luis-c.github.io/**. The original source and root deployment files stay
in Git as a reference and rollback option.

**One-time setup is still required.** The workflow below is an example to add;
it has not been installed, and these instructions do not change GitHub settings
or publish anything.

### 1. Record the current Pages configuration

1. Open [this repository's Pages settings](https://github.com/Luis-C/Luis-C.github.io/settings/pages).
2. Record the current **Source**, publishing branch, folder, and any custom domain
   before changing them. These are needed if you want to restore the old site.
3. Check the repository's default branch on GitHub. The examples below use
   **`master`**, matching the local origin default-branch reference. If GitHub
   now uses a different default branch, substitute it in the workflow and PR target.

Do not delete or replace the existing root HTML, bundles, or assets.

### 2. Verify and commit the upgraded source

From the repository root, using the pinned Node version:

```bash
cd luis-hernandez-v22
fnm use # If using fnm
npm ci
npm exec playwright install chromium webkit
npm run verify
cd ..
```

Stop any manual server on port 4300 before verification. Do not publish if the
checks fail. Current expected results are 10 passing unit tests and 27 passing
browser tests, with two documented WebKit skips.

Review and commit the upgraded workspace's source, public assets, configuration,
tests, scripts, `package.json`, and **`package-lock.json`**, plus the updated
documentation. Do **not** commit `node_modules/`, `dist/`, `.angular/`,
`playwright-report/`, or `test-results/`; these are generated and ignored.

### 3. Add the deployment workflow

On your upgrade branch, create **[.github/workflows/deploy-pages.yml](./.github/workflows/deploy-pages.yml)**
at the repository root (create the directories if needed), containing:

```yaml
name: Deploy Angular to GitHub Pages

on:
  push:
    branches: [master]
  workflow_dispatch:

permissions:
  contents: read

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pages: read
    defaults:
      run:
        working-directory: luis-hernandez-v22
    steps:
      - name: Check out source
        uses: actions/checkout@v6
      - name: Set up Node
        uses: actions/setup-node@v6
        with:
          node-version-file: luis-hernandez-v22/.node-version
          cache: npm
          cache-dependency-path: luis-hernandez-v22/package-lock.json
      - name: Install dependencies
        run: npm ci
      - name: Install browser engines and Linux dependencies
        run: npm exec playwright install --with-deps chromium webkit
      - name: Verify and build production site
        run: npm run verify
      - name: Configure GitHub Pages
        uses: actions/configure-pages@v5
      - name: Upload built site
        uses: actions/upload-pages-artifact@v4
        with:
          path: luis-hernandez-v22/dist/luis-hernandez-v22/browser

  deploy:
    needs: build
    runs-on: ubuntu-latest
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

`npm run verify` already builds the production site and runs `postbuild`, which
generates the required `404.html`. Do not upload the repository root, the workspace
source, or the parent `dist/` directory instead of the exact `browser/` folder.
No personal access token or third-party deployment package is needed.

Commit this workflow along with the source changes, then push your upgrade branch.
For the current branch:

```bash
git push -u origin upgrade-angular
```

Open a pull request targeting `master`. Review it before merging; a push to the
upgrade branch alone does not trigger this workflow.

### 4. Enable Actions publishing and deploy

When ready to replace the live site:

1. In **Settings > Pages > Build and deployment > Source**, select
   **GitHub Actions**. You do not need to select a Jekyll template.
2. Merge the reviewed upgrade PR into `master`. This triggers the workflow.
3. Open the repository's **Actions** tab, then **Deploy Angular to GitHub Pages**.
   Wait for both **build** and **deploy** to succeed. Approve an environment
   deployment if GitHub requests it.
4. If deployment is rejected by an environment rule, check
   **Settings > Environments > github-pages** and allow the intended default
   branch without removing unrelated protections.
5. Open the URL shown by the deployment job or **Settings > Pages**.
   Publishing can take a few minutes to appear.

If the workflow was merged before changing the Pages source, select it under
**Actions > Deploy Angular to GitHub Pages > Run workflow**, select `master`,
and run it again after changing the setting.

### 5. Check the live site

- Open https://luis-c.github.io/ and confirm the upgraded home page appears.
- Open https://luis-c.github.io/portfolio and
  https://luis-c.github.io/watchfaces directly, then refresh both.
- Confirm images load, navigation works on mobile, and watchface links open the
  correct Garmin listings. Check that the resume button and Code Art are hidden
  and that CaughtUp appears once as past work.
- If you still see the old site after a successful deployment, try a hard refresh
  or a private window. If the page is blank, check the browser's Console/Network
  tabs and verify that the uploaded artifact contained `index.html` and assets
  directly at its root.

The base URL `/` is appropriate for this user site. The fallback allows Angular
to render deep links, but GitHub Pages still returns HTTP 404 for those requests.
Do not treat that behavior as an HTTP-200 server rewrite.

### Future updates and rollback

**Future updates:** edit the Angular workspace, run `npm run verify`, commit and
push your branch, then merge its PR into `master`. Each push to `master` runs
verification and deploys automatically; failed verification prevents deployment.
You do not need to rebuild or commit root bundles.

**Undo a bad Angular release:** revert the offending source commit(s) through a
new PR, verify, and merge. The workflow rebuilds and redeploys the corrected site.

**Restore the original website:** cancel any in-progress Angular deployment,
then restore the Pages source, branch, and folder recorded in step 1 (typically
**Deploy from a branch**). The unchanged legacy root files are still available.
If GitHub does not start a branch deployment, push a new commit to that publishing
branch. Do not delete the upgraded workspace to roll back.

Reference: [GitHub's custom Pages workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).
