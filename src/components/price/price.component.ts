import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { APIService } from './../../services/api.service';

import { Price } from './../../classes/price';

@Component({
  selector: 'price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})

export class PriceComponent implements OnInit {
  @Input() symbol: string;

  price: Price;

  constructor(
    private route: ActivatedRoute,
    private api: APIService
  ) {}

  ngOnInit(): void {
    if (!this.symbol) {
      this.route.params
        .subscribe(params => this.symbol = params['symbol'].toString());
    }

    this.api.getPrice(this.symbol).then((price) => this.price = price);
  }
}