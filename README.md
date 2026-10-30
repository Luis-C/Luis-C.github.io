# [Personal Website](https://luis-c.github.io)

This is the repository for my personal website, a single-page Angular application.

## Tech Stack

| Technology | Version |
|------------|---------|
| Angular | 9.1.7 |
| Angular CLI | 9.1.6 |
| Angular Material | 9.2.3 |
| TypeScript | 3.7.5 |
| RxJS | 6.5.5 |

## Project Structure

```
├── 404.html                 # SPA routing fallback for GitHub Pages
├── index.html               # SPA routing fallback (copy of 404.html)
├── luis-hernandez/          # Angular source project
│   ├── angular.json         # Angular CLI configuration
│   ├── package.json         # Dependencies and scripts
│   ├── src/                 # Application source code
│   │   ├── app/             # Components (header, footer, pages)
│   │   ├── assets/          # Static files (images, sounds, documents)
│   │   └── environments/    # Environment configs
│   └── e2e/                 # Protractor end-to-end tests
├── assets/                  # Deployed assets (mirror of src/assets)
└── [hashed JS/CSS files]    # Production build output
```

## Building

From the `luis-hernandez/` directory:

```bash
ng build --prod --outputPath=../ --baseHref="https://luis-c.github.io/"
```

This outputs hashed JS/CSS bundles and a single `index.html` to the repository root.

## Deploying to GitHub Pages

GitHub Pages serves from the `gh-pages` (or `main`) branch root for personal
sites, so the build output is placed directly at the repository root:

1. Run the production build as shown above (`--outputPath=../` writes to the repo root).
2. Commit `index.html` and `404.html` (a copy of `index.html` for SPA re-route support).
3. Push to the `gh-pages` (or `main`) branch.

The `404.html` file is the classic Angular-on-GitHub-Pages trick: GitHub Pages
falls back to `404.html` for missing routes, so serving the Angular shell from
it keeps client-side routing working on page refresh.

## Notes

- This project uses Angular 9, which is end-of-life. Consider upgrading if you plan to make significant changes.
- The build output (hashed JS/CSS bundles) is committed directly to the repository root for GitHub Pages deployment. 
