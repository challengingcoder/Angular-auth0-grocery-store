import { Component, OnInit } from '@angular/core';

// SEO
import { Meta, Title } from '@angular/platform-browser';


@Component({
	moduleId: module.id,
	selector: 'search',
	templateUrl: 'search.component.html'
})

// CLASS
export class SearchComponent implements OnInit {

	constructor(meta: Meta, title: Title) {  
		title.setTitle('Find where your groceries are in the market - Grocery Finder');

	}

	ngOnInit() {

	}

}
