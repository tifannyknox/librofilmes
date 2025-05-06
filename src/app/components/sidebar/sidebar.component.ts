import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-sidebar',
  imports: [
    RouterLink,
    FormsModule,
    CommonModule,
    MatIconModule
  ],
  templateUrl: './sidebar.component.html',
  standalone: true,
})
export class SidebarComponent {

}

