import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StockService} from '../services/stock.service';
import {Stock} from '../domain/Stock';
import {RoutesService} from '../services/routes.service';
import {StockEditComponent} from '../stock-edit/stock-edit.component';
import {Router} from '@angular/router';
import {MatPaginator, MatSort, MatTableDataSource, PageEvent} from '@angular/material';
import {FormControl} from '@angular/forms';

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
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageSize = 10;
  pageEvent: PageEvent;
  date = new FormControl(new Date());
  selected = 'option2';


  displayedColumns: string[] = ['id', 'descr', 'fullDesc', 'fclientCond', 'fregionCoef', 'fsapShare'];
  dataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  createStock() {
    this.router.navigateByUrl('/create');
  }

  editStock(stock) {
    this.router.navigateByUrl(`/editStock/${stock.id}`);
  }

  ngOnInit() {
    this.stockService.getStockList()
      .subscribe(
        (data) => {
          this.stocks = data;
          this.dataSource = new MatTableDataSource<Stock>(this.stocks);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      );

  }

}
