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
    expect(element.querySelector('.resume')?.getAttribute('href')).toBe(
      'https://drive.google.com/open?id=1lYAr1FHSi0Fh0gX4MhRFFBFPemlKZ56m',
    );
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
    expect(fixture.nativeElement.querySelectorAll('app-portfolio mat-card').length).toBe(19);
    expect(fixture.nativeElement.querySelector('a[aria-current="page"]')?.textContent).toContain(
      'Portfolio',
    );
  });
});
