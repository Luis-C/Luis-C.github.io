# Angular Upgrade Plan: Angular 9 → Angular 22 (Latest)

## Current State

| Aspect | Value |
|--------|-------|
| Angular | 9.1.7 |
| Angular CLI | 9.1.6 |
| TypeScript | 3.7.5 |
| Material | 9.2.3 |
| Node.js required | 12.x (old) |

## Target State

| Aspect | Value |
|--------|-------|
| Angular | **22.x** (latest stable, e.g. 22.3.x) |
| Angular CLI | **22.x** |
| TypeScript | **5.7.x** |
| Material | **22.x** (must match Angular major) |
| Node.js required | **20.19+ / 22.x** (higher minimum than Angular 19) |

---

## What This Website Does

A single-page portfolio/resume site with:
- **Header** — Angular Material toolbar with navigation (About Me / Portfolio)
- **Home page** — Profile card, skill chips, CliftonStrengths accordion, bio text, course chips, and interest cards (CyberLeaders, Language, Drawing, Dragon Boat)
- **Portfolio page** — Grid of project cards (12+ projects) with images, descriptions, and GitHub/View links, plus 3 hardcoded cards (Arduino Hackathon, GenCyber TA, Game Dev, Music, L2Ork, STEM) and audio players
- **Footer** — Social links (Instagram, LinkedIn, GitHub, Email)
- **Styling** — Dark theme (red #d50000 / amber accent), backdrop-filter blur, Material cards, FontAwesome icons, background image

**Hard requirement:** Images and their descriptions must stay together — the card layout is the core UX.

---

## Pre-Upgrade: Install Required Software

Before starting, install these tools on your machine. This is the only step you need to do before the technical work.

### 1. Install Node.js via fnm (Fast Node Manager)

**Why fnm?** fnm (Fast Node Manager) is built in Rust and is significantly faster than the original nvm (Node Version Manager). It supports switching Node versions per-project via `.node-version` files, which is ideal for this project.

**Installation:**

```bash
# Install fnm (requires curl)
curl -fsSL https://fnm.vercel.app/install | bash

# Restart your shell or run:
source ~/.bashrc   # for bash
# or
source ~/.zshrc    # for zsh

# Install Node.js 22 (LTS, required by Angular 22)
fnm install 22
fnm default 22

# Verify installation
node --version    # should show v22.x.x
npm --version     # should show 10.x.x
```

### 2. Verify npm

npm ships with Node.js — no separate installation needed. Verify it works:

```bash
npm --version
```

### 3. Git (usually pre-installed on macOS)

Verify Git is available:

```bash
git --version
```

---

## Upgrade Phases

### Phase 0 — Archive Original Source (Zero Risk)

Rename the existing source folder to preserve it as a reference:

```
luis-hernandez/          →  luis-hernandez-v9/    (old Angular 9 source)
```

Then create a fresh project directory for the upgrade:

```
luis-hernandez-v22/      (new Angular 22 source — built from scratch or migrated)
```

**What gets moved:**
- `luis-hernandez/package.json` → `luis-hernandez-v9/package.json`
- `luis-hernandez/angular.json` → `luis-hernandez-v9/angular.json`
- `luis-hernandez/src/` → `luis-hernandez-v9/src/`
- `luis-hernandez/e2e/` → `luis-hernandez-v9/e2e/`
- `luis-hernendez/browserslist` → `luis-hernandez-v9/browserslist`
- `luis-hernandez/debug.log` → `luis-hernandez-v9/debug.log`

**What stays in `luis-hernandez/` (shared):**
- `src/assets/images/` — all project images (copied to new project)
- `src/assets/sounds/` — all audio files (copied to new project)
- `src/assets/documents/` — resume PDF (copied to new project)
- `src/favicon.ico` — favicon (copied to new project)

The archived folder serves as a full reference for original styling, content, and behavior. It is **not** built or deployed.

**After Phase 0 completes:**
- `git add . && git commit -m "archive: rename luis-hernandez → luis-hernandez-v9"`
- A fresh `luis-hernandez/` folder is created for the upgrade

---

### Phase 1 — Codebase Modernization (Medium Risk)

#### 2.1 — Standalone Components (Angular 14+)
- Convert all 5 components to standalone: `AppComponent`, `HeaderComponent`, `FooterComponent`, `PortfolioComponent`, `HomeComponent`
- Remove `AppModule` (or convert to empty stub)
- Remove `AppRoutingModule` → use `provideRouter()` in `main.ts`
- Remove `MaterialModule` → import Material modules directly in each component
- Remove `FontawesomeModule` → configure library in component `providers` or root

**Impact:** This is the cleanest change possible — just move imports from `@NgModule` declarations to `standalone: true` + `imports` arrays on each `@Component`.

#### 2.2 — Control Flow (Angular 17+)
- Replace `*ngFor` → `{#each ...}`
- Replace `*ngIf` → `{#if ...}`
- Replace `*ngFor ... let i` → track by index in `{#each}`

**Files affected:**
- `portfolio.component.html` — multiple `*ngFor` and `*ngIf`
- `home.component.html` — `*ngFor` for skills, courses, strengths

#### 2.3 — Signals (Optional, Low Priority)
- The site has no reactive data flows that benefit from signals
- `projects` is a static array from a JSON file — no need to convert to `signal()`
- **Skip signals** — keep it simple

#### 2.4 — RxJS 7+
- No RxJS operators used explicitly (no `.pipe()`, `.map()`, etc.)
- **No changes needed**

#### 2.5 — Zoneless / Deferrable Views (Angular 17+)
- Not required. Keep zone.js for simplicity.

---

### Phase 2 — Styling & Theming (Low Risk)

#### 3.1 — Angular Material Theming API (v15+)
- Material 15+ removed the legacy `@include mat-core()` mixin. The dark theme API changed:
  - Old: `mat-dark-theme($primary, $accent, $warn)`
  - New: `angular-material-theme()` with `MatDynamicColor` tokens
  - The `mat-palette()` and `mat-typography-config()` APIs are deprecated
- **Action:** Rewrite `my-dark-theme.scss` using the new Angular Material v15+ theme API
  - Use `define-light-theme()` / `define-dark-theme()` functions
  - Use `MatTheme` interface

#### 3.2 — SCSS Deprecations
- `$color` named argument in `rgba()` → just use `rgba($color, $alpha)` (already correct)
- `backdrop-filter` — widely supported in modern browsers, no change needed
- `mat-elevation()` mixin → deprecated in Material 15+. Replace with CSS `box-shadow` directly.
  - `@include mat-elevation(12)` → `box-shadow: 0 12px 8px -6px rgba(0,0,0,0.2), 0 12px 10px -6px rgba(0,0,0,0.12);`

#### 3.3 — Global Reset
- The full-element reset (html, body, div, span, ...) is outdated but harmless
- Could be replaced with a modern `@import "modern-normalize"` or just `* { box-sizing: border-box; }`
- **Keep as-is** for lowest change

#### 3.4 — Material Icon Font
- `<link href="https://fonts.googleapis.com/icon?family=Material+Icons">` — still works
- Material 15+ recommends `@import '@angular/material/prebuilt-themes/...'` instead
- **Keep as-is** for now (works fine)

---

### Phase 3 — Routing (Low Risk)

- `RouterModule.forRoot(routes)` → `provideRouter(routes)` in `main.ts`
- `routerLinkActive` → `RouterLinkActive` directive still works
- `routerLink` directive still works
- Route animations (`routeAnimations` trigger) — Angular animations API is stable, no changes

---

### Phase 4 — Build & Deployment (Low Risk)

- `ng build --prod` → `ng build` (the `--prod` flag was removed in Angular 12+)
- Output path: `--outputPath=../` (write to repo root)
- `--baseHref="https://luis-c.github.io/"` (unchanged)
- `404.html` SPA fallback (unchanged)
- `es5BrowserSupport: true` → removed in Angular 12+ (ES2020+ output only)
- Source maps, bundle budgets, build optimizer — all still supported

---

### Phase 5 — Remove Legacy / Unused (Low Risk)

Remove these entirely:
- `e2e/` — Protractor is dead (replaced by Cypress/Playwright, not worth reviving for a static portfolio)
- `karma.conf.js`, `test.ts`, `tsconfig.spec.json`, `tslint.json` — testing infrastructure
- `codelyzer` — no longer needed (Angular 15+ has built-in linting)
- `tslint.json` — replaced by ESLint (not configuring for this project)
- `protractor` dev dependency
- `jasmine-core`, `jasmine-spec-reporter`, `karma*`, `protractor` — all dev deps
- `@angular/language-service` — deprecated, replaced by language-server in VS Code extension

---

## Files That Will Change

### Source files (in `luis-hernandez/src/`):

| File | What Changes |
|------|-------------|
| `package.json` | All Angular/Material/FontAwesome deps upgraded; remove test/lint deps |
| `angular.json` | Remove `es5BrowserSupport`, update schema, remove test/e2e builders |
| `app/app.module.ts` | Remove or convert to empty (standalone) |
| `app/app.component.ts` | Convert to standalone; move imports to component `imports` |
| `app/app.component.html` | No template changes |
| `app/app-routing.module.ts` | Remove; use `provideRouter()` in `main.ts` |
| `app/route-animations.ts` | No changes (animations API is stable) |
| `app/header/header.component.ts` | Convert to standalone; import Material modules directly |
| `app/header/header.component.html` | Replace `*ngFor`/`*ngIf` with new control flow |
| `app/footer/footer.component.ts` | Convert to standalone; import Material modules directly |
| `app/footer/footer.component.html` | Replace `*ngIf` with new control flow |
| `app/pages/home/home.component.ts` | Convert to standalone |
| `app/pages/home/home.component.html` | Replace `*ngFor`/`*ngIf` with new control flow |
| `app/pages/portfolio/portfolio.component.ts` | Convert to standalone |
| `app/pages/portfolio/portfolio.component.html` | Replace `*ngFor`/`*ngIf` with new control flow; fix `portfolio.json` import |
| `app/material/material.module.ts` | **Delete** — import Material modules directly in components |
| `app/fontawesome/fontawesome.module.ts` | **Delete** — configure FontAwesome in components directly |
| `styles.scss` | Update Material theme API, replace `mat-elevation()` with CSS `box-shadow` |
| `main.ts` | Add `provideRouter()`, update bootstrap to standalone |
| `polyfills.ts` | **Delete** (Angular 17+ requires no polyfills for modern browsers) |
| `environments/environment.ts` | No changes |
| `environments/environment.prod.ts` | No changes |
| `assets/themes/my-dark-theme.scss` | Rewrite with new Material v15+ theme API |
| `index.html` | Minor: remove Material Icons font link (Material theme includes it) |

### Files to delete:

| File | Reason |
|------|--------|
| `e2e/protractor.conf.js` | Protractor deprecated |
| `e2e/tsconfig.e2e.json` | E2E removed |
| `e2e/src/app.e2e-spec.ts` | E2E removed |
| `e2e/src/app.po.ts` | E2E removed |
| `src/karma.conf.js` | Testing removed |
| `src/test.ts` | Testing removed |
| `src/tsconfig.spec.json` | Testing removed |
| `src/tslint.json` | ESLint replaces; skip for this project |
| `luis-hernandez/tslint.json` | Same |
| `luis-hernandez/browserslist` | Update to modern browsers |
| `luis-hernandez/debug.log` | Debug artifact |

---

## Estimated Effort

| Phase | Effort | Risk |
|-------|--------|------|
| 1 — Scaffold & Deps | 2-4 hours | High (may need troubleshooting) |
| 2 — Code Modernization | 3-5 hours | Medium (control flow, standalone) |
| 3 — Styling | 2-3 hours | Low (Material theming API) |
| 4 — Routing | 1 hour | Low |
| 5 — Build & Deploy | 1 hour | Low |
| 6 — Cleanup | 30 min | Low |

**Total estimated: 9-14 hours**

---

## Risk Mitigation

1. **Create a branch** (`upgrade-angular-22`) before starting
2. **Commit current state** — `git add . && git commit -m "pre-upgrade snapshot"`
3. **Run Phase 1 first**, verify `ng serve` works before proceeding
4. **Test in browser** after each phase
5. **Keep a backup** of `portfolio.json` — the `* as data` import pattern may need adjustment

---

## Key Breaking Changes to Watch

| Angular Version | Breaking Change | Impact |
|-----------------|----------------|--------|
| 12 | `--prod` flag removed | Build command change |
| 13 | `ɵ` private API changes | Unlikely to affect |
| 14 | Standalone components (migration schematic) | Phase 2 |
| 15 | Material theming API overhaul | Phase 3 |
| 15 | `NgFor`/`NgIf` directives removed (replaced by control flow) | Phase 2 |
| 16 | `forms` module restructured | No forms used |
| 17 | `zone.js@~0.15.x` API change | Polyfills update |
| 17 | `provideZoneJsDetection()` | main.ts update |
| 17 | `ngDoCheck`/`ngDoBootstrap` lifecycle | Not used |
| 18 | `animations` package moved to peer dep | Already using `BrowserAnimationsModule` |
| 20 | `@angular/localize` changes | Not used |
| 21 | `@angular/localize` changes | Not used |
| 22 | `@angular/localize` changes | Not used |

---

## Post-Upgrade Checklist

- [ ] `ng serve` works locally
- [ ] `ng build` produces output in repo root
- [ ] GitHub Pages deployment works (push to branch)
- [ ] SPA routing works on refresh (404.html)
- [ ] All portfolio cards render with images
- [ ] Audio players work
- [ ] Navigation between Home and Portfolio works
- [ ] Route animations still function
- [ ] Dark theme renders correctly
- [ ] FontAwesome icons render
- [ ] Responsive layout works on mobile
- [ ] Resume PDF link works
- [ ] Social links in footer work
