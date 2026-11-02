# Personal Website - Angular 22

An isolated copy of the original portfolio, preserving its content, links, dark
theme, images, and audio. No deployment changes are made by this workspace.

## Toolchain

- Node 26.13.0 (`.node-version`), npm 11.20.0.
- Angular framework 22.2.4; CLI, build tooling, Material and CDK 22.2.5.
- TypeScript 6.0; standalone components, lazy routes, zoneless change detection.
- Material 2 compatibility theme for the original red/amber appearance.
- Vitest unit tests and Playwright Chromium production acceptance tests.

The original [Angular 9 source](../luis-hernandez/) remains a read-only reference.
Assets are copied into [public/assets/](./public/assets/), preserving their
`/assets/...` URLs. The active theme is [src/styles/_theme.scss](./src/styles/_theme.scss),
not the legacy SCSS file retained among the copied assets.

## Install and Develop

```bash
# If using fnm, select the pinned runtime first:
fnm use
npm ci
npm start
```

Open **http://localhost:4200/**. Angular redirects `/` to `/home`; `/portfolio`
shows all 19 cards. Unknown routes redirect to `/home`. No global Angular CLI,
old Node runtime, or Angular 9 installation is needed.

## Verify

```bash
npm exec playwright install chromium
npm run verify
```

`verify` runs:

1. `npm test -- --watch=false` - seven Vitest tests covering the shell, routes,
   home controls, and project image/text/action pairing.
2. `npm run typecheck:e2e` - strict TypeScript checking of browser tests.
3. `npm run build` - strict production compilation, budget checks, and fallback copy.
4. `npm run test:e2e` - eleven Chromium tests against the production output.

Playwright starts and stops its own static preview on **localhost:4300**. Stop
any manual preview first; tests intentionally refuse to reuse an existing server.
Reports, traces on failure, and responsive screenshots are ignored by Git:

```bash
npm exec playwright show-report
```

Browser tests compare with the original source, including all 12 JSON projects,
seven static portfolio cards, ten home cards, 19 skills, 11 courses, five
strengths, outgoing links, copied assets, PDF, and three playable MP3s. Both
pages are checked at 320x800, 768x1024, and 1440x900.

Unexpected browser/network errors fail verification. Two narrowly checked
exceptions model real browser/hosting behavior:

- Known deep-link document requests return the generated shell with HTTP 404.
- Chromium may cancel a known MP3 metadata range request after successful audio
  response headers. Separate checks require all three files to load metadata
  and actually play after a user gesture (muted during tests).

The Google Material Icons font remains an external dependency, as in the
original site. Verification requires it to load; it does not hide font failures
or require third-party project/social sites to remain online.

## Production Build and Local Preview

```bash
npm run build
npm run preview
```

Open **http://localhost:4300/**. `preview` serves only
`dist/luis-hernandez-v22/browser/`, disables caching, and uses that directory's
`404.html` for missing routes. Direct `/home` and `/portfolio` requests render
correctly despite the expected HTTP 404 status.

`postbuild` copies the freshly generated `index.html` to `404.html`. Always use
`npm run build`, not a bare `ng build`, when preparing the complete artifact.
The base href is `/`; no local requests should use the live website's origin.

Initial JS/CSS budgets are 1 MB warning / 2 MB error, and component styles are
8 kB / 12 kB. Investigate regressions rather than simply raising the limits.

## Publication

No automatic publication or root-file replacement is configured. After approval,
inspect the actual Pages configuration and deploy only the verified browser
artifact. Keep the existing deployment recoverable. See the
[upgrade plan](../UPGRADE-PLAN.md) for acceptance and publication gates.
