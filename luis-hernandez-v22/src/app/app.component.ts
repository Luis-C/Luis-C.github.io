import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FEATURES, HOVER_EFFECTS_BODY_CLASS } from './features';

@Component({
  imports: [RouterOutlet, MatTabsModule, HeaderComponent, FooterComponent],
  selector: 'app-root',
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
})
export class App implements OnInit, OnDestroy {
  ngOnInit() {
    document.body.classList.toggle(HOVER_EFFECTS_BODY_CLASS, FEATURES.hoverEffects);
  }

  ngOnDestroy() {
    document.body.classList.remove(HOVER_EFFECTS_BODY_CLASS);
  }
}
