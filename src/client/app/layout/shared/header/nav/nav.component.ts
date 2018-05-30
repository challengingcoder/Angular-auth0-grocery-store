import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { AuthService, API } from '../../../../core';
import { LowerCasePipe } from '@angular/common'

import {Http, Response, Headers, RequestOptions} from '@angular/http';

@Component({
	moduleId: module.id,
	selector: 'nav-app',
	templateUrl: 'nav.component.html'
})
export class NavComponent implements OnInit {
	public lists = [];

	constructor(public router: Router, private AS: AuthService, private api: API, private http: Http) {
	}

	logOut() {
		this.AS.logout();
	}

	login() {
		this.AS.isAuthenticated();
	}

	ngOnInit() {
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
