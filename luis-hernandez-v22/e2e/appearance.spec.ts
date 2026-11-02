import { expect, test, type Page } from '@playwright/test';

async function openHome(page: Page) {
  await page.goto('/');
  await expect(page.locator('app-home mat-card')).toHaveCount(10);
}

async function surfaces(page: Page) {
  return page.locator('.card, .item, .glass-surface').evaluateAll((elements) =>
    elements.map((element) => {
      const style = getComputedStyle(element);
      return {
        background: style.backgroundColor,
        blur: style.backdropFilter,
        border: style.borderBottomColor,
      };
    }),
  );
}

test('glass surfaces stay readable even over a white backdrop, without external fonts', async ({
  page,
}) => {
  const externalRequests: string[] = [];
  const errors: string[] = [];
  page.on('request', (request) => {
    if (new URL(request.url()).hostname !== 'localhost') externalRequests.push(request.url());
  });
  page.on('pageerror', (error) => errors.push(error.message));
  await openHome(page);
  expect(externalRequests).toEqual([]);
  await expect(page.locator('app-footer svg')).toHaveCount(4);
  expect(
    await page.locator('body').evaluate((element) => getComputedStyle(element).backgroundImage),
  ).not.toContain('url(');
  const contrast = await page
    .locator('mat-card')
    .first()
    .evaluate((element) => {
      const parse = (color: string) => {
        const values = color.match(/[\d.]+/g)?.map(Number);
        if (!values || values.length < 3) throw new Error(`Unsupported computed color: ${color}`);
        return [values[0], values[1], values[2], values[3] ?? 1];
      };
      const over = (foreground: number[], background: number[]) =>
        foreground
          .slice(0, 3)
          .map((value, index) => value * foreground[3] + background[index] * (1 - foreground[3]));
      const luminance = (color: number[]) =>
        color
          .map((value) => {
            const s = value / 255;
            return s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
          })
          .reduce((sum, value, index) => sum + value * [0.2126, 0.7152, 0.0722][index], 0);
      // White is the brightest possible backdrop, so this bounds every gradient/photo beneath glass.
      const background = over(parse(getComputedStyle(element).backgroundColor), [255, 255, 255]);
      return ['mat-card-title', 'mat-card-subtitle', 'mat-card-content'].map((selector) => {
        const text = element.querySelector(selector);
        if (!text) throw new Error(`Missing contrast sample: ${selector}`);
        const foreground = over(parse(getComputedStyle(text).color), background);
        return (luminance(foreground) + 0.05) / (luminance(background) + 0.05);
      });
    });
  for (const ratio of contrast) expect(ratio).toBeGreaterThanOrEqual(4.5);
  for (const surface of await surfaces(page)) {
    expect(surface.background).toBe('rgba(24, 28, 36, 0.82)');
    expect(surface.blur).toBe('blur(12px)');
  }
  await page.getByRole('tab', { name: 'Watchfaces', exact: true }).click();
  await expect(page.locator('[data-watchface]')).toHaveCount(7);
  expect(errors).toEqual([]);
  expect(externalRequests).toEqual([]);
});

test('opaque baseline is used when the blur enhancement is unavailable', async ({ page }) => {
  await openHome(page);
  const removed = await page.evaluate(() => {
    let removed = 0;
    for (const sheet of document.styleSheets) {
      for (let index = sheet.cssRules.length - 1; index >= 0; index--) {
        const rule = sheet.cssRules[index];
        if (rule instanceof CSSSupportsRule && rule.conditionText.includes('backdrop-filter')) {
          sheet.deleteRule(index);
          removed++;
        }
      }
    }
    return removed;
  });
  expect(removed).toBeGreaterThan(0);
  for (const surface of await surfaces(page)) {
    expect(surface.background).toBe('rgb(24, 28, 36)');
    expect(surface.blur).toBe('none');
  }
});

test('increased contrast removes transparency and blur from all surfaces', async ({ page }) => {
  await page.emulateMedia({ contrast: 'more' });
  await openHome(page);
  expect(await page.evaluate(() => matchMedia('(prefers-contrast: more)').matches)).toBe(true);
  await page.getByRole('tab', { name: 'Watchfaces', exact: true }).click();
  await expect(page.locator('[data-watchface]')).toHaveCount(7);
  for (const surface of await surfaces(page)) {
    expect(surface.background).toBe('rgb(24, 28, 36)');
    expect(surface.blur).toBe('none');
  }
});

