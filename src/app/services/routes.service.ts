import { Injectable } from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  constructor(private _location: Location, private router: Router) {}

  goBack() {
    this._location.back()
  }

  createStockRoute() {
    this.router.navigateByUrl('/create');
  }
}
