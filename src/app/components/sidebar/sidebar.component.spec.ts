import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarComponent } from './sidebar.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {of} from 'rxjs';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;
  const navigateMock = jest.fn().mockResolvedValue(true); // Simula navegação com sucesso

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarComponent, MatIconModule, FormsModule, CommonModule],
      providers: [
        {
          provide: Router,
          useValue: {
            navigate: navigateMock
          },

        },
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({})
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
