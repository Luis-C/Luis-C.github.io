# Personal Website: Angular 22 Copy and Verification Plan

## Status and Scope

Revised on 2026-11-01 after reviewing the original plan, its review notes, the
source, published npm packages, and official Angular documentation.

**Implemented and locally verified on 2026-11-01 after approval.** The isolated
Angular 22 copy is complete; it has not been committed, pushed, or deployed.
The phases below retain the execution specification. Actual results follow.

Create a separate, modern Angular copy of the existing site. Preserve its content,
image/description card pairings, dark appearance, navigation, and media. This is
not a content rewrite or a redesign.

### Execution Results

Implemented in `luis-hernandez-v22/` on the existing `upgrade-angular` branch.
The installed/pinned framework is 22.2.4; CLI/build/Material/CDK are 22.2.5;
TypeScript resolved to 6.0.3. Node 26.13.0 and npm 11.20.0 were used.

| Criteria | Result and evidence |
|----------|---------------------|
| A1 | PASS: `npm ci` and `npm ls --all` exit 0; lockfile hash unchanged by clean install |
| A2 | PASS: 7 tests in 3 Vitest files; routes, shell, expansions, counts, and per-project pairing |
| A3 | PASS: strict production build and browser-test type check; initial JS/CSS 611.68 kB, no build/budget warnings |
| A4 | PASS: browser artifact generated; tests verify assets and identical index/fallback bytes |
| A5 | PASS: completed dev server on localhost:4200; curl plus Chromium verified home, expansion, portfolio, refresh, return navigation, and no console/page errors |
| A6 | PASS: production artifact served on localhost:4300 during all 11 browser tests |
| A7 | PASS: original-source comparisons of 12 JSON projects, 7 static portfolio cards, and 10 home cards |
| A8 | PASS: 32 source assets and favicon match copied/build bytes; rendered images load; icons/font/background requests succeed |
| A9 | PASS: 3 MP3s load metadata and play after a user gesture; PDF MIME type and magic bytes verified |
| A10 | PASS: direct links, refresh, history, active tabs, keyboard navigation, and unknown-route redirect |
| A11 | PASS: real static preview returns the new shell with HTTP 404 on deep links, and the correct route renders |
| A12 | PASS: no unexpected runtime/network errors or live-origin asset requests |
| A13 | PASS: both pages at 320x800, 768x1024, 1440x900; no overflow/clipped cards, controls work, 19 skills / 11 courses / 5 strengths preserved |
| A14 | PASS: SHA-256 comparison confirmed all 126 original source/deployment files unchanged |

`npm run verify` exits 0: 7 unit tests and 11 production Chromium tests pass.
Responsive screenshots are attached to the ignored Playwright report. Additional
local screenshots of the unchanged original and upgraded site were compared.
Verification servers were task-owned and stopped afterward; restart with the
documented `npm start` or `npm run preview` commands.

Implementation clarifications:

- The new home layout retains the approximate desktop card sizing but allows
  normal document scrolling rather than fixed-height nested scrolling. At 320px
  the resume button wraps below navigation to avoid overlap.
- Material's `aria-label` input, supported theme overrides, and visual tooltip
  assertions were verified against real rendering, not only template compilation.
- Browser checks explicitly recognize known deep-link document 404s and successful
  MP3 metadata requests cancelled early by Chromium. No other request/console
  failures are suppressed; separate tests prove MP3 metadata and playback.
- npm reports a transitive `whatwg-encoding` deprecation and install-script review
  notices. Clean install/build/tests succeed; npm audit reports 0 vulnerabilities.
- No live deployment was attempted or implied. All local gates pass; publication
  still requires the separate approval/configuration check in Phase 5.

### Directory decision

```text
repository/
  luis-hernandez/       # Existing Angular 9 source: leave unchanged
  luis-hernandez-v22/   # New Angular 22 workspace and its own package-lock.json
    src/
    public/assets/     # Copied static assets, served at /assets/...
    dist/              # Ignored build output; never the repository root
  assets/              # Existing deployed assets: leave unchanged
  index.html           # Existing deployed application: leave unchanged
  404.html             # Existing deployed fallback: leave unchanged
```

