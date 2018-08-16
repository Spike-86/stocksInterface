import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {StockEditComponent} from './stock-edit/stock-edit.component';
import {StockListComponent} from './stock-list/stock-list.component';

const routes: Routes = [
  {path: '', component: StockListComponent},
  {path: 'create/:id', component: StockEditComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {

  constructor() { }

}

