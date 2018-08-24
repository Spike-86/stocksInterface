import {Component, OnInit, ViewChild} from '@angular/core';
import {RoutesService} from '../services/routes.service';
import {Stock} from '../domain/Stock';
import {StockService} from '../services/stock.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatPaginator, MatSort, MatTableDataSource, PageEvent} from '@angular/material';
import * as _ from 'underscore';
import {any} from 'codelyzer/util/function';


@Component({
  selector: 'app-stock-edit',
  templateUrl: './stock-edit.component.html',
  styleUrls: ['./stock-edit.component.css']
})
export class StockEditComponent implements OnInit {

  constructor(private routesService: RoutesService, private router: Router, private route: ActivatedRoute, private stockService: StockService) {
  }

  stock: Stock;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageSize = 10;
  pageEvent: PageEvent;
  groupingStocks;
  displayedColumns: string[] = ['pricePart', 'clientRlshnType', 'conditionId', 'factorId', 'priceLevel', 'value', 'valueType'];
  dataSource;
  dataS;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  StockListRoute() {
    this.routesService.goBack();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    this.stockService.getStockList()
      .subscribe((data) => {
        this.stock = data.filter(x => x.id == this.route.snapshot.params.id)[0];

        this.stockService.getStockVariants(this.route.snapshot.params.id)
          .subscribe((data) => {
            // console.log(data);
            // console.log(_.groupBy(data, 'conditionId'));
            this.groupingStocks = Object.keys(_.groupBy(data, 'conditionId'));
            this.dataS = _.groupBy(data, 'conditionId');
            console.log(this.dataS);
            this.stock.variants = data;
            this.dataSource = new MatTableDataSource(this.stock.variants);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          });

      });

  }

}
