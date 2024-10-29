import { Component, inject, OnInit } from '@angular/core';
import { NasaService } from '../services/nasa-service.service';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home-screen',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatCardModule],
  templateUrl: './home-screen.component.html',
  styleUrl: './home-screen.component.scss'
})
export class HomeScreenComponent {
  private nasaService: NasaService = inject(NasaService);
  protected picOfTheDay$ = this.nasaService.getPicOfTheDay$();
  protected marsPhoto$ = this.nasaService.getRoverCuriosityPic$();
}
