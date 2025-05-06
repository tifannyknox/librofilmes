import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = '6240900e35534f88bf3ab5183e894803';
  private apiUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {
  }

  getMovieById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/${id}`, {
      params: {
        api_key: this.apiKey,
        language: 'pt-BR'
      }
    });
  }

  getPopularMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/popular?api_key=${this.apiKey}&language=pt-BR&page=1`);
  }

  getTopRatedMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/top_rated?api_key=${this.apiKey}&language=pt-BR&page=1`);
  }

  getHorrorMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/discover/movie?api_key=${this.apiKey}&with_genres=27&language=pt-BR&page=1`);
  }

  getComedyMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/discover/movie`, {
      params: {
        api_key: this.apiKey,
        with_genres: '35', // Comédia
        language: 'pt-BR',
        page: 1
      }
    });
  }

  getDramaMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/discover/movie`, {
      params: {
        api_key: this.apiKey,
        with_genres: '18', // Drama
        language: 'pt-BR',
        page: 1
      }
    });
  }

  getAnimationMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/discover/movie`, {
      params: {
        api_key: this.apiKey,
        with_genres: '16', // Animação
        language: 'pt-BR',
        page: 1
      }
    });
  }

  getSimilarMovies(movieId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/${movieId}/similar`, {
      params: {
        api_key: this.apiKey,
        language: 'pt-BR'
      }
    });
  }

  searchMovies(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search/movie`, {
      params: {
        api_key: this.apiKey,
        language: 'pt-BR',
        query: query,
      },
    });
  }

}
