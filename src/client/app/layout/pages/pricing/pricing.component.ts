import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Title } from '@angular/platform-browser';

@Component({
	moduleId: module.id,
	selector: 'pricing',
	templateUrl: 'pricing.component.html'
})
export class PricingComponent implements OnInit {

	constructor(title: Title, ) {
		title.setTitle('Pricing - Grceri');
	}

	ngOnInit() {

	}
}
