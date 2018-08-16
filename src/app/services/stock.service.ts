import { Injectable } from '@angular/core';
import {Stock} from '../domain/Stock';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpClient) { }



  getStockList() {
    return this.http.get<Stock[]>('assets/stocks.json');
  }

}
