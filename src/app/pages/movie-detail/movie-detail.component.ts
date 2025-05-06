import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {MovieService} from '../../services/movie.service';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-movie-detail',
  imports: [CommonModule, RouterLink, MatButtonModule, MatIconModule, MatSnackBarModule],
  templateUrl: './movie-detail.component.html',
  standalone: true,
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent {
  movie: any = null;
  similarMovies: any[] = [];

  selectedRating = 0;
  ratingConfirmed = false;

  isDragging = false;
  startX = 0;
  scrollLeft = 0;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private snackBar: MatSnackBar,
    private titleService: Title
  ) {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.loadMovieDetails(id);
    });
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.movieService.getMovieById(id).subscribe((res) => {
        this.movie = res;
        console.log('ID capturado:', id);
      });
      this.movieService.getSimilarMovies(id).subscribe((res) => {
        this.similarMovies = res.results;
      });
      this.movieService.getMovieById(id).subscribe((res) => {
        this.movie = res;
        this.titleService.setTitle(`LibroFilmes - ${res.title}`);
      });

    }


  }

  loadMovieDetails(id: string) {
    this.movieService.getMovieById(id).subscribe((res) => {
      this.movie = res;
    });

    this.movieService.getSimilarMovies(id).subscribe((res) => {
      this.similarMovies = res.results;
    });
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
    const x = event.pageX - container.offsetLeft;
    const walk = (x - this.startX) * 2;
    container.scrollLeft = this.scrollLeft - walk;
  }


  rateMovie(star: number): void {
    this.selectedRating = star;

    this.snackBar.open(`Avaliação registrada: ${star} estrelas!`, 'Fechar', {
      duration: 3000,
      panelClass: ['bg-green-600', 'text-white', 'font-medium']
    });
  }

}
