import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HomeComponent} from './components/home/home.component';
import {ProductsComponent} from './components/products/products.component';
import {ProductDetailComponent} from './components/product-detail/product-detail.component';

import {ProductService} from './service/product.service';

@Component({
  selector: 'store-app',
  template: '<router-outlet></router-outlet>',
  directives: [ROUTER_DIRECTIVES],
  providers: [
    HTTP_PROVIDERS,
    ProductService
  ]
})

@RouteConfig([
  { path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
  { path: '/products', name: 'Products', component: ProductsComponent },
  { path: '/products/:id', name: 'ProductDetail', component: ProductDetailComponent}
])

export class AppComponent { }
