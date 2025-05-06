import {Component, OnInit} from '@angular/core';
import {MatCard} from '@angular/material/card';
import {NgOptimizedImage, NgStyle} from '@angular/common';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  standalone: true,
  imports: [
    MatButton
  ],
  styleUrl: './hero.component.css'
})
export class HeroComponent{
}
