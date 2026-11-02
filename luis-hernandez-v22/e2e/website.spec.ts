import { expect, test, type Locator, type Page, type Request } from '@playwright/test';
import { readFileSync, readdirSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import originalProjects from '../../luis-hernandez/src/app/pages/portfolio/portfolio.json';
import currentProjects from '../src/app/pages/portfolio/portfolio.json';
import type { Project } from '../src/app/pages/portfolio/portfolio.component';
import { watchfaces } from '../src/app/pages/watchfaces/watchfaces';
import {
  browserOutput,
  normalize,
  originalCards,
  originalDocument,
  originalList,
  originalSource,
} from './baseline';

test.beforeEach(async ({ page }) => {
  const failures: string[] = [];
  const mediaCancellations: Request[] = [];
  page.on('pageerror', (error) => failures.push(error.message));
  page.on('console', (message) => {
    const location = message.location().url;
    const expectedDocument404 =
      [
        'http://localhost:4300/home',
        'http://localhost:4300/portfolio',
        'http://localhost:4300/watchfaces',
        'http://localhost:4300/not-a-route',
      ].includes(location) &&
      message.text() ===
        'Failed to load resource: the server responded with a status of 404 (Not Found)';
    if (message.type() === 'error' && !expectedDocument404) {
      failures.push(`Console: ${message.text()}`);
    }
  });
  page.on('requestfailed', (request) => {
    const url = new URL(request.url());
    const metadataCancellation =
      request.resourceType() === 'media' &&
      request.failure()?.errorText === 'net::ERR_ABORTED' &&
      url.origin === 'http://localhost:4300' &&
      [
        '/assets/sounds/nnSample.mp3',
        '/assets/sounds/combinedSample.mp3',
        '/assets/sounds/midtermSample.mp3',
      ].includes(url.pathname);
    if (metadataCancellation) {
      mediaCancellations.push(request);
    } else {
      failures.push(`${request.url()}: ${request.failure()?.errorText}`);
    }
  });
  page.on('request', (request) => {
    const url = new URL(request.url());
    if (url.hostname === 'luis-c.github.io') failures.push(`Live-origin request: ${url}`);
  });
  page.on('response', (response) => {
    const request = response.request();
    if (new URL(response.url()).hostname === 'localhost' && response.status() >= 400) {
      if (request.resourceType() !== 'document' || response.status() !== 404) {
        failures.push(`HTTP ${response.status()}: ${response.url()}`);
      }
    }
  });
  test
    .info()
    .annotations.push({ type: 'runtime', description: 'Console/network/page errors asserted' });
  runtimeFailures.set(page, failures);
  expectedMediaCancellations.set(page, mediaCancellations);
});

const runtimeFailures = new WeakMap<Page, string[]>();
const expectedMediaCancellations = new WeakMap<Page, Request[]>();

test.afterEach(async ({ page }) => {
  // Chromium stops metadata range requests early. Only allow known audio with successful headers.
  for (const request of expectedMediaCancellations.get(page) ?? []) {
    const response = await request.response();
    expect(response?.ok(), `Cancelled metadata: ${request.url()}`).toBe(true);
    expect(response?.headers()['content-type']).toContain('audio/mpeg');
  }
  expect(runtimeFailures.get(page)).toEqual([]);
});

async function imagesLoaded(page: Page) {
  await expect
    .poll(() =>
      page
        .locator('main img')
        .evaluateAll((images) =>
          images.every(
            (image) =>
              image instanceof HTMLImageElement && image.complete && image.naturalWidth > 0,
          ),
        ),
    )
    .toBe(true);
  await page.evaluate(() => document.fonts.ready);
  await expect(page.locator('app-footer svg')).toHaveCount(4);
}

async function assertStaticCard(card: Locator, original: Element) {
  expect(normalize(await card.locator('mat-card-title').textContent())).toBe(
    normalize(original.querySelector('mat-card-title')?.textContent ?? ''),
  );
  expect(normalize(await card.locator('mat-card-content').textContent())).toBe(
    normalize(original.querySelector('mat-card-content')?.textContent ?? ''),
  );
  const image = original.querySelector('img');
  if (image) await expect(card.locator('img')).toHaveAttribute('src', image.getAttribute('src')!);
  expect(
    await card.locator('a').evaluateAll((links) => links.map((a) => a.getAttribute('href'))),
  ).toEqual(Array.from(original.querySelectorAll('a'), (a) => a.getAttribute('href')));
}

test('portfolio shows curated projects with paired content and hides retired entries', async ({
  page,
}) => {
  await page.goto('/');
  await page.getByRole('tab', { name: 'Portfolio', exact: true }).click();
  await expect(page.locator('app-portfolio mat-card')).toHaveCount(16);
  const cards = page.locator('[data-project]');
  const visibleProjects: readonly Project[] = currentProjects.filter(
    (project: Project) => !project.hidden,
  );
  await expect(cards).toHaveCount(9);
  await expect(cards.filter({ hasText: 'Code Art' })).toHaveCount(0);
  await expect(cards.first().locator('mat-card-title')).toHaveText('CaughtUp');
  await expect(cards.first()).toContainText('no longer involved with CaughtUp');
  await expect(cards.first().locator('a')).toHaveCount(0);
  for (const project of visibleProjects.filter((project) => project.title !== 'CaughtUp')) {
    expect(project).toEqual(originalProjects.find((original) => original.title === project.title));
  }
  for (const [index, project] of visibleProjects.entries()) {
    const card = cards.nth(index);
    await expect(card.locator('mat-card-title')).toHaveText(project.title);
    await expect(card.locator('img')).toHaveAttribute('src', project.imgSrc);
    await expect(card.locator('p')).toHaveText(project.paragraphs);
    expect(
      await card.locator('a').evaluateAll((links) => links.map((a) => a.getAttribute('href'))),
    ).toEqual([project.github, project.view].filter(Boolean));
  }
  const staticCards = originalCards('portfolio').filter((card) => !card.hasAttribute('*ngfor'));
  expect(staticCards).toHaveLength(7);
  for (const [index, original] of staticCards.entries()) {
    await assertStaticCard(page.locator('app-portfolio mat-card').nth(index + 9), original);
  }
  await imagesLoaded(page);
});

test('home preserves source text, skills, courses, strengths and interactive controls', async ({
  page,
}) => {
  await page.goto('/');
  const cards = page.locator('app-home mat-card');
  await expect(cards).toHaveCount(10);
  for (const index of [0, 3, 4, 6, 7, 8, 9]) {
    const original = originalCards('home')[index];
    if (index === 3) {
      expect(normalize(await cards.nth(index).locator('mat-card-content').textContent())).toBe(
        normalize(original.querySelector('mat-card-content')?.textContent ?? ''),
      );
    } else {
      await assertStaticCard(cards.nth(index), original);
    }
  }
  const skills = originalList('skills');
  await expect(page.locator('mat-chip-set[aria-label="Skills"] mat-chip')).toHaveCount(19);
  for (const [index, skill] of skills.entries()) {
    await expect(
      page.locator('mat-chip-set[aria-label="Skills"] mat-chip').nth(index),
    ).toHaveAttribute('aria-label', skill['skill']);
  }
  await expect(page.locator('.chip-text')).toHaveText(
    originalList('courses').map((course) => course['course']),
  );
  const strengths = originalList('strengths');
  for (const [index, strength] of strengths.entries()) {
    const header = page.getByRole('button', {
      name: `${index + 1} - ${strength['title']}`,
      exact: true,
    });
    await header.scrollIntoViewIfNeeded();
    await header.focus();
    await page.keyboard.press('Enter');
    await expect(header).toHaveAttribute('aria-expanded', 'true');
    await expect(
      page.locator('mat-expansion-panel').nth(index).locator('.mat-expansion-panel-body'),
    ).toHaveText(strength['description']);
  }
  const skill = page.locator('mat-chip-set[aria-label="Skills"] mat-chip').first();
  await skill.scrollIntoViewIfNeeded();
  await skill.hover();
  await expect(page.getByText('HTML', { exact: true })).toBeVisible();
  await imagesLoaded(page);
});

test('routing, keyboard tabs, refresh, history and Pages 404 shell work', async ({
  page,
  request,
}) => {
  await page.goto('/');
  await expect(page).toHaveURL('/home');
  const about = page.getByRole('tab', { name: 'About Me', exact: true });
  const portfolio = page.getByRole('tab', { name: 'Portfolio', exact: true });
  await about.focus();
  await page.keyboard.press('ArrowRight');
  await expect(portfolio).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL('/portfolio');
  await expect(portfolio).toHaveAttribute('aria-selected', 'true');
  await page.goBack();
  await expect(page).toHaveURL('/home');
  await page.goForward();
  await expect(page).toHaveURL('/portfolio');
  expect((await page.reload())?.status()).toBe(404);
  await expect(page.locator('app-portfolio mat-card')).toHaveCount(16);
  await imagesLoaded(page);
  expect((await request.get('/home')).status()).toBe(404);
  const missing = await page.goto('/not-a-route');
  expect(missing?.status()).toBe(404);
  await expect(page).toHaveURL('/home');
  await expect(page.locator('app-home mat-card')).toHaveCount(10);
  expect(readFileSync(join(browserOutput, '404.html'))).toEqual(
    readFileSync(join(browserOutput, 'index.html')),
  );
});

test('bundled media, background, favicon and all source assets are intact', async ({
  page,
  request,
}) => {
  function walk(directory: string): string[] {
    return readdirSync(directory, { withFileTypes: true }).flatMap((entry) =>
      entry.isDirectory() ? walk(join(directory, entry.name)) : [join(directory, entry.name)],
    );
  }
  const assets = walk(join(originalSource, 'assets'));
  expect(assets).toHaveLength(32);
  for (const asset of assets) {
    const path = relative(originalSource, asset);
    expect(readFileSync(resolve('public', path))).toEqual(readFileSync(asset));
    expect(readFileSync(join(browserOutput, path))).toEqual(readFileSync(asset));
  }
  const pdf = await request.get('/assets/documents/Resume_Online_Luis_H.pdf');
  expect(pdf.ok()).toBe(true);
  expect(pdf.headers()['content-type']).toContain('application/pdf');
  expect((await pdf.body()).subarray(0, 5).toString()).toBe('%PDF-');
  for (const [path, contentType] of [
    ['/assets/images/bg.jpg', 'image/jpeg'],
    ['/favicon.ico', 'image/x-icon'],
  ]) {
    const response = await request.get(path);
    expect(response.ok()).toBe(true);
    expect(response.headers()['content-type']).toContain(contentType);
  }
  expect(readFileSync('public/favicon.ico')).toEqual(
    readFileSync(join(originalSource, 'favicon.ico')),
  );
  await page.goto('/');
  await page.getByRole('tab', { name: 'Portfolio', exact: true }).click();
  const audio = page.locator('audio');
  await expect(audio).toHaveCount(3);
  for (let index = 0; index < 3; index++) {
    const player = audio.nth(index);
    const source = await player.locator('source').getAttribute('src');
    expect(source).toBeTruthy();
    const response = await request.get(`/${source}`);
    expect(response.ok()).toBe(true);
    expect(response.headers()['content-type']).toContain('audio/mpeg');
    await expect
      .poll(() =>
        player.evaluate(
          (element) =>
            element instanceof HTMLMediaElement && element.readyState >= 1 && element.duration > 0,
        ),
      )
      .toBe(true);
    await player.scrollIntoViewIfNeeded();
    await player.evaluate((element) => {
      if (element instanceof HTMLMediaElement) element.muted = true;
    });
    await player.click({ position: { x: 20, y: 25 } });
    await player.evaluate((element) => {
      if (!(element instanceof HTMLMediaElement)) throw new Error('Not an audio player');
      element.muted = true;
      return element.play();
    });
    await expect
      .poll(() =>
        player.evaluate(
          (element) =>
            element instanceof HTMLMediaElement && element.currentTime > 0 && !element.paused,
        ),
      )
      .toBe(true);
    await player.evaluate((element) => {
      if (element instanceof HTMLMediaElement) element.pause();
    });
  }
});

test('resume is hidden and footer destinations match the original source', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('link', { name: 'RESUME', exact: true })).toHaveCount(0);
  for (const [selector, file] of [['app-footer', 'footer/footer.component.html']]) {
    const original = Array.from(originalDocument(file).querySelectorAll('a[href]'), (link) =>
      link.getAttribute('href'),
    );
    const links = page.locator(`${selector} a[href]`);
    expect(
      await links.evaluateAll((elements) => elements.map((link) => link.getAttribute('href'))),
    ).toEqual(original);
  }
  for (const label of ['Instagram', 'LinkedIn', 'GitHub', 'Email']) {
    await expect(
      page.locator('app-footer').getByRole('link', { name: label, exact: true }),
    ).toBeVisible();
  }
});

