import {Injectable} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class IconService {
  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    console.log('[IconService] Registrando ícones...');
    this.registerIcons();
  }

  private registerIcons(): void {
    this.iconRegistry.addSvgIcon(
      'home',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/home.svg')
    );
    this.iconRegistry.addSvgIcon(
      'movies',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/movies.svg')
    );
    this.iconRegistry.addSvgIcon(
      'search',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/search.svg')
    );
  }

}
