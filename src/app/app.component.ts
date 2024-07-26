import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CompanyComponent} from './company/company.component';
import {TopnavbarComponent} from './topnavbar/topnavbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CompanyComponent, TopnavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'fipguide';
}
