import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {SearchQuery} from '../../models/search-query';
import {SearchFormComponent} from '../../components/search-form/search-form.component';

@Component({
  selector: "store-products",
  templateUrl: './app/components/products/products.component.html',
  styleUrls: ['./app/components/products/products.component.css'],
  directives: [SearchFormComponent]
})

export class ProductsComponent implements OnInit {
  searchQuery: SearchQuery;

  constructor(private _params: RouteParams) { }

  ngOnInit() {
    this.searchQuery = new SearchQuery(this._params.get('query'));
  }
}