import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

import {SearchQuery} from '../../models/search-query';

@Component({
  selector: 'store-home',
  templateUrl: './app/components/home/home.component.html',
  styleUrls: ['./app/components/home/home.component.css']
})


export class HomeComponent {
  model = new SearchQuery('');

  constructor(private _router: Router) { }

  searchSubmit() {
    this._router.navigate(['Products', {query: this.model.query}]);
  }
}