Do not rename the original project, create a shared mutable asset directory, or
build into `../`. The original source itself is the reference copy. Git history
provides an additional recovery path; no archive rename or automatic snapshot
commit is needed.

## Verified Baseline and Target

### Local prerequisites

Verified in the current terminal:

| Tool | Observed | Assessment |
|------|----------|------------|
| Node.js | 26.13.0 | Meets Angular 22 package engines and the documented Node 26 range |
| npm | 11.20.0 | Available and successfully queries the npm registry |
| fnm | 1.39.0 | Already installed; Node 26.13.0 is selected |
| Git worktree | Clean before this plan revision | Recheck before implementation |

No Node installation is currently necessary. Record `26.13.0` in the new
workspace's `.node-version`, and verify `node --version` in the execution shell.
Do not change the user's global Node default. Recheck support at execution time;
if a runtime change is necessary, select a documented compatible LTS locally
with fnm and update the pin rather than guessing a minimum.

### Package versions

Registry `latest` tags observed on 2026-11-01:

| Package / runtime | Target |
|-------------------|--------|
| Angular framework packages | 22.2.4, aligned with each other |
| Angular CLI / build tooling | 22.2.5 |
| Angular Material / CDK | 22.2.5, matching each other |
| TypeScript | >=6.0 <6.1; use the compatible CLI-generated version |
| RxJS | Compatible 7.x selected by the CLI; Angular accepts ^7.4.0 |
| angular-fontawesome | 5.1.0; peer requirement is Angular ^22.0.0 |
| FontAwesome SVG core / brands | Compatible 7.x; wrapper depends on SVG core ^7.3.0 |
| Node.js | Published engines: ^22.22.3 or ^24.15.0 or >=26.0.0 |

The Angular compatibility table lists Node ^26.0.0, a narrower range than the
package engines' >=26.0.0. Use the documented supported range, not arbitrary future
Node majors. Angular 22 does **not** use TypeScript 5.7 or Node 20.

Re-query `latest`, engines, and peers immediately before scaffolding. If stable
patches have advanced within Angular 22, update these pins together. If the
latest stable major has changed, revise this plan before executing. Never use
`next`, `--force`, or `--legacy-peer-deps` to bypass compatibility.

## Content and Behavior Invariants

The current source, not a rough estimate, defines parity:

- Five application components: app shell, header, footer, home, portfolio.
- Routes: `/` redirects to `/home`; `/home` and `/portfolio` render pages;
  unmatched routes redirect to `/home`. Preserve browser back/forward behavior.
- Home: 10 cards, 19 skills, 11 courses, and 5 expandable strengths.
- Portfolio: **12 JSON-driven cards + 7 hardcoded cards = 19 cards** in the
  existing order. The hardcoded set includes the separate audio-samples card.
- Three HTML audio players referencing the existing MP3 files.
- The source asset directory has 32 files; all 31 files in deployed `assets/`
  have identical source counterparts. No deployed-only asset recovery is needed.
- Preserve the resume button's existing Google Drive destination. Also retain and
  verify the bundled resume PDF; switching the button to that PDF is out of scope.
- Preserve visible project and footer link destinations, including `mailto:`.
  External-site availability is not a migration gate; correct outgoing URLs are.
- Keep each project's image, title, paragraphs, and relevant actions in the
  **same card**. Testing only total image or card counts is insufficient.

The first JSON entry uses `codeSrc` / `example`, whereas rendered actions use
`github` / `view`. Preserve those data fields without silently inventing or
revealing new buttons. Define optional fields explicitly in the project type.
Any deliberate content/link correction requires separate approval.

## Phase 0 - Protect the Baseline and Recheck Compatibility

1. Inspect `git status --short`; preserve unrelated work. Create a working branch
   for implementation without automatically staging, committing, or pushing.
2. Record the original source and deployed-file manifest/checksums for the final
   unchanged-baseline check. Keep transient evidence outside tracked source.
3. Inventory the content above from source and verify every referenced local
   image, audio file, favicon, background, and PDF exists.
4. Recheck runtime and registry metadata:

   ```bash
   node --version
   npm --version
   npm view @angular/core dist-tags --json
   npm view @angular/cli@latest version engines --json
   npm view @angular/compiler-cli@latest peerDependencies --json
   npm view @angular/material@latest version peerDependencies --json
   npm view @fortawesome/angular-fontawesome@latest version peerDependencies --json
   ```

