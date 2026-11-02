import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatTabsModule, MatTabNavPanel } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, MatTabsModule, MatToolbarModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly tabPanel = input.required<MatTabNavPanel>();
  readonly navLinks = [
    { path: '/home', label: 'About Me' },
    { path: '/portfolio', label: 'Portfolio' },
  ];
}
