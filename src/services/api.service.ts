import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { ENV } from '../app/config';

const base_url = 'https://www.quandl.com/api/v3/datasets/';
const key_arg = 'api_key=' + ENV.QUANDL_API_KEY;

@Injectable()
export class APIService {
  price: number;

  constructor(
    private http: Http
  ) {}

  private extractData(res: Response) {
    const body = res.json();
    return body.data || {};
  }

  private handleError(res: Response | any) {
    console.error('something went wrong with an http request.');
    console.error(res.text());
    return Observable.throw(res.text);
  }

  private makeCall(provider: string, set: string, args?: object): Observable<Response> {
    let string_args = '';

    if (args) {
      for (const key of Object.keys(args)) {
        const val = args[key];
        string_args += '&' + key + '=' + val;
      }
    }

    const url = base_url + provider + '/' + set + '.json?' + key_arg + string_args;

    return this.http.get(url).map((res: Response) => res.json()).catch(this.handleError);
  }

  // gets the latest closing price (so the latest available price)
  getPrice(symbol: string): Promise<number> {
    const promise = new Promise<number>((resolve, reject) => {
      this.makeCall('WIKI', symbol).subscribe(function (data) {
        const innerData = data['dataset']['data'];
        const last = innerData[0];

        resolve(last[4]);
      }, reject);
    });

    return promise;
  }
}