**Gate 0:** Supported toolchain, compatible stable package set, intact baseline,
and no conflicting worktree changes. Stop on conflicts or incompatible peers.

## Phase 1 - Scaffold an Isolated, Testable Workspace

From the repository root, after Gate 0, use the verified CLI version:

```bash
npx --yes --package=@angular/cli@22.2.5 ng new luis-hernandez-v22 \
  --directory=luis-hernandez-v22 \
  --standalone --routing --style=scss --strict --zoneless \
  --ssr=false --test-runner=vitest --skip-tests=false \
  --file-name-style-guide=2016 --skip-git --skip-install \
  --package-manager=npm --interactive=false
```

- Keep the generated modern builder, TypeScript settings, standalone bootstrap,
  application configuration, router configuration, and Vitest test target.
- The explicit 2016 filename style retains familiar `*.component.*` names; it
  does not opt into old Angular architecture.
- Pin the framework/tooling versions established at Gate 0. Add compatible
  Material, CDK, FontAwesome wrapper/core/brands, then install within this workspace.
  Keep the resulting lockfile; subsequent verification uses `npm ci`.
- Do not install or upgrade dependencies inside the Angular 9 reference project.
- Copy `luis-hernandez/src/assets/` to the new `public/assets/` **after scaffolding**;
  copy `src/favicon.ico` to `public/favicon.ico`. Keep existing `/assets/...` URLs.
  Verify copied files byte-for-byte, including all documents and audio.
- Put the compiled theme in new `src/styles/`, not in public assets. Keep the
  copied legacy SCSS asset only for asset parity; do not compile both themes.
- Add `.node-version`; ignore `.angular/`, test reports, and generated screenshots
  as well as the already-ignored dependency/build directories.
- Run the empty scaffold's unit tests, production build, and localhost smoke
  check before porting content. Use a free explicit port; never terminate an
  unrelated listener or silently test another server.

**Gate 1:** New workspace installs, its generated tests pass, its production
build exits 0, and a real browser renders the scaffold on localhost.

## Phase 2 - Port Components, Content, and Routing

### 2.1 Standalone structure and typed content

- Bootstrap with `bootstrapApplication` and `provideRouter(routes)`.
- Port all five components, importing only the directives, Material modules, and
  FontAwesome support each consumes. Do not copy old NgModule wrappers or leave
  empty `AppModule` / `MaterialModule` stubs.
- Keep static arrays as readonly data; signals are not required for static text.
- Import JSON using TypeScript `resolveJsonModule` and a typed default import.
  Define a `Project` shape for title, image, paragraphs, and optional URLs.
  Remove the old `(data as any).default` pattern; do not use unsafe casts.
- For icons, prefer explicit typed icon definitions bound to `fa-icon` over
  global string-based registration. Preserve all currently used brand icons.

### 2.2 Correct Angular template syntax

Use Angular `@for` and `@if`, not the original plan's Svelte-style `{#each}`:

```html
@for (project of projects; track project.title) {
  <mat-card class="project-card">
    <img mat-card-image [src]="project.imgSrc" [alt]="project.title">
    <mat-card-title>{{ project.title }}</mat-card-title>
    <mat-card-content>
      @for (paragraph of project.paragraphs; track $index) {
        <p>{{ paragraph }}</p>
      }
    </mat-card-content>
  </mat-card>
}
```

This illustrates pairing, not the full template: also port conditional action
links. Titles are currently unique; test that invariant. Track skills by skill,
courses by course ID, strengths by title, and static paragraphs by `$index`.
Use `let i = $index` when displaying numbered strengths.

### 2.3 Material component API changes

- Replace obsolete `mat-chip-list` with `mat-chip-set` containing static
  `mat-chip` elements for skills/courses. Do not turn informational chips into
  selectable controls; remove obsolete `selected` inputs and preserve their
  visual emphasis through supported styling.
- Associate `mat-tab-nav-bar` with `[tabPanel]` and a `mat-tab-nav-panel` wrapping
  the router outlet. The app shell owns the panel; pass its typed reference into
  the header. Preserve active-link highlighting and keyboard navigation.
