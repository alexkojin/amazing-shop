import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';

import {SearchQuery} from '../../models/search-query';
import {Product} from '../../models/product';
import {ProductService} from '../../service/product.service';

import {SearchFormComponent} from '../../components/search-form/search-form.component';

@Component({
  selector: "store-products",
  templateUrl: './app/components/products/products.component.html',
  styleUrls: ['./app/components/products/products.component.css'],
  directives: [ROUTER_DIRECTIVES, SearchFormComponent]
})

export class ProductsComponent implements OnInit {
  searchQuery: SearchQuery;
  products: Product[];

  constructor(private _params: RouteParams, private _productService: ProductService) { }

  ngOnInit() {
    this.searchQuery = new SearchQuery(this._params.get('query'));
    this._productService.search(this.searchQuery)
      .subscribe(
        products => this.products = products
       );
  }
}