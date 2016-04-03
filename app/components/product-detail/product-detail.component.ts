import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';

import {Product} from '../../models/product';
import {ProductService} from '../../service/product.service';

import {SearchFormComponent} from '../../components/search-form/search-form.component';
import {ImageSliderComponent} from '../../components/image-slider/image-slider.component';


@Component({
  selector: 'store-product-detail',
  templateUrl: './app/components/product-detail/product-detail.component.html',
  styleUrls: ['./app/components/product-detail/product-detail.component.css'],
  directives: [ROUTER_DIRECTIVES, SearchFormComponent, ImageSliderComponent]
})

export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(private _routeParams: RouteParams, private _productService: ProductService){
  };

  ngOnInit() {
    this._productService.detail(this._routeParams.get('id'))
      .subscribe(product => this.product = product);
  }

}