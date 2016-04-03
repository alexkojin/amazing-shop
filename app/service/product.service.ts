import {Injectable} from 'angular2/core';
import {Http, Response, URLSearchParams} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

import {SearchQuery} from '../models/search-query';
import {Product} from '../models/product';


@Injectable()
export class ProductService {
  private _searchUrl = 'http://localhost:3000/api/products.json';
  private _detailUrl = 'http://localhost:3000/api/products/';

  constructor(private _http: Http) { }

  search(searchQuery: SearchQuery) {
    var params = new URLSearchParams();
    params.set('keywords', searchQuery.query);

    return this._http.get(this._searchUrl, {search: params})
                     .map(res => <Product[]> res.json())
                     .catch(this.handleError);
  }

  detail(id: string) {
    let url = this._detailUrl + id + '.json';
    return this._http.get(url)
                     .map(res => <Product> res.json())
                     .catch(this.handleError);
  }

  private handleError (error: Response) {
    // in a real world app, we may send the error to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
