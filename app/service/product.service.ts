import {Injectable} from 'angular2/core';
import {Http, Response, URLSearchParams} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

import {SearchQuery} from '../models/search-query';
import {Product} from '../models/product';


@Injectable()
export class ProductService {
  private _url = 'http://localhost:3000/api/products.json';

  constructor(private _http: Http) { }

  search(searchQuery: SearchQuery) {
    var params = new URLSearchParams();
    params.set('keywords', searchQuery.query);

    return this._http.get(this._url, {search: params})
                     .map(res => <Product[]> res.json())
                     .do(data => console.log(data))
                     .catch(this.handleError);
  }

  private handleError (error: Response) {
    // in a real world app, we may send the error to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
