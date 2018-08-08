import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public router: Router, private _location: Location){}

  testList = [];

  openCreateComponent = function () {
    this.router.navigateByUrl('/create');
  };

  deleteStock = function (name: String) {
    this.testList = this.testList.filter(el => el.name !== name);
  };

  stop(e) {
    e.stopPropagation();
  }
}
