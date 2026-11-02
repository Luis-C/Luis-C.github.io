import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, FaIconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly instagram = faInstagram;
  readonly linkedin = faLinkedin;
  readonly github = faGithub;
}
