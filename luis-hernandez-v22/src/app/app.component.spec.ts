import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { App } from './app.component';
import { routes } from './app.routes';

describe('App routing and shell', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }),
  );

  it('associates navigation with the routed panel and preserves shell links', async () => {
    const fixture = TestBed.createComponent(App);
    await TestBed.inject(Router).navigateByUrl('/home');
    await fixture.whenStable();
    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelector('mat-tab-nav-panel')).toBeTruthy();
    expect(element.querySelectorAll('app-footer a').length).toBe(4);
    expect(element.querySelector('.resume')).toBeNull();
    expect(element.querySelector('app-header')?.textContent).not.toContain('RESUME');
    expect(element.querySelector('a[aria-current="page"]')?.textContent).toContain('About Me');
  });

  for (const path of ['/', '/not-a-route']) {
    it(`redirects ${path} to home`, async () => {
      const fixture = TestBed.createComponent(App);
      const router = TestBed.inject(Router);
      await router.navigateByUrl(path);
      await fixture.whenStable();
      expect(router.url).toBe('/home');
      expect(fixture.nativeElement.querySelectorAll('app-home mat-card').length).toBe(10);
    });
  }

  it('navigates to the portfolio', async () => {
    const fixture = TestBed.createComponent(App);
    await TestBed.inject(Router).navigateByUrl('/portfolio');
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelectorAll('app-portfolio mat-card').length).toBe(16);
    expect(fixture.nativeElement.querySelector('a[aria-current="page"]')?.textContent).toContain(
      'Portfolio',
    );
  });

  it('navigates to watchfaces and highlights its tab', async () => {
    const fixture = TestBed.createComponent(App);
    await TestBed.inject(Router).navigateByUrl('/watchfaces');
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelectorAll('[data-watchface]').length).toBe(7);
    expect(fixture.nativeElement.querySelector('a[aria-current="page"]')?.textContent).toContain(
      'Watchfaces',
    );
  });
});
