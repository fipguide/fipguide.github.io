import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AssetService} from "../../service/asset.service";
import {BehaviorSubject} from "rxjs";
import {Region} from "../../service/model/region";
import {NgbDropdown, NgbDropdownItem, NgbDropdownMenu, NgbDropdownToggle} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-topnavbar',
  standalone: true,
  imports: [CommonModule, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  regions$: BehaviorSubject<Region[]>;

  constructor(private assets: AssetService) {
    this.regions$ = assets.regions$;
  }
}
