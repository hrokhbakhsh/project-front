import {HttpClient} from '@angular/common/http';
import {Component, ViewChild, AfterViewInit, OnInit, OnDestroy} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, SortDirection} from '@angular/material/sort';
import {merge, Observable, of as observableOf, Subscription} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';

import {ChartDataSets, ChartOptions} from 'chart.js';
import {Color, Label} from 'ng2-charts';
import {DashboardService} from "../dashboard.service";
import {BoxOption} from "../../core/pmt-fast-report-box/pmt-fast-report-box.interfaces";
import {TranslateService} from "@ngx-translate/core";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";
import {Directionality} from "@angular/cdk/bidi";

@Component({
  selector: 'pmt-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit , OnInit , OnDestroy{
  successBox: BoxOption = {
    title: 'accepted',
    subtitle: '125',
    class: '',

    avatar: {
      icon: 'home',
      class: 'text-light',
      image: 'https://material.angular.io/assets/img/examples/shiba1.jpg'
    },
    actions: [
      {
        title: 'more detail',
        icon: 'info',
        url: '',
        class: ''
      }
    ]
  }
  mybutton = {
    type: 'EDIT'
  }
  displayedColumns: string[] = ['number', 'state', 'created', 'title', 'actions'];
  exampleDatabase: any | undefined;
  data: GithubIssue[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
// @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
// @ts-ignore

  @ViewChild(MatSort) sort: MatSort;


  lineChartData: ChartDataSets[] = [
    {data: [85, 83, 78, 76, 77, 75], label: 'تعداد بیمه های مرجوعی'},
  ];

  lineChartLabels: Label[] = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';


  direction$: Subscription| undefined;
  activatedRoute$: Subscription| undefined;

  constructor(private _translate: TranslateService,
              private _titleService: Title,
              private _activateRoute: ActivatedRoute,
              private _direction: Directionality,
              private _httpClient: HttpClient,
              private _dashboardService: DashboardService) {
  }
  ngOnInit() {
    this.setTitle();
    this.direction$ = this._direction.change.subscribe(value => {
      this.setTitle();

    })
  }

  setTitle() {
    this.activatedRoute$ = this._activateRoute.data.subscribe(data => {
      this._titleService.setTitle(this._translate.instant(data.title))
    })
  }

  ngAfterViewInit() {
    this.exampleDatabase = this._dashboardService.getTableData();

    // If the user changes the sort order, reset back to the first page.
    // @ts-ignore
    // this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);


    setTimeout(() => {
      this.resultsLength = this.exampleDatabase.total_count;

      this.data = this.exampleDatabase.items;

    })
  }
  ngOnDestroy() {
    this.direction$?.unsubscribe();
    this.activatedRoute$?.unsubscribe();
  }
}

export interface GithubApi {
  items: GithubIssue[];
  total_count: number;
}

export interface GithubIssue {
  created_at: string;
  number: string;
  state: string;
  title: string;
}

/** An example database that the data source uses to retrieve data for the table. */
export class ExampleHttpDatabase {
  constructor(private _httpClient: HttpClient) {
  }

  getRepoIssues(sort: string, order: SortDirection, page: number): Observable<GithubApi> {
    const href = 'custom/https://api.github.com/search/issues';
    const requestUrl =
      `${href}?q=repo:angular/components&sort=${sort}&order=${order}&page=${page + 1}`;

    return this._httpClient.get<GithubApi>(requestUrl);
  }

}
