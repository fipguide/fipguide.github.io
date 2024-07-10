import { Component } from '@angular/core';
import * as fipdata from '../../assets/json/out.json';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topnavbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topnavbar.component.html',
  styleUrl: './topnavbar.component.scss',
})
export class TopnavbarComponent {
  public getCountriesForRegion(region: string): string[] {
    return fipdata.countries
      .filter((i) => i.region === region)
      .map((foundCountry) => foundCountry.country);
  }
}
