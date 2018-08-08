import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {AppComponent} from '../app.component';
import {Router} from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {DialogWithParametersComponent} from '../dialog-with-parameters/dialog-with-parameters.component';


@Component({
  selector: 'app-stock-container',
  templateUrl: './stock-container.component.html',
  styleUrls: ['./stock-container.component.css']
})
export class StockContainerComponent implements OnInit {

  variants = [];
  value: String;
  nameStock: String;

  emailFormControl = new FormControl('', [
    Validators.required
  ]);

  constructor(private _location: Location, private myApp: AppComponent, public router: Router, public dialog: MatDialog) {
  }

  addVariants = function () {
    this.variants.push({
      id: this.variants.length + 1,
      sets: []
    });
  };

  openDialog = function (id, data, ids) {

    const dialogRef = this.dialog.open(DialogWithParametersComponent, {
      disableClose: true,
      height: '300px',
      minWidth: '400px',
      data: data !== undefined ? data : null,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.dialogResult = result;

      console.log(result);
      console.log(this.variants);

      if (result !== undefined && data === undefined) {
        this.variants[id - 1].sets.push(result);
      }

      if (result !== undefined && data !== undefined) {
        this.variants[ids].sets[id] = result;
      }

      console.log(this.variants);

    });

  };

  openMe(data) {
    const editDialog = this.dialog.open(DialogWithParametersComponent, {
      disableClose: true,
      height: '300px',
      minWidth: '400px',
      data: data,
    });

    editDialog.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  deleteVariants(id: Number) {
    this.variants = this.variants.filter(el => el.id !== id);
  };

  backPage() {
    this._location.back();
  };

  nameVal(val) {
    this.nameStock = val.target.value;
  };

  saveStock() {
    this.myApp.testList.push({
      name: this.nameStock,
      variants: this.variants,
    });

    console.log(this.myApp.testList);

    this.router.navigateByUrl('/');
  };

  deleteModel(e, num, count) {
    e.stopPropagation();
    this.variants[count].sets.splice(num, 1);
  }


  ngOnInit() {
  }

}

