import {Component, OnInit} from '@angular/core';
import * as fipdata from '../../assets/json/out.json';
import { CommonModule } from '@angular/common';
import {AssetService} from "../service/asset.service";
import {BehaviorSubject} from "rxjs";
import {Region} from "../service/model/region";

@Component({
  selector: 'app-topnavbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topnavbar.component.html',
  styleUrl: './topnavbar.component.scss',
})
export class TopnavbarComponent implements OnInit {
  regions$: BehaviorSubject<Region[]>;

  constructor(private assets: AssetService) {
    this.regions$ = assets.regions$;
  }

  ngOnInit() {
  }

}
