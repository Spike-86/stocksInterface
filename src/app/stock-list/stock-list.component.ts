import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StockService} from '../services/stock.service';
import {Stock} from '../domain/Stock';
import {RoutesService} from '../services/routes.service';
import {StockEditComponent} from '../stock-edit/stock-edit.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private stockService: StockService,
    private routesService: RoutesService,
    private stockEdit: StockEditComponent,
    private router: Router
  ) {}

  stocks: Array<Stock> = [];

  createStock() {
    this.router.navigate(['/create', this.stocks[0].id]);
  }

  ngOnInit() {
    this.stockService.getStockList()
      .subscribe(
        (data) => this.stocks = data
      );
  }

}
