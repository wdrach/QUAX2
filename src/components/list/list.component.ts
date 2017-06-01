import { Component, Input, OnInit } from '@angular/core';

import 'rxjs/add/operator/switchMap';

import { APIService } from './../../services/api.service';

import { Tickers } from './../../app/tickers';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  symbolList = [];
  symbolSet  = [];

  constructor(
    private api: APIService
  ) {}

  ngOnInit(): void {
    for (const item of Tickers) {
      this.symbolList.push(item.Ticker);
    }

    this.symbolSet = this.symbolList.slice(0, 20);
    console.log(this.symbolSet);
  }
}