- Update card structure and spacing for current Material components. Do not rely
  on obsolete `.mat-card` internal classes or copy private MDC selectors.
- Give icon-only links accessible names; use meaningful project-image alt text.
  Keep tooltips, visible keyboard focus, and proper external-link attributes.

### 2.4 Zoneless and animations

- Keep the Angular 22 zoneless default. No legacy `core-js`, ZoneJS, or old
  `polyfills.ts` is needed for this site's verified browser features.
- The source registers `slideInStagger`, but its template bindings are commented
  out; the shell has no active route-animation binding. Do not introduce a new
  route animation merely because an unused helper exists.
- Do not port unused legacy animation definitions or add `provideAnimations()`.
  `@angular/animations` has been deprecated since v20.2; use CSS /
  `animate.enter` / `animate.leave` only if an actually active effect must be
  retained. Respect `prefers-reduced-motion` for any retained effect.
- Confirm expansions, tabs, tooltips, and route changes update correctly without
  ZoneJS. A browser interaction test, not compilation alone, proves this.

**Gate 2:** All content/counts, card pairings, links, routes, and interactive
controls match the baseline; component and router tests pass.

## Phase 3 - Restore the Dark Theme and Responsive Layout

- Use the **Material 2 compatibility Sass API shipped in Material 22.2.5** for
  this parity-first copy. This avoids an unapproved Material 3 visual redesign.
  Use `@use '@angular/material' as mat`, `mat.m2-define-palette`,
  `mat.m2-define-dark-theme`, and `mat.all-component-themes`; include `mat.core()`
  once. Recheck exports if updating packages.
- Preserve the actual legacy theme: red hue 800 primary, amber hue 100 accent,
  and yellow warn. Global CSS also uses red `#d50000`; these are distinct values,
  not interchangeable descriptions of the same theme.
- Modern Material 3 uses `mat.theme`; do not combine it with invented
  `MatDynamicColor` / `MatTheme` Sass APIs or apply two complete themes.
- Replace old tilde Sass imports with supported `@use` statements. The published
  package exports `mat.elevation(12)`, so preserve the hover shadow using that
  public mixin rather than an approximate hand-written shadow.
- Apply translucent card backgrounds, blur, typography, and hover effects through
  application-owned classes and supported Material overrides. Retain the
  background image and readable text, with a solid-color fallback behind blur.
- Reassess the blanket reset and fixed-height nested scrolling against Material's
  current layout. Change only what is needed to prevent clipped content and
  horizontal overflow; do not add a normalize dependency just for this upgrade.
- Keep the Material Icons font stylesheet while `mat-icon` ligatures are in use.
  A prebuilt theme is not an icon font and cannot replace that stylesheet.

**Gate 3:** Both routes are usable at 320x800, 768x1024, and 1440x900. No
horizontal document overflow, overlapping navigation, clipped cards, inaccessible
audio controls, or unreadable text. Review screenshots against the original.

## Phase 4 - Reproducible Build and Real Localhost Verification

### 4.1 Build only into the new workspace

- Keep the generated application builder and its default output layout:
  `dist/luis-hernandez-v22/browser/`. Confirm the actual path in `angular.json`.
- Use `<base href="/">` for this user-site root and localhost. Do not hardcode the
  production origin, which would send local asset requests to the live website.
- No SSR/server process is required for deployment; GitHub Pages serves static
  files. Keep production source maps disabled and hashed bundles enabled.
- Set explicit initial-bundle warning/error budgets of 1 MB / 2 MB, and component
  style warning/error budgets of 8 kB / 12 kB. Investigate exceeded budgets rather
  than increasing them just to obtain a green build.
- Add a `postbuild` script that copies the newly generated browser `index.html`
  to `404.html` **inside that output directory only**. Never reuse the old shell
  or touch the repository-root deployment during local verification.

### 4.2 Required scripts and commands

Implement these scripts in the new workspace:

| Script | Contract |
|--------|----------|
| `start` | Angular dev server bound to localhost, port 4200 |
| `test` | Generated Angular/Vitest test runner |
| `build` | `ng build --configuration production --base-href /`; npm runs `postbuild` |
| `preview` | Local `http-server` serving the generated browser directory on localhost:4300, caching disabled |
| `test:e2e` | Playwright browser checks against the production preview |
| `verify` | Non-watch unit tests, production build/postbuild, then browser checks |