test('watchfaces has seven released products, short summaries and direct store links', async ({
  page,
  request,
}) => {
  await page.goto('/');
  const tab = page.getByRole('tab', { name: 'Watchfaces', exact: true });
  await tab.click();
  await expect(page).toHaveURL('/watchfaces');
  await expect(tab).toHaveAttribute('aria-selected', 'true');
  await expect(page.getByRole('heading', { name: 'Watchfaces', exact: true })).toBeVisible();
  const cards = page.locator('[data-watchface]');
  await expect(cards).toHaveCount(7);
  await expect(cards.locator('h2')).toHaveText([
    'Ouroboros',
    'Errant',
    'TZOLTECH',
    'Fenestra',
    'Dimidi',
    'TZOLTECH LITE',
    'StatsRadar',
  ]);
  await expect(page.locator('app-watchfaces')).not.toContainText(/beta/i);
  for (const [index, watchface] of watchfaces.entries()) {
    const card = cards.nth(index);
    await expect(card.locator('p')).toHaveText(watchface.description);
    expect(watchface.description.length).toBeLessThanOrEqual(120);
    await expect(card.locator('img')).toHaveAttribute('src', watchface.image);
    const imageResponse = await request.get(`/${watchface.image}`);
    expect(imageResponse.ok()).toBe(true);
    expect(imageResponse.headers()['content-type']).toContain(
      watchface.image.endsWith('.jpg') ? 'image/jpeg' : 'image/png',
    );
    expect(await imageResponse.body()).toEqual(readFileSync(resolve('public', watchface.image)));
    const link = card.getByRole('link', {
      name: `View ${watchface.name} on Connect IQ`,
      exact: true,
    });
    await expect(link).toHaveAttribute('href', watchface.storeUrl);
    await expect(link).toHaveAttribute('target', '_blank');
    await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  }
  await imagesLoaded(page);
  await tab.focus();
  await page.keyboard.press('ArrowLeft');
  await expect(page.getByRole('tab', { name: 'Portfolio', exact: true })).toBeFocused();
  expect((await page.reload())?.status()).toBe(404);
  await expect(cards).toHaveCount(7);
  await expect(tab).toHaveAttribute('aria-selected', 'true');
  await imagesLoaded(page);
  await page.getByRole('tab', { name: 'About Me', exact: true }).click();
  await expect(page).toHaveURL('/home');
  await page.goBack();
  await expect(page).toHaveURL('/watchfaces');
  await expect(cards).toHaveCount(7);
});

