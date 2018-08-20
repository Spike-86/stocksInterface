import { Injectable } from '@angular/core';
import {Stock} from '../domain/Stock';
import {HttpClient} from '@angular/common/http';
import {StockListComponent} from '../stock-list/stock-list.component';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpClient) { }

  testStock:Stock;



  getStockList() {
    // return this.http.get<Stock[]>('assets/stocks.json');
    return this.http.get<Stock[]>('http://localhost:8081/campaign/getList');
  }

  getSelectedStock() {
  return this.testStock;
  }

}
