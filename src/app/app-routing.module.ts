import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockContainerComponent } from './stock-container/stock-container.component'

const routes: Routes = [
  { path: 'create', component: StockContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
