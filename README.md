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
direct loads and browser refresh.

## Build and Verify

```bash
cd luis-hernandez-v22
npm exec playwright install chromium
npm run verify
```

Verification runs seven unit tests, strict browser-test type checking, a
production build, and eleven Chromium acceptance tests. It checks content/card
pairings, assets, audio playback, links, routing, Pages-style fallback, and both
pages at 320px, 768px, and 1440px widths. Tests read the original source for parity.

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

Publishing requires a separate decision and inspection of the actual GitHub
Pages configuration. Deploy only the tested browser artifact, including its
`404.html`; do not run the legacy build into `../` or delete root files wholesale.

The base URL `/` is appropriate for this user site. The fallback allows Angular
to render deep links, but GitHub Pages still returns HTTP 404 for those requests.
Do not treat that behavior as an HTTP-200 server rewrite.
