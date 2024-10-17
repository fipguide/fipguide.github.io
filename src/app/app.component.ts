import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CompanyComponent} from './components/company/company.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {FooterComponent} from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CompanyComponent, NavigationComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
}
