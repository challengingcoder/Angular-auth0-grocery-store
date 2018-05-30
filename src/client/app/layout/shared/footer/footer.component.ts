import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Rx';

// SERVICES
import { Router } from '@angular/router';


@Component({
	moduleId: module.id,
	selector: 'footer-app',
	templateUrl: 'footer.component.html'
})
export class FooterComponent implements OnInit {

	constructor(public router: Router) {
	}

	ngOnInit() {}

	isUser(value: string): boolean {
		return /^\/user(\/|$)/.test(value);
	}
}
