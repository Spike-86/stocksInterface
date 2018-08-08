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

  openCreateComponent() {
    this.router.navigateByUrl('/create');
  };

  deleteStock(name: String) {
    this.testList = this.testList.filter(el => el.name !== name);
  };

  editStock(obj) {
    console.log(obj);
  }

  stop(e) {
    e.stopPropagation();
  }
}
