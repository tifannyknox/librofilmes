import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatalogComponent } from './catalog.component';
import { MovieService } from '../../services/movie.service';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

const mockMovies = [{ id: 1, title: 'Test Movie' }];

const mockMovieService = {
  getPopularMovies: jest.fn(() => of({ results: mockMovies })),
  getTopRatedMovies: jest.fn(() => of({ results: mockMovies })),
  getHorrorMovies: jest.fn(() => of({ results: mockMovies })),
  getComedyMovies: jest.fn(() => of({ results: mockMovies })),
  getDramaMovies: jest.fn(() => of({ results: mockMovies })),
  getAnimationMovies: jest.fn(() => of({ results: mockMovies })),
};

describe('CatalogComponent', () => {
  let component: CatalogComponent;
  let fixture: ComponentFixture<CatalogComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [CatalogComponent, RouterTestingModule],
      providers: [{ provide: MovieService, useValue: mockMovieService }],
    }).compileComponents();

    fixture = TestBed.createComponent(CatalogComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load popular movies when title is "Mais populares"', () => {
    component.title = 'Mais populares';
    component.loadMovies();
    expect(mockMovieService.getPopularMovies).toHaveBeenCalled();
  });

  it('should load all categories when title is "Todos"', () => {
    component.title = 'Todos';
    component.loadMovies();
    expect(mockMovieService.getPopularMovies).toHaveBeenCalled();
    expect(mockMovieService.getTopRatedMovies).toHaveBeenCalled();
    expect(mockMovieService.getHorrorMovies).toHaveBeenCalled();
    expect(mockMovieService.getComedyMovies).toHaveBeenCalled();
    expect(mockMovieService.getDramaMovies).toHaveBeenCalled();
    expect(mockMovieService.getAnimationMovies).toHaveBeenCalled();
  });

  it('should load top rated movies when title is "Mais Avaliados"', () => {
    component.title = 'Mais Avaliados';
    component.loadMovies();
    expect(mockMovieService.getTopRatedMovies).toHaveBeenCalled();
  });

  it('should load horror movies when title is "Filmes de Terror"', () => {
    component.title = 'Filmes de Terror';
    component.loadMovies();
    expect(mockMovieService.getHorrorMovies).toHaveBeenCalled();
  });
});
