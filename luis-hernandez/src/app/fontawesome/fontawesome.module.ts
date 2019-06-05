import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [FontAwesomeModule]
})
export class FontawesomeModule {
  constructor() {
    // Add an icon to the library for convenient access in other components
    library.add(faGithub);
    library.add(faLinkedin);
    library.add(faInstagram);
  }
}
