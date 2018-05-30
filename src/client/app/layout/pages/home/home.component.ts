import { Component, OnInit } from '@angular/core';

// SEO
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { API } from '../../../core/index'
import {Http, Response, Headers, RequestOptions} from '@angular/http';

// COMPONENT
@Component({
	moduleId: module.id,
	selector: 'home-app',
	templateUrl: 'home.component.html',
})

// CLASS
export class HomeComponent implements OnInit {

	category = [];

	constructor(meta: Meta, title: Title, private api: API, public router: Router, private http: Http) {
		title.setTitle('Find your favorite groceries - Grceri');
		meta.addTags([
			{ name: 'description', content: 'Making it simple and easy to find your grocery items without the hassle.' },
			{ name: 'keywords', content: 'grocery finder, nearest supermarket, supermarket near me, grocery search, groceries, grocery store near me, grocery store' }
		]);

	}

	ngOnInit() {

		this.list();
	}

	public list() {
		this.http.get('/assets/json/category.json').map((r: Response) => r.json()).subscribe(res => {
			this.category = res['groceries']['categories'];
			console.log(this.category);
		});
	}

	private url(i) {
		return i['name'].toLowerCase().replace(/(?:( and )|(&)|(,)|(\s)|[/])+/g, '-');
	}

}
