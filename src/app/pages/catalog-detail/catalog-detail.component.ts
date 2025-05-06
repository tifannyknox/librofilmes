import {Component, OnInit} from '@angular/core';
import {CatalogComponent} from '../../components/catalog/catalog.component';
import {CommonModule} from '@angular/common';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-catalog-detail',
  imports: [CommonModule, CatalogComponent],
  templateUrl: './catalog-detail.component.html',
  standalone: true,
})
export class CatalogDetailComponent implements OnInit{
  selectedGenre: string = 'Todos';
  genres: string[] = [
    'Todos',
    'Mais populares',
    'Mais Avaliados',
    'Filmes de Terror',
    'Filmes de Comédia',
    'Filmes de Drama',
    'Animações'
  ];
  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('LibroFilmes - Catálogo');
  }

  onSelectGenre(genre: string) {
    this.selectedGenre = genre;
  }
}
