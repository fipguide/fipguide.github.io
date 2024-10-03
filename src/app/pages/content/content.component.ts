import { Component } from '@angular/core';
import {NavigationComponent} from "../../components/navigation/navigation.component";
import {LogoComponent} from "../../components/logo/logo.component";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    NavigationComponent,
    LogoComponent
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

}
