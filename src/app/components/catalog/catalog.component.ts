import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {NgFor} from '@angular/common';
import {MovieService} from '../../services/movie.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './catalog.component.html',
})
export class CatalogComponent implements OnInit, OnChanges {
  @Input() title: string = '';
  movies: any[] = [];

  isAll = false;
  popularMovies: any[] = [];
  topRatedMovies: any[] = [];
  horrorMovies: any[] = [];
  comedyMovies: any[] = [];
  dramaMovies: any[] = [];
  animationMovies: any[] = [];


  isDragging = false;
  startX = 0;
  scrollLeft = 0;

  constructor(private movieService: MovieService) {
  }


  ngOnInit() {
    this.loadMovies();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['title'] && !changes['title'].firstChange) {
      this.loadMovies();
    }
  }

  loadMovies() {
    this.isAll = this.title === 'Todos';

    if (this.isAll) {
      this.movieService.getPopularMovies().subscribe(res => this.popularMovies = res.results);
      this.movieService.getTopRatedMovies().subscribe(res => this.topRatedMovies = res.results);
      this.movieService.getHorrorMovies().subscribe(res => this.horrorMovies = res.results);
      this.movieService.getComedyMovies().subscribe(res => this.comedyMovies = res.results);
      this.movieService.getDramaMovies().subscribe(res => this.dramaMovies = res.results);
      this.movieService.getAnimationMovies().subscribe(res => this.animationMovies = res.results);
    } else {
      switch (this.title) {
        case 'Mais populares':
          this.movieService.getPopularMovies().subscribe(res => this.movies = res.results);
          break;
        case 'Mais Avaliados':
          this.movieService.getTopRatedMovies().subscribe(res => this.movies = res.results);
          break;
        case 'Filmes de Terror':
          this.movieService.getHorrorMovies().subscribe(res => this.movies = res.results);
          break;
        case 'Filmes de Comédia':
          this.movieService.getComedyMovies().subscribe(res => this.movies = res.results);
          break;
        case 'Filmes de Drama':
          this.movieService.getDramaMovies().subscribe(res => this.movies = res.results);
          break;
        case 'Animações':
          this.movieService.getAnimationMovies().subscribe(res => this.movies = res.results);
          break;
      }
    }
  }

  onMouseDown(event: MouseEvent, container: HTMLDivElement) {
    this.isDragging = true;
    this.startX = event.pageX - container.offsetLeft;
    this.scrollLeft = container.scrollLeft;
  }

  onMouseLeave() {
    this.isDragging = false;
  }

  onMouseUp() {
    this.isDragging = false;
  }

  onMouseMove(event: MouseEvent, container: HTMLDivElement) {
    if (!this.isDragging) return;
    event.preventDefault();
    const x = event.pageX - container.offsetLeft;
    const walk = (x - this.startX) * 2;
    container.scrollLeft = this.scrollLeft - walk;
  }
}
