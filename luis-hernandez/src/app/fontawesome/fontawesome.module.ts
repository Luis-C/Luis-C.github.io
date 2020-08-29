import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faHtml5,
  faJs,
  faPython,
  faCss3,
  faJava,
} from "@fortawesome/free-brands-svg-icons";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [FontAwesomeModule],
})
export class FontawesomeModule {
  constructor() {
    // Add an icon to the library for convenient access in other components
    library.add(faGithub);
    library.add(faLinkedin);
    library.add(faInstagram);
    library.add(faHtml5);
    library.add(faJs);
    library.add(faPython);
    library.add(faCss3);
    library.add(faJava);
  }
}
