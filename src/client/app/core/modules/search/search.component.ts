import { Component, OnInit } from '@angular/core';

import { API } from '../../services/api.service';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
declare var google: any;

@Component({
  selector: 'search',
  exportAs: 'search',
  templateUrl: 'search.html'
})

// CLASS
export class SearchComponent implements OnInit {
	icon: boolean;
	grocerySelected: boolean;
	hide: boolean;
	closed: boolean;
	submit: boolean;
	grocery: any;
	lists = [];

	public foods = [];
	public recentSearches: any = '';

	constructor(private api: API, private http: Http) {

		this.grocerySelected = false;
		this.icon = false;
		this.hide = true;
		this.closed = false;
	}

	ngOnInit() {
		this.list();
	}

	public list() {
		this.http.get('/assets/json/category.json').map((r: Response) => r.json()).subscribe(res => {
			this.lists = res['groceries']['categories'];
		});
	}

	private food(input) {
		if (input.length >= 2) {
			this.api.nutritionix('search/instant?query=' + input + '&branded_type=2&branded_region=1').subscribe(res => {
				this.foods = res['branded'];
			});

			this.icon = true;
			this.hide = false;
		} else {
			this.icon = false;
			this.hide = true;
			this.grocerySelected = false;
		}
	}

	public text(event) {
		let k;
		k = event.charCode;  //         k = event.keyCode;  (Both can be used)
		return((k > 64 && k < 91) || (k > 96 && k < 123) || k === 8 || k === 32 );
	}

	public selectFood(v1, v2) {
		this.foods = [];
		this.grocery = v1 + '-' + v2;
		this.grocerySelected = true;
		this.icon = false;
		this.closed = true;
	}

	close() {
		this.closed = false;
		this.grocerySelected = false;
		this.grocery = '';
	}

	public search() {
		this.submit = ! this.submit;
	}
}
