import { Component, OnInit } from '@angular/core';

// SEO
import { Meta, Title } from '@angular/platform-browser';


@Component({
	moduleId: module.id,
	selector: 'help',
	templateUrl: 'help.component.html'
})

// CLASS
export class HelpComponent implements OnInit {

	constructor(meta: Meta, title: Title) {  
		title.setTitle('Find where your groceries are in the market - Grocery Finder');

	}

	ngOnInit() {

	}

}