for (const viewport of [
  { width: 320, height: 800 },
  { width: 768, height: 1024 },
  { width: 1440, height: 900 },
]) {
  for (const route of ['home', 'portfolio', 'watchfaces']) {
    test(`${route} is usable at ${viewport.width}x${viewport.height}`, async ({
      page,
    }, testInfo) => {
      await page.setViewportSize(viewport);
      await page.goto('/');
      if (route === 'portfolio')
        await page.getByRole('tab', { name: 'Portfolio', exact: true }).click();
      if (route === 'watchfaces')
        await page.getByRole('tab', { name: 'Watchfaces', exact: true }).click();
      for (const name of ['About Me', 'Portfolio', 'Watchfaces']) {
        await expect(page.getByRole('tab', { name, exact: true })).toBeInViewport();
      }
      await imagesLoaded(page);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(
        true,
      );
      const clipped = await page
        .locator('mat-card, mat-chip, audio, app-header a')
        .evaluateAll((elements) =>
          elements
            .filter((element) => {
              const box = element.getBoundingClientRect();
              return (
                box.width > 0 &&
                (box.left < 0 ||
                  box.right > innerWidth + 1 ||
                  element.scrollWidth > element.clientWidth + 1)
              );
            })
            .map((element) => `${element.tagName}: ${element.textContent?.trim().slice(0, 80)}`),
        );
      expect(clipped).toEqual([]);
      const cards = page.locator('main mat-card');
      await expect(cards).toHaveCount(route === 'home' ? 10 : route === 'portfolio' ? 16 : 7);
      await cards.last().scrollIntoViewIfNeeded();
      await expect(cards.last()).toBeInViewport();
      await page.evaluate(() => scrollTo(0, 0));
      const screenshot = testInfo.outputPath(`${route}-${viewport.width}.png`);
      await page.screenshot({ path: screenshot, fullPage: true });
      await testInfo.attach('responsive screenshot', {
        path: screenshot,
        contentType: 'image/png',
      });
      const style = await cards.first().evaluate((element) => ({
        background: getComputedStyle(element).backgroundColor,
        blur: getComputedStyle(element).backdropFilter,
      }));
      const alpha = /^rgba\(24, 28, 36, ([\d.]+)\)$/.exec(style.background)?.[1];
      expect(Number(alpha)).toBeCloseTo(0.82, 2);
      expect(style.blur).toBe('blur(12px)');
      if (route === 'home') {
        expect(
          await page
            .locator('mat-chip')
            .first()
            .evaluate((element) =>
              getComputedStyle(element)
                .getPropertyValue('--mat-chip-elevated-container-color')
                .trim(),
            ),
        ).toBe('#ffecb3');
      }
    });
  }
}
