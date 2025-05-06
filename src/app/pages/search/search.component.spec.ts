import { of } from 'rxjs';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { MovieService } from '../../services/movie.service';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let mockMovieService: Partial<MovieService> & { searchMovies: jest.Mock };

  beforeEach(async () => {
    mockMovieService = {
      searchMovies: jest.fn()
    };

    await TestBed.configureTestingModule({
      imports: [SearchComponent, FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [{ provide: MovieService, useValue: mockMovieService }]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('deve não chamar MovieService.searchMovies se a query estiver vazia ou com espaço', () => {
    component.query = '   ';
    component.search();
    expect(mockMovieService.searchMovies).not.toHaveBeenCalled();
  });

  it('deverá chamar MovieService.searchMovies e mostrar o resultado', () => {
    const mockResults = { results: [{ title: 'Matrix' }] };
    mockMovieService.searchMovies.mockReturnValue(of(mockResults));

    component.query = 'test';
    component.search();

    expect(mockMovieService.searchMovies).toHaveBeenCalledWith('test');
    expect(component.results).toEqual(mockResults.results);
  });
});
