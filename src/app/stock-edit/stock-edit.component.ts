import {Component, OnInit} from '@angular/core';
import {RoutesService} from '../services/routes.service';
import {Stock} from '../domain/Stock';
import {ActivatedRoute, Router} from '@angular/router';
import {StockService} from '../services/stock.service';

@Component({
  selector: 'app-stock-edit',
  templateUrl: './stock-edit.component.html',
  styleUrls: ['./stock-edit.component.css']
})
export class StockEditComponent implements OnInit {

  constructor(
    private routesService: RoutesService,
    private route: ActivatedRoute,
    private stockService: StockService,
  ) {}

  stock: Stock;

  StockListRoute() {
    this.routesService.goBack();
  }


  ngOnInit() {
    // this.stockService.getStockList()
    //   .subscribe(
    //     data => this.stock = data[0]
    //   );

    this.stock = this.stockService.getSelectedStock();
  }

}