Add `http-server` and `@playwright/test` as development dependencies for static
preview and repeatable browser verification. Use locally installed tools and the
lockfile, not global CLIs. Install Playwright Chromium when needed.

```bash
cd luis-hernandez-v22
npm ci
npm test -- --watch=false
npm run build
npm exec playwright install chromium
npm run test:e2e
```

Playwright owns the preview server through `webServer`, waits for readiness, and
does not reuse an unknown existing listener. Its tests must inspect the built
application, not just the dev server. The preview must serve the generated
`404.html` for missing routes, preserving the 404 status like GitHub Pages.

Separately start `npm start`, wait for compilation/readiness, request
`http://localhost:4200/`, and open a real browser to verify rendered navigation.
A successful `curl` response containing only `<app-root>` is not a rendering test.

Stop task-owned verification servers afterward. If the user requests a server
left running, report its exact URL and process ownership separately.

### 4.3 Mandatory acceptance matrix

| ID | Check | Pass criteria |
|----|-------|---------------|
| A1 | Reproducibility | `npm ci` exits 0; `npm ls` reports no invalid/missing peers; lockfile unchanged by clean install |
| A2 | Unit/template/router tests | Non-watch suite exits 0; tests cover both pages, root/unknown redirects, conditional actions, and expansion behavior |
| A3 | Production compilation | Build exits 0; strict TypeScript/templates pass; no budget warnings/errors or unresolved migration deprecations |
| A4 | Output integrity | Browser output contains shell, bundles, favicon, and assets; generated `404.html` is byte-identical to generated `index.html` |
| A5 | Dev localhost | localhost:4200 responds within 60 seconds and a browser renders both routes and navigation |
| A6 | Production localhost | localhost:4300 renders the production bundle, not a dev build; same routes and controls work |
| A7 | Card/content parity | Exactly 12 JSON + 7 static portfolio cards and 10 home cards; every JSON card matches source title, image URL, ordered paragraphs, and applicable action URLs within that same card |
| A8 | Images/assets | Every rendered image finishes with `naturalWidth > 0`; copied assets match source bytes; local image/background/font/favicon requests succeed with expected content types |
| A9 | Audio/PDF | All 3 MP3s return audio, load metadata, and play after a user gesture in Chromium; PDF returns application/pdf and starts with `%PDF-`; no HTML-shell fallback masquerading as media |
| A10 | Routing | Direct loads and refresh of /home and /portfolio work; back/forward and active navigation work; unknown route redirects home |
| A11 | Pages-style fallback | Static preview direct /portfolio returns the generated fallback (HTTP 404 is expected) and boots the correct page with working local bundles/assets; dev-server SPA fallback alone does not count |
| A12 | Runtime health | Zero uncaught page errors, unexpected console errors, or failed required first-party requests across both routes; no local assets fetched from the live production origin |
| A13 | Responsive/accessibility | Both routes pass the three viewport checks in Gate 3; keyboard navigation, named icon links, strengths, and tooltips work; counts remain 19 skills / 11 courses / 5 strengths |
| A14 | Preservation | Original Angular 9 source and deployed root artifacts match Phase 0 manifests; only the new workspace and directly related documentation changed |

Use browser assertions plus targeted unit tests, not screenshot impressions
alone. Wait for image loading and scroll containers before declaring asset
success. Verify outgoing external URLs without requiring third-party sites to
stay online. The retained Google font request is an external dependency; record
any failure explicitly and resolve icon rendering rather than silently ignoring
it. Do not accept broad console/network-error exclusions.

**Gate 4:** Every A1-A14 row passes with recorded command exits, URLs, browser
results, and screenshot evidence. Any failed or untested required row is a no-go.

## Phase 5 - Documentation, Handoff, and Optional Publication

1. Update the root README to distinguish the Angular 9 reference, the Angular 22
   workspace, verified commands, static browser output path, and Node pin.
2. Include a short new-workspace README with install, test, build, dev-server, and
   production-preview instructions. Do not claim Angular has built-in ESLint.
   Keep modern tests; do not delete the original project's test infrastructure.
3. Record verification outcomes and any limitations in the execution handoff;
   never mark planned acceptance checks as already passed.
