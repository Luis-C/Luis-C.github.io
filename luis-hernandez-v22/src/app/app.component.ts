import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  imports: [RouterOutlet, MatTabsModule, HeaderComponent, FooterComponent],
  selector: 'app-root',
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
})
export class App {}
