import { TestBed } from '@angular/core/testing';
import { PortfolioComponent } from './portfolio.component';

describe('PortfolioComponent', () => {
  it('keeps every image, paragraph and applicable action within its project card', async () => {
    const fixture = TestBed.createComponent(PortfolioComponent);
    await fixture.whenStable();
    const element: HTMLElement = fixture.nativeElement;
    const projects = fixture.componentInstance.projects;
    const cards = element.querySelectorAll('[data-project]');
    expect(projects.length).toBe(12);
    expect(new Set(projects.map((p) => p.title)).size).toBe(12);
    expect(element.querySelectorAll('mat-card').length).toBe(19);
    expect(element.querySelectorAll('audio').length).toBe(3);
    projects.forEach((project, index) => {
      const card = cards[index];
      expect(card.querySelector('mat-card-title')?.textContent?.trim()).toBe(project.title);
      expect(card.querySelector('img')?.getAttribute('src')).toBe(project.imgSrc);
      expect(Array.from(card.querySelectorAll('p'), (p) => p.textContent?.trim())).toEqual(
        project.paragraphs,
      );
      expect(Array.from(card.querySelectorAll('a'), (a) => a.getAttribute('href'))).toEqual(
        [project.github, project.view].filter((url) => url !== undefined),
      );
    });
    expect(cards[0].querySelectorAll('a').length).toBe(0);
  });
});
