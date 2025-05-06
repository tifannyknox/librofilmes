import { Component } from '@angular/core';
import {MovieService} from '../../services/movie.service';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-search',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './search.component.html',
  standalone: true,
})
export class SearchComponent {
  query = '';
  results: any[] = [];

  constructor(private movieService: MovieService) {}

  search() {
    if (!this.query.trim()) return;

    this.movieService.searchMovies(this.query).subscribe((res) => {
      this.results = res.results;
    });
  }
}
