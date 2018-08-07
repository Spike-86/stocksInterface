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
  value = '';
  nameStock = '';
  values = [];


  emailFormControl = new FormControl('', [
    Validators.required
  ]);

  constructor(private _location: Location, private myApp: AppComponent, public router: Router, public dialog: MatDialog) {
  }

  addVariants = function () {
    this.variants.push({
      id: this.variants.length + 1
    });
  };


  openDialog = function () {

    const dialogRef = this.dialog.open(DialogWithParametersComponent, {
      disableClose: true,
      height: '300px',
      minWidth: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.dialogResult = result;

      if (result !== undefined) {
        this.values.push(result);
      }

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

  deleteVariants = function (id: Number) {
    this.variants = this.variants.filter(el => el.id !== id);
  };

  backPage = function () {
    this._location.back();
  };

  nameVal(val) {
    this.nameStock = val.target.value;
  };

  saveStock = function () {
    this.myApp.testList.push({
      name: this.nameStock,
      variants: this.variants,
      values: this.values,
    });

    this.router.navigateByUrl('/');
  };


  ngOnInit() {
  }

}