4. Review the final diff and original-file manifests. Do not automatically commit,
   push, change Pages settings, or publish.

**Local completion gate:** Gates 0-4 pass, documentation is accurate, and the
upgrade remains isolated. The user can rebuild and run it using documented
commands. Publishing is a separate, explicitly authorized operation.

### Optional deployment, only after local acceptance and approval

- First inspect the repository's actual Pages publishing configuration. The old
  README's "gh-pages (or main)" is not evidence of which source is active.
- Prefer deploying only the verified browser artifact using Pages Actions if
  approved. If branch-root publication must be retained, stage only reviewed
  generated deployment files; never use root build output or blanket deletion.
- Preserve unrelated user-site project paths. Build once into `dist/`, then
  publish that tested artifact, including its generated `404.html`.
- A custom `404.html` boots the SPA but GitHub Pages still returns HTTP 404 for
  unmatched paths. It is not a rewrite to HTTP 200. If HTTP-200 deep links or SEO
  prerendering becomes a requirement, revisit routing/prerendering separately.
- Verify the live root, /home, /portfolio refresh, assets, audio, and PDF after
  publication. Local success does not prove live Pages configuration.
- Keep the previous deployment recoverable and restore only those deployment
  artifacts if live checks fail.

## Review Notes - Disposition

| Original concern | Resolution |
|------------------|------------|
| Inconsistent numbering | One Phase 0-5 sequence, each with a defined gate |
| Missing scaffold / conflicting folder names | Exact Phase 1 command; original remains `luis-hernandez/`, copy is `luis-hernandez-v22/` |
| Asset copy ordering | Copy only after scaffolding, into `public/assets/` |
| Assets supposedly "stay" after a rename | No rename or shared mutable source assets |
| Unverified TypeScript version | Compiler peer verified: >=6.0 <6.1 |
| Standalone animation providers | Source bindings are inactive; no unnecessary deprecated providers |
| Human prerequisites | Installed Node/npm/fnm verified; no repeated installation instructions |
| Deployment base URL | User-site root uses `/`; local requests stay local |
| Additional independent findings | Correct control flow, zoneless default, chips/tab-panel APIs, typed JSON/icons, supported Sass, retained icon font, isolated output, retained tests, and measurable browser gates |

## Research References

Checked on 2026-11-01. npm metadata and published package exports establish the
exact versions/APIs above; documentation on `main` can advance independently.
Revalidate against the selected packages when executing.

- [Angular version compatibility](https://angular.dev/reference/versions)
- [Angular CLI new options](https://angular.dev/cli/new)
- [Angular control flow](https://angular.dev/guide/templates/control-flow)
- [Zoneless Angular](https://angular.dev/guide/zoneless)
- [Legacy animation migration/deprecation](https://angular.dev/guide/animations/migration)
- [Angular testing with Vitest](https://angular.dev/guide/testing)
- [Material theming](https://material.angular.dev/guide/theming)
- [Material 2 compatibility guide](https://github.com/angular/components/blob/main/guides/material-2.md)
- [Current chips guide](https://github.com/angular/components/blob/main/src/material/chips/chips.md)
- [Tab navigation and panels](https://github.com/angular/components/blob/main/src/material/tabs/tabs.md)
- [Workspace/build configuration](https://angular.dev/reference/configs/workspace-config)
- [Angular deployment](https://angular.dev/tools/cli/deployment)
- [GitHub Pages custom 404 behavior](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site)
- [Angular core npm metadata](https://registry.npmjs.org/@angular/core/latest)
- [CLI npm metadata](https://registry.npmjs.org/@angular/cli/latest)
- [Compiler CLI npm metadata](https://registry.npmjs.org/@angular/compiler-cli/latest)
- [Material npm metadata](https://registry.npmjs.org/@angular/material/latest)
- [FontAwesome Angular npm metadata](https://registry.npmjs.org/@fortawesome/angular-fontawesome/latest)

Published Material 22.2.5 `_index.scss` exports the M2 compatibility functions,
`core`, `all-component-themes`, `elevation`, and component override mixins.
Published `@angular/build` 22.2.5 application schema defaults the browser output
subdirectory to `browser`; neither fact should be inferred from Angular 9 config.
