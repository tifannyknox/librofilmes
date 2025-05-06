import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {MovieDetailComponent} from './pages/movie-detail/movie-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {path: 'movie/:id', component: MovieDetailComponent},
  {
    path: 'catalogo',
    loadComponent: () => import('./pages/catalog-detail/catalog-detail.component').then(m => m.CatalogDetailComponent)
  },
  {
    path: 'search',
    loadComponent: () => import('./pages/search/search.component').then(m => m.SearchComponent)
  }
];
