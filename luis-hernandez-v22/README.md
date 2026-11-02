# Personal Website - Angular 22

An isolated copy of the original portfolio, preserving its content, links, dark
theme, images, and audio. No deployment changes are made by this workspace.

## Toolchain

- Node 26.13.0 (`.node-version`), npm 11.20.0.
- Angular framework 22.2.4; CLI, build tooling, Material and CDK 22.2.5.
- TypeScript 6.0; standalone components, lazy routes, zoneless change detection.
- Material 2 compatibility theme with amber accents and charcoal glass surfaces.
- Vitest unit tests, Playwright Chromium acceptance tests, and WebKit appearance checks.

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
shows 16 cards (nine visible project entries and seven static cards). Code Art
is retained in the data but hidden. CaughtUp is a single past-work summary with
outdated demo links removed; the resume button is not displayed.
`/watchfaces` showcases seven released Garmin Connect IQ
watchfaces with short summaries, local artwork, and direct store links. Beta
apps are excluded. Unknown routes redirect to `/home`. No global Angular CLI,
old Node runtime, or Angular 9 installation is needed.

## Verify

```bash
npm exec playwright install chromium webkit
npm run verify
```

`verify` runs:

1. `npm test -- --watch=false` - Vitest tests covering the shell, routes,
   home controls, and project/watchface image/text/action pairing.
2. `npm run typecheck:e2e` - strict TypeScript checking of browser tests.
3. `npm run build` - strict production compilation, budget checks, and fallback copy.
4. `npm run test:e2e` - Chromium acceptance and WebKit appearance tests against the production output.

Playwright starts and stops its own static preview on **localhost:4300**. Stop
any manual preview first; tests intentionally refuse to reuse an existing server.
Reports, traces on failure, and responsive screenshots are ignored by Git:

```bash
npm exec playwright show-report
```

Browser tests compare unchanged projects with the original source and verify the
curated visible catalog separately, including the merged CaughtUp entry and hidden Code Art,
seven static portfolio cards, ten home cards, 19 skills, 11 courses, five
strengths, outgoing links, copied assets, PDF, and three playable MP3s. Watchface
tests check seven non-beta products, brief descriptions, artwork, store URLs,
and direct-route refresh. All three pages are checked at 320x800, 768x1024,
and 1440x900.

## Watchface Catalog

The public shareable route is `/watchfaces` (after deployment,
`https://luis-c.github.io/watchfaces`). The live site is not updated by local builds.
Product entries are maintained in
[watchfaces.ts](./src/app/pages/watchfaces/watchfaces.ts). Each has a name,
one-sentence description (at most 120 characters), local image, and Connect IQ URL.
Keep full descriptions, compatibility, and current pricing on Garmin.

Artwork in [public/assets/images/watchfaces/](./public/assets/images/watchfaces/)
was sourced from the developer's public
[Garmin catalog](https://apps.garmin.com/developer/1ebb0d12-53bd-442b-8ff5-11474955f9a9/apps)
on 2026-11-01. The released catalog contains Ouroboros, Errant, TZOLTECH, Fenestra,
Dimidi, TZOLTECH LITE, and StatsRadar; it excludes Ouroboros-Beta and BETA-Testing.

Unexpected browser/network errors fail verification. Two narrowly checked
exceptions model real browser/hosting behavior:

- Known deep-link document requests return the generated shell with HTTP 404.
- Chromium may cancel a known MP3 metadata range request after successful audio
  response headers. Separate checks require all three files to load metadata
  and actually play after a user gesture (muted during tests).

Icons use bundled FontAwesome SVGs and an inline email SVG; no Google Fonts
request is required. The system font stack remains readable without downloaded fonts.

## Appearance and Compatibility

[Global styles](./src/styles.scss) define shared glass-surface tokens over static
charcoal, muted burgundy, and slate CSS gradients. No background image download or
fixed-background scroll effect is required. The original background asset remains
in the preserved asset copy, but is no longer displayed.

- Cards, header, footer, and the watchface introduction share surface treatment.
- The default is opaque and readable; `@supports` enables 12px backdrop blur and
  transparency, including the prefixed WebKit form.
- Reduced-transparency and increased-contrast preferences restore opaque surfaces.
  Reduced transparency has limited browser support, so readability never depends
  on detecting it.
- Forced-colors mode uses system colors and removes background gradients/blur.
- Reduced motion is respected. Hover only changes borders on fine pointers; it
  does not animate expensive blur effects. Keyboard focus receives a visible outline.
- The skip link moves focus to the main content, and navigation stays usable on mobile.

`npm run verify` currently passes 10 unit tests and 27 browser tests; two WebKit
cases are explicitly skipped because reduced-transparency/forced-color emulation
is covered in Chromium instead. Appearance tests cover opaque fallback by disabling
the feature enhancement, worst-case white-backdrop text contrast samples (at least
4.5:1), no external font requests, keyboard focus, 24px minimum control targets,
mobile layouts, and 200% CSS-zoom reflow in Chromium and WebKit. CSS zoom is an
automated reflow check, not a claim of exhaustive OS/browser accessibility testing.

Firefox appearance tests are configured separately:

```bash
npm exec playwright install firefox
npm run test:e2e:firefox
```

Firefox validation is **blocked on the current macOS host**: Playwright Firefox
1555 fails before page creation with "Could not find profile folder"; a headed
startup also fails with host process/sandbox errors. No browser security settings
were disabled. It is not included in the default passing verification command;
run the explicit command on a compatible host before claiming Firefox validation.

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

Follow the [step-by-step GitHub Pages deployment guide](../README.md#deployment)
in the repository README. It covers the one-time GitHub Actions workflow,
Pages settings, committing source instead of build output, first deployment,
live checks, future updates, and rollback.

No automatic publication or root-file replacement is currently configured.
The guide includes a workflow to add when ready; it publishes only the verified
`dist/luis-hernandez-v22/browser/` artifact and preserves the legacy root files.
