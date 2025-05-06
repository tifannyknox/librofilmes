//** Código de autoria de Danubia Barreto, apenas uso pessoal. peço que por gentileza, não usar para fins comerciais. *****//

import {Component, inject} from '@angular/core';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {RouterOutlet} from '@angular/router';
import {IconService} from './core/icon.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [SidebarComponent, RouterOutlet],
})
export class AppComponent {
  private readonly iconService = inject(IconService);
}
