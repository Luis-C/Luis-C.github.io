import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  workers: 2,
  forbidOnly: true,
  retries: 0,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: 'http://localhost:4300',
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
    { name: 'firefox', testMatch: '**/appearance.spec.ts', use: { browserName: 'firefox' } },
    { name: 'webkit', testMatch: '**/appearance.spec.ts', use: { browserName: 'webkit' } },
  ],
  webServer: {
    command: 'npm run preview',
    url: 'http://localhost:4300/',
    reuseExistingServer: false,
    timeout: 60_000,
  },
});
