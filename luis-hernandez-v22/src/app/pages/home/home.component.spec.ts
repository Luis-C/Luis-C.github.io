import { TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  it('preserves informational content and unique tracking keys', async () => {
    const fixture = TestBed.createComponent(HomeComponent);
    await fixture.whenStable();
    const home = fixture.componentInstance;
    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelectorAll('mat-card').length).toBe(10);
    expect(home.skills.length).toBe(19);
    expect(home.courses.length).toBe(11);
    expect(home.strengths.length).toBe(5);
    expect(new Set(home.skills.map((s) => s.skill)).size).toBe(19);
    expect(new Set(home.courses.map((c) => c.id)).size).toBe(11);
    expect(new Set(home.strengths.map((s) => s.title)).size).toBe(5);
    expect(element.querySelectorAll('mat-chip').length).toBe(30);
    expect(element.querySelector('mat-chip-listbox')).toBeNull();
    expect(element.querySelectorAll('fa-icon svg').length).toBe(5);
  });

  it('expands strengths without ZoneJS', async () => {
    const fixture = TestBed.createComponent(HomeComponent);
    await fixture.whenStable();
    const element: HTMLElement = fixture.nativeElement;
    const header = element.querySelector<HTMLElement>('mat-expansion-panel-header');
    expect(header?.getAttribute('aria-expanded')).toBe('false');
    header?.click();
    await fixture.whenStable();
    expect(header?.getAttribute('aria-expanded')).toBe('true');
    expect(element.textContent).toContain(fixture.componentInstance.strengths[0].description);
  });
});
