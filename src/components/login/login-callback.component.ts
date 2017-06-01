import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'login-callback',
  templateUrl: './login-callback.component.html',
  styleUrls: ['./login-callback.component.css']
})

export class LoginCallbackComponent implements OnInit {
  @Input() token: string;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => params['token'])
      .subscribe(token => this.token = token.toString());
  }
}