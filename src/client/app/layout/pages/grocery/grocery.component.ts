import { Component, OnInit } from '@angular/core';

// SEO
import { Meta, Title } from '@angular/platform-browser';
import { API, IDropdown } from '../../../core/index';

import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { LowerCasePipe } from '@angular/common'

// COMPONENT
@Component({
	moduleId: module.id,
	selector: 'grocery',
	templateUrl: 'grocery.component.html',
})

// CLASS
export class GroceryComponent implements OnInit {

	public lists = [];


	constructor(meta: Meta, title: Title, public api: API, private http: Http) {
		title.setTitle('All Groceries - Grocery Finder');

	}

	ngOnInit() {
		// If no default value in Status input, set filter to empty array
		this.list();
	}

	public list() {
		this.http.get('/assets/json/category.json').map((r: Response) => r.json()).subscribe(res => {
			this.lists = res['groceries']['categories'];
		});
	}

	private url(i) {
		return i['name'].toLowerCase().replace(/(?:( and )|(&)|(,)|(\s)|[/])+/g, '-');
	}
}
