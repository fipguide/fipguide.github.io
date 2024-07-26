import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {Region} from "./model/region";

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  readonly regions$: BehaviorSubject<Region[]> = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) {
    console.log("Loading regions");
    this.loadRegions();
  }

  private loadRegions() {
    this.http.get<Region[]>("assets/json/regions.json")
      .subscribe({
        next: (regions: Region[]) => {
          this.regions$.next(regions);
          console.log(regions);
        },
        error: () => {
          // TODO
        }
      });
  }
}
