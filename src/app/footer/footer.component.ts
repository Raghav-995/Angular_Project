import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTwitter,  faFacebookF, faInstagramSquare , faGithub} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
 fatwitter = faTwitter;
 fafacebook = faFacebookF;
 fainsta = faInstagramSquare;
 fagithub = faGithub;
}
