import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';

import {SearchQuery} from '../../models/search-query';

@Component({
  selector: "search-form",
  templateUrl: './app/components/search-form/search-form.component.html',
  styleUrls: ['./app/components/search-form/search-form.component.css']
})

export class SearchFormComponent implements OnInit {
  searchQuery: SearchQuery;

  constructor(
    private _params: RouteParams,
    private _router: Router) {
  }

  ngOnInit() {
    this.searchQuery = new SearchQuery(this._params.get('query'));
  }

  onSubmit() {
    this._router.navigate(['Products', {query: this.searchQuery.query} ]);
  }
}