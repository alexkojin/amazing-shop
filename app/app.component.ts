import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HomeComponent} from './components/home/home.component';
import {ProductsComponent} from './components/products/products.component';

@Component({
  selector: 'store-app',
  template: '<router-outlet></router-outlet>',
  directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  { path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
  { path: '/products', name: 'Products', component: ProductsComponent }
])

export class AppComponent { }
