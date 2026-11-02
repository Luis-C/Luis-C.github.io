import { TestBed } from '@angular/core/testing';
import { WatchfacesComponent } from './watchfaces.component';
import { watchfaces } from './watchfaces';

describe('WatchfacesComponent', () => {
  it('shows only the seven released watchfaces with brief descriptions', async () => {
    const fixture = TestBed.createComponent(WatchfacesComponent);
    await fixture.whenStable();
    const element: HTMLElement = fixture.nativeElement;
    expect(watchfaces.map((watchface) => watchface.name)).toEqual([
      'Ouroboros',
      'Errant',
      'TZOLTECH',
      'Fenestra',
      'Dimidi',
      'TZOLTECH LITE',
      'StatsRadar',
    ]);
    expect(new Set(watchfaces.map((watchface) => watchface.storeUrl)).size).toBe(7);
    expect(element.querySelectorAll('[data-watchface]').length).toBe(7);
    expect(element.textContent).not.toMatch(/beta/i);
    watchfaces.forEach((watchface) => {
      expect(watchface.description.length).toBeLessThanOrEqual(120);
      expect(watchface.storeUrl).toMatch(/^https:\/\/apps\.garmin\.com\/apps\/[a-f0-9-]+$/);
    });
  });

  it('pairs each product image, summary, and store link in the same card', async () => {
    const fixture = TestBed.createComponent(WatchfacesComponent);
    await fixture.whenStable();
    const element: HTMLElement = fixture.nativeElement;
    const cards = element.querySelectorAll('[data-watchface]');
    watchfaces.forEach((watchface, index) => {
      const card = cards[index];
      expect(card.querySelector('h2')?.textContent).toBe(watchface.name);
      expect(card.querySelector('p')?.textContent).toBe(watchface.description);
      expect(card.querySelector('img')?.getAttribute('src')).toBe(watchface.image);
      expect(card.querySelector('img')?.getAttribute('alt')).toBe(
        `${watchface.name} watchface preview`,
      );
      const link = card.querySelector('a');
      expect(link?.getAttribute('href')).toBe(watchface.storeUrl);
      expect(link?.getAttribute('aria-label')).toBe(`View ${watchface.name} on Connect IQ`);
      expect(link?.getAttribute('rel')).toBe('noopener noreferrer');
    });
  });
});