test('reduced transparency independently selects the opaque fallback', async ({
  page,
  context,
  browserName,
}) => {
  test.skip(
    browserName !== 'chromium',
    'Playwright exposes this experimental media emulation through Chromium CDP only',
  );
  const session = await context.newCDPSession(page);
  await session.send('Emulation.setEmulatedMedia', {
    features: [{ name: 'prefers-reduced-transparency', value: 'reduce' }],
  });
  await openHome(page);
  expect(
    await page.evaluate(() => matchMedia('(prefers-reduced-transparency: reduce)').matches),
  ).toBe(true);
  for (const surface of await surfaces(page)) {
    expect(surface.background).toBe('rgb(24, 28, 36)');
    expect(surface.blur).toBe('none');
  }
});

test('forced colors preserves visible surfaces and active navigation', async ({
  page,
  browserName,
}) => {
  test.skip(browserName !== 'chromium', 'Use Chromium for OS forced-color emulation');
  await page.emulateMedia({ forcedColors: 'active' });
  await openHome(page);
  expect(await page.evaluate(() => matchMedia('(forced-colors: active)').matches)).toBe(true);
  expect(
    await page.locator('body').evaluate((element) => getComputedStyle(element).backgroundImage),
  ).toBe('none');
  for (const surface of await surfaces(page)) expect(surface.blur).toBe('none');
  const active = page.locator('.nav-link[aria-current="page"]');
  expect(await active.evaluate((element) => getComputedStyle(element).outlineStyle)).toBe('solid');
});

test('keyboard skip link, focus feedback, touch targets and reduced motion work', async ({
  page,
  browserName,
}) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await openHome(page);
  await page.keyboard.press(browserName === 'webkit' ? 'Alt+Tab' : 'Tab');
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('main')).toBeFocused();
  await page.getByRole('tab', { name: 'Watchfaces', exact: true }).click();
  const link = page.locator('[data-watchface] a').first();
  await link.focus();
  expect(
    await page
      .locator('[data-watchface]')
      .first()
      .evaluate((element) => getComputedStyle(element).outlineStyle),
  ).toBe('solid');
  const smallTargets = await page
    .locator('.nav-link, .social-links a, [data-watchface] a')
    .evaluateAll((elements) =>
      elements
        .filter((element) => {
          const box = element.getBoundingClientRect();
          return box.width < 24 || box.height < 24;
        })
        .map((element) => element.textContent),
    );
  expect(smallTargets).toEqual([]);
  const duration = await link.evaluate((element) => getComputedStyle(element).transitionDuration);
  expect(duration.split(',').every((value) => parseFloat(value) <= 0.00001)).toBe(true);
});

test('all pages reflow at 200 percent zoom and keep mobile tabs visible', async ({
  page,
}, testInfo) => {
  for (const zoom of [1, 2]) {
    await page.setViewportSize({ width: zoom === 1 ? 320 : 1280, height: 900 });
    await openHome(page);
    await page.evaluate((value) => {
      document.body.style.zoom = String(value);
    }, zoom);
    for (const [name, selector, count] of [
      ['About Me', 'app-home mat-card', 10],
      ['Portfolio', 'app-portfolio mat-card', 16],
      ['Watchfaces', '[data-watchface]', 7],
    ] as const) {
      await page.getByRole('tab', { name, exact: true }).click();
      await expect(page.locator(selector)).toHaveCount(count);
      for (const label of ['About Me', 'Portfolio', 'Watchfaces']) {
        await expect(page.getByRole('tab', { name: label, exact: true })).toBeInViewport();
      }
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(
        true,
      );
      await page.locator(selector).last().scrollIntoViewIfNeeded();
      await expect(page.locator(selector).last()).toBeInViewport();
      await page.evaluate(() => scrollTo(0, 0));
      await page.screenshot({ path: testInfo.outputPath(`${name}-${zoom}x.png`), fullPage: true });
    }
  }
});
