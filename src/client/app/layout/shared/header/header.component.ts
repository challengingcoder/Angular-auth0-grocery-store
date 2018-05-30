import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { DomSanitizer } from '@angular/platform-browser';

// SERVICES
import {AuthService} from '../../../core/index';
import { Router } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'header-app',
	templateUrl: 'header.component.html'
})
export class HeaderComponent implements OnInit {
	load: boolean;
	profile: any;
	other: boolean;

	constructor(private AS: AuthService, public router: Router, public sanitizer: DomSanitizer) {
		if(
			router.url.indexOf('/') !== 0 || 
			router.url.indexOf('/groceries/') == 0  || 
			router.url.indexOf('/cart') == 0 ||
			router.url.indexOf('/checkout') == 0 ||
			router.url.indexOf('/confirmation') == 0
		){
			this.other = true;
		}
	}

	logOut() {
		this.AS.logout();
	}

	login() {
		return this.AS.isAuthenticated();
	}

	isUser(value: string): boolean {
		return /^\/user(\/|$)/.test(value);
	}

	photoURL(i) {
		return this.sanitizer.bypassSecurityTrustResourceUrl(i);
	}

	ngOnInit() {
		if (this.login()) {
			this.AS.getProfile((err, profile) => {
				this.profile = profile;
				this.load = true;
			});
		}

	}

}
