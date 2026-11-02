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

Build locally, copy the production output into the repository's `docs/` folder,
and commit it to **`master`**. GitHub Pages serves those files at
**https://luis-c.github.io/**; it does not compile Angular or run our tests.
No custom GitHub Actions workflow is required.

The confirmed existing Pages configuration is **Deploy from a branch >
master > / (root)**. For the upgraded site, change the folder to **/docs**
after the first release files reach `master`, as described below.
Keep the original root HTML, bundles, and assets unchanged for rollback.

### 1. Verify the upgraded source

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

### 2. Build the release and copy it to docs

From the repository root:

```bash
cd luis-hernandez-v22
npm run build
mkdir -p ../docs
cp -R dist/luis-hernandez-v22/browser/. ../docs/
touch ../docs/.nojekyll
cd ..
```

`npm run build` selects the production configuration and automatically runs
`postbuild` to create `404.html`. `npm run verify` also builds this same artifact;
the explicit build above is useful when preparing a release separately.

Copy the **contents** of `browser/`, not the containing directory: `docs/index.html`,
`docs/404.html`, and the generated assets must sit directly inside `docs/`.
`.nojekyll` tells Pages to serve the compiled files without Jekyll processing.

The copy command overwrites matching files but does not remove obsolete hashed
bundles or retired assets from previous releases. Review `docs/` and remove only
known obsolete generated files when updating; do not delete the repository root.

### 3. Commit and push the release

Review and commit the upgraded workspace's source, public assets, configuration,
tests, scripts, `package.json`, and **`package-lock.json`**, plus documentation
and **all release files in `docs/`**, including `.nojekyll`.

Unlike the ignored temporary `dist/` output, **`docs/` must be committed** because
it is the publishing source. Do not commit `node_modules/`, `dist/`, `.angular/`,
`playwright-report/`, or `test-results/`.

After reviewing and staging only the intended changes, commit them and push your
branch. If working on `upgrade-angular`, push it and merge a reviewed pull request
into `master`. If already on `master`, push the release commit directly:

```bash
git push origin master
```

Pushing another branch does not publish it. Pushing `master` without rebuilding
and copying the output will not publish your latest Angular source changes.

### 4. Set the Pages folder (one time)

Once `docs/` is committed on `master`:

1. Open [Settings > Pages](https://github.com/Luis-C/Luis-C.github.io/settings/pages).
2. Keep **Source: Deploy from a branch**.
3. Keep **Branch: master**, change **/ (root)** to **/docs**, and click **Save**.
4. Wait for the Pages deployment to finish; check the repository's **Actions**
   tab for the Pages build/deployment status.
5. Open the site URL shown in Pages settings. Publishing can take a few minutes.

For later releases, leave these settings unchanged. Pushing updated `docs/`
files to `master` automatically triggers publication.

### 5. Check the live site

- Open https://luis-c.github.io/ and confirm the upgraded home page appears.
- Open https://luis-c.github.io/portfolio and
  https://luis-c.github.io/watchfaces directly, then refresh both.
- Confirm images load, navigation works on mobile, and watchface links open the
  correct Garmin listings. Check that the resume button and Code Art are hidden
  and that CaughtUp appears once as past work.
- If you still see the old site after a successful deployment, try a hard refresh
  or a private window. If the page is blank, check the browser's Console/Network
  tabs and verify that `docs/` contains `index.html` and assets directly at its root.

The base URL remains **`/`**, not `/docs/`: the publishing folder does not appear
in the public URL. The fallback allows Angular
to render deep links, but GitHub Pages still returns HTTP 404 for those requests.
Do not treat that behavior as an HTTP-200 server rewrite.

### Future updates and rollback

**Future updates:** edit the Angular workspace, run `npm run verify`, repeat the
release copy in step 2, and commit both source and `docs/`. Push/merge into
`master`. Verification is local; Pages does not block publication on our tests.

**Undo a bad Angular release:** revert the release commit(s), including both
source and `docs/`, then push/merge the revert into `master`. For a source-only
revert, verify, rebuild, and copy the corrected output before committing.

**Restore the original website:** in Pages settings, keep **Deploy from a branch >
master**, change **/docs** back to **/ (root)**, and save. The unchanged legacy
root files are still available.
If GitHub does not start a branch deployment, push a new commit to that publishing
branch. Do not delete the upgraded workspace to roll back.

Reference: [GitHub's Pages publishing-source documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).
