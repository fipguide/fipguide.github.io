import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as fipdata from '../assets/json/out.json';
import { Company, CompanyComponent } from './company/company.component';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CompanyComponent, TopnavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'fipguide';
  selectedCompany: Company | undefined;

  public getdatafromJson(countryAbbreviation: string): Company {
    return (
      fipdata.countries[0].data.companys.find(
        (i) => i.abbreviation === countryAbbreviation
      ) || {
        abbreviation: '',
        name: '',
        generalInformation: '',
      }
    );
  }

  public setSelectedCompany(countryAbbreviation: string) {
    this.selectedCompany = this.getdatafromJson(countryAbbreviation);
  }
}
