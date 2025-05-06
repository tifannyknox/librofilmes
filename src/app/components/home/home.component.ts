import {Component, OnInit, signal} from '@angular/core';
import {HeroComponent} from '../hero/hero.component';
import {CatalogComponent} from '../catalog/catalog.component';
import {MovieService} from '../../services/movie.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  imports: [HeroComponent, CatalogComponent],
  templateUrl: './home.component.html',
  standalone: true,
})
export class HomeComponent implements OnInit{
  movies = signal<any[]>([]);

  constructor(private movieService: MovieService,private titleService: Title) {
    this.movieService.getPopularMovies().subscribe((res) => {
      this.movies.set(res.results);
    });

    this.movieService.getTopRatedMovies().subscribe((res) => {
      this.movies.set(res.results)
    });

    this.movieService.getHorrorMovies().subscribe((res) => {
      this.movies.set(res.results)
    });
  }


  ngOnInit() {
    this.titleService.setTitle('LibroFilmes - Home');
  }
}